import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InputMinPlusUI from "../components-ui/InputMinPlusUI.vue";

describe("InputMinPlusUI", () => {
  it("Should renders properly for title", () => {
    const wrapper = mount(InputMinPlusUI, {
      props: { amount: 1 },
    });
    expect(wrapper.find(".wrapper__amount").exists()).toBe(true);
  });

  it("Should renders properly for title", () => {
    const wrapper = mount(InputMinPlusUI, {
      props: { amount: 0 },
    });
    expect(wrapper.find(".wrapper__min--disabled").exists()).toBe(true);
  });

  it("Should emit event handleRemoveItem", () => {
    const wrapper = mount(InputMinPlusUI);
    wrapper.vm.$emit("handleRemoveItem");
    expect(wrapper.emitted("handleRemoveItem")).toBeTruthy();
  });
});
