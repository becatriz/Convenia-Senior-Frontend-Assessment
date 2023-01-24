import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CardUI from "../components-ui/CardUI.vue";

describe("CardUI", () => {
  it("Should renders properly for title", () => {
    const wrapper = mount(CardUI, { props: { title: "Novo Pagamento" } });
    expect(wrapper.text()).toContain("Novo Pagamento");
  });

  it("Should renders slot Body", () => {
    const wrapper = mount(CardUI, {
      slots: {
        body: "<div>Body</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>Body</div>");
  });

  it("Should renders slot Footer", () => {
    const wrapper = mount(CardUI, {
      slots: {
        footer: "<div>Footer</div>",
      },
    });
    expect(wrapper.html()).toContain("<div>Footer</div>");
  });
});
