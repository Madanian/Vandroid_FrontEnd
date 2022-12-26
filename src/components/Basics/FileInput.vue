<template>
  <v-file-input
    v-model="files"
    color="#2b8700"
    counter
    label="Choose Your Application Files"
    placeholder="Select your files"
    prepend-icon="mdi-paperclip"
    outlined
    :show-size="1000"
    hide-details
  >
    <template v-slot:selection="{ index, text }">
      <v-chip v-if="index < 2" color="#329505" dark label small>
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="text-overline grey--text text--darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
</template>

<script>
export default {
  name: "FileInput",
  data() {
    return {
      files: [],
      select: [],
    };
  },
};
</script>
