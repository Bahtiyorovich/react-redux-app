export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (err) {
        console.log('Error saving data !')
    }
}