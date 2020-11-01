Vue form groups (DEV stage)
===========================

Vue components that show validation errors for form inputs.

```js
<template>
    <div>

        <TextboxFormGroup
            :show_label="false"
            label="Name"
            input_name="company.name"
            v-model="company.name"
            :required="true"
            :errors="errors"/>

        <TextboxFormGroup
            :show_label="false"
            label="Address"
            input_name="company.address"
            v-model="company.address"
            :required="true"
            :errors="errors"/>
    </div>
</template>
<script>
import {TextboxFormGroup} from 'vue-form-components/dist/vue-form-components'
export default{

    name : "TestComponent",

    components:{
        TextboxFormGroup
    },

    data(){
        return {
            company : {
                name : '',
                address : ''
            },
            errors : null
        }
    },

    methods:{
        save(){
            let self = this;
            axios.post('url', this.company)
            .then(response => {
                // stuff
            })
            .catch(e => {
                if(e.response){
                    self.errors = e.response.data.errors;
                }
            });
        }

    }
}
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
