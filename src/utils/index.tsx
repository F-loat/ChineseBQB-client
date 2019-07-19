import Taro from '@tarojs/taro'

export interface TypeItem {
  name: string,
  link: string,
  imgNum: number,
  imgSrc: string
}

export interface ImageItem {
  src: string,
  name: string,
}

export const smartLoading = (title: string, cached?: boolean): Function => {
  if (cached && process.env.TARO_ENV === 'weapp') {
    Taro.showNavigationBarLoading()
    return Taro.hideNavigationBarLoading
  } else {
    Taro.showLoading({ title })
    return Taro.hideLoading
  }
}

export const parseTypes = (data: string): TypeItem[] => {
  const tagMatchReg = /\|.*已收录.*\|/g
  const imgTags = data && data.match(tagMatchReg)

  if (!imgTags) {
    return []
  }

  const infoMatchReg = /.*master\/(.*)\/(.*)'.*已收录(\d*)张/
  const types: TypeItem[] = imgTags
    .map(item => {
      const matchInfos = item.match(infoMatchReg)

      if (!matchInfos) {
        return {
          name: '未命名',
          link: '',
          imgNum: 0,
          imgSrc: ''
        }
      }

      const typeFullName = matchInfos[1]
      const typeName = typeFullName.replace(/^(\w)*/, '').replace(/BQB$/, '')
      const imgName = matchInfos[2]
      const typeNum = Number(matchInfos[3])

      return {
        name: typeName,
        link: `/pages/list/index?name=${typeFullName}&title=${typeName}`,
        imgSrc: `https://raw.githubusercontent.com/zhaoolee/ChineseBQB/master/${typeFullName}/${imgName}`,
        imgNum: typeNum
      }
    })
    .filter(item => !!item.imgNum)
    .sort((item, nextItem) => (nextItem.imgNum - item.imgNum))

  return types
}

export const parseImages = (data: string): ImageItem[] => {
  const tagMatchReg = /\!\[.*\]/g
  const imgTags = data && data.match(tagMatchReg)

  if (!imgTags) {
    return []
  }

  const infoMatchReg = /\!\[(.*master\/.*\/(.*))\]/
  const images = imgTags
    .map(item => {
      const matchInfos = item.match(infoMatchReg)

      if (!matchInfos) {
        return { src: '', name: '未命名' }
      }

      return {
        src: matchInfos[1],
        name: matchInfos[2].replace(/\..*$/, '')
      }
    })
    .filter(item => !!item.src)

  return images
}
