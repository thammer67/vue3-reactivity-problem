<script setup>
import { useProjectStore } from '../stores/ProjectStore'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import ProjectForm from '@/components/Form/ProjectForm.vue'

const projectStore = useProjectStore()
const route = useRoute()
const id = route.params.id
const project = projectStore.getProjectById(id)

const showEditProject = ref(false)
const editing = ref(false)

const editProject = (id)=> {
    editing.value = id
    showEditProject.value = true
}
</script>

<template>
    <div class="main">
        <div v-if="project" :project="project">
            <h2>Project Details</h2>
            <div>
                <div class="project-name">{{ project.project }}</div> 
            </div>
            <div style="margin-top: 1em">
                <button type="button" @click="editProject(project.id)">Edit</button>
            </div>

            <ProjectForm
                @hideForm="showEditProject=false" 
                :project="project"
                :editing="editing"
                :showAddEntry="showEditProject" />
        </div>
    </div>
</template>