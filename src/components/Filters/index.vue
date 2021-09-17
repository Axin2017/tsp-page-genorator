<script>
export default {
  name: 'Filters',
  props: ['filter', 'filterConfig'],
  methods: {
    handleChange(dataKey, value) {
      this.$emit('filterChange', dataKey, value)
    }
  },
  mounted() {
  },
  render() {
    return (
      <ElRow>
        {
          this.filterConfig.map((config) => (
            <ElCol span={config.span}>
              <ElCol span={6}>
                {config.label}
              </ElCol>
              <ElCol span={18}>
                {
                  <config.type
                    value={this.filter[config.dataKey]}
                    elementProps={config.elementProps}
                    vOn:change={(value) => this.handleChange(config.dataKey, value)}
                  />
                }
              </ElCol>
            </ElCol>
          ))
        }
      </ElRow>
    )
  }
}
</script>

<style>

</style>