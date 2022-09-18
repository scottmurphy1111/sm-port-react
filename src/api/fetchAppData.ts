import data from '../data/data.json'

const CF_DATA_URL = 'https://d18gqb4iyj0dp2.cloudfront.net/data.json'

export const fetchAppData = async () => {
  try {
    if (process.env.NODE_ENV === 'development') {
      const response = Promise.resolve(data)
      const payload = await response
      return payload
    }

    const response = await fetch(CF_DATA_URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': ' application/json',
      },
    })

    const appData = await response.json()

    return appData
  } catch (error) {
    console.warn("Couldn't return App Data, using backup data", error)
  }
}
