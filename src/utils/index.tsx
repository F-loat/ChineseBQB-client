export interface TypeItem {
  num: number,
  name?: string,
  link?: string,
  imgSrc?: string,
}

export interface ImageItem {
  src: string,
  name?: string,
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
        return { num: 0 }
      }

      const typeFullName = matchInfos[1]
      const typeName = typeFullName.replace(/^(\w)*/, '').replace(/BQB$/, '')
      const imgName = matchInfos[2]
      const typeNum = Number(matchInfos[3])

      return {
        num: typeNum,
        name: typeName,
        link: `/pages/list/index?name=${typeFullName}&title=${typeName}`,
        imgSrc: `https://raw.githubusercontent.com/zhaoolee/ChineseBQB/master/${typeFullName}/${imgName}`
      }
    })
    .filter(item => !!item.num)
    .sort((item, nextItem) => (nextItem.num - item.num))

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
        return { src: '' }
      }

      return {
        src: matchInfos[1],
        name: matchInfos[2].replace(/\..*$/, '')
      }
    })
    .filter(item => !!item.src)

  return images
}
