
async function getStockInformation(date) {
  return await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
  .then((res) =>  {
      return res.json()
  })
  .then((res) =>  {

      console.log(res.data[0])
      if (
          !res.data.length
      ) {
          return {}
      }
      else {
          return res.data[0]
      }
  })
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
}
//getStockInformation('')
console.log(getStockInformation('5-January-2000'))
