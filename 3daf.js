const crypto = require("crypto").webcrypto;

// r.r(e),
//   r.d(e, "WsmFile", function () {
//     return L;
//   }),
//   r.d(e, "WsmInstance", function () {
//     return Y;
//   }),
//   r.d(e, "loadLive2dHttpAsync", function () {
//     return C;
//   }),
//   r.d(e, "loadLive2dOpalAsync", function () {
//     return O;
//   }),
//   r.d(e, "loadLive2dWsmAsync", function () {
//     return W;
//   }),
//   r.d(e, "loadLive2dZipAsync", function () {
//     return k;
//   });
// var n = r("c4e3"),
//   i = r.n(n),
//   a = r("a12a");
function s(t, e, r) {
  var n = o;
  return (
    e in t
      ? Object[n(319)](t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function o(t, e) {
  var r = l();
  return (
    (o = function (t, e) {
      t -= 319;
      var n = r[t];
      return n;
    }),
    o(t, e)
  );
}
function l() {
  var t = [
    "710NiYPrX",
    "1671970IgVZMB",
    "535647EdCHxq",
    "27wHmNZo",
    "1452066SqAvRZ",
    "1326009afFlzf",
    "1580546Xfagwd",
    "4MzoxkU",
    "139898btbsYN",
    "6oqzgeM",
    "2152520MvCxYY",
    "defineProperty",
  ];
  return (
    (l = function () {
      return t;
    }),
    l()
  );
}
function c() {
  var t = [
    "52494agfKsV",
    "40oCcUJI",
    "23884euJWRs",
    "52PvEpCh",
    "3037BHGbOE",
    "1191976ODvYBS",
    "90MRvZdU",
    "2285595XbUjto",
    "[Live2d Load Error] ",
    "1298820uWwPtt",
    "572070odnwiS",
  ];
  return (
    (c = function () {
      return t;
    }),
    c()
  );
}
function u(t, e) {
  var r = c();
  return (
    (u = function (t, e) {
      t -= 428;
      var n = r[t];
      return n;
    }),
    u(t, e)
  );
}
(function (t, e) {
  var r = o,
    n = t();
  while (1)
    try {
      var i =
        parseInt(r(322)) / 1 +
        -parseInt(r(326)) / 2 +
        (parseInt(r(325)) / 3) * (-parseInt(r(327)) / 4) +
        (-parseInt(r(321)) / 5) * (parseInt(r(329)) / 6) +
        -parseInt(r(324)) / 7 +
        (-parseInt(r(330)) / 8) * (-parseInt(r(323)) / 9) +
        (parseInt(r(320)) / 10) * (parseInt(r(328)) / 11);
      if (i === e) break;
      n["push"](n["shift"]());
    } catch (a) {
      n["push"](n["shift"]());
    }
})(l, 471712),
  (function (t, e) {
    var r = u,
      n = t();
    while (1)
      try {
        var i =
          (parseInt(r(428)) / 1) * (-parseInt(r(430)) / 2) +
          (parseInt(r(435)) / 3) * (-parseInt(r(438)) / 4) +
          parseInt(r(434)) / 5 +
          -parseInt(r(433)) / 6 +
          -parseInt(r(437)) / 7 +
          -parseInt(r(429)) / 8 +
          (-parseInt(r(431)) / 9) * (-parseInt(r(436)) / 10);
        if (i === e) break;
        n["push"](n["shift"]());
      } catch (a) {
        n["push"](n["shift"]());
      }
  })(c, 397216);
class h extends Error {
  constructor(t) {
    var e = u;
    super(e(432) + t);
  }
}
function f() {
  const t = [
    "enqueue",
    "length",
    "call",
    "arrayBuffer",
    "509619oKoYFZ",
    "text",
    "getReader",
    "content-length",
    "612801odWani",
    "has",
    "2699725UgBVqm",
    "get",
    "26673128RzTTzY",
    "body",
    "read",
    "7pgJYvT",
    "813224NyTXOF",
    "3144340qTiSnK",
    "7104846IRpElt",
    "headers",
    "json",
    "responseType",
  ];
  return (
    (f = function () {
      return t;
    }),
    f()
  );
}
function d(t, e) {
  const r = f();
  return (
    (d = function (t, e) {
      t -= 193;
      let n = r[t];
      return n;
    }),
    d(t, e)
  );
}
async function p(t, e) {
  const r = d,
    n = await fetch(t);
  if (e[r(209)] === r(193)) return n[r(193)]();
  if (e["responseType"] === r(208)) return n[r(208)]();
  if (e[r(209)] === r(213)) {
    const { onProgress: o } = e;
    if (n[r(207)][r(197)]("content-length")) {
      var i, a, s;
      const e =
        null !==
          (i =
            null === (a = n[r(201)]) ||
            void 0 === a ||
            null === (s = a[r(194)]) ||
            void 0 === s
              ? void 0
              : s[r(212)](a)) && void 0 !== i
          ? i
          : null;
      if (null === e) return n["arrayBuffer"]();
      const l = new ReadableStream({
        async start(i) {
          const a = r,
            s = Number(n[a(207)][a(199)](a(195)));
          let l = 0;
          async function c() {
            const r = a,
              { done: n, value: u } = await e[r(202)]();
            if (!n)
              return (
                void 0 !== u &&
                  (i[r(210)](u),
                  (l += u[r(211)]),
                  null === o || void 0 === o || o(l, s, t)),
                c()
              );
            i["close"]();
          }
          null === o || void 0 === o || o(l, s, t), c();
        },
      });
      return new Response(l)[r(213)]();
    }
    return n[r(213)]();
  }
}
(function (t, e) {
  const r = d,
    n = t();
  while (1)
    try {
      const t =
        -parseInt(r(196)) / 1 +
        -parseInt(r(205)) / 2 +
        parseInt(r(214)) / 3 +
        parseInt(r(204)) / 4 +
        parseInt(r(198)) / 5 +
        (parseInt(r(206)) / 6) * (-parseInt(r(203)) / 7) +
        parseInt(r(200)) / 8;
      if (t === e) break;
      n["push"](n["shift"]());
    } catch (i) {
      n["push"](n["shift"]());
    }
})(f, 878153),
  (function (t, e) {
    const r = g,
      n = t();
    while (1)
      try {
        const t =
          parseInt(r(175)) / 1 +
          (-parseInt(r(177)) / 2) * (parseInt(r(173)) / 3) +
          parseInt(r(189)) / 4 +
          -parseInt(r(176)) / 5 +
          (-parseInt(r(186)) / 6) * (-parseInt(r(188)) / 7) +
          parseInt(r(183)) / 8 +
          (-parseInt(r(182)) / 9) * (-parseInt(r(181)) / 10);
        if (t === e) break;
        n["push"](n["shift"]());
      } catch (i) {
        n["push"](n["shift"]());
      }
  })(v, 228948);
const A = (t) => {
    const e = g;
    return t[e(174)](e(178)) && !t["startsWith"](e(180));
  },
  m = (t) => {
    const e = g;
    return t[e(174)](e(179)) && !t[e(172)](e(180));
  };
function g(t, e) {
  const r = v();
  return (
    (g = function (t, e) {
      t -= 172;
      let n = r[t];
      return n;
    }),
    g(t, e)
  );
}
const y = (t) => {
  const e = g;
  return t[e(174)](e(187)) && !t[e(172)](e(180));
};
function v() {
  const t = [
    ".exp3.json",
    "1981147bcueQR",
    "283132Dpwjey",
    "startsWith",
    "10917RXShkI",
    "endsWith",
    "129772wbgQKH",
    "2261460QQJjLe",
    "76PCvXvW",
    ".model3.json",
    ".motion3.json",
    "__MACOSX",
    "90tIbtoy",
    "207549dCVgrh",
    "1027176wanxpq",
    "includes",
    ".cfg",
    "6PUkVPu",
  ];
  return (
    (v = function () {
      return t;
    }),
    v()
  );
}
const w = (t) => {
    const e = g;
    return t[e(174)](e(185)) && t[e(184)]("cc") && !t[e(172)]("__MACOSX");
  },
  b = E;
function I() {
  const t = [
    "has",
    "193555PqygfA",
    "958140lUUbft",
    "loadAsync",
    "findAll",
    "replace",
    "files",
    "values",
    "lastIndexOf",
    "parse",
    "20251hvxOiI",
    "endsWith",
    "15vXMcXa",
    "Motions",
    "push",
    "Idle",
    "filter",
    "findOne",
    "4457760pkiPWt",
    "name",
    "split",
    "length",
    "Pose",
    "add",
    "set_special_pose_param",
    "42yLWTAV",
    "includes",
    "zip",
    "Expressions",
    "File",
    "658304ssvNhn",
    "slice",
    "320886aoRxqx",
    "arraybuffer",
    "6JONdTl",
    "forEach",
    "UserData",
    "external",
    "startsWith",
    "text",
    "cfg_expression_",
    "FileReferences",
    "trim",
    "onProgress",
    "Moc",
    "read",
    "268868obaNVu",
    "set_idle_anim",
    "Physics",
    "async",
    "Name",
    "map",
    "__MACOSX",
  ];
  return (
    (I = function () {
      return t;
    }),
    I()
  );
}
function E(t, e) {
  const r = I();
  return (
    (E = function (t, e) {
      t -= 206;
      let n = r[t];
      return n;
    }),
    E(t, e)
  );
}
(function (t, e) {
  const r = E,
    n = t();
  while (1)
    try {
      const t =
        parseInt(r(225)) / 1 +
        (parseInt(r(256)) / 2) * (parseInt(r(258)) / 3) +
        (parseInt(r(217)) / 4) * (parseInt(r(236)) / 5) +
        (parseInt(r(249)) / 6) * (parseInt(r(234)) / 7) +
        parseInt(r(254)) / 8 +
        -parseInt(r(226)) / 9 +
        -parseInt(r(242)) / 10;
      if (t === e) break;
      n["push"](n["shift"]());
    } catch (i) {
      n["push"](n["shift"]());
    }
})(I, 266395);
class M {
  constructor(t) {
    const e = E;
    s(this, e(251), void 0), (this[e(251)] = t);
  }
  static async [b(227)](t) {
    const e = b,
      r = await i.a[e(227)](t);
    return new M(r);
  }
  ["findOne"](t) {
    const e = b;
    for (const r in this["zip"][e(230)])
      if (t(r)) return this[e(251)][e(230)][r];
  }
  [b(228)](t) {
    const e = b;
    return Object[e(231)](this[e(251)][e(230)])[e(240)]((e) => t(e["name"]));
  }
  [b(216)](t) {
    const e = b;
    for (const r in this[e(251)]["files"])
      if (r[e(250)](t) && !r[e(209)](e(223))) return this[e(251)][e(230)][r];
  }
}
async function k(t, e) {
  const r = b;
  var n;
  let i, s;
  const o = [];
  let l, c, u, f;
  const d =
      t instanceof ArrayBuffer
        ? t
        : await p(t, {
            responseType: "arrayBuffer",
            onProgress: null === e || void 0 === e ? void 0 : e[r(214)],
          }),
    g = {},
    v = {},
    I = await M["loadAsync"](d),
    E = await (null === (n = I[r(241)](A)) || void 0 === n
      ? void 0
      : n["async"]("text"));
  if (!E) throw new h("model3 not exist");
  i = JSON["parse"](E);
  {
    var k;
    const t = i[r(212)][r(215)],
      e = await (null === (k = I["read"](t)) || void 0 === k
        ? void 0
        : k[r(220)](r(257)));
    e && (s = e);
  }
  for (const a of i["FileReferences"]["Textures"]) {
    var S;
    const t = await (null === (S = I["read"](a)) || void 0 === S
      ? void 0
      : S[r(220)]("arraybuffer"));
    t && o[r(238)](t);
  }
  {
    const t = i[r(212)][r(219)];
    if (t) {
      var R;
      const e = await (null === (R = I["read"](t)) || void 0 === R
        ? void 0
        : R[r(220)](r(210)));
      e && (l = JSON[r(233)](e));
    }
  }
  {
    const t = i["FileReferences"][r(246)];
    if (t) {
      var C;
      const e = await (null === (C = I["read"](t)) || void 0 === C
        ? void 0
        : C[r(220)]("text"));
      e && (c = JSON[r(233)](e));
    }
  }
  {
    const t = i["FileReferences"][r(207)];
    if (t) {
      var T;
      const e = await (null === (T = I[r(216)](t)) || void 0 === T
        ? void 0
        : T["async"](r(210)));
      e && (u = JSON[r(233)](e));
    }
  }
  {
    const t = i[r(212)]["DisplayInfo"];
    if (t) {
      var x;
      const e = await (null === (x = I[r(216)](t)) || void 0 === x
        ? void 0
        : x[r(220)](r(210)));
      e && (f = JSON[r(233)](e));
    }
  }
  const U = new Set();
  if (i[r(212)][r(237)])
    for (const a in i[r(212)]["Motions"]) {
      const t = {};
      for (const e of i[r(212)][r(237)][a]) {
        const n = I[r(241)](
            (t) => t[r(235)](e[r(253)]) && !t["startsWith"](r(223))
          ),
          i = await (null === n || void 0 === n ? void 0 : n[r(220)](r(210)));
        n && i && ((t[e[r(253)]] = JSON["parse"](i)), U["add"](n[r(243)]));
      }
      g[a] = t;
    }
  const B = new Set();
  if (i[r(212)][r(252)])
    for (const a of i[r(212)]["Expressions"]) {
      const t = I[r(241)]((t) => {
          const e = r;
          return t["endsWith"](a[e(253)]) && !t[e(209)](e(223));
        }),
        e = await (null === t || void 0 === t ? void 0 : t[r(220)](r(210)));
      t && e && ((v[a[r(221)]] = JSON[r(233)](e)), B[r(247)](t[r(243)]));
    }
  const N = new Set(),
    F = I["findAll"](w);
  for (const h of F) {
    const t = await h[r(220)](r(210)),
      e = t[r(244)]("\n")
        [r(222)]((t) => t[r(213)]())
        ["filter"]((t) => t[r(245)] > 0);
    e[r(240)]((t) => t[r(250)](r(248)))[r(206)]((t, e) => {
      const n = r,
        s = t[n(244)](" ")[n(240)]((t) => t);
      (v[n(211) + e] = Object(a["cfgPoseAdapter"])({
        name: s[1],
        paramId: s[2]["replace"](/'/g, ""),
        min: parseFloat(s[3]),
        max: parseFloat(s[4]),
        key: parseInt(s[5], 10),
      })),
        void 0 === i[n(212)][n(252)] && (i[n(212)][n(252)] = []),
        i["FileReferences"][n(252)][n(238)]({
          Name: n(211) + e,
          File: n(211) + e,
        });
    }),
      e[r(240)]((t) => t[r(250)](r(218)))[r(206)]((t) => {
        const e = r,
          n = t[e(244)](" ")[e(240)]((t) => t),
          i = n[2][e(229)](/'/g, "");
        N[e(247)](i);
      });
  }
  const Z = I[r(228)](m);
  for (const a of Z)
    if (!U["has"](a[r(243)])) {
      const t = await a[r(220)](r(210)),
        e = JSON[r(233)](t);
      void 0 === i[r(212)]["Motions"] && (i["FileReferences"][r(237)] = {}),
        N[r(224)](a["name"][r(255)](a[r(243)][r(232)]("/") + 1)[r(244)](".")[0])
          ? (void 0 === i["FileReferences"][r(237)][r(239)] &&
              (i[r(212)][r(237)][r(239)] = []),
            i[r(212)][r(237)][r(239)][r(238)]({ File: a[r(243)] }),
            void 0 === g[r(239)] && (g[r(239)] = {}),
            (g["Idle"][a[r(243)]] = e))
          : (void 0 === i[r(212)][r(237)][r(208)] &&
              (i[r(212)][r(237)][r(208)] = []),
            i["FileReferences"]["Motions"][r(208)][r(238)]({
              File: a[r(243)],
            }),
            void 0 === g[r(208)] && (g["external"] = {}),
            (g[r(208)][a[r(243)]] = e));
    }
  const V = I[r(228)](y);
  for (const a of V)
    if (!B[r(224)](a["name"])) {
      const t = await a["async"](r(210)),
        e = JSON[r(233)](t);
      (v[a[r(243)]] = e),
        void 0 === i["FileReferences"]["Expressions"] &&
          (i[r(212)][r(252)] = []),
        i[r(212)][r(252)][r(238)]({ Name: a[r(243)], File: a["name"] });
    }
  return {
    model3Json: i,
    moc3: s,
    textures: o,
    physicsJson: l,
    poseJson: c,
    userdata: u,
    displayInfo: f,
    motionDictionary: g,
    expressionDictionary: v,
  };
}
function S(t, e) {
  const r = R();
  return (
    (S = function (t, e) {
      t -= 494;
      let n = r[t];
      return n;
    }),
    S(t, e)
  );
}
function R() {
  const t = [
    "49627699aTuxbF",
    "Textures",
    "Motions",
    "texture path not exist",
    "File",
    "6423400knwpWJ",
    "onProgress",
    "Physics",
    "href",
    "Expressions",
    "json",
    "UserData",
    "8258082YSKQtD",
    "DisplayInfo",
    "10JVyAuG",
    "lastIndexOf",
    "FileReferences",
    "1058853wONZWW",
    "12NbaKtS",
    "344qbRBpd",
    "moc3 path not exist",
    "slice",
    "all",
    "Pose",
    "5JYBgzT",
    "Name",
    "246465zrJFBU",
    "map",
    "73679tZRDAI",
    "6780558NHXmrc",
    "arrayBuffer",
  ];
  return (
    (R = function () {
      return t;
    }),
    R()
  );
}
async function C(t, e) {
  const r = S;
  let n, i, a, s;
  const o = {},
    l = {},
    c = t[r(494)](0, t[r(519)]("/") + 1),
    u = await p(t, { responseType: r(514) });
  if (!u["FileReferences"]["Moc"]) throw new h(r(524));
  const f = await p(new URL(u["FileReferences"]["Moc"], c)[r(512)], {
    responseType: r(503),
    onProgress: null === e || void 0 === e ? void 0 : e[r(510)],
  });
  if (!u[r(520)][r(505)]) throw new h(r(507));
  const d = await Promise[r(495)](
    u[r(520)][r(505)][r(500)]((t) =>
      p(new URL(t, c)["href"], {
        responseType: r(503),
        onProgress: null === e || void 0 === e ? void 0 : e[r(510)],
      })
    )
  );
  if (
    (u[r(520)][r(511)] &&
      (n = await p(new URL(u["FileReferences"][r(511)], c)[r(512)], {
        responseType: r(514),
      })),
    u[r(520)]["Pose"] &&
      (i = await p(new URL(u[r(520)][r(496)], c)[r(512)], {
        responseType: r(514),
      })),
    u["FileReferences"][r(515)] &&
      (a = await p(new URL(u[r(520)][r(515)], c)["href"], {
        responseType: r(514),
      })),
    u[r(520)][r(517)] &&
      (s = await p(new URL(u["FileReferences"][r(517)], c)["href"], {
        responseType: r(514),
      })),
    u[r(520)][r(506)])
  )
    for (const h in u[r(520)]["Motions"]) {
      const t = {};
      for (const e of u[r(520)][r(506)][h]) {
        const n = await p(new URL(e[r(508)], c)[r(512)], {
          responseType: "json",
        });
        t[e[r(508)]] = n;
      }
      o[h] = t;
    }
  if (u["FileReferences"][r(513)])
    for (const h of u[r(520)][r(513)]) {
      const t = await p(new URL(h[r(508)], c)[r(512)], {
        responseType: r(514),
      });
      l[h[r(498)]] = t;
    }
  return {
    model3Json: u,
    moc3: f,
    textures: d,
    physicsJson: n,
    poseJson: i,
    userdata: a,
    displayInfo: s,
    motionDictionary: o,
    expressionDictionary: l,
  };
}
function T(t) {
  const e = t["length"],
    r = new ArrayBuffer(e),
    n = new Uint8Array(r);
  let i;
  for (i = 0; i < e; i += 1) n[i] = t["charCodeAt"](i);
  return r;
}
function x(t, e) {
  const r = U();
  return (
    (x = function (t, e) {
      t -= 473;
      let n = r[t];
      return n;
    }),
    x(t, e)
  );
}
function U() {
  const t = [
    "64KcbPRK",
    "importKey",
    "slice",
    "decrypt",
    "18352647wqWsVQ",
    "AES-CBC",
    "set",
    "4885470uSentp",
    "5waqDLd",
    "forEach",
    "452074HKiYuX",
    "decode",
    "5640972ybbDMv",
    "473024VKXvkZ",
    "740047NCVrnB",
    "encrypt",
    "1084346WhEnIf",
    "raw",
    "subtle",
  ];
  return (
    (U = function () {
      return t;
    }),
    U()
  );
}
function B(t) {
  const e = x,
    r = new TextDecoder();
  return r[e(490)](t);
}
async function N(t, e, r) {
  const n = x,
    i = n(484);
  return await crypto[n(478)][n(482)](
    { name: i, iv: e },
    await crypto["subtle"]["importKey"](n(477), T(window["atob"](r)), i, !0, [
      "encrypt",
      n(482),
    ]),
    t
  );
}
async function F(t) {
  const e = x,
    r = new ArrayBuffer(16),
    n = new Uint8Array(r, 0, 8),
    i = new Uint8Array(r, 8, 8);
  n[e(485)](new Uint8Array(t["slice"](8, 16))),
    i[e(485)](new Uint8Array(t["slice"](0, 8))),
    n[e(488)]((t, e) => {
      n[e] = 114514 ^ t;
    }),
    i[e(488)]((t, e) => {
      i[e] = 114514 ^ t;
    });
  const a = e(484);
  return (
    await crypto["subtle"][e(482)](
      { name: a, iv: new ArrayBuffer(16) },
      await crypto[e(478)][e(480)](e(477), r, a, !0, [e(475), e(482)]),
      t
    )
  )[e(481)](32);
}
function Z(t, e) {
  const r = D();
  return (
    (Z = function (t, e) {
      t -= 428;
      let n = r[t];
      return n;
    }),
    Z(t, e)
  );
}
function V(t) {
  let e, r;
  const n = [];
  let i, s, o, l;
  const c = {},
    u = {},
    f = [],
    d = [],
    p = [];
  let A = 0;
  const m = new DataView(t);
  return (
    (function () {
      const r = Z;
      A += 4;
      const n = m[r(454)](A, !0);
      if (((A += 4), n > -1)) {
        const i = new Uint8Array(t[r(447)](A, (A += n)));
        e = i[r(430)];
      }
    })(),
    (function () {
      const e = Z,
        r = m[e(454)](A, !0);
      if (((A += 4), r > -1))
        for (let i = 0; i < r; i++) {
          const r = m["getInt32"](A, !0);
          (A += 4), r > -1 && n["push"](t[e(447)](A, (A += r)));
        }
    })(),
    (function () {
      const e = Z,
        r = m[e(454)](A, !0);
      if (((A += 4), r > -1)) {
        const r = m["getFloat64"](A, !0);
        A += 8;
        const n = m[e(454)](A, !0);
        let i;
        (A += 4), n > -1 && (i = B(t[e(447)](A, (A += n))));
        const a = m["getInt32"](A, !0);
        let o;
        (A += 4), a > -1 && (o = B(t[e(447)](A, (A += a))));
        const l = JSON[e(436)](o);
        s = { Type: i, FadeInTime: r, Groups: l };
      }
    })(),
    (function () {
      const e = Z,
        r = m["getInt32"](A, !0);
      if (((A += 4), r > -1))
        for (let n = 0; n < r; n++) {
          A += 4;
          const r = m[e(449)](A, !0);
          A += 8;
          const n = m[e(449)](A, !0);
          A += 8;
          const i = m[e(454)](A, !0);
          let a, s;
          (A += 4), i > -1 && (a = B(t[e(447)](A, (A += i))));
          const o = m["getInt32"](A, !0);
          if (((A += 4), o > -1)) {
            s = [];
            for (let r = 0; r < o; r++) {
              A += 4;
              const r = m[e(454)](A, !0);
              let n;
              (A += 4), r > -1 && (n = B(t[e(447)](A, (A += r))));
              const i = m[e(449)](A, !0);
              A += 8;
              const a = m[e(454)](A, !0);
              let o;
              (A += 4),
                a > -1 && (o = B(t[e(447)](A, (A += a)))),
                s[e(457)]({ Id: n, Value: i, Blend: o });
            }
          }
          d[e(457)]({
            FadeInTime: r,
            FadeOutTime: n,
            Type: a,
            Parameters: s,
          });
        }
    })(),
    (function () {
      const e = Z,
        r = m[e(454)](A, !0);
      if (((A += 4), r > -1))
        for (let n = 0; n < r; n++) {
          A += 4;
          const r = m[e(454)](A, !0);
          (A += 4), (A += 4);
          const n = !!m[e(455)](A);
          A += 1;
          const i = !!m[e(455)](A);
          A += 1;
          const a = m["getFloat64"](A, !0);
          A += 8;
          const s = m[e(449)](A, !0);
          A += 8;
          const o = m[e(449)](A, !0);
          A += 8;
          const l = m[e(449)](A, !0);
          A += 8;
          const c = m[e(454)](A, !0);
          A += 4;
          const u = m[e(454)](A, !0);
          A += 4;
          const h = m[e(454)](A, !0);
          A += 4;
          const d = m[e(454)](A, !0);
          A += 4;
          const p = m["getInt32"](A, !0);
          let g;
          A += 4;
          const y = m[e(454)](A, !0);
          if (((A += 4), y > -1)) {
            g = [];
            for (let r = 0; r < y; r++) {
              A += 4;
              const r = m[e(449)](A, !0);
              A += 8;
              const n = m[e(449)](A, !0);
              let i;
              A += 8;
              const a = m[e(454)](A, !0);
              if (((A += 4), a > -1)) {
                i = [];
                for (let t = 0; t < a; t++)
                  i[e(457)](m["getFloat64"](A, !0)), (A += 8);
              }
              const s = m[e(454)](A, !0);
              let o;
              (A += 4), s > -1 && (o = B(t[e(447)](A, (A += s))));
              const l = m[e(454)](A, !0);
              let c;
              (A += 4),
                l > -1 && (c = B(t[e(447)](A, (A += l)))),
                g["push"]({
                  FadeInTime: r,
                  FadeOutTime: n,
                  Segments: i,
                  Target: o,
                  Id: c,
                });
            }
          }
          let v;
          const w = m["getInt32"](A, !0);
          if (((A += 4), w > -1)) {
            v = [];
            for (let r = 0; r < w; r++) {
              A += 4;
              const r = m[e(449)](A, !0);
              A += 8;
              const n = m[e(454)](A, !0);
              let i;
              (A += 4),
                n > -1 && (i = B(t[e(447)](A, (A += n)))),
                v["push"]({ Time: r, Value: i });
            }
          }
          f[e(457)]({
            Version: r,
            Meta: {
              AreBeziersRestricted: n,
              Loop: i,
              Duration: a,
              Fps: s,
              FadeInTime: o,
              FadeOutTime: l,
              CurveCount: c,
              TotalPointCount: h,
              TotalSegmentCount: u,
              TotalUserDataSize: p,
              UserDataCount: d,
            },
            Curves: g,
            UserData: v,
          });
        }
    })(),
    (function () {
      const e = Z,
        r = m["getInt32"](A, !0);
      if (((A += 4), r > -1)) {
        const r = m["getInt32"](A, !0);
        (A += 4), (A += 4);
        const n = m[e(454)](A, !0);
        A += 4;
        const a = m[e(454)](A, !0);
        A += 4;
        const s = m[e(454)](A, !0);
        A += 4;
        const o = m[e(454)](A, !0);
        (A += 4), (A += 4), (A += 4);
        const l = m[e(449)](A, !0);
        A += 8;
        const c = m[e(449)](A, !0);
        (A += 8), (A += 4);
        const u = m["getFloat64"](A, !0);
        A += 8;
        const h = m[e(449)](A, !0);
        A += 8;
        const f = m[e(454)](A, !0);
        let d;
        if (((A += 4), f > -1)) {
          d = [];
          for (let r = 0; r < f; r++) {
            A += 4;
            const r = m[e(454)](A, !0);
            let n;
            (A += 4), r > -1 && (n = B(t[e(447)](A, (A += r))));
            const i = m["getInt32"](A, !0);
            let a;
            (A += 4),
              i > -1 && (a = B(t[e(447)](A, (A += i)))),
              d[e(457)]({ Id: n, Name: a });
          }
        }
        const p = m[e(454)](A, !0);
        let g;
        if (((A += 4), p > -1)) {
          g = [];
          for (let r = 0; r < p; r++) {
            A += 4;
            const r = m[e(454)](A, !0);
            let n;
            (A += 4),
              r > -1 && (n = B(t["slice"](A, (A += r)))),
              (A += 4),
              (A += 4);
            const i = m[e(449)](A, !0);
            A += 8;
            const a = m[e(449)](A, !0);
            A += 8;
            const s = m[e(449)](A, !0);
            (A += 8), (A += 4);
            const o = m[e(449)](A, !0);
            A += 8;
            const l = m[e(449)](A, !0);
            A += 8;
            const c = m[e(449)](A, !0);
            A += 8;
            const u = m[e(454)](A, !0);
            let h;
            if (((A += 4), u > -1)) {
              h = [];
              for (let r = 0; r < u; r++) {
                A += 4;
                const r = !!m[e(455)](A);
                A += 1;
                const n = m["getFloat64"](A, !0);
                A += 8;
                const i = m[e(454)](A, !0);
                let a;
                (A += 4), i > -1 && (a = B(t[e(447)](A, (A += i)))), (A += 4);
                const s = m["getInt32"](A, !0);
                let o;
                (A += 4), s > -1 && (o = B(t["slice"](A, (A += s))));
                const l = m[e(454)](A, !0);
                let c;
                (A += 4),
                  l > -1 && (c = B(t[e(447)](A, (A += l)))),
                  h[e(457)]({
                    Reflect: r,
                    Weight: n,
                    Type: a,
                    Source: { Target: o, Id: c },
                  });
              }
            }
            const f = m[e(454)](A, !0);
            let d;
            if (((A += 4), f > -1)) {
              d = [];
              for (let r = 0; r < f; r++) {
                A += 4;
                const r = !!m[e(455)](A);
                A += 1;
                const n = m[e(454)](A, !0);
                A += 4;
                const i = m[e(449)](A, !0);
                A += 8;
                const a = m[e(449)](A, !0);
                A += 8;
                const s = m[e(454)](A, !0);
                let o;
                (A += 4), s > -1 && (o = B(t[e(447)](A, (A += s)))), (A += 4);
                const l = m[e(454)](A, !0);
                let c;
                (A += 4), l > -1 && (c = B(t[e(447)](A, (A += l))));
                const u = m[e(454)](A, !0);
                let h;
                (A += 4),
                  u > -1 && (h = B(t[e(447)](A, (A += u)))),
                  d[e(457)]({
                    Reflect: r,
                    VertexIndex: n,
                    Scale: i,
                    Weight: a,
                    Type: o,
                    Destination: { Target: c, Id: h },
                  });
              }
            }
            const p = m["getInt32"](A, !0);
            let y;
            if (((A += 4), p > -1)) {
              y = [];
              for (let t = 0; t < p; t++) {
                A += 4;
                const t = m[e(449)](A, !0);
                A += 8;
                const r = m[e(449)](A, !0);
                A += 8;
                const n = m[e(449)](A, !0);
                A += 8;
                const i = m[e(449)](A, !0);
                (A += 8), (A += 4);
                const a = m[e(449)](A, !0);
                A += 8;
                const s = m[e(449)](A, !0);
                (A += 8),
                  y[e(457)]({
                    Mobility: t,
                    Delay: r,
                    Acceleration: n,
                    Radius: i,
                    Position: { X: a, Y: s },
                  });
              }
            }
            g["push"]({
              Id: n,
              Normalization: {
                Position: { Minimum: i, Default: a, Maximum: s },
                Angle: { Minimum: o, Default: l, Maximum: c },
              },
              Input: h,
              Output: d,
              Vertices: y,
            });
          }
        }
        i = {
          Version: r,
          Meta: {
            PhysicsSettingCount: n,
            TotalInputCount: a,
            TotalOutputCount: s,
            VertexCount: o,
            EffectiveForces: {
              Gravity: { X: l, Y: c },
              Wind: { X: u, Y: h },
            },
            PhysicsDictionary: d,
          },
          PhysicsSettings: g,
        };
      }
    })(),
    (function () {
      const e = Z,
        r = m["getInt32"](A, !0);
      if (((A += 4), r > -1)) {
        const r = m[e(454)](A, !0);
        A += 4;
        const n = m["getInt32"](A, !0);
        let i;
        if (((A += 4), n > -1)) {
          i = [];
          for (let r = 0; r < n; r++) {
            A += 4;
            const r = m[e(454)](A, !0);
            let n;
            (A += 4), r > -1 && (n = B(t[e(447)](A, (A += r))));
            const a = m["getInt32"](A, !0);
            let s;
            (A += 4), a > -1 && (s = B(t[e(447)](A, (A += a))));
            const o = m[e(454)](A, !0);
            let l;
            (A += 4),
              o > -1 && (l = B(t[e(447)](A, (A += o)))),
              i[e(457)]({ Id: n, Name: s, GroupId: l });
          }
        }
        const a = m[e(454)](A, !0);
        let s;
        if (((A += 4), a > -1)) {
          s = [];
          for (let r = 0; r < a; r++) {
            A += 4;
            const r = m[e(454)](A, !0);
            let n;
            (A += 4), r > -1 && (n = B(t["slice"](A, (A += r))));
            const i = m[e(454)](A, !0);
            let a;
            (A += 4), i > -1 && (a = B(t[e(447)](A, (A += i))));
            const o = m[e(454)](A, !0);
            let l;
            (A += 4),
              o > -1 && (l = B(t[e(447)](A, (A += o)))),
              s[e(457)]({ Id: n, Name: a, GroupId: l });
          }
        }
        const o = m[e(454)](A, !0);
        let c;
        if (((A += 4), !(o > -1))) throw new h("cdi parse error");
        c = [];
        for (let l = 0; l < o; l++) {
          A += 4;
          const r = m["getInt32"](A, !0);
          let n;
          (A += 4), r > -1 && (n = B(t[e(447)](A, (A += r))));
          const i = m[e(454)](A, !0);
          let a;
          (A += 4),
            i > -1 && (a = B(t["slice"](A, (A += i)))),
            c[e(457)]({ Id: n, Name: a });
        }
        l = { Version: r, ParameterGroups: i, Parameters: s, Parts: c };
      }
    })(),
    (function () {
      const e = Z,
        r = m[e(454)](A, !0);
      if (((A += 4), r > -1)) {
        const r = m[e(454)](A, !0);
        (A += 4), (A += 4);
        const n = m[e(454)](A, !0);
        A += 4;
        const i = m["getInt32"](A, !0);
        A += 4;
        const a = m[e(454)](A, !0);
        let s;
        if (((A += 4), a > -1)) {
          s = [];
          for (let r = 0; r < a; r++) {
            A += 4;
            const r = m["getInt32"](A, !0);
            let n;
            (A += 4), r > -1 && (n = B(t["slice"](A, (A += r))));
            const i = m[e(454)](A, !0);
            let a;
            (A += 4), i > -1 && (a = B(t["slice"](A, (A += i))));
            const o = m[e(454)](A, !0);
            let l;
            (A += 4),
              o > -1 && (l = B(t["slice"](A, (A += o)))),
              s[e(457)]({ Target: n, Id: a, Value: l });
          }
          o = {
            Version: r,
            Meta: { UserDataCount: n, TotalUserDataSize: i },
            UserData: s,
          };
        }
      }
    })(),
    (function () {
      const e = Z,
        n = m[e(454)](A, !0);
      if (((A += 4), n > -1)) {
        const n = m["getInt32"](A, !0);
        (A += 4), (A += 4);
        const i = m[e(454)](A, !0);
        let a;
        (A += 4), i > -1 && (a = B(t["slice"](A, (A += i))));
        const s = m[e(454)](A, !0);
        let o;
        (A += 4), s > -1 && (o = B(t[e(447)](A, (A += s))));
        const l = m[e(454)](A, !0);
        let c, u;
        (A += 4),
          l > -1 && ((c = B(t[e(447)](A, (A += l)))), (u = JSON[e(436)](c)));
        const h = m[e(454)](A, !0);
        let f;
        (A += 4), h > -1 && (f = B(t[e(447)](A, (A += h))));
        const d = m[e(454)](A, !0);
        let p;
        (A += 4), d > -1 && (p = B(t[e(447)](A, (A += d))));
        const g = m[e(454)](A, !0);
        let y;
        (A += 4), g > -1 && (y = B(t[e(447)](A, (A += g))));
        const v = m[e(454)](A, !0);
        let w;
        if (((A += 4), v > -1)) {
          w = [];
          for (let r = 0; r < v; r++) {
            const r = m[e(454)](A, !0);
            let n;
            (A += 4), r > -1 && ((n = B(t[e(447)](A, (A += r)))), w[e(457)](n));
          }
        }
        const b = m[e(454)](A, !0);
        A += 4;
        const I = [];
        if (b > -1)
          for (let r = 0; r < b; r++) {
            A += 4;
            const r = m[e(449)](A, !0);
            A += 8;
            const n = m["getFloat64"](A, !0);
            A += 8;
            const i = m[e(454)](A, !0);
            let a;
            (A += 4), i > -1 && (a = B(t[e(447)](A, (A += i))));
            const s = m[e(454)](A, !0);
            let o;
            (A += 4),
              s > -1 && (o = B(t[e(447)](A, (A += s)))),
              I[e(457)]({
                FadeInTime: r,
                FadeOutTime: n,
                Name: a,
                File: o,
              });
          }
        const E = m[e(454)](A, !0);
        let M;
        if (((A += 4), E > -1)) {
          M = [];
          for (let r = 0; r < E; r++) {
            A += 4;
            const r = m[e(454)](A, !0);
            let n;
            (A += 4), r > -1 && (n = B(t[e(447)](A, (A += r))));
            const i = m["getInt32"](A, !0);
            let a;
            (A += 4), i > -1 && (a = B(t["slice"](A, (A += i))));
            const s = m[e(454)](A, !0);
            let o;
            if (((A += 4), s > -1)) {
              o = [];
              for (let e = 0; e < s; e++) {
                const e = m["getInt32"](A, !0);
                let r;
                (A += 4),
                  e > -1 && ((r = B(t["slice"](A, (A += e)))), o["push"](r));
              }
            }
            M[e(457)]({ Target: n, Name: a, Ids: o });
          }
        }
        const k = m["getInt32"](A, !0);
        let S;
        if (((A += 4), k > -1)) {
          S = [];
          for (let r = 0; r < k; r++) {
            A += 4;
            const r = m[e(454)](A, !0);
            let n;
            (A += 4), r > -1 && (n = B(t[e(447)](A, (A += r))));
            const i = m["getInt32"](A, !0);
            let a;
            (A += 4),
              i > -1 && (a = B(t[e(447)](A, (A += i)))),
              S[e(457)]({ Name: n, Id: a });
          }
        }
        r = {
          Version: n,
          FileReferences: {
            Moc: a,
            Pose: o,
            Motions: u,
            Physics: f,
            DisplayInfo: p,
            UserData: y,
            Textures: w,
            Expressions: I,
          },
          Groups: M,
          HitAreas: S,
        };
      }
    })(),
    (function () {
      const e = Z;
      if (A < m[e(429)]) {
        const r = m[e(454)](A, !0);
        if (((A += 4), r > -1))
          for (let n = 0; n < r; n++) {
            A += 4;
            const r = m[e(454)](A, !0);
            if (((A += 4), r > -1)) {
              A += r;
              const n = m[e(454)](A, !0);
              A += 4;
              const i = t[e(447)](A, (A += n));
              p["push"](i);
            }
          }
      }
    })(),
    (function () {
      const e = Z;
      if (A < m[e(429)]) {
        const a = m["getInt32"](A, !0);
        if (((A += 4), a > -1))
          for (let s = 0; s < a; s++) {
            A += 4;
            const a = m[e(454)](A, !0);
            let s;
            if (((A += 4), a > -1)) {
              s = B(t["slice"](A, (A += a)));
              const o = m[e(454)](A, !0);
              A += 4;
              const l = t[e(447)](A, (A += o));
              if (s[e(428)](e(448)) && !s[e(431)](e(445))) {
                const t = JSON["parse"](B(l));
                f[e(457)](t),
                  !r[e(450)][e(452)] &&
                    (r["FileReferences"][e(452)] = { external: [] }),
                  !r[e(450)][e(452)][e(440)] &&
                    (r["FileReferences"]["Motions"]["external"] = []),
                  r[e(450)][e(452)][e(440)][e(457)]({ File: s });
              } else if (s[e(428)](e(443)) && !s["startsWith"](e(445))) {
                var n, i;
                const t = JSON[e(436)](B(l));
                d[e(457)](t),
                  !r[e(450)][e(451)] && (r[e(450)][e(451)] = []),
                  r[e(450)][e(451)]["push"]({
                    Name:
                      null !==
                        (n =
                          null ===
                            (i = s[e(444)]("/")["find"]((t) =>
                              t[e(428)](e(443))
                            )) || void 0 === i
                            ? void 0
                            : i[e(459)](".exp3.json", "")) && void 0 !== n
                        ? n
                        : s,
                    File: s,
                  });
              }
            }
          }
      }
    })(),
    (function () {
      let t = 0;
      for (const e in r["FileReferences"]["Motions"]) {
        const n = {};
        for (const i of r["FileReferences"]["Motions"][e])
          (n[i["File"]] = f[t]), t++;
        c[e] = n;
      }
    })(),
    (function () {
      const t = Z;
      let e = 0;
      for (const a of null !==
        (n = null === (i = r[t(450)]) || void 0 === i ? void 0 : i[t(451)]) &&
      void 0 !== n
        ? n
        : []) {
        var n, i;
        (u[a[t(446)]] = d[e]), e++;
      }
      for (const s of p) {
        const e = B(s);
        e[t(444)]("\n")
          [t(434)]((e) => e[t(437)] > 0)
          [t(434)]((e) => e[t(439)]("set_special_pose_param"))
          ["forEach"]((e, n) => {
            const i = t,
              s = e[i(444)](" ")["filter"]((t) => t);
            (u[i(432) + n] = Object(a["cfgPoseAdapter"])({
              name: s[1],
              paramId: s[2]["replace"](/'/g, ""),
              min: parseFloat(s[3]),
              max: parseFloat(s[4]),
              key: parseInt(s[5], 10),
            })),
              void 0 === r[i(450)][i(451)] && (r[i(450)][i(451)] = []),
              r[i(450)][i(451)]["push"]({
                Name: i(432) + n,
                File: "cfg_expression_" + n,
              });
          });
      }
    })(),
    {
      model3Json: r,
      moc3: e,
      textures: n,
      physicsJson: i,
      poseJson: s,
      userdata: o,
      displayInfo: l,
      motionDictionary: c,
      expressionDictionary: u,
    }
  );
}
function D() {
  const t = [
    "cfg_expression_",
    "99957UIYrHy",
    "filter",
    "879990GBkSyY",
    "parse",
    "length",
    "49355QkutFV",
    "includes",
    "external",
    "60kDQann",
    "2404731eJDToX",
    ".exp3.json",
    "split",
    "__MACOSX",
    "Name",
    "slice",
    ".motion3.json",
    "getFloat64",
    "FileReferences",
    "Expressions",
    "Motions",
    "1702926WNnoUx",
    "getInt32",
    "getUint8",
    "246932ywOgpJ",
    "push",
    "8VADvZS",
    "replace",
    "383070yvMMyP",
    "endsWith",
    "byteLength",
    "buffer",
    "startsWith",
  ];
  return (
    (D = function () {
      return t;
    }),
    D()
  );
}
function Q(t, e) {
  const r = z();
  return (
    (Q = function (t, e) {
      t -= 216;
      let n = r[t];
      return n;
    }),
    Q(t, e)
  );
}
async function O(t, e, r) {
  const n = Q,
    i =
      t instanceof ArrayBuffer
        ? t
        : await p(t, {
            responseType: "arrayBuffer",
            onProgress: null === r || void 0 === r ? void 0 : r[n(221)],
          }),
    a = i[n(218)](8, 24);
  return V(await N(i[n(218)](24), a, e));
}
function z() {
  const t = [
    "837732cHhXTO",
    "onProgress",
    "4913160jgvpbW",
    "6265215kHTIkW",
    "1959249gKToai",
    "298FvWmAX",
    "3375512sPxjDu",
    "3808315hjfGjY",
    "1945wjwhTl",
    "slice",
    "5yUxfiS",
  ];
  return (
    (z = function () {
      return t;
    }),
    z()
  );
}
(function (t, e) {
  const r = S,
    n = t();
  while (1)
    try {
      const t =
        (-parseInt(r(501)) / 1) * (-parseInt(r(518)) / 2) +
        (-parseInt(r(521)) / 3) * (parseInt(r(522)) / 4) +
        (parseInt(r(497)) / 5) * (-parseInt(r(502)) / 6) +
        -parseInt(r(516)) / 7 +
        (-parseInt(r(523)) / 8) * (parseInt(r(499)) / 9) +
        parseInt(r(509)) / 10 +
        parseInt(r(504)) / 11;
      if (t === e) break;
      n["push"](n["shift"]());
    } catch (i) {
      n["push"](n["shift"]());
    }
})(R, 976117),
  (function (t, e) {
    const r = x,
      n = t();
    while (1)
      try {
        const t =
          -parseInt(r(476)) / 1 +
          parseInt(r(489)) / 2 +
          parseInt(r(486)) / 3 +
          -parseInt(r(473)) / 4 +
          (parseInt(r(487)) / 5) * (-parseInt(r(491)) / 6) +
          (parseInt(r(474)) / 7) * (-parseInt(r(479)) / 8) +
          parseInt(r(483)) / 9;
        if (t === e) break;
        n["push"](n["shift"]());
      } catch (i) {
        n["push"](n["shift"]());
      }
  })(U, 905178),
  (function (t, e) {
    const r = Z,
      n = t();
    while (1)
      try {
        const t =
          -parseInt(r(433)) / 1 +
          parseInt(r(456)) / 2 +
          -parseInt(r(435)) / 3 +
          (parseInt(r(441)) / 4) * (-parseInt(r(438)) / 5) +
          parseInt(r(460)) / 6 +
          parseInt(r(442)) / 7 +
          (parseInt(r(458)) / 8) * (parseInt(r(453)) / 9);
        if (t === e) break;
        n["push"](n["shift"]());
      } catch (i) {
        n["push"](n["shift"]());
      }
  })(D, 178706),
  (function (t, e) {
    const r = Q,
      n = t();
    while (1)
      try {
        const t =
          (parseInt(r(217)) / 1) * (-parseInt(r(225)) / 2) +
          -parseInt(r(224)) / 3 +
          parseInt(r(222)) / 4 +
          (parseInt(r(219)) / 5) * (parseInt(r(220)) / 6) +
          parseInt(r(216)) / 7 +
          parseInt(r(226)) / 8 +
          -parseInt(r(223)) / 9;
        if (t === e) break;
        n["push"](n["shift"]());
      } catch (i) {
        n["push"](n["shift"]());
      }
  })(z, 694873);
const G = j;
async function W(t, e) {
  const r = j;
  var n;
  const i =
      t instanceof ArrayBuffer
        ? t
        : await p(t, {
            responseType: r(281),
            onProgress: null === e || void 0 === e ? void 0 : e[r(291)],
          }),
    s = new Y(await F(i));

  return s;

  // let o, l;
  // const c = [];
  // let u, f, d, g;
  // const v = {},
  //   b = {},
  //   I = null === (n = s[r(321)](A)) || void 0 === n ? void 0 : n[r(280)]();
  // if (!I) throw new h("model3 not exist");
  // o = JSON[r(272)](I);
  // {
  //   var E;
  //   const t = o[r(315)][r(302)],
  //     e = null === (E = s[r(298)](t)) || void 0 === E ? void 0 : E[r(284)];
  //   e && (l = e);
  // }
  // for (const a of o[r(315)][r(301)]) {
  //   var M;
  //   const t = null === (M = s[r(298)](a)) || void 0 === M ? void 0 : M[r(284)];
  //   t && c["push"](t);
  // }
  // {
  //   const t = o[r(315)][r(276)];
  //   if (t) {
  //     var k;
  //     const e =
  //       null === (k = s[r(298)](t)) || void 0 === k ? void 0 : k[r(280)]();
  //     e && (u = JSON[r(272)](e));
  //   }
  // }
  // {
  //   const t = o[r(315)][r(300)];
  //   if (t) {
  //     var S;
  //     const e =
  //       null === (S = s[r(298)](t)) || void 0 === S ? void 0 : S[r(280)]();
  //     e && (f = JSON[r(272)](e));
  //   }
  // }
  // {
  //   const t = o[r(315)][r(278)];
  //   if (t) {
  //     var R;
  //     const e =
  //       null === (R = s[r(298)](t)) || void 0 === R ? void 0 : R[r(280)]();
  //     e && (d = JSON[r(272)](e));
  //   }
  // }
  // {
  //   const t = o["FileReferences"][r(267)];
  //   if (t) {
  //     var C;
  //     const e =
  //       null === (C = s[r(298)](t)) || void 0 === C ? void 0 : C["toString"]();
  //     e && (g = JSON[r(272)](e));
  //   }
  // }
  // const T = new Set();
  // if (o["FileReferences"]["Motions"])
  //   for (const a in o[r(315)]["Motions"]) {
  //     const t = {};
  //     for (const e of o["FileReferences"][r(279)][a]) {
  //       const n = s[r(321)](
  //           (t) => t["endsWith"](e[r(270)]) && !t[r(264)](r(265))
  //         ),
  //         i = null === n || void 0 === n ? void 0 : n[r(280)]();
  //       n && i && ((t[e[r(270)]] = JSON[r(272)](i)), T["add"](n[r(311)]));
  //     }
  //     v[a] = t;
  //   }
  // const x = new Set();
  // if (o["FileReferences"][r(297)])
  //   for (const a of o[r(315)][r(297)]) {
  //     const t = s[r(321)]((t) => {
  //         const e = r;
  //         return t[e(306)](a[e(270)]) && !t[e(264)](e(265));
  //       }),
  //       e = null === t || void 0 === t ? void 0 : t[r(280)]();
  //     t && e && ((b[a[r(287)]] = JSON[r(272)](e)), x[r(286)](t[r(311)]));
  //   }
  // const U = new Set(),
  //   B = s[r(268)](w);
  // for (const h of B) {
  //   const t = h["toString"](),
  //     e = t["split"]("\n")
  //       [r(269)]((t) => t[r(318)]())
  //       [r(293)]((t) => t[r(303)] > 0);
  //   e[r(293)]((t) => t[r(271)](r(319)))[r(288)]((t, e) => {
  //     const n = r,
  //       i = t[n(295)](" ")[n(293)]((t) => t);
  //     (b[n(308) + e] = Object(a["cfgPoseAdapter"])({
  //       name: i[1],
  //       paramId: i[2][n(305)](/'/g, ""),
  //       min: parseFloat(i[3]),
  //       max: parseFloat(i[4]),
  //       key: parseInt(i[5], 10),
  //     })),
  //       void 0 === o["FileReferences"][n(297)] && (o[n(315)][n(297)] = []),
  //       o[n(315)][n(297)][n(309)]({ Name: n(308) + e, File: n(308) + e });
  //   }),
  //     e[r(293)]((t) => t["includes"]("set_idle_anim"))[r(288)]((t) => {
  //       const e = r,
  //         n = t[e(295)](" ")[e(293)]((t) => t),
  //         i = n[2][e(305)](/'/g, "");
  //       U[e(286)](i);
  //     });
  // }
  // const N = s[r(268)](m);
  // for (const a of N)
  //   if (!T[r(307)](a["name"])) {
  //     const t = a[r(280)](),
  //       e = JSON[r(272)](t);
  //     void 0 === o["FileReferences"][r(279)] && (o[r(315)][r(279)] = {}),
  //       U[r(307)](a["name"][r(266)](a[r(311)][r(299)]("/") + 1)[r(295)](".")[0])
  //         ? (void 0 === o[r(315)][r(279)][r(323)] &&
  //             (o[r(315)][r(279)][r(323)] = []),
  //           o["FileReferences"]["Motions"]["Idle"][r(309)]({
  //             File: a[r(311)],
  //           }),
  //           void 0 === v["Idle"] && (v[r(323)] = {}),
  //           (v["Idle"][a[r(311)]] = e))
  //         : (void 0 === o[r(315)][r(279)][r(322)] &&
  //             (o[r(315)][r(279)]["external"] = []),
  //           o["FileReferences"]["Motions"][r(322)]["push"]({
  //             File: a[r(311)],
  //           }),
  //           void 0 === v[r(322)] && (v[r(322)] = {}),
  //           (v[r(322)][a[r(311)]] = e));
  //   }
  // const Z = s["findAll"](y);
  // for (const a of Z)
  //   if (!x["has"](a[r(311)])) {
  //     const t = a["toString"](),
  //       e = JSON[r(272)](t);
  //     (b[a["name"]] = e),
  //       void 0 === o[r(315)][r(297)] && (o["FileReferences"][r(297)] = []),
  //       o[r(315)][r(297)][r(309)]({ Name: a[r(311)], File: a[r(311)] });
  //   }
  // return {
  //   model3Json: o,
  //   moc3: l,
  //   textures: c,
  //   physicsJson: u,
  //   poseJson: f,
  //   userdata: d,
  //   displayInfo: g,
  //   motionDictionary: v,
  //   expressionDictionary: b,
  // };
}
(function (t, e) {
  const r = j,
    n = t();
  while (1)
    try {
      const t =
        (-parseInt(r(289)) / 1) * (-parseInt(r(314)) / 2) +
        parseInt(r(316)) / 3 +
        parseInt(r(283)) / 4 +
        (-parseInt(r(275)) / 5) * (-parseInt(r(290)) / 6) +
        -parseInt(r(310)) / 7 +
        (parseInt(r(274)) / 8) * (parseInt(r(273)) / 9) +
        (-parseInt(r(317)) / 10) * (parseInt(r(294)) / 11);
      if (t === e) break;
      n["push"](n["shift"]());
    } catch (i) {
      n["push"](n["shift"]());
    }
})(J, 261610);
class L {
  constructor(t, e) {
    const r = j;
    s(this, r(311), void 0),
      s(this, r(284), void 0),
      (this["name"] = t),
      (this[r(284)] = e);
  }
  [G(280)]() {
    const t = G;
    return new TextDecoder()[t(312)](this[t(284)]);
  }
}
function j(t, e) {
  const r = J();
  return (
    (j = function (t, e) {
      t -= 263;
      let n = r[t];
      return n;
    }),
    j(t, e)
  );
}
class Y {
  constructor(t) {
    const e = G;
    s(this, "files", new Map());
    let r = 0;
    while (r < t[e(320)]) {
      const n = P(t[e(266)](r));
      this[e(263)]["set"](n[e(311)], new L(n[e(311)], n[e(284)])),
        (r += n[e(277)]);
    }
  }
  [G(298)](t) {
    const e = G;
    for (const r of this["files"][e(304)]())
      if (r["name"][e(271)](t) && !r["name"]["startsWith"](e(265))) return r;
  }
  [G(321)](t) {
    const e = G;
    for (const r of this[e(263)][e(304)]()) if (t(r[e(311)])) return r;
  }
  ["findAll"](t) {
    const e = G;
    return Array[e(296)](this[e(263)][e(304)]())[e(293)]((r) => t(r[e(311)]));
  }
}
function J() {
  const t = [
    "9858CViYtq",
    "onProgress",
    "BYTES_PER_ELEMENT",
    "filter",
    "4158RBvxSZ",
    "split",
    "from",
    "Expressions",
    "read",
    "lastIndexOf",
    "Pose",
    "Textures",
    "Moc",
    "length",
    "values",
    "replace",
    "endsWith",
    "has",
    "cfg_expression_",
    "push",
    "3129889fCDgAD",
    "name",
    "decode",
    "buffer",
    "2qjZMdc",
    "FileReferences",
    "127494jKBeXZ",
    "11980bZjUqQ",
    "trim",
    "set_special_pose_param",
    "byteLength",
    "findOne",
    "external",
    "Idle",
    "files",
    "startsWith",
    "__MACOSX",
    "slice",
    "DisplayInfo",
    "findAll",
    "map",
    "File",
    "includes",
    "parse",
    "9vCSGLM",
    "504472rzTptL",
    "1490JcjxFF",
    "Physics",
    "total",
    "UserData",
    "Motions",
    "toString",
    "arrayBuffer",
    "getUint32",
    "891660PjxgJw",
    "data",
    "shift-jis",
    "add",
    "Name",
    "forEach",
    "343495wSHSSh",
  ];
  return (
    (J = function () {
      return t;
    }),
    J()
  );
}
function P(t) {
  const e = G;
  let r = 0;
  const n = new DataView(t),
    i = n[e(282)](r, !0);
  r += Uint32Array[e(292)];
  let a = new TextDecoder()["decode"](t[e(266)](r, r + i));
  a[e(271)]("�") && (a = new TextDecoder("gbk")[e(312)](t["slice"](r, r + i))),
    a["includes"]("�") &&
      (a = new TextDecoder(e(285))[e(312)](t[e(266)](r, r + i))),
    (r += i);
  const s = n[e(282)](r, !0);
  r += Uint32Array[e(292)];
  const o = n[e(313)]["slice"](r, r + s);
  return (r += s), { total: r, name: a, data: o };
}
function _() {
  var t = [
    "11648650btDuPA",
    "7779786IQxSne",
    "8952400smAOkd",
    "519YbXvbe",
    "26370wahNKn",
    "7863012GPNDfP",
    "485aRyMJv",
    "1136714bvqfkm",
    "8472TcDorY",
    "1jJkert",
  ];
  return (
    (_ = function () {
      return t;
    }),
    _()
  );
}
function H(t, e) {
  var r = _();
  return (
    (H = function (t, e) {
      t -= 377;
      var n = r[t];
      return n;
    }),
    H(t, e)
  );
}
(function (t, e) {
  var r = H,
    n = t();
  while (1)
    try {
      var i =
        (parseInt(r(381)) / 1) * (-parseInt(r(379)) / 2) +
        (parseInt(r(385)) / 3) * (-parseInt(r(380)) / 4) +
        (parseInt(r(378)) / 5) * (-parseInt(r(386)) / 6) +
        parseInt(r(383)) / 7 +
        parseInt(r(384)) / 8 +
        parseInt(r(377)) / 9 +
        -parseInt(r(382)) / 10;
      if (i === e) break;
      n["push"](n["shift"]());
    } catch (a) {
      n["push"](n["shift"]());
    }
})(_, 578165);

module.exports = {
  WsmFile: L,
  WsmInstance: Y,
  loadLive2dHttpAsync: C,
  loadLive2dOpalAsync: O,
  loadLive2dWsmAsync: W,
  // loadLive2dZipAsync: k,
};
