import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ModalUI from "../../components/components-ui/ModalUI.vue";

describe("ModalUI", () => {
  it("Should renders properly for isOpenModal", () => {
    const wrapper = mount(ModalUI, { props: { isOpenModal: true } });
    expect(wrapper.find(".modal").exists()).toBe(true);
  });

  it("Should renders no properly for isOpenModal", () => {
    const wrapper = mount(ModalUI, { props: { isOpenModal: false } });
    expect(wrapper.find(".modal").exists()).toBe(false);
  });

  it("Should renders no properly for isCanCloseModal", () => {
    const wrapper = mount(ModalUI, {
      props: { isOpenModal: true, isCanCloseModal: false },
    });
    expect(wrapper.find("span").exists()).toBe(false);
  });

  it("Should renders properly for isCanCloseModal", () => {
    const wrapper = mount(ModalUI, {
      props: { isOpenModal: true, isCanCloseModal: true },
    });
    expect(wrapper.find("span").exists()).toBe(true);
  });

  it("Should emit event input:modelValue", () => {
    const wrapper = mount(ModalUI);
    wrapper.vm.$emit("input:modelValue");
    expect(wrapper.emitted("input:modelValue")).toBeTruthy();
  });

  it("Render slot Footer", () => {
    const wrapper = mount(ModalUI, {
      props: {
        isOpenModal: true,
      },
      slots: {
        footer: "<div>Footer</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>Footer</div>");
  });
});
