import data from '../data/data.json'

export const fetchAppData = () => {
  try {
    const response = Promise.resolve(data)
    const payload = response.then(data => data)
    return payload
  } catch (error) {
    throw new Error("Couldn't return App Data")
  }
}
