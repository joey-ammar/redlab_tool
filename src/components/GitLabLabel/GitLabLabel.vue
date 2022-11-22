<script setup>
    const props = defineProps({
        prefix:null,
    })
</script>
<template>
    <div class="bg">
        <span>{{props.prefix}}</span>
    </div>
</template>

<style scoped lang="scss">
@import '../../sass/variables.scss';
    span {
        font-size: 1.7rem;
    }
</style>