"use strict";
(() => {
  // node_modules/tslib/tslib.es6.mjs
  function __decorate(decorators, target, key, desc) {
    var c4 = arguments.length, r7 = c4 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r7 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i5 = decorators.length - 1; i5 >= 0; i5--)
        if (d3 = decorators[i5])
          r7 = (c4 < 3 ? d3(r7) : c4 > 3 ? d3(target, key, r7) : d3(target, key)) || r7;
    return c4 > 3 && r7 && Object.defineProperty(target, key, r7), r7;
  }

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t = (t5) => (e8, o7) => {
    void 0 !== o7 ? o7.addInitializer(() => {
      customElements.define(t5, e8);
    }) : customElements.define(t5, e8);
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t2 = globalThis;
  var e = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t5, e8, o7) {
      if (this._$cssResult$ = true, o7 !== s)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t5, this.t = e8;
    }
    get styleSheet() {
      let t5 = this.o;
      const s4 = this.t;
      if (e && void 0 === t5) {
        const e8 = void 0 !== s4 && 1 === s4.length;
        e8 && (t5 = o.get(s4)), void 0 === t5 && ((this.o = t5 = new CSSStyleSheet()).replaceSync(this.cssText), e8 && o.set(s4, t5));
      }
      return t5;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t5) => new n("string" == typeof t5 ? t5 : t5 + "", void 0, s);
  var i = (t5, ...e8) => {
    const o7 = 1 === t5.length ? t5[0] : e8.reduce((e9, s4, o8) => e9 + ((t6) => {
      if (true === t6._$cssResult$)
        return t6.cssText;
      if ("number" == typeof t6)
        return t6;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t6 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s4) + t5[o8 + 1], t5[0]);
    return new n(o7, t5, s);
  };
  var S = (s4, o7) => {
    if (e)
      s4.adoptedStyleSheets = o7.map((t5) => t5 instanceof CSSStyleSheet ? t5 : t5.styleSheet);
    else
      for (const e8 of o7) {
        const o8 = document.createElement("style"), n5 = t2.litNonce;
        void 0 !== n5 && o8.setAttribute("nonce", n5), o8.textContent = e8.cssText, s4.appendChild(o8);
      }
  };
  var c = e ? (t5) => t5 : (t5) => t5 instanceof CSSStyleSheet ? ((t6) => {
    let e8 = "";
    for (const s4 of t6.cssRules)
      e8 += s4.cssText;
    return r(e8);
  })(t5) : t5;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t5, s4) => t5;
  var u = { toAttribute(t5, s4) {
    switch (s4) {
      case Boolean:
        t5 = t5 ? l : null;
        break;
      case Object:
      case Array:
        t5 = null == t5 ? t5 : JSON.stringify(t5);
    }
    return t5;
  }, fromAttribute(t5, s4) {
    let i5 = t5;
    switch (s4) {
      case Boolean:
        i5 = null !== t5;
        break;
      case Number:
        i5 = null === t5 ? null : Number(t5);
        break;
      case Object:
      case Array:
        try {
          i5 = JSON.parse(t5);
        } catch (t6) {
          i5 = null;
        }
    }
    return i5;
  } };
  var f = (t5, s4) => !i2(t5, s4);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var b = class extends HTMLElement {
    static addInitializer(t5) {
      this._$Ei(), (this.l ??= []).push(t5);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t5, s4 = y) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.elementProperties.set(t5, s4), !s4.noAccessor) {
        const i5 = Symbol(), r7 = this.getPropertyDescriptor(t5, i5, s4);
        void 0 !== r7 && e2(this.prototype, t5, r7);
      }
    }
    static getPropertyDescriptor(t5, s4, i5) {
      const { get: e8, set: h3 } = r2(this.prototype, t5) ?? { get() {
        return this[s4];
      }, set(t6) {
        this[s4] = t6;
      } };
      return { get() {
        return e8?.call(this);
      }, set(s5) {
        const r7 = e8?.call(this);
        h3.call(this, s5), this.requestUpdate(t5, r7, i5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t5) {
      return this.elementProperties.get(t5) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties")))
        return;
      const t5 = n2(this);
      t5.finalize(), void 0 !== t5.l && (this.l = [...t5.l]), this.elementProperties = new Map(t5.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized")))
        return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t6 = this.properties, s4 = [...h(t6), ...o2(t6)];
        for (const i5 of s4)
          this.createProperty(i5, t6[i5]);
      }
      const t5 = this[Symbol.metadata];
      if (null !== t5) {
        const s4 = litPropertyMetadata.get(t5);
        if (void 0 !== s4)
          for (const [t6, i5] of s4)
            this.elementProperties.set(t6, i5);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t6, s4] of this.elementProperties) {
        const i5 = this._$Eu(t6, s4);
        void 0 !== i5 && this._$Eh.set(i5, t6);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i5 = [];
      if (Array.isArray(s4)) {
        const e8 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e8)
          i5.unshift(c(s5));
      } else
        void 0 !== s4 && i5.push(c(s4));
      return i5;
    }
    static _$Eu(t5, s4) {
      const i5 = s4.attribute;
      return false === i5 ? void 0 : "string" == typeof i5 ? i5 : "string" == typeof t5 ? t5.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$Eg = new Promise((t5) => this.enableUpdating = t5), this._$AL = /* @__PURE__ */ new Map(), this._$ES(), this.requestUpdate(), this.constructor.l?.forEach((t5) => t5(this));
    }
    addController(t5) {
      (this._$E_ ??= /* @__PURE__ */ new Set()).add(t5), void 0 !== this.renderRoot && this.isConnected && t5.hostConnected?.();
    }
    removeController(t5) {
      this._$E_?.delete(t5);
    }
    _$ES() {
      const t5 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i5 of s4.keys())
        this.hasOwnProperty(i5) && (t5.set(i5, this[i5]), delete this[i5]);
      t5.size > 0 && (this._$Ep = t5);
    }
    createRenderRoot() {
      const t5 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t5, this.constructor.elementStyles), t5;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$E_?.forEach((t5) => t5.hostConnected?.());
    }
    enableUpdating(t5) {
    }
    disconnectedCallback() {
      this._$E_?.forEach((t5) => t5.hostDisconnected?.());
    }
    attributeChangedCallback(t5, s4, i5) {
      this._$AK(t5, i5);
    }
    _$EO(t5, s4) {
      const i5 = this.constructor.elementProperties.get(t5), e8 = this.constructor._$Eu(t5, i5);
      if (void 0 !== e8 && true === i5.reflect) {
        const r7 = (void 0 !== i5.converter?.toAttribute ? i5.converter : u).toAttribute(s4, i5.type);
        this._$Em = t5, null == r7 ? this.removeAttribute(e8) : this.setAttribute(e8, r7), this._$Em = null;
      }
    }
    _$AK(t5, s4) {
      const i5 = this.constructor, e8 = i5._$Eh.get(t5);
      if (void 0 !== e8 && this._$Em !== e8) {
        const t6 = i5.getPropertyOptions(e8), r7 = "function" == typeof t6.converter ? { fromAttribute: t6.converter } : void 0 !== t6.converter?.fromAttribute ? t6.converter : u;
        this._$Em = e8, this[e8] = r7.fromAttribute(s4, t6.type), this._$Em = null;
      }
    }
    requestUpdate(t5, s4, i5) {
      if (void 0 !== t5) {
        if (i5 ??= this.constructor.getPropertyOptions(t5), !(i5.hasChanged ?? f)(this[t5], s4))
          return;
        this.C(t5, s4, i5);
      }
      false === this.isUpdatePending && (this._$Eg = this._$EP());
    }
    C(t5, s4, i5) {
      this._$AL.has(t5) || this._$AL.set(t5, s4), true === i5.reflect && this._$Em !== t5 && (this._$ET ??= /* @__PURE__ */ new Set()).add(t5);
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$Eg;
      } catch (t6) {
        Promise.reject(t6);
      }
      const t5 = this.scheduleUpdate();
      return null != t5 && await t5, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending)
        return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t7, s5] of this._$Ep)
            this[t7] = s5;
          this._$Ep = void 0;
        }
        const t6 = this.constructor.elementProperties;
        if (t6.size > 0)
          for (const [s5, i5] of t6)
            true !== i5.wrapped || this._$AL.has(s5) || void 0 === this[s5] || this.C(s5, this[s5], i5);
      }
      let t5 = false;
      const s4 = this._$AL;
      try {
        t5 = this.shouldUpdate(s4), t5 ? (this.willUpdate(s4), this._$E_?.forEach((t6) => t6.hostUpdate?.()), this.update(s4)) : this._$Ej();
      } catch (s5) {
        throw t5 = false, this._$Ej(), s5;
      }
      t5 && this._$AE(s4);
    }
    willUpdate(t5) {
    }
    _$AE(t5) {
      this._$E_?.forEach((t6) => t6.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t5)), this.updated(t5);
    }
    _$Ej() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Eg;
    }
    shouldUpdate(t5) {
      return true;
    }
    update(t5) {
      this._$ET &&= this._$ET.forEach((t6) => this._$EO(t6, this[t6])), this._$Ej();
    }
    updated(t5) {
    }
    firstUpdated(t5) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ??= []).push("2.0.3");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r3 = (t5 = o3, e8, r7) => {
    const { kind: n5, metadata: i5 } = r7;
    let s4 = globalThis.litPropertyMetadata.get(i5);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i5, s4 = /* @__PURE__ */ new Map()), s4.set(r7.name, t5), "accessor" === n5) {
      const { name: o7 } = r7;
      return { set(r8) {
        const n6 = e8.get.call(this);
        e8.set.call(this, r8), this.requestUpdate(o7, n6, t5);
      }, init(e9) {
        return void 0 !== e9 && this.C(o7, void 0, t5), e9;
      } };
    }
    if ("setter" === n5) {
      const { name: o7 } = r7;
      return function(r8) {
        const n6 = this[o7];
        e8.call(this, r8), this.requestUpdate(o7, n6, t5);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n3(t5) {
    return (e8, o7) => "object" == typeof o7 ? r3(t5, e8, o7) : ((t6, e9, o8) => {
      const r7 = e9.hasOwnProperty(o8);
      return e9.constructor.createProperty(o8, r7 ? { ...t6, wrapped: true } : t6), r7 ? Object.getOwnPropertyDescriptor(e9, o8) : void 0;
    })(t5, e8, o7);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r4(r7) {
    return n3({ ...r7, state: true, attribute: false });
  }

  // node_modules/@lit/reactive-element/decorators/base.js
  var e3 = (e8, t5, c4) => (c4.configurable = true, c4.enumerable = true, Reflect.decorate && "object" != typeof t5 && Object.defineProperty(e8, t5, c4), c4);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e4(e8, r7) {
    return (n5, s4, i5) => {
      const o7 = (t5) => t5.renderRoot?.querySelector(e8) ?? null;
      if (r7) {
        const { get: e9, set: r8 } = "object" == typeof s4 ? n5 : i5 ?? (() => {
          const t5 = Symbol();
          return { get() {
            return this[t5];
          }, set(e10) {
            this[t5] = e10;
          } };
        })();
        return e3(n5, s4, { get() {
          let t5 = e9.call(this);
          return void 0 === t5 && (t5 = o7(this), (null !== t5 || this.hasUpdated) && r8.call(this, t5)), t5;
        } });
      }
      return e3(n5, s4, { get() {
        return o7(this);
      } });
    };
  }

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  function o4(o7) {
    return (e8, n5) => {
      const { slot: r7, selector: s4 } = o7 ?? {}, c4 = "slot" + (r7 ? `[name=${r7}]` : ":not([name])");
      return e3(e8, n5, { get() {
        const t5 = this.renderRoot?.querySelector(c4), e9 = t5?.assignedElements(o7) ?? [];
        return void 0 === s4 ? e9 : e9.filter((t6) => t6.matches(s4));
      } });
    };
  }

  // node_modules/lit-html/lit-html.js
  var t3 = globalThis;
  var i3 = t3.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t5) => t5 }) : void 0;
  var e5 = "$lit$";
  var h2 = `lit$${(Math.random() + "").slice(9)}$`;
  var o5 = "?" + h2;
  var n4 = `<${o5}>`;
  var r5 = document;
  var l2 = () => r5.createComment("");
  var c3 = (t5) => null === t5 || "object" != typeof t5 && "function" != typeof t5;
  var a2 = Array.isArray;
  var u2 = (t5) => a2(t5) || "function" == typeof t5?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t5) => (i5, ...s4) => ({ _$litType$: t5, strings: i5, values: s4 });
  var x = y2(1);
  var b2 = y2(2);
  var w = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var E = r5.createTreeWalker(r5, 129);
  function C(t5, i5) {
    if (!Array.isArray(t5) || !t5.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i5) : i5;
  }
  var P = (t5, i5) => {
    const s4 = t5.length - 1, o7 = [];
    let r7, l3 = 2 === i5 ? "<svg>" : "", c4 = f2;
    for (let i6 = 0; i6 < s4; i6++) {
      const s5 = t5[i6];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s5.length && (c4.lastIndex = y3, u3 = c4.exec(s5), null !== u3); )
        y3 = c4.lastIndex, c4 === f2 ? "!--" === u3[1] ? c4 = v : void 0 !== u3[1] ? c4 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r7 = RegExp("</" + u3[2], "g")), c4 = m) : void 0 !== u3[3] && (c4 = m) : c4 === m ? ">" === u3[0] ? (c4 = r7 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c4 === g || c4 === p2 ? c4 = m : c4 === v || c4 === _ ? c4 = f2 : (c4 = m, r7 = void 0);
      const x2 = c4 === m && t5[i6 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === f2 ? s5 + n4 : d3 >= 0 ? (o7.push(a3), s5.slice(0, d3) + e5 + s5.slice(d3) + h2 + x2) : s5 + h2 + (-2 === d3 ? i6 : x2);
    }
    return [C(t5, l3 + (t5[s4] || "<?>") + (2 === i5 ? "</svg>" : "")), o7];
  };
  var V = class _V {
    constructor({ strings: t5, _$litType$: s4 }, n5) {
      let r7;
      this.parts = [];
      let c4 = 0, a3 = 0;
      const u3 = t5.length - 1, d3 = this.parts, [f3, v2] = P(t5, s4);
      if (this.el = _V.createElement(f3, n5), E.currentNode = this.el.content, 2 === s4) {
        const t6 = this.el.content.firstChild;
        t6.replaceWith(...t6.childNodes);
      }
      for (; null !== (r7 = E.nextNode()) && d3.length < u3; ) {
        if (1 === r7.nodeType) {
          if (r7.hasAttributes())
            for (const t6 of r7.getAttributeNames())
              if (t6.endsWith(e5)) {
                const i5 = v2[a3++], s5 = r7.getAttribute(t6).split(h2), e8 = /([.?@])?(.*)/.exec(i5);
                d3.push({ type: 1, index: c4, name: e8[2], strings: s5, ctor: "." === e8[1] ? k : "?" === e8[1] ? H : "@" === e8[1] ? I : R }), r7.removeAttribute(t6);
              } else
                t6.startsWith(h2) && (d3.push({ type: 6, index: c4 }), r7.removeAttribute(t6));
          if ($.test(r7.tagName)) {
            const t6 = r7.textContent.split(h2), s5 = t6.length - 1;
            if (s5 > 0) {
              r7.textContent = i3 ? i3.emptyScript : "";
              for (let i5 = 0; i5 < s5; i5++)
                r7.append(t6[i5], l2()), E.nextNode(), d3.push({ type: 2, index: ++c4 });
              r7.append(t6[s5], l2());
            }
          }
        } else if (8 === r7.nodeType)
          if (r7.data === o5)
            d3.push({ type: 2, index: c4 });
          else {
            let t6 = -1;
            for (; -1 !== (t6 = r7.data.indexOf(h2, t6 + 1)); )
              d3.push({ type: 7, index: c4 }), t6 += h2.length - 1;
          }
        c4++;
      }
    }
    static createElement(t5, i5) {
      const s4 = r5.createElement("template");
      return s4.innerHTML = t5, s4;
    }
  };
  function N(t5, i5, s4 = t5, e8) {
    if (i5 === w)
      return i5;
    let h3 = void 0 !== e8 ? s4._$Co?.[e8] : s4._$Cl;
    const o7 = c3(i5) ? void 0 : i5._$litDirective$;
    return h3?.constructor !== o7 && (h3?._$AO?.(false), void 0 === o7 ? h3 = void 0 : (h3 = new o7(t5), h3._$AT(t5, s4, e8)), void 0 !== e8 ? (s4._$Co ??= [])[e8] = h3 : s4._$Cl = h3), void 0 !== h3 && (i5 = N(t5, h3._$AS(t5, i5.values), h3, e8)), i5;
  }
  var S2 = class {
    constructor(t5, i5) {
      this._$AV = [], this._$AN = void 0, this._$AD = t5, this._$AM = i5;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t5) {
      const { el: { content: i5 }, parts: s4 } = this._$AD, e8 = (t5?.creationScope ?? r5).importNode(i5, true);
      E.currentNode = e8;
      let h3 = E.nextNode(), o7 = 0, n5 = 0, l3 = s4[0];
      for (; void 0 !== l3; ) {
        if (o7 === l3.index) {
          let i6;
          2 === l3.type ? i6 = new M(h3, h3.nextSibling, this, t5) : 1 === l3.type ? i6 = new l3.ctor(h3, l3.name, l3.strings, this, t5) : 6 === l3.type && (i6 = new L(h3, this, t5)), this._$AV.push(i6), l3 = s4[++n5];
        }
        o7 !== l3?.index && (h3 = E.nextNode(), o7++);
      }
      return E.currentNode = r5, e8;
    }
    p(t5) {
      let i5 = 0;
      for (const s4 of this._$AV)
        void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t5, s4, i5), i5 += s4.strings.length - 2) : s4._$AI(t5[i5])), i5++;
    }
  };
  var M = class _M {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t5, i5, s4, e8) {
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t5, this._$AB = i5, this._$AM = s4, this.options = e8, this._$Cv = e8?.isConnected ?? true;
    }
    get parentNode() {
      let t5 = this._$AA.parentNode;
      const i5 = this._$AM;
      return void 0 !== i5 && 11 === t5?.nodeType && (t5 = i5.parentNode), t5;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t5, i5 = this) {
      t5 = N(this, t5, i5), c3(t5) ? t5 === T || null == t5 || "" === t5 ? (this._$AH !== T && this._$AR(), this._$AH = T) : t5 !== this._$AH && t5 !== w && this._(t5) : void 0 !== t5._$litType$ ? this.g(t5) : void 0 !== t5.nodeType ? this.$(t5) : u2(t5) ? this.T(t5) : this._(t5);
    }
    k(t5) {
      return this._$AA.parentNode.insertBefore(t5, this._$AB);
    }
    $(t5) {
      this._$AH !== t5 && (this._$AR(), this._$AH = this.k(t5));
    }
    _(t5) {
      this._$AH !== T && c3(this._$AH) ? this._$AA.nextSibling.data = t5 : this.$(r5.createTextNode(t5)), this._$AH = t5;
    }
    g(t5) {
      const { values: i5, _$litType$: s4 } = t5, e8 = "number" == typeof s4 ? this._$AC(t5) : (void 0 === s4.el && (s4.el = V.createElement(C(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e8)
        this._$AH.p(i5);
      else {
        const t6 = new S2(e8, this), s5 = t6.u(this.options);
        t6.p(i5), this.$(s5), this._$AH = t6;
      }
    }
    _$AC(t5) {
      let i5 = A.get(t5.strings);
      return void 0 === i5 && A.set(t5.strings, i5 = new V(t5)), i5;
    }
    T(t5) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i5 = this._$AH;
      let s4, e8 = 0;
      for (const h3 of t5)
        e8 === i5.length ? i5.push(s4 = new _M(this.k(l2()), this.k(l2()), this, this.options)) : s4 = i5[e8], s4._$AI(h3), e8++;
      e8 < i5.length && (this._$AR(s4 && s4._$AB.nextSibling, e8), i5.length = e8);
    }
    _$AR(t5 = this._$AA.nextSibling, i5) {
      for (this._$AP?.(false, true, i5); t5 && t5 !== this._$AB; ) {
        const i6 = t5.nextSibling;
        t5.remove(), t5 = i6;
      }
    }
    setConnected(t5) {
      void 0 === this._$AM && (this._$Cv = t5, this._$AP?.(t5));
    }
  };
  var R = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t5, i5, s4, e8, h3) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t5, this.name = i5, this._$AM = e8, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = T;
    }
    _$AI(t5, i5 = this, s4, e8) {
      const h3 = this.strings;
      let o7 = false;
      if (void 0 === h3)
        t5 = N(this, t5, i5, 0), o7 = !c3(t5) || t5 !== this._$AH && t5 !== w, o7 && (this._$AH = t5);
      else {
        const e9 = t5;
        let n5, r7;
        for (t5 = h3[0], n5 = 0; n5 < h3.length - 1; n5++)
          r7 = N(this, e9[s4 + n5], i5, n5), r7 === w && (r7 = this._$AH[n5]), o7 ||= !c3(r7) || r7 !== this._$AH[n5], r7 === T ? t5 = T : t5 !== T && (t5 += (r7 ?? "") + h3[n5 + 1]), this._$AH[n5] = r7;
      }
      o7 && !e8 && this.O(t5);
    }
    O(t5) {
      t5 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t5 ?? "");
    }
  };
  var k = class extends R {
    constructor() {
      super(...arguments), this.type = 3;
    }
    O(t5) {
      this.element[this.name] = t5 === T ? void 0 : t5;
    }
  };
  var H = class extends R {
    constructor() {
      super(...arguments), this.type = 4;
    }
    O(t5) {
      this.element.toggleAttribute(this.name, !!t5 && t5 !== T);
    }
  };
  var I = class extends R {
    constructor(t5, i5, s4, e8, h3) {
      super(t5, i5, s4, e8, h3), this.type = 5;
    }
    _$AI(t5, i5 = this) {
      if ((t5 = N(this, t5, i5, 0) ?? T) === w)
        return;
      const s4 = this._$AH, e8 = t5 === T && s4 !== T || t5.capture !== s4.capture || t5.once !== s4.once || t5.passive !== s4.passive, h3 = t5 !== T && (s4 === T || e8);
      e8 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t5), this._$AH = t5;
    }
    handleEvent(t5) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t5) : this._$AH.handleEvent(t5);
    }
  };
  var L = class {
    constructor(t5, i5, s4) {
      this.element = t5, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t5) {
      N(this, t5);
    }
  };
  var Z = t3.litHtmlPolyfillSupport;
  Z?.(V, M), (t3.litHtmlVersions ??= []).push("3.1.1");
  var j = (t5, i5, s4) => {
    const e8 = s4?.renderBefore ?? i5;
    let h3 = e8._$litPart$;
    if (void 0 === h3) {
      const t6 = s4?.renderBefore ?? null;
      e8._$litPart$ = h3 = new M(i5.insertBefore(l2(), t6), t6, void 0, s4 ?? {});
    }
    return h3._$AI(t5), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t5 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t5.firstChild, t5;
    }
    update(t5) {
      const i5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t5), this._$Do = j(i5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return w;
    }
  };
  s3._$litElement$ = true, s3["finalized", "finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: s3 });
  var r6 = globalThis.litElementPolyfillSupport;
  r6?.({ LitElement: s3 });
  (globalThis.litElementVersions ??= []).push("4.0.3");

  // node_modules/lit-html/is-server.js
  var o6 = false;

  // node_modules/@material/web/elevation/internal/elevation.js
  var Elevation = class extends s3 {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("aria-hidden", "true");
    }
    render() {
      return x`<span class="shadow"></span>`;
    }
  };

  // node_modules/@material/web/elevation/internal/elevation-styles.css.js
  var styles = i`:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;

  // node_modules/@material/web/elevation/elevation.js
  var MdElevation = class MdElevation2 extends Elevation {
  };
  MdElevation.styles = [styles];
  MdElevation = __decorate([
    t("md-elevation")
  ], MdElevation);

  // node_modules/@material/web/internal/controller/attachable-controller.js
  var ATTACHABLE_CONTROLLER = Symbol("attachableController");
  var FOR_ATTRIBUTE_OBSERVER;
  if (!o6) {
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
      for (const record of records) {
        record.target[ATTACHABLE_CONTROLLER]?.hostConnected();
      }
    });
  }
  var AttachableController = class {
    get htmlFor() {
      return this.host.getAttribute("for");
    }
    set htmlFor(htmlFor) {
      if (htmlFor === null) {
        this.host.removeAttribute("for");
      } else {
        this.host.setAttribute("for", htmlFor);
      }
    }
    get control() {
      if (this.host.hasAttribute("for")) {
        if (!this.htmlFor || !this.host.isConnected) {
          return null;
        }
        return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
      }
      return this.currentControl || this.host.parentElement;
    }
    set control(control) {
      if (control) {
        this.attach(control);
      } else {
        this.detach();
      }
    }
    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(host, onControlChange) {
      this.host = host;
      this.onControlChange = onControlChange;
      this.currentControl = null;
      host.addController(this);
      host[ATTACHABLE_CONTROLLER] = this;
      FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ["for"] });
    }
    attach(control) {
      if (control === this.currentControl) {
        return;
      }
      this.setCurrentControl(control);
      this.host.removeAttribute("for");
    }
    detach() {
      this.setCurrentControl(null);
      this.host.setAttribute("for", "");
    }
    /** @private */
    hostConnected() {
      this.setCurrentControl(this.control);
    }
    /** @private */
    hostDisconnected() {
      this.setCurrentControl(null);
    }
    setCurrentControl(control) {
      this.onControlChange(this.currentControl, control);
      this.currentControl = control;
    }
  };

  // node_modules/@material/web/focus/internal/focus-ring.js
  var EVENTS = ["focusin", "focusout", "pointerdown"];
  var FocusRing = class extends s3 {
    constructor() {
      super(...arguments);
      this.visible = false;
      this.inward = false;
      this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
      return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
      this.attachableController.htmlFor = htmlFor;
    }
    get control() {
      return this.attachableController.control;
    }
    set control(control) {
      this.attachableController.control = control;
    }
    attach(control) {
      this.attachableController.attach(control);
    }
    detach() {
      this.attachableController.detach();
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("aria-hidden", "true");
    }
    /** @private */
    handleEvent(event) {
      if (event[HANDLED_BY_FOCUS_RING]) {
        return;
      }
      switch (event.type) {
        default:
          return;
        case "focusin":
          this.visible = this.control?.matches(":focus-visible") ?? false;
          break;
        case "focusout":
        case "pointerdown":
          this.visible = false;
          break;
      }
      event[HANDLED_BY_FOCUS_RING] = true;
    }
    onControlChange(prev, next) {
      if (o6)
        return;
      for (const event of EVENTS) {
        prev?.removeEventListener(event, this);
        next?.addEventListener(event, this);
      }
    }
    update(changed) {
      if (changed.has("visible")) {
        this.dispatchEvent(new Event("visibility-changed"));
      }
      super.update(changed);
    }
  };
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "visible", void 0);
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], FocusRing.prototype, "inward", void 0);
  var HANDLED_BY_FOCUS_RING = Symbol("handledByFocusRing");

  // node_modules/@material/web/focus/internal/focus-ring-styles.css.js
  var styles2 = i`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

  // node_modules/@material/web/focus/md-focus-ring.js
  var MdFocusRing = class MdFocusRing2 extends FocusRing {
  };
  MdFocusRing.styles = [styles2];
  MdFocusRing = __decorate([
    t("md-focus-ring")
  ], MdFocusRing);

  // node_modules/lit-html/directive.js
  var t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e6 = (t5) => (...e8) => ({ _$litDirective$: t5, values: e8 });
  var i4 = class {
    constructor(t5) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t5, e8, i5) {
      this._$Ct = t5, this._$AM = e8, this._$Ci = i5;
    }
    _$AS(t5, e8) {
      return this.update(t5, e8);
    }
    update(t5, e8) {
      return this.render(...e8);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e7 = e6(class extends i4 {
    constructor(t5) {
      if (super(t5), t5.type !== t4.ATTRIBUTE || "class" !== t5.name || t5.strings?.length > 2)
        throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t5) {
      return " " + Object.keys(t5).filter((s4) => t5[s4]).join(" ") + " ";
    }
    update(s4, [i5]) {
      if (void 0 === this.it) {
        this.it = /* @__PURE__ */ new Set(), void 0 !== s4.strings && (this.st = new Set(s4.strings.join(" ").split(/\s/).filter((t5) => "" !== t5)));
        for (const t5 in i5)
          i5[t5] && !this.st?.has(t5) && this.it.add(t5);
        return this.render(i5);
      }
      const r7 = s4.element.classList;
      for (const t5 of this.it)
        t5 in i5 || (r7.remove(t5), this.it.delete(t5));
      for (const t5 in i5) {
        const s5 = !!i5[t5];
        s5 === this.it.has(t5) || this.st?.has(t5) || (s5 ? (r7.add(t5), this.it.add(t5)) : (r7.remove(t5), this.it.delete(t5)));
      }
      return w;
    }
  });

  // node_modules/@material/web/internal/motion/animation.js
  var EASING = {
    STANDARD: "cubic-bezier(0.2, 0, 0, 1)",
    STANDARD_ACCELERATE: "cubic-bezier(.3,0,1,1)",
    STANDARD_DECELERATE: "cubic-bezier(0,0,0,1)",
    EMPHASIZED: "cubic-bezier(.3,0,0,1)",
    EMPHASIZED_ACCELERATE: "cubic-bezier(.3,0,.8,.15)",
    EMPHASIZED_DECELERATE: "cubic-bezier(.05,.7,.1,1)"
  };

  // node_modules/@material/web/ripple/internal/ripple.js
  var PRESS_GROW_MS = 450;
  var MINIMUM_PRESS_MS = 225;
  var INITIAL_ORIGIN_SCALE = 0.2;
  var PADDING = 10;
  var SOFT_EDGE_MINIMUM_SIZE = 75;
  var SOFT_EDGE_CONTAINER_RATIO = 0.35;
  var PRESS_PSEUDO = "::after";
  var ANIMATION_FILL = "forwards";
  var State;
  (function(State2) {
    State2[State2["INACTIVE"] = 0] = "INACTIVE";
    State2[State2["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    State2[State2["HOLDING"] = 2] = "HOLDING";
    State2[State2["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
  })(State || (State = {}));
  var EVENTS2 = [
    "click",
    "contextmenu",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointerup"
  ];
  var TOUCH_DELAY_MS = 150;
  var Ripple = class extends s3 {
    constructor() {
      super(...arguments);
      this.disabled = false;
      this.hovered = false;
      this.pressed = false;
      this.rippleSize = "";
      this.rippleScale = "";
      this.initialSize = 0;
      this.state = State.INACTIVE;
      this.checkBoundsAfterContextMenu = false;
      this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
      return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
      this.attachableController.htmlFor = htmlFor;
    }
    get control() {
      return this.attachableController.control;
    }
    set control(control) {
      this.attachableController.control = control;
    }
    attach(control) {
      this.attachableController.attach(control);
    }
    detach() {
      this.attachableController.detach();
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("aria-hidden", "true");
    }
    render() {
      const classes = {
        "hovered": this.hovered,
        "pressed": this.pressed
      };
      return x`<div class="surface ${e7(classes)}"></div>`;
    }
    update(changedProps) {
      if (changedProps.has("disabled") && this.disabled) {
        this.hovered = false;
        this.pressed = false;
      }
      super.update(changedProps);
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerenter(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.hovered = true;
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerleave(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.hovered = false;
      if (this.state !== State.INACTIVE) {
        this.endPressAnimation();
      }
    }
    handlePointerup(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      if (this.state === State.HOLDING) {
        this.state = State.WAITING_FOR_CLICK;
        return;
      }
      if (this.state === State.TOUCH_DELAY) {
        this.state = State.WAITING_FOR_CLICK;
        this.startPressAnimation(this.rippleStartEvent);
        return;
      }
    }
    async handlePointerdown(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.rippleStartEvent = event;
      if (!this.isTouch(event)) {
        this.state = State.WAITING_FOR_CLICK;
        this.startPressAnimation(event);
        return;
      }
      if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
        return;
      }
      this.checkBoundsAfterContextMenu = false;
      this.state = State.TOUCH_DELAY;
      await new Promise((resolve) => {
        setTimeout(resolve, TOUCH_DELAY_MS);
      });
      if (this.state !== State.TOUCH_DELAY) {
        return;
      }
      this.state = State.HOLDING;
      this.startPressAnimation(event);
    }
    handleClick() {
      if (this.disabled) {
        return;
      }
      if (this.state === State.WAITING_FOR_CLICK) {
        this.endPressAnimation();
        return;
      }
      if (this.state === State.INACTIVE) {
        this.startPressAnimation();
        this.endPressAnimation();
      }
    }
    handlePointercancel(event) {
      if (!this.shouldReactToEvent(event)) {
        return;
      }
      this.endPressAnimation();
    }
    handleContextmenu() {
      if (this.disabled) {
        return;
      }
      this.checkBoundsAfterContextMenu = true;
      this.endPressAnimation();
    }
    determineRippleSize() {
      const { height, width } = this.getBoundingClientRect();
      const maxDim = Math.max(height, width);
      const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
      const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
      const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
      const maxRadius = hypotenuse + PADDING;
      this.initialSize = initialSize;
      this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
      this.rippleSize = `${initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
      const { scrollX, scrollY } = window;
      const { left, top } = this.getBoundingClientRect();
      const documentX = scrollX + left;
      const documentY = scrollY + top;
      const { pageX, pageY } = pointerEvent;
      return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
      const { height, width } = this.getBoundingClientRect();
      const endPoint = {
        x: (width - this.initialSize) / 2,
        y: (height - this.initialSize) / 2
      };
      let startPoint;
      if (positionEvent instanceof PointerEvent) {
        startPoint = this.getNormalizedPointerEventCoords(positionEvent);
      } else {
        startPoint = {
          x: width / 2,
          y: height / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };
      return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
      if (!this.mdRoot) {
        return;
      }
      this.pressed = true;
      this.growAnimation?.cancel();
      this.determineRippleSize();
      const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
      const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
      this.growAnimation = this.mdRoot.animate({
        top: [0, 0],
        left: [0, 0],
        height: [this.rippleSize, this.rippleSize],
        width: [this.rippleSize, this.rippleSize],
        transform: [
          `translate(${translateStart}) scale(1)`,
          `translate(${translateEnd}) scale(${this.rippleScale})`
        ]
      }, {
        pseudoElement: PRESS_PSEUDO,
        duration: PRESS_GROW_MS,
        easing: EASING.STANDARD,
        fill: ANIMATION_FILL
      });
    }
    async endPressAnimation() {
      this.state = State.INACTIVE;
      const animation = this.growAnimation;
      let pressAnimationPlayState = Infinity;
      if (typeof animation?.currentTime === "number") {
        pressAnimationPlayState = animation.currentTime;
      } else if (animation?.currentTime) {
        pressAnimationPlayState = animation.currentTime.to("ms").value;
      }
      if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
        this.pressed = false;
        return;
      }
      await new Promise((resolve) => {
        setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
      });
      if (this.growAnimation !== animation) {
        return;
      }
      this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
      if (this.disabled || !event.isPrimary) {
        return false;
      }
      if (this.rippleStartEvent && this.rippleStartEvent.pointerId !== event.pointerId) {
        return false;
      }
      if (event.type === "pointerenter" || event.type === "pointerleave") {
        return !this.isTouch(event);
      }
      const isPrimaryButton = event.buttons === 1;
      return this.isTouch(event) || isPrimaryButton;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x: x2, y: y3 }) {
      const { top, left, bottom, right } = this.getBoundingClientRect();
      return x2 >= left && x2 <= right && y3 >= top && y3 <= bottom;
    }
    isTouch({ pointerType }) {
      return pointerType === "touch";
    }
    /** @private */
    async handleEvent(event) {
      switch (event.type) {
        case "click":
          this.handleClick();
          break;
        case "contextmenu":
          this.handleContextmenu();
          break;
        case "pointercancel":
          this.handlePointercancel(event);
          break;
        case "pointerdown":
          await this.handlePointerdown(event);
          break;
        case "pointerenter":
          this.handlePointerenter(event);
          break;
        case "pointerleave":
          this.handlePointerleave(event);
          break;
        case "pointerup":
          this.handlePointerup(event);
          break;
        default:
          break;
      }
    }
    onControlChange(prev, next) {
      if (o6)
        return;
      for (const event of EVENTS2) {
        prev?.removeEventListener(event, this);
        next?.addEventListener(event, this);
      }
    }
  };
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], Ripple.prototype, "disabled", void 0);
  __decorate([
    r4()
  ], Ripple.prototype, "hovered", void 0);
  __decorate([
    r4()
  ], Ripple.prototype, "pressed", void 0);
  __decorate([
    e4(".surface")
  ], Ripple.prototype, "mdRoot", void 0);

  // node_modules/@material/web/ripple/internal/ripple-styles.css.js
  var styles3 = i`:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;

  // node_modules/@material/web/ripple/ripple.js
  var MdRipple = class MdRipple2 extends Ripple {
  };
  MdRipple.styles = [styles3];
  MdRipple = __decorate([
    t("md-ripple")
  ], MdRipple);

  // node_modules/@material/web/internal/aria/aria.js
  var ARIA_PROPERTIES = [
    "ariaAtomic",
    "ariaAutoComplete",
    "ariaBusy",
    "ariaChecked",
    "ariaColCount",
    "ariaColIndex",
    "ariaColSpan",
    "ariaCurrent",
    "ariaDisabled",
    "ariaExpanded",
    "ariaHasPopup",
    "ariaHidden",
    "ariaInvalid",
    "ariaKeyShortcuts",
    "ariaLabel",
    "ariaLevel",
    "ariaLive",
    "ariaModal",
    "ariaMultiLine",
    "ariaMultiSelectable",
    "ariaOrientation",
    "ariaPlaceholder",
    "ariaPosInSet",
    "ariaPressed",
    "ariaReadOnly",
    "ariaRequired",
    "ariaRoleDescription",
    "ariaRowCount",
    "ariaRowIndex",
    "ariaRowSpan",
    "ariaSelected",
    "ariaSetSize",
    "ariaSort",
    "ariaValueMax",
    "ariaValueMin",
    "ariaValueNow",
    "ariaValueText"
  ];
  var ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);
  function ariaPropertyToAttribute(property) {
    return property.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
  }

  // node_modules/@material/web/internal/aria/delegate.js
  function requestUpdateOnAriaChange(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
      ctor.createProperty(ariaProperty, {
        attribute: ariaPropertyToAttribute(ariaProperty),
        reflect: true
      });
    }
    ctor.addInitializer((element) => {
      const controller = {
        hostConnected() {
          element.setAttribute("role", "presentation");
        }
      };
      element.addController(controller);
    });
  }

  // node_modules/@material/web/internal/controller/events.js
  function redispatchEvent(element, event) {
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
      event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
      event.preventDefault();
    }
    return dispatched;
  }
  function dispatchActivationClick(element) {
    const event = new MouseEvent("click", { bubbles: true });
    element.dispatchEvent(event);
    return event;
  }
  function isActivationClick(event) {
    if (event.currentTarget !== event.target) {
      return false;
    }
    if (event.composedPath()[0] !== event.target) {
      return false;
    }
    if (event.target.disabled) {
      return false;
    }
    return !squelchEvent(event);
  }
  function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
  }
  var isSquelchingEvents = false;
  async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    await null;
    isSquelchingEvents = false;
  }

  // node_modules/@material/web/labs/behaviors/element-internals.js
  var internals = Symbol("internals");
  var privateInternals = Symbol("privateInternals");
  function mixinElementInternals(base) {
    class WithElementInternalsElement extends base {
      get [internals]() {
        if (!this[privateInternals]) {
          this[privateInternals] = this.attachInternals();
        }
        return this[privateInternals];
      }
    }
    return WithElementInternalsElement;
  }

  // node_modules/@material/web/internal/controller/form-submitter.js
  function setupFormSubmitter(ctor) {
    if (o6) {
      return;
    }
    ctor.addInitializer((instance) => {
      const submitter = instance;
      submitter.addEventListener("click", async (event) => {
        const { type, [internals]: elementInternals } = submitter;
        const { form } = elementInternals;
        if (!form || type === "button") {
          return;
        }
        await new Promise((resolve) => {
          setTimeout(resolve);
        });
        if (event.defaultPrevented) {
          return;
        }
        if (type === "reset") {
          form.reset();
          return;
        }
        form.addEventListener("submit", (submitEvent) => {
          Object.defineProperty(submitEvent, "submitter", {
            configurable: true,
            enumerable: true,
            get: () => submitter
          });
        }, { capture: true, once: true });
        elementInternals.setFormValue(submitter.value);
        form.requestSubmit();
      });
    });
  }

  // node_modules/@material/web/button/internal/button.js
  var buttonBaseClass = mixinElementInternals(s3);
  var Button = class extends buttonBaseClass {
    get name() {
      return this.getAttribute("name") ?? "";
    }
    set name(name) {
      this.setAttribute("name", name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
      return this[internals].form;
    }
    constructor() {
      super();
      this.disabled = false;
      this.href = "";
      this.target = "";
      this.trailingIcon = false;
      this.hasIcon = false;
      this.type = "submit";
      this.value = "";
      this.handleActivationClick = (event) => {
        if (!isActivationClick(event) || !this.buttonElement) {
          return;
        }
        this.focus();
        dispatchActivationClick(this.buttonElement);
      };
      if (!o6) {
        this.addEventListener("click", this.handleActivationClick);
      }
    }
    focus() {
      this.buttonElement?.focus();
    }
    blur() {
      this.buttonElement?.blur();
    }
    render() {
      const isDisabled = this.disabled && !this.href;
      const buttonOrLink = this.href ? this.renderLink() : this.renderButton();
      const buttonId = this.href ? "link" : "button";
      return x`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${buttonId}></md-focus-ring>
      <md-ripple for=${buttonId} ?disabled="${isDisabled}"></md-ripple>
      ${buttonOrLink}
    `;
    }
    renderButton() {
      const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
      return x`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${ariaLabel || T}"
      aria-haspopup="${ariaHasPopup || T}"
      aria-expanded="${ariaExpanded || T}">
      ${this.renderContent()}
    </button>`;
    }
    renderLink() {
      const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
      return x`<a
      id="link"
      class="button"
      aria-label="${ariaLabel || T}"
      aria-haspopup="${ariaHasPopup || T}"
      aria-expanded="${ariaExpanded || T}"
      href=${this.href}
      target=${this.target || T}
      >${this.renderContent()}
    </a>`;
    }
    renderContent() {
      const icon = x`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;
      return x`
      <span class="touch"></span>
      ${this.trailingIcon ? T : icon}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? icon : T}
    `;
    }
    handleSlotChange() {
      this.hasIcon = this.assignedIcons.length > 0;
    }
  };
  (() => {
    requestUpdateOnAriaChange(Button);
    setupFormSubmitter(Button);
  })();
  Button.formAssociated = true;
  Button.shadowRootOptions = {
    mode: "open",
    delegatesFocus: true
  };
  __decorate([
    n3({ type: Boolean, reflect: true })
  ], Button.prototype, "disabled", void 0);
  __decorate([
    n3()
  ], Button.prototype, "href", void 0);
  __decorate([
    n3()
  ], Button.prototype, "target", void 0);
  __decorate([
    n3({ type: Boolean, attribute: "trailing-icon", reflect: true })
  ], Button.prototype, "trailingIcon", void 0);
  __decorate([
    n3({ type: Boolean, attribute: "has-icon", reflect: true })
  ], Button.prototype, "hasIcon", void 0);
  __decorate([
    n3()
  ], Button.prototype, "type", void 0);
  __decorate([
    n3()
  ], Button.prototype, "value", void 0);
  __decorate([
    e4(".button")
  ], Button.prototype, "buttonElement", void 0);
  __decorate([
    o4({ slot: "icon", flatten: true })
  ], Button.prototype, "assignedIcons", void 0);

  // node_modules/@material/web/button/internal/filled-button.js
  var FilledButton = class extends Button {
    renderElevationOrOutline() {
      return x`<md-elevation></md-elevation>`;
    }
  };

  // node_modules/@material/web/button/internal/filled-styles.css.js
  var styles4 = i`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;

  // node_modules/@material/web/button/internal/shared-elevation-styles.css.js
  var styles5 = i`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;

  // node_modules/@material/web/button/internal/shared-styles.css.js
  var styles6 = i`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;

  // node_modules/@material/web/button/filled-button.js
  var MdFilledButton = class MdFilledButton2 extends FilledButton {
  };
  MdFilledButton.styles = [styles6, styles5, styles4];
  MdFilledButton = __decorate([
    t("md-filled-button")
  ], MdFilledButton);

  // node_modules/@material/web/button/internal/outlined-button.js
  var OutlinedButton = class extends Button {
    renderElevationOrOutline() {
      return x`<div class="outline"></div>`;
    }
  };

  // node_modules/@material/web/button/internal/outlined-styles.css.js
  var styles7 = i`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_container-shape: var(--md-outlined-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-outlined-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-outlined-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-outlined-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-outlined-button-container-shape-end-start, var(--_container-shape) )}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host([disabled]) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host([disabled]) .background{border-color:GrayText}:host([disabled]) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}/*# sourceMappingURL=outlined-styles.css.map */
`;

  // node_modules/@material/web/button/outlined-button.js
  var MdOutlinedButton = class MdOutlinedButton2 extends OutlinedButton {
  };
  MdOutlinedButton.styles = [styles6, styles7];
  MdOutlinedButton = __decorate([
    t("md-outlined-button")
  ], MdOutlinedButton);

  // node_modules/@material/web/labs/behaviors/constraint-validation.js
  var createValidator = Symbol("createValidator");
  var getValidityAnchor = Symbol("getValidityAnchor");
  var privateValidator = Symbol("privateValidator");
  var privateSyncValidity = Symbol("privateSyncValidity");
  var privateCustomValidationMessage = Symbol("privateCustomValidationMessage");
  function mixinConstraintValidation(base) {
    var _a;
    class ConstraintValidationElement extends base {
      constructor() {
        super(...arguments);
        this[_a] = "";
      }
      get validity() {
        this[privateSyncValidity]();
        return this[internals].validity;
      }
      get validationMessage() {
        this[privateSyncValidity]();
        return this[internals].validationMessage;
      }
      get willValidate() {
        this[privateSyncValidity]();
        return this[internals].willValidate;
      }
      checkValidity() {
        this[privateSyncValidity]();
        return this[internals].checkValidity();
      }
      reportValidity() {
        this[privateSyncValidity]();
        return this[internals].reportValidity();
      }
      setCustomValidity(error) {
        this[privateCustomValidationMessage] = error;
        this[privateSyncValidity]();
      }
      requestUpdate(name, oldValue, options) {
        super.requestUpdate(name, oldValue, options);
        this[privateSyncValidity]();
      }
      firstUpdated(changed) {
        super.firstUpdated(changed);
        this[privateSyncValidity]();
      }
      [(_a = privateCustomValidationMessage, privateSyncValidity)]() {
        if (o6) {
          return;
        }
        if (!this[privateValidator]) {
          this[privateValidator] = this[createValidator]();
        }
        const { validity, validationMessage: nonCustomValidationMessage } = this[privateValidator].getValidity();
        const customError = !!this[privateCustomValidationMessage];
        const validationMessage = this[privateCustomValidationMessage] || nonCustomValidationMessage;
        this[internals].setValidity({ ...validity, customError }, validationMessage, this[getValidityAnchor]() ?? void 0);
      }
      [createValidator]() {
        throw new Error("Implement [createValidator]");
      }
      [getValidityAnchor]() {
        throw new Error("Implement [getValidityAnchor]");
      }
    }
    return ConstraintValidationElement;
  }

  // node_modules/@material/web/labs/behaviors/form-associated.js
  var getFormValue = Symbol("getFormValue");
  var getFormState = Symbol("getFormState");
  function mixinFormAssociated(base) {
    class FormAssociatedElement extends base {
      get form() {
        return this[internals].form;
      }
      get labels() {
        return this[internals].labels;
      }
      // Use @property for the `name` and `disabled` properties to add them to the
      // `observedAttributes` array and trigger `attributeChangedCallback()`.
      //
      // We don't use Lit's default getter/setter (`noAccessor: true`) because
      // the attributes need to be updated synchronously to work with synchronous
      // form APIs, and Lit updates attributes async by default.
      get name() {
        return this.getAttribute("name") ?? "";
      }
      set name(name) {
        this.setAttribute("name", name);
      }
      get disabled() {
        return this.hasAttribute("disabled");
      }
      set disabled(disabled) {
        this.toggleAttribute("disabled", disabled);
      }
      attributeChangedCallback(name, old, value) {
        if (name === "name" || name === "disabled") {
          const oldValue = name === "disabled" ? old !== null : old;
          this.requestUpdate(name, oldValue);
          return;
        }
        super.attributeChangedCallback(name, old, value);
      }
      requestUpdate(name, oldValue, options) {
        super.requestUpdate(name, oldValue, options);
        this[internals].setFormValue(this[getFormValue](), this[getFormState]());
      }
      [getFormValue]() {
        throw new Error("Implement [getFormValue]");
      }
      [getFormState]() {
        return this[getFormValue]();
      }
      formDisabledCallback(disabled) {
        this.disabled = disabled;
      }
    }
    FormAssociatedElement.formAssociated = true;
    __decorate([
      n3({ noAccessor: true })
    ], FormAssociatedElement.prototype, "name", null);
    __decorate([
      n3({ type: Boolean, noAccessor: true })
    ], FormAssociatedElement.prototype, "disabled", null);
    return FormAssociatedElement;
  }

  // node_modules/@material/web/labs/behaviors/validators/validator.js
  var Validator = class {
    /**
     * Creates a new validator.
     *
     * @param getCurrentState A callback that returns the current state of
     *     constraint validation-related properties.
     */
    constructor(getCurrentState) {
      this.getCurrentState = getCurrentState;
      this.currentValidity = {
        validity: {},
        validationMessage: ""
      };
    }
    /**
     * Returns the current `ValidityStateFlags` and validation message for the
     * validator.
     *
     * If the constraint validation state has not changed, this will return a
     * cached result. This is important since `getValidity()` can be called
     * frequently in response to synchronous property changes.
     *
     * @return The current validity and validation message.
     */
    getValidity() {
      const state = this.getCurrentState();
      const hasStateChanged = !this.prevState || !this.equals(this.prevState, state);
      if (!hasStateChanged) {
        return this.currentValidity;
      }
      const { validity, validationMessage } = this.computeValidity(state);
      this.prevState = this.copy(state);
      this.currentValidity = {
        validationMessage,
        validity: {
          // Change any `ValidityState` instances into `ValidityStateFlags` since
          // `ValidityState` cannot be easily `{...spread}`.
          badInput: validity.badInput,
          customError: validity.customError,
          patternMismatch: validity.patternMismatch,
          rangeOverflow: validity.rangeOverflow,
          rangeUnderflow: validity.rangeUnderflow,
          stepMismatch: validity.stepMismatch,
          tooLong: validity.tooLong,
          tooShort: validity.tooShort,
          typeMismatch: validity.typeMismatch,
          valueMissing: validity.valueMissing
        }
      };
      return this.currentValidity;
    }
  };

  // node_modules/@material/web/labs/behaviors/validators/checkbox-validator.js
  var CheckboxValidator = class extends Validator {
    computeValidity(state) {
      if (!this.checkboxControl) {
        this.checkboxControl = document.createElement("input");
        this.checkboxControl.type = "checkbox";
      }
      this.checkboxControl.checked = state.checked;
      this.checkboxControl.required = state.required;
      return {
        validity: this.checkboxControl.validity,
        validationMessage: this.checkboxControl.validationMessage
      };
    }
    equals(prev, next) {
      return prev.checked === next.checked && prev.required === next.required;
    }
    copy({ checked, required }) {
      return { checked, required };
    }
  };

  // node_modules/@material/web/checkbox/internal/checkbox.js
  var checkboxBaseClass = mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(s3)));
  var Checkbox = class extends checkboxBaseClass {
    constructor() {
      super();
      this.checked = false;
      this.indeterminate = false;
      this.required = false;
      this.value = "on";
      this.prevChecked = false;
      this.prevDisabled = false;
      this.prevIndeterminate = false;
      if (!o6) {
        this.addEventListener("click", (event) => {
          if (!isActivationClick(event) || !this.input) {
            return;
          }
          this.focus();
          dispatchActivationClick(this.input);
        });
      }
    }
    update(changed) {
      if (changed.has("checked") || changed.has("disabled") || changed.has("indeterminate")) {
        this.prevChecked = changed.get("checked") ?? this.checked;
        this.prevDisabled = changed.get("disabled") ?? this.disabled;
        this.prevIndeterminate = changed.get("indeterminate") ?? this.indeterminate;
      }
      super.update(changed);
    }
    render() {
      const prevNone = !this.prevChecked && !this.prevIndeterminate;
      const prevChecked = this.prevChecked && !this.prevIndeterminate;
      const prevIndeterminate = this.prevIndeterminate;
      const isChecked = this.checked && !this.indeterminate;
      const isIndeterminate = this.indeterminate;
      const containerClasses = e7({
        "disabled": this.disabled,
        "selected": isChecked || isIndeterminate,
        "unselected": !isChecked && !isIndeterminate,
        "checked": isChecked,
        "indeterminate": isIndeterminate,
        "prev-unselected": prevNone,
        "prev-checked": prevChecked,
        "prev-indeterminate": prevIndeterminate,
        "prev-disabled": this.prevDisabled
      });
      const { ariaLabel, ariaInvalid } = this;
      return x`
      <div class="container ${containerClasses}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${isIndeterminate ? "mixed" : T}
          aria-label=${ariaLabel || T}
          aria-invalid=${ariaInvalid || T}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `;
    }
    handleInput(event) {
      const target = event.target;
      this.checked = target.checked;
      this.indeterminate = target.indeterminate;
    }
    handleChange(event) {
      redispatchEvent(this, event);
    }
    [getFormValue]() {
      if (!this.checked || this.indeterminate) {
        return null;
      }
      return this.value;
    }
    [getFormState]() {
      return String(this.checked);
    }
    formResetCallback() {
      this.checked = this.hasAttribute("checked");
    }
    formStateRestoreCallback(state) {
      this.checked = state === "true";
    }
    [createValidator]() {
      return new CheckboxValidator(() => this);
    }
    [getValidityAnchor]() {
      return this.input;
    }
  };
  (() => {
    requestUpdateOnAriaChange(Checkbox);
  })();
  Checkbox.shadowRootOptions = {
    ...s3.shadowRootOptions,
    delegatesFocus: true
  };
  __decorate([
    n3({ type: Boolean })
  ], Checkbox.prototype, "checked", void 0);
  __decorate([
    n3({ type: Boolean })
  ], Checkbox.prototype, "indeterminate", void 0);
  __decorate([
    n3({ type: Boolean })
  ], Checkbox.prototype, "required", void 0);
  __decorate([
    n3()
  ], Checkbox.prototype, "value", void 0);
  __decorate([
    r4()
  ], Checkbox.prototype, "prevChecked", void 0);
  __decorate([
    r4()
  ], Checkbox.prototype, "prevDisabled", void 0);
  __decorate([
    r4()
  ], Checkbox.prototype, "prevIndeterminate", void 0);
  __decorate([
    e4("input")
  ], Checkbox.prototype, "input", void 0);

  // node_modules/@material/web/checkbox/internal/checkbox-styles.css.js
  var styles8 = i`:host{--_container-shape: var(--md-checkbox-container-shape, 2px);--_container-size: var(--md-checkbox-container-size, 18px);--_icon-size: var(--md-checkbox-icon-size, 18px);--_selected-container-color: var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4));--_selected-disabled-container-color: var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-disabled-container-opacity: var(--md-checkbox-selected-disabled-container-opacity, 0.38);--_selected-disabled-icon-color: var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff));--_selected-focus-container-color: var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4));--_selected-focus-icon-color: var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-container-color: var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-hover-state-layer-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-container-color: var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_selected-pressed-state-layer-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_selected-pressed-state-layer-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12);--_state-layer-shape: var(--md-checkbox-state-layer-shape, 9999px);--_state-layer-size: var(--md-checkbox-state-layer-size, 40px);--_disabled-container-opacity: var(--md-checkbox-disabled-container-opacity, 0.38);--_disabled-outline-color: var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-width: var(--md-checkbox-disabled-outline-width, 2px);--_focus-outline-color: var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-outline-width: var(--md-checkbox-focus-outline-width, 2px);--_hover-outline-color: var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-checkbox-hover-outline-width, 2px);--_hover-state-layer-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--_outline-color: var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-width: var(--md-checkbox-outline-width, 2px);--_pressed-outline-color: var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-outline-width: var(--md-checkbox-pressed-outline-width, 2px);--_pressed-state-layer-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: var( --md-checkbox-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-checkbox-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-checkbox-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-checkbox-container-shape-end-start, var(--_container-shape) );border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:inline-flex;height:var(--_container-size);position:relative;vertical-align:top;width:var(--_container-size);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-size))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--_outline-color);border-style:solid;border-width:var(--_outline-width);box-sizing:border-box}.background{background-color:var(--_selected-container-color)}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--_state-layer-shape);height:var(--_state-layer-size);inset:unset;width:var(--_state-layer-size);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected md-ripple{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.icon{fill:var(--_selected-icon-color);height:var(--_icon-size);width:var(--_icon-size)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--_hover-outline-color);border-width:var(--_hover-outline-width)}:where(:hover) .background{background:var(--_selected-hover-container-color)}:where(:hover) .icon{fill:var(--_selected-hover-icon-color)}:where(:focus-within) .outline{border-color:var(--_focus-outline-color);border-width:var(--_focus-outline-width)}:where(:focus-within) .background{background:var(--_selected-focus-container-color)}:where(:focus-within) .icon{fill:var(--_selected-focus-icon-color)}:where(:active) .outline{border-color:var(--_pressed-outline-color);border-width:var(--_pressed-outline-width)}:where(:active) .background{background:var(--_selected-pressed-container-color)}:where(:active) .icon{fill:var(--_selected-pressed-icon-color)}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);border-width:var(--_disabled-outline-width);opacity:var(--_disabled-container-opacity)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--_selected-disabled-container-color);opacity:var(--_selected-disabled-container-opacity)}:where(.disabled) .icon{fill:var(--_selected-disabled-icon-color)}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}/*# sourceMappingURL=checkbox-styles.css.map */
`;

  // node_modules/@material/web/checkbox/checkbox.js
  var MdCheckbox = class MdCheckbox2 extends Checkbox {
  };
  MdCheckbox.styles = [styles8];
  MdCheckbox = __decorate([
    t("md-checkbox")
  ], MdCheckbox);
})();
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/elevation/internal/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/elevation/internal/elevation-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/elevation/elevation.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/attachable-controller.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/focus/internal/focus-ring-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/focus/md-focus-ring.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/web/internal/motion/animation.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/ripple/internal/ripple-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/ripple/ripple.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/aria/aria.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/aria/delegate.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/events.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/internal/controller/form-submitter.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/button.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/filled-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/internal/shared-elevation-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/internal/shared-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/filled-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/outlined-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/button/internal/outlined-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/button/outlined-button.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/constraint-validation.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/form-associated.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/labs/behaviors/validators/checkbox-validator.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/internal/checkbox.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

@material/web/checkbox/internal/checkbox-styles.css.js:
  (**
    * @license
    * Copyright 2022 Google LLC
    * SPDX-License-Identifier: Apache-2.0
    *)

@material/web/checkbox/checkbox.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
