import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import LoadingUI from "../components-ui/LoadingUI.vue";

describe("LoadingUI", () => {
  it("Should renders properly", async () => {
    const wrapper = mount(LoadingUI, { props: { isLoading: true } });
    expect(wrapper.find(".loader").exists()).toBe(true);
  });
});
