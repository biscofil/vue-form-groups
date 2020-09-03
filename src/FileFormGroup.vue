<template lang="pug">
    extends FormGroup.pug
    block input
        input(
        ref="file_input",
        type="file",
        v-bind:name="input_name",
        v-bind:id="input_name",
        v-on:change="onChangeFileUpload()",
        autofocus="",
        :required="required",
        v-bind:class="{ 'is-invalid': hasErrors() }",
        v-bind:multiple="multiple"
        )
</template>

<script>
import FormGroup from "./FormGroup.vue";

export default {
  extends: FormGroup,

  name: "FileFormGroup",

  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    clearFiles() {
      this.$refs.file_input.value = "";
    },

    onChangeFileUpload() {
      this.$emit("file_selected", this.$refs.file_input.files);
    },
  },
};
</script>

<style scoped>
</style>
