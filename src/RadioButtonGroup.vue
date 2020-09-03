<template lang="pug">
extends FormGroup.pug
  block input
    .btn-toolbar(role="toolbar", aria-label="Toolbar with button groups")
      .btn-group.mr-2(role="group", aria-label="First group")
        button.btn(
          type="button",
          v-for="(id, name) in options",
          v-on:click="inputValue = id",
          v-bind:class="{ 'btn-primary': inputValue === id, 'btn-secondary': inputValue !== id }"
        )
          | {{ name }}
</template>

<script>
import FormGroup from "./FormGroup.vue";

export default {
  name: "RadioButtonGroup",

  extends: FormGroup,

  props: {
    options: {
      type: Object,
      required: true,
    },
  },
};
</script>
