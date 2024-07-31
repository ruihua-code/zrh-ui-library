import { defineComponent as s, ref as p, resolveComponent as u, openBlock as r, createBlock as i, normalizeClass as d, withCtx as m, createTextVNode as b, toDisplayString as a, createElementBlock as f } from "vue";
const l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, h = s({
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
    const e = p("abc"), o = () => {
      console.log(e.value);
    };
    return (n, c) => {
      const _ = u("el-button");
      return r(), i(_, {
        class: d(`zrh-button ${t.type}`),
        onClick: o
      }, {
        default: m(() => [
          b(a(t.label), 1)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), y = /* @__PURE__ */ l(g, [["__scopeId", "data-v-8dd79ee7"]]), v = { class: "zrh-label" }, x = s({
  name: "ZrhLabel"
}), k = /* @__PURE__ */ Object.assign(x, {
  props: {
    label: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return (e, o) => (r(), f("div", v, a(t.label), 1));
  }
}), B = /* @__PURE__ */ l(k, [["__scopeId", "data-v-5f376273"]]), C = [y, B], Z = (t) => {
  C.forEach((e) => {
    t.component(e.name, e);
  });
};
export {
  y as ZrhButton,
  B as ZrhLabel,
  Z as install
};
