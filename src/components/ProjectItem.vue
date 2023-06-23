<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <li @click="router.push(`/project/${project.id}`)">{{ project.name }} ({{ project.rating }})</li>
</template>