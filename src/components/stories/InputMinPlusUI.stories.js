import { action } from "@storybook/addon-actions";
import InputMinPlusUI from "../components-ui/InputMinPlusUI.vue";

export default {
  title: "Components-UI/Inputs",
  component: InputMinPlusUI,
  args: { amount: 1 },
};

const Template = (args) => ({
  components: { InputMinPlusUI },
  setup() {
    return { args };
  },
  template: '<InputMinPlusUI v-bind="args" @click="handleAddItem" />',
  methods: {
    handleAddItem: action("clicked"),
    handleRemoveItem: action("clicked"),
  },
});

export const minPlus = Template.bind({});
minPlus.args = {
  amount: 1,
};
