import FormGroup from "./FormGroup.vue";
//
import CheckboxFormGroup from "./CheckboxFormGroup.vue";
import FileFormGroup from "./FileFormGroup.vue";
import MaskedInputFormGroup from "./MaskedInputFormGroup.vue";
import PriceFormGroup from "./PriceFormGroup.vue";
import RadioButtonGroup from "./RadioButtonGroup.vue";
import RadioGroup from "./RadioGroup.vue";
import SelectFormGroup from "./SelectFormGroup.vue";
import TagsFormGroup from './TagsInput.vue'
import TextAreaFormGroup from "./TextareaFormGroup.vue";
import TextBoxFormGroup from "./TextboxFormGroup.vue";
import ToggleFormGroup from "./ToggleFormGroup.vue";


function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.component("v-form-group", FormGroup);
    //
    Vue.component("v-checkbox-form-group", CheckboxFormGroup);
    Vue.component("v-file-form-group", FileFormGroup);
    Vue.component("v-masked-form-group", MaskedInputFormGroup);
    Vue.component("v-price-form-group", PriceFormGroup);
    Vue.component("v-radio-button-form-group", RadioButtonGroup);
    Vue.component("v-radio-form-group", RadioGroup);
    Vue.component("v-select-form-group", SelectFormGroup);
    Vue.component("v-tags-form-group", TagsFormGroup);
    Vue.component("v-textarea-form-group", TextAreaFormGroup);
    Vue.component("v-textbox-form-group", TextboxFormGroup);
    Vue.component("v-toggle-form-group", ToggleFormGroup);

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
    //
    CheckboxFormGroup,
    FileFormGroup,
    MaskedInputFormGroup,
    PriceFormGroup,
    RadioButtonGroup,
    RadioGroup,
    SelectFormGroup,
    TagsFormGroup,
    TextAreaFormGroup,
    TextBoxFormGroup,
    ToggleFormGroup
};