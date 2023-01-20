import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ModalGlobal from "../ModalGlobal.vue";

describe("ModalGlobal", () => {
  it("Renders properly for isOpenModal", () => {
    const wrapper = mount(ModalGlobal, { props: { isOpenModal: true } });
    expect(wrapper.find(".modal").exists()).toBe(true);
  });

  it("Renders no properly for isOpenModal", () => {
    const wrapper = mount(ModalGlobal, { props: { isOpenModal: false } });
    expect(wrapper.find(".modal").exists()).toBe(false);
  });

  it("Renders no properly for isCanCloseModal", () => {
    const wrapper = mount(ModalGlobal, {
      props: { isOpenModal: true, isCanCloseModal: false },
    });
    expect(wrapper.find("span").exists()).toBe(false);
  });

  it("Renders properly for isCanCloseModal", () => {
    const wrapper = mount(ModalGlobal, {
      props: { isOpenModal: true, isCanCloseModal: true },
    });
    expect(wrapper.find("span").exists()).toBe(true);
  });

  it("Emit event input:modelValue", () => {
    const wrapper = mount(ModalGlobal);
    wrapper.vm.$emit('input:modelValue');
    expect(wrapper.emitted('input:modelValue')).toBeTruthy();
  });

  it("Render slot Footer", () => {
    const wrapper = mount(ModalGlobal, {
      props:{
        isOpenModal: true
      },
      slots:{
        footer: '<div>Footer</div>'
      }
    });
    expect(wrapper.html()).toContain('<div>Footer</div>')
  });
});
