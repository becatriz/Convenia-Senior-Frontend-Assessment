import ModalUI from "../components-ui/ModalUI.vue";

export default {
  title: "Components-UI/Modal",
  component: ModalUI,
  args: { isOpenModal: true },
};

const Template = (args) => ({
  components: { ModalUI },
  setup() {
    return { args };
  },
  template: '<ModalUI v-bind="args" />',
});

export const Modal = Template.bind({});
Modal.args = {
  isOpenModal: true,
};
