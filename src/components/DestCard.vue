<script setup>
import { defineProps } from "vue"

const props = defineProps(["country", "desc", "id", "imgURL", "destName"])

const location = props.destName + ", " + props.country
</script>

<template>
    <div class="dest-card">
        <h1>{{ location }}</h1>
        <!-- <p>{{ country }}</p> -->
        <p>{{ desc }}</p>
        <img :src="imgURL" />
    </div>
</template>

<style>
.dest-card {
    border: solid 1px black;
}

.dest-card img {
    width: 300px;
}
</style>
