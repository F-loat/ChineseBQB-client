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
  const tagMatchReg = /td style.*?已收录.*?td/g
  const imgTags = data && data.match(tagMatchReg) || []

  imgTags.splice(0, 2)

  const infoMatchReg = /.*data-src='(.*)'.*p\/(.*?)\/.*?已收录(\d*)张/
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

      const typeName = matchInfos[2]
      const typeShortName = typeName.replace(/^(\w)*/, '').replace(/BQB$/, '')
      const typeNum = Number(matchInfos[3])

      return {
        name: typeShortName,
        link: `/pages/list/index?name=${typeName}&title=${typeShortName}`,
        imgSrc: matchInfos[1],
        imgNum: typeNum
      }
    })
    .filter(item => !!item.imgNum)

  return types
}

export const parseImages = (data: string): ImageItem[] => {
  const tagMatchReg = /data-src='.*?'/g
  const imgTags = data && data.match(tagMatchReg)

  if (!imgTags) {
    return []
  }

  const infoMatchReg = /data-src='(.*?)'/
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
