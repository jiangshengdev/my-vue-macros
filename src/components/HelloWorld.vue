<script setup lang="ts">
import {useCounterStore} from '../stores/counter'

const store = useCounterStore()
</script>

<template>
  <button @click="store.increment">{{ store.count }}</button>
</template>
