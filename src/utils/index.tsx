import { request } from './request'

export interface TypeItem {
  name: string,
  link?: string,
  imgNum?: number,
  imgSrc?: string
}

export interface ImageItem {
  src: string,
  name: string,
}

export const parseTypes = (data: string): TypeItem[] => {
  const tagMatchReg = /<td style="([\s\S]*?)<\/tr>/g
  const imgTags = data && data.match(tagMatchReg) || []

  imgTags.splice(0, 2)

  const imgMatchReg = /.*src='(.*)'/
  const infoMatchReg = /\/">(.*?)\(已收录(\d*)张/
  const types: TypeItem[] = imgTags
    .map(item => {
      const matchImg = item.match(imgMatchReg)
      const matchInfos = item.match(infoMatchReg)

      if (!matchImg || !matchInfos) {
        return {
          name: '未命名',
          link: '',
          imgNum: 0,
          imgSrc: ''
        }
      }

      const typeName = matchInfos[1]
      const typeShortName = typeName.replace(/^(\w)*/, '').replace(/BQB$/, '')
      const typeNum = Number(matchInfos[2])

      return {
        name: typeShortName,
        link: `/pages/list/index?name=${typeName}&title=${typeShortName}`,
        imgSrc: matchImg[1],
        imgNum: typeNum
      }
    })
    .filter(item => {
      if (!item.imgNum) {
        return false
      }

      if (item.name.match(/特朗普/)) {
        return false
      }

      return true
    })

  return types
}

export const parseImages = (data: string): ImageItem[] => {
  const tagMatchReg = /data-original='.*?'/g
  const imgTags = data && data.match(tagMatchReg)

  if (!imgTags) {
    return []
  }

  const infoMatchReg = /data-original='(.*?)'/
  const images = imgTags
    .map(item => {
      const matchInfos = item.match(infoMatchReg)

      if (!matchInfos) {
        return { src: '', name: '未命名' }
      }

      return {
        src: matchInfos[1],
        name: matchInfos[1].replace(/.*\//, '').replace(/\..*$/, '')
      }
    })
    .filter(item => !!item.src)

  return images
}

export {
  request
}
