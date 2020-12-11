<script>
export default {
  name: 'ModalDashboard',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return (this.show) ? <div class="modaldashboard-wrapper">
      <div class="modaldashboard">
        <div class="modaldashboard-head text-right pb-2">
          <a href="#" onClick={this.onClose}>
            <i class="material-icons modal-close-icon">close</i>
          </a>
        </div>
        <div class="modaldashboard-content">
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
.modaldashboard {
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
 .modaldashboard > .modaldashboard-head {
  @apply relative;
}
 .modaldashboard-wrapper::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
}
</style>

