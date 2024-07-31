import { defineComponent as r, openBlock as o, createElementBlock as a, normalizeClass as p, toDisplayString as s } from "vue";
const c = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [l, _] of e)
    n[l] = _;
  return n;
}, i = r({
  name: "ZrhButton"
}), u = /* @__PURE__ */ Object.assign(i, {
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
    return (e, n) => (o(), a("button", {
      class: p(`zrh-button ${t.type}`)
    }, s(t.label), 3));
  }
}), b = /* @__PURE__ */ c(u, [["__scopeId", "data-v-4012a248"]]), d = { class: "zrh-label" }, m = r({
  name: "ZrhLabel"
}), f = /* @__PURE__ */ Object.assign(m, {
  props: {
    label: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, n) => (o(), a("div", d, s(t.label), 1));
  }
}), h = /* @__PURE__ */ c(f, [["__scopeId", "data-v-6556351b"]]), y = [b, h], v = (t) => {
  y.forEach((e) => {
    t.component(e.name, e);
  });
};
export {
  b as ZrhButton,
  h as ZrhLabel,
  v as install
};
