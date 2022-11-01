<script setup></script>
<template>
   <div class="main">
        <div class="inside">
            <h1>Settings</h1>
        </div>
   </div>
</template>
<style scoped lang="scss">
    @import '../../sass/variables.scss';

    .main {
        background-color: $background-color;
        .inside {
            @include width-margin;
        }
    }

</style>