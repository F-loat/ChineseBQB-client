import Taro from '@tarojs/taro'
import { request } from './request'

export interface TypeItem {
  name: string,
  link: string,
  imgNum?: number,
  imgSrc?: string
}

export interface ImageItem {
  src: string,
  name: string,
}

export interface Setting {
  repository: 'zhaoolee/ChineseBQB' | 'getActivity/EmojiPackage',
  perLineBQB: number,
  showBQBTitle: boolean
}

const getImageSrc = (path: string, repository: Setting['repository']) => {
  return `https://proxy.youngon.com.cn/github/raw/${repository}/master/${path}`
}

export const parseTextTypes = (data: string, repository: Setting['repository']): TypeItem[] => {
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
        imgSrc: getImageSrc(`${typeName}/${imgName}`, repository),
        imgNum: typeNum
      }
    })
    .filter(item => !!item.imgNum)
    .sort((item, nextItem) => (nextItem.imgNum - item.imgNum))

  return types
}

export const parseJsonTypes = (data: any[]): TypeItem[] => {
  const types = data
    .filter(item => item.type === 'dir')
    .map(({ name }) => {
      return {
        name,
        link: `/pages/list/index?name=${name}&title=${name}`
      }
    })

  return types
}

export const parseTypes = (data: string | any[], repository: Setting['repository']): TypeItem[] => {
  if (typeof data === 'string') {
    return parseTextTypes(data, repository)
  } else if (Array.isArray(data)) {
    return parseJsonTypes(data)
  } else {
    return []
  }
}

export const parseTextImages = ( data: string, repository: Setting['repository']): ImageItem[] => {
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
        src: getImageSrc(`${typeName}/${imgName}`, repository),
        name: imgName.replace(/\..*$/, '')
      }
    })
    .filter(item => !!item.src)

  return images
}

export const parseJsonImages = (data: any[], repository: Setting['repository']) => {
  const images = data
    .filter(item => item.name.match(/\.(jpg|jpeg|gif|png)$/))
    .map(item => {
      return {
        src: getImageSrc(item.path, repository),
        name: item.name.replace(/\..*$/, '')
      }
    })

  return images
}

export const parseImages = (data: string | any[], repository: Setting['repository']): ImageItem[] => {
  if (typeof data === 'string') {
    return parseTextImages(data, repository)
  } else if (Array.isArray(data)) {
    return parseJsonImages(data, repository)
  } else {
    return []
  }
}

export const getSetting = () => {
  const setting: Setting = Taro.getStorageSync('setting')

  const defaultSetting: Setting = {
    repository: 'zhaoolee/ChineseBQB',
    perLineBQB: 4,
    showBQBTitle: false
  }

  return Object.assign(defaultSetting, setting)
}

export {
  request
}
