<script>
export default {
  name: 'TableCell',
  props: ['row','render'],
  render() {
    const el = this.render(this.row);
    if (typeof el !== 'object') {
      return <span>{el}</span>
    }
    return el;
  }
}
</script>

<style>

</style>