import InputUI from "../components-ui/InputUI.vue";

export default {
  title: "Components-UI/Inputs",
  component: InputUI,
  args: { placeholder: "Seu nome" },
};

const Template = (args) => ({
  components: { InputUI },
  setup() {
    return { args };
  },
  template: '<InputUI v-bind="args" />',
});

export const Inputs = Template.bind({});
Inputs.args = {
  placeholder: "Seu nome",
};
