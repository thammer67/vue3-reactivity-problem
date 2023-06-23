<template>
    <div class="input-container">
        <BaseLabel :for="id" :class="labelClasses">{{ label }}</BaseLabel>
        <BaseInput 
            @update:modelValue="$emit('update:modelValue', $event)"
            :modelValue="modelValue" 
            :id="id"
            :name="name"
            :class="inputClasses" 
            :type="type" 
            :placeholder="placeholder" 
        />
    </div>
</template>

<script setup>
import BaseInput from '@/components/Form/BaseInput.vue'
import BaseLabel from '@/components/Form/BaseLabel.vue'
import { uid } from 'uid'

// For accessibility we want to assign a unique id to the input field 
// then set the 'for' attribute on the label to the same id
// Note: Chrome 113 complains though. Not sure why
//    "Incorrect use of <label for=FORM_ELEMENT>""
const id = "input-"+uid()

// See notes in BaseInput.vue regarding autoamtic emit for 'modelValue'
// const emit = defineEmits(["update:modelValue"])

defineProps({
    type: String,
    id: String,
    name: String, 
    label: String,
    placeholder: String,
    labelClasses: String,
    inputClasses: String,
    modelValue: [String, Number]
})
</script>

<style scoped>
.input-container { 
    position: relative;
    margin-bottom: 1em;
}
</style>