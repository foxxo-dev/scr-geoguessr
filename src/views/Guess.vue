<template>
  <h1>Guess</h1>
  <img :src="compliePath(modelValue.point.photoName)" alt="guess this" />
  <img @click="guessed" src="@/assets/game-photos/map.png" alt="on this map" />
</template>

<script>
export default {
  name: 'Guess',
  data() {
    return {};
  },
  props: {
    modelValue: Object,
  },
  emits: ['guessed'],
  methods: {
    guessed(e) {
      let x = e.offsetX;
      let y = e.offsetY;
      console.log('Guess: guessed', x, y);
      this.$emit('guessed', x, y);
    },
    compliePath(photoName) {
      return `/src/assets/game-photos/basic/${photoName}`;
    },
  },
  mounted() {},
};
</script>

<style></style>
