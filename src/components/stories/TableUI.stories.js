import TableUI from "../components-ui/TableUI.vue";

export default {
  title: "Components-UI/Table",
  component: TableUI,
  args: { title: "Table", value: "Value" },
};

const Template = (args) => ({
  components: { TableUI },
  setup() {
    return { args };
  },
  template: '<div v-for="item in [1,2,3]"><TableUI v-bind="args" /></div>',
});

export const Table = Template.bind({});
Table.args = {
  title: "Cerveja",
  value: "R$ 5,00",
};
