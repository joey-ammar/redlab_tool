<template>
  <form id="form">
    <slot></slot>
  </form>
</template>

<style lang="scss">
@import '@/sass/variables.scss';
#form {
  margin: 2rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .inside {
    @include width-margin;
  }
  .p-component {
    width: 100%;
  }
}
</style>