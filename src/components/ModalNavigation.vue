<script>
export default {
  name: 'ModalNavitation',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return (this.show) ? <div class="modalnavigation-wrapper">
      <div class="modalnavigation">
        <div class="modalnavigation-head text-right pb-2">
          <a href="#" onClick={this.onClose}>
            <i class="material-icons modalnavigation-close-icon">close</i>
          </a>
        </div>
        <div class="modalnavigation-content">
          {this.$slots.default}
        </div>
      </div>
    </div> : null;
  },
  methods: {
    onClose() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style scoped>
.modalnavigation {
  background: rgb(15, 15, 15);
  padding: 25px;
  border-radius: 5px 0px 0px 5px;
  min-width: 30vw;
  min-height: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2000;
}
 .modalnavigation > .modalnavigation-head {
  position: relative;
}
</style>
