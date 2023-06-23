<script setup>
    import { useProjectStore } from '../stores/ProjectStore'
    import { useRoute } from 'vue-router'
    import { ref, computed } from 'vue'
    import ProjectForm from '@/components/Form/ProjectForm.vue'

    const projectStore = useProjectStore()
    const route = useRoute()

    //This keeps the UI updated when the object changes in the store after saving
    const project = computed(()=>projectStore.getProjectById(route.params.id))

    const showEditProject = ref(false)
    const editing = ref(Object.assign({}, projectStore.getProjectById(route.params.id)))
</script>

<template>
    <div class="main">
        <div v-if="project" :project="project">
            <h2>Project Details</h2>
            <div>
                <div class="project-name">{{ project.name }} (Rating: {{ project.rating }})</div> 
            </div>
            <div style="margin-top: 1em">
                <button type="button" @click="showEditProject=true">Edit</button>
                <button type="button" @click="$router.push('/')">Main</button>
            </div>

            <ProjectForm
                @hideForm="showEditProject=false" 
                :editing="editing"
                :showAddEntry="showEditProject" />
        </div>
    </div>
</template>

<style scoped>
button { width: 60px; margin-right: 1em; }
</style>