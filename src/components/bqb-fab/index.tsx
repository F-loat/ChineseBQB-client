import { View } from '@tarojs/components'
import './index.less'

export default function BQBFab ({
  children,
  onClick,
  onLongPress
}) {
  return (
    <View
      className="bqb-fab"
      onClick={onClick}
      onLongPress={onLongPress}
    >
      {children}
    </View>
  )
}
