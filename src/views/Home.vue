<script setup>
import axios from "axios"
import { ref, computed } from "vue"
import DestCard from "@/components/DestCard.vue"

const destinations = ref([])
const searchTerm = ref("")

const fetchDestinations = async () => {
    const res = await axios.get("http://localhost:4545/api/destinations")
    console.log("res", res)
    destinations.value = res.data
}

fetchDestinations()

// const handleSearch = searchTerm => {
//     destinations.value = destinations.value.filter(e =>
//         e.destName.toLowerCase().includes(searchTerm.toLowerCase())
//     )
// }

const filteredDestinations = computed(() =>
    destinations.value.filter(e =>
        e.destName.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
)
console.log(filteredDestinations)
</script>

<template>
    <h1>Possible destinations</h1>
    <input v-model="searchTerm" />
    <main>
        <div>
            <DestCard
                v-for="dest in filteredDestinations"
                :country="dest.country"
                :desc="dest.desc"
                :id="dest.id"
                :imgURL="dest.imgURL"
                :destName="dest.destName"
                :key="dest.id"
            />
        </div>
    </main>
</template>
