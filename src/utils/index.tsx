import Taro from '@tarojs/taro'

export const request = async (params: Taro.request.Option) => {
  const { data } = await Taro.request(params)
  return data
}
