function createTabConfig(data) {
  return [
    {
      label: 'tab1',
      value: 'tab1',
      render: item => {
        return `tab1(${data[item.value]})`;
      }
    },
    {
      label: 'tab2',
      value: 'tab2',
    },
    {
      label: 'tab3',
      value: 'tab3',
    },
  ]
}

export default createTabConfig;