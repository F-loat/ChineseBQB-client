import Taro from '@tarojs/taro'

export const smartLoading = (title: string, cached?: boolean): Function => {
  if (cached && process.env.TARO_ENV === 'weapp') {
    Taro.showNavigationBarLoading()
    return Taro.hideNavigationBarLoading
  } else {
    Taro.showLoading({ title })
    return Taro.hideLoading
  }
}

export const requestWithCache = async (params: Taro.request.Option) => {
  const cacheKey = `${params.method || 'GET'} ${params.url}`
  const cachedData = Taro.getStorageSync(cacheKey)
  const hideLoading = smartLoading('加载中', !!cachedData)

  const realRequest = Taro.request(params).then(({ data }) => {
    Taro.setStorage({ key: cacheKey, data })
    hideLoading()
    return data
  })

  return cachedData || await realRequest
}

export const requestWithoutCache = async (params: Taro.request.Option) => {
  const hideLoading = smartLoading('加载中', false)

  const { data } = await Taro.request(params)

  hideLoading()

  return data
}

export const request = (params: Taro.request.Option, cache: boolean = true) => {
  if (cache) {
    return requestWithCache(params)
  } else {
    return requestWithoutCache(params)
  }
}
