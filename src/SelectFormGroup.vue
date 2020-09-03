<!--
  - Copyright (c) 2020.
  - Filippo Bisconcin
  - filippo.bisconcin@gmail.com
  -->

<template lang="pug">
extends FormGroup.pug
  block input
    vSelect(
      v-bind:name="input_name",
      v-bind:id="input_name",
      v-model="inputValue",
      autofocus="",
      :required="required",
      v-bind:class="{ 'is-invalid': hasErrors() }",
      :options="getItems()",
      label="name",
      :placeholder="getPlaceHolder()",
      :clearable="clearable"
    )
</template>

<script>
import Vue from "vue";
import vSelect from "vue-select";
import FormGroup from "./FormGroup.vue";

Vue.component("vSelect", vSelect);

export default {
  extends: FormGroup,

  name: "SelectFormGroup",

  props: {
    items: {
      required: false,
      type: Array,
    },
    placeholder: {
      type: String,
      default: "Seleziona",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getItems() {
      return this.items;
    },
    getPlaceHolder() {
      return this.placeholder;
    },
  },
};
</script>

<style>
@import "~vue-select/dist/vue-select.css";
</style>
