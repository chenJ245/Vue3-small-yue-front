<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolID" :class="fillClass" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from '@vue/reactivity'

const props = defineProps({
  // 显示的 svg
  name: {
    type: String,
    required: true
  },
  // svg 图标颜色
  color: {
    tyoe: String
  },
  // tailwind 指定 svg 颜色的类名
  fillClass: {
    type: String
  }
})

// 真实显示的 svg 图标 (拼接 #icon-)
const symbolID = computed(() => `#icon-${props.name}`)
</script>
