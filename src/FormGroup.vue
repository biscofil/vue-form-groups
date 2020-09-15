<template lang="pug">
    include ./FormGroup.pug
</template>

<script>

    export default {

        props: {

            col_classes: {
                required: false,
                type: Array,
                default: function () {
                    return ["col-sm-12"]
                }
            },

            show_label: {
                required: false,
                type: Boolean,
                default: true
            },

            show_required: {
                required: false,
                type: Boolean,
                default: true
            },

            label_col_classes: {
                required: false,
                type: Array,
                default: function () {
                    return ["col-md-4", "col-sm-3"]
                }
            },

            form_col_classes: {
                required: false,
                type: Array,
                default: function () {
                    return ["col-md-8", "col-sm-9"]
                }
            },

            //

            label: {
                type: String,
                required: true
            },
            input_name: {
                type: String,
                required: true
            },
            required: {
                default: false
            },
            errors: {
                default: function () {
                    return [];
                }
            },

            //

            value: {
                default: null
            },
            placeholder: {
                default: null
            },

            autocomplete: {
                require: false,
                type: String,
                default : "off"
            }

        },

        data() {
            return {
                inputValue: this.value,
                placeholderCalculated: this.placeholder === null ? this.label : this.placeholder,
            }
        },

        watch: {

            value() {
                this.onValueChanged();
            },

            inputValue() {
                this.onInputValueChanged();
            }
        },

        methods: {

            onValueChanged() {
                this.inputValue = this.value;
            },

            onInputValueChanged() {
                this.$emit('input', this.inputValue);
            },

            hasErrors() {
                return this.errors && this.errors[this.input_name] && this.errors[this.input_name].length;
            },

            getErrors() {
                return this.errors[this.input_name];
            }

        }
    }
</script>

<style>

    .form-group-required input:after {
        content: "*";
        color: red;
    }

    .form-group-wrapper {
        margin-bottom: 1rem !important;
    }

</style>
