import { openBlock as n, createElementBlock as a, normalizeClass as l, toDisplayString as o } from "vue";
const p = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [c, s] of e)
    r[c] = s;
  return r;
}, _ = {
  __name: "button",
  props: {
    label: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "primary"
    }
  },
  setup(t) {
    return (e, r) => (n(), a("button", {
      class: l(`ui-button ${t.type}`)
    }, o(t.label), 3));
  }
}, u = /* @__PURE__ */ p(_, [["__scopeId", "data-v-8aeb201d"]]), i = { class: "zrh-label" }, b = {
  __name: "label",
  props: {
    label: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, r) => (n(), a("div", i, o(t.label), 1));
  }
}, m = [u, b], y = (t) => {
  m.forEach((e) => {
    t.component(e.name, e);
  });
};
export {
  u as ZrhButton,
  b as ZrhLabel,
  y as install
};
