<script setup lang="ts">
import { RouterLink } from "vue-router";
import projectData from "../data/projects.json";
</script>

<template>
    <main class="flex flex-col gap-4">
        <h2 class="text-4xl font-bold underline underline-offset-4">Projects</h2>

        <RouterLink v-for="(experience, key) in projectData" :to="'/projects/' + key" class="group flex flex-col gap-3 p-4 bg-black/40 rounded backdrop-blur-sm hover:bg-white hover:text-black transition-colors no-underline">
            <div class="flex flex-col font-semibold">
                <h3 class="text-2xl">{{ experience.name }}</h3>
                <div class="text-xl">{{ experience.involvement }}</div>
            </div>
            <div class="flex flex-wrap gap-2">
                <div v-for="tag in experience.tags" class="text-sm px-3 py-1 bg-black/60 rounded group-hover:bg-black/80 group-hover:text-white transition-colors">{{ tag }}</div> 
            </div>
            <p>{{ experience.preview }}</p>
        </RouterLink>

    </main>
</template>
