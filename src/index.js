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

    Vue.component("FormGroup", FormGroup);
    //
    Vue.component("CheckboxFormGroup", CheckboxFormGroup);
    Vue.component("FileFormGroup", FileFormGroup);
    Vue.component("MaskedInputFormGroup", MaskedInputFormGroup);
    Vue.component("PriceFormGroup", PriceFormGroup);
    Vue.component("RadioButtonGroup", RadioButtonGroup);
    Vue.component("RadioGroup", RadioGroup);
    Vue.component("SelectFormGroup", SelectFormGroup);
    Vue.component("TagsFormGroup", TagsFormGroup);
    Vue.component("TextAreaFormGroup", TextAreaFormGroup);
    Vue.component("TextboxFormGroup", TextboxFormGroup);
    Vue.component("ToggleFormGroup", ToggleFormGroup);

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