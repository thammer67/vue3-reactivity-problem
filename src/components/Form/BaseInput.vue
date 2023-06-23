<script setup>
// This seems to be built-in to Vue by default
//defineEmits(['update:modelValue'])

// HUGE note there. 'modelValue' is the default prop used by Vue
// To use modelValue though, we MUST define it as a prop 
// BUT since it's the only prop and it is called 'modelValue' 
// it is automatically emitted on the 'input' event so we don't need to call defineEmits()
// NOR do we need to bind an emit on the input as that is apparently done for us by Vue. 
// I am still looking for documentation on this feature of Vue but it works

defineProps({
    modelValue: [ String, Number ],
    id: String
})
</script>

<template>
    <input
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        v-bind="$attrs"
        class="input-effect"
        :id="id"
    >
    <span class="focus-border"></span>
</template>

<style scoped>
input { width: 100%; }
.input-effect { border: 0; background: transparent; padding: 10px 0; border-bottom: 1px solid #ccc; }
.input-effect ~ .focus-border{position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; z-index: 99;}
.input-effect ~ .focus-border:before, 
.input-effect ~ .focus-border:after{content: ""; position: absolute; bottom: 0; left: 0; width: 0; height: 100%; background-color: #02ab21; transition: 0.4s;}
.input-effect ~ .focus-border:after{left: auto; right: 0;}
.input-effect:focus ~ .focus-border:before, 
.input-effect:focus ~ .focus-border:after{width: 50%; transition: 0.4s;}
</style>