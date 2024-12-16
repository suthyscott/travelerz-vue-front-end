<script setup>
import { ref } from "vue"
const emit = defineEmits(["search"])
</script>

<template>
    <input v-model="searchTerm" @input="$emit(search, searchTerm)" />
</template>
