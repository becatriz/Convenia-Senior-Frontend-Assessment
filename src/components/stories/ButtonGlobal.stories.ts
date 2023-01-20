import ButtonGlobal from '../ButtonGlobal.vue';

export default {
  title: 'Example/Button',
  component: ButtonGlobal,
  args: { label: 'Button' },
};

const Template = (args: any) => ({
  components: { ButtonGlobal },
  setup() {
    return { args };
  },
  template: '<button-global v-bind="args" />',
});

export const Button: any = Template.bind({});
Button.args  = {
  user: 'Button',
};
