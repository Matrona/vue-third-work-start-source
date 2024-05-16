<template>
  <div class="counter">
    <counter-button @action="decrement">-</counter-button>
    <counter-value :value="count" />
    <counter-button @action="increment">+</counter-button>
  </div>
</template>

<script setup>
import CounterButton from "./CounterButton.vue";
import CounterValue from "./CounterValue.vue";
import { ref } from "vue";

const count = ref(0);

const decrement = () => {
  count.value = count.value - 1;
};

const increment = () => {
  count.value = count.value + 1;
};
</script>

<style scoped lang="scss">
.counter {
  display: flex;
  align-items: center;


}
</style>
