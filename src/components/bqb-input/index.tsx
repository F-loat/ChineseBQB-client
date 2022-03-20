import { useState, useRef } from '@tarojs/taro'
import { View, Input, Button } from '@tarojs/components'
import './index.less'

interface Props {
  defaultValue?: string
  disabled?: boolean;
  placeholder?: string;
  onClick?: () => void;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

export default function BQBInput ({
  defaultValue,
  disabled,
  placeholder,
  onClick,
  onChange,
  onSearch
}: Props) {
  const timer = useRef<any>({ id: null })
  const [innerVal, setInnerVal] = useState(defaultValue || '')

  const handleClick = () => {
    onClick && onClick()
  }

  const handleInput = (e) => {
    const { value } = e.target
    setInnerVal(value)
    clearTimeout(timer.current.id)
    timer.current.id = setTimeout(() => {
      onChange && onChange(value)
    }, 500)
  }

  const handleBtnClick = () => {
    onSearch && onSearch(innerVal)
  }

  return (
    <View className="bqb-input" onClick={handleClick}>
      <Input
        value={innerVal}
        disabled={disabled}
        placeholder={placeholder}
        confirmType="search"
        className="bqb-input-content"
        onInput={handleInput}
        onConfirm={handleBtnClick}
      />
      <Button
        size="mini"
        type="primary"
        className="bqb-input-btn"
        onClick={handleBtnClick}
      >
        搜索
      </Button>
    </View>
  )
}
