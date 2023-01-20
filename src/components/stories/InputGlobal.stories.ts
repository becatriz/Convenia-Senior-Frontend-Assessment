import InputGlobal from '../InputGlobal.vue';

export default {
  title: 'Example/Input',
  component: InputGlobal,
  args: { placeholder: 'Seu nome' },
};

const Template = (args: any) => ({
  components: { InputGlobal },
  setup() {
    return { args };
  },
  template: '<input-global v-bind="args" />',
});

export const Input: any = Template.bind({});
Input.args  = {
    placeholder: 'Seu nome',
};
