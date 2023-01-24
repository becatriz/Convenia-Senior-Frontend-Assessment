import ButtonUI from "../components-ui/ButtonUI.vue";

export default {
  title: "Components-UI/Button",
  component: ButtonUI,
  args: { label: "Button", variant: "primary" },
};

const Template = (args) => ({
  components: { ButtonUI },
  setup() {
    return { args };
  },
  template: '<ButtonUI v-bind="args" />',
});

export const Button = Template.bind({});
Button.args = {
  label: "Button",
  variant: "primary",
};
