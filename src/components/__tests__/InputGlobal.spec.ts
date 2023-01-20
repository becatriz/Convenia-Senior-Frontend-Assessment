import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InputGlobal from "../InputGlobal.vue";

describe("InputGlobal", () => {
  it("Renders attributes for id", () => {
    const wrapper = mount(InputGlobal, { props: { id: "test" } });
    const Input = wrapper.find("#test");
    expect(Input.exists()).toBe(true);
  });

  it("Renders attributes for placeholder", () => {
    const wrapper = mount(InputGlobal, { props: { placeholder: "Nome" } });
    const Input = wrapper.find("input");
    expect(Input.attributes().placeholder).toBe("Nome");
  });

  it("Renders attributes for type", () => {
    const wrapper = mount(InputGlobal, { props: { type: "text" } });
    const Input = wrapper.find("input");
    expect(Input.attributes().type).toBe("text");
  });

  it("Renders attributes for name", () => {
    const wrapper = mount(InputGlobal, { props: { name: "name" } });
    const Input = wrapper.find("input");
    expect(Input.attributes().name).toBe("name");
  });

  it("Renders attributes for value", () => {
    const wrapper = mount(InputGlobal, { props: { value: "Rebeca" } });
    const inputField: HTMLInputElement = wrapper.find("input")
      .element as HTMLInputElement;
    const value = inputField.value;
    expect(value).toContain("Rebeca");
  });

  it("Emit event input:modelValue", () => {
    const wrapper = mount(InputGlobal);
    wrapper.vm.$emit('input:modelValue');
    expect(wrapper.emitted('input:modelValue')).toBeTruthy();
  });
});
