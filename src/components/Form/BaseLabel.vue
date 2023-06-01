<template>
    <label v-bind="$attrs" class="label">
        <slot />
    </label>
</template>

<style scoped>
    label { display: block; font-weight: 600; }
</style>