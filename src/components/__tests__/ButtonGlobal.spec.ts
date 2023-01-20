import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ButtonGlobal from "../ButtonGlobal.vue";

describe("ButtonGlobal", () => {
  it("Renders properly for label", () => {
    const wrapper = mount(ButtonGlobal, { props: { label: "Enviar" } });
    expect(wrapper.text()).toContain("Enviar");
  });

  it("Renders properly for disabled", () => {
    const wrapper = mount(ButtonGlobal, { props: { disabled: true } });
    const SubmitButton = wrapper.find('#button-send');
    expect(SubmitButton.attributes().disabled).toBeDefined();
  });

  it("Emit event handle click", () => {
    const wrapper = mount(ButtonGlobal);
    wrapper.vm.$emit('handleClick');
    expect(wrapper.emitted().handleClick).toBeTruthy();
  });
});
