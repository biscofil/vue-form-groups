<template lang="pug">
  extends FormGroup.pug
  block input
    VueTagsInput(
      v-bind:id="input_name",
      :tags="computed_tags",
      :placeholder="placeholder",
      v-model="new_tag",
      @tags-changed="onTagsChanged"
    )
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import FormGroup from "./FormGroup.vue";

export default {
  name: "TagsInput",

  extends: FormGroup,

  components: {
    VueTagsInput,
  },

  props: {
    value: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },

  computed: {
    // a computed getter
    computed_tags: function () {
      return this.tags.map(function (serial_number) {
        return { text: serial_number };
      });
    },
  },

  data() {
    return {
      new_tag: "",
      tags: this.value ? this.value : [],
    };
  },

  methods: {
    onTagsChanged(newTags) {
      this.tags = newTags.map(function (tag) {
        return tag.text;
      });
      this.$emit("input", this.tags);
    },
  },
};
</script>

<style>
.ti-input {
  border-radius: 3px;
  margin: 5px;
}
</style>

