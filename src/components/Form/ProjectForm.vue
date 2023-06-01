<script setup>
import { ref, toRef, reactive } from "vue"
import { useProjectStore } from '@/stores/ProjectStore.js'
import Input from './Input.vue'

const projectStore = useProjectStore() 
const showAddType = ref(false)

//Capture 'showAddEntry' prop from parent component
const props = defineProps(['showAddEntry', 'editing', 'project'])

//Copy prop values for the form
const projName = toRef(props.project.project)
const projId = toRef(props.project.id)

//new/edited values are stored on this reactive object
const formState = reactive({
    invalid: false,
    errMsg:  ""
})

const saveProject = () => {
    formState.invalid = false

    if(projId.value) {
        console.log(`Update existing project ${projId.value}`)

        projectStore.updateProject({
            id: projId.value,
            project: projName.value
        })
        .then(()=> {
            console.log("save was successful!")
            showAddType.value = false
            formState.invalid = false
            formState.errMsg = ""
            emit('hideForm')
        })
        .catch(err=>console.log("Error: ", err))
    } else {
        console.log(`Create new project`)
        //New Project
        projectStore.createProject({
            project: projName.value,
        })
        .then(()=> {
            showAddType.value = false
            formState.invalid = false
            formState.errMsg = ""
            emit('hideForm')
        })
    }
}

const hideForm = ()=> {
    formState.invalid = false
    showAddType.value=false
    emit('hideForm')
}

//Define emit event up to the parent that hides the form
const emit = defineEmits(['hideForm'])

</script>

<template>
    <div class="addform" :class="{ show: props.showAddEntry }">
        <h1 v-if="editing" class="title">Edit Project</h1>
        <h1 v-else class="title">Add New Project</h1>

        <div class="input-wrap" :class="{ 'input-err' : formState.invalid }">
            <Input 
                @input="projName = $event.target.value"
                type="text" 
                placeholder="Enter project name" 
                :value="projName"
            />
           
            <div class="entry-submit">
                <button v-if="editing" @click="saveProject">Save</button>
                <button v-else @click="saveProject">Create Project</button>
                <button @click="hideForm">Cancel</button>
            </div>
        </div>
        <p v-show="formState.invalid" class="err-msg">{{ formState.errMsg }}</p>
    </div>
</template>

