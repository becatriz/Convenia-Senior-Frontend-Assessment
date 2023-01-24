import LoadingUI from "../components-ui/LoadingUI.vue";

export default {
  title: "Components-UI/Loading",
  component: LoadingUI,
  args: { isLoading: true },
};

const Template = (args) => ({
  components: { LoadingUI },
  setup() {
    return { args };
  },
  template: '<LoadingUI v-bind="args" />',
});

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
