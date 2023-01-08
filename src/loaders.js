export const appLoader = async () => {
    const response = await fetch("https://express-react-back-080123.onrender.com/")
    const data = await response.json()
    return data
}