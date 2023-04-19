
// setting data localestorage
export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data )
    } catch (error) {
        console.log('Error saving data..')
    }
}

// Getting data localstorage
export const getItem = (key) => {
    try {
      return  localStorage.getItem(key)
    } catch (error) {
        console.log("error getting data")
    }
}
// Remove Item LocalStorage
export const removeItem = (key) => {
    try{
      return  localStorage.removeItem(key)
    } catch(error){
        console.log('Error removing data')
    }
}