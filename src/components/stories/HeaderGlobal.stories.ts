import HeaderGlobal from '../HeaderGlobal.vue';

export default {
  title: 'Example/Header',
  component: HeaderGlobal,
  args: { user: 'Name' },
};

const Template = (args: any) => ({
  components: { HeaderGlobal },
  setup() {
    return { args };
  },
  template: '<header-global v-bind="args" />',
});

export const Header: any = Template.bind({});
Header.args  = {
  user: 'Name',
  hours: '15:30',
  weekday: 'Domingo'
};
