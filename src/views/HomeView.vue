<script setup>
import { useProjectStore } from '@/stores/ProjectStore.js'
import { ref, reactive, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import ProjectItem from '@/components/ProjectItem.vue'

const ProjectForm = defineAsyncComponent(()=>import('../components/Form/ProjectForm.vue'))

const projectStore = useProjectStore()
const showAddEntry = ref(false)

const project = reactive({
    id: null,
    project: ""
})

const { projectList } = storeToRefs(projectStore)

projectStore.getProjects()

</script>

<template>
    <div class="main">
        <h1 class="header">Home View
            <div>
                <button style="margin-left: 1em; padding: 0 18px;" @click="showAddEntry=!showAddEntry">+</button>
            </div>
        </h1>

        <ProjectForm :project="project" @hideForm="showAddEntry=false" :showAddEntry="showAddEntry"/>

        <ProjectItem v-for="(project) in projectList" :project="project" />
    </div>
</template>
