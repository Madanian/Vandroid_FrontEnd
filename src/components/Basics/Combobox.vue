<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="Choose Names of Applicatiopn You Want"
    multiple
    chips
    item-color="#7ec2d1"
    color="#7ec2d1"
    hide-details
    @change="passSelectedItems"
  ></v-combobox>
</template>

<script>
export default {
  name: "Combobox",
  data() {
    return {
      select: [],
    };
  },
  props: {
    items: Array,
  },
  methods:{
    passSelectedItems(){
        this.$emit("selectedItems", this.select)
    }
  }
};
</script>
