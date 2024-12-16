import { ref, computed } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

// export const useUserStore = defineStore("counter", () => {
//     const userId = ref(null)
//     const username = ref(null)
//     const homeLocation = ref(null)
//     function updateUserInfo(newUserId, newUsername, newHomeLocation) {
//         userId.value = newUserId
//         username.value = newUsername
//         homeLocation.value = newHomeLocation
//     }

//     return { userId, username, homeLocation, updateUserInfo }
// })

export const useUserStore = defineStore("counter", {
    state: () => ({
        userId: null,
        username: null,
        homeLocation: null
    }),
    getters: () => ({
        getUserInfo: state => state
    }),
    actions: {
        updateUserInfo(newUserId, newUsername, newHomeLocation) {
            this.userId = newUserId
            this.newUsername = newUsername
            this.newHomeLocation = newHomeLocation

            localStorage.setItem("userId", newUserId)
            localStorage.setItem("username", newUsername)
            localStorage.setItem("homeLocation", newHomeLocation)
        },
        async checkUser() {
            const savedId = localStorage.getItem("userId")
            const savedUsername = localStorage.getItem("username")
            const savedHomeLocation = localStorage.getItem("homeLocation")
            if (savedId) {
                this.updateUserInfo(savedId, savedUsername, savedHomeLocation)
                return true
            } else {
                return false
                // const res = await axios.get(`http://localhost:4545/api/user`)
                // console.log(res)
                // if (res.data.userId) {
                //     const { userId, username, homeLocation } = res.data
                //     this.updateUserInfo(userId, username, homeLocation)
                //     return true
                // } else {
                //     return false
                // }
            }
        }
    }
})
