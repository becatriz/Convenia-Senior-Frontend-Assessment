import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ButtonUI from "../../components/components-ui/ButtonUI.vue";

describe("ButtonUI", () => {
  it("Should renders properly for label", () => {
    const wrapper = mount(ButtonUI, { props: { label: "Enviar" } });
    expect(wrapper.text()).toContain("Enviar");
  });

  it("Should renders properly for disabled", () => {
    const wrapper = mount(ButtonUI, { props: { disabled: true } });
    const SubmitButton = wrapper.find("#button-send");
    expect(SubmitButton.attributes().disabled).toBeDefined();
  });

  it("Should emit event handle click", () => {
    const wrapper = mount(ButtonUI);
    wrapper.vm.$emit("handleClick");
    expect(wrapper.emitted().handleClick).toBeTruthy();
  });
});
