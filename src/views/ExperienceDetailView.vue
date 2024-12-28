<script setup lang="ts">
import { computed } from "vue";
import expData from "../data/experience.json";
import projectData from "../data/projects.json";
import { RouterLink, useRoute } from 'vue-router';
import type { Experience } from "@/types/experience";
import type { Projects } from "@/types/projects";

const route = useRoute();
const experience = expData[route.params.slug as keyof typeof expData] as Experience;

const projects = computed(() => {
    const returnable: Projects = {};
    for (const k in projectData) {
        const project = (projectData as Projects)[k];
        if (project.with === route.params.slug) {
            returnable[k] = project;
        }
    }
    return returnable;
});
</script>

<template>
    <main class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
            <div class="font-semibold text-2xl">Experience /</div>
            <h2 class="text-4xl font-bold underline underline-offset-4">{{ experience.name }}<br>{{ experience.position
                }}</h2>
        </div>

        <div class="flex flex-wrap gap-2">
            <div v-for="tag in experience.tags" class="px-3 py-2 bg-black/40 rounded backdrop-blur-sm">{{ tag }}</div>
        </div>

        <p v-html="experience.body"></p>

        <div v-if="Object.values(projects).length > 0" class="flex flex-col gap-2">
            <h3 class="text-2xl font-semibold">Projects associated with {{ experience.name }}:</h3>
            <RouterLink v-for="(project, k) in projects" :to="`/projects/${k}`" class="px-3 py-2 bg-black/40 rounded flex flex-col hover:bg-white hover:text-black no-underline transition-colors backdrop-blur-sm">
                <div class="text-xl font-semibold">{{ project.name }}</div>
                <p>{{ project.preview }}</p>
            </RouterLink>
        </div>

        <div v-if="experience.img && experience.img.length > 0" class="flex flex-wrap gap-4">
            <img v-for="img in experience.img" :src="`/img/experience/${route.params.slug}/${img}`" :alt="experience.name" class="rounded shadow h-auto max-h-96 w-[24rem] max-w-full object-cover" />
        </div>
    </main>
</template>
