import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderGlobal from "../HeaderGlobal.vue";

describe("HeaderGlobal", () => {
  it("Renders properly for user", () => {
    const wrapper = mount(HeaderGlobal, { props: { user: "input" } });
    expect(wrapper.text()).toContain("input");
  });

  it("Renders properly for hours", () => {
    const wrapper = mount(HeaderGlobal, { props: { hours: "15:35" } });
    expect(wrapper.text()).toContain("15:35");
  });

  it("Renders properly for weekday", () => {
    const wrapper = mount(HeaderGlobal, { props: { weekday: "Domingo" } });
    expect(wrapper.text()).toContain("Domingo");
  });

  it("No renders properly for user", () => {
    const wrapper = mount(HeaderGlobal, { props: { user: "" } });
    expect(wrapper.find('#user-name').exists()).toBe(false)
  });
});
