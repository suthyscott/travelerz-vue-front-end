<script setup>
import { RouterLink, RouterView } from "vue-router"
</script>

<template>
    <header
        class="flex bg-slate-600 text-white h-[10vh] w-full justify-evenly items-center"
    >
        <h1>Welcome to Travelerz!</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/auth">Auth</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>
