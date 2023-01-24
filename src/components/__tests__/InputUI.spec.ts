import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import InputUI from "../components-ui/InputUI.vue";

describe("InputUI", () => {
  it("Should renders attributes for id", () => {
    const wrapper = mount(InputUI, { props: { id: "test" } });
    const Input = wrapper.find("#test");
    expect(Input.exists()).toBe(true);
  });

  it("Should renders attributes for placeholder", () => {
    const wrapper = mount(InputUI, { props: { placeholder: "Nome" } });
    const Input = wrapper.find("input");
    expect(Input.attributes().placeholder).toBe("Nome");
  });

  it("Should renders attributes for type", () => {
    const wrapper = mount(InputUI, { props: { type: "text" } });
    const Input = wrapper.find("input");
    expect(Input.attributes().type).toBe("text");
  });

  it("Should renders attributes for name", () => {
    const wrapper = mount(InputUI, { props: { name: "name" } });
    const Input = wrapper.find("input");
    expect(Input.attributes().name).toBe("name");
  });

  it("Should renders attributes for value", () => {
    const wrapper = mount(InputUI, { props: { value: "Rebeca" } });
    const inputField: HTMLInputElement = wrapper.find("input")
      .element as HTMLInputElement;
    const value = inputField.value;
    expect(value).toContain("Rebeca");
  });

  it("Should emit event input:modelValue", () => {
    const wrapper = mount(InputUI);
    wrapper.vm.$emit("input:modelValue");
    expect(wrapper.emitted("input:modelValue")).toBeTruthy();
  });
});
