<template lang="pug">
  extends FormGroup.pug
  block input
    textarea.form-control(
      v-bind:name="input_name",
      v-bind:id="input_name",
      v-model="inputValue",
      autofocus="",
      :placeholder="placeholderCalculated",
      :required="required",
      v-on:keyup="countdown",
      :maxlength="maxlength",
      v-bind:class="{ 'is-invalid': hasErrors() }",
      :autocomplete="autocomplete"
    )

    p.text-right.text-small(
      v-if="show_count",
      v-bind:class="{ 'text-danger': length_error }"
    ) {{ remainingCount }} caratteri rimanenti
</template>

<script>
import FormGroup from "./FormGroup.vue";

export default {
  extends: FormGroup,

  name: "TextareaFormGroup",

  props: {
    maxlength: {
      type: Number,
      required: false,
      default: 1000,
    },
  },

  data() {
    return {
      remainingCount: this.maxlength,
      length_error: false,
      show_count: false,
    };
  },

  methods: {
    countdown: function () {
      // same as TextboxFormGroup
      if (this.inputValue) {
        this.remainingCount = this.maxlength - this.inputValue.length;
        this.length_error = this.remainingCount < 0;
        this.show_count = this.inputValue.length > this.maxlength * 0.6;
      } else {
        this.show_count = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
