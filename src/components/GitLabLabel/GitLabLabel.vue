<script setup>
    const props = defineProps({
        prefix:null,
    })
</script>
<template>
    <div class="bg">
        <span class="prio">{{props.prefix}}</span>
    </div>
</template>

<style scoped lang="scss">
@import '../../sass/variables.scss';

</style>