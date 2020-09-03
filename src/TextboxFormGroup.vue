<template lang="pug">
  extends FormGroup.pug
  block input
    input.form-control.form-control-sm(
      type="text",
      v-bind:id="input_name",
      v-bind:name="input_name",
      v-bind:type="input_type",
      v-bind:class="{ 'is-invalid': hasErrors() }",
      :placeholder="placeholderCalculated",
      v-model="inputValue",
      autofocus,
      v-on:keyup="countdown",
      :maxlength="maxlength",
      v-on:input="$emit('input', $event.target.value)",
      :required="required",
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
  name: "TextboxFormGroup",

  extends: FormGroup,

  props: {
    input_classes: {
      required: false,
      type: Array,
      default: function () {
        return ["form-control", "form-control-sm"];
      },
    },
    input_type: {
      type: String,
      required: false,
      default: "text",
    },
    maxlength: {
      type: Number,
      required: false,
      default: 255,
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
      // same as TextareaFormGroup
      if (this.inputValue) {
        this.remainingCount = this.maxlength - this.inputValue.length;
        this.length_error = this.remainingCount < 0;
        this.show_count = this.inputValue.length > this.maxlength * 0.6; // 60% of max length
      } else {
        this.show_count = false;
      }
    },
  },
};
</script>
