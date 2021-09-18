<script>
export default {
  name: "Filters",
  props: ["filter", "filterConfig"],
  methods: {
    handleChange(dataKey, value) {
      this.$emit("filterChange", dataKey, value);
    },
  },
  mounted() {},
  render() {
    return (
      <div class="filter-box">
        <ElRow>
          {this.filterConfig.map((config) => (
            <ElCol span={config.span} class="filter-item">
              <ElCol span={6} class="filter-label">{config.label}</ElCol>
              <ElCol span={18}>
                {
                  <config.type
                    value={this.filter[config.dataKey]}
                    elementProps={config.elementProps}
                    vOn:change={(value) =>
                      this.handleChange(config.dataKey, value)
                    }
                  />
                }
              </ElCol>
            </ElCol>
          ))}
        </ElRow>
      </div>
    );
  },
};
</script>

<style scoped>
.filter-box {
  font-size: 14px;
}
.filter-item {
  height: 32px;
  line-height: 32px;
  padding: 0 5px;
  margin-top: 20px
}

</style>