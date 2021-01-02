import Taro, { useState, useEffect } from '@tarojs/taro'
import { request } from './index'

export const useTypesMap = (refresh) => {
  const [fetched, setFetched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [typesMap, setTypesMap] = useState<any>(null)
  
  useEffect(() => {
    if (fetched) return

    setFetched(true)

    Taro.getStorage({
      key: 'typesMap',
      success({ data }) {
        if (data) setTypesMap(data)
      },
      complete({ errMsg }) {
        if (errMsg !== 'getStorage:ok' || refresh) {
          fetchTypesMap()
        }
      }
    })
  })

  const fetchTypesMap = () => {
    setLoading(true)

    request({
      url: 'https://www.v2fy.com/asset/0i/ChineseBQB/chinesebqb_github.json',
      dataType: '其他',
      responseType: 'text'
    }).then((data) => {
      const typesMap = JSON.parse(data).data.reduce((result, current) => {
        const { category } = current;
        const categoryData = result[category];
    
        return {
          ...result,
          [category]: categoryData ? {
            imgSrc: categoryData.imgSrc,
            imgNum: categoryData.imgNum + 1,
            imgList: categoryData.imgList.concat(current.url)
          } : {
            imgSrc: current.url,
            imgNum: 1,
            imgList: [current.url]
          }
        }
      }, {})
  
      setLoading(false)
      setTypesMap(typesMap)
      Taro.setStorage({
        key: 'typesMap',
        data: typesMap
      })
    })
  }

  return { loading, typesMap, fetchTypesMap }
}
