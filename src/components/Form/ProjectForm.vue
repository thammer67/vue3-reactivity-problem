<script setup>
import { ref } from "vue"
import { useProjectStore } from '@/stores/ProjectStore.js'
import Input from './Input.vue'

const props = defineProps(['showAddEntry', 'editing'])
const emit = defineEmits(['hideForm'])

const projectStore = useProjectStore() 
const showAddType = ref(false)

const saveProject = () => {
    if(props.editing.id) {
        projectStore.updateProject({
            id: props.editing.id,
            name: props.editing.name,
            rating: props.editing.rating
        })
        .then(()=> {
            console.log("save was successful!")
            showAddType.value = false
            emit('hideForm')
        })
        .catch(err=>console.log("Error: ", err))
    } else {
        console.log(`Create new project`)
        //New Project
        projectStore.createProject({
            name: props.editing.name,
            rating: props.editing.rating
        })
        .then(()=> {
            showAddType.value = false
            emit('hideForm')
        })
    }
}
</script>

<template>
    <div class="addform" :class="{ show: props.showAddEntry }">
        <h1 v-if="editing.id" class="title">Edit Project</h1>
        <h1 v-else class="title">Add New Project</h1>

        <div class="input-wrap">
            <Input type="text" placeholder="Enter project name" v-model="editing.name" />
            <Input type="text" placeholder="Enter project rating" v-model="editing.rating" />
           
            <div class="entry-submit">
                <button v-if="editing" @click="saveProject">Save</button>
                <button v-else @click="saveProject">Create Project</button>
                <button @click="emit('hideForm')">Cancel</button>
            </div>
        </div>
    </div>
</template>

