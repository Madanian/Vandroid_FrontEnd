<template>
  <div>
    <label v-if="labelTag"> {{ labelText }} </label>
    <v-text-field
      class="mt-2"
      :name="name"
      :value="value"
      :type="type"
      :label="label"
      :placeholder="placeholder"
      :append-icon="append_icon"
      :prepend-icon="prepend_icon"
      :prepend-inner-icon="prepend_inner_icon"
      :outlined="outlined"
      :background-color="background_color"
      :color="color"
      :dark="dark"
      :light="light"
      :dense="dense"
      :disabled="disabled"
      :readonly="readonly"
      :filled="filled"
      :solo="solo"
      :success="success"
      :error="error"
      :success-messages="success_messages"
      :error-messages="error_messages"
      :messages="messages"
      :hint="hint"
      :rules="rules"
      :loading="loading"
      :rounded="rounded"
      :autofocus="autofocus"
      :suffix="suffix"
      :hide-details="hide_details"
      @blur="$emit('input', $event.target.value)"
      @keypress="$emit('input', $event.target.value)"
      @click="onClick"
      @keyup.enter="onKeyupEnter"
      @keydown="onKeydown"
      @keyup="onKeyup"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {};
  },

  props: {
    name: String,
    value: String,
    type: String,
    labelTag: Boolean,
    label: String,
    labelText: String,
    placeholder: String,
    append_icon: String,
    prepend_icon: String,
    prepend_inner_icon: String,
    outlined: Boolean,
    background_color: String,
    color: String,
    dark: Boolean,
    light: Boolean,
    dense: Boolean,
    height: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    filled: Boolean,
    solo: Boolean,
    success: Boolean,
    error: Boolean,
    success_messages: String,
    error_messages: String,
    messages: String,
    hint: String,

    rules: String,
    //array

    loading: Boolean,
    rounded: Boolean,
    autofocus: Boolean,
    suffix: String,
    hide_details: Boolean,
  },

  methods: {
    onClick() {},
    onKeyupEnter() {
      this.$emit("keyup");
    },
    onKeydown() {
      this.$emit("keydown");
    },
    onKeyup() {
      this.$emit("keyup");
    },
  },
};
</script>

<style>
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(
    .v-input--has-state
  )
  > .v-input__control
  > .v-input__slot
  fieldset {
  border: 1px solid #dfe3e7;
  padding: 0.47rem 0.8rem;
  font-size: 1rem;
  line-height: 1.4;
  /* border-radius: 0.267rem; */
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.v-text-field--outlined.v-input--is-focused fieldset {
  color: #475f7b;
  border-color: #5a8dee;
  border-width: 1px;
  outline: 0;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 10%);
  padding-left: 30px;
}
</style>
