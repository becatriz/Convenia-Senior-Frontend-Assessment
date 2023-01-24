import AccordionUI from "../components-ui/AccordionUI.vue";

export default {
  title: "Components-UI/Accordion",
  component: AccordionUI,
  args: { title: "Bebidas", isOpen: false },
};

const Template = (args) => ({
  components: { AccordionUI },
  setup() {
    return { args };
  },
  template:
    '<AccordionUI v-bind="args"><template #list><ul><li>1 Item</li><li>2 Item</li><li>3 Item</li></ul></template></AccordionUI>',
});

export const Accordion = Template.bind({});
Accordion.args = {
  title: "Bebidas",
  isOpen: false,
};
