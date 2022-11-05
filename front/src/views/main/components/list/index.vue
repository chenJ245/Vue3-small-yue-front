<template>
  <div>
    <m-infinite
      v-model="isLoading"
      :isFinished="isFinished"
      @onLoad="getPexelsData"
    >
      <m-waterfall
        :data="pexelsList"
        :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false"
        class="w-full px-1"
      >
        <template v-slot="{ item, width }">
          <item-vue :data="item" :width="width"></item-vue>
        </template>
      </m-waterfall>
    </m-infinite>
  </div>
</template>

<script setup>
import { getPexelsList } from '@/api/pexels'
import { ref, watch } from 'vue'
import itemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible.js'
import store from '../../../../store'

/**
 * 构建数据请求
 */
const query = {
  page: 1,
  size: 5,
  categoryId: ''
}
// 数据是否在加载中
const isLoading = ref(false)
// 数据是否全部加载完成
const isFinished = ref(false)
// 数据源
const pexelsList = ref([])
/**
 * 加载数据的方法
 */
const getPexelsData = async () => {
  // 数据全部加载完成则 return
  if (isFinished.value) {
    return
  }

  // 完成第一次请求之后，后续请求让 page 自增
  if (pexelsList.value.length) {
    query.page += 1
  }

  // 触发接口请求
  const res = await getPexelsList(query)
  // 初始请求清空数据源
  if (query.page === 1) {
    pexelsList.value = res.list
  } else {
    pexelsList.value.push(...res.list)
  }
  // 判断数据是否全部加载完成
  // console.log(pexelsList.value.length, res.total)
  if (pexelsList.value.length >= res.total) {
    isFinished.value = true
  }
  // 修改 loading 标记
  isLoading.value = false
}

/**
 * 通过此方法修改query,重新发起请求
 */
const resetQuery = (newQuery) => {
  query = { ...query, ...newQuery }
  isFinished.value = false
  pexelsList.value = []
}

/**
 * 监听 currentCategory 的变化
 */
watch(
  () => store.getters.currentCategory,
  (currentCategory) => {
    resetQuery({
      page: 1,
      categoryId: currentCategory.id
    })
  }
)
</script>

<style lang="scss" scoped></style>
