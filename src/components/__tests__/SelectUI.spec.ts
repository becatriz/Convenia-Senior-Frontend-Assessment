import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SelectUI from "../components-ui/SelectUI.vue";

const OPTIONS = [
  { value: "BRL", option: "Brasil" },
  { value: "USD", option: "Eua" },
];

describe("SelectUI", () => {
  it("Should renders properly for options", () => {
    const wrapper = mount(SelectUI, {
      props: { items: OPTIONS },
    });
    expect(wrapper.text()).toContain("Brasil");
    expect(wrapper.text()).toContain("Eua");
  });

  it("Should renders properly for name", () => {
    const wrapper = mount(SelectUI, { props: { name: "currency" } });
    const Select = wrapper.find("#select-ui");
    expect(Select.attributes().name).toBeDefined();
  });

  it("Should renders attributes for value", () => {
    const wrapper = mount(SelectUI, { props: { items: OPTIONS } });
    const selected: HTMLSelectElement = wrapper.find("select")
      .element as HTMLSelectElement;
    const value = selected.value;
    expect(value).toContain("BRL");
  });

  it("Should emit event onchange", () => {
    const wrapper = mount(SelectUI);
    wrapper.vm.$emit("onchange");
    expect(wrapper.emitted("onchange")).toBeTruthy();
  });
});
