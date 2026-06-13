<template>
    <div class="flex min-h-dvh gap-x-full bg-dark text-light">
        <header
            class="sticky top-0 flex h-screen w-1/3 flex-col justify-center p-full pr-0 text-6xl font-bold"
        >
            <h1>Derek Bond</h1>
        </header>

        <div class="flex w-2/3 flex-col p-full pt-0 pl-0">
            <div class="sticky top-0 z-10 w-full">
                <div class="h-gap-full w-full bg-dark"></div>
                <nav class="h-16 w-full border bg-dark"></nav>
                <div class="h-gap-full w-full bg-linear-to-t from-transparent to-dark"></div>
            </div>

            <main class="flex flex-col">
                <template v-for="i in 40" :key="i">
                    <div
                        class="w-full border p-full text-lg font-bold transition-[border-radius] duration-100 ease-in-out not-first:-mt-px hover:rounded-on"
                    >
                        {{ i }} lorem ipsum sit amet
                    </div>
                </template>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts"></script>
