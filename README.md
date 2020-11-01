Vue form groups (DEV stage)
===========================

Vue components that show validation errors returned by async requests.

```vue
<template>
    <v-textbox-form-group
        :show_label="false"
        label="Name"
        input_name="company.name"
        v-model="company.name"
        :required="true"
        :errors="errors"/>
</template>
<script>
import {TextareaFormGroup} from 'vue-form-components/dist/vue-form-components'
</script>
```

Available components:
* CheckboxFormGroup
* FileFormGroup
* MaskedInputFormGroup
* PriceFormGroup
* RadioButtonGroup
* RadioGroup
* SelectFormGroup
* TagsFormGroup
* TextAreaFormGroup
* TextboxFormGroup
* ToggleFormGroup

Each istance of the component will look for `input_name` inside of the `errors` dict and will show a line for each validation error.

The `errors` array is meant to have the default Laravel validation array format.


Install
-------

```sh
npm i biscofil/vue-form-components
```

Compile
-------

```sh
npm i
npm run build
```
