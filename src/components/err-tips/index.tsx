import Taro, { Component } from '@tarojs/taro'
import { Text } from '@tarojs/components'
import './index.less'

interface Props {
  text?: string
}

export default class ErrTips extends Component<Props> {
  static defaultProps = {
    text: '数据加载或解析失败，\n请稍后重试或等待版本更新'
  }

  render() {
    const { text } = this.props

    return (
      <Text className="err-tips">
        {text}
      </Text>
    )
  }
}
