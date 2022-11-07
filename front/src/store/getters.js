export default {
  // 简单访问
  categorys: (state) => state.category.categorys,
  // 当前主题访问
  themeType: (state) => state.theme.themeType,
  /**
   * category 选中选
   */
  currentCategory: (state) => state.app.currentCategory,
  /**
   * category 选中项的下标
   */
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex((item) => {
      return item.id === getters.currentCategory.id
    })
  },
  /**
   * 搜索记录
   */
  historys: (state) => state.search.historys,
  /**
   * 搜索文本
   */
  searchText: (state) => state.app.searchText,
  /**
   * token
   */
  token: (state) => state.user.token,
  /**
   * token
   */
  userInfo: (state) => state.user.userInfo
}