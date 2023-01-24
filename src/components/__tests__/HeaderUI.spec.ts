import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderUI from "../../components/components-ui/HeaderUI.vue";

describe("HeaderUI", () => {
  it("Should renders properly for user", () => {
    const wrapper = mount(HeaderUI, { props: { user: "input" } });
    expect(wrapper.text()).toContain("input");
  });

  it("Should renders properly for hours", () => {
    const wrapper = mount(HeaderUI, { props: { hours: "15:35" } });
    expect(wrapper.text()).toContain("15:35");
  });

  it("Should renders properly for weekday", () => {
    const wrapper = mount(HeaderUI, { props: { weekday: "Domingo" } });
    expect(wrapper.text()).toContain("Domingo");
  });

  it("Should renders no renders properly for user", () => {
    const wrapper = mount(HeaderUI, { props: { user: "" } });
    expect(wrapper.find("#user-name").exists()).toBe(false);
  });
});
