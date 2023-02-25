import axios from "axios";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


//Auth
export const LoginingAPI = async (login, password) => {
    const auth = getAuth()
    try {
        const data = await signInWithEmailAndPassword(auth, login, password)
        return data
    } catch (error) {
        return error.code
    }
}
export const AuthAPI = async () => {
    const auth = getAuth()
    let user = new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) { resolve(user) }
            else { reject() }
        })
    })
    return user.then((user) => user).catch(() => false)
}
export const LogoutAPI = async () => {
    const auth = getAuth()
    await signOut(auth)
}


//Hotel
export const getHotelsAPI = async (location, date, countDays) => {
    const msDate = Date.now(date)
    const dateEntry = new Date(msDate).toISOString().slice(0, 10)
    const dateCheckOut = new Date(+msDate + (+countDays * 86400000)).toISOString().slice(0, 10)
    const url = `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${dateEntry}&checkOut=${dateCheckOut}&limit=10`
    try {
        return await axios.get(url)
    } catch (error) {
        return error.response.data.message
    }

}

