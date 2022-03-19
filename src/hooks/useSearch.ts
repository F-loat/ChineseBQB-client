import Taro, { useState, useEffect } from '@tarojs/taro'
import { request } from '../utils/index'

interface Item {
  name: string;
  imgSrc: string;
}

const useSearch = () => {
  const [data, setData] = useState<Item[]>([])
  const [loading, setLoading] = useState(false)
  const cacheKey = 'search'

  useEffect(() => {
    Taro.getStorage({ key: cacheKey })
      .then(({ data }) => {
        if (data) setData(data)
        Taro.showNavigationBarLoading()
      })
      .catch(() => {
        Taro.showLoading({ title: '加载中' })
      })
      .finally(() => {
        fetchData()
      })
  }, [])

  const fetchData = () => {
    setLoading(true)

    request({
      url: 'https://www.v2fy.com/asset/0i/ChineseBQB/chinesebqb_v2fy.json',
    }).then(({ data }) => {
      Taro.hideLoading()
      Taro.hideNavigationBarLoading()

      const newData = data.map(item => {
        return {
          // raw: item,
          name: item.name,
          imgSrc: item.url
        }
      })

      setData(newData)
      setLoading(false)
      Taro.setStorage({
        key: cacheKey,
        data: newData
      })
    })
  }

  return { data, loading }
}

export default useSearch
