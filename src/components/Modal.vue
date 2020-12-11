<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return (this.show) ? <div class="modal-wrapper">
      <div class="modal">
        <div class="modal-head text-right pb-2">
          <a href="#" onClick={this.onClose}>
            <i class="material-icons modal-close-icon">close</i>
          </a>
        </div>
        <div class="modal-content">
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
.modal {
  background: rgb(15, 15, 15);
  padding: 25px;
  border-radius: 25px;
  min-width: 450px;
  min-height: 550px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
   @apply absolute;
}
 .modal > .modal-head {
  @apply relative;
}
 .modal-wrapper::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}
</style>

