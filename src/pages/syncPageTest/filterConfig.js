import Input from '@/components/Filters/components/Input';
import CheckBox from '@/components/Filters/components/Checkbox';


const filterItemConfigs = [
  {
    label: '商品编号',
    span: 8,
    type: Input,
    dataKey: 'input',
    elementProps: {
      clearable: true
    },
  },
  {
    label: '是否超过24小时未处理',
    span: 8,
    type: CheckBox,
    dataKey: 'over24',
  },
]

export default filterItemConfigs;