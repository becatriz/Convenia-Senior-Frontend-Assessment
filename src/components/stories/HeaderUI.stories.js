import HeaderUI from "../components-ui/HeaderUI.vue";

export default {
  title: "Components-UI/Header",
  component: HeaderUI,
  args: { user: "Name" },
};

const Template = (args) => ({
  components: { HeaderUI },
  setup() {
    return { args };
  },
  template: '<HeaderUI v-bind="args" />',
});

export const Header = Template.bind({});
Header.args = {
  user: "Name",
  hours: "15:30",
  weekday: "Domingo",
};
