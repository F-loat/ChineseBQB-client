import Taro from '@tarojs/taro'

export const request = async (params: Taro.request.Option) => {
  Taro.showLoading({ title: '加载中' })

  const { data } = await Taro.request(params)

  Taro.hideLoading()

  return data
}
