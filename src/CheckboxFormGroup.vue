<template lang="pug">
  extends FormGroup.pug
  block input
    input.form-check-input(
      v-bind:id="input_name",
      v-bind:name="input_name",
      type="checkbox",
      autofocus="",
      :required="required",
      :checked="inputValue",
      @change="onCheckboxChange",
      v-bind:class="{ 'is-invalid': hasErrors() }"
    )
    label.form-check-label.text-md-right(v-bind:for="input_name")
      | {{ label }}
</template>

<script>
import FormGroup from "./FormGroup.vue";

export default {
  extends: FormGroup,

  name: "CheckboxFormGroup",

  methods: {
    onCheckboxChange() {
      this.inputValue = !this.inputValue;
    },
  },
};
</script>

<style scoped>
@media (min-width: 768px) {
  .form-check-label {
    text-align: left !important;
  }
}
</style>
