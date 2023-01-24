import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TableUI from "../components-ui/TableUI.vue";

describe("TableUI", () => {
  it("Should renders properly for title", () => {
    const wrapper = mount(TableUI, { props: { title: "Total" } });
    expect(wrapper.text()).toContain("Total");
  });

  it("Should renders properly for value", () => {
    const wrapper = mount(TableUI, { props: { value: "Pagamentos" } });
    expect(wrapper.text()).toContain("Pagamentos");
  });

  it("Should renders slot component", () => {
    const wrapper = mount(TableUI, {
      slots: {
        component: "<div>Component</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>Component</div>");
  });
});
