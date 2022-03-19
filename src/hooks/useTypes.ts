import Taro, { useState, useEffect } from '@tarojs/taro'
import { request } from '../utils/index'

interface Item {
  name: string;
  fullname: string;
  imgNum: number;
  imgSrc: string;
}

const useTypes = () => {
  const [loading, setLoading] = useState(false)
  const [types, setTypes] = useState<Item[]>([])
  const cacheKey = 'types'

  useEffect(() => {
    Taro.getStorage({ key: cacheKey })
      .then(({ data }) => {
        if (data) setTypes(data)
        Taro.showNavigationBarLoading()
      })
      .catch(() => {
        Taro.showLoading({ title: '加载中' })
      })
      .finally(() => {
        fetchTypes()
      })
  }, [])

  const fetchTypes = () => {
    setLoading(true)

    request({
      url: 'https://www.v2fy.com/p/000readme-chinesebqb',
      dataType: '其他',
      responseType: 'text'
    }).then((data) => {
      Taro.hideLoading()
      Taro.hideNavigationBarLoading()

      const newTypes = data.match(/<tr>\n<td style[\s\S]*?<\/tr>/g).map(item => {
        const fullname = item.match(/\/p\/(.*?)\//)[1] || ''
        return {
          // raw: item,
          fullname,
          name: fullname.replace(/^\d*_?/, '').replace(/_?BQB$/, ''),
          imgSrc: item.match(/src='(.*?)'/)[1],
          imgNum: item.match(/已收录(.*?)张/)[1],
        }
      })

      setLoading(false)
      setTypes(newTypes)
      Taro.setStorage({
        key: cacheKey,
        data: newTypes
      })
    })
  }

  return {
    loading,
    data: types
  }
}

export default useTypes
