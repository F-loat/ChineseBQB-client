import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtSlider, AtSwitch } from 'taro-ui'
import { getSetting } from '../../utils'
import './index.less'

interface State {
  setting: {
    perLineBQB: number,
    showBQBTitle: boolean
  }
}

interface Props { }

export default class Setting extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      setting: getSetting()
    }
  }

  config: Config = {
    navigationBarTitleText: '设置'
  }

  updateSetting = (write?: boolean) => {
    if (write) {
      const { perLineBQB, showBQBTitle } = this.state.setting
      Taro.setStorageSync('setting', { perLineBQB, showBQBTitle })
    } else {
      this.setState({ setting: getSetting() })
    }
  }

  handleSettingChange = (key, value) => {
    const { setting } = this.state
    this.setState({
      setting: { ...setting, [key]: value }
    }, () => this.updateSetting(true))
  }

  componentDidShow() {
    this.updateSetting()
  }

  render() {
    const { perLineBQB, showBQBTitle } = this.state.setting

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
              onChange={({ value }) => this.handleSettingChange('perLineBQB', value)}
            />
          </View>
          <AtSwitch
            title="展示图片标题"
            color="#000"
            checked={showBQBTitle}
            onChange={(value) => this.handleSettingChange('showBQBTitle', value)}
          />
        </AtForm>
      </View>
    )
  }
}
