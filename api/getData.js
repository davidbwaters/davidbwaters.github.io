
import { config } from './config.js'
import fetch from 'node-fetch'

let types = ['hero', 'home'];
let data = {}

async function getImage(i) {

  let id = i.asset._ref
  let idUrl = `https://${ config.projectId}.api.sanity.io/v2021-10-21/data/query/${config.dataset }?query=${encodeURIComponent(`*[_id == "${id}"]`)}`;

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
          for await(let key1 of Object.keys(out)) {
            if (out[key1] instanceof Object && !(out[key1] instanceof Array)) {
              if (out[key1].asset) {
                out[key1] = await getImage(out[key1])
              }
              else {
                for await(let key2 of Object.keys(out[key1])) {
                  let a = await getImage(out[key1][key2])
                  out[key1][key2] = a
                }
              }
            }

            if ((out[key1] instanceof Array)) {

              let a = await getImageList(out[key1])
              console.log(a)
              if (a) {
                out[key1] = a
              }

            }
          }

          console.log(out)
        })()
      data[type] = out
    })

})




