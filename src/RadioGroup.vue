<template lang="pug">
extends FormGroup.pug
  block input
    div
      .form-check(v-for="(id, name) in options")
        input.form-check-input(
          type="radio",
          :name="input_name + '_' + id",
          :id="input_name + '_' + id",
          :value="id",
          v-model="inputValue"
        )
        label.form-check-label(:for="input_name + '_' + id")
          | {{ name }}
</template>

<script>
import FormGroup from "./FormGroup.vue";

export default {
  name: "RadioGroup",

  extends: FormGroup,

  props: {
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>
