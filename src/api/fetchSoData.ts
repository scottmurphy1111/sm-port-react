const USER_ID = '5711949'

export const fetchSoData = async () => {
  try {
    const response = await fetch(
      `https://api.stackexchange.com/2.2/users/${USER_ID}/?site=stackoverflow`
    )
    const soData = await response.json()

    return soData
  } catch (error) {
    console.error('Couldnt return Stack Overflow User Data', error)
  }
}
