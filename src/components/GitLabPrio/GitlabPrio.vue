<script setup>
    const props = defineProps({
        color: '',
        value: null,
        number: null
    })
</script>

<template>
   <div class="bg" :style="{backgroundColor: props.color}">
       <span class="prio">{{props.value}}</span>
       <span class="num">{{props.number}}</span>
   </div>
</template>

<style scoped lang="scss">

.bg {
    display: inline-block;
    border-radius: 1rem;
    color: white;
    font-weight: 800;
    .prio {
        padding: 1rem;
        border-radius: 1rem;
    }
    .num {
        padding: 1rem;
        border-left: 1px solid white;
        border-radius: 1rem;
    }
}

</style>