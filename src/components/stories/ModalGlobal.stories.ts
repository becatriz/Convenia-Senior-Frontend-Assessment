import ModalGlobal from '../ModalGlobal.vue';

export default {
  title: 'Example/Modal',
  component: ModalGlobal,
  args: { isOpenModal: true },
};

const Template = (args: any) => ({
  components: { ModalGlobal },
  setup() {
    return { args };
  },
  template: '<modal-global v-bind="args" />',
});

export const Modal: any = Template.bind({});
Modal.args  = {
    isOpenModal: true,
};
