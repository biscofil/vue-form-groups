<template lang="pug">
  extends FormGroup.pug
  block input
    InputMask.form-control.form-control-sm(
      v-bind:id="input_name",
      v-bind:name="input_name",
      v-model="inputValue",
      :mask="mask",
      autofocus="",
      :required="required",
      :placeholder="placeholderCalculated",
      v-bind:class="{ 'is-invalid': hasErrors() }"
    )
</template>

<script>
import InputMask from "vue-input-mask";
import FormGroup from "./FormGroup.vue";

export default {
  name: "MaskedInputFormGroup",

  extends: FormGroup,

  props: {
    mask: {
      type: String,
      required: true,
    },
  },

  components: {
    InputMask,
  },
};
</script>
