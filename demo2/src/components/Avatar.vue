<template>
  <div class="avatar">
    <image-upload
      v-bind:value="avatar"
      v-on:input="setAndPassOut"
      :size="2 * 1024"
      preview
    />
  </div>
</template>

<script>
export default {
  name: "avatar-input",

  props: {
    value: {
      type: [Blob, Object],
      default: () => {}
    }
  },

  watch: {
    value: function(newValue) {
      if (newValue instanceof Blob) return;
      this.avatar = newValue;
    }
  },

  data() {
    return {
      avatar: this.value
    };
  },

  methods: {
    setAndPassOut(newValue) {
      if (newValue && newValue.file) {
        this.$emit("input", newValue.file);
      } else {
        this.$emit("input", null);
      }
      this.avatar = newValue;
    }
  }
};
</script>
