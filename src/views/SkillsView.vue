<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";
import skillData from "../data/skills.json";

function skillToText(skill: number) {
    switch(skill) {
        case 1: return 'Familiar';
        case 2: return 'Proficient';
        case 3: return 'Strong';
    }
}
</script>

<template>
    <main class="flex flex-col gap-8">
        <h2 class="text-4xl font-bold underline underline-offset-4">Skills</h2>

        <div v-for="category in skillData" class="flex flex-col gap-4">

            <h3 class="text-3xl font-semibold">{{ category.name }}</h3>

            <div class="flex gap-3 flex-wrap">

                <component v-for="skill in category.skills" :is="skill.url ? 'a' : 'div'" :href="skill.url" target="_blank" class="bg-black/40 rounded p-3 flex flex-col gap-2 w-full lg:w-56 backdrop-blur-sm transition-colors no-underline group" :class="{
                    'hover:bg-white hover:text-black': skill.url
                }">
                    
                    <div class="flex items-center gap-2 text-xl font-semibold">
                        <div>{{ skill.name }}</div>
                        <ExternalLink class="w-4 h-4" v-if="skill.url" />
                    </div>

                    <div class="w-full flex gap-1">
                        <div v-for="i in 3" class="flex-grow h-1 transition-colors" :class="{
                            'bg-green-300 ': i <= skill.level,
                            'group-hover:bg-black': i <= skill.level && skill.url,
                            'bg-white/10': i > skill.level,
                            'group-hover:bg-black/20': i > skill.level && skill.url
                        }"></div>
                    </div>

                    <div>{{ skillToText(skill.level) }}</div>
                </component>

            </div>

        </div>

    </main>
</template>
