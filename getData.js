
import { config } from './api/config.js'
import fetch from 'node-fetch'
import fs from 'fs'

let types = ['hero', 'home', 'Work', 'Skills'];
let data = {}

async function getImage(i) {

  let id = i.asset._ref
  let idUrl = `https://${config.projectId}.api.sanity.io/v2021-10-21/data/query/${config.dataset }?query=${encodeURIComponent(`*[_id == "${id}"]`)}`;

  return fetch(idUrl)
    .then((res) => res.json())
    .then(({ result }) => {
      return result[0].url
    })

}

async function getImageList (i) {
  let a = []
  let isImageArray = false
  for await (let item of i) {
    if (item.asset) {
      isImageArray = true

      let j =  await getImage(item)
      a = [...a, j]

    }
  }
  if (isImageArray) {
    return a
  }

}

types.forEach((type) => {
  // Compose the URL for your project's endpoint and add the query
  let url = `https://${ config.projectId}.api.sanity.io/v2021-10-21/data/query/${config.dataset}?query=${encodeURIComponent(`*[_type == "${type}"]`)}`;

  if (type === 'Work' || type === 'Skills') {
    url = `https://${config.projectId}.api.sanity.io/v2021-10-21/data/query/${config.dataset}?query=${encodeURIComponent(`*[_type == "${type}"]|order(orderRank)`)}`;
  }
  // fetch the content
  fetch(url)
    .then((res) => res.json())
    .then(({ result }) => {
      let out

      if (result.length === 1) {
        out = result[0]
      }
      else {
        out = result
      }

      (
        async () => {
          if (!(out instanceof Array)) {
            for await(let key1 of Object.keys(out)) {
              if (out[key1] instanceof Object && !(out[key1] instanceof Array)) {

                if (out[key1].asset) {
                  out[key1] = await getImage(out[key1])
                }

                else {
                  for await(let key2 of Object.keys(out[key1])) {
                    if (out[key1][key2].asset) {
                      let a = await getImage(out[key1][key2])
                      out[key1][key2] = a
                    }
                  }
                }

              }
              if ((out[key1] instanceof Array)) {
                //
                let a = await getImageList(out[key1])
                if (a) {
                  out[key1] = a
                }

              }
            }
          }
          else {
            let index = 0
            for await(let key of out) {

              for await(let key1 of Object.keys(key)) {
                //
                if (out[index][key1] instanceof Object && !(out[index][key1] instanceof Array)) {

                  if (out[index][key1].asset) {
                    out[index][key1] = await getImage(out[index][key1])
                  }

                  else {
                    for await(let key2 of Object.keys(key1)) {
                      if (key1[key2].asset) {
                        let a = await getImage(out[index][key1][key2])
                        out[index][key1][key2] = a
                      }
                    }
                  }

                }
                if ((out[index][key1] instanceof Array)) {
                  //console.log(key1)
                  let a = await getImageList(out[index][key1])
                  if (a) {
                    out[index][key1] = a
                  }

                }
              }
              index += 1

            }

          }

          //console.log(JSON.stringify(out, null, 2))
          data[type] = out
          console.log(JSON.stringify(data, null, 2))
          fs.writeFileSync('./src/_data/data.json', JSON.stringify(data, null, 2))
        })()

    })

})




