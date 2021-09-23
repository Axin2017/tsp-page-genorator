export default {
  props: {

  },
  columnsConfig: [
    {
      id: 'index',
      label: '序号',
      dataIndex: 'index',
      props: {
        type: 'index'
      }
    },
    {
      id: 'name',
      label: '姓名',
      dataIndex: 'name',
    },
    {
      id: 'sex',
      label: '性别',
      dataIndex: 'sex',
      render: (row) => {
        return row.sex === 1 ? '男' : '女'
      }
    }
  ]
}