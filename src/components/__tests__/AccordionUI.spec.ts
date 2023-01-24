import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AccordionUI from "../components-ui/AccordionUI.vue";

describe("AccordionUI", () => {
  it("Should renders properly for title", () => {
    const wrapper = mount(AccordionUI, { props: { title: "Bebidas" } });
    expect(wrapper.text()).toContain("Bebidas");
  });

  it("Should renders properly for title", () => {
    const wrapper = mount(AccordionUI, { props: { isOpen: true } });
    expect(wrapper.find("#summary-details").exists()).toBe(true);
  });

  it("Should renders slot List", () => {
    const wrapper = mount(AccordionUI, {
      props: {
        isOpen: true,
      },
      slots: {
        list: "<div>List</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>List</div>");
  });
});
