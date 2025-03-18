import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', () => {
  let count = $ref(0)

  const doubleCount = $computed(() => count * 2)

  function increment() {
    count++
  }

  return $$({count, doubleCount, increment})
})
