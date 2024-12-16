<script setup>
import { ref } from "vue"
import axios from "axios"
import { useUserStore } from "@/stores/user"
import { useRouter } from "vue-router"

const authStore = useUserStore()
const router = useRouter()

const username = ref("")
const password = ref("")
const homelocation = ref("")
const isRegistering = ref(true)

const authenticateUser = async e => {
    e.preventDefault()
    const body = {
        username: username.value,
        homelocation: homelocation.value,
        password: password.value
    }
    console.log(body)

    const res = await axios.post(
        `http://localhost:4545/api/${
            isRegistering.value ? "register" : "login"
        }`,
        body
    )
    authStore.updateUserInfo(
        res.data.userId,
        res.data.username,
        res.data.homeLocation
    )
    router.push("/")
}
</script>

<template>
    <main>
        <button @click="() => (isRegistering = !isRegistering)">
            Need to {{ isRegistering ? "Login" : "Register" }}?
        </button>
        <form @submit="authenticateUser">
            <input placeholder="username" v-model="username" />
            <input placeholder="password" v-model="password" />
            <input
                v-if="isRegistering"
                placeholder="home location"
                v-model="homelocation"
            />
            <button>{{ isRegistering ? "Register" : "Login" }}</button>
        </form>
    </main>
</template>
