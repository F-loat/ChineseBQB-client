import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtSlider, AtSwitch } from 'taro-ui'
import { getSetting } from '../../utils'
import './index.less'

interface State {
  perLineBQB: number,
  showBQBTitle: boolean
}

interface Props { }

export default class Setting extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      perLineBQB: 4,
      showBQBTitle: true
    }
  }

  config: Config = {
    navigationBarTitleText: '设置'
  }

  updateSetting = (write?: boolean) => {
    if (write) {
      const { perLineBQB, showBQBTitle } = this.state
      Taro.setStorageSync('setting', { perLineBQB, showBQBTitle })
    } else {
      const setting = getSetting()
      this.setState(setting)
    }
  }

  handleLineChange = ({ value: perLineBQB }) => {
    this.setState({ perLineBQB }, () => this.updateSetting(true))
  }

  handleTitelChange = (showBQBTitle) => {
    this.setState({ showBQBTitle }, () => this.updateSetting(true))
  }

  componentDidShow() {
    this.updateSetting()
  }

  render() {
    const { perLineBQB, showBQBTitle } = this.state

    return (
      <View className="setting">
        <AtForm>
          <View className="form-item">
            <View className="form-item-title">每行图片数量</View>
            <AtSlider
              min={1}
              max={6}
              activeColor="#000"
              showValue
              value={perLineBQB}
              onChange={this.handleLineChange}
            />
          </View>
          <AtSwitch
            title="展示图片标题"
            color="#000"
            checked={showBQBTitle}
            onChange={this.handleTitelChange}
          />
        </AtForm>
      </View>
    )
  }
}
