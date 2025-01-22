<template>
  <button @click="starGame">
    Play{{ modelValue.score > 0 ? ' again' : '' }}!
  </button>
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {};
  },
  props: {
    modelValue: Object,
  },
  emits: ['startGame'],
  methods: {
    starGame() {
      this.$emit('startGame');
    },
  },
  mounted() {},
};
</script>

<style></style>
