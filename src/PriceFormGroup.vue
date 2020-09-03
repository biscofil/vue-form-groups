<template lang="pug">
  extends FormGroup.pug
  block input
    .input-group.input-group-sm.mb-3
      .input-group-prepend(v-bind:class="{ 'is-invalid': hasErrors() }")
        span.input-group-text(v-bind:id="'_' + input_name")
          | &euro;
      input.form-control.form-control-sm(
        :aria-label="label",
        :aria-describedby="'_' + input_name",
        v-bind:name="input_name",
        v-bind:id="input_name",
        type="number",
        min="0",
        step=".01",
        v-model="inputValue",
        :placeholder="placeholderCalculated",
        v-bind:class="{ 'is-invalid': hasErrors() }",
        :required="required"
      )
</template>

<script>
import FormGroup from "./FormGroup.vue";

export default {
  extends: FormGroup,

  name: "PriceFormGroup",

  mounted() {
    this.inputValue = Number(this.value) / 100;
  },

  methods: {
    onValueChanged() {
      this.inputValue = Number(this.value) / 100;
    },

    onInputValueChanged() {
      this.$emit("input", Number(this.inputValue) * 100);
    },
  },
};
</script>

<style scoped>
</style>
