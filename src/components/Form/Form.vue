<script setup>
const props = defineProps({
    label: { type: String, required: true },
})
</script>

<template>
    <div class="row">
        <b-form-group id="input-group-1" :label="props.label" label-for="input-1">
            <slot></slot>
        </b-form-group>
    </div>
</template>

<style lang="scss">
    @import '../../sass/variables.scss';
    label {
        margin-bottom: .5rem;
        font-weight: 500;
        color: #4B6587;
        font-size: 1.3rem;
    }

</style>