<template lang="pug">
extends FormGroup
  block input
    label.switch.switch-success
      input.switch-input(type="checkbox", v-model="inputValue")
      span.switch-slider
</template>

<script>
import FormGroup from "./FormGroup.vue";

export default {
  name: "ToggleFormGroup",

  extends: FormGroup,
};
</script>

<style scoped>
</style>
