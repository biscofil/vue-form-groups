import FormGroup from "./FormGroup.vue";
import FileFormGroup from "./FileFormGroup.vue";
import CheckboxFormGroup from "./CheckboxFormGroup.vue";
import TextAreaFormGroup from "./TextareaFormGroup.vue";
import TextBoxFormGroup from "./TextboxFormGroup.vue";
import TagsFormGroup from './TagsInput.vue'

function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.component("v-form-group", FormGroup);
    Vue.component("v-file-form-group", FileFormGroup);
    Vue.component("v-checkbox-form-group", CheckboxFormGroup);
    Vue.component("v-textarea-form-group", TextAreaFormGroup);
    Vue.component("v-textbox-form-group", TextboxFormGroup);
    Vue.component("v-tags-form-group", TagsFormGroup);



}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

FormGroup.install = install;

export {
    FormGroup,
    FileFormGroup,
    CheckboxFormGroup,
    TextAreaFormGroup,
    TextBoxFormGroup,
    TagsFormGroup
};