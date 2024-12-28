<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import "./components/anim-bg";
import { ref, watch } from 'vue';

const router = useRouter();
const content = ref<HTMLElement | null>(null);

watch(router.currentRoute, () => {
    window.scrollTo({ top: 0 });
    if (content.value) {
        content.value.scrollTo({ top: 0 });
    }
});
</script>

<template>
    <div
        class="text-[#F0FAF6] p-3 md:p-6 xl:pr-0 flex gap-6 xl:gap-16 flex-col xl:w-dvw xl:h-dvh xl:flex-row xl:items-center">
        <header
            class="xl:w-1/3 flex flex-col xl:items-end gap-3 xl:text-right -m-3 p-3 md:-m-6 md:p-6 bg-black/30 backdrop-blur-sm xl:m-0 xl:p-0 xl:bg-transparent xl:backdrop-blur-none">
            <h1 class="font-bold text-4xl xl:text-6xl">Derek Bond</h1>
            <p class="text-pretty text-sm xl:text-base">Freelance Software Engineer & Management Information Systems
                Graduate seeking full time programming
                opportunities.</p>
            <nav class="flex gap-2 flex-wrap xl:justify-end">
                <RouterLink to="/"
                    class="no-underline py-1.5 px-3 bg-black/50 rounded text-lg hover:shadow-lg hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                    About</RouterLink>
                <RouterLink to="/skills"
                    class="no-underline py-1.5 px-3 bg-black/50 rounded text-lg hover:shadow-lg hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                    Skills</RouterLink>
                <RouterLink to="/experience"
                    class="no-underline py-1.5 px-3 bg-black/50 rounded text-lg hover:shadow-lg hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                    Experience</RouterLink>
                <RouterLink to="/projects"
                    class="no-underline py-1.5 px-3 bg-black/50 rounded text-lg hover:shadow-lg hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                    Projects</RouterLink>
            </nav>
            <nav class="flex gap-2 flex-wrap xl:justify-end">
                <a href="https://www.linkedin.com/in/derek-bond-759b301b5/">LinkedIn</a>
                <a href="https://github.com/drB-dotjpg">Github</a>
            </nav>
        </header>

        <div class="xl:w-2/3 xl:h-dvh xl:overflow-y-auto relative" ref="content">
            <router-view v-slot="{ Component }">
                <transition>
                    <component :is="Component"
                        class="absolute xl:pr-6 py-6 flex flex-col min-h-full w-full justify-center" />
                </transition>
            </router-view>
        </div>
    </div>

    <div class="fixed top-0 left-0 w-screen h-screen -z-10 bg-[#232F2A] pointer-events-none">
        <anim-bg></anim-bg>
    </div>
</template>