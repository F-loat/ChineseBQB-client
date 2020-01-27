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

const getImageSrc = (type: string, img: string) => {
  return `https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/${type}/${img}`
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

  const infoMatchReg = /.*master\/(.*?)\/(.*?) .*已收录(\d*)张/
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

      const typeName = matchInfos[1]
      const typeShortName = typeName.replace(/^(\w)*/, '').replace(/BQB$/, '')
      const imgName = matchInfos[2]
      const typeNum = Number(matchInfos[3])

      return {
        name: typeShortName,
        link: `/pages/list/index?name=${typeName}&title=${typeShortName}`,
        imgSrc: getImageSrc(typeName, imgName),
        imgNum: typeNum
      }
    })
    .filter(item => !!item.imgNum)
    .sort((item, nextItem) => (nextItem.imgNum - item.imgNum))

  return types
}

export const parseImages = (data: string): ImageItem[] => {
  const tagMatchReg = /\[.*?\]/g
  const imgTags = data && data.match(tagMatchReg)

  if (!imgTags) {
    return []
  }

  const infoMatchReg = /.*master\/(.*)\/(.*)\]/
  const images = imgTags
    .map(item => {
      const matchInfos = item.match(infoMatchReg)

      if (!matchInfos) {
        return { src: '', name: '未命名' }
      }

      const typeName = matchInfos[1]
      const imgName = matchInfos[2]

      return {
        src: getImageSrc(typeName, imgName),
        name: imgName.replace(/\..*$/, '')
      }
    })
    .filter(item => !!item.src)

  return images
}

export const getSetting = () => {
  const setting = Taro.getStorageSync('setting') || {}
  const { perLineBQB, showBQBTitle } = setting

  return {
    perLineBQB: perLineBQB || 4,
    showBQBTitle: showBQBTitle === undefined ? true : showBQBTitle
  }
}
