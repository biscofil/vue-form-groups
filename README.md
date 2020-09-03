Vue form groups
===============

Vue components that show validation errors returned by async requests.

```vue
<TextboxFormGroup
    :show_label="false"
    label="Name"
    input_name="company.name"
    v-model="company.name"
    :required="true"
    :errors="errors"/>
```

Each istance of the component will look for `input_name` inside of the `errors` dict and will show a line for each validation error.

The `errors` array is meant to have the default Laravel validation array format.


Install
-------

```sh
npm i biscofil/vue-form-groups
```

Compile
-------

```sh
npm i
npm run build
```