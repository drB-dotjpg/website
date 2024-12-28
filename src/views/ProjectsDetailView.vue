<script setup lang="ts">
import projectData from "../data/projects.json";
import expData from "../data/experience.json";
import { RouterLink, useRoute } from 'vue-router';
import type { Project } from "@/types/projects";

const route = useRoute();
const project = projectData[route.params.slug as keyof typeof projectData] as Project;
const withExp = expData[project.with as keyof typeof expData];
</script>

<template>
    <main class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
            <div class="font-semibold text-2xl">Projects /</div>
            <h2 class="text-4xl font-bold underline underline-offset-4">{{ project.name }}<br>{{ project.involvement
                }}</h2>
        </div>

        <RouterLink v-if="project.with" class="px-3 py-2 flex flex-col bg-black/40 rounded backdrop-blur-sm hover:bg-white hover:text-black transition-colors no-underline" :to="'/experience/' + project.with">
            <div class="text-xl font-semibold">With {{ withExp.name }}</div>
            <div>{{ withExp.preview }}</div>
        </RouterLink>

        <div class="flex flex-wrap gap-2">
            <div v-for="tag in project.tags" class="px-3 py-2 bg-black/40 rounded backdrop-blur-sm">{{ tag }}</div>
        </div>

        <p v-html="project.body"></p>

        <div v-if="project.img && project.img.length > 0" class="flex flex-wrap gap-4">
            <img v-for="img in project.img" :src="`/img/projects/${route.params.slug}/${img}`" :alt="project.name" class="rounded shadow h-auto max-h-96 w-[24rem] max-w-full object-cover" />
        </div>
    </main>
</template>
