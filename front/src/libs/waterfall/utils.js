/**
 * 从 itemElement 中抽离出所有的 imgElements
 */

export const getImgElements = (itemElements) => {
  const imgElements = []
  itemElements.forEach((el) => {
    imgElements.push(...el.getElementsByTagName('img'))
  })
  return imgElements
}

/**
 * 生成所有的图片链接数组
 */
export const getAllImg = (imgElements) => {
  return imgElements.map((imgElement) => {
    return imgElement.src
  })
}

/**
 * 监听图片数组加载完成 (promise)
 */
export const onComplateImgs = (imgs) => {
  // Promise 集合
  const promiseAll = []
  // 循环 imgs，构建 promiseAll
  imgs.forEach((img, index) => {
    promiseAll[index] = new Promise((resolve, reject) => {
      // 处理 img 的加载情况
      const imageObj =  new Image()
      imageObj.src = img
      imageObj.onload = () => {
        resolve({
          img,
          index
        })
      }
    })
  })
  return Promise.all(promiseAll)
}

/**
 * 返回列高对象中最小的高度
 */
export const getMinHeight = (columnHeightObj) => {
  const columnHeightAll = Object.values(columnHeightObj)
  return Math.min(...columnHeightAll)
}

/**
 * 返回列高对象中最大的高度
 */
export const getMaxHeight = (columnHeightObj) => {
  const columnHeightAll = Object.values(columnHeightObj)
  return Math.max(...columnHeightAll)
}

/**
 * 返回列高对象中最小高度所在列
 */
export const getMinHeightColumn = (columnHeightObj) => {
  // 拿到最小的高度
  const minHeight = getMinHeight(columnHeightObj)
  return Object.keys(columnHeightObj).find((key) => {
    return columnHeightObj[key] === minHeight
  })
}