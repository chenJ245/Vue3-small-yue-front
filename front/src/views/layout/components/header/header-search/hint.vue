<template>
  <div class="">
    <div
      v-for="(item, index) in hintData"
      :key="index"
      class="py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-900"
      @click="onItemClick(item)"
      v-html="highlightText(item)"
    ></div>
  </div>
</template>

<script>
  const EMITS_ITEM_CLICK = 'itemClick'
</script>

<script setup>
import { ref, watch } from 'vue'
import { getHint } from '@/api/pexels'
import { watchDebounced } from '@vueuse/core';

const props = defineProps({
  /**
   * 搜索文本
   */
  searchText: {
    type: String,
    required: true
  }
})
/**
 * item 被点击触发事件
 */
const emits = defineEmits([EMITS_ITEM_CLICK])

/**
 * 处理搜索提示数据获取
 */
const hintData = ref([])
const getHintData = async () => {
  if (!props.searchText) return
  const { result } = await getHint(props.searchText)
  hintData.value = result
}

/**
 * watch 可以监听一个 ref 响应式数据，或者一个 包含 getters 的函数
 */
watchDebounced(() => props.searchText, getHintData, {
  immediate: true,
  // 每次事件触发时，延迟的时间
  debounce: 500
})

/**
 * 处理关键字高亮
 */
const highlightText = (text) => {
  // 生成高亮标签
  const highlightStr = `<span class="text-zinc-900 dark:text-zinc-200">${props.searchText}</span>`
  // 构建正则表达式，从《显示文本中》找出与《用户输入文本相同的内容》，使用《高亮标签》进行替换
  const reg = new RegExp(props.searchText, 'gi')
  // 替换
  return text.replace(reg, highlightStr)
}

/**
 * item 点击事件处理
 */
const onItemClick = (item) => {
  emits(EMITS_ITEM_CLICK, item)
}
</script>

