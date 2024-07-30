import { openBlock as n, createElementBlock as o, normalizeClass as _, toDisplayString as a } from "vue";
const c = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [s, l] of e)
    r[s] = l;
  return r;
}, p = {
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
    return (e, r) => (n(), o("button", {
      class: _(`ui-button ${t.type}`)
    }, a(t.label), 3));
  }
}, u = /* @__PURE__ */ c(p, [["__scopeId", "data-v-69e51da6"]]), i = { class: "zrh-label" }, b = {
  __name: "label",
  props: {
    label: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, r) => (n(), o("div", i, a(t.label), 1));
  }
}, d = /* @__PURE__ */ c(b, [["__scopeId", "data-v-c6bc881d"]]), m = [u, d], f = (t) => {
  m.forEach((e) => {
    t.component(e.name, e);
  });
};
export {
  u as ZrhButton,
  d as ZrhLabel,
  f as install
};
