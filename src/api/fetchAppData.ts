import data from '../data/data.json'

export const fetchAppData = async () => {
  try {
    // const response = Promise.resolve(data)
    // const payload = response.then(data => data)
    // return payload
    const response = await fetch(
      'https://d18gqb4iyj0dp2.cloudfront.net/data.json',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': ' application/json',
        },
      }
    )
    console.log(response)
    const appData = await response.json()
    console.log(appData)
    return appData
  } catch (error) {
    console.warn("Couldn't return App Data, using backup data", error)
    const response = Promise.resolve(data)
    const payload = response.then(data => data)
    return payload
  }
}
