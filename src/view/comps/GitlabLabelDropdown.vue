<script setup>
import GitlabPrio from './GitlabPrio.vue'
import { ref, computed } from 'vue'
const props = defineProps({
  prefix: String,
  options: Array,
  modelValue: null,
});
const emits = defineEmits([
  'update:modelValue',
]);

const selected = computed({
  get() {
    const option = props.options.find(opt => opt.value == props.modelValue);
    return option;
  },
  set(value) {
    emits('update:modelValue', value?.value ?? null);
  },
});
</script>

<template>
  <Dropdown :options="options" v-model="selected" :filterFields="[ 'value' ]">
    <template #value="{ value, placeholder }">
      <GitlabPrio v-if="value" :prefix="prefix" :color="value.color ?? null" :value="value.value ?? null" />
      <span v-else>{{ $t(placeholder ?? 'chooseLabel') }}</span>
    </template>
    <template class="option" #option="{ option }">
      <GitlabPrio :prefix="prefix" :color="option.color" :value="option.value" />
      <span class="option-desc">{{ option.description }}</span>
    </template>
  </Dropdown>
</template>

<style scoped>

.option-desc {
  overflow: hidden
}
</style>