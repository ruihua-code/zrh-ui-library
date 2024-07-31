import { defineComponent as r, ref as u, resolveComponent as p, openBlock as a, createBlock as i, normalizeClass as d, withCtx as b, createTextVNode as m, toDisplayString as c, createElementBlock as f } from "vue";
const l = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, s] of o)
    e[n] = s;
  return e;
}, h = r({
  name: "ZrhButton"
}), g = /* @__PURE__ */ Object.assign(h, {
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
    const o = u("abc"), e = () => {
      console.log(o.value);
    };
    return (n, s) => {
      const _ = p("el-button");
      return a(), i(_, {
        class: d(`zrh-button ${t.type}`),
        onClick: e
      }, {
        default: b(() => [
          m(c(t.label), 1)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), B = /* @__PURE__ */ l(g, [["__scopeId", "data-v-8dd79ee7"]]), y = { class: "zrh-label" }, v = r({
  name: "ZrhLabel"
}), x = /* @__PURE__ */ Object.assign(v, {
  props: {
    label: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (o, e) => (a(), f("div", y, c(t.label), 1));
  }
}), C = /* @__PURE__ */ l(x, [["__scopeId", "data-v-5f376273"]]);
export {
  B as ZrhButton,
  C as ZrhLabel
};
