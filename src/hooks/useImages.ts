import Taro, { useState, useEffect } from '@tarojs/taro'
import { request } from '../utils/index'

const useImages = (path) => {
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const cacheKey = `images_${path}`

  useEffect(() => {
    Taro.getStorage({ key: cacheKey })
      .then(({ data }) => {
        if (data) setImages(data)
        Taro.showNavigationBarLoading()
      })
      .catch(() => {
        Taro.showLoading({ title: '加载中' })
      })
      .finally(() => {
        fetchImages()
      })
  }, [])

  const fetchImages = () => {
    setLoading(true)

    request({
      url: `https://www.v2fy.com/p/${path}/`,
      dataType: '其他',
      responseType: 'text'
    }).then((data) => {
      Taro.hideLoading()
      Taro.hideNavigationBarLoading()

      const newImages = data.match(/original='(.*)'/g).map(item => {
        return item.replace(`original='`, '').replace(`'`, '')
      })

      setLoading(false)
      setImages(newImages)
      Taro.setStorage({
        key: cacheKey,
        data: newImages
      })
    })
  }

  return {
    loading,
    data: images,
    setData: setImages
  }
}

export default useImages
