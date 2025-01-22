<template>
  <h1>
    {{ message }}
  </h1>
  <p>You got a grand total of {{ modelValue.points }} points this round.</p>

  <div class="progress_container">
    <progress max="5000" :value="modelValue.points"></progress>
    <p>{{ modelValue.points }}/5000</p>
  </div>
  <button @click="startGame">Next Photo!</button>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {};
  },
  props: {
    modelValue: Object,
  },
  methods: {
    startGame() {
      this.$emit('startGame');
    },
  },
  mounted() {},
  computed: {
    message() {
      return this.modelValue.points > 3000
        ? 'Good Job!'
        : this.modelValue.points > 1000
        ? 'Nice try!'
        : this.modelValue.points > 500
        ? 'Better luck next time'
        : this.modelValue.points > 0 && 'Umm, we dont talk about that...';
    },
  },
};
</script>

<style>
.progress_container {
  width: 80vw;
  height: 3rem;
  position: relative;
}
progress {
  width: 80vw;
  height: 3rem;
  border-radius: 1rem;
  position: absolute;
  outline: 3px solid #ff962d;
  overflow: hidden;
}
progress::-webkit-progress-value {
  background-color: rgb(255, 0, 0);
}
progress::-webkit-progress-bar {
  background-color: #ffffff;
}
.progress_container p {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: rgb(0, 255, 255);
  mix-blend-mode: difference;
}
</style>
