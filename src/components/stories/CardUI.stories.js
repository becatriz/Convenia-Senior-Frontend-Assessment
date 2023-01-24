import CardUI from "../components-ui/CardUI.vue";

export default {
  title: "Components-UI/Card",
  component: CardUI,
  args: { title: "Novo Pagamento" },
};

const Template = (args) => ({
  components: { CardUI },
  setup() {
    return { args };
  },
  template:
    '<CardUI v-bind="args"><template #body><div>Card UI</div></template><template #footer><div>Footer</div></template></CardUI>',
});

export const Card = Template.bind({});
Card.args = {
  title: "Novo Pagamento",
};
