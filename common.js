(function () {
  var aa = '"Helvetica Neue Light", HelveticaNeue-Light, "Helvetica Neue", Helvetica, Arial, sans-serif',
  ba = '#editor-frame',
  ca = '#editor-frame .editor-control',
  da = '#editor-frame .editor-editor',
  ea = '#editor-frame .template[data-template="',
  fa = '#gadget-dock', // gadgets can be moved to another container
  ha = '#lightbox',
  ja = '#nyanyanya',
  ka = '#overview',
  la = '#search',
  ma = '.comments',
  na = '.gadget-content',
  oa = '.gadget-resize-detector',
  pa = '.lightbox',
  qa = '.lightbox-content',
  sa = '.lightbox-panel',
  ta = '.metrics',
  ua = '.overview',
  va = '.overview-content',
  wa = '.singleton-element, #injected-iframe',
  xa = '.text-paragraph',
  ya = '.toggle-container',
  za = '.toggle-switch',
  Aa = '.viewitem-panel',
  Ba = '//www.blogger.com',
  Ca = '/search/label/',
  Da = '400px',
  Ea = '</div>',
  Fa = '<a name=\'more\'></a>',
  Ga = '<div/>',
  Ha = '<span class="text-break"> </span>',
  l = 'Date',
  Ia = 'Failed to parse post content',
  Ja = 'Missing or invalid tag',
  Ka = 'Resizable',
  La = 'TemplateEditor',
  Ma = '__filtered',
  Na = '__nested:',
  Oa = '_relative',
  Pa = 'absolute',
  Qa = 'active',
  Ra = 'archive_blogspot',
  Sa = 'atPeace_',
  Ta = 'background-color',
  Ua = 'blitzBaseUrl',
  Va = 'blogger.ui().viewType_.prototype.defaults.name',
  B = 'body',
  Wa = 'bottom',
  Xa = 'canvas',
  Ya = 'center',
  Za = 'clearselection',
  $a = 'click',
  ab = 'closing',
  bb = 'collapse-breaks',
  cb = 'colliding',
  db = 'comment-view',
  eb = 'custom',
  fb = 'dancing',
  gb = 'dancing_',
  hb = 'data-id',
  ib = 'data-identifier',
  jb = 'data-item-type',
  kb = 'data-itemid',
  lb = 'data-src',
  mb = 'data-template',
  nb = 'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
  ob = 'defer',
  pb = 'deferred',
  qb = 'desiredX2_',
  rb = 'desiredX3_',
  sb = 'desiredX_',
  tb = 'desiredY2_',
  ub = 'desiredY3_',
  vb = 'desiredY_',
  wb = 'direction',
  xb = 'display',
  yb = 'embed',
  zb = 'exceeding',
  Ab = 'fallingAndBouncing',
  Bb = 'false',
  Cb = 'fetchend',
  Db = 'filter',
  Eb = 'fixed',
  Fb = 'fountain-count',
  Gb = 'function',
  Hb = 'gadget-dock-overflow-bottom',
  Ib = 'gadget-dock-overflow-client-area',
  Jb = 'gadget-dock-overflow-normal',
  Kb = 'gadget-opening',
  Lb = 'gadget-selected',
  Mb = 'global-scope',
  Nb = 'height',
  Ob = 'hesitating',
  Pb = 'hidden',
  Qb = 'horizontal',
  Rb = 'https',
  Sb = 'https://www.googleapis.com/plus',
  Tb = 'iframe',
  Ub = 'ignoreMySpeed_',
  Vb = 'img',
  Wb = 'initialized',
  Xb = 'instant',
  Yb = 'item_blogspot',
  Zb = 'json',
  $b = 'jumpPower_',
  ac = 'jumpWillSucceed_',
  bc = 'jumpedHighEnough_',
  cc = 'lastApex_',
  dc = 'left',
  ec = 'lightbox-open',
  fc = 'loadcomplete',
  gc = 'mousemove.mousewiggle',
  hc = 'mousemove.particles',
  ic = 'number_',
  jc = 'object',
  kc = 'overview-open',
  lc = 'perseverance',
  mc = 'photo',
  nc = 'position',
  oc = 'preDanceRotation',
  pc = 'preDanceRotation_',
  qc = 'preDanceVelocity_',
  rc = 'prerender',
  sc = 'published',
  tc = 'rad)',
  uc = 'relative',
  vc = 'rendercomplete',
  wc = 'rgba(0, 0, 0, 0.5)',
  xc = 'right',
  yc = 'rotate(',
  zc = 'scroll',
  Ac = 'searching',
  Bc = 'secondLastApex_',
  Cc = 'spritle',
  E = 'src',
  Dc = 'start',
  Ec = 'static_page',
  G = 'string',
  Fc = 'templateeditor',
  Gc = 'text-decoration',
  Hc = 'text-run',
  Ic = 'toggle-active',
  Jc = 'top',
  Kc = 'transparent',
  Lc = 'true',
  Mc = 'unknown',
  Nc = 'updated.comments',
  Oc = 'velX_',
  Pc = 'velY_',
  Qc = 'vertical',
  Rc = 'video',
  Sc = 'view',
  Tc = 'viewitem-open',
  Uc = 'width';
  function Vc() {
    return function (a) {
      return a
    }
  }
  function H() {
    return function () {
    }
  }
  function Wc(a) {
    return function () {
      return this[a]
    }
  }
  function Xc(a) {
    return function () {
      return a
    }
  }
  var K,
  Yc = typeof Object.defineProperties == Gb ? Object.defineProperty : function (a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
  };
  function Zc(a) {
    a = [
      jc == typeof globalThis && globalThis,
      jc == typeof window && window,
      jc == typeof self && self,
      jc == typeof global && global,
      a
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c
    }
    throw Error('Cannot find global object');
  }
  var $c = Zc(this);
  function ad(a, b) {
    if (b) {
      var c = $c;
      a = a.split('.');
      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {
        });
        c = c[e]
      }
      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && Yc(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      })
    }
  }
  ad('Array.prototype.find', function (a) {
    return a ? a : function (b, c) {
      a: {
        var d = this;
        d instanceof String && (d = String(d));
        for (var e = d.length, k = 0; k < e; k++) {
          var n = d[k];
          if (b.call(c, n, k, d)) {
            b = n;
            break a
          }
        }
        b = void 0
      }
      return b
    }
  });
  ad('String.prototype.startsWith', function (a) {
    return a ? a : function (b, c) {
      if (null == this) throw new TypeError('The \'this\' value for String.prototype.startsWith must not be null or undefined');
      if (b instanceof RegExp) throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression');
      var d = this + '';
      b += '';
      var e = d.length,
      k = b.length;
      c = Math.max(0, Math.min(c | 0, d.length));
      for (var n = 0; n < k && c < e; ) if (d[c++] != b[n++]) return !1;
      return n >= k
    }
  });
  (function (a, b) {
    function c(e, k) {
      if (!k.length) {
        if (e.caller) return e.caller.arguments;
        if (k.callee && k.callee.caller) return k.callee.caller.arguments
      }
      return k
    }
    var d = /xyz/.test(H()) ? /\bbase\b/ : /.*/;
    a.inherit = function (e) {
      function k() {
        var f = r.prototype,
        m;
        for (m in f) typeof f[m] == Gb && typeof h[m] == Gb && d.test(f[m]) ? g[m] = function (t, x) {
          return function () {
            var A = this.base;
            this.base = function () {
              return h[t].apply(this, c(this.base, arguments))
            };
            try {
              return x.apply(this, arguments)
            } finally {
              this.base = A
            }
          }
        }(m, f[m])  : g[m] = f[m]
      }
      function n() {
      }
      var q = arguments[1] || arguments[0],
      r = 2 == arguments.length ? arguments[0] : b,
      p = !0;
      if (r) {
        if (r.prototype.base) throw 'Subclass already derives. Multiple inheritance is not supported.';
        for (var v in r.prototype) {
          p = !1;
          break
        }
      } else r = function () {
        this.base()
      };
      n.prototype = q.prototype;
      var g = new n,
      h = q.prototype;
      p || k();
      g.base = function () {
        p && (p = !1, k());
        var f = this.base;
        this.base = h.base;
        try {
          q.apply(this, c(g.base, arguments))
        } finally {
          this.base = f
        }
      };
      r.prototype = g;
      return r.prototype.constructor = r
    }
  }) (jQuery);
  (function (a) {
    function b(g, h) {
      window.google_persistent_state_async = {
      };
      window.google_unique_id = null;
      return g.each(function () {
        var f = a.extend({
        }, a.fn.adsense.defaults, n(a(this)), h);
        e(a(this), f)
      })
    }
    function c() {
      var g = window.adsbygoogle;
      if (g && g.push) return !0;
      v || (v = !0, a.getScript('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', d));
      return !1
    }
    function d() {
      for (var g = 0, h; h = p[g]; g++) h();
      p = [
      ]
    }
    function e(g, h) {
      var f = g.data('adsense') || {
      },
      m = k(g, h);
      h && a.isFunction(h.beforeRender) && h.beforeRender(m);
      h = !1;
      if (f.Jf) for (var t in m) {
        if (m[t] !== f[t]) {
          h = !0;
          break
        }
      } else h = !0;
      if (h && m.format && m.client) {
        g.empty();
        f = {
          'class': 'adsbygoogle'
        };
        m.client && (f['data-ad-client'] = m.client);
        m.host && (f['data-ad-host'] = m.host);
        m.hostchannel && (f['data-ad-host-channel'] = m.hostchannel);
        m.slot && (f['data-ad-slot'] = m.slot);
        m.type && (f['data-ad-type'] = m.type);
        t = r[m.format];
        t.$b ? (f['data-ad-format'] = t.format, f.style = 'display:block;')  : f.style = 'display:block;height:' + t.height + 'px;width:' + t.width + 'px;';
        m.analytics_id && (f['data-analytics-uacct'] = m.analytics_id);
        var x = a('<ins>', f).appendTo(g).get(0);
        m.Jf = !0;
        g.data('adsense', m);
        setTimeout(function () {
          try {
            window.adsbygoogle.push({
              element: x
            })
          } catch (A) {
          }
        }, 0)
      }
    }
    function k(g, h) {
      var f = {
      };
      a.each(q, function (m, t) {
        f[t] = h[t]
      });
      f.format && (f.format = f.format.toLowerCase().replace(/\s|_/g, ''));
      f.type && (f.type = a.grep(f.type.toLowerCase().split(/\s|_|,|\//), function (m) {
        return 'text' == m || 'image' == m
      }).sort().join(','));
      g = r[h.format] ? h.format : 'auto';
      f.format = g;
      return f
    }
    function n(g) {
      var h = {
      },
      f;
      for (f in a.fn.adsense.defaults) {
        var m = g.data(f);
        m && (h[f] = m)
      }
      return h
    }
    a.fn.adsense = function (g) {
      if (this.length) if (c()) b(this, g);
       else {
        var h = this;
        p.push(function () {
          b(h, g)
        })
      }
      return this
    };
    a.fn.adsense.defaults = {
      analytics_id: void 0,
      format: void 0,
      type: void 0,
      slot: void 0,
      host: void 0,
      client: void 0,
      beforeRender: void 0
    };
    var q = 'analytics_id client format host hostchannel slot type'.split(' '),
    r = {
      auto: {
        format: 'auto',
        $b: !0
      },
      horizontal: {
        format: Qb,
        $b: !0
      },
      vertical: {
        format: Qc,
        $b: !0
      },
      rectangle: {
        format: 'rectangle',
        $b: !0
      },
      banner: {
        format: 'BANNER',
        width: 468,
        height: 60
      },
      button: {
        format: 'BUTTON',
        width: 125,
        height: 125
      },
      halfbanner: {
        format: 'HALF_BANNER',
        width: 234,
        height: 60
      },
      largerectangle: {
        format: 'LARGE_RECTANGLE',
        width: 336,
        height: 280
      },
      leaderboard: {
        format: 'LEADERBOARD',
        width: 728,
        height: 90
      },
      largeleaderboard: {
        format: 'LARGE_LEADERBOARD',
        width: 970,
        height: 90
      },
      billboard: {
        format: 'BILLBOARD',
        width: 970,
        height: 250
      },
      mediumrectangle: {
        format: 'MEDIUM_RECTANGLE',
        width: 300,
        height: 250
      },
      skyscraper: {
        format: 'SKYSCRAPER',
        width: 120,
        height: 600
      },
      smallsquare: {
        format: 'SMALL_SQUARE',
        width: 200,
        height: 200
      },
      smallrectangle: {
        format: 'SMALL_RECTANGLE',
        width: 180,
        height: 150
      },
      square: {
        format: 'SQUARE',
        width: 250,
        height: 250
      },
      verticalbanner: {
        format: 'VERTICAL_BANNER',
        width: 120,
        height: 240
      },
      wideskyscraper: {
        format: 'WIDE_SKYSCRAPER',
        width: 160,
        height: 600
      },
      largeskyscraper: {
        format: 'LARGE_SKYSCRAPER',
        width: 300,
        height: 600
      },
      portrait: {
        format: 'PORTRAIT',
        width: 300,
        height: 1050
      }
    },
    p = [
    ],
    v = !1
  }) (jQuery);
  (function (a) {
    a.asClasses = function (b) {
      var c = [
      ];
      (b = a.isArray(b) ? b : b.split(',')) && (c = a.map(b, function (d) {
        return (d ? a.trim(d.toLowerCase())  : '').replace(/[^\w\s]|_/g, '').replace(/\s+/g, '_')
      }));
      return c.sort().join(' ')
    }
  }) (jQuery);
  (function (a, b) {
    var c = /data-(\w+)/;
    a.fn.attributes = function (d, e) {
      var k = d !== b ? d : !1,
      n = e !== b ? e : !1,
      q = {
      };
      this.each(function () {
        a.each(this.attributes, function (r, p) {
          if (k || p.value) if (n) {
            if (r = c.exec(p.name)) q[r[1]] = p.value
          } else q[p.name] = p.value
        })
      });
      return q
    }
  }) (jQuery);
  var bd = jQuery;
  if (!bd.browser) {
    var cd = navigator.userAgent.toLowerCase(),
    dd = /(opera)(?:.*version)?[ \/]([\w.]+)/,
    ed = /(msie) ([\w.]+)/,
    fd = /(mozilla)(?:.*? rv:([\w.]+))?/,
    gd = /(webkit)[ \/]([\w.]+)/.exec(cd) || dd.exec(cd) || ed.exec(cd) || 0 > cd.indexOf('compatible') && fd.exec(cd) || [
    ];
    bd.browser = {
    };
    bd.browser[gd[1] || ''] = !0;
    bd.browser.version = gd[2] || '0'
  }
  var hd,
  id,
  jd;
  for (jd in bd.browser) 'version' == jd ? id = bd.browser[jd] : 'webkit' == jd || 'chrome' == jd || 'safari' == jd ? (cd = navigator.userAgent, hd = (id = /chrome\/([\d\.]+)/i.exec(cd)) && 'chrome' || (id = /version\/([\d\.]+) safari/i.exec(cd)) && 'safari' || (id = [
    null,
    bd.browser.version
  ], 'webkit'), id = id && id[1])  : hd = jd;
  bd.browser.type = hd || Mc;
  bd.browser.versionX = id ? parseInt(id, 10)  : Mc;
  (function (a) {
    function b(h, f, m, t) {
      h = Math.min(m, Math.max(f, h));
      return void 0 !== t && parseInt(h, 10) != h ? (t = Math.pow(10, t), Math.round(h * t) / t)  : h
    }
    function c(h, f, m, t) {
      var x = n.exec(h);
      h = x ? parseFloat(x[1], 10)  : 0;
      x && x[2] && (h = h / 100 * (m || 1));
      return void 0 !== f ? b(h, f, m, t)  : h
    }
    function d(h, f) {
      return b(h / (f || 1) * 100, 0, 100, 0) + '%'
    }
    function e(h) {
      this.a = this.b = this.g = this.r = 0;
      h && e.parse(h, this)
    }
    var k = {
      aliceblue: '#f0f8ff',
      antiquewhite: '#faebd7',
      aqua: '#00ffff',
      aquamarine: '#7fffd4',
      azure: '#f0ffff',
      beige: '#f5f5dc',
      bisque: '#ffe4c4',
      black: '#000000',
      blanchedalmond: '#ffebcd',
      blue: '#0000ff',
      blueviolet: '#8a2be2',
      brown: '#a52a2a',
      burlywood: '#deb887',
      cadetblue: '#5f9ea0',
      chartreuse: '#7fff00',
      chocolate: '#d2691e',
      coral: '#ff7f50',
      cornflowerblue: '#6495ed',
      cornsilk: '#fff8dc',
      crimson: '#dc143c',
      cyan: '#00ffff',
      darkblue: '#00008b',
      darkcyan: '#008b8b',
      darkgoldenrod: '#b8860b',
      darkgray: '#a9a9a9',
      darkgreen: '#006400',
      darkgrey: '#a9a9a9',
      darkkhaki: '#bdb76b',
      darkmagenta: '#8b008b',
      darkolivegreen: '#556b2f',
      darkorange: '#ff8c00',
      darkorchid: '#9932cc',
      darkred: '#8b0000',
      darksalmon: '#e9967a',
      darkseagreen: '#8fbc8f',
      darkslateblue: '#483d8b',
      darkslategray: '#2f4f4f',
      darkslategrey: '#2f4f4f',
      darkturquoise: '#00ced1',
      darkviolet: '#9400d3',
      deeppink: '#ff1493',
      deepskyblue: '#00bfff',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1e90ff',
      firebrick: '#b22222',
      floralwhite: '#fffaf0',
      forestgreen: '#228b22',
      fuchsia: '#ff00ff',
      gainsboro: '#dcdcdc',
      ghostwhite: '#f8f8ff',
      gold: '#ffd700',
      goldenrod: '#daa520',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#adff2f',
      grey: '#808080',
      honeydew: '#f0fff0',
      hotpink: '#ff69b4',
      indianred: '#cd5c5c',
      indigo: '#4b0082',
      ivory: '#fffff0',
      khaki: '#f0e68c',
      lavender: '#e6e6fa',
      lavenderblush: '#fff0f5',
      lawngreen: '#7cfc00',
      lemonchiffon: '#fffacd',
      lightblue: '#add8e6',
      lightcoral: '#f08080',
      lightcyan: '#e0ffff',
      lightgoldenrodyellow: '#fafad2',
      lightgray: '#d3d3d3',
      lightgreen: '#90ee90',
      lightgrey: '#d3d3d3',
      lightpink: '#ffb6c1',
      lightsalmon: '#ffa07a',
      lightseagreen: '#20b2aa',
      lightskyblue: '#87cefa',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#b0c4de',
      lightyellow: '#ffffe0',
      lime: '#00ff00',
      limegreen: '#32cd32',
      linen: '#faf0e6',
      magenta: '#ff00ff',
      maroon: '#800000',
      mediumaquamarine: '#66cdaa',
      mediumblue: '#0000cd',
      mediumorchid: '#ba55d3',
      mediumpurple: '#9370db',
      mediumseagreen: '#3cb371',
      mediumslateblue: '#7b68ee',
      mediumspringgreen: '#00fa9a',
      mediumturquoise: '#48d1cc',
      mediumvioletred: '#c71585',
      midnightblue: '#191970',
      mintcream: '#f5fffa',
      mistyrose: '#ffe4e1',
      moccasin: '#ffe4b5',
      navajowhite: '#ffdead',
      navy: '#000080',
      oldlace: '#fdf5e6',
      olive: '#808000',
      olivedrab: '#6b8e23',
      orange: '#ffa500',
      orangered: '#ff4500',
      orchid: '#da70d6',
      palegoldenrod: '#eee8aa',
      palegreen: '#98fb98',
      paleturquoise: '#afeeee',
      palevioletred: '#db7093',
      papayawhip: '#ffefd5',
      peachpuff: '#ffdab9',
      peru: '#cd853f',
      pink: '#ffc0cb',
      plum: '#dda0dd',
      powderblue: '#b0e0e6',
      purple: '#800080',
      red: '#ff0000',
      rosybrown: '#bc8f8f',
      royalblue: '#4169e1',
      saddlebrown: '#8b4513',
      salmon: '#fa8072',
      sandybrown: '#f4a460',
      seagreen: '#2e8b57',
      seashell: '#fff5ee',
      sienna: '#a0522d',
      silver: '#c0c0c0',
      skyblue: '#87ceeb',
      slateblue: '#6a5acd',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#fffafa',
      springgreen: '#00ff7f',
      steelblue: '#4682b4',
      tan: '#d2b48c',
      teal: '#008080',
      thistle: '#d8bfd8',
      tomato: '#ff6347',
      turquoise: '#40e0d0',
      violet: '#ee82ee',
      wheat: '#f5deb3',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      yellow: '#ffff00',
      yellowgreen: '#9acd32'
    },
    n = /(-?[\d\.]+)(%)?/i,
    q = /#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})/i,
    r = /rgb\(\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*\)/i,
    p = /rgba\(\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*([\d\.]+)\s*\)/i,
    v = /hsl\(\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*,\s*(-?\d{1,3}%?)\s*\)/i,
    g = /hsla\(\s*(-?\d{1,3})\s*,\s*(-?\d{1,3}%)\s*,\s*(-?\d{1,3}%)\s*,\s*([\d\.]+)\s*\)/i;
    a.color = function (h) {
      return e.parse(h)
    };
    e.parse = function (h, f) {
      f = f || new e;
      q.test(h) ? f.hex(h)  : r.test(h) ? f.rgb(h)  : p.test(h) ? f.rgba(h)  : v.test(h) ? f.hsl(h)  : g.test(h) ? f.hsla(h)  : f.name(h);
      return f
    };
    e.prototype.clone = function () {
      var h = new e;
      h.rgba(this.r, this.g, this.b, this.a);
      return h
    };
    e.prototype.rgb = function (h, f, m) {
      if (void 0 !== h && !1 !== h) {
        if (typeof h === G && void 0 === f) if (m = r.exec(h)) h = m[1],
        f = m[2],
        m = m[3];
         else return this;
        this.rgba(h, f, m, 1);
        return this
      }
      return !1 !== h ? [
        'rgb(',
        this.r,
        ', ',
        this.g,
        ', ',
        this.b,
        ')'
      ].join('')  : {
        r: this.r,
        g: this.g,
        b: this.b
      }
    };
    e.prototype.rgba = function (h, f, m, t) {
      if (void 0 !== h && !1 !== h) {
        if (typeof h === G && void 0 === f) if (t = p.exec(h)) h = t[1],
        f = t[2],
        m = t[3],
        t = t[4];
         else return this;
        this.r = c(h, 0, 255, 0);
        this.g = c(f, 0, 255, 0);
        this.b = c(m, 0, 255, 0);
        this.a = c(t, 0, 1, 5);
        return this
      }
      f = {
        r: this.r,
        g: this.g,
        b: this.b,
        a: this.a
      };
      return !1 !== h ? [
        'rgba(',
        f.r,
        ', ',
        f.g,
        ', ',
        f.b,
        ', ',
        f.a,
        ')'
      ].join('')  : f
    };
    e.prototype.hsl = function (h, f, m) {
      if (void 0 !==
      h && !1 !== h) {
        if (typeof h === G && void 0 === f) if (m = v.exec(h)) h = m[1],
        f = m[2],
        m = m[3];
         else return this;
        this.hsla(h, f, m, 1);
        return this
      }
      f = this.hsla(!1);
      return !1 !== h ? [
        'hsl(',
        f.h,
        ', ',
        d(f.s),
        ', ',
        d(f.l),
        ')'
      ].join('')  : {
        h: f.h,
        s: f.s,
        l: f.l
      }
    };
    e.prototype.hsla = function (h, f, m, t) {
      if (void 0 !== h && !1 !== h) {
        if (typeof h === G && void 0 === f) if (t = g.exec(h)) h = t[1],
        f = t[2],
        m = t[3],
        t = t[4];
         else return this;
        h = (parseFloat(h, 10) % 360 + 360) % 360;
        h /= 360;
        f = c(f, 0, 1);
        m = c(m, 0, 1);
        t = c(t, 0, 1);
        var x = 0.5 >= m ? m * (f + 1)  : m + f - m * f,
        A = 2 * m - x;
        m = function (u) {
          var y = 0 > u ?
          u + 1 : 1 < u ? u - 1 : u;
          return 1 > 6 * y ? A + (x - A) * y * 6 : 1 > 2 * y ? x : 2 > 3 * y ? A + (x - A) * (2 / 3 - u) * 6 : A
        };
        return this.rgba(Math.round(255 * m(h + 1 / 3)), Math.round(255 * m(h)), Math.round(255 * m(h - 1 / 3)), t)
      }
      var z = this.r / 255,
      L = this.g / 255,
      F = this.b / 255;
      t = this.a;
      var U = Math.max(z, L, F);
      f = Math.min(z, L, F);
      m = (U + f) / 2;
      if (U == f) var J = f = 0;
       else {
        var ia = U - f;
        f = 0.5 < m ? ia / (2 - U - f)  : ia / (U + f);
        U == z ? J = (L - F) / ia + (L < F ? 6 : 0)  : U == L ? J = 2 + (F - z) / ia : U == F && (J = 4 + (z - L) / ia);
        J /= 6
      }
      J = b(360 * J, 0, 360, 0);
      f = b(f, 0, 1, 5);
      m = b(m, 0, 1, 5);
      return !1 !== h ? [
        'hsla(',
        J,
        ', ',
        d(f),
        ', ',
        d(m),
        ', ',
        t,
        ')'
      ].join('')  :
      {
        h: J,
        s: f,
        l: m,
        a: t
      }
    };
    e.prototype.hex = function (h) {
      if (void 0 !== h && !1 !== h) return (h = q.exec(h)) ? this.rgb(parseInt(1 == h[1].length ? h[1] + h[1] : h[1], 16), parseInt(1 == h[2].length ? h[2] + h[2] : h[2], 16), parseInt(1 == h[3].length ? h[3] + h[3] : h[3], 16))  : this;
      if (0 == this.a) return Kc;
      var f = ('0' + this.r.toString(16)).slice( - 2),
      m = ('0' + this.g.toString(16)).slice( - 2),
      t = ('0' + this.b.toString(16)).slice( - 2);
      return !1 !== h ? '#' + f + m + t : {
        r: f,
        g: m,
        b: t
      }
    };
    e.prototype.name = function (h) {
      if (void 0 !== h) return h.toLowerCase() == Kc ? this.rgba(0, 0, 0, 0)  :
      this.hex(k[h.toLowerCase()]);
      if (!(this.r || this.g || this.b || this.a)) return Kc;
      h = this.hex();
      for (var f in k) if (k[f] == h) return f
    };
    e.prototype.hue = function (h) {
      if (void 0 !== h) {
        var f = this.hsla(!1);
        return this.hsla(h, f.s, f.l, f.a)
      }
      return this.hsla(!1).h
    };
    e.prototype.saturation = function (h) {
      if (void 0 !== h) {
        var f = this.hsla(!1);
        return this.hsla(f.h, h, f.l, f.a)
      }
      return this.hsla(!1).s
    };
    e.prototype.lightness = function (h) {
      if (void 0 !== h) {
        var f = this.hsla(!1);
        return this.hsla(f.h, f.s, h, f.a)
      }
      return this.hsla(!1).l
    };
    e.prototype.alpha = function (h) {
      return void 0 !== h ? (this.a = c(h, 0, 1), this)  : this.a
    };
    e.prototype.saturate = function (h) {
      var f = this.hsla(!1);
      f.s += c(h, 0, 1);
      return this.hsla(f.h, f.s, f.l, f.a)
    };
    e.prototype.desaturate = function (h) {
      var f = this.hsla(!1);
      f.s -= c(h, 0, 1);
      return this.hsla(f.h, f.s, f.l, f.a)
    };
    e.prototype.lighten = function (h) {
      var f = this.hsla(!1);
      f.l += c(h, 0, 1);
      return this.hsla(f.h, f.s, f.l, f.a)
    };
    e.prototype.darken = function (h) {
      var f = this.hsla(!1);
      f.l -= c(h, 0, 1);
      return this.hsla(f.h, f.s, f.l, f.a)
    };
    e.prototype.shift = function (h) {
      var f = this.hsla(!1),
      m = (h = n.exec(h)) ? parseFloat(h[1])  : 0;
      h && h[2] && (m = m / 100 * 360);
      f.h += m;
      return this.hsla(f.h, f.s, f.l, f.a)
    }
  }) (jQuery);
  (function (a) {
    function b(u, y) {
      r || (p = u, p.shift = p.maxHeight && !(!p.align || p.align == Jc), r = [
      ], U.bind(zc, d).bind('resize', c), z = 0 < p.fps ? Math.floor(1000 / p.fps)  : 0, p.wrap && (g = y, p.wrapContainer ? (u = a(p.wrapContainer), v = a(Ga), v.attr('id', 'dx'), v.css({
        position: Pa,
        top: 0,
        left: 0,
        width: u.width()
      }).prependTo(u), 'static' == u.css(nc) && u.css(nc, uc))  : (v = a(Ga), v.attr('id', 'dx'), v.css({
        position: Eb,
        top: 0,
        width: g.width(),
        left: g.offset().left,
        'z-index': (parseInt(g.css('z-index'), 10) || 0) + 1
      }).prependTo(B))))
    }
    function c(u) {
      if (v && g) {
        var y = p.wrapContainer ? a(p.wrapContainer)  : void 0;
        if (y) {
          if (v.css({
            position: Pa,
            top: 0,
            left: 0,
            width: y.width()
          }), y.css('overflow') == Pb) {
            var w = y.width(),
            D = y.height();
            A = {
              top: 0,
              right: w,
              bottom: D,
              left: 0,
              width: w,
              height: D
            }
          }
        } else v.css({
          position: Eb,
          top: 0,
          width: g.width(),
          left: g.offset().left
        }),
        A = void 0;
        w = n();
        f = g.offset().top;
        y ? t = 0 : p.align == Wa ? f += w.height : t = 'middle' == p.align || p.align == Ya ? Math.max(0, Math.floor(w.height / 2 - p.maxHeight / 2) || 0)  : isNaN(parseInt(p.align), 10) ? 0 : parseInt(p.align, 10)
      } else f = 0,
      A = void 0;
      d(u)
    }
    function d() {
      if (z && (new Date).getTime() - L < z) null === F && (F = setTimeout(d, z));
       else {
        var u = n();
        u.top += f;
        var y = - 1;
        A && (u = {
          top: u.top,
          bottom: A.height + u.top,
          left: u.left,
          right: A.width + u.left,
          width: A.width,
          height: A.height
        });
        for (var w = 0, D; D = r[w]; w++) 0 > y && D.bounds.top <= u.top && D.bounds.bottom >= u.top && (y = w),
        D.update(u);
        p.wrap && (0 <= y && (D = r[y], u = u.top - D.bounds.top, D.bounds.height - D.ca > D.bounds.height - u ? m = D.eb.top - D.ca + u : D.ca && (m = D.eb.top)), v.css(Jc, t - m));
        if (y != x && (x = y, a.isFunction(p.onChange))) p.onChange(r[x], x);
        z && (L = (new Date).getTime(), null !== F && (clearTimeout(F), F = null))
      }
    }
    function e(u) {
      this.T(u)
    }
    function k(u, y, w) {
      this.T(u, y, w)
    }
    function n(u) {
      var y = u || U;
      u = u ? y.position()  : {
        top: y.scrollTop(),
        left: y.scrollLeft()
      };
      u.width = y.width();
      u.height = y.height();
      u.right = u.left + u.width;
      u.bottom = u.top + u.height;
      return u
    }
    function q() {
    }
    var r,
    p,
    v,
    g,
    h,
    f,
    m = 0,
    t = 0,
    x = - 1,
    A,
    z = 0,
    L = 0,
    F = null;
    a.fn.dx = function (u) {
      if (!this.length) return this;
      b(a.extend({
      }, a.fn.dx.defaults, u), this.first().parent());
      this.each(function () {
        var y = a(this);
        y.attr('data-dx-init') || (y.attr('data-dx-init', !0), r.push(new e(y)))
      });
      c();
      return this
    };
    a.fn.dx.defaults = {
      fps: 0,
      wrap: !0,
      align: 'middle',
      wrapContainer: '',
      wrapItem: 'dx-scene',
      maxHeight: 540,
      Nb: 0,
      hg: !1
    };
    a.fn.dx.fx = {
    };
    var U = a(window);
    e.prototype.T = function (u) {
      h && h.remove();
      this.element = u;
      this.bounds = this.eb = n(u);
      this.ne = !0;
      this.actions = this.Vb();
      this.element.css({
        position: uc,
        overflow: Pb
      });
      if (p.wrap) {
        var y = this.bounds.top - g.offset().top;
        this.vc = a(Ga).css({
          visibility: Pb,
          height: u.outerHeight(!0),
          width: u.outerWidth(!0)
        });
        this.element.attr(hb) && this.vc.attr(hb, this.element.attr(hb));
        this.vc.insertBefore(this.element);
        p.hg && (h = this.vc.clone(), g.append(h));
        this.ca = Math.max(0, p.maxHeight ? this.bounds.height - p.maxHeight : 0);
        (u = p.Nb ? r.length ? r[r.length - 1].Va : null : v.children().last().eq(0)) && (y = (parseInt(u.css(Jc), 10) || 0) + u.height());
        this.ud = a(Ga).css({
          position: Pa,
          height: this.ca ? p.maxHeight : this.bounds.height,
          overflow: Pb,
          width: this.bounds.width,
          top: y,
          left: this.element.css(dc)
        }).addClass(p.wrapItem).append(this.element).appendTo(v);
        this.eb = n(this.ud)
      }
      this.Va = this.ud || this.element;
      this.Va.data('dx-scene', this)
    };
    e.prototype.visible = function (u) {
      var y = this.eb,
      w = m,
      D = w + u.height;
      u = A ? y.top < D + t && y.right > u.left && y.bottom > w - t && y.left < u.right : y.top <= D + t && y.right >= u.left && y.bottom >= w - t && y.left <= u.right;
      u != this.ne && (p.wrap ? this.Va.css(xb, u ? 'block' : 'none')  : this.Va.css('visibility', u ? 'visible' : Pb), this.ne = u);
      p.Nb && (u && this.tc ? (v.prepend(this.Va), this.tc = !1)  : u || this.tc || !(y.top - (D + t) > p.Nb || w - t - y.bottom > p.Nb) || (this.tc = !0, this.Va.detach()));
      return u
    };
    e.prototype.update = function (u) {
      if (this.visible(u)) {
        for (var y = u.top - this.bounds.top, w = 0, D; D = this.actions[w]; w++) D.apply(y, u);
        if (this.ca) {
          var I;
          0 > y ? I = 0 : y > this.ca ? I = this.ca : I = y;
          this.element.css(Jc, - I)
        }
      }
    };
    e.prototype.Vb = function () {
      var u = this;
      return this.element.find('*').filter(function () {
        var y = a(this);
        return a.hasData(this) && a(y).data('dx-prop') || y.attr('data-dx-prop')
      }).map(function () {
        return k.from(a(this), u)
      })
    };
    k.prototype.T = function (u, y, w) {
      this.Ka = w;
      this.element = u;
      this.options = {
        prop: y.prop,
        start: void 0 !== y.start ? y.start :
        y.delay,
        stop: void 0 !== y.stop ? y.stop : y.duration ? (y.start || y.delay || 0) + y.duration : void 0,
        from: y.from,
        to: y.to,
        during: y.during,
        ratio: void 0 !== y.ratio ? y.ratio : 1,
        baseline: void 0 !== y.baseline ? y.baseline : Jc,
        bounds: y.bounds
      };
      this.fx = (this.td = a.isFunction(this.options.prop)) ? this.options.prop : a.fn.dx.fx[this.options.prop] || new q
    };
    k.from = function (u, y) {
      function w(C, Z) {
        C = C.data('dx-' + Z);
        return void 0 === C && [
        ] || a.isArray(C) && C || typeof C === G && C.split(',') || [
          C
        ]
      }
      var D = w(u, 'prop'),
      I = {
      };
      a.each(['duration',
      'delay',
      Dc,
      'stop',
      'from',
      'to',
      'during',
      'ratio',
      'baseline',
      'pin'], function (C, Z) {
        C = w(u, Z);
        for (var V = D.length; C.length < V; ) C.push(C[C.length - 1]);
        I[Z] = C
      });
      return a.map(D, function (C, Z) {
        C = {
          prop: D[Z]
        };
        for (var V in I) C[V] = I[V][Z];
        C.bounds = y.bounds;
        return new k(u, C, y)
      })
    };
    k.prototype.apply = function (u, y) {
      this.td ? this.fx(u, y, this)  : this.fx && this.fx.apply(this, u, y)
    };
    q.ze = {
      display: !0,
      position: !0,
      visibility: !0
    };
    q.prototype.apply = function (u, y, w) {
      u.options.step || (this.init(u), u.options.step = this.Td(u));
      u.options.step(y, w)
    };
    q.prototype.init = H();
    q.prototype.Td = function (u) {
      function y(O) {
        I.css(V, Z, I.shift(O * C.ratio, wd, C.from, C.to))
      }
      function w(O) {
        O = u.Ka.ca ? u.Ka.ca : O.height;
        return C.baseline == Wa ? u.Ka.ca ? u.Ka.eb.top + O : O : void 0 !== C.stop ? C.stop : O
      }
      function D(O) {
        return C.baseline == Wa ? u.Ka.ca ? C.start - u.Ka.eb.top : C.start - O.height : C.start || 0
      }
      var I = this,
      C = u.options,
      Z = C.prop,
      V = u.element,
      wd = I.css(V, Z);
      'static' == V.css(nc) && V.css(nc, uc);
      return void 0 !== C.during ? function (O, ra) {
        I.css(V, Z, D(ra) <= O && w(ra) >= O ? C.during : wd)
      }
       : void 0 !== C.from || void 0 !== C.to ? (C.from = I.Ec(V, u), C.to = I.Fc(V, u), C.start = void 0 !== C.start ? C.start : 0, function (O, ra) {
        O = (O - D(ra)) / (w(ra) - D(ra));
        O = Math.min(1, Math.max(0, O));
        I.css(V, Z, I.percent(O, wd, C.from, C.to))
      })  : void 0 !== C.start || void 0 !== C.end ? function (O, ra) {
        void 0 !== C.start && D(ra) > O ? O = C.start : void 0 !== C.stop && w(ra) < O && (O = C.stop);
        y(O, ra)
      }
       : y
    };
    q.prototype.percent = function (u, y, w, D) {
      return w + u * (D - w)
    };
    q.prototype.shift = function (u, y) {
      return parseFloat(y, 10) + parseFloat(u, 10)
    };
    q.prototype.css = function (u, y, w) {
      if (void 0 !== w) return u.css(y, w);
      if (y in q.ze) return u.css(y);
      u = parseInt(u.css(y), 10);
      return isNaN(u) ? 0 : u
    };
    q.prototype.Ec = function (u, y) {
      return this.Vb(u, y, y.options.from)
    };
    q.prototype.Fc = function (u, y) {
      return this.Vb(u, y, y.options.to)
    };
    q.prototype.Vb = function (u, y, w) {
      var D = y.options;
      w = void 0 !== w ? w : this.css(u, D.prop);
      if (/top|bottom|left|right/i.test(D.prop)) {
        y = /top|bottom/i.test(D.prop) ? y.options.bounds.height : y.options.bounds.width;
        u = /top|bottom/i.test(D.prop) ? u.outerHeight()  : u.outerWidth();
        w = /middle|center/i.test(w) ? '50%' : w;
        if (/\d+%/.test(w)) return y = Math.round(y * parseInt(w, 10) / 100),
        y - u;
        if (/top|bottom|left|right/i.test(w)) return w == D.prop ? 0 : y - u
      }
      return parseFloat(w, 10) || 0
    };
    var J = a.inherit(q);
    J.prototype.init = function (u) {
      'inline' == u.element.css(xb) && u.element.css(xb, 'inline-block')
    };
    J.prototype.css = function (u, y, w) {
      if (void 0 !== w) u.transform(y, w);
       else return parseFloat(u.transform(y), 10) || 0
    };
    var ia = new J;
    a.each('translateX translateY translateZ scaleX scaleY scaleZ rotate rotateX rotateY rotateZ skewX skewY skewZ'.split(' '), function (u, y) {
      a.fn.dx.fx[y] = ia
    });
    J = a.inherit(J);
    J.prototype.css = function (u, y, w) {
      return void 0 === w ? (u = parseFloat(this.base(u, 'scale', w), 10), isNaN(u) ? 1 : u)  : this.base(u, 'scale', w)
    };
    J.prototype.shift = function (u, y) {
      return y * Math.pow(1.01, u)
    };
    a.fn.dx.fx.zoom = a.fn.dx.fx.scale = new J;
    J = a.inherit(q);
    J.prototype.init = function (u) {
      1 == u.options.ratio && (u.options.ratio = 0.01)
    };
    J.prototype.percent = function (u, y, w, D) {
      y = w.r + u * (D.r - w.r);
      var I = w.g + u * (D.g - w.b),
      C = w.b + u * (D.b - w.b);
      u = w.a + u * (D.a - w.a);
      return a.color().rgba(y, I, C, u)
    };
    J.prototype.shift = function (u, y) {
      return y.shift(u)
    };
    J.prototype.css = function (u, y, w) {
      return void 0 !== w ? (u.css(y, w.rgba()), w)  : a.color(u.css(y))
    };
    J.prototype.Ec = function (u, y) {
      return y.options.from == Kc ? this.Fc(u, y).alpha(0)  : void 0 !== y.options.from ? a.color(y.options.from)  : this.css(u, y.options.prop)
    };
    J.prototype.Fc = function (u, y) {
      return y.options.to == Kc ? this.Ec(u, y).alpha(0)  : void 0 !== y.options.to ? a.color(y.options.to)  : this.css(u, y.options.prop)
    };
    a.fn.dx.fx.color = a.fn.dx.fx[Ta] = a.fn.dx.fx['border-color'] = new J;
    J = a.inherit(q);
    J.prototype.Td = function (u) {
      var y = u.element;
      u.element.css(nc);
      u.element.css(Jc);
      var w = u.element.position(),
      D = u.options.start || 0,
      I = void 0 !== u.options.stop ? u.options.stop : Infinity;
      I == Wa && (I = u.Ka.bounds.height - u.element.height());
      var C = w.top + parseInt(y.css('margin-top'), 10),
      Z = I - D;
      y.css({
        position: Pa,
        top: C
      });
      return function (V) {
        V < D ? y.css(Jc, C)  : V > Z ? y.css(Jc, Z - D + C)  : y.css(Jc, V - D + C)
      }
    };
    a.fn.dx.fx.fixed = new J
  }) (jQuery);
  (function (a) {
    var b = /<img\b([^>]*(?:.*?))\/?>/gi,
    c = /([^\s=]+)\s*=\s*((?:')[^<']*(?:')|(?:")[^<"]*(?:"))/g;
    a.findImages = function (d) {
      d = d || '';
      for (var e = [
      ], k; k = b.exec(d); ) {
        k = k[1];
        for (var n, q, r = !0; n = c.exec(k); ) if ('' !== n[1] && '' !== n[2]) {
          var p = n[1].toLowerCase();
          n = n[2].replace(/^('|")(.*)(\1)$/, '$2');
          p == E ? q = n : (p == Uc || p == Nb) && 1 >= parseInt(n, 10) && (r = !1)
        }
        q && r && e.push(q)
      }
      return e
    }
  }) (jQuery);
  (function (a) {
    var b = /url\((['"]?)(.*?)\1\)/;
    a.fn.fullyLoaded = function (c) {
      if (!a.isFunction(c)) return this;
      var d = [
      ];
      this.each(function () {
        a(this).find('*').each(function () {
          var k = a(this);
          if (k.is(Vb) && !this.complete) {
            var n = k.attr(E);
            n && - 1 == n.indexOf('data:') && d.push(k.attr(E))
          } else (k = k.css('background-image')) && (k = b.exec(k)) && k[2] && - 1 == k[2].indexOf('data:') && d.push(k[2])
        })
      });
      if (d.length) {
        var e = [
        ];
        a.each(d, function (k, n) {
          e.push(a.Deferred(function (q) {
            var r = new Image;
            a(r).bind('load error', function () {
              q.resolve()
            });
            r.src = n
          }))
        });
        a.when.apply(a, e).then(c)
      } else c();
      return this
    }
  }) (jQuery);
  (function (a) {
    function b() {
      for (var d = 0; d < c.length; d++) c[d]();
      c.length = 0
    }
    var c = [
    ];
    a.zc = function (d) {
      var e = window.___gcfg;
      e && e.lang || (window.___gcfg = window.___gcfg || {
      }, window.___gcfg.lang = M().settings.blog_locale || 'en');
      (e = window.gapi) && e.plus && e.plusone && e.person && e.page && e.community ? d()  : (0 == c.length && (window.___gcfg.parsetags = 'explicit', a.getScript(M().settings.plusone_api_src, b)), c.push(d))
    }
  }) (jQuery);
  Date.prototype.fromISOString || (Date.prototype.fromISOString = function (a) {
    var b = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{2,3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(a);
    if (!b) return Date.parse && this.setTime(Date.parse(a)),
    isNaN(this.getTime()) ? void 0 : this;
    b[1] = parseInt(b[1], 10) || 0;
    b[4] = parseInt(b[4], 10) || 0;
    b[5] = parseInt(b[5], 10) || 0;
    b[6] = parseInt(b[6], 10) || 0;
    b[7] = parseInt(b[7], 10) || 0;
    b[10] = parseInt(b[10], 10) || 0;
    b[11] = parseInt(b[11], 10) || 0;
    b[2] = (parseInt(b[2], 10) || 1) - 1;
    b[3] = parseInt(b[3], 10) || 1;
    a = 0;
    'Z' !== b[8] && b[9] && (a = 60 * b[10] + b[11], '+' == b[9] && (a = 0 - a));
    this.setTime(Date.UTC(b[1], b[2], b[3], b[4], b[5] + a, b[6], b[7]));
    return this
  });
  Date.prototype.toISOString || (Date.prototype.toISOString = function () {
    function a(b) {
      return 10 > b ? '0' + b : b
    }
    return [this.getUTCFullYear(),
    '-',
    a(this.getUTCMonth() + 1),
    '-',
    a(this.getUTCDate()),
    'T',
    a(this.getUTCHours()),
    ':',
    a(this.getUTCMinutes()),
    ':',
    a(this.getUTCSeconds()),
    'Z'].join('')
  });
  (function (a) {
    function b() {
      var q = d();
      n = a.grep(n, function (r) {
        var p = a(r),
        v = p.data('lazyload') || a.fn.lazyload.defaults;
        return c(p, {
          viewport: q,
          buffer: v.buffer
        }) ? (v.effect || a[v.effect] ? a('<img/>').one('load', function () {
          p.hide().attr(E, p.attr(lb));
          p.removeAttr(lb).removeData().removeClass(pb);
          p[v.effect](v.duration)
        }).attr(E, p.attr(lb))  : (p.attr(E, p.attr(lb)), p.removeAttr(lb).removeData().removeClass(pb)), !1)  : !0
      })
    }
    function c(q, r) {
      var p = r && r.viewport || d(),
      v = e(q);
      if (r = r && r.buffer || 0) v.top -= r,
      v.right += r,
      v.bottom +=
      r,
      v.left -= r;
      return v.top <= p.bottom && v.right >= p.left && v.bottom >= p.top && v.left <= p.right && !q.parents().andSelf().filter(function () {
        return 'none' == a(this).css(xb) || '0' == a(this).css('opacity')
      }).length
    }
    function d() {
      var q = a(window);
      return {
        top: q.scrollTop(),
        right: q.scrollLeft() + q.width(),
        bottom: q.scrollTop() + q.height(),
        left: q.scrollLeft()
      }
    }
    function e(q) {
      var r = q.offset();
      return {
        top: r.top,
        right: r.left + q.width(),
        bottom: r.top + q.height(),
        left: r.left
      }
    }
    var k,
    n = [
    ];
    a.fn.lazyload = function (q) {
      var r = void 0 !== q,
      p = a.extend(a.fn.lazyload.defaults, q),
      v = p.delay || 0;
      a(window).bind(zc, function () {
        clearTimeout(k);
        k = setTimeout(b, v)
      });
      var g = d();
      return this.each(function () {
        a(this).find(Vb).each(function () {
          var h = a(this);
          if (h.attr(lb) || !this.complete) c(h, {
            viewport: g,
            buffer: p.buffer
          }) ? h.attr(lb) && h.attr(E, h.attr(lb)).removeAttr(lb)  : (h.attr(lb) || h.attr(lb, h.attr(E)), p.placeholder ? h.attr(E, p.placeholder)  : h.removeAttr(E), r && h.data('lazyload', p), h.addClass(pb), n.push(this))
        })
      })
    };
    a.fn.lazyload.defaults = {
      buffer: 400,
      delay: 250,
      placeholder: nb,
      effect: 'fadeIn',
      duration: 'slow'
    }
  }) (jQuery);
  (function (a) {
    var b;
    a.fn.measure = function (c, d) {
      c || b || (b = a(Ga).css({
        position: Pa,
        visibility: Pb,
        overflow: Pb,
        height: 0,
        width: 0,
        left: '-9999px',
        top: '-9999px'
      }).prependTo(B));
      c = this.clone().appendTo(c || b);
      d = {
        width: c.outerWidth(d),
        height: c.outerHeight(d)
      };
      c.remove();
      return d
    }
  }) (jQuery);
  (function (a) {
    function b(p, v, g) {
      p.is('svg') ? (p[0].setAttribute(Uc, v), p[0].setAttribute(Nb, g), p[0].childNodes[0].setAttribute(Uc, v), p[0].childNodes[0].setAttribute(Nb, g))  : p.css({
        width: v,
        height: g
      })
    }
    function c(p, v) {
      var g = document.createElement(Vb);
      g.onload = function () {
        a(this).css(Db, 'gray');
        v(this)
      };
      g.src = p.src
    }
    function d(p, v) {
      p = document.createElementNS('http://www.w3.org/2000/svg', p);
      if (v) for (var g in v) 0 == g.indexOf('xlink:') ? p.setAttributeNS('http://www.w3.org/1999/xlink', g.substr(6), v[g])  : p.setAttribute(g, v[g]);
      return p
    }
    function e(p, v) {
      function g(t) {
        var x = document.createElement(Vb);
        x.src = t;
        v(x)
      }
      if (n) {
        var h = document.createElement(Xa),
        f = h.getContext('2d');
        if (f) {
          var m = document.createElement(Vb);
          m.crossOrigin = '';
          m.onload = function () {
            try {
              h.width = m.width;
              h.height = m.height;
              f.drawImage(m, 0, 0);
              for (var t = f.getImageData(0, 0, h.width, h.height), x = 0, A = t.data.length; x < A; x += 4) t.data[x] = t.data[x + 1] = t.data[x + 2] = 0.2989 * t.data[x] + 0.587 * t.data[x + 1] + 0.114 * t.data[x + 2];
              f.putImageData(t, 0, 0, 0, 0, t.width, t.height);
              g(h.toDataURL());
              r++
            } catch (z) {
              q++,
              4 < q && 0 == r && (n = !1),
              g(p.src)
            }
          };
          m.src = p.src
        } else n = !1,
        g(p.src)
      } else g(p.src)
    }
    a.fn.monochromatic = function () {
      return this.each(function () {
        if (a(this).is(Vb)) {
          var p = a(this);
          if (p.parent().is('.monochromatic-wrapper')) {
            var v = parseInt(p[0].style.width || p.width(), 10),
            g = parseInt(p[0].style.height || p.height(), 10);
            p.parent().css({
              width: v,
              height: g
            });
            b(p.siblings().first(), v, g)
          } else {
            var h = p.addClass('monochromatic-original').wrap('<span class="monochromatic-wrapper"/>').parent();
            h.css({
              position: uc,
              display: 'inline-block',
              width: p.width(),
              height: p.height()
            });
            a.monochrome(this, function (f) {
              p.css('z-index', 1);
              a(f).css({
                position: Pa,
                'z-index': 0,
                left: 0,
                top: 0
              });
              b(a(f), p.width(), p.height());
              f.setAttribute('class', 'monochromatic-friend');
              h.append(f)
            })
          }
        } else a(this).find(Vb).monochromatic()
      })
    };
    a.monochrome = function (p, v) {
      var g = a.browser && a.browser.type;
      if ('msie' == g) c(p, v);
       else if ('chrome' == g || 'mozilla' == g) {
        if (!k) {
          g = d('svg', {
            width: 0,
            height: 0,
            baseProfile: 'full'
          });
          var h = d(Db);
          h.id = 'monochromatic-filter';
          var f = d('feColorMatrix', {
            type: 'matrix',
            values: '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0      0      0      1 0'
          });
          h.appendChild(f);
          g.appendChild(h);
          a(g).css({
            visibility: Pb,
            position: Pa,
            top: - 9999
          }).prependTo(B);
          k = !0
        }
        g = d('svg', {
          width: a(p).width(),
          height: a(p).height()
        });
        p = d('image', {
          x: 0,
          y: 0,
          filter: 'url(#monochromatic-filter)',
          'xlink:href': p.src,
          width: a(p).width(),
          height: a(p).height()
        });
        g.appendChild(p);
        v(g)
      } else e(p, v)
    };
    var k = !1,
    n = !0,
    q = 0,
    r = 0
  }) (jQuery);
  (function (a) {
    function b(c) {
      var d = a(this),
      e = (new Date).getTime(),
      k = d.data('_wiggle') || [
      ];
      k.unshift({
        x: c.clientX,
        y: c.clientY,
        Ag: e
      });
      for (var n = 0, q = 0, r = 0, p = 0, v = 0, g = 0, h; (h = k[n]) && !(2000 < e - h.Ag); n++) {
        q += h.x;
        r += h.y;
        var f = k[n + 1];
        if (f) {
          var m = h.x - f.x;
          h = h.y - f.y;
          (0 > m * p || 0 > h * v) && g++;
          p = m;
          v = h
        }
      }
      n < k.length && (k = k.slice(0, n + 1));
      4 <= g && (k = [
      ], c.type = 'mousewiggle', c.pageX = c.clientX = Math.round(q / n), c.pageY = c.clientY = Math.round(r / n), a.event.Gg.apply(this, arguments));
      d.data('_wiggle', k)
    }
    a.event.special.mousewiggle = {
      setup: function () {
        a(this).bind(gc, b)
      },
      teardown: function () {
        a(this).unbind(gc, b)
      }
    }
  }) (jQuery);
  (function (a) {
    function b() {
      q = Math.max(0, q - 2);
      for (var m = !0, t = 0, x; x = k[t]; t++) m &= x.update(),
      m &= x.ua;
      v = m ? 250 : 35;
      g = window.setTimeout(b, v)
    }
    function c(m, t, x) {
      this.Da = m;
      this.settings = x || {
      };
      this.particles = [
      ];
      this.ua = !1;
      this.offset = {
        left: 0,
        top: 0
      };
      t && this.init(t)
    }
    function d(m, t, x, A, z) {
      this.x = this.jg = m;
      this.y = this.kg = t;
      this.r = this.or = x;
      z = void 0 === z ? 100 : z;
      this.K = z * (Math.random() - 0.5);
      this.I = z * (Math.random() - 0.5);
      this.ee = 3 + 98 * Math.random();
      this.xg = 0.1 + 0.4 * Math.random();
      this.ta = 0;
      this.cb = 1;
      this.ua = !1;
      m = '#' + A;
      this.element = a(Ga);
      t = {
        position: Pa,
        'z-index': '-1'
      };
      h ? (this.element.html('.'), t.color = m, t.cursor = 'default', t.font = '100px Monospace')  : (t['-webkit-border-radius'] = Da, t['-moz-border-radius'] = Da, t['-ms-border-radius'] = Da, t['-khtml-border-radius'] = Da, t['border-radius'] = Da, t[Ta] = m);
      this.element.css(t);
      this.position()
    }
    var e = !1,
    k = [
    ];
    a.fn.particles = function (m, t) {
      if (n[m]) return n[m].apply(this, Array.prototype.slice.call(arguments, 1));
      if (typeof m !== jc && m) a.error('Method ' + m + ' does not exist on jQuery.particles');
       else return n.init.apply(this, arguments)
    };
    var n = {
      init: function (m, t) {
        n.play();
        return this.each(function () {
          m && m.length && k.push(new c(a(this), m, t))
        })
      },
      play: function () {
        e || (a(document).bind(hc, function (m) {
          q = 200;
          r = m.clientX;
          p = m.clientY
        }), e = !0);
        b()
      },
      pause: function () {
        a(document).unbind(hc);
        e = !1;
        g && (window.clearTimeout(g), g = 0)
      },
      toggle: function () {
        n[g ? 'pause' : 'play']()
      }
    },
    q = 200,
    r = - 200,
    p = - 200,
    v = 35,
    g,
    h = a.browser.msie && 9 > parseInt(a.browser.version, 10),
    f = !(a.browser.msie && 9 > parseInt(a.browser.version, 10));
    c.prototype.init = function (m) {
      for (var t = 0, x; x = m[t]; t++) x = new d(x.x, x.y, x.r, x.c || '000000', this.settings.initialVelocity),
      this.particles.push(x),
      this.Da.append(x.element);
      this.offset = a(this.Da).offset();
      'static' == this.Da.css(nc) && this.Da.css(nc, uc)
    };
    c.prototype.dispose = function () {
      for (var m = 0, t; t = this.particles[m]; m++) t.remove();
      this.particles = [
      ]
    };
    c.prototype.update = function () {
      this.ua = !0;
      for (var m = r - this.offset.left, t = p - this.offset.top, x = 0, A; A = this.particles[x]; x++) A.update(m, t),
      this.ua &= A.ua
    };
    d.prototype.update = function (m, t) {
      this.x += this.K;
      this.y += this.I;
      this.K = this.qd(0.92 * (this.K + 0 / this.or));
      this.I = this.qd(0.92 * (this.I + 0 / this.or));
      m -= this.x;
      t -= this.y;
      var x = Math.sqrt(m * m + t * t);
      m /= x;
      t /= x;
      x < q ? (this.K -= m * this.ee, this.I -= t * this.ee, this.ta += 0.4 * (0.005 - this.ta), this.cb = Math.max(0, 0.9 * this.cb - 0.01), this.K *= 1 - this.cb, this.I *= 1 - this.cb)  : (this.ta += 0.005 * (this.xg - this.ta), this.cb = Math.min(1, this.cb + 0.03));
      m = this.jg - this.x;
      t = this.kg - this.y;
      x = Math.sqrt(m * m + t * t);
      this.K += m * this.ta;
      this.I += t * this.ta;
      this.r = this.or + x / 8;
      (this.ua = 0.3 > x && 0.3 > this.K && 0.3 > this.I) || this.position()
    };
    d.prototype.qd = function (m) {
      return Math.min(50, Math.max( - 50, m))
    };
    d.prototype.position = function () {
      if (h) this.element.css({
        left: this.x - 20,
        top: this.y - 60
      });
       else {
        var m = 2 * this.r;
        if (f) {
          var t = [
            'translate(',
            this.x,
            'px,',
            this.y,
            'px)'
          ].join('');
          this.element.css({
            transform: t,
            '-moz-transform': t,
            '-ms-transform': t,
            '-o-transform': t,
            '-webkit-transform': t,
            width: m,
            height: m
          })
        } else this.element.css({
          left: this.x,
          top: this.y,
          width: m,
          height: m
        })
      }
    }
  }) (jQuery);
  (function (a) {
    function b(c, d, e, k) {
      if (a(c.target).parents().andSelf().filter(c.data).length) {
        d = a(c.data);
        e = 0 == d.scrollTop();
        var n = d[0].scrollHeight - d.scrollTop() == d[0].clientHeight,
        q = 0 > k || 32 == c.which || 40 == c.which;
        if ((k = 0 < k || 38 == c.which) && e || q && n) if (e = d.data('callback'), n = !1, a.isFunction(e) && (n = e(d, k ? 1 : - 1)), !n || void 0 === n) return c.preventDefault(),
        !1
      }
    }
    a.fn.scrollLimit = function (c) {
      var d = a.extend({
        keydown: !0,
        mousewheel: !0,
        callback: void 0
      }, c);
      return this.each(function () {
        d.keydown && a(this).bind('keydown', this, b);
        d.mousewheel && a(this).bind('mousewheel', this, b);
        d.callback && a(this).data('callback', d.callback)
      })
    }
  }) (jQuery);
  (function (a) {
    function b(e) {
      function k(g) {
        g.contents().each(function () {
          if (1 == this.nodeType) {
            var h = a(this),
            f = p.test(this.nodeName);
            if (f || '' != a.trim(h.text())) {
              k(h);
              var m = h.css('text-align'),
              t = h.css(Gc),
              x = h.css('font-style'),
              A = h.css('font-weight'),
              z;
              if (r.test(this.nodeName)) {
                var L = a('<p/>').html(this.innerHTML);
                h.replaceWith(L);
                h = L;
                'CENTER' == this.nodeName ? m = Ya : 'PRE' == this.nodeName && (z = 'pre')
              }
              h.removeAttr('style');
              f || (m && m != dc && h.css('text-align', m), x && h.css('font-style', x), A && h.css('font-weight', A), t && h.css(Gc, t), z && h.css('white-space', z))
            } else h.remove()
          } else 3 != this.nodeType && a(this).remove()
        })
      }
      function n(g, h) {
        h = h || 0;
        for (var f = g[0].childNodes, m = 0, t; t = f[m]; m++) if (1 == t.nodeType) {
          if (h && v.test(t.nodeName)) {
            h = document.createDocumentFragment();
            t = m;
            for (var x; x = f[t]; t++) h.appendChild(x.cloneNode(!0));
            a(h).insertAfter(g);
            for (t = f.length - 1; t >= m; t--) g[0].removeChild(f[t]);
            return !0
          }
          if (n(a(t), h + 1)) return !0
        }
        return !1
      }
      function q(g) {
        for (var h = g[0].childNodes, f = - 1, m = - 1, t = 0, x; x = h[t]; t++) if (0 > f) {
          if (3 == x.nodeType || 1 == x.nodeType && !v.test(x.nodeName)) f = t
        } else if (0 > m) 1 == x.nodeType && v.test(x.nodeName) && (m = t - 1);
         else break;
        if (0 <= f) {
          0 > m && (m = h.length - 1);
          x = document.createDocumentFragment();
          var A = !1;
          for (t = f; t <= m; t++) A = A || '' !== a.trim(h[t].nodeValue),
          x.appendChild(h[t].cloneNode(!0));
          for (; m >= f; m--) g[0].removeChild(h[m]);
          0 < f ? (a('<p/>').append(x).insertAfter(h[f - 1]), A && 'BR' == h[f - 1].nodeName && g[0].removeChild(h[f - 1]))  : a('<p/>').append(x).prependTo(g);
          return !0
        }
        return !1
      }
      var r = /^(article|aside|blockquote|center|div|footer|header|section|pre)$/i,
      p = /^(br)$/i,
      v = /^(br|div|h1|h2|h3|h4|h5|h6|p|ol|ul)$/i;
      e = a(Ga).append(a('<p/>').html(e));
      for (k(e); n(e); );
      for (; q(e); );
      e.children().filter(function () {
        return !p.test(this.nodeName) && '' == a.trim(a(this).text())
      }).remove();
      return e.html()
    }
    function c(e) {
      function k(q, r, p) {
        q = q || '';
        var v = r ? 0 : q.search(n);
        if (v == q.length - 1) return {
          prefix: q,
          Wa: '',
          P: ''
        };
        for (var g = [
        ], h = v, f = v, m = q.length - 1; f <= m; f++) {
          var t = q[f],
          x = p && f == m;
          if (x = x || n.test(t) && (' ' == q[f + 1] || f == m)) f != m && f++,
          g.push('<span class="'),
          g.push(r && 0 == h ? 'text-paragraph text-run' :
          Hc),
          g.push('">'),
          g.push(q.substring(h, f + 1)),
          g.push('</span>'),
          h = f + 1
        }
        return {
          prefix: 0 < v ? q.substring(0, v)  : '',
          Wa: g.join(''),
          P: q.substring(h)
        }
      }
      e = a(Ga).html(e);
      e.find('p').each(function () {
        var q = a(this),
        r = a('<span class="text-paragraph text-run"/>');
        r.append(q.contents()).attr('style', q.attr('style'));
        q.replaceWith(r)
      });
      a(Ha).replaceAll(e.find('br'));
      e.html(e.html().replace(/(\r\n|\n|\r)/gm, Ha));
      e.find(xa).each(function () {
        for (; a(this).contents().first().is('.text-break'); ) a(this).contents().first().insertBefore(a(this));
        for (; a(this).contents().last().is('.text-break'); ) a(this).contents().last().insertAfter(a(this))
      });
      var n = /[\.!?]/;
      e.find(xa).each(function () {
        var q = a(this),
        r = this.childNodes;
        1 == r.length && /^span$/i.test(r[0].nodeName) && (a(r[0]).attr('style'), r = r[0].childNodes);
        if (r.length) {
          if (3 == r[0].nodeType) {
            var p = k(r[0].nodeValue, !0, 1 == r.length);
            1 < r.length ? p.Wa.length && (a(p.Wa).insertBefore(q), q.removeClass('text-paragraph').addClass(Hc), r[0].nodeValue = p.P)  : q.replaceWith(p.Wa)
          }
          1 < r.length && 3 == r[r.length - 1].nodeType && (p = k(r[r.length - 1].nodeValue, !1, !0), p.Wa.length && (a(p.Wa).insertAfter(q), r[r.length - 1].nodeValue = p.prefix))
        } else q.addClass(Hc)
      });
      return e.html()
    }
    var d = [
      /<applet[^>]*?>(?:.|\n|\r)*?<\/applet>/gi,
      /<embed[^>]*?>(?:.|\n|\r)*?<\/embed>/gi,
      /<head[^>]*?>(?:.|\n|\r)*?<\/head>/gi,
      /<iframe[^>]*?>(?:.|\n|\r)*?<\/iframe>/gi,
      /<img[^>]*?.*?\/?>/gi,
      /<noembed[^>]*?>(?:.|\n|\r)*?<\/noembed>/gi,
      /<noframes[^>]*?>(?:.|\n|\r)*?<\/noframes>/gi,
      /<noscript[^>]*?>(?:.|\n|\r)*?<\/noscript>/gi,
      /<object[^>]*?>(?:.|\n|\r)*?<\/object>/gi,
      /<script[^>]*?>(?:.|\n|\r)*?<\/script>/gi,
      /<style[^>]*?>(?:.|\n|\r)*?<\/style>/gi,
      /<table[^>]*?>(?:.|\n|\r)*?<\/table>/gi
    ];
    a.simpleHtml = function (e, k) {
      var n = e || '';
      for (var q = 0; e = d[q]; q++) n = n.replace(e, '');
      e = n;
      e = b(e);
      n = /^((?:[\s\n\r]|(?:<br\/?>))+)/i;
      q = /((?:[\s\n\r]|(?:<br\/?>))+)$/i;
      e = (e || '').replace(/((?:[\s\n\r]*<br\/?>[\s\n\r]*){2,})/gim, '<br/>');
      e = e.replace(n, '');
      e = e.replace(q, '');
      e = a(Ga).html(e);
      var r = e.children().first(),
      p = e.children().last();
      r.length && r.html(r.html().replace(n, ''));
      p.length && p.html(p.html().replace(q, ''));
      e = a.trim(e.html());
      k && (e = c(e));
      return e
    }
  }) (jQuery);
  (function (a) {
    function b(f, m, t) {
      for (var x = m.list(), A = 0, z; z = x[A]; A++) {
        var L = z.attr('node');
        if (L) if (g) {
          var F = [
            'translate3d(',
            z.x,
            'px,',
            z.y,
            'px, 0)'
          ].join('');
          z = 0 != z.a ? ' rotateZ(' + z.a + tc : '';
          F += z;
          L.css({
            transform: F,
            '-webkit-transform': F
          })
        } else v ? (F = [
          'translate(',
          z.x,
          'px,',
          z.y,
          'px)'
        ].join(''), z = 0 != z.a ? ' rotate(' + z.a + tc : '', F += z, L.css({
          transform: F,
          '-moz-transform': F,
          '-ms-transform': F,
          '-o-transform': F
        }))  : L.css({
          left: z.x,
          top: z.y
        })
      }
      f && f.data && f.data.ha && f.data.ha(m, t)
    }
    function c(f, m, t, x) {
      this.ma = {
      };
      this.pb = [
      ];
      this.fa = f;
      this.h = m;
      this.od = void 0 !== t ? t : !0;
      this.Gf = 0;
      this.dc = new d(this, x || 30);
      this.xd = [
        new q(this),
        new r(this)
      ]
    }
    function d(f, m) {
      this.df = f;
      this.Bf = m || 30;
      this.Bd = Math.floor(1000 / this.Bf);
      this.Ya = a.proxy(this.yg, this);
      this.ib = !1
    }
    function e() {
      this.h = this.fa = this.a = this.y = this.x = this.Aa = this.G = this.V = 0;
      this.D = new n;
      this.attributes = {
      };
      this.B = {
      }
    }
    function k(f, m) {
      this.x = f;
      this.y = m
    }
    function n(f, m) {
      this.Ia = this.angle = this.y = this.x = 0;
      this.Hb(f, m)
    }
    function q(f) {
      this.canvas = f;
      this.active = !0
    }
    function r(f) {
      this.canvas = f;
      this.active = !0
    }
    var p = 0,
    v = !(a.browser.msie && 9 > parseInt(a.browser.version, 10)),
    g = 'webkit' in a.browser;
    a.fn.U = function (f) {
      if (h[f]) return h[f].apply(this, Array.prototype.slice.call(arguments, 1));
      if (typeof f !== jc && f) a.error('Method ' + f + ' does not exist on jQuery.spritle');
       else return h.init.apply(this, arguments)
    };
    var h = {
      init: function (f) {
        var m = a.extend({
          fps: 30,
          update: void 0
        }, f);
        return this.each(function () {
          var t = a(this),
          x = t.data(Cc);
          x || (x = {
            id: 'spritle_' + p++,
            canvas: new c(t.width(), t.height(), !0, m.fps),
            Da: t,
            Kg: m
          }, t.data(Cc, x), a(window).bind('resize.' + x.id, function () {
            var A = x.Da;
            x.canvas.size(A.width(), A.height())
          }), /absolute|fixed|relative/.test(t.css(nc)) || t.css(nc, uc), a(x.canvas).bind('update', {
            ha: m.update
          }, b), m.collision && a(x.canvas).bind('collision', function (A, z, L) {
            m.collision(x.canvas, z, L)
          }), m.exceeds && a(x.canvas).bind('exceeds', function (A, z) {
            m.exceeds(x.canvas, z)
          }), m.start && a(x.canvas).bind(Dc, function (A, z) {
            m.start(z)
          }), m.stop && a(x.canvas).bind('stop', function (A, z) {
            m.stop(z)
          }))
        })
      },
      destroy: function () {
        return this.each(function () {
          var f = a(this).data(Cc);
          f && (a(f.canvas).unbind(), f.canvas.dispose(), a(window).unbind('.' + f.id), a(this).removeData(Cc))
        })
      },
      add: function (f, m) {
        var t = this.data(Cc);
        if (t) {
          m = m || {
          };
          f = a(f);
          f.appendTo(t.Da);
          var x = f.position(),
          A = new e;
          A.size(m.w || f.width(), m.h || f.height());
          A.position(m.x || x.left, m.y || x.top);
          (m.xV || m.yV) && A.Na(m.xV || 0, m.yV || 0);
          A.attr('node', f);
          f.attr('data-spritle', A.attr('id'));
          t.canvas.add(A);
          f.css({
            position: Pa,
            left: 0,
            top: 0,
            width: A.fa,
            height: A.h
          });
          b(null, t.canvas, 0);
          return A
        }
      },
      remove: function (f) {
        var m = this.data(Cc);
        m && (f = m.canvas.ma[a(f).attr('data-spritle')]) && (f.attr('node').remove(), m.canvas.remove(f));
        return this
      },
      canvas: function () {
        if (this.data(Cc)) return this.data(Cc).canvas
      },
      start: function () {
        return this.each(function () {
          var f = self.data(Cc);
          f && f.canvas.start()
        })
      },
      stop: function () {
        return this.each(function () {
          var f = self.data(Cc);
          f && f.canvas.stop()
        })
      }
    };
    c.prototype.add = function (f) {
      f.attr('id', this.Gf++);
      this.ma[f.attr('id')] = f;
      this.pb = a.map(this.ma, Vc());
      this.od && this.pb.length && this.start();
      return this
    };
    c.prototype.remove = function (f) {
      delete this.ma[f.attr('id')];
      f.dispose();
      this.pb = a.map(this.ma, Vc());
      this.od && !this.pb.length && this.stop();
      return this
    };
    c.prototype.list = Wc('pb');
    c.prototype.extensions = Wc('xd');
    c.prototype.size = function (f, m) {
      this.fa = f;
      this.h = m;
      return this
    };
    c.prototype.dispose = function () {
      this.stop();
      for (var f in this.ma) this.ma[f].dispose()
    };
    c.prototype.update = function (f) {
      for (var m in this.ma) this.ma[m].reset().update(f);
      m = 0;
      for (var t; t = this.xd[m]; m++) t.update(f);
      a(this).triggerHandler('update', [
        this,
        f
      ]);
      return this
    };
    c.prototype.start = function () {
      var f = !this.dc.ib;
      this.dc.start();
      f && a(this).triggerHandler(Dc, [
        this
      ]);
      return this
    };
    c.prototype.stop = function () {
      this.dc.stop();
      a(this).triggerHandler('stop', [
        this
      ]);
      return this
    };
    d.prototype.start = function () {
      if (!this.ib) return this.ib = !0,
      this.Fd = (new Date).getTime(),
      this.kd = setTimeout(this.Ya, this.Bd),
      this
    };
    d.prototype.stop = function () {
      this.ib = !1;
      clearTimeout(this.kd);
      return this
    };
    d.prototype.yg = function () {
      var f = (new Date).getTime(),
      m = f - (this.Fd || 0);
      this.Fd = f;
      this.df.update(m);
      f = (new Date).getTime() - f;
      this.ib && (this.kd = setTimeout(this.Ya, Math.max(this.Bd - f), 8))
    };
    e.prototype.attr = function (f, m) {
      return 'undefined' !== typeof m ? (this.attributes[f] = m, this)  : this.B[f] || this.attributes[f]
    };
    e.prototype.cache = function (f, m) {
      return 'undefined' !== typeof m ? (this.B[f] = m, this)  : this.B[f]
    };
    e.prototype.size = function (f, m) {
      this.fa = f;
      this.h = m;
      this.bb = Math.sqrt(Math.pow(this.fa / 2, 2) + Math.pow(this.h / 2, 2));
      return this
    };
    e.prototype.reset = function () {
      this.B = {
      };
      return this
    };
    e.prototype.dispose = function () {
      this.attributes = {
      };
      this.B = {
      }
    };
    e.prototype.position = function (f, m) {
      if (void 0 === f && void 0 === m) return {
        x: this.V,
        y: this.G
      };
      this.V = f;
      this.G = m;
      f = Math.round(this.V);
      m = Math.round(this.G);
      this.x = f;
      this.y = m;
      return this
    };
    e.prototype.Ca = function () {
      var f = this.cache(Ya);
      void 0 === f && (f = new k(this.x + this.fa / 2, this.y + this.h / 2), this.cache(Ya, f));
      return f
    };
    e.prototype.Na = function (f, m) {
      this.D = n.Cf(f / 1000, m / 1000)
    };
    e.prototype.speed = function (f) {
      if (void 0 === f) return 1000 * this.D.Ia;
      this.D.Qd(f / 1000, this.D.angle);
      return this
    };
    e.prototype.sd = function () {
      var f = this.cache('corners');
      if (f) return f;
      var m = this.fa / 2,
      t = this.h / 2;
      if (0 == this.a) f = this.Ca(),
      f = [
        new n(f.x - m, f.y - t),
        new n(f.x - m, f.y + t),
        new n(f.x + m, f.y + t),
        new n(f.x + m, f.y - t)
      ];
       else {
        f = [
        ];
        var x = Math.sqrt(Math.pow(m, 2) + Math.pow(t, 2)),
        A = Math.atan2(this.h, this.fa);
        A = [
          Math.PI - A,
          A,
          - A,
          Math.PI + A
        ];
        for (var z = 0; 4 > z; z++) f.push(new n(x * Math.cos(this.a + A[z]) + this.x + m, x * Math.sin(this.a + A[z]) + this.y + t))
      }
      this.cache('corners', f);
      return f
    };
    e.prototype.move = function (f, m) {
      this.position(this.V + f, this.G + m);
      return this
    };
    e.prototype.angle = function (f, m) {
      var t = this.Aa - f;
      this.a = this.Aa = f % (2 * Math.PI);
      !0 !== m && this.D.Qd(this.D.Ia, this.D.angle - t);
      return this
    };
    e.prototype.rotate = function (f) {
      return this.angle(this.Aa + f)
    };
    e.prototype.bf = function (f, m) {
      f instanceof k && (m = f.y, f = f.x);
      var t = this.Ca();
      return - (this.Aa - Math.atan2(m - t.y, f - t.x))
    };
    e.prototype.Tb = function (f, m, t, x) {
      f = this.bf(f, m);
      void 0 !== t && (f = (f + t) % (2 * Math.PI));
      void 0 !== x && (f > Math.PI ? f -= 2 * Math.PI : f < - Math.PI && (f = 2 * Math.PI +
      f), f = Math.max(Math.min(f, x), - x), 0.01 > Math.abs(f) && (f = 0));
      this.rotate(f)
    };
    e.prototype.update = function (f) {
      this.move(this.D.x * f, this.D.y * f);
      return this
    };
    n.prototype.Hb = function (f, m) {
      void 0 !== f && void 0 !== m && (this.x = f, this.y = m, this.Ia = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)), this.angle = Math.atan2(this.y, this.x));
      return this
    };
    n.prototype.Qd = function (f, m) {
      void 0 !== f && void 0 !== m && (this.angle = m, this.Ia = f, this.x = Math.cos(this.angle) * this.Ia, this.y = Math.sin(this.angle) * this.Ia)
    };
    n.prototype.clone = function () {
      return new n(this.x, this.y)
    };
    n.prototype.vf = function (f) {
      return this.x * f.x + this.y * f.y
    };
    n.prototype.ae = function (f) {
      return this.Hb(this.x - f.x, this.y - f.y)
    };
    n.prototype.Pd = function () {
      return this.Hb( - this.y, this.x)
    };
    n.prototype.scale = function (f) {
      f /= this.Ia;
      this.Hb(this.x * f, this.y * f);
      return this
    };
    n.prototype.normalize = function () {
      return this.scale(1)
    };
    n.Cf = function (f, m) {
      return new n(f, m)
    };
    q.prototype.update = function () {
      if (this.active) for (var f = this.canvas.list(), m = 0, t; t = f[m]; m++) for (var x = m + 1, A; A = f[x]; x++) {
        var z = this.lf(t, A);
        t.cache(cb, z || t.cache(cb));
        A.cache(cb, z || A.cache(cb));
        z && a(this.canvas).trigger('collision', [
          t,
          A
        ])
      }
    };
    q.prototype.lf = function (f, m) {
      return 0 == f.a && 0 == m.a ? this.Bg(f, m)  : this.cf(f, m) ? !1 !== this.ug(f, m)  : !1
    };
    q.prototype.Bg = function (f, m) {
      return f.y <= m.y + m.h && f.x + f.fa >= m.x && f.y + f.h >= m.y && f.x <= m.x + m.fa
    };
    q.prototype.cf = function (f, m) {
      var t = f.Ca(),
      x = m.Ca();
      f = f.bb + m.bb;
      return Math.pow(x.x - t.x, 2) + Math.pow(x.y - t.y, 2) < f * f
    };
    q.prototype.ug = function (f, m) {
      f = f.sd();
      m = m.sd();
      for (var t = [
      ], x = 0; 4 > x; x++) {
        var A = f[x].clone().ae(f[(x +
        1) % 4]),
        z = m[x].clone().ae(m[(x + 1) % 4]);
        t.push(A.Pd().normalize());
        t.push(z.Pd().normalize())
      }
      for (x = 0; A = t[x]; x++) {
        z = this.Wd(A, f);
        var L = this.Wd(A, m);
        if (z.min > L.max || L.min > z.max) return !1;
        z = Math.min(z.max, L.max) - Math.max(z.min, L.min);
        if (void 0 === F || z < F) {
          var F = z;
          var U = A
        }
      }
      return {
        axis: U,
        Hg: F
      }
    };
    q.prototype.Wd = function (f, m) {
      for (var t, x, A = 0, z; z = m[A]; A++) z = f.vf(z),
      void 0 === t ? t = x = z : z < t ? t = z : z > x && (x = z);
      return {
        min: t,
        max: x
      }
    };
    r.prototype.update = function () {
      if (this.active) for (var f = this.canvas.h, m = this.canvas.fa, t = this.canvas.list(), x = 0, A; A = t[x]; x++) {
        var z = A.Ca();
        z = 0 > z.x + A.bb || z.x - A.bb > m || 0 > z.y + A.bb || z.y - A.bb > f;
        A.cache(zb, z);
        z && a(this.canvas).trigger('exceeds', [
          self
        ])
      }
    }
  }) (jQuery);
  String.prototype.Ff || (String.prototype.Ff = function () {
    for (var a = 0, b = 0; b < this.length; ++b) a = 31 * a + this.charCodeAt(b),
    a %= 4294967296;
    return a
  });
  $.support.html5tags = $.browser.Sf ? 9 <= parseInt($.browser.version, 10)  : $.browser.Rf ? 1.9 <= $.browser.version : !0;
  var kd = $.support,
  ld = document.getElementsByTagName('script') [0],
  md = ld.style.color,
  nd = !1;
  if (md == wc) nd = !0;
   else {
    try {
      ld.style.color = wc
    } catch (a) {
    }
    nd = ld.style.color != md;
    ld.style.color = md
  }
  kd.rgba = nd;
  $.support.touch = 'ontouchstart' in document.documentElement;
  (function (a) {
    function b(p) {
      return new RegExp(0 <= a.inArray(p.toLowerCase(), q) ? k.source.replace('<(\\w+)', '<(' + p + ')')  : e.source.replace('<(\\w+)', '<(' + p + ')'), 'ig')
    }
    function c(p, v, g) {
      v = (v || '').toLowerCase();
      for (var h in p) if (h.toLowerCase() == v) {
        if ('undefined' === typeof g) return !0;
        if (typeof g === G) return p[h] == g;
        if (g instanceof RegExp) return g.test(p[h]);
        if (a.isFunction(g)) return g(p[h])
      }
      return !1
    }
    function d(p) {
      this.full = p;
      this.attributes = {
      };
      p && d.parse(p, this)
    }
    var e = /<(\w+)[^>]*?(?:(?:>((?:.|\n|\r)*?)<\/\1>)|(?:\/>))/gi,
    k = /<(\w+)[^>]*?(?:.*?)\/?>/gi,
    n = /([\w-_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
    q = [
      'area',
      'base',
      yb,
      'br',
      'col',
      'hr',
      Vb,
      'input',
      'link',
      'meta',
      'param',
      'command',
      'keygen',
      'source'
    ],
    r = {
      tag: '',
      attr: '',
      attrTest: void 0,
      replace: void 0,
      recurse: !0
    };
    a.tags = function (p, v) {
      var g = [
      ],
      h = a.extend({
      }, r, v);
      if (!p) return void 0 !== h.replace ? '' : g;
      h.tag = h.tag.toLowerCase();
      v = h.tag ? b(h.tag)  : e.global ? new RegExp(e)  : e;
      p = p.replace(v, function (f) {
        var m = d.parse(f),
        t = !0;
        if (m.value && h.recurse) {
          var x = a.tags(m.value, h);
          h.replace ? m.value = x : x && x.length && a.merge(g, x)
        }
        if (t = (t = t && (!h.tag || h.tag == m.name)) && (!h.attr || c(m.attributes, h.attr, h.attrTest))) if (g.push(m), 'undefined' !== typeof h.replace) return a.isFunction(h.replace) ? h.replace(m)  : h.replace;
        return f
      });
      return 'undefined' !== typeof h.replace ? p : g
    };
    d.parse = function (p, v) {
      var g = v || new d;
      g.full = p;
      (v = b(/<(\w+)/.exec(p) [1]).exec(p)) && v.length && (g.full = p, g.name = v[1].toLowerCase(), g.value = v[2], g.attributes = {
      }, (p = /<\w+([^>]*)?/.exec(p)) && (p[1] || '').replace(n.global ?
      new RegExp(n)  : n, function (h, f, m, t, x) {
        g.attributes[f] = m || t || x || ''
      }));
      return g
    };
    d.prototype.encode = function () {
      var p = [
      ];
      p.push('<' + this.name);
      for (var v in this.attributes) {
        var g = this.attributes[v];
        p.push(' ');
        p.push(v);
        null !== g && (p.push('="'), p.push(void 0 !== g ? (new String(g)).replace(/"/g, '&#034;')  : ''), p.push('"'))
      }
      !this.value && this.full.match(/\/>$/) ? p.push(this.full.match(/\s?\/>$/))  : 0 <= a.inArray(this.name.toLowerCase(), q) && this.full.match(/\/?>/) ? p.push(this.full.match(/\s?\/?>$/))  : (p.push('>'), p.push(this.value), p.push('</' + this.name + '>'));
      return p.join('')
    };
    d.prototype.attr = function (p, v) {
      return 'undefined' !== typeof v ? (this.attributes[p] = v, this)  : this.attributes[p]
    }
  }) (jQuery);
  (function (a) {
    a.throttle = function (b, c) {
      function d() {
        var p = q >= r ? q : q + 1;
        q = new Date - k > 50 * (Math.pow(2, p + 1) - 1) ? Math.max(0, q - 1)  : p;
        n = 50 * (Math.pow(2, q) - 1);
        k = new Date
      }
      var e = null,
      k = new Date,
      n = 0,
      q = 0,
      r = Math.floor(Math.log((c || 30000) / 50) / Math.LN2);
      return function () {
        var p = new Date - k;
        clearTimeout(e);
        if (p >= n) d(),
        b.apply(this, arguments);
         else {
          var v = this,
          g = arguments;
          e = setTimeout(function () {
            d();
            b.apply(v, g)
          }, n - p + 1)
        }
      }
    }
  }) (jQuery);
  (function (a, b) {
    var c = [
      /<head[^>]*?>(?:.|\n|\r)*?<\/head>/gi,
      /<style[^>]*?>(?:.|\n|\r)*?<\/style>/gi,
      /<script[^>]*?>(?:.|\n|\r)*?<\/script>/gi,
      /<object[^>]*?>(?:.|\n|\r)*?<\/object>/gi,
      /<embed[^>]*?>(?:.|\n|\r)*?<\/embed>/gi,
      /<applet[^>]*?>(?:.|\n|\r)*?<\/applet>/gi,
      /<noframes[^>]*?>(?:.|\n|\r)*?<\/noframes>/gi,
      /<noscript[^>]*?>(?:.|\n|\r)*?<\/noscript>/gi,
      /<noembed[^>]*?>(?:.|\n|\r)*?<\/noembed>/gi,
      /<img[^>]*?.*?\/?>/gi
    ];
    a.toText = function (d, e) {
      d = d || '';
      for (var k = 0, n; n = c[k]; k++) d = d.replace(n, '');
      d = a('<div>' + d.replace(/\n/g, ' ') + Ea);
      d.find('div,h1,h2,h3,h4,h5,h6,p').append('\n\n');
      d.find('br').replaceWith('\n\n');
      e !== b && d.find(e).remove();
      e = d.text().replace(/(\n|\r){2}(\s|\n|\r)+/g, '\n\n');
      e = e.replace(/[ \t]+/g, ' ');
      return a.trim(e.replace(/ \n/g, '\n'))
    }
  }) (jQuery);
  (function (a, b) {
    var c = a.browser.webkit && '-webkit-transform' || a.browser.Sf && '-ms-transform' || a.browser.Rf && '-moz-transform' || a.browser.opera && '-o-transform' || 'transform',
    d = /([,])+/;
    a.fn.transform = function (e, k) {
      var n;
      this.each(function () {
        var q = a.style(this, c),
        r = new RegExp(e + '\\(\\s*([-\\w\\d\\.,\\s]+)\\s*\\)'),
        p = (q || '').match(r);
        if (k !== b) {
          var v = d.test(k) ? '' : 0 == e.indexOf('rotate') ? 'deg' : 0 == e.indexOf('scale') ? '' : 'px';
          v = null == k || '' === k ? '' : [
            e,
            '(',
            k,
            v,
            ')'
          ].join('');
          q = p ? q.replace(r, v)  : q + ' ' + v;
          a.style(this, c, a.trim(q))
        } else n = p ? p[1] : ''
      });
      return k !== b ? this : n
    }
  }) (jQuery);
  (function (a, b) {
    function c(k, n) {
      if (n === b) return n;
      var q = e.exec(k),
      r = d.exec(k);
      return q ? (n = q[1] ? c(q[1], n)  : n, n = q[2] ? c(q[2], n)  : n, n = q[3] ? c(q[3], n)  : n)  : r ? (k = a.map((r[2] || '').split(','), function (p) {
        return p && a.trim(p)
      }), (r = r[1] ? n[r[1]] : n) && a.isFunction(r) ? r.apply(n, k.length ? k : b)  : b)  : n[k]
    }
    var d = /^(.*)\(([^\(\)]*)\)$/,
    e = /^(.*)\[([^\]]+)\](.*)$/;
    a.valueOrDefault = function (k, n, q) {
      q = q || window;
      for (var r = k.split('.'); (k = r.shift()) && q; ) q = c(k, q);
      return r.length || q === b ? n : q
    }
  }) (jQuery);
  (function (a) {
    function b(n) {
      n = n.replace(/'|"/g, ',').split(',');
      return a.grep(n, Vc())
    }
    function c() {
      var n = [
      ];
      a.each(k, function (r, p) {
        e[p] || (n.push(p.replace(/\s/g, '+')), e[p] = !0)
      });
      var q = n.join('|');
      q && a('head').append(['<link href="https://fonts.googleapis.com/css?family=',
      q,
      '" rel="stylesheet" type="text/css">'].join(''));
      k = [
      ]
    }
    var d = 'Allerta;Allerta Stencil;Arimo;Arvo;Bentham;Calibri;Calligraffitti;Cambria;Cantarell;Cardo;Cherry Cream Soda;Chewy;Coming Soon;Consolas;Copse;Corsiva;Cousine;Covered By Your Grace;Crafty Girls;Crimson Text;Crushed;Cuprum;Droid Sans;Droid Sans Mono;Droid Serif;Ek Mukta;Fontdiner Swanky;GFS Didot;GFS Neohellenic;Geo;Gruppo;Hanuman;Homemade Apple;IM Fell DW Pica;IM Fell DW Pica SC;IM Fell Double Pica;IM Fell Double Pica SC;IM Fell English;IM Fell English SC;IM Fell French Canon;IM Fell French Canon SC;IM Fell Great Primer;IM Fell Great Primer SC;Inconsolata;Irish Growler;Josefin Sans;Josefin Slab;Just Another Hand;Kenia;Kranky;Lobster;Luckiest Guy;Merriweather;Molengo;Mountains of Christmas;Neucha;Neuton;Nobile;OFL Sorts Mill Goudy TT;Old Standard TT;Open Sans;PT Sans;PT Sans Caption;PT Sans Narrow;Permanent Marker;Philosopher;Puritan;Reenie Beanie;Roboto;Rock Salt;Schoolbell;Slackey;Sunshiney;Syncopate;Tinos;UnifrakturMaguntia;Unkempt;Vollkorn;Walter Turncoat;Yanone Kaffeesatz'.split(';'),
    e = {
    },
    k = [
    ];
    a.oe = function (n) {
      n = a.isArray(n) ? n : [
        n
      ];
      a.each(n, function (q, r) {
        q = b(r);
        a.merge(k, a.grep(q, function (p) {
          return !e[p] && 0 <= a.inArray(p, d)
        }));
        setTimeout(c, 0)
      })
    }
  }) (jQuery);
  var N = window.blogger = window.blogger || {
  },
  console = window.console || (window.console = {
    log: H()
  });
  Object.keys = Object.keys || function () {
    var a = Object.prototype.hasOwnProperty,
    b = !{
      toString: null
    }.propertyIsEnumerable('toString'),
    c = 'toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor'.split(' '),
    d = c.length;
    return function (e) {
      if (typeof e != jc && typeof e != Gb || null === e) throw new TypeError('Object.keys called on a non-object');
      var k = [
      ],
      n;
      for (n in e) a.call(e, n) && k.push(n);
      if (b) for (n = 0; n < d; n++) a.call(e, c[n]) && k.push(c[n]);
      return k
    }
  }();
  function od() {
  }
  od.prototype.init = function (a, b) {
    this.value = a;
    this.start = b;
    return this
  };
  od.prototype.invalid = function (a) {
    a && (this.hd = a);
    return this.hd || !1
  };
  od.prototype.apply = H();
  var pd = /([^\s=]+)\s*=\s*('[^<']*'|"[^"]*"|[\S]*)/g,
  qd = /([^\s=]+)\s*=\s*('[^']*'|"[^"]*")/g;
  od.prototype.extractAttributes = function (a, b) {
    b = rd(!1 === b ? pd : qd);
    for (var c, d = - 1; c = b.exec(a); ) if (d++, d += c[0].length, '' !== c[1] && '' !== c[2]) {
      var e = c[2].replace(/^('|")(.*)(\1)$/, '$2');
      this.attr(c[1], e)
    } else this.invalid('Invalid attribute');
    d != a.length && this.invalid('Invalid attribute string')
  };
  od.prototype.attr = function (a, b) {
    'undefined' !== typeof b && (this.attributes = this.attributes || {
    }, this.attributes[a] = typeof b === G ? b : '' + b);
    if (this.attributes) return this.attributes[a]
  };
  od.prototype.resolveAttr = function (a, b) {
    if (a = this.attr(a)) {
      if (sd.exec(a)) return b ? td((new ud).init(a).apply(b))  : void 0;
      if (vd.exec(a)) return b ? td((new xd).init(a).apply(b))  : void 0;
      a = a.replace(rd(sd), function (c) {
        c = b ? (new ud).init(c).apply(b)  : void 0;
        return void 0 !== c ? c : ''
      });
      a = a.replace(rd(vd), function (c) {
        c = b ? (new xd).init(c).apply(b)  : void 0;
        return void 0 !== c ? c : ''
      })
    }
    return td(a)
  };
  function td(a) {
    return a === Lc ? !0 : a === Bb ? !1 : a
  }
  function rd(a) {
    if (a.global) return new RegExp(a);
    a = a.source;
    a = a.replace(/^\^/, '').replace(/\$$/, '');
    return new RegExp(a, 'g')
  };
  function yd() {
    this.cc = [
    ]
  }
  $.extend(yd.prototype, od.prototype);
  var zd = /^{block:([^\s}]+)(?:\s(.+))?}$/,
  Ad = /^(\w+)s$/,
  Bd = /^(?:Has|If(?!Not))(.+)$/,
  Cd = /^(?:IfNot)(.+)$/;
  yd.prototype.init = function (a, b) {
    this.value = a;
    this.start = b;
    (this.tag = (a = zd.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2])  : this.invalid(Ja);
    return this
  };
  yd.prototype.children = Wc('cc');
  yd.prototype.add = function (a) {
    this.cc.push(a)
  };
  yd.prototype.apply = function (a) {
    var b = Dd(this, a),
    c = [
    ];
    if (b) if (b instanceof Array) for (var d = 0, e = b.length; d < e; d++) {
      var k = new P(b[d], a),
      n = k,
      q = e,
      r = d + 1;
      n.scope('Odd', 1 == r % 2);
      n.scope('Even', 0 == r % 2);
      n.scope('Number', r);
      n.scope('First', 1 == r);
      n.scope('Last', r == q);
      q = (q = this.tag.match(Ad)) && q[1] || this.tag;
      n.scope(q + r, !0);
      n.scope(q, n.context);
      Ed(this, k);
      c = c.concat(Fd(this, k))
    } else this.attributes && (a = new P(a.context, a), Ed(this, a)),
    c = c.concat(Fd(this, a));
    return c.join('')
  };
  function Ed(a, b) {
    if (a.attributes) for (var c in a.attributes) b.scope(c, a.resolveAttr(c, b))
  }
  function Dd(a, b) {
    a = a.tag;
    var c = b.data(a);
    return 'undefined' !== typeof c ? c : Cd.test(a) ? (a = Cd.exec(a) [1], c = b.data(a), 'undefined' === typeof c || 0 == c)  : Bd.test(a) ? (a = Bd.exec(a) [1], c = b.data(a), 'undefined' === typeof c ? !1 : 0 != c)  : b.data(a)
  }
  function Fd(a, b) {
    for (var c = [
    ], d = 0, e; e = a.cc[d]; d++) c.push(e.apply(b));
    return c
  };
  function Gd() {
  }
  $.extend(Gd.prototype, od.prototype);
  var Hd = /^{\/(?:block|template):([^\s}]+)}$/;
  Gd.prototype.init = function (a, b) {
    this.value = a;
    this.start = b;
    (this.tag = (a = Hd.exec(this.value)) && a[1]) || this.invalid(Ja);
    return this
  };
  function Id(a) {
    this.hd = a
  }
  $.extend(Id.prototype, od.prototype);
  function Jd() {
  }
  $.extend(Jd.prototype, od.prototype);
  Jd.prototype.apply = Wc('value');
  function xd() {
  }
  $.extend(xd.prototype, od.prototype);
  var vd = /^{(\w+):(.*)}$/;
  xd.prototype.init = function (a, b) {
    this.value = a;
    this.start = b;
    this.scope = (a = vd.exec(this.value)) && a[1];
    this.term = a && a[2];
    this.scope ? this.term ? (a = this.term.search(qd), 0 < a && (this.extractAttributes(this.term.substr(a), !0), this.term = this.term.substring(0, a).replace(/\s+$/, '')))  : this.invalid('No term specified')  : this.invalid('No scope specified');
    this.name = this.scope + ':' + this.term;
    return this
  };
  xd.prototype.apply = function (a) {
    if (!this.invalid()) {
      var b = this.scope + ':' + this.term,
      c = Q().template(b);
      if (c && !a.scope(Na + b)) {
        var d = new P(a.context, a);
        d.scope(Na + b, !0);
        for (var e in this.attributes) d.scope(e, this.resolveAttr(e, a));
        return c.apply(d)
      }
      return (c = Q().generator(b)) ? c.call(this, a)  : a.data(b)
    }
  };
  function Kd(a) {
    this.name = a;
    this.ic = [
    ]
  }
  $.extend(Kd.prototype, od.prototype);
  var Ld = /^{template:([^\s}]+)(?:\s(.+))?}$/;
  K = Kd.prototype;
  K.init = function (a, b) {
    this.value = a;
    this.start = b;
    (this.name = this.tag = (a = Ld.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2])  : this.invalid('Missing or invalid name');
    return this
  };
  K.children = Wc('ic');
  K.add = function (a) {
    this.ic.push(a)
  };
  K.raw = function (a) {
    'undefined' !== typeof a && (this.og = a);
    return this.og
  };
  K.find = function (a, b, c) {
    function d(k) {
      if (k && k.children) for (var n = 0, q; q = k.children() [n]; n++) q.tag == a && (q instanceof yd || b) && e.push({
        parent: k,
        child: q
      }),
      d(q)
    }
    var e = [
    ];
    d(c || this);
    return e
  };
  K.apply = function (a) {
    a = a instanceof P ? a : new P(a);
    for (var b = [
    ], c = 0, d; d = this.ic[c]; c++) b.push(d.apply(a));
    return Md(this, b.join(''))
  };
  function Md(a, b, c) {
    if ((c = c || a.attr('whitespace')) && 'preserve' != c) {
      if ('discard' == c) return b.replace(/\s/g, '');
      if ('trim' == c) return b.replace(/^\s+/, '').replace(/\s+$/, '');
      if ('collapse' == c || 'preserve-breaks' == c || c == bb) {
        b = b.replace(/\n([\t ]+)/g, '\n');
        'collapse' == c && (b = b.replace(/\n/g, ' '));
        b = b.replace(/\t/g, ' ');
        b = b.replace(/ ( )+/g, ' ');
        b = b.split('\n');
        for (var d = 0, e = b.length; d < e; d++) b[d] = b[d].replace(/^\s+/, '').replace(/\s+$/, '');
        b = b.join('\n');
        return c == bb ? Md(a, b.replace(/\n[\s]+/g, '\n'), 'trim')  : b
      }
    } else return b
  }
  ;
  function ud() {
  }
  $.extend(ud.prototype, od.prototype);
  var sd = /^{([^\s:}]+)(?:\s(.+))?}$/,
  Nd = [
    {
      prefix: 'JSPlaintext',
      transform: function (a) {
        a = $('<div>' + a + Ea).text();
        return ['\'',
        a ? a.replace(/'/g, '&#039;')  : '',
        '\''].join('')
      }
    },
    {
      prefix: 'Plaintext',
      transform: function (a) {
        return $('<div>' + a + Ea).text()
      }
    },
    {
      prefix: 'URLEncoded',
      transform: function (a) {
        return encodeURIComponent(a)
      }
    },
    {
      prefix: 'JS',
      transform: function (a) {
        return ['\'',
        a ? a.replace(/'/g, '&#039;')  : '',
        '\''].join('')
      }
    },
    {
      prefix: 'HTMLEscaped',
      transform: function (a) {
        return (a || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }
    }
  ];
  ud.prototype.init = function (a, b) {
    this.value = a;
    this.start = b;
    (this.variable = this.tag = (a = sd.exec(this.value)) && a[1]) ? a[2] && this.extractAttributes(a[2])  : this.invalid(Ja);
    if (this.tag) for (a = 0; b = Nd[a]; a++) if (0 === this.tag.indexOf(b.prefix)) {
      this.transform = b.prefix;
      this.variable = this.tag.substr(b.prefix.length);
      break
    }
    this.name = this.variable;
    return this
  };
  ud.prototype.apply = function (a) {
    if (this.variable) {
      var b = Q().template(this.tag);
      if (b && !a.scope(Na + this.tag)) {
        var c = new P(a.context, a);
        c.scope(Na + this.tag, !0);
        for (var d in this.attributes) c.scope(d, this.resolveAttr(d, a));
        return b.apply(c)
      }
      c = (b = Q().generator(this.variable)) ? b.apply(this, [
        a
      ])  : a.data(this.variable);
      b || void 0 !== c || 'Value' != this.variable || (c = a.context);
      a: if (a = c, this.transform && a) for (b = 0; c = Nd[b]; b++) if (c.prefix === this.transform) {
        a = c.transform(a);
        break a
      }
      return a
    }
  };
  function Od(a) {
    this.source = typeof a === G ? a : '';
    this.length = this.source.length;
    this.column = this.line = this.la = 0
  }
  K = Od.prototype;
  K.hasNext = function () {
    return this.la < this.length
  };
  K.next = function () {
    if (this.hasNext()) {
      var a = this.source.charAt(this.la);
      this.la++;
      '\n' == a.charAt(0) ? (this.line++, this.column = 0)  : this.column++;
      return a
    }
  };
  K.consume = function (a) {
    if (this.hasNext()) {
      for (var b = [
      ], c = 0; c < a; c++) b.push(this.next());
      return b.join('')
    }
  };
  K.remainder = function () {
    if (this.hasNext()) {
      for (var a = [
      ]; this.hasNext(); ) a.push(this.next());
      return a.join('')
    }
  };
  K.peek = function (a) {
    a = a || this.la;
    if (a < this.length && 0 <= a) return this.source.charAt(a)
  };
  K.match = function (a, b) {
    b = this.source.substr(b || this.la);
    if (typeof a === G) {
      if (b.slice(0, a.length) === a) return a
    } else if (a instanceof RegExp && 0 === b.search(a)) return b.match(a) [0]
  };
  K.search = function (a, b) {
    b = this.source.substr(b || this.la);
    if (typeof a === G) return b.indexOf(a);
    if (a instanceof RegExp) return b.search(a)
  };
  function P(a, b) {
    this.ancestor = b;
    this.Mc = {
    };
    this.context = (b = Q().converter(a)) ? b(a, this)  : a
  }
  var Pd = /(\w+):([^}]+)/;
  P.prototype.scope = function (a, b) {
    'undefined' !== typeof b && (this.Mc[a] = b);
    return 'undefined' !== typeof this.Mc[a] ? this.Mc[a] : this.ancestor && this.ancestor.scope(a)
  };
  P.prototype.value = function (a) {
    var b = this.context && this.context[a];
    'undefined' === typeof b && (b = this.scope(a));
    if ('undefined' === typeof b && 0 <= a.indexOf('.')) {
      a = a.split('.');
      for (var c = a.shift(), d = this.context[c] || this.scope(c); (c = a.shift()) && d; ) if (d = d[c], 0 == a.length) b = d;
       else if (!d) break
    }
    return b
  };
  P.prototype.data = function (a, b) {
    return Pd.test(a) ? this.scope(a, b)  : this.value(a)
  };
  function Qd() {
    this.B = {
    };
    this.Jb = [
    ];
    this.yc = [
    ]
  }
  var Rd;
  Qd.prototype.Te = !1;
  function Q() {
    Rd || (Rd = new Qd);
    return Rd
  }
  Qd.prototype.template = function (a, b) {
    'undefined' !== typeof b && (this.B[a] = this.compile(b));
    return this.B[a]
  };
  Qd.prototype.generator = function (a, b) {
    if (b && a) return a = {
      test: a,
      generator: b
    },
    this.yc.push(a),
    this.yc.sort(function (d, e) {
      return (typeof e.test === G ? e.test.length : 0) - (typeof d.test === G ? d.test.length : 0)
    }),
    a.generator;
    if (a && typeof a === G) {
      b = 0;
      for (var c; c = this.yc[b]; b++) if (typeof c.test === G && 0 === a.indexOf(c.test) || c.test instanceof RegExp && c.test.test(a)) return c.generator
    }
  };
  Qd.prototype.converter = function (a, b) {
    for (var c = - 1, d = 0, e; e = this.Jb[d]; d++) if (a instanceof e.type) {
      c = d;
      break
    }
    a && 'undefined' !== typeof b && (0 <= c && this.Jb.splice(c, 1), c = this.Jb.push({
      type: a,
      converter: b
    }) - 1);
    return 0 <= c ? this.Jb[c].converter : void 0
  };
  var Sd = /^{\/?([\w-]+(:[\w\-]+)?(?:(?:[\w:\-'"= \.#]*[^\s])|(\s*([^\s=]+)\s*=\s*('[^']*'|"[^"]*"))*)?)}/,
  Td = /{(\w+:)/;
  Qd.prototype.compile = function (a, b) {
    var c = new Od(a);
    b = 'undefined' !== typeof b ? b : !0;
    var d = new Kd;
    d.raw(a);
    a = d;
    for (var e = [
      d
    ], k; k = Ud(c); ) {
      var n;
      'literal' == k.type ? n = Jd : 0 === k.value.indexOf('{block:') ? n = yd : 0 === k.value.indexOf('{/block:') ? n = Gd : 0 === k.value.indexOf('{template:') ? n = Kd : 0 === k.value.indexOf('{/template:') ? n = Gd : 0 === k.value.search(Td) ? n = xd : n = ud;
      k = (new n).init(k.value, k.start);
      if (k instanceof yd || k instanceof Kd) {
        if (Qd.Te) for (var q = 0; q < e.length; q++) {
          if (e[q].tag == k.tag) {
            k.invalid('Cannot nest blocks with the same tag');
            break
          }
        } else if (a.tag == k.tag) {
          b && Vd(this, e.pop(), c);
          a = e[e.length - 1];
          continue
        }
        a.add(k);
        a = k;
        e.push(a)
      } else k instanceof Gd ? a.tag == k.tag ? (b && Vd(this, e.pop(), c), a = e[e.length - 1])  : (q = new Id('Unexpected close block'), q.init(k.value, k.start), a.add(q))  : a.add(k)
    }
    return d
  };
  function Vd(a, b, c) {
    b instanceof Kd && b.name && (b.raw(c.source.substring(b.start || 0, c.la)), a.B[b.name] = b)
  }
  function Ud(a) {
    if (a && a.hasNext()) {
      var b = a.la,
      c = a.match(Sd);
      if (c) return {
        type: 'token',
        value: a.consume(c.length),
        start: b
      };
      for (c = [
      ]; a.hasNext(); ) {
        if ('{' === a.peek()) if (a.match(Sd)) break;
         else if (a.match(Sd, a.la + 1)) {
          a.next();
          c.push(a.consume(a.match(Sd).length));
          continue
        }
        c.push(a.next())
      }
      return {
        type: 'literal',
        value: c.join(''),
        start: b
      }
    }
  };
  window.templates = window.templates || Q; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Wd = this || self;
  function Xd(a) {
    var b = typeof a;
    if (b == jc) if (a) {
      if (a instanceof Array) return 'array';
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ('[object Window]' == c) return jc;
      if ('[object Array]' == c || 'number' == typeof a.length && 'undefined' != typeof a.splice && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable('splice')) return 'array';
      if ('[object Function]' == c || 'undefined' != typeof a.call && 'undefined' != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable('call')) return Gb
    } else return 'null';
     else if (b ==
    Gb && 'undefined' == typeof a.call) return jc;
    return b
  }
  function Yd(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.base = function (d, e, k) {
      for (var n = Array(arguments.length - 2), q = 2; q < arguments.length; q++) n[q - 2] = arguments[q];
      return b.prototype[e].apply(d, n)
    }
  };
  function Zd(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Zd);
     else {
      var b = Error().stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  }
  Yd(Zd, Error);
  Zd.prototype.name = 'CustomError';
  function $d(a, b) {
    a = a.split('%s');
    for (var c = '', d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : '%s');
    Zd.call(this, c + a[d])
  }
  Yd($d, Zd);
  $d.prototype.name = 'AssertionError';
  function ae(a, b, c) {
    if (!a) {
      var d = 'Assertion failed';
      if (b) {
        d += ': ' + b;
        var e = Array.prototype.slice.call(arguments, 2)
      }
      throw new $d('' + d, e || [
      ]);
    }
    return a
  }
  function be(a, b) {
    throw new $d('Failure' + (a ? ': ' + a : ''), Array.prototype.slice.call(arguments, 1));
  };
  function ce(a, b) {
    this.Jc = a === de && b || '';
    this.Se = ee
  }
  ce.prototype.Hf = !0;
  ce.prototype.Ef = function () {
    return this.Jc.toString()
  };
  ce.prototype.toString = function () {
    return 'SafeUrl{' + this.Jc + '}'
  };
  var fe = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
  ee = {
  },
  de = {
  };
  function ge(a, b) {
    a: {
      try {
        var c = a && a.ownerDocument,
        d = c && (c.defaultView || c.parentWindow);
        d = d || Wd;
        if (d.Element && d.Location) {
          var e = d;
          break a
        }
      } catch (n) {
      }
      e = null
    }
    if (e && (!a || !(a instanceof e.Location) && a instanceof e.Element)) {
      e = typeof a;
      if (e == jc && null != a || e == Gb) try {
        var k = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
      } catch (n) {
        k = '<object could not be stringified>'
      } else k = void 0 === a ? 'undefined' : null === a ? 'null' : typeof a;
      be('Argument is not a Location (or a non-Element mock); got: %s', k)
    }
    b instanceof ce || b instanceof ce || (b = typeof b == jc && b.Hf ? b.Ef()  : String(b), ae(fe.test(b), '%s does not match the safe URL pattern', b) || (b = 'about:invalid#zClosurez'), b = new ce(de, b));
    b instanceof ce && b.constructor === ce && b.Se === ee ? b = b.Jc : (be('expected object of type SafeUrl, got \'' + b + '\' of type ' + Xd(b)), b = 'type_error:SafeUrl');
    a.href = b
  };
  function he(a) {
    this.source = a || window._WidgetManager && $.valueOrDefault('_WidgetManager._GetAllData()')
  }
  he.prototype.get = function () {
    if (!this.source || 0 == Object.keys(this.source).length) return {
      ready: !1
    };
    var a = {
      ready: !0
    };
    if (this.source.blog) {
      var b = this.source.blog,
      c = $.valueOrDefault('skin.vars', void 0, this.source),
      d = this.source.view,
      e = this.source.widgets,
      k = function (p) {
        return {
          'font:Text': p.page_text_font,
          'color:Text': p.page_text_color,
          'image:Background': p.body_background,
          'color:Background': p.body_background_color,
          'color:Header Background': p.header_background_color,
          'color:Primary': p.primary_color,
          'color:Menu Text': p.menu_text_color,
          'font:Menu': p.menu_font,
          'font:Link': p.link_font,
          'color:Link': p.link_color,
          'color:Link Visited': p.link_visited_color,
          'color:Link Hover': p.link_hover_color,
          'font:Blog Title': p.blog_title_font,
          'color:Blog Title': p.blog_title_color,
          'font:Blog Description': p.blog_description_font,
          'color:Blog Description': p.blog_description_color,
          'font:Post Title': p.post_title_font,
          'color:Post Title': p.post_title_color,
          'color:Ribbon': p.ribbon_color,
          'color:Ribbon Hover': p.ribbon_hover_color
        }
      };
      if (b) {
        a.blog_locale = b.locale;
        a.blog_title = b.title;
        a.blog_id = b.blogId;
        a.comments_enabled = !0;
        a.comments_mtd = 2;
        a.feeds_api = 2;
        a.analytics_id = b.analyticsAccountNumber;
        a.adsense_client_id = b.adsenseClientId;
        a.adsense_host_id = 'pub-1556223355139109';
        a.adsense_has_ads = b.adsenseHasAds;
        a.blog_url = b.homepageUrl ? R.decode(b.homepageUrl).encode(!1, !1)  : '/';
        if (b.bloggerUrl) {
          var n = R.decode(b.bloggerUrl);
          n.scheme = Rb;
          a.blogger_base = n.encode()
        }
        a.canonical_url = b.canonicalUrl;
        a['private'] = !!b.isPrivateBlog;
        a.hasCustomDomain = !!b.hasCustomDomain;
        a.is_mobile = !!b.isMobileRequest;
        a.is_tablet = (!!b.isMobileRequest || $.support.touch) && 768 <= window.screen.width && 1600 >= window.screen.width;
        var q = $.valueOrDefault(Va);
        a.filter_permalink = $.support.touch && 'classic' == q;
        a.plusone_api_src = b.plusOneApiSrc;
        a.pageType = b.pageType;
        a.postId = b.postId;
        a.pageId = b.pageId;
        a.disableGComments = b.disableGComments;
        a.disableGooglePlus = b.sharing && b.sharing.disableGooglePlus
      }
      c && (a.template_styles = k(c), a.additional_css = $.valueOrDefault('skin.override', void 0, this.source));
      d && (q = $.valueOrDefault(Va), a.views = $.map(d, function (p) {
        return p.name && p.url ? {
          name: p.name,
          url: p.url,
          selected: p.name == q
        }
         : null
      }));
      e && (a.widget_settings = {
      }, $.each(e, function (p, v) {
        a.widget_settings[p] = v.settings
      }), a.widget_ids = $.map(e, function (p, v) {
        if (/^PageList\d+$/.test(v)) p = $.map(p.links, function (m) {
          return {
            title: m.title,
            url: m.href,
            page_id: m.id
          }
        }),
        a.pages || (a.pages = [
        ]),
        a.pages = $.merge(a.pages, p);
         else if (/^Blog\d+$/.test(v)) {
          var g = p.previewPost;
          if (g) {
            var h = new ie;
            h.id = g.id;
            h.url = g.url;
            h.title = g.title;
            h.body = g.body;
            var f = g.timestampISO8601;
            h.published = (new Date).fromISOString(f);
            h.updated = (new Date).fromISOString(f);
            h.commentCount = g.numComments;
            h.allowComments = g.allowComments;
            h.author = new je(g.author, g.authorUrl, $.valueOrDefault('authorPhoto.url', void 0, g));
            h.tags = $.map(g.labels || [
            ], function (m) {
              return m.name
            });
            a.preview = h
          }(p = p.navMessage) && b && 'error_page' == b.pageType && (a.error = p)
        }
        return v
      }));
      if (c = $.valueOrDefault('blog.xpc.rpc')) {
        var r = M();
        c.addChannelToOuter(Fc);
        c.registerService(Fc, 'setSkinData', function (p) {
          r.settings.template_styles = k(p.vars);
          r.cache(Mb, null);
          r.notify('templatechange')
        });
        c.connect(Fc)
      }
    } else $.extend(a, this.source),
    a.views = N.views;
    a.blog_url = a.blog_url || R.decode().root();
    a.canonical_url = a.canonical_url || R.decode().encode(!1, !1);
    c = R.decode(a.canonical_url);
    c.scheme = 'http';
    a.http_canonical_url = c.encode();
    c = R.decode();
    if (void 0 !== c.param('z') || 'z' == c.fragment) a.headless = !0;
    return a
  };
  var ke = {
    group: function (a, b) {
      var c = ke.categorizers[b];
      if (!c) return null;
      a = ke.qf(c, a, b);
      a.sort(function (d, e) {
        return d.unknown || e.unknown ? d.unknown ? 1 : - 1 : c.compare(d, e)
      });
      return a
    },
    qf: function (a, b, c) {
      for (var d = [
      ], e = 0, k; k = b[e]; e++) if ('tag' == c) for (var n = a.pf(k), q = 0, r; r = n[q]; q++) {
        for (var p = !0, v = 0, g; g = d[v]; v++) if (g.caption == r.caption) {
          p = !1;
          g.addItem(e, k);
          break
        }
        p && (d.push(r), r.addItem(e, k))
      } else {
        r = null;
        for (n = 0; g = d[n]; n++) if (a.Pb(g, k)) {
          r = g;
          break
        }
        r || (r = a.sc(k), d.push(r));
        r.addItem(e, k)
      }
      return d
    },
    categorizers: {
      author: {
        Pb: function (a, b) {
          return b.author ? a.attr('value') == b.author.name : a.unknown
        },
        sc: function (a) {
          return a.author ? new le(a.author.name, {
            type: 'author',
            value: a.author.name
          })  : new le(Mc, null, !0)
        },
        compare: function (a, b) {
          return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : - 1
        }
      },
      tag: {
        Pb: function (a, b) {
          if (b.tags && 0 < b.tags.length) {
            for (var c = 0; c < b.tags.length; c++) if (a.attr('value') == b.tags[c]) return !0;
            return !1
          }
          return a.unknown
        },
        pf: function (a) {
          var b = [
          ];
          a.tags && 0 < a.tags.length ? $.each(a.tags, function (c, d) {
            b.push(new le(d, {
              type: 'tag',
              value: d
            }))
          })  : b.push(new le('No labels', null, !0));
          return b
        },
        compare: function (a, b) {
          return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : - 1
        }
      },
      published: {
        Pb: function (a, b) {
          return b.published ? a.attr('year') == b.published.getFullYear() && a.attr('month') == b.published.getMonth()  : a.unknown
        },
        sc: function (a) {
          return a.published ? new le('January February March April May June July August September October November December'.split(' ') [a.published.getMonth()] + ' ' + a.published.getFullYear(), {
            type: sc,
            year: a.published.getFullYear(),
            month: a.published.getMonth()
          })  : new le(Mc, null, !0)
        },
        compare: function (a, b) {
          return a.attr('year') == b.attr('year') ? a.attr('month') < b.attr('month') ? 1 : - 1 : a.attr('year') < b.attr('year') ? 1 : - 1
        }
      },
      service: {
        Pb: function (a, b) {
          return (b = b instanceof ie && 'Blogger' || b instanceof me && 'Google+' || '') ? a.attr('value') == b : a.unknown
        },
        sc: function (a) {
          return (a = a instanceof ie && 'Blogger' || a instanceof me && 'Google+' || '') ? new le(a, {
            type: 'service',
            value: a
          })  : new le(Mc, null, !0)
        },
        compare: function (a, b) {
          return a.caption.toLowerCase() >
          b.caption.toLowerCase() ? 1 : - 1
        }
      }
    }
  };
  function le(a, b, c) {
    this.caption = a;
    this.He = [
    ];
    this.nd = $.extend({
    }, b);
    this.unknown = c ? !0 : !1
  }
  le.prototype = {
    attr: function (a, b) {
      null != b && (this.nd[a] = b);
      return this.nd[a]
    },
    addItem: function (a, b) {
      this.items().push({
        index: a,
        item: b
      })
    },
    values: function () {
      return $.map(this.items(), function (a) {
        return a.item
      })
    },
    indexes: function () {
      return $.map(this.items(), function (a) {
        return a.index
      })
    },
    items: Wc('He'),
    count: function () {
      return this.items().length
    }
  };
  function ne() {
    this.Lc = {
    }
  }
  var oe;
  ne.prototype.create = function (a) {
    var b = a.match(/([^\d]*)(\d*)$/);
    a = b[1];
    b = '' !== b[2] ? b[2] : void 0;
    return this.Lc[a] && new this.Lc[a](b)
  };
  ne.prototype.register = function (a, b) {
    a && b && (this.Lc[a] = b)
  };
  function pe(a) {
    this.settings = $.extend({
    }, qe, a);
    this.A = [
    ];
    this.tb = [
    ]
  }
  var qe = {
    width: 500,
    rowHeight: 200,
    margin: 2
  };
  K = pe.prototype;
  K.photos = Wc('A');
  K.rows = Wc('tb');
  K.positions = function () {
    for (var a = this.settings.margin, b = [
    ], c = 0, d = 0, e; e = this.tb[d]; d++) {
      c += a;
      for (var k = 0, n = 0, q; q = e[n]; n++) k += a,
      b.push({
        top: c,
        left: k,
        width: q.width,
        height: q.height,
        photo: q
      }),
      k += q.width + a;
      c += e[0].height + a
    }
    return b
  };
  K.add = function (a) {
    return this.insertAt(a)
  };
  K.insertAt = function (a, b) {
    void 0 === b || b == this.A.length ? $.isArray(a) ? this.A = this.A.concat(a)  : this.A.push(a)  : $.isArray(a) ? this.A = this.A.slice(0, b).concat(a, this.A.slice(b))  : this.A.splice(b, 0, a);
    return this
  };
  K.insertBefore = function (a, b) {
    b = b instanceof re ? se(this, b)  : b;
    return this.insertAt(a, 0 <= b ? b : void 0)
  };
  K.insertAfter = function (a, b) {
    b = b instanceof re ? se(this, b)  : b;
    return this.insertAt(a, 0 <= b ? b + 1 : void 0)
  };
  function se(a, b) {
    for (var c = 0, d; d = a.A[c]; c++) if (d.url == b.url) return c;
    return - 1
  }
  K.layout = function (a) {
    a = this.settings.width = a || this.settings.width;
    this.tb = [
    ];
    for (var b = this.A; b.length; ) {
      var c,
      d = b,
      e = a;
      var k = [
      ];
      for (var n = this.settings.margin, q = this.settings.rowHeight, r = 0, p = 0; (c = d[p]) && r < e; p++) k.push(c.clone()),
      r += c.size().toHeight(q).width + 2 * n;
      r > e && (p = 2 * n * k.length, q = Math.floor((e - p) / (r - p) * q));
      for (p = d = 0; c = k[p]; p++) d += c.size(c.size().toHeight(q)).width + 2 * n;
      if (r >= e) for (e -= d; 0 != e; ) for (n = 0 < e ? 1 : - 1, p = k.length - 1; 0 <= p && 0 != e; p--) k[p].width += n,
      e -= n;
      if (k.length) this.tb.push(k),
      b = b.slice(k.length);
       else break
    }
    return this.tb
  };
  var R = {
    fd: /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
    Re: /^(?:(([^:\/?#]+):){1}(\/\/)?)|(\/\/)/,
    uc: function () {
      return document.URL
    },
    isCrossDomain: function (a) {
      var b = R.decode();
      a = a instanceof S ? a : new S(a);
      return b.authority != a.authority
    },
    isSamePage: function (a, b) {
      var c = R.decode();
      a = a instanceof S ? a : new S(a);
      return (!!b || c.authority == a.authority) && c.path == a.path
    },
    decode: function (a) {
      return new S(a || R.uc())
    },
    authority: function (a, b) {
      var c = a || R.uc();
      a = (a = c.match(/^(https?:\/\/)/)) ? a[0] :
      'http://';
      c = c.replace(a, '');
      if (c = /([^\/]+)\/?(.*)/.exec(c)) return a + (0 > c[1].indexOf('.') && b ? c[1] + '.' + b : c[1]).toLowerCase()
    },
    rewritePath: function (a) {
      a = a instanceof S ? a : new S(a);
      if (window.history.pushState) try {
        return R.uc() != a.encode() && window.history.pushState(null, '', a.encode()),
        !0
      } catch (b) {
      }
      a = '#!' + (R.isCrossDomain(a) ? a.encode(!1, !1)  : a.path);
      return window.location.hash != a ? (window.location.hash = a, !0)  : !1
    },
    decodePath: function (a) {
      a = R.decode(a);
      if (a.fragment && '!' == a.fragment[0]) {
        var b = new S(a.fragment.substr(1));
        b.authority || (b.scheme = a.scheme, b.authority = a.authority);
        a = b
      }
      return new S(a.encode(!1, !1))
    }
  };
  function S(a) {
    this.url = null !== a ? a instanceof S ? a.encode()  : a : void 0;
    this.params = {
    };
    this.url && te(this.url, this)
  }
  function te(a, b) {
    b = b || new S;
    if ((a = R.Re.exec(a) ? R.fd.exec(a)  : R.fd.exec('//' + a)) && a.length && (b.scheme = a[2], b.authority = a[4] && a[4].toLowerCase(), b.path = a[5], b.query = a[7], b.params = {
    }, b.fragment = a[9], b.query)) {
      a = b.query.replace(/&amp;/g, '&').split('&');
      for (var c = 0, d = a.length; c < d; c++) if (a[c]) {
        var e = a[c].split('=');
        b.params[e[0]] = e[1] || ''
      }
    }
    return b
  }
  S.prototype.encode = function (a, b, c) {
    a = 'undefined' !== typeof a ? a : !0;
    b = 'undefined' !== typeof b ? b : !0;
    if (c) var d = $.param(this.params);
     else {
      c = [
      ];
      for (d in this.params) void 0 !== this.params[d] ? c.push(d + '=' + this.params[d])  : c.push(d);
      d = c.join('&')
    }
    return [this.scheme ? this.scheme + ':' : '',
    this.authority ? '//' + this.authority : '',
    this.path,
    a && d ? '?' + d : '',
    b && this.fragment ? '#' + this.fragment : ''].join('')
  };
  S.prototype.root = function () {
    return [this.scheme ? this.scheme + ':' : '',
    this.authority ? '//' + this.authority : ''].join('')
  };
  S.prototype.param = function (a, b) {
    return 'undefined' !== typeof b ? (this.params[a] = b, this)  : this.params[a]
  };
  S.prototype.normalize = function () {
    this.scheme = this.scheme || R.decode().scheme;
    this.path = this.path || '/';
    return this
  };
  function ue() {
    this.A = [
    ]
  }
  ue.prototype.add = function (a) {
    a = $.isArray(a) ? a : [
      a
    ];
    for (var b = 0, c; c = a[b]; b++) this.A.push(new re(c));
    return this
  };
  ue.prototype.load = function (a) {
    function b() {
      setTimeout(function () {
        var n = k.photos();
        $(k).triggerHandler('load', [
          n
        ]);
        a && a(n)
      }, 0)
    }
    for (var c = [
    ], d = 0, e; e = this.A[d]; d++) e.loaded || e.invalid || c.push(e.load());
    var k = this;
    c.length ? $.when.apply(window, c).always(b)  : b();
    return this
  };
  ue.prototype.photos = function () {
    return $.grep(this.A, function (a) {
      return a.loaded && !a.invalid
    })
  };
  function ve(a) {
    this.settings = $.extend({
    }, we, a);
    this.A = [
    ];
    this.cd = 0
  }
  var we = {
    thumbnailHeight: 150
  };
  K = ve.prototype;
  K.add = function (a, b) {
    var c = new re(T.full(a), {
      width: b && b.width,
      height: b && b.height
    });
    this.A.push(c);
    if (b) for (var d in b) d != Uc && d != Nb && c.attr(d, b[d]);
    c.attr('Index', this.A.length - 1);
    c.attr('Number', this.A.length);
    c.attr(Ka, T.canResize(a));
    if (c.attr(Ka)) {
      a = new re(T.thumbnail(a, 2 * this.settings.thumbnailHeight, !1));
      c.associate(a, 'thumbnail');
      $(this).triggerHandler('add', [
        c
      ]);
      var e = this;
      a.load(function () {
        e.ready_(c)
      })
    } else $(this).triggerHandler('add', [
      c
    ]),
    this.ready_(c);
    return c
  };
  K.ready_ = function (a) {
    var b = this;
    setTimeout(function () {
      $(b).triggerHandler('ready', [
        a
      ]);
      for (var c = b.cd, d; d = b.A[c]; c++) if (b.cd = c, d.attr(Ka)) {
        if (!d.aspect()) break;
        $(b).triggerHandler('contiguous', [
          d
        ])
      }
    }, 0)
  };
  K.photos = function (a, b) {
    return $.map(this.A, function (c) {
      var d = !0;
      !0 === a ? d = void 0 !== c.aspect()  : void 0 !== a && (d = c.attr(a) == b);
      return d ? c : null
    })
  };
  K.eq = function (a) {
    if (0 <= a && a < this.A.length) return this.A[a]
  };
  K.size = function () {
    return this.A.length
  };
  function re(a, b) {
    this.url = a;
    this.attributes = {
    };
    this.invalid = this.loaded = !1;
    this.width = b && b.width;
    this.height = b && b.height;
    this.W = {
    }
  }
  K = re.prototype;
  K.clone = function () {
    var a = new re(this.url);
    a.loaded = this.loaded;
    a.invalid = this.invalid;
    a.width = this.width;
    a.height = this.height;
    a.attributes = $.extend({
    }, this.attributes);
    a.W = $.map(this.W, function (c) {
      return c.clone()
    });
    for (var b in this.W) a.W[b] = this.W[b].clone();
    return a
  };
  K.aspect = function () {
    if (this.width && this.height) return this.width / this.height;
    if (this.associated(!0).length) return this.associated(!0) [0].aspect()
  };
  K.size = function (a) {
    return void 0 !== a ? (this.width = a.width, this.height = a.height, this)  : new xe(this.width || 1, this.height || 1)
  };
  K.associated = function (a) {
    if (!0 === a) {
      a = [
      ];
      for (var b in this.W) return this.W[b].loaded && a.push(this.W[b]),
      a
    } else return this.W[a]
  };
  K.associate = function (a, b) {
    this.W || (this.W = {
    });
    this.W[b] = a
  };
  K.load = function (a) {
    function b() {
      e.reject();
      $(d).triggerHandler('error', [
        d
      ]);
      a && a(d)
    }
    function c() {
      e.resolve();
      $(d).triggerHandler('load', [
        d
      ]);
      a && a(d)
    }
    var d = this,
    e = $.Deferred();
    this.url ? this.loaded ? c()  : this.invalid ? b()  : $('<img/>').one('load', function (k) {
      d.loaded = !0;
      d.width = k.target.width;
      d.height = k.target.height;
      $(this).unbind();
      c()
    }).one('error', function () {
      d.invalid = !0;
      $(this).unbind();
      b()
    }).attr(E, d.url)  : b();
    return e.promise()
  };
  K.attr = function (a, b) {
    return 'undefined' !== typeof b ? (this.attributes[a] = b, this)  : this.attributes[a]
  };
  function xe(a, b) {
    this.width = a;
    this.height = b
  }
  K = xe.prototype;
  K.aspect = function () {
    return this.width / this.height
  };
  K.scale = function (a) {
    return new xe(Math.round(a * this.width), Math.round(a * this.height))
  };
  K.toWidth = function (a) {
    return new xe(a, Math.round(a / this.width * this.height))
  };
  K.toHeight = function (a) {
    return new xe(Math.round(a / this.height * this.width), a)
  };
  K.fill = function (a, b, c, d) {
    b = b || a;
    var e = Math.max(a / this.width, b / this.height);
    !1 === c && 1 < e && (e = 1);
    c = new xe(Math.round(e * this.width), Math.round(e * this.height));
    if (void 0 !== d) {
      b = (c.height - b) / c.height;
      a = (c.width - a) / c.width;
      if (b > d) return c.scale(1 - b * c.height / c.height + d);
      if (a > d) return c.scale(1 - a * c.width / c.width + d)
    }
    return c
  };
  K.fit = function (a, b, c) {
    a = Math.min(a / this.width, (b || a) / this.height);
    !1 === c && 1 < a && (a = 1);
    return new xe(Math.round(a * this.width), Math.round(a * this.height))
  };
  var ye = /^\/(\d{4})_(\d{2})_(\d{2})_archive\.html$/,
  ze = /^\/(\d{4})(\/\d{2})?\/?$/,
  Ae = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i;
  function Be() {
    var a = R.decode(void 0),
    b = M().settings.pageType,
    c = new Ce;
    if (a.path && 0 <= a.path.indexOf(Ca)) return c.tags = [
      decodeURIComponent(a.path.substr(a.path.indexOf(Ca) + 14))
    ],
    c;
    if (ye.test(a.path)) return b = ye.exec(a.path),
    a = parseInt(b[1], 10),
    b = parseInt(b[2], 10) - 1,
    c.qa = new Date(a, b, 1),
    c.pa = new Date(a, b + 1, 0),
    c;
    if (ze.test(a.path)) return b = ze.exec(a.path),
    a = parseInt(b[1], 10),
    b[2] ? (b = parseInt(b[2].substr(1), 10) - 1, c.qa = new Date(a, b, 1), c.pa = new Date(a, b + 1, 0))  : (c.qa = new Date(a, 0, 1), c.pa = new Date(a, 12, 0)),
    c;
    if (M().settings.filter_permalink && 'item' == b) return c.Gc = a.path,
    c;
    if (M().settings.filter_permalink && b == Ec) return c.Dc = a.path,
    c;
    if (a.path && 0 == a.path.indexOf('/search')) return c.qa = a.params['updated-min'] ? (new Date).fromISOString(decodeURIComponent(a.params['updated-min']))  : void 0,
    c.pa = a.params['updated-max'] ? (new Date).fromISOString(decodeURIComponent(a.params['updated-max']))  : void 0,
    a.params.q && (c.query = decodeURIComponent(a.params.q).replace(/(\+)+/g, ' ')),
    c.qa || c.pa || c.query ? c : void 0
  }
  function De(a) {
    a = typeof a === G ? R.decode(a)  : a;
    if (a.authority) if (R.isCrossDomain(a.encode())) {
      a = Ae.exec(a.authority);
      var b = Ae.exec(R.decode().authority);
      if (b && a && b[1] == a[1]) return !0
    } else return !0;
     else return !0;
    return !1
  }
  function Ee(a) {
    var b = R.decode(M().settings.blog_url);
    b.path = '/search';
    b.params.q = $.trim(a).replace(/(\s)+/g, '+');
    ge(window.location, b.encode())
  };
  var Fe = {
    context: function () {
      var a = new P(Fe.nf());
      return Fe.scopeGlobals(a)
    },
    translate: function (a) {
      return Fe.scopeGlobals(new P(a))
    },
    scopeGlobals: function (a) {
      var b = M().cache(Mb);
      if (!b) {
        b = {
        };
        var c = M().settings,
        d = c.headless || !1;
        b.Locale = c.blog_locale;
        b.BloggerBase = W().settings.blogger_base;
        b.PlusBase = W().settings.plus_base;
        if (N && N.l10n) for (var e in N.l10n) b['lang:' + e] = N.l10n[e];
        c.analytics_id && !d && (b.AnalyticsID = c.analytics_id);
        c.adsense_client_id && !d && (b.Adsense = !!c.adsense_has_ads, b.AdsenseClient = c.adsense_client_id, b.AdsenseHost = c.adsense_host_id);
        d = !!M().settings.comments_enabled;
        b.Comments = d;
        b.Notes = d;
        b.Gadgets = !!c.enableGadgets;
        var k = '';
        d = $.map(c.views || [
        ], function (p) {
          var v = p.name || '',
          g = v.charAt(0).toUpperCase() + v.slice(1);
          k = p.selected ? g : k || g;
          var h = N.l10n && N.l10n[g] ? N.l10n[g] : g,
          f = p.url;
          f && 0 < f.indexOf('?') && (f = f.slice(f.indexOf('?')));
          return {
            Name: v,
            URL: f,
            Label: g,
            LocalizedLabel: h,
            Current: p.selected
          }
        });
        d.sort(function (p, v) {
          return p.Label < v.Label ? - 1 : p.Label == v.Label ? 0 : 1
        });
        b.Views = d;
        b.CurrentView = k;
        b['browser:' +
        $.browser.type] = !0;
        b['browser:' + $.browser.type + $.browser.versionX] = !0;
        b.Mobile = c.is_mobile || $.support.touch;
        b.Tablet = c.is_tablet;
        $.extend(b, Fe.Nf());
        d = 0;
        for (var n = !1, q = 0, r; r = W().resources() [q]; q++) r.total && (d += r.total),
        n = n || r.filter;
        b.PostCount = d;
        n && (b.SearchQuery = n.query, b.SearchPage = !0, b.SearchResultCount = d, b.NoSearchResults = 0 == d);
        d = R.decode(r && r.url).authority || '';
        b.CustomDomain = - 1 == d.indexOf('.blogspot.');
        b.BlogURL = c.blog_url || '/';
        b.CanonicalUrl = c.canonical_url;
        M().cache(Mb, b)
      }
      for (e in b) a.scope(e, b[e]);
      return a
    },
    Nf: function () {
      var a = {
      };
      $.extend(a, {
        'font:Text': 'Open Sans',
        'color:Text': '#262626',
        'image:Background': void 0,
        'color:Background': '#6a6a6a',
        'color:Header Background': '#303030',
        'image:Header': void 0,
        'color:Primary': '#262626',
        'color:Menu Text': '#eeeeee',
        'font:Menu': 'Walter Turncoat',
        'font:Link': 'Walter Turncoat',
        'color:Link': '#134f5c',
        'color:Link Visited': '#134f5c',
        'color:Link Hover': '#134f5c',
        'font:Blog Title': 'Molengo',
        'color:Blog Title': '#eeeeee',
        'font:Blog Description': 'Molengo',
        'color:Blog Description': '#eeeeee',
        'font:Post Title': 'Molengo',
        'color:Post Title': '#262626',
        'color:Ribbon': '#666',
        'color:Ribbon Hover': '#134f5c',
        'color:Bubble': '#666'
      }, M().settings.template_styles);
      M().settings.additional_css && (a['text:Custom CSS'] = M().settings.additional_css);
      var b = /^(bold|normal|italic|\d+%|\d+px|\s)+/i,
      c;
      for (c in a) if (0 == c.indexOf('font:')) a[c] = a[c].replace(b, '');
       else if ('image:Background' == c) {
        var d = /.*url\((.*?)\).*/.exec(a[c]);
        d && (a['image:Header'] = a[c] = d[1], a['text:BodyBackgroundCSS'] = a['text:HeaderBackgroundCSS'] = d[0])
      }
      return a
    },
    nf: function () {
      for (var a = {
      }, b = W().resources().slice().reverse(), c = 0, d; d = b[c]; c++) $.isFunction(d.data) && $.extend(a, d.data());
      a.Posts = W().items();
      return a
    },
    Mf: function (a) {
      var b = {
      },
      c = W().items(),
      d = $.inArray(a, c);
      if (0 <= d) {
        var e = 0 < d ? c[d - 1] : null;
        c = d < c.length - 1 ? c[d + 1] : null;
        b.PreviousPost = e ? e.url : !1;
        b.NextPost = c ? c.url : W().hasNext()
      }
      b.SameDayDate = e && e.published && e.published.getDate() == a.published.getDate() && e.published.getMonth() == a.published.getMonth() && e.published.getFullYear() == a.published.getFullYear() ? !0 : !1;
      b.NewDayDate = !b.SameDayDate;
      - 1 != d && (a = d + 1, b.Odd = 1 == a % 2, b.Even = 0 == a % 2, b.Number = a, b['Post' + a] = !0);
      return b
    }
  };
  (function (a) {
    function b(g) {
      var h = 'th',
      f = g % 10;
      1 != Math.floor(g / 10) % 10 && (1 == f ? h = 'st' : 2 == f ? h = 'nd' : 3 == f && (h = 'rd'));
      return h
    }
    var c = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
    d = 'January February March April May June July August September October November December'.split(' '),
    e = [
      {
        test: /^DayOfMonth$/,
        generator: function (g) {
          if (g = g.data(l)) return g.getDate()
        }
      },
      {
        test: /^DayOfMonthWithZero$/,
        generator: function (g) {
          if (g = g.data(l)) return 10 > g.getDate() ? '0' + g.getDate()  : g.getDate()
        }
      },
      {
        test: /^DayOfWeek$/,
        generator: function (g) {
          if (g = g.data(l)) return c[g.getDay()]
        }
      },
      {
        test: /^ShortDayOfWeek$/,
        generator: function (g) {
          if (g = g.data(l)) return c[g.getDay()].substr(0, 3)
        }
      },
      {
        test: /^DayOfWeekNumber$/,
        generator: function (g) {
          if (g = g.data(l)) return g.getDay() || 7
        }
      },
      {
        test: /^DayOfMonthSuffix$/,
        generator: function (g) {
          if (g = g.data(l)) return b(g.getDate())
        }
      },
      {
        test: /^DayOfYear$/,
        generator: function (g) {
          if (g = g.data(l)) return Math.ceil((g - new Date(g.getFullYear(), 0, 1) + 1) / 86400000)
        }
      },
      {
        test: /^WeekOfYear$/,
        generator: function (g) {
          if (g = g.data(l)) return Math.ceil(Math.ceil((g -
          new Date(g.getFullYear(), 0, 1) + 1) / 86400000) / 7)
        }
      },
      {
        test: /^Month$/,
        generator: function (g) {
          if (g = g.data(l)) return d[g.getMonth()]
        }
      },
      {
        test: /^ShortMonth$/,
        generator: function (g) {
          if (g = g.data(l)) return d[g.getMonth()].substr(0, 3)
        }
      },
      {
        test: /^MonthNumber$/,
        generator: function (g) {
          if (g = g.data(l)) return g.getMonth() + 1
        }
      },
      {
        test: /^MonthNumberWithZero$/,
        generator: function (g) {
          if (g = g.data(l)) return 9 > g.getMonth() ? '0' + (g.getMonth() + 1)  : g.getMonth() + 1
        }
      },
      {
        test: /^Year$/,
        generator: function (g) {
          if (g = g.data(l)) return g.getFullYear()
        }
      },
      {
        test: /^ShortYear$/,
        generator: function (g) {
          if (g = g.data(l)) return g.getFullYear().toString().substr(2)
        }
      },
      {
        test: /^AmPm$/,
        generator: function (g) {
          if (g = g.data(l)) return 12 > g.getHours() ? 'am' : 'pm'
        }
      },
      {
        test: /^CapitalAmPm$/,
        generator: function (g) {
          if (g = g.data(l)) return 12 > g.getHours() ? 'AM' : 'PM'
        }
      },
      {
        test: /^12Hour$/,
        generator: function (g) {
          if (g = g.data(l)) return 12 < g.getHours() ? g.getHours() - 12 : g.getHours() || '12'
        }
      },
      {
        test: /^24Hour$/,
        generator: function (g) {
          if (g = g.data(l)) return g.getHours()
        }
      },
      {
        test: /^12HourWithZero$/,
        generator: function (g) {
          if (g = g.data(l)) return g = 12 < g.getHours() ? g.getHours() - 12 : g.getHours() || '12',
          10 > g ? '0' + g : g
        }
      },
      {
        test: /^Minutes$/,
        generator: function (g) {
          if (g = g.data(l)) return g = g.getMinutes(),
          10 > g ? '0' + g : g
        }
      },
      {
        test: /^Seconds$/,
        generator: function (g) {
          if (g = g.data(l)) return g = g.getSeconds(),
          10 > g ? '0' + g : g
        }
      },
      {
        test: /^Beats$/,
        generator: function (g) {
          if (g = g.data(l)) return g = g.getMilliseconds(),
          10 > g ? '00' + g : 100 > g ? '0' + g : g
        }
      },
      {
        test: /^Timestamp$/,
        generator: function (g) {
          if (g = g.data(l)) return Math.ceil(g.getTime() / 1000)
        }
      },
      {
        test: /^FormattedTime$/,
        generator: function (g) {
          if (g = g.data(l)) return g.toLocaleTimeString()
        }
      },
      {
        test: /^TimeAgo$/,
        generator: function (g) {
          var h = g.data(l);
          if (h) {
            g = [
              h.getDate(),
              b(h.getDate()),
              ' ',
              d[h.getMonth()]
            ].join('');
            h.getFullYear() < (new Date).getFullYear() && (g += ' ' + h.getFullYear());
            h = ((new Date).getTime() - h.getTime()) / 1000;
            var f = Math.floor(h / 86400);
            return isNaN(f) || 0 > f || 31 <= f ? g : 0 == f && (60 > h && 'just now' || 120 > h && '1 minute ago' || 3600 > h && Math.floor(h / 60) + ' minutes ago' || 7200 > h && '1 hour ago' || 86400 > h && Math.floor(h / 3600) + ' hours ago') || 1 == f && 'Yesterday' || 7 > f && f + ' days ago' || 14 > f && '1 week ago' || 31 > f && Math.ceil(f / 7) + ' weeks ago'
          }
        }
      },
      {
        test: /^ISO8601$/,
        generator: function (g) {
          if (g = g.data(l)) return g.toISOString()
        }
      }
    ],
    k = /^((?:Photo|Portrait)URL)(?:-(\d+)(sq)?)?$/,
    n = /^(Video)(?:-(\d+))?$/,
    q = [
      {
        test: 'color:',
        generator: function (g) {
          var h = g.data(this.name) || this.term;
          if (h) {
            if (!a.color) return h;
            h = a.color(h);
            for (var f in this.attributes) if (f in h && a.isFunction(h[f])) h[f](this.resolveAttr(f, g));
            return a.support.rgba ? 0 == h.a ? Kc : h.rgba()  : h.hex()
          }
          return Kc
        }
      },
      {
        test: 'font:',
        generator: function (g) {
          g = g.data(this.name) || this.term;
          g = void 0 !== g ? g : 'sans-serif';
          a.oe && a.oe(g);
          return g
        }
      },
      {
        test: 'image:',
        generator: function (g) {
          g = g.data(this.name);
          return void 0 !== g ? g : nb
        }
      }
    ],
    r = {
      'lang:By PostAuthorName': 'By {PostAuthorName}',
      'lang:By PostAuthorName 2': 'Posted by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>',
      'lang:Location GeoLocationName': 'Location: <a class="url fn" href="{GeoLocationURL}" itemprop="contentLocation">{GeoLocationName}</a>',
      'lang:No results for SearchQuery': 'No results for: {HTMLEscapedSearchQuery}',
      'lang:No results for SearchQuery2': 'No results for <span class="search_query">{HTMLEscapedSearchQuery}</span>',
      'lang:Show all SearchResultCount': 'Show all {SearchResultCount} results',
      'lang:Posted TimeAgo': 'Posted {TimeAgo}',
      'lang:Posted TimeAgo by PostAuthorName': 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{TimeAgo}</abbr> by {PostAuthorName}',
      'lang:Posted TimeAgo by PostAuthorName 2': 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{TimeAgo}</abbr> by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>',
      'lang:Posted at FormattedTime': 'Posted at <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{12Hour}:{Minutes} {AmPm}</abbr>'
    },
    p = 0,
    v;
    for (; v = e[p]; p++) Q().generator(v.test, v.generator);
    Q().generator(k, function (g) {
      var h = k.exec(this.name),
      f = g.data(h[1]);
      if (f) {
        var m = h[2] || this.resolveAttr('size', g);
        g = 'sq' == h[3] || !!this.resolveAttr('square', g);
        if (m && !isNaN(parseInt(m, 10))) return T.thumbnail(f, parseInt(m, 10), g).replace('\'', '%27')
      }
      return f ? f : nb
    });
    Q().generator(n, function (g) {
      var h = n.exec(this.name),
      f = g.data(h[1]);
      if (f && (g = h[2] || this.resolveAttr('size', g)) && !isNaN(parseInt(g, 10))) {
        var m = parseInt(g, 10),
        t = Math.ceil(m / 16 * 9);
        f = a.tags(f, {
          tag: Tb,
          replace: function (x) {
            return x.attr(Uc, m).attr(Nb, t).encode()
          }
        })
      }
      return f
    });
    Q().generator(/^Summary$/, function (g) {
      var h = this.resolveAttr('text', g);
      if (!h) {
        if (g.data('Summary')) return g.data('Summary');
        h = g.data('PlaintextBody')
      }
      g = this.resolveAttr('length', g) || 300;
      return h && h.substring ? (h = a.trim(h.substring(0, g)), g = h.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/), (g ?
      M().escapeHTML(g[0])  : M().escapeHTML(h)).replace(/\n/g, '<br/>'))  : h
    });
    Q().generator(/^Snippet$/, function (g) {
      var h = this.resolveAttr('text', g);
      if (!h) {
        if (g.data('Snippet')) return M().escapeHTML(g.data('Snippet'));
        h = g.data('PlaintextBody')
      }
      h = M().escapeHTML(h);
      var f = this.resolveAttr('before', g) || 50,
      m = this.resolveAttr('after', g) || 300,
      t = this.resolveAttr('length', g) || 300,
      x = this.resolveAttr('term', g) || '',
      A = this.resolveAttr('class', g) || 'term';
      if (h) {
        if (x && (g = h.toLowerCase().indexOf(x.toLowerCase()), 0 <= g)) {
          var z = h.substr(0, g);
          var L = h.substr(g, x.length),
          F = h.substr(g + x.length, m);
          z.length > f && (g = z.indexOf(' ', z.length - f), z = '...' + (0 <= g ? z.substr(g + 1)  : z.substr(z.length - f)));
          F.length && (g = F.lastIndexOf(' '), F = (0 <= g ? F.substr(0, g)  : F.substr(0, m)) + '...');
          z = z + L + F;
          A && (z = z.replace(new RegExp(x, 'gim'), function (U) {
            return '<span class="' + A + '">' + U + '</span>'
          }))
        }
        z || (z = a.trim(h.substring(0, t)));
        return z
      }
      return h
    });
    Q().generator('lang:', function (g) {
      var h = g.data(this.name);
      return (h = h || r[this.name]) ? h.replace(/{\w+}/g, function (f) {
        return (new ud).init(f).apply(g)
      })  :
      this.term
    });
    for (p = 0; v = q[p]; p++) Q().generator(v.test, v.generator)
  }) (jQuery);
  var T = {
    getImage: function (a, b) {
      if (a) {
        b = $.extend({
        }, T.defaults, b);
        b.N = b.N || Math.min(b.width, b.height);
        for (var c = a, d = a, e = b.wc, k = 0, n; n = T.services[k]; k++) if (n.match(a)) {
          b.wc && n.rawUrl ? c = n.rawUrl(a)  : n.rewriteUrl && (c = n.rewriteUrl(a, b), n.ga ? e = !0 : d = n.rawUrl ? n.rawUrl(a)  : a);
          break
        }
        !e && T.proxy.enabled() && (c = T.proxy.rewriteUrl(d, b));
        return c
      }
    },
    thumbnail: function (a, b, c) {
      return T.getImage(a, {
        N: b,
        Lb: 'undefined' !== typeof c ? c : !0
      })
    },
    full: function (a) {
      return T.getImage(a, {
        wc: !0
      })
    },
    canResize: function (a) {
      if (!a) return !1;
      for (var b = 0, c; c = T.services[b]; b++) if (c.match(a) && c.ga) return !0;
      return T.proxy.enabled()
    },
    defaults: {
      Eg: 100,
      Dg: 100,
      N: null,
      wc: !1,
      Lb: !1
    },
    proxy: {
      enabled: Xc(!1),
      ga: !0,
      match: Xc(!0),
      rewriteUrl: function (a, b) {
        return 'https://www.blogspot.com/thumb?' + $.param({
          image: a,
          size: b.N,
          crop: b.Lb
        })
      },
      rawUrl: Vc()
    },
    services: [
      {
        ga: !0,
        match: function (a) {
          var b = a.match(/(?:bp\.blogspot\.com|ggpht|googleusercontent\.com).*(\/s\d+(?:-[cuh]+)?\/)?/);
          if (0 <= a.indexOf('googleusercontent.com/gadgets')) return !1;
          if (b = (b = b && !a.match(/(\/(?:[sS]\d+-[cuh]?R[cuh]?|S\d+)\/)/)) && a.match(/\.(jpg|jpeg|gif|png|tif|tiff|bmp|tga|heic)/i)) a = R.decode(a),
          a.scheme == Rb && a.query && (b = !!a.params.sz);
          return b
        },
        rewriteUrl: function (a, b) {
          var c = /(\/)(s\d+(?:-[dcuh]+)?)(\/)/;
          b = 's' + b.N + (b.Lb ? '-p' : '');
          var d = '$1' + b + '$3';
          if (a.match(c)) return a.replace(c, d);
          c = a.lastIndexOf('/');
          return [a.slice(0, c),
          '/',
          b,
          a.slice(c)].join('')
        },
        rawUrl: function (a) {
          return this.rewriteUrl(a, {
            N: 1600
          })
        }
      },
      {
        ga: !0,
        match: function (a) {
          return /farm[0-9]+\.static(?:\.)?flickr\.com\/[^\/]+\/[^_]+_[^_\.]+(_[mstzb])?\.jpg/.test(a)
        },
        rewriteUrl: function (a, b) {
          for (var c = [
            {
              P: '_b',
              size: 1024
            },
            {
              P: '_z',
              size: 640
            },
            {
              P: '',
              size: 500
            },
            {
              P: '_m',
              size: 240
            },
            {
              P: '_t',
              size: 100
            },
            {
              P: '_s',
              size: 75
            }
          ], d = c[0].P, e = 0, k; k = c[e]; e++) k.size >= b.N && (d = k.P);
          return a.replace(/(\/[^\/]+\/[^_]+_[^_\.]+)(_[mstzb])?\.jpg/, '$1') + d + '.jpg'
        },
        rawUrl: function (a) {
          return a.replace(/_[mstzb]\.jpg$/, '_b.jpg')
        }
      },
      {
        ga: !0,
        match: function (a) {
          return a.match(/maps\.googleapis\./i)
        },
        rewriteUrl: function (a, b) {
          a = R.decode(a);
          b.N = Math.min(640, b.N);
          var c = (a.params.size || '').split('x'),
          d = parseInt(a.params.zoom, 10) || 1,
          e = parseInt(c[0], 10) || 512;
          c = parseInt(c[1], 10) || 512;
          var k = 180 < e;
          b.Lb ? c = e = b.N : (b = b.N / Math.max(e, c), e = Math.floor(e * b), c = Math.floor(c * b));
          128 > e && k && (b = 128 / e, e = Math.floor(e * b), c = Math.floor(c * b), d--);
          a.size = e + 'x' + c;
          a.zoom = d;
          return a.encode()
        },
        rawUrl: function (a) {
          return this.rewriteUrl(a, {
            N: 640
          })
        }
      },
      {
        ga: !1,
        match: function (a) {
          return a.match(/i[0-9]+\.photobucket.com\/albums\/.*\.jpg$/)
        },
        rewriteUrl: function (a) {
          return a.replace(/\/([^\/]+)$/, '/th_$1')
        },
        rawUrl: function (a) {
          return a.replace(/\/th_([^\/]+)$/, '$1')
        }
      },
      {
        ga: !1,
        match: function (a) {
          return a.match(/i[0-9]+\.tinypic.com\/[^\.]+.jpg$/)
        },
        rewriteUrl: function (a) {
          return a.replace(/\/([^.]+).jpg$/, '/$1_th.jpg')
        },
        rawUrl: function (a) {
          return a.replace(/_th\.jpg$/, '.jpg')
        }
      },
      {
        ga: !1,
        match: function (a) {
          return a.match(/imbx.us\/[^\.]+.(jpg|png)$/)
        },
        rewriteUrl: Vc(),
        rawUrl: Vc()
      },
      {
        ga: !1,
        match: function (a) {
          return a.match(/\.ak\.fbcdn\.net\/.*photos.+_[abnqst]\.jpg$/)
        },
        rewriteUrl: function (a, b) {
          for (var c = [
            {
              P: 'a',
              size: 180
            },
            {
              P: 's',
              size: 130
            },
            {
              P: 't',
              size: 75
            }
          ], d = /_[abnqst]\.jpg$/, e = 0; e < c.length; e++) if (e == c.length - 1 || b.N >= c[e].size) return a.replace(d, '_' + c[e].P + '.jpg')
        },
        rawUrl: function (a) {
          return a.replace(/_[abnqst]\.jpg$/, '_n.jpg')
        }
      }
    ]
  };
  function je(a, b, c) {
    this.name = a;
    this.profileUrl = b;
    this.avatarUrl = c
  };
  function Ge(a, b) {
    this.url = a;
    this.id = b
  }
  Ge.prototype.compareTo = function (a) {
    return a && this.id && this.id == a.id ? 0 : a && this.published && a.published ? this.published.getTime() - a.published.getTime()  : - 1
  };
  Ge.prototype.attachments = function (a) {
    return (void 0 === a ? this.Qa : $.grep(this.Qa, function (b) {
      return b.type == a
    })) || [
    ]
  };
  Ge.prototype.attach = function (a, b) {
    this.Qa || (this.Qa = [
    ]);
    a = a instanceof He ? a : new He(a, b);
    this.Qa.push(a);
    return a
  };
  Ge.prototype.data = function () {
    return $.extend({
      RawValue: this
    }, Ie(this), Je(this))
  };
  function Ie(a) {
    var b = {
    };
    b.ID = a.id;
    b.Permalink = a.url;
    b.HttpPermalink = a.Bc;
    b.Date = a.published;
    b.Body = a.content();
    b.SourceTitle = a.sourceTitle;
    b.Text = !0;
    var c = a.attachments(mc).length;
    a = a.attachments(Rc).length;
    b.Photo = 1 == c;
    b.Photoset = 1 < c;
    b.Video = 0 < a;
    if (M().settings.headless) {
      var d = function (e) {
        var k = R.decode(e.attr(E));
        k.authority = 'blitz.nocrawl.' + k.authority;
        return e.attr(E, k.encode()).encode()
      };
      b.Body = $.tags(b.Body, {
        tag: Rc,
        attr: E,
        replace: d
      });
      b.Body = $.tags(b.Body, {
        tag: Tb,
        attr: E,
        replace: d
      });
      b.Body = $.tags(b.Body, {
        tag: yb,
        attr: E,
        replace: d
      });
      b.Body = $.tags(b.Body, {
        tag: 'script',
        replace: function (e) {
          return e.attr(E) ? d(e)  : ''
        }
      })
    }
    return b
  }
  function Je(a) {
    var b = {
    };
    b.Photos = $.map(a.attachments(mc), function (c) {
      var d = T.full(c.url);
      return T.canResize(d) ? {
        Caption: c.title || a.title,
        LinkURL: d,
        PhotoURL: c.url,
        'PhotoURL-HighRes': d,
        PhotoWidth: c.width,
        PhotoHeight: c.height
      }
       : null
    });
    b.Photos && b.Photos.length && $.extend(b, b.Photos[0]);
    b.Videos = $.map(a.attachments(Rc), function (c) {
      var d = Ke(c.url);
      return {
        Caption: c.title,
        Video: d.embed,
        VideoURL: d.url,
        PhotoURL: d.thumbnail
      }
    });
    b.Videos && b.Videos.length && (b.Video = b.Videos[0].Video, b.VideoURL = b.Videos[0].VideoURL, b.PhotoURL = b.PhotoURL || b.Videos[0].PhotoURL);
    b.Attachments = $.map(a.attachments(), function (c) {
      var d = {
        Caption: c.title,
        URL: c.url,
        Content: c.content
      };
      c.type == mc ? (d.Photo = !0, d.PhotoURL = c.url, d['PhotoURL-HighRes'] = T.full(c.url), d.PhotoWidth = c.width, d.PhotoHeight = c.height)  : c.type == Rc ? (c = Ke(c.url), d.Video = c.embed, d.PhotoURL = c.thumbnail)  : 'article' == c.type && (d.Article = !0);
      return d
    });
    return b
  }
  function Ke(a) {
    var b = /(?:(?:vi?)|(?:\.be)|(?:embed))[=\/]([^\?&]+)/i;
    if (b.test(a)) {
      var c = b.exec(a);
      var d = [
        '<iframe width="500" height="281" src="//www.youtube.com/embed/',
        c[1],
        '?wmode=opaque" frameborder="0" allowfullscreen></iframe>'
      ].join('');
      a = '//www.youtube.com/v/' + c[1];
      c = [
        '//img.youtube.com/vi/',
        c[1],
        '/0.jpg'
      ].join('')
    } else /vimeo/.test(a) && (d = [
      '<iframe width="500" height="281" src="',
      a,
      '" frameborder="0" allowfullscreen></iframe>'
    ].join(''));
    return {
      embed: d,
      url: a,
      thumbnail: c
    }
  };
  function Le(a, b) {
    this.C = a;
    this.bc = - 1;
    this.pageSize = b || 25;
    this.Oa = [
    ];
    this.Pa = [
    ];
    this.hb = !1;
    this.Eb = !0;
    this.Qb = $.throttle(this.Qb);
    this.be = $.proxy(this.qe, this);
    this.Rc = $.proxy(this.pe, this)
  }
  K = Le.prototype;
  K.dispose = function () {
    this.Pa = [
    ];
    this.Oa = [
    ];
    delete this.C;
    delete this.be;
    delete this.Rc;
    $(this).unbind()
  };
  K.items = function () {
    return this.C.items()
  };
  K.resources = function () {
    return [this.C.resource()]
  };
  K.waiting = Wc('hb');
  K.hasNext = function (a) {
    void 0 !== a && (this.Eb = a);
    return 0 != this.Eb || - 1 == this.bc
  };
  K.reset = function () {
    this.bc = - 1
  };
  K.next = function (a) {
    var b = ++this.bc;
    b < this.Oa.length ? a && a(this.Oa[b])  : this.Eb ? (this.Pa.push({
      ha: a,
      index: b
    }), this.hb || this.Vd || this.Qb())  : a && a(null)
  };
  K.Qb = function () {
    var a = this.Kb();
    a && (a.dataType = R.isCrossDomain(a.url) ? 'jsonp' : Zb, a.success = this.be, a.error = this.Rc, this.Zb = [
      (new Date).getTime().toString(36),
      (65536 * (1 + Math.random()) | 0).toString(36)
    ].join('-'), W().notify('fetchstart', this.Zb), $.ajax(a), this.hb = !0)
  };
  K.qe = function (a) {
    W().notify(Cb, this.Zb);
    if (a = this.Wb(a)) this.Oa.push(a),
    $.merge(this.items(), a);
    this.hb = !1;
    Me(this)
  };
  K.pe = function () {
    W().notify(Cb, this.Zb);
    this.hb = !1;
    $(this).trigger('error');
    Me(this)
  };
  function Me(a) {
    a.Vd = !0;
    var b = a.Pa;
    a.Pa = [
    ];
    for (var c = 0, d; d = b[c]; c++) d.index < a.Oa.length ? d.ha && d.ha(a.Oa[d.index])  : a.Eb ? a.Pa.push(d)  : d.ha && d.ha(null);
    0 < a.Pa.length && a.Qb();
    a.Vd = !1;
    delete a.Zb
  }
  K.Kb = Xc(null);
  K.Wb = Xc(null);
  function Ne(a, b) {
    this.url = a;
    this.filter = b;
    this.id = void 0;
    this.baseUrl = this.url
  }
  Ne.prototype.data = function () {
    var a = {
    };
    a.Title = this.title;
    a.Subtitle = a.Description = this.subtitle;
    a.BlogID = this.id;
    M().settings.pages && (a.Pages = $.map(M().settings.pages, function (c) {
      return {
        ID: c.page_id,
        URL: c.url,
        Label: c.title
      }
    }));
    var b = this.baseUrl || this.url || '';
    a.RSS = [
      b,
      '/' == b[b.length - 1] ? '' : '/',
      'feeds/posts/default'
    ].join('');
    return a
  };
  function Oe() {
  }
  Oe.prototype.content = function () {
    return $('<div>' + this.body + Ea)
  };
  function He(a, b) {
    b = b || {
    };
    this.type = a;
    this.url = b.url;
    this.thumbnail = b.thumbnail;
    this.title = b.title;
    this.content = b.content;
    this.width = b.width;
    this.height = b.height
  };
  function Pe(a) {
    this.Be = a;
    this.Ae = [
    ]
  }
  Pe.prototype.items = Wc('Ae');
  Pe.prototype.resource = Wc('Be');
  function Qe(a, b, c, d) {
    this.base(a, c);
    this.filter = b;
    this.baseUrl = d || this.url
  }
  $.inherit(Qe, Ge);
  K = Qe.prototype;
  K.allowComments = !0;
  K.content = function () {
    !this.Ib && this.body && (this.Ib = $.tags(this.body, {
      tag: Tb,
      attr: E,
      attrTest: /\/www.youtube.com\//,
      replace: Re
    }), this.Ib = $.tags(this.Ib, {
      tag: yb,
      replace: Re
    }));
    return this.Ib
  };
  function Re(a) {
    if (a.name == yb) return a.attr('wmode', 'opaque').encode();
    if (a.name == Tb) {
      var b = te(a.attr(E));
      return 'www.youtube.com' == b.authority ? a.attr(E, b.param('wmode', 'opaque').encode()).encode()  : a.full
    }
    return a.full
  }
  K.text = function () {
    this.de || (this.de = $.toText(this.body, 'table'));
    return this.de
  };
  K.summary = function (a) {
    a = a || 300;
    var b = (this.body || '').indexOf(Fa);
    if (0 <= b) return $.toText(this.body.substr(0, b));
    a = $.trim(this.text().substring(0, a));
    return (b = a.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/)) ? b[0] : a
  };
  K.attachments = function (a) {
    this.Qa || (this.Qa = Se(this) || [
    ]);
    return this.base(a)
  };
  function Se(a) {
    var b = [
    ],
    c = /(youtube\.com)|(youtu\.be)\//im,
    d = /(maps\.google\.)/im,
    e = a.title;
    $.merge(b, $.map($.findImages(a.body), function (k) {
      return new He(mc, {
        url: k,
        title: e
      })
    }));
    $.merge(b, $.map($.tags(a.body, {
      attr: E,
      attrTest: c
    }), function (k) {
      k = Ke(k.attr(E));
      return new He(Rc, {
        url: k.url,
        content: k.embed,
        thumbnail: k.thumbnail,
        title: e
      })
    }));
    $.merge(b, $.map($.tags(a.body, {
      tag: Tb,
      attr: E,
      attrTest: function (k) {
        return !c.test(k)
      }
    }), function (k) {
      var n = new He('other', {
        url: k.attr(E),
        content: k.encode()
      });
      if (d.test(k.attr(E))) {
        var q = R.decode(k.attr(E));
        if (q) {
          var r = R.decode('//maps.googleapis.com/maps/api/staticmap'),
          p = Math.min(640, parseInt(k.attr(Uc), 10) || 512);
          k = Math.min(640, parseInt(k.attr(Nb), 10) || 512);
          r.params.center = q.params.ll;
          r.params.zoom = q.params.z;
          r.params.maptype = q.params.u && 'satellite' || q.params.w && 'hybrid' || q.params.f && 'terrain' || q.params.t && 'roadmap' || 'roadmap';
          r.params.sensor = !1;
          r.params.size = p + 'x' + k;
          return [new He(mc, {
            url: r.encode(),
            title: e
          }),
          n]
        }
      }
      return n
    }));
    $.merge(b, $.map($.tags(a.body, {
      tag: yb,
      attr: E,
      attrTest: function (k) {
        return !c.test(k)
      }
    }), function (k) {
      return new He('other', {
        url: k.src,
        content: k.encode()
      })
    }));
    return b
  }
  K.data = function () {
    var a = this.base();
    a.Title = this.title;
    a.PlaintextBody = this.text();
    this.body && 0 <= this.body.indexOf(Fa) && (a.Summary = this.summary());
    this.author && (a.PostAuthorName = this.author.name, a.PostAuthorURL = this.author.profileUrl, a.PostAuthorPortraitURL = this.author.image);
    this.geoLocation && (a.GeoLocationName = this.geoLocation.name, a.GeoLocationLatitude = this.geoLocation.latitude, a.GeoLocationLongitude = this.geoLocation.longitude);
    this.tags && (a.Tags = $.map(this.tags, function (b) {
      return {
        Tag: b
      }
    }), a.TagsAsClasses = $.asClasses(this.tags));
    this.relatedUrl && (a.RelatedURL = this.relatedUrl);
    $.extend(a, Fe.Mf(this));
    return a
  };
  function Te(a, b, c) {
    this.name = a;
    this.latitude = b;
    this.longitude = c
  };
  function Ue(a, b) {
    this.va = [
    ];
    this.ya = [
    ];
    this.xa = 0;
    Ue.prototype.T.apply(this, arguments)
  }
  K = Ue.prototype;
  K.T = function (a, b) {
    var c = [
    ];
    'number' === typeof a ? (this.pageSize = a, c = Array.prototype.slice.call(arguments, 1))  : c = Array.prototype.slice.call(arguments);
    var d = this,
    e;
    $.each(c, function (k, n) {
      $.each($.isArray(n) ? n : [
        n
      ], function (q, r) {
        if (void 0 === e || e > r.pageSize) e = r.pageSize;
        d.add(r)
      })
    });
    this.pageSize = this.pageSize || e || 25
  };
  K.add = function (a) {
    this.va.push({
      index: 0,
      iterator: a
    });
    this.reset();
    return this
  };
  K.dispose = function () {
    delete this.H;
    $.each(this.va, function (a, b) {
      b.iterator.dispose()
    })
  };
  K.items = function () {
    return this.ya.slice(0, this.xa)
  };
  K.waiting = function () {
    return !!this.H || Ve(this)
  };
  function Ve(a) {
    for (var b = 0, c; c = a.va[b]; b++) if (c.iterator.waiting()) return !0;
    return !1
  }
  K.hasNext = function () {
    return this.ya.length >= this.xa + 1 || We(this)
  };
  function We(a) {
    for (var b = 0, c; c = a.va[b]; b++) if (c.iterator.hasNext() || c.iterator.items().length > c.index + 1) return !0;
    return !1
  }
  K.reset = function () {
    this.xa = 0;
    this.ya = [
    ];
    $.each(this.va, function (a, b) {
      b.index = 0;
      b.iterator.reset()
    })
  };
  K.resources = function () {
    for (var a = [
    ], b = 0, c; c = this.va[b]; b++) $.merge(a, c.iterator.resources());
    return a
  };
  K.next = function (a) {
    this.H = a || this.H || H();
    clearTimeout(this.Cc);
    this.Cc = setTimeout($.proxy(this.ad, this), 0)
  };
  K.ad = function () {
    for (var a = !Ve(this); a; ) {
      for (var b = void 0, c = 0, d = 0, e; e = this.va[d]; d++) {
        var k = e.iterator.items() [e.index];
        if (k) (k = k.published && k.published.getTime && k.published.getTime()) ? c < k && (b = e, c = k)  : (b = e, c = Number.MAX_VALUE);
         else if (e.iterator.hasNext()) {
          a = !1;
          break
        }
      }
      a && b ? (this.ya.push(b.iterator.items() [b.index]), b.index++)  : a = !1
    }
    a = We(this);
    (this.ya.length >= this.xa + this.pageSize || !a) && this.H ? (a = Math.min(this.xa + this.pageSize, this.ya.length), b = this.ya.slice(this.xa, a), this.xa = a, a = b.length ? b : null, b = this.H, delete this.H, b && b(a))  : Ve(this) || Xe(this, $.proxy(this.ad, this))
  };
  function Xe(a, b) {
    $.each(a.va, function (c, d) {
      d.iterator.items().length > d.index + 1 || !d.iterator.hasNext() || setTimeout(function () {
        d.iterator.next(b)
      }, 0)
    })
  };
  var ie = $.inherit(Qe);
  ie.prototype.data = function () {
    var a = this.base();
    a.Blogger = !0;
    a.PostID = this.id;
    a.BlogID = this.blogId;
    a.Comments = a.Notes = !!M().settings.comments_enabled && !!this.allowComments;
    a.Comments && (a.CommentCount = a.NoteCount = this.commentCount || 0, a.CommentCountWithLabel = a.CommentCount + ' comment' + (1 != a.CommentCount ? 's' : ''), a.NoteCountWithLabel = a.CommentCountWithLabel, a.IframeComments = '1' == this.mf && !M().settings.disableGComments, a.CommentModerationMode = this.rc);
    a['disable-plusone'] = M().settings.disableGooglePlus;
    if (this.tags) {
      for (var b, c = 0, d; d = W().resources() [c]; c++) d instanceof Ne && d.id == this.blogId && (b = d.baseUrl);
      var e = b || '';
      e += '/' == e[e.length - 1] ? '' : '/';
      e += 'search/label/';
      a.Tags = $.map(this.tags, function (k) {
        return {
          Tag: M().escapeHTML(k),
          URLSafeTag: encodeURIComponent(k),
          TagURL: e + encodeURIComponent(k)
        }
      })
    }
    return a
  };
  var Ye = $.inherit(ie);
  Ye.prototype.data = function () {
    var a = this.base();
    a.PostID = null;
    a.PageID = this.id;
    return a
  };
  function Ce(a) {
    this.tags = a ? a.tags : void 0;
    this.qa = a ? a.qa : void 0;
    this.pa = a ? a.pa : void 0;
    this.query = a ? a.query : void 0;
    this.Gc = a ? a.Gc : void 0;
    this.Dc = a ? a.Dc : void 0;
    this.Sb = a && a.Sb || 'recent'
  };
  function Ze(a, b) {
    this.R = a;
    this.hc = !1;
    this.za = 0;
    this.$a = this.pageSize(b) || 1
  }
  K = Ze.prototype;
  K.pageSize = function (a) {
    'undefined' !== typeof a && (this.$a = parseInt(a, 10), this.$a = 0 < this.$a ? this.$a : 1);
    return this.$a
  };
  K.items = function () {
    return this.R.items().slice(0, this.za)
  };
  K.resources = function () {
    return this.R.resources()
  };
  K.dispose = function () {
    this.H = null;
    this.R.dispose()
  };
  K.waiting = function () {
    return this.R.waiting() || !!this.H
  };
  K.hasNext = function () {
    return this.R.items().length >= this.za + 1 || this.R.hasNext()
  };
  K.reset = function () {
    this.R.reset();
    this.za = 0;
    this.hc = !1
  };
  K.prefetch = function () {
    this.R.next(H())
  };
  K.next = function (a) {
    this.H = a || this.H;
    clearTimeout(this.Cc);
    this.Cc = setTimeout($.proxy(this.We, this), 0)
  };
  K.We = function () {
    if (this.R.items().length >= this.za + 1) {
      var a = Math.min(this.za + this.$a, this.R.items().length),
      b = this.R.items().slice(this.za, a);
      this.za = a;
      a = this.H;
      this.H = null;
      a && a(b)
    } else this.R.waiting() || (this.hc ? (b = this.H, this.H = null, b && b(null))  : this.R.next($.proxy(this.Tf, this)))
  };
  K.Tf = function (a) {
    null == a && (this.hc = !0);
    this.next(null)
  };
  function $e() {
    this.Cg = {
      classic: 'L0201',
      flipcard: 'L0205',
      magazine: 'L0202',
      mosaic: 'L0206',
      sidebar: 'L0203',
      snapshot: 'L0207',
      timeslide: 'L0204'
    };
    this.Af = {
      banner: 'S0012',
      button: 'S0001',
      halfbanner: 'S0007',
      largerectangle: 'S0011',
      leaderboard: 'S0013',
      mediumrectangle: 'S0009',
      skyscraper: 'S0003',
      smallsquare: 'S0006',
      smallrectangle: 'S0005',
      square: 'S0008',
      verticalbanner: 'S0002',
      wideskyscraper: 'S0004',
      largeskyscraper: 'S0022'
    }
  }
  $e.prototype.init = function (a, b, c) {
    this.i = a;
    this.o = c;
    if (this.i.settings.headless) return this;
    var d = this;
    $(this.i).bind('updated.adsense', function () {
      var e = $('.adsense');
      e.adsense && e.adsense({
        beforeRender: $.proxy(d.$e, d)
      })
    });
    return this
  };
  $e.prototype.dispose = function () {
    $(this.i).unbind('.adsense');
    delete this.i;
    delete this.o
  };
  $e.prototype.$e = function (a) {
    var b = this.o && this.o.settings && this.Cg[this.o.settings.name],
    c = this.Af[a.format];
    (b = b && c ? b + '+' + c : b || c) && (a.hostchannel = b);
    this.i && this.i.settings && this.i.settings.analytics_id && (a.analytics_id = this.i.settings.analytics_id)
  };
  function af() {
  }
  af.prototype.init = function (a, b) {
    this.i = a;
    this.j = b;
    if (this.i.settings.headless) return this;
    a = {
      loadMore: a.localize('Load more'),
      loading: a.localize('Loading'),
      loaded: a.localize('No more comments'),
      addComment: a.localize('Add comment'),
      reply: a.localize('Reply'),
      replies: a.localize('Replies'),
      'delete': a.localize('Delete')
    };
    var c = {
      bloggerBase: this.j.settings.blogger_base,
      maxDepth: this.i.settings.comments_mtd,
      messages: a
    };
    $(this.i).bind(Nc, function () {
      $('.blogger-comments').filter(function () {
        return void 0 === $(this).closest(ma).data(db)
      }).each(function () {
        var d = b.find($(this).attr(kb)),
        e = $(this).closest(ma);
        d && e.length && (d = new N.modules.Comments(d, e, c), $(e).data(db, d))
      });
      $('.plus-comments').filter(function () {
        return void 0 === $(this).closest(ma).data(db)
      }).each(function () {
        var d = b.find($(this).attr(kb)),
        e = $(this).closest(ma);
        d && e.length && (d = new N.modules.PlusComments(d, e, c), $(e).data(db, d))
      })
    });
    $(this.i).bind(Nc, function () {
      $('.plus-comment-count').filter(function () {
        return void 0 === $(this).data(Fb)
      }).each(function () {
        var d = b.find($(this).attr(kb));
        $(this).data(Fb, !0);
        new N.modules.PlusCommentCount(this, d)
      })
    });
    return this
  };
  af.prototype.dispose = function () {
    $(this.i).unbind(ma);
    delete this.i;
    delete this.j
  };
  function bf() {
    this.Ga = [
    ]
  }
  K = bf.prototype;
  K.init = function (a) {
    this.i = a;
    if (this.i.settings.headless) return this;
    $(this.i).bind('konami', $.proxy(this.zd, this));
    1 == (new Date).getMonth() && 14 == (new Date).getDate() && setTimeout($.proxy(this.zd, this), 103000);
    $(this.i).bind('cuteoverload', $.proxy(this.rf, this));
    this.i.shortcut('eeyore', function () {
      $('.title').text('eeyore is cute!')
    });
    return this
  };
  K.dispose = function () {
    $(window).unbind('.easter');
    $(this.i).unbind('.easter');
    delete this.i
  };
  K.zd = function () {
    $(window).bind('mousedown.easter', $.proxy(this.Qf, this));
    $(window).bind('click.easter', $.proxy(this.Id, this));
    $(this.i).bind('select.easter', $.proxy(this.Id, this));
    $(this.i).bind('clearselection.easter', $.proxy(this.Lf, this))
  };
  K.Qf = function (a) {
    this.Fa = {
      x: a.pageX,
      y: a.pageY
    }
  };
  K.Id = function (a) {
    a && a.pageX && a.pageY && (this.Fa = {
      x: a.pageX,
      y: a.pageY
    });
    cf(this, !0)
  };
  K.Lf = function () {
    delete this.Fa;
    cf(this, !1)
  };
  K.rf = function (a, b) {
    b && (this.Fa = {
      x: b.x || 0,
      y: b.y || 0
    }, cf(this, !0))
  };
  function cf(a, b) {
    df(a);
    a.Ga = [
    ];
    if (b) for (b = 0; 14 > b; b++) ef(a, 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzIiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0IiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNTMzNDA5MiwtMS42NDM5MjQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gNi4wNTYxODMzLDIuNTg4MDUyMSBDIDMuOTM0NTM2LDIuNTg4MDUyMSAyLjIxMjYyMDUsNC4zMDk4ODIzIDIuMjEyNjIwNSw2LjQzMTQyNCBDIDIuMjEyNjIwNSwxMC43NDczODggNi4wNTYwODU3LDEzLjEyMTAxOCA5LjUzMzQwNzgsMTYuNjk5Nzk2IEMgMTMuMDEwODI2LDEzLjEyMTAxOCAxNi44NTQxOTgsMTAuNzQyNjUgMTYuODU0MTk4LDYuNDMxNDI0IEMgMTYuODU0MTk4LDQuMzA5ODgyMyAxNS4xMzIyODUsMi41ODgwNTIxIDEzLjAxMDYzNCwyLjU4ODA1MjEgQyAxMS40NzE2NzQsMi41ODgwNTIxIDEwLjAzMzg0NSwzLjgzMzI0NSA5LjUzMzQwNzgsNC44MDM5OTYzIEMgOS4wMzc1NTE1LDMuODMzMjQ1IDcuNTk1MTQ2OSwyLjU4ODA1MjEgNi4wNTYxODMzLDIuNTg4MDUyMSB6IgogICAgICAgaWQ9InBhdGg3IgogICAgICAgc3R5bGU9ImZpbGw6I2U2MDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmY2RjZDtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==', {
      K: 100 * (Math.random() - 0.5),
      I: - 100 * Math.random() - 250,
      rb: 8 * (Math.random() - 0.5)
    });
     else ef(a, 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzMzMTEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzEzIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgZD0iTSA0LjU0Njg4LDAuOTY4NzUgQyAyLjQyNTIzLDAuOTY4NzUgMC43MDMxMywyLjY5MDk2IDAuNzAzMTMsNC44MTI1IEMgMC43MDMxMyw5LjExNTYyIDQuNTE1MjcsMTEuNTAxNSA3Ljk4NDM4LDE1LjA2MjUgQyA4LjA3NTEyLDE1LjAwNzUgOC4wODMzNSwxNC45OTAyNCA4LjE3MTg4LDE0LjkzNzUgQyA4LjM0ODMyLDE0Ljc1ODIgOC41MjU2OCwxNC41ODAwNCA4LjcwMzEzLDE0LjQwNjI1IEwgNy42NzE4OCwxMi41NjI1IEwgOC40NTMxMywxMS45Njg3NSBMIDcuMjk2ODgsMTAuMTU2MjUgTCA4LjQ4NDM4LDkuMjE4NzUgTCA3LjM1OTM4LDguNDM3NSBMIDguMzkwNjMsNy4yNSBMIDcuMzI4MTMsNiBMIDguMTcxODgsNS4xNTYyNSBMIDcuMjAzMTMsNC41OTM3NSBMIDguMzI4MTMsMy45Mzc1IEwgOC4wMTU2MywzLjE4NzUgQyA3LjUxOTc3LDIuMjE2NzUgNi4wODU4NCwwLjk2ODc1IDQuNTQ2ODgsMC45Njg3NSB6IgogICAgICAgaWQ9InBhdGgzMzAyIgogICAgICAgc3R5bGU9ImZpbGw6I2U2MDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmY2RjZDtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==', {
      K: - 35,
      I: - 300,
      rb: - 0.9,
      ob: 100
    }),
    ef(a, 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzMzMTEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzEzIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMS40NTMxMywwLjkzNzUgQyA5LjkxNDE3LDAuOTM3NSA4LjQ4NDgyLDIuMTg1NSA3Ljk4NDM4LDMuMTU2MjUgTCA4LjI5Njg4LDMuOTA2MjUgTCA3LjE3MTg4LDQuNTYyNSBMIDguMTQwNjMsNS4xMjUgTCA3LjI5Njg4LDUuOTY4NzUgTCA4LjM1OTM4LDcuMjE4NzUgTCA3LjMyODEzLDguNDA2MjUgTCA4LjQ1MzEzLDkuMTg3NSBMIDcuMjY1NjMsMTAuMTI1IEwgOC40MjE4OCwxMS45Mzc1IEwgNy42NDA2MywxMi41MzEyNSBMIDguNjcxODgsMTQuMzc1IEMgMTEuOTQ5NTMsMTEuMTY0OSAxNS4yOTY4OCw4LjgxMDE5IDE1LjI5Njg4LDQuNzgxMjUgQyAxNS4yOTY4OCwyLjY1OTcxIDEzLjU3NDc4LDAuOTM3NSAxMS40NTMxMywwLjkzNzUgeiBNIDguMTQwNjMsMTQuOTA2MjUgQyA4LjA1MjEsMTQuOTU4OTkgOC4wNDM4NywxNC45NzYyNSA3Ljk1MzEzLDE1LjAzMTI1IEMgNy45NjM0OCwxNS4wNDE4OCA3Ljk3NDAzLDE1LjA1MTg1IDcuOTg0MzgsMTUuMDYyNSBDIDguMDM2MTMsMTUuMDA5MjQgOC4wODg3MywxNC45NTg5OCA4LjE0MDYzLDE0LjkwNjI1IHoiCiAgICAgICBpZD0icGF0aDMyOTYiCiAgICAgICBzdHlsZT0iZmlsbDojZTYwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZjZGNkO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K', {
      K: 35,
      I: - 300,
      rb: 0.9,
      ob: 100
    });
    a.De = setInterval($.proxy(a.Ee, a), 25)
  }
  function ef(a, b, c) {
    c = c || {
    };
    a.Fa || (a.Fa = {
      x: $(window).scrollLeft() + $(window).width() / 2,
      y: $(window).scrollTop() + $(window).height() / 2
    });
    var d = new Image;
    b = {
      node: $(d).attr(E, b).addClass('like-image').css(xb, 'none') [0],
      x: c.x || a.Fa.x,
      y: c.y || a.Fa.y,
      ob: c.ob || 16,
      size: c.size || 25 * Math.random() + 25,
      K: c.K || 0,
      I: c.I || 0,
      Xa: c.Xa || 2,
      Of: c.Xa || 2,
      Ma: c.Ma || 0,
      rb: c.rb || 0
    };
    $(b.node).appendTo(B);
    a.Ga.push(b)
  }
  K.Ee = function () {
    this.Ga = $.grep(this.Ga, function (a) {
      if (a.node) {
        a.x += 0.025 * a.K;
        a.y += 0.025 * a.I;
        a.Ma += 0.025 * a.rb;
        a.Xa -= 0.025;
        a.I += 5;
        if (0 > a.Xa) $(a.node).remove(),
        delete a.node,
        a = !1;
         else {
          var b = a.Xa / a.Of;
          $(a.node).css({
            display: '',
            height: a.size * (1 - b) + a.ob + 'px',
            left: a.x + 'px',
            opacity: b,
            position: Pa,
            top: a.y + 'px',
            '-webkit-transform': yc + a.Ma + tc,
            '-moz-transform': yc + a.Ma + tc,
            '-ms-transform': yc + a.Ma + tc,
            transform: yc + a.Ma + tc,
            width: a.size * (1 - b) + a.ob + 'px',
            'z-index': 10001
          });
          a = !0
        }
        return a
      }
      return !1
    });
    0 == this.Ga.length && df(this)
  };
  function df(a) {
    $.each(a.Ga || [
    ], function (b, c) {
      c.node && $(c.node).remove()
    });
    a.Ga = [
    ];
    clearInterval(a.De)
  };
  function ff() {
  }
  K = ff.prototype;
  K.init = function (a, b) {
    this.i = a;
    this.j = b;
    this.ac = gf(this);
    $(this.i).bind('templates.editor', $.proxy(this.Ge, this));
    $(this.i).bind('updated.editor', $.proxy(this.Za, this));
    $(window).bind('click.editor', $.proxy(this.da, this));
    $(document).bind('keydown.editor', $.proxy(this.Fe, this));
    hf(this);
    return this
  };
  K.dispose = function () {
    $(window).unbind('.editor');
    $(document).unbind('.editor');
    $(this.i).unbind('.editor');
    delete this.i;
    delete this.j
  };
  K.da = function (a) {
    $(a.target).parents().andSelf().filter(ba).length || this.Ea && this.Ea.remove()
  };
  K.Fe = function (a) {
    27 == a.which && this.Ea && this.Ea.remove()
  };
  function hf(a) {
    $.each(a.ac.templates, function (b, c) {
      c.modified && Q().template(c.name, c.custom)
    })
  }
  K.Ge = function () {
    this.Ea && this.Ea.remove();
    if (window.TemplateEditor && Q().template(La)) {
      if (!$('head #template-editor-css').length) {
        var a = $(Q().template('TemplateEditorCSS').apply());
        a.attr('id', 'template-editor-css').addClass('singleton-element');
        $('head').append(a)
      }
      this.Ea = $(Q().template(La).apply(this.ac));
      $(B).append(this.Ea);
      $('#editor-frame .editor-panel').scrollLimit({
        keydown: !1
      });
      $(ca).click(this.Nd).first().click();
      $('#editor-frame .editor-apply').click($.proxy(this.pg, this));
      $('#editor-frame .editor-list .template').click($.proxy(this.Wf, this));
      $('#editor-frame .editor-list .reset').click($.proxy(this.eg, this));
      $(ba).addClass(Xb);
      setTimeout(function () {
        $(ba).removeClass(Xb)
      }, 0)
    }
  };
  K.Wf = function (a) {
    var b = $(a.target).parents().andSelf().filter('.template');
    b.length && b.attr(mb) && ($(da).empty(), this.wa = $.grep(this.ac.templates, function (c) {
      return c.name == b.attr(mb)
    }) [0]) && (this.mb && this.mb.dispose(), this.mb = new window.TemplateEditor($(da)), this.mb.setValue(this.wa.modified ? this.wa.custom || '' : this.wa.source), $(ca).click(this.Nd).last().click(), $(da).scrollLimit({
      keydown: !1
    }), $(this.mb).bind('change', $.proxy(this.fg, this)))
  };
  K.eg = function (a) {
    var b = $(a.target).parents().andSelf().filter('.template');
    if (b.length && b.attr(mb)) return jf(this, b.attr(mb)),
    a.preventDefault(),
    !1
  };
  K.fg = function () {
    var a = this.mb.getValue();
    if (this.wa.source != a) {
      var b = this.wa.name,
      c = kf(this, b);
      c && (c.custom = a, c.modified = !0, $(ea + b + '"]').addClass(eb), Q().template(c.name, c.custom), a = lf(this), a[b] = c.custom, (b = mf()) && window.JSON && b.setItem(nf(this), window.JSON.stringify(a)))
    } else jf(this, this.wa.name)
  };
  K.pg = function () {
    this.j.resources().length && this.i.view(this.j.resources() [0].url)
  };
  K.Nd = function () {
    var a = $(this).siblings('.on').index(),
    b = $(this).index();
    $(this).siblings().removeClass('on');
    $(this).addClass('on');
    $(this).parent().parent().removeClass('page' + a);
    $(this).parent().parent().addClass('page' + b);
    $(this).parent().parent().find('.editor-panel').each(function (c, d) {
      c = 100 * (c - b);
      $(d).css(dc, c + '%')
    })
  };
  function gf(a) {
    var b = {
      templates: [
      ]
    },
    c = Q().B;
    a = lf(a);
    for (var d in c) b.templates.push({
      name: d,
      source: c[d].raw(),
      custom: a[d],
      modified: 'undefined' !== typeof a[d]
    });
    b.templates.sort(function (e, k) {
      return e.name > k.name ? 1 : - 1
    });
    return b
  }
  function kf(a, b) {
    return $.grep(a.ac.templates, function (c) {
      return c.name == b
    }) [0]
  }
  function nf(a) {
    return ((a.i.o && a.i.o.settings ? a.i.o.settings.name : '') || '') + '__templates'
  }
  function lf(a) {
    var b = {
    },
    c = mf();
    c && window.JSON && (a = c.getItem(nf(a))) && (b = window.JSON.parse(a) || {
    });
    return b
  }
  function jf(a, b) {
    var c = kf(a, b);
    c && (delete c.custom, c.modified = !1, Q().template(c.name, c.source), $(ea + b + '"]').removeClass(eb), c = lf(a), delete c[b], (b = mf()) && window.JSON && b.setItem(nf(a), window.JSON.stringify(c)))
  }
  function mf() {
    try {
      return window.localStorage
    } catch (a) {
      return null
    }
  };
  function of() {
    this.Wc = !1;
    this.Dd = 0
  }
  of.prototype.init = function (a, b) {
    this.i = a;
    this.j = b;
    $(this.i).bind('updated.filter', $.proxy(this.Jd, this));
    pf(this);
    return this
  };
  of.prototype.dispose = function () {
    $(this.i).unbind('.filter');
    $(la).unbind('.filter');
    delete this.i;
    delete this.j
  };
  function pf(a) {
    if (!a.Wc) {
      var b = $('input#search');
      b.length && ($(b).bind('keyup.filter', $.proxy(a.Jd, a)), a.Wc = !0)
    }
  }
  of.prototype.Jd = function (a) {
    'updated' == a.type ? (pf(this), $(la).val() && this.j.items().length != this.Dd && this.Xc())  : (clearTimeout(this.yf), this.yf = setTimeout($.proxy(this.Xc, this), 300))
  };
  of.prototype.Xc = function () {
    var a = $(la).val();
    if (a && 0 < a.length) {
      var b = new RegExp(a, 'im'),
      c = $.grep(this.j.items(), function (d) {
        return b.test(d.title) || d.tags && 0 < $.grep(d.tags, function (e) {
          return b.test(e)
        }).length ? !0 : b.test(d.text())
      });
      this.Dd = this.j.items().length;
      this.i.filter(c, a)
    } else this.i.clearFilter()
  };
  function qf() {
    this.Ad = this.Yc = this.Zc = !1;
    this.La = null
  }
  K = qf.prototype;
  K.init = function (a, b) {
    this.i = a;
    !this.i.settings.enableGadgets || this.i.settings.headless || ($(this.i).bind('updated.gadgetdock', $.proxy(this.Za, this)), $(b).bind('loadcomplete.gadgetdock', $.proxy(this.$f, this)));
    return this
  }; // gadgets will show in mobile view now
  K.dispose = function () {
    $(this.i).unbind('.gadgetdock');
    delete this.i
  };
  function rf() {
    var a = Q().template('GadgetDockResizeDetector');
    return a ? $.trim(a.apply())  : ''
  }
  K.Za = function () {
    this.Zc = !0;
    sf(this)
  };
  K.$f = function () {
    this.Yc = !0;
    sf(this)
  };
  function sf(a) {
    !a.Ad && a.Zc && a.Yc && (tf(a), $('html').click($.proxy(a.da, a)), $(window).resize($.proxy(a.$c, a)), setTimeout(function () {
      $(fa).removeClass('gadget-notifying')
    }, 5000), a.Ad = !0)
  }
  K.da = function (a) {
    var b = $(a.target);
    if (b.closest('.gadget-selected .gadget-container').length) a.stopPropagation();
     else {
      var c = this.La;
      if (null != this.La) {
        var d = this.La,
        e = $(uf(d));
        e && ($(e).removeClass(Lb), $(fa).removeClass(Kb), $(oa).remove(), (d = this.i.gadgets() [d]) && d.hide());
        this.La = null
      }
      b = b.closest('.gadget-item');
      if (b.length) {
        a.stopPropagation();
        a = b.attr('data-gadget-id');
        if ((!a || a == c) && (c = this.i.gadgets() [a]) && !c.renderInLightbox) return;
        if ((b = this.i.gadgets() [a]) && b.invoke()) {
          if (b.renderInLightbox) b && (c = this.i.gadgets() [a]) && (b = document.createElement('div'), c.render(b), this.i.notify('lightbox', c.getTitle(), b, $(uf(a))));
           else {
            c = uf(a);
            $(c).addClass(Lb);
            $(fa).addClass(Kb);
            b.show();
            vf(a);
            if (b = $(na, c) [0]) $(b).append(rf()),
            b = $(oa) [0].contentWindow,
            $(b).resize($.proxy(this.$c, this));
            $(c).data('scroll-limit') || ($(c).find('.gadget-container .gadget').scrollLimit(), $(c).data('scroll-limit', !0))
          }
          this.La = a
        }
      }
    }
  };
  K.$c = function () {
    this.La && vf(this.La)
  };
  function vf(a) {
    if ((a = $(uf(a))) && a.length) {
      var b = $('.gadget-title', a),
      c = $(na, a);
      if (b && b.length && c && c.length) {
        var d = Jb,
        e = $(window).height();
        c = b.height() + c.height();
        b = a.offset().top - $(window).scrollTop() + (a.height() - b.height()) / 2;
        c + 27 > e ? d = Ib : b + c + 27 > e && (d = Hb);
        a.toggleClass(Jb, d == Jb).toggleClass(Hb, d == Hb).toggleClass(Ib, d == Ib)
      }
    }
  }
  function wf(a) {
    var b = Q().template('GadgetDockItem');
    return b ? $.trim(b.apply(new P({
      id: a
    })))  : ''
  }
  function xf(a, b) {
    b.showInGadgetDock && $(fa).append(wf(a))
  }
  function uf(a) {
    return $('[data-gadget-id="' + a + '"]') [0]
  }
  function yf(a) {
    var b = Q().template('GadgetDockItemContents');
    if (b) {
      var c = N.l10n && N.l10n[a.getTitle()] ? N.l10n[a.getTitle()] : a.getTitle();
      return $.trim(b.apply(new P({
        title: c,
        icon: a.getIconUrl(),
        'icon-selected': a.getIconSelectedUrl()
      })))
    }
    return ''
  }
  function zf(a, b) {
    a = uf(a);
    $(a).append(yf(b));
    b.render($(na, a) [0])
  }
  function Af(a, b, c) {
    c && c.enabled && (xf(b, c), c.isReady ? zf(b, c)  : $(c).bind('ready', $.proxy(function (d, e) {
      e.enabled ? zf(d, e)  : $(uf(d)).remove()
    }, a, b, c)))
  }
  function tf(a) {
    $(fa).empty();
    for (var b = 0, c; c = a.i.gadgets() [b]; b++) Af(a, b, c)
  };
  function Bf() {
    this.Ha = null;
    this.ed = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i
  }
  K = Bf.prototype;
  K.init = function (a, b) {
    this.i = a;
    this.j = b;
    $(this.i).bind('select.history', $.proxy(this.Je, this));
    $(this.i).bind('clearselection.history', $.proxy(this.Ie, this));
    a = $.proxy(this.bg, this);
    $(window).bind('popstate.history', a).bind('hashchange.history', a);
    return this
  };
  K.dispose = function () {
    $(this.i).unbind('.history');
    $(window).unbind('.history');
    delete this.i;
    delete this.j
  };
  K.Je = function (a, b) {
    if (b && b.url && (this.Ha && (clearTimeout(this.Ha), this.Ha = null), this.Ha = setTimeout($.proxy(this.ke, this, b.url), 1000), b.title)) {
      a = b.title;
      b = R.authority(b.url);
      for (var c = 0, d; d = this.j.resources() [c]; c++) if (b == R.authority(d.url)) {
        a += d.title ? ' | ' + d.title : '';
        break
      }
      document.title = a
    }
  };
  K.Ie = function () {
    this.ke();
    this.j.resources().length && this.j.resources() [0].title && (document.title = this.j.resources() [0].title)
  };
  function Cf(a) {
    return a.j.resources().length && a.j.resources() [0].url ? a.j.resources() [0].url : (a = R.decode()) ? (a.path = '', a.encode(!1, !1))  : document.URL
  }
  K.ke = function (a) {
    var b = R.decode().authority;
    a = R.decode(a || Cf(this));
    a.path = a.path || '/';
    a.scheme = a.scheme || R.decode().scheme;
    a.authority = a.authority || b;
    a.params = $.extend(R.decode().params, a.params);
    var c = this.ed.exec(b),
    d = this.ed.exec(a.authority);
    c && d && c[1] == d[1] && (a.authority = b);
    this.Ob = !0;
    this.Ob = R.rewritePath(a);
    window.location.hash || (this.Ob = !1)
  };
  K.bg = function () {
    this.Ha && (clearTimeout(this.Ha), this.Ha = null);
    if (this.Ob) this.Ob = !1;
     else {
      var a = R.decodePath(),
      b = R.decode(Cf(this));
      a.path = a.path || '/';
      b.path = b.path || '/';
      a.scheme = a.scheme || R.decode().scheme;
      b.scheme = b.scheme || a.scheme;
      b = b instanceof S ? b : new S(b);
      a.encode(!1, !1) == b.encode(!1, !1) ? this.i.clearSelection()  : this.i.select(a.encode(!1, !1))
    }
  };
  function Df() {
    this.wb = !1
  }
  K = Df.prototype;
  K.init = function (a, b) {
    this.i = a;
    this.j = b;
    $(this.i).bind('lightbox.lightbox', $.proxy(this.Le, this));
    $(this.i).bind('select.lightbox clearselection.lightbox', $.proxy(this.qc, this));
    $(window).bind('click.lightbox', $.proxy(this.da, this));
    return this
  };
  K.dispose = function () {
    $(B).removeClass(ec);
    $(document).unbind(pa);
    $(window).unbind(pa);
    $(this.i).unbind(pa);
    delete this.i;
    delete this.j
  };
  K.Ke = function (a) {
    a = $(a.target).parents().andSelf().filter(sa);
    if (a.length) {
      var b = a.find(qa);
      a.toggleClass(Dc, 0 == b.scrollTop())
    }
  };
  K.da = function (a) {
    this.wb && ($(a.target).parents().andSelf().filter('.item, .lightbox-panel').length || this.qc())
  };
  K.Le = function (a, b, c, d) {
    a = $(ha);
    a.length && (this.wb = !1, clearTimeout(this.sb), $(ha).remove(), a = [
    ]);
    a = $($.trim(Q().template('Lightbox').apply(Fe.translate({
      title: b
    })))).prependTo(B);
    var e = a.find(sa);
    e.find('.lightbox-contentwrap').append(c);
    if ((b = d ? $(d)  : null) && b.length) {
      var k = {
        top: e.css(Jc),
        right: e.css(xc),
        bottom: e.css(Wa),
        left: e.css(dc)
      };
      c = b.offset();
      d = $(window).scrollLeft();
      var n = $(window).scrollTop();
      c && (b = {
        top: c.top - n,
        right: $(window).width() - (c.left - d) - b.outerWidth(),
        bottom: $(window).height() - (c.top -
        n) - b.outerHeight(),
        left: c.left - d
      }, e.addClass(Xb).css(b), setTimeout(function () {
        e.removeClass(Xb).css(k)
      }, 0))
    }
    this.wb = !0;
    a.addClass('open');
    e.addClass('current').addClass(Dc);
    e.find(qa).focus().bind(zc, $.proxy(this.Ke, this));
    e.find('.close').bind($a, Ef(this.qc));
    e.find(qa).scrollLimit();
    $(B).addClass(ec);
    this.i.updated()
  };
  function Ef(a) {
    return function (b) {
      b.stopPropagation();
      b.preventDefault();
      a()
    }
  }
  K.qc = function () {
    $(ha).addClass(ab);
    $(B).removeClass(ec);
    clearTimeout(this.sb);
    this.wb = !1;
    this.sb = setTimeout(function () {
      $(ha).remove()
    }, 1000)
  };
  function Ff() {
    this.bd = !1
  }
  Ff.prototype.init = function (a) {
    this.i = a;
    $(a).bind('updated.meta', $.proxy(this.Za, this));
    return this
  };
  Ff.prototype.dispose = function () {
    $(this.i).unbind('.meta');
    delete this.i
  };
  Ff.prototype.Za = function () {
    this.bd || ($('<!-- Yo Dawg... --><meta name="meta" content="meta"/>').appendTo('head'), this.i.settings.headless && $(B).addClass('headless'), this.bd = !0)
  };
  function Gf() {
    this.wd = {
    };
    this.T()
  }
  var Hf = (new Date).getTime();
  Gf.prototype.T = function () {
    var a = window.performance && window.performance.timing;
    a && a.responseStart && a.navigationStart && (this.Qc = a.responseStart);
    this.Qc = this.Qc || Hf || (new Date).getTime()
  };
  Gf.prototype.tick = function (a, b) {
    this.wd[a] = (new Date).getTime() - (b && this.wd[b] || 0) - this.Qc
  };
  function If() {
    this.ge = {
    };
    this.je = {
    };
    this.vb = [
    ];
    this.xb = [
    ];
    this.gb = /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/;
    this.Ac = !1
  }
  var Jf = document.URL;
  K = If.prototype;
  K.init = function (a, b, c) {
    this.i = a;
    this.j = b;
    this.o = c;
    if (this.i.settings.headless) return this;
    a = this.o && this.o.settings && this.o.settings.name;
    this.wf = [
      'blitz',
      a ? 'blitz_' + a.replace(/\s+/g, '_')  : ''
    ].join();
    window._gaq && this.i.settings.analytics_id && window._gaq.push(['_setAccount',
    this.i.settings.analytics_id]);
    $(this.i).bind('viewitem.metrics', $.proxy(this.gg, this));
    $(this.i).bind('select.metrics', $.proxy(this.Ne, this));
    $(this.i).one('clearselection.metrics', $.proxy(this.Me, this));
    $(this.j).bind('fetchstart.metrics', {
      start: !0
    }, $.proxy(this.Md, this));
    $(this.j).bind('fetchend.metrics', {
      end: !0
    }, $.proxy(this.Md, this));
    this.o && ($(this.o).one('initcomplete.metrics', $.proxy(this.Yf, this)), $(this.o).bind('load.metrics', $.proxy(this.ag, this)), $(this.o).bind('rendercomplete.metrics', $.proxy(this.cg, this)));
    a = $.proxy(this.Yd, this);
    $(window).bind('beforeunload', a);
    setInterval(a, 15000);
    return this
  };
  K.dispose = function () {
    this.Yd();
    $(this.i).unbind(ta);
    $(this.j).unbind(ta);
    $(this.o).unbind(ta);
    delete this.i;
    delete this.j;
    delete this.o
  };
  K.Md = function (a, b) {
    var c = Kf(this);
    if (b != (c && c.url)) if (a.data && a.data.start) {
      a = this.gb.test(b) ? Yb : Ra;
      if (a == Ra) {
        if (this.ab) return;
        this.ab = b
      }
      Lf(this, b, a, Oa)
    } else (a = Lf(this, b)) && a.tick('st'),
    this.gb.test(b) && a && a.tick(Oa)
  };
  function Kf(a) {
    for (var b = 0, c; c = a.j.resources() [b]; b++) if (c instanceof Ne) return c
  }
  K.Yf = function () {
    var a = Kf(this);
    a && a.filter || Lf(this, b, 'blogspot');
    var b = R.decode();
    this.gb.test(b.path) || (delete b.params.base_url, Mf(this, b.encode()))
  };
  K.Me = function () {
    var a = Kf(this),
    b = a && a.url;
    b && !a.filter && Mf(this, b)
  };
  K.cg = function () {
    if (this.Ac) {
      var a = this.ab;
      delete this.ab
    } else a = (a = Kf(this)) && a.url,
    this.Ac = !0;
    var b = Lf(this, a);
    b && (b.tick('prt', Oa), Nf(this, a, $(B)))
  };
  K.ag = function () {
    !this.ab && this.Ac && (this.ab = 'prefetched', Lf(this, this.ab, Ra, Oa))
  };
  K.Ne = function (a, b) {
    a = Of(this, b);
    Lf(this, a) || Lf(this, a, Yb, Oa)
  };
  K.gg = function (a, b, c) {
    a = Of(this, b);
    b && b.url && Mf(this, b.url);
    (b = Lf(this, a)) || (b = Lf(this, a, Yb, Oa));
    b && (b.tick('prt'), c = c ? $(c)  : $(B), Nf(this, a, c))
  };
  function Lf(a, b, c, d) {
    var e = $.grep(a.vb, function (k) {
      return k.identifier == b
    });
    if (e && e.length) return e[0] && e[0].timer;
    if (void 0 !== c) {
      if (a.gb.test(b)) {
        if (a.ge[b]) return;
        a.ge[b] = !0
      }
      e = new (window.jstiming && window.jstiming.Timer || Gf);
      e.name = c;
      void 0 !== d && e.tick(d);
      a.vb.push({
        identifier: b,
        timer: e
      });
      return e
    }
  }
  function Pf(a, b) {
    var c = $.grep(a.vb, function (d) {
      return d.identifier == b
    });
    c.length && (a.xb.push(c[0]), a.vb = $.grep(a.vb, function (d) {
      return d.identifier == b
    }, !0))
  }
  function Nf(a, b, c) {
    c && Lf(a, b) && c.fullyLoaded(function () {
      var d = Lf(a, b);
      d && (d.tick('pst', Oa), Pf(a, b))
    })
  }
  function Of(a, b) {
    return (a = a.gb.exec(typeof b == G ? b : b && b.url)) ? a[1] || a[2] : b
  }
  K.Yd = function () {
    if (this.xb.length) {
      var a = $.map(this.xb, function (c) {
        return c.timer
      });
      this.xb = [
      ];
      var b = Kf(this);
      Qf(a, this.wf, {
        blogId: b ? b.id : ''
      })
    }
  };
  function Mf(a, b) {
    var c = R.decode(b).normalize().encode();
    !b || a.je[c] || R.isCrossDomain(c) || (a.je[c] = !0, R.decode(b).path != R.decode(Jf).path && (a = window.location.href.split('/') [0], 'https:' != a || b.toLowerCase().startsWith(a) || (b = b.replace(b.split('/') [0], a)), setTimeout(function () {
      $.ajax({
        type: 'GET',
        async: !0,
        url: R.decode(b).param('dynamicviews', 1).param('v', 0).encode()
      })
    }, 1000)), window._gaq && b && window._gaq.push(['_trackPageview',
    R.decode(b).path]))
  };
  function Rf() {
    this.O = [
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random()
    ];
    this.ja = [
      73,
      13,
      73,
      13,
      59,
      5,
      59,
      5,
      42,
      4,
      42,
      4,
      27,
      9,
      17,
      17,
      10,
      27,
      6,
      38,
      6,
      49,
      8,
      60,
      14,
      71,
      25,
      82,
      45,
      88,
      73,
      83,
      78,
      67,
      63,
      62,
      63,
      62,
      105,
      75,
      117,
      83,
      137,
      80,
      146,
      65,
      145,
      49,
      137,
      37,
      123,
      32,
      108,
      36,
      101,
      46,
      97,
      56,
      100,
      65,
      105,
      75,
      117,
      83,
      180,
      81,
      202,
      78,
      214,
      59,
      208,
      41,
      194,
      32,
      178,
      34,
      169,
      43,
      166,
      55,
      169,
      69,
      180,
      81,
      202,
      78,
      214,
      59,
      256,
      69,
      268,
      52,
      265,
      36,
      246,
      34,
      233,
      46,
      235,
      62,
      256,
      69,
      266,
      88,
      273,
      99,
      267,
      114,
      248,
      120,
      233,
      116,
      226,
      108,
      226,
      100,
      232,
      93,
      244,
      88,
      256,
      81,
      294,
      59,
      294,
      41,
      294,
      23,
      294,
      6,
      294,
      23,
      294,
      41,
      294,
      59,
      300,
      78,
      336,
      52,
      353,
      42,
      343,
      32,
      327,
      35,
      319,
      46,
      318,
      58,
      321,
      70,
      331,
      80,
      348,
      83,
      348,
      83
    ];
    this.Mb = !1;
    this.ub = 1;
    this.fe = !1
  }
  var Sf = document.URL;
  K = Rf.prototype;
  K.init = function (a) {
    this.i = a;
    a.shortcut('nyan', $.proxy(this.qb, this));
    a.shortcut('flag', $.proxy(this.nb, this));
    a.shortcut('catastrophe', $.proxy(this.nc, this));
    a.shortcut('dance', $.proxy(this.ie, this));
    'nyanyanya' == R.decode(Sf).fragment && this.nc();
    'dancenyan' == R.decode(Sf).fragment && this.ie();
    return this
  };
  K.dispose = function () {
    $(ja).U('destroy');
    delete this.ui
  };
  K.nc = function () {
    if (!this.ia) {
      var a = this;
      this.Fb ? (clearInterval(this.Fb), delete this.Fb)  : this.Fb = setInterval(function () {
        0.5 > Math.random() ? a.qb()  : a.nb()
      }, 1000)
    }
  };
  K.ie = function () {
    var a = $(ja);
    this.ia ? (delete this.ia, delete this.ba, Tf(), a.length && a.U(Xa) && $.each(a.U(Xa).extensions(), function (b, c) {
      c.active = !0
    }))  : (this.i.shortcut('moar', $.proxy(this.af, this)), this.i.shortcut('chopchop', $.proxy(this.sf, this)), this.i.shortcut('doodle', $.proxy(this.zg, this)), a.length && a.U(Xa).list().length || (0.5 > Math.random() ? this.qb()  : this.nb(), a = $(ja)), a.length && a.U(Xa) && $.each(a.U(Xa).extensions(), function (b, c) {
      c.active = !1
    }), Uf(this), this.ia = !0, this.ba = Ab, this.X = this.S = 0, this.Ta = this.Ua = this.M = !1)
  };
  K.zg = function () {
    this.M ? this.Ta = !0 : this.Ua = !0
  };
  K.sf = function () {
    if (this.ia) {
      this.ba != fb && (this.Y || (this.Y = 0, this.Ra = - 0.015), this.Z || (this.Z = 1000 * Math.random()), this.S || (this.X = this.S = 0, this.Ta = this.Ua = this.M = !1));
      for (var a = $(ja), b = 0; b < a.U(Xa).list().length; b++) {
        var c = a.U(Xa).list() [b];
        c && (c.attr(gb, !0), c.attr(ic, b), c.Na(0, 0), c.attr(Oc, 0), c.attr(Pc, 0))
      }
      this.ba = fb
    }
  };
  K.af = function () {
    if (this.ia) for (var a = 0; 10 > a; a++) 0.5 > Math.random() ? this.qb()  : this.nb()
  };
  function Tf() {
    for (var a = $(ja).U(Xa), b = 0; b < a.list().length; b++) {
      var c = a.list() [b];
      c.D = c.attr(qc);
      c.a = c.attr(oc);
      c.Aa = c.attr(pc);
      c.uf = !0;
      c.attr(gb, !1);
      c.attr(Sa, !1);
      c.attr($b, 0.5);
      c.attr(cc, 0);
      c.attr(Bc, 10000)
    }
  }
  function Uf(a) {
    a.Fb && a.nc();
    a = $(ja).U(Xa);
    for (var b = 0; b < a.list().length; b++) {
      var c = a.list() [b];
      c.attr(Sa, !1);
      c.attr(qc, c.D);
      c.attr(oc, c.a);
      c.attr(pc, c.Aa);
      c.Tb(0, 0, 0 < c.attr(wb) ? 0 : Math.PI, 0.09);
      c.Na(0, 0)
    }
  }
  K.qb = function () {
    Vf(this, 'data:image/gif;base64,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', 1, 'https://www.prguitarman.com/index.php?id=348')
  };
  K.nb = function () {
    for (var a, b, c = 0, d; d = W().resources() [c]; c++) if (d instanceof Ne) {
      b = d;
      break
    }
    b && (a = 'https://support.google.com/blogger/bin/request.py?' + $.param({
      contact_type: 'main_tos',
      blog_ID: b.id,
      blog_URL: R.decode(b.url).normalize().encode()
    }));
    Vf(this, 'data:image/gif;base64,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', - 1, a)
  };
  function Vf(a, b, c, d) {
    var e = $(ja);
    e.length || (e = $('<div id="nyanyanya"/>').css({
      position: Eb,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: Pb,
      'pointer-events': 'none',
      'z-index': 99999
    }).prependTo(B), e.U({
      update: $.proxy(a.ef, a),
      collision: $.proxy(a.ff, a),
      start: function () {
        $(ja).show()
      },
      stop: function () {
        $(ja).hide()
      }
    }), $(window).bind('mousewiggle', function (n) {
      a.Gb = {
        x: n.clientX,
        y: n.clientY
      };
      clearTimeout(a.hf);
      a.hf = setTimeout(function () {
        delete a.Gb
      }, 2000)
    }), Wf(a));
    var k = e.height() - 100;
    k = Math.floor(Math.random() * k) + 50;
    b = $('<img/>').attr(E, b);
    d && (b = $('<a/>').attr('href', d).wrapInner(b));
    b.css('pointer-events', 'auto');
    d = 0 < c ? - 53 : e.width();
    a.ia && (d = Math.random() * (e.width() - 53), k = - 21);
    e = e.U('add', b, {
      w: 53,
      h: 21,
      x: d,
      y: k
    });
    e.attr(wb, c);
    e.Na(0 < c ? 100 : - 100, 0);
    a.ia && (e.attr(qc, e.D), e.attr(oc, e.a), e.attr(pc, e.Aa), e.Tb(0, 0, 0 < e.attr(wb) ? 0 : Math.PI, 0.09), e.Na(0, 0), e.attr(Sa, a.ba != Ab), c = $(ja).U(Xa), e.attr(gb, !1), e.attr(ic, c.list().length - 1), e.attr($b, 0.5), e.attr(ac, !1), e.uf = !0, a.ba == fb && (a.ba = Ob))
  }
  function Wf(a) {
    a.fe || (window.DeviceOrientationEvent ? window.addEventListener('deviceorientation', function (b) {
      Xf(a, b.gamma, b.beta)
    }, !1)  : window.OrientationEvent && window.addEventListener('MozOrientation', function (b) {
      Xf(a, 90 * b.x, - 90 * b.y)
    }, !1), a.fe = !0)
  }
  function Xf(a, b, c) {
    7 < Math.abs(b) || 7 < Math.abs(c) ? a.jb = {
      angle: b / 90,
      speed: c / 90
    }
     : a.jb && delete a.jb
  }
  K.ef = function (a) {
    if (this.ia) if (this.ba == Ab) {
      var b = $(ja);
      100 > a.list().length && 0.2 > Math.random() && (0.5 > Math.random() ? this.nb()  : this.qb());
      b = b.height() - 50;
      for (var c = 0, d = 0; d < a.list().length; d++) {
        var e = a.list() [d];
        e && (e.attr(Sa) || e.attr(Sa, Yf(e, b)), e.attr(Sa) && (c += 1, e.attr(gb, !1), e.attr(ic, d), e.attr($b, 0.5), e.attr(Pc, 0)))
      }
      100 <= c && (this.ba = Ob, this.Y = 0, this.Ra = - 0.015, this.X = this.S = 0, this.Ta = this.Ua = this.M = !1)
    } else if (this.ba == Ob) {
      b = $(ja);
      c = b.height() - 50;
      for (var k = e = d = 0, n = 0; n < a.list().length; n++) {
        var q = a.list() [n];
        q && (q.attr(gb) ? k += 1 : q.attr(Sa) ? e += 1 : d += 1)
      }
      if (k >= a.list().length) this.ba = fb;
       else for (n = 0; n < a.list().length; n++) (q = a.list() [n]) && !q.attr(gb) && (k = Yf(q, c), 0 > q.D.y ? q.G < b.height() / 2 && (q.attr(bc, !0), q.attr(ac) && (q.attr(Sa, !0), q.attr(gb, !0), q.Na(0, 0), q.attr(Oc, 0), q.attr(Pc, 0)))  : q.attr(bc, !1), k && (q.attr(Sa, !0), d < a.list().length / 2 && Math.random() < 1 / e && (q.attr(Sa, !1), q.attr(ac, 0.7 > Math.random()), q.attr(bc) || (k = q.attr($b) * (1.2 + Math.random()), q.attr($b, k)), q.Na(q.D.x, - q.attr($b)))));
      this.Z || (this.Z = 1000 * Math.random());
      Zf(this, a)
    } else this.ba == fb && Zf(this, a);
     else $f(this, a)
  };
  function Yf(a, b) {
    a.attr(cc) || (a.attr(cc, 0), a.attr(Bc, 10000));
    var c = Math.abs(b - a.G) / 50,
    d = !1;
    0.02 > c && 10 > Math.abs(a.attr(cc) - a.attr(Bc)) && (c = 0, d = !0);
    var e = 0 < a.D.y;
    a.D.y += Math.min(0.1, Math.abs(0.1 * c));
    e != 0 < a.D.y && (a.attr(Bc, a.attr(cc)), a.attr(cc, a.G));
    a.G > b && (a.D.y *= - 1, a.G = Math.min(b, a.G));
    a.D.y *= 0.95;
    d && (a.D.y = 0);
    return d
  }
  function ag(a, b, c, d, e, k, n, q, r, p, v, g, h) {
    var f = b.list() [c];
    f && (f.attr(qb, d), f.attr(tb, e), c = 2 * (c + 2) - 2, f = c + 1, c < b.list().length && (ag(a, b, c, d + n * q * Math.cos(k + p), e + n * q * Math.sin(k + p), k + p, n * g, q, r, p, v, g, h), f < b.list().length && ag(a, b, f, d + - n * r * Math.cos(k - v), e + - n * r * Math.sin(k - v), k - v, - n * h, q, r, p, v, g, h)))
  }
  function Zf(a, b) {
    var c = $(ja);
    c.height();
    var d = Math.min(c.width() / 20, c.height() / 20),
    e = c.width() / 2 - 26.5,
    k = c.height() / 2 - 10.5,
    n = a.Z + 0.1 + 0.018 * Math.cos((0.2 + 0.1 * a.O[0]) * a.Z),
    q = !1;
    if (10000 < n) {
      n = 1 + 10 * Math.random();
      for (var r = 0; 14 > r; r++) a.O[r] = Math.random();
      q = !0
    }
    var p = 3.3 + (0.008923 + 0.0003 * a.O[5]) * n,
    v = 0.2 + (0.006887 + 0.0003 * a.O[6]) * n,
    g = 0.057 * Math.cos(1.5 + (0.0005 + 0.0001 * a.O[1]) * n) * n,
    h = 0.081 * Math.sin(0.5 + (0.0011 + 0.0001 * a.O[2]) * n) * n,
    f = Math.min(e, k) * (0.1 + 0.8 * Math.cos(1.7 + (0.0033 + 0.0003 * a.O[3]) * n)),
    m = (Math.min(e, k) - f) * (0.6 + 0.5 * Math.sin(3.2 + (0.00451 +
    0.0003 * a.O[4]) * n));
    f *= 0.8;
    var t = 0.35 * Math.cos(n * (0.01 + 0.05 * a.O[8])),
    x = 0.35 * Math.sin(n * (0.015 + 0.06 * a.O[9])),
    A = n * (0.037 + 0.07 * a.O[10]),
    z = n * (0.036 + 0.08 * a.O[11]),
    L = 0.65 + 0.2 * Math.sin(n * (0.0175 + 0.045 * a.O[12])),
    F = 0.65 + 0.2 * Math.cos(n * (0.0165 + 0.035 * a.O[13])),
    U = 1,
    J = 1;
    c.width() > c.height() ? U = c.width() / c.height()  : J = c.height() / c.width();
    var ia = 0.4 + 0.3 * Math.sin(0.005 * n);
    0.002 > Math.random() && (a.Mb = !a.Mb);
    if (0.002 > Math.random()) for (r = 0; r < b.list().length / 2; r++) {
      var u = b.list() [r],
      y = b.list() [b.list().length - 1 - r];
      if (u && y) {
        var w = u.attr(ic);
        u.attr(ic, y.attr(ic));
        y.attr(ic, w)
      }
    }
    r = a.Ua || a.Ta;
    (!a.M && 0.0015 > Math.random() || r) && !a.lb && (a.Ra *= - 1, a.lb = !0, u = Math.floor(2 * Math.random()), r ? 0.999 < a.Y ? 2 == a.S ? (a.X = u, a.Ta = !1, a.M = !1)  : (a.X = 2, a.Ua = !1, a.M = !0)  : 2 == a.X ? (a.S = u, a.Ta = !1, a.M = !1)  : (a.S = 2, a.Ua = !1, a.M = !0)  : 0.999 < a.Y ? a.X = 1 - a.S : a.S = 1 - a.X);
    a.lb && (0 > a.Ra && 0.001 > a.Y ? a.lb = !1 : 0 < a.Ra && 0.999 < a.Y && (a.lb = !1), a.lb || (0.999 < a.Y ? a.X = a.S : a.S = a.X));
    a.Y += a.Ra;
    a.Y = Math.max(0, Math.min(1, a.Y));
    u = a.Y;
    y = 1 - u;
    for (r = 0; r < b.list().length; r++) if (w = b.list() [r]) {
      if (w.attr(gb)) {
        var D = Math.cos(p);
        D += D * Math.abs(D);
        D /= 2;
        var I = Math.sin(v);
        I += I * Math.abs(I);
        I /= 2;
        var C = w.attr(ic);
        a.Mb && 0 == r % 2 && (C += 1);
        D = g + 1.7 * Math.PI * D * C;
        I = h + 0.051 * I * C;
        w.attr(sb, e + (U * Math.cos(D) * f + Math.cos(I) * m));
        w.attr(vb, k + (J * Math.sin(D) * f + Math.sin(I) * m))
      }
      a.Mb && 0 == r % 2 && (w.attr(sb, e - (w.attr(sb) - e) - 53), w.attr(vb, k - (w.attr(vb) - k) - 21))
    }
    ag(a, b, 0, t * Math.cos(A), t * Math.sin(A), A, 1, t, x, A, z, L, F);
    ag(a, b, 1, - x * Math.cos( - z), - x * Math.sin( - z), - z, - 1, t, x, A, z, L, F);
    e = 10000000;
    h = - 10000000;
    k = 10000000;
    g = - 10000000;
    for (r = 0; r < b.list().length; r++) if (w = b.list() [r]) e = Math.min(e, w.attr(qb)),
    h = Math.max(h, w.attr(qb)),
    k = Math.min(k, w.attr(tb)),
    g = Math.max(g, w.attr(tb));
    p = 0.1 * c.width() - e;
    v = 0.1 * c.height() - k;
    h = 0.8 * c.width() / (h - e);
    g = 0.8 * c.height() / (g - k);
    for (r = 0; r < b.list().length; r++) (w = b.list() [r]) && w.attr(gb) && (w.attr(qb, p + (w.attr(qb) - e) * h), w.attr(tb, v + (w.attr(tb) - k) * g));
    e = Math.min(0.6 * c.width() / 360, 0.6 * c.height() / 125);
    k = (c.width() - 360 * e) / 2.2;
    c = (c.height() - 125 * e) / 2;
    p = a.ja.length / b.list().length;
    for (r = 0; r < b.list().length; r++) (w = b.list() [r]) && w.attr(gb) && (g = p * w.attr(ic) + 2 * a.Z, v = Math.floor(g), g -= v, h = v % (a.ja.length / 2) * 2, v = (v + 1) % (a.ja.length / 2) * 2, 3 > v ? (0 == v && (h = 0), (1 < a.S || 1 < a.X) && w.attr(Ub, !0))  : w.attr(Ub, !1), w.attr(rb, a.ja[h] + g * (a.ja[v] - a.ja[h])), w.attr(ub, a.ja[h + 1] + g * (a.ja[v + 1] - a.ja[h + 1])), w.attr(ub, c + e * (w.attr(ub) + 15 * Math.sin(a.Z / 4 + w.attr(rb) / 40) * Math.sin(a.Z / 40))), w.attr(rb, k + e * w.attr(rb)));
    e = c = 0;
    v = 1.8 * d;
    p = d / 4;
    for (r = k = 0; r < b.list().length; r++) (w = b.list() [r]) && w.attr(gb) && (k += 1, 1 > a.X ? (g = w.attr(sb), f = w.attr(vb))  : 2 > a.X ? (g = w.attr(qb), f = w.attr(tb))  : (g = w.attr(rb), f = w.attr(ub)), 1 > a.S ? (h = w.attr(sb), m = w.attr(vb))  : 2 > a.S ? (h = w.attr(qb), m = w.attr(tb))  : (h = w.attr(rb), m = w.attr(ub)), w.attr(sb, u * h + y * g), w.attr(vb, u * m + y * f), w.Tb(w.V + 1000 * (w.attr(sb) - w.V), w.G + 1000 * (w.attr(vb) - w.G), 0 < w.attr(wb) ? 0 : Math.PI, 2), f = w.attr(sb) - w.V, g = w.attr(vb) - w.G, w.attr(Oc, w.attr(Oc) + 0.0001 * f), w.attr(Pc, w.attr(Pc) + 0.0001 * g), h = ia, a.M && (h = 1), w.V += w.attr(Oc) * (1 - h), w.G += w.attr(Pc) * (1 - h), 0 < f ? (f = Math.min(f * h, d), w.V += f, w.attr(Ub) && a.M || (c = Math.max(c, f)))  : (f = Math.max(f * h, - d), w.V += f, w.attr(Ub) && a.M || (c = Math.max(c, - f))), 0 < g ? (g = Math.min(g * h, d), w.G +=
    g, w.attr(Ub) && a.M || (e = Math.max(e, g)))  : (g = Math.max(g * h, - d), w.G += g, w.attr(Ub) && a.M || (e = Math.max(e, - g))));
    d = v;
    ia = p;
    a.M && (d *= 3, ia *= 3);
    k > 0.75 * b.list().length && (c + e > d ? a.ub *= 0.96 : c + e < ia && (a.ub *= 1.04));
    q ? a.Z = n : (w = (n - a.Z) * a.ub, a.Z = w + a.Z)
  }
  function $f(a, b) {
    for (var c = 0, d; d = b.list() [c]; c++) {
      var e = d.attr('node');
      if (a.jb) {
        var k = 0.3 * a.jb.angle,
        n = 100 - 200 * a.jb.speed;
        n = Math.max(Math.min(n, 200), 0);
        d.rotate(k);
        d.speed(n)
      }
      a.Gb && d.Tb(a.Gb.x, a.Gb.y, 0 < d.attr(wb) ? 0 : Math.PI, 0.09);
      if (e && (d.attr(cb) || d.attr(zb))) {
        if (d.attr(zb) && !d.attr('lastchance')) {
          d.attr('lastchance', !0);
          break
        }
        e.fadeOut(function () {
          $(this).remove()
        });
        b.remove(d)
      }
    }
  }
  K.ff = function (a, b, c) {
    this.ia || (a = b.Ca(), c = c.Ca(), this.i.notify('cuteoverload', {
      x: Math.round((a.x + c.x) / 2),
      y: Math.round((a.y + c.y) / 2)
    }))
  };
  function bg() {
  }
  bg.kc = 1000;
  K = bg.prototype;
  K.init = function (a, b) {
    this.i = a;
    this.j = b;
    this.i.settings.headless && delete bg.kc;
    $(this.i).bind('select.overview', $.proxy(this.Qe, this));
    $(this.i).bind('clearselection.overview lightbox.overview', $.proxy(this.Oe, this));
    this.Ya = $.proxy(this.i.next, this.i);
    this.Ic = $.proxy(this.i.previous, this.i);
    this.oc = $.proxy(this.i.clearSelection, this.i);
    this.sg = $.proxy(this.Pe, this);
    $(window).bind('click.overview', $.proxy(this.da, this));
    return this
  };
  K.dispose = function () {
    $(B).removeClass(kc);
    $(document).unbind(ua);
    $(window).unbind(ua);
    $(this.i).unbind(ua);
    delete this.i;
    delete this.j
  };
  K.Pe = function (a) {
    a = $(a.target).parents().andSelf().filter('.overview-panel');
    if (a.length) {
      var b = a.find(va);
      a.toggleClass(Dc, 0 == b.scrollTop())
    }
  };
  K.da = function (a) {
    this.yb && ($(a.target).parents().andSelf().filter('.item, .overview-panel').length || this.i.clearSelection())
  };
  K.Qe = function (a, b, c) {
    a = $(ka);
    var d = 0 <= $.inArray(b, this.j.items());
    d &= !this.i.settings.headless;
    !a.length || !a.hasClass(ab) && d || (delete this.yb, clearTimeout(this.sb), $(ka).remove(), a = [
    ]);
    if (d) {
      var e = $($.trim(Q().template('OverviewItem').apply(Fe.translate(b)))).not(':text');
      if (a.length) {
        c = b.compareTo ? b.compareTo(this.yb)  : - 1;
        var k = $('#overview .overview-panel.current');
        if (k.length) {
          if (0 == c) return;
          k.removeClass('current');
          k.addClass(0 > c ? dc : xc);
          e.addClass(0 > c ? xc : dc);
          setTimeout(function () {
            k.remove()
          }, bg.kc || 0)
        }
        e.appendTo(a);
        setTimeout(function () {
          e.removeClass(xc).removeClass(dc)
        }, 0)
      } else {
        a = $($.trim(Q().template('Overview').apply(Fe.translate(b)))).prependTo(B);
        try {
          a.append(e)
        } catch (v) {
          try {
            a.append(e)
          } catch (g) {
            window.console.log(Ia)
          }
        }
        if (c = c ? $(c)  : $('.item[data-id=' + b.id + ']')) {
          var n = {
            top: e.css(Jc),
            right: e.css(xc),
            bottom: e.css(Wa),
            left: e.css(dc)
          };
          d = c.offset();
          var q = $(window).scrollLeft(),
          r = $(window).scrollTop();
          d && (c = {
            top: d.top - r,
            right: $(window).width() - (d.left - q) - c.outerWidth(),
            bottom: $(window).height() - (d.top - r) - c.outerHeight(),
            left: d.left - q
          }, e.addClass(Xb).css(c), setTimeout(function () {
            e.removeClass(Xb).css(n)
          }, 0))
        }
      }
      this.yb = b;
      a.addClass('open');
      e.addClass('current').addClass(Dc);
      e.find(va).focus().bind(zc, this.sg);
      e.find('.next').bind($a, cg(this.Ya));
      e.find('.previous').bind($a, cg(this.Ic));
      e.find('.close').bind($a, cg(this.oc));
      e.find(va).scrollLimit({
        callback: this.ig
      });
      $(B).addClass(kc);
      if ((a = R.decode().fragment) && R.isSamePage(b.url, !0)) {
        if (!/^[a-zA-Z][\w:.-]*$/.test(a)) return;
        var p = e.find('[id=' +
        a + '],[name=' + a + ']').first();
        p.length && setTimeout(function () {
          p[0].scrollIntoView()
        }, 1100)
      }
      this.i.notify('viewitem', b, e);
      this.i.updated()
    }
  };
  function cg(a) {
    return function (b) {
      b.stopPropagation();
      b.preventDefault();
      a()
    }
  }
  K.Oe = function () {
    $(ka).addClass(ab);
    $(B).removeClass(kc);
    delete this.yb;
    clearTimeout(this.sb);
    this.sb = setTimeout(function () {
      $(ka).remove()
    }, bg.kc || 0)
  };
  K.ig = function (a, b) {
    if (a) try {
      var c = (new Date).getTime(),
      d = a.data('ts') || c,
      e = a.data(lc) || c;
      if (0 > b && 2000 > c - d) {
        if (10000 < c - e && !a.data('rewarded')) {
          var k = $('<div class="surprise"/>').css({
            'text-align': Ya,
            position: uc,
            'margin-top': '5000px',
            top: a.css('padding-bottom')
          }).append($('<img style="vertical-align: bottom;"/>').attr(E, 'data:image/png;base64,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'));
          k.one($a, function () {
            a.children(':not(.surprise)').slideUp(1000);
            k.animate({
              'margin-top': 0
            }, 200)
          });
          a.closest(va).append(k);
          a.data('rewarded', !0)
        }
        a.data(lc, e);
        a.data('ts', (new Date).getTime())
      } else a.data(lc, null)
    } catch (n) {
    }
  };
  var dg = 0;
  function eg(a, b) {
    $.zc(function () {
      var c = document.createElement('span');
      c.id = 'comment-count-holder_' + b.id + dg++;
      var d = b.commentCount;
      $(a).text('');
      a.appendChild(c);
      a.parentNode.style.display = '';
      a.parentNode.style.position = Pa;
      a.parentNode.style.left = '-10000px';
      var e = $(a).css('font-family');
      window.gapi.commentcount.render(c.id, {
        count_only: Lc,
        query: b.Bc,
        onclick: null,
        onready: function () {
          c.style.verticalAlign = 'text-top';
          a.parentNode.style.position = '';
          a.parentNode.style.left = ''
        },
        preexisting_count: d,
        view_type: b.me,
        'font-family': e,
        'font-size': $(a).css('font-size'),
        color: $.color($(a).css('color')).hex()
      })
    })
  };
  function fg(a, b, c) {
    this.m = a;
    this.na = $(b);
    this.sa = !1;
    this.settings = $.extend({
    }, {
      bloggerBase: Ba
    }, this.defaults, c);
    this.init()
  }
  fg.prototype.defaults = {
  };
  var gg = document.URL;
  K = fg.prototype;
  K.init = function () {
    var a = this.na.find(za).length,
    b = this.na.attr('data-defer'),
    c = b == Lc || b == Sc;
    if (!M().settings.headless) {
      var d = R.decode(gg);
      d.path == R.decode(this.m.url).path && ('manage' == d.param('google_view_type') && 'FILTERED_PREMOD' == this.m.rc && (this.m.me = 'INBOX_NEWITEMS'), 'gpluscomments' == d.fragment && (this.m.wg = !0));
      if (a) if (this.na.find(za).click($.proxy(this.zb, this)), this.na.find(ya).addClass(Ic).toggle(!1), !c) this.ra = setTimeout($.proxy(this.zb, this), 0);
       else {
        if (b == Sc) {
          var e = this,
          k = 'viewitem.' + this.m.id;
          $(N.ui()).on(k, function (n, q) {
            q.id == e.m.id && /\.*(\/\d{4}\/\d{2}\/[^\/]+)$/.test(R.decode().path) && (e.sa || e.zb(), $(N.ui()).off(k))
          })
        }
      } else this.ra = setTimeout($.proxy(this.load, this), 0);
      return this
    }
  };
  K.zb = function () {
    this.sa ? this.na.find(ya).toggleClass(Ic).slideToggle()  : (this.Nc = !0, this.load())
  };
  K.dispose = function () {
    clearTimeout(this.ra);
    this.na && $(this.na).unbind('.commentview');
    delete this.na;
    delete this.m
  };
  K.items = function () {
    return []
  };
  K.load = function () {
    this.sa || (this.sa = !0, this.render(), this.Nc && this.zb())
  };
  K.render = function () {
    var a = 'comment-holder_' + this.m.id,
    b = R.authority(window.location.href) + R.decode(this.m.url).path,
    c = this.m.Bc,
    d = this.settings.bloggerBase + '/moderate-legacy-comment.g?blogID=' + this.m.blogId,
    e = this.m.me || this.m.rc,
    k = document.getElementById(a),
    n = $.proxy(function () {
      this.m.wg && k.scrollIntoView();
      window.setTimeout($.proxy(this.zf, this), 1050)
    }, this);
    $.zc(function () {
      window.setTimeout(function () {
        var q = $('#' + a).closest('.comment-styler').innerWidth();
        window.gapi.comments.render(a, {
          first_party_property: 'BLOGGER',
          href: b,
          query: c,
          legacy_comment_moderation_url: d,
          view_type: e,
          width: q,
          onready: n
        })
      }, 1000)
    })
  };
  K.zf = function () {
    if (document.createEventObject) {
      var a = document.createEventObject();
      document.documentElement.fireEvent('onresize', a)
    } else a = document.createEvent('HTMLEvents'),
    a.initEvent('resize', !0, !0),
    window.dispatchEvent(a)
  };
  function hg() {
  }
  hg.prototype.init = function (a, b) {
    this.i = a;
    this.j = b;
    if (this.i.o.settings.name != eb) return $(B).bind('click.selfselect', $.proxy(this.da, this)),
    this
  };
  hg.prototype.dispose = function () {
    $(B).unbind('.selfselect');
    delete this.i;
    delete this.j
  };
  hg.prototype.da = function (a) {
    var b = $(a.target).closest('a');
    if (!a.metaKey && b.length) {
      var c = R.decode(b.attr('href'));
      if (c && De(c)) {
        var d = b.closest('*[data-id]').attr(hb);
        if (d && !this.i.settings.filter_permalink) return this.i.select(d, b.get(0)),
        a.preventDefault(),
        a.stopPropagation(),
        !1;
        a = b.attr('data-view-name');
        b = R.decode();
        a ? (b.param(Sc, c.param(Sc)), c = b)  : (b.param(Ua) && 0 < b.param(Ua).length && c.param(Ua, b.param(Ua)), b.param(Sc) && c.param(Sc, b.param(Sc)));
        (c = c.encode()) && window.location.href != c && ge(window.location, c);
        return !1
      }
    }
  };
  function ig() {
    this.fc = !1;
    this.B = {
    }
  }
  K = ig.prototype;
  K.init = function (a, b) {
    this.i = a;
    this.j = b;
    $(this.i).bind('updated.search', $.proxy(this.gd, this));
    this.gd();
    return this
  };
  K.dispose = function () {
    $(this.i).unbind('.search');
    $(la).unbind('.search');
    delete this.i;
    delete this.j
  };
  K.gd = function () {
    this.fc || (this.F = $('input#search'), this.F.length && (this.F.on('keyup.search', $.proxy(this.Pf, this)), this.F.on('focus.search', $.proxy(this.Xf, this)), this.F.on('blur.search', $.proxy(this.Vf, this)), this.fc = !0));
    return this.fc
  };
  K.Pf = function (a) {
    if (13 == a.keyCode) jg(this),
    a.preventDefault();
     else if (27 == a.keyCode) kg(this),
    a.preventDefault();
     else if (38 == a.keyCode || 40 == a.keyCode) {
      if (this.aa) {
        var b = this.aa.find('li'),
        c = b.index(this.aa.find('li.active'));
        c = 38 == a.keyCode ? 0 > c ? b.length - 1 : Math.max(0, c - 1)  : 0 > c ? 0 : Math.min(b.length - 1, c + 1);
        b.removeClass(Qa).eq(c).addClass(Qa)
      }
      a.preventDefault()
    } else this.F.val() && this.F.val() != this.ce && kg(this),
    clearTimeout(this.tg),
    this.tg = setTimeout($.proxy(this.Zd, this), this.B[this.F.val()] ? 0 : 500)
  };
  K.Xf = function (a) {
    this.Zd(a)
  };
  K.Vf = function () {
    var a = this;
    setTimeout(function () {
      kg(a)
    }, 300)
  };
  function jg(a) {
    var b = a.F.val();
    if (b) {
      if (a.aa) {
        var c = a.B[b],
        d = a.aa.find('li.active');
        if (d.length && d.attr(ib) && (c = $.grep(c.items(), function (e) {
          return e.id == d.attr(ib)
        }) [0])) {
          a.i.select(c);
          return
        }
      }
      Ee(b)
    }
  }
  K.Zd = function () {
    var a = this.F.val();
    if (a && 0 < a.length) {
      var b = this.B[a];
      b || (b = this.j.iterator(this.i.settings.blog_url, new Ce({
        query: a,
        Sb: 'best'
      }), 7), this.B[a] = b);
      if (b) {
        b.reset();
        this.F.addClass(Ac);
        var c = this;
        b.next(function (d) {
          if (c.F.val() == a) {
            c.ce = a;
            var e = c.B[a],
            k = N.templates().template('QuickSearch');
            k && (kg(c), d = new P({
              Posts: d
            }), d.scope('SearchQuery', a), d.scope('SearchResultCount', $.valueOrDefault('resource().total', 0, e.C)), e = $(k.apply(d)), c.aa = e, e.appendTo(B), e.on('click.search', $.proxy(c.da, c)), $(window).on('scroll.search, resize.search', $.proxy(c.Rd, c)), c.Rd());
            c.F.removeClass(Ac)
          }
        })
      }
    } else kg(this)
  };
  K.Rd = function () {
    if (this.aa) {
      var a = this,
      b = 0,
      c = 0 < $.grep(this.F.parents().andSelf(), function (e) {
        if ($(e).css(nc) == Eb) return b = e != a.F[0] ? parseInt($(e).css(Jc), 10)  : b,
        !0
      }).length ? this.F.position()  : this.F.offset(),
      d = this.aa.outerWidth();
      $(window).width();
      c = c.top + this.F.outerHeight() + b;
      d = this.F.offset().left + this.F.outerWidth() - d;
      this.aa.css({
        position: Eb,
        top: c,
        left: d
      })
    }
  };
  function kg(a) {
    a.F.removeClass(Ac);
    a.aa && (delete a.ce, a.aa.remove(), delete a.aa, $(window).off('.search'))
  }
  K.da = function (a) {
    this.aa.find('li').removeClass(Qa);
    $(a.target).closest('li').addClass(Qa);
    jg(this)
  };
  function lg() {
    this.Hd = !1;
    this.ra = null;
    this.Sa = [
    ]
  }
  K = lg.prototype;
  K.init = function (a) {
    this.i = a;
    if (this.i.settings.headless) return this;
    $(this.i).bind('updated.sharing', $.proxy(this.Za, this));
    $(window).bind('scroll.sharing', $.proxy(this.Ue, this));
    return this
  };
  K.dispose = function () {
    $(this.i).unbind('.sharing');
    $(window).unbind('.sharing');
    delete this.i
  };
  K.Za = function () {
    var a = this;
    this.Sa = [
    ];
    $('.share-controls').each(function () {
      function b() {
        c.find('.defer').andSelf().removeClass(ob);
        a.Sa.splice($.inArray(c, a.Sa), 1);
        a.Oc()
      }
      var c = $(this);
      c.data(ob) ? (c.one('mouseover', b), a.Sa.push(c))  : c.data('delay') && (c.children().andSelf().addClass('defer delay'), setTimeout(b, c.data('delay') || 0))
    });
    this.$d()
  };
  K.Ue = function () {
    clearTimeout(this.ra);
    this.ra = setTimeout($.proxy(this.$d, this), 300)
  };
  K.$d = function () {
    mg(this);
    this.Oc()
  };
  function mg(a) {
    var b = {
      viewport: ng()
    };
    a.Sa = $.grep(a.Sa, function (c) {
      return og(c, b) ? (c.find('.defer').andSelf().removeClass(ob), !1)  : !0
    })
  }
  function og(a, b) {
    var c = b && b.viewport || ng(),
    d = pg(a);
    if (b = b && b.buffer || 0) d.top -= b,
    d.right += b,
    d.bottom += b,
    d.left -= b;
    return d.top <= c.bottom && d.right >= c.left && d.bottom >= c.top && d.left <= c.right && !a.parents().andSelf().filter(function () {
      return 'none' == $(this).css(xb) || '0' == $(this).css('opacity')
    }).length
  }
  function ng() {
    var a = $(window);
    return {
      top: a.scrollTop(),
      right: a.scrollLeft() + a.width(),
      bottom: a.scrollTop() + a.height(),
      left: a.scrollLeft()
    }
  }
  function pg(a) {
    var b = a.offset();
    return {
      top: b.top,
      right: b.left + a.width(),
      bottom: b.top + a.height(),
      left: b.left
    }
  }
  K.Oc = function () {
    qg(this);
    if (rg(this)) {
      var a = $.valueOrDefault('gapi.platform.go');
      a && a(void 0, 'profile')
    }
    sg();
    tg()
  };
  function rg(a) {
    var b = window.gapi;
    return b && b.plus && b.plusone && b.person && b.page && b.community ? !0 : (a.Hd || (a.Hd = !0, $.zc($.proxy(a.Oc, a))), !1)
  }
  function qg(a) {
    var b = $('.g-follow').filter(function () {
      return !$(this).data(Wb)
    });
    if (b.length && rg(a)) {
      var c = window.gapi;
      b.each(function () {
        var d = $(this).attributes(!1, !0);
        $(this).data(Wb, !0);
        c.follow.render($(this).get(0), d)
      })
    }
  }
  function sg() {
    $('.share-twitter').filter(function () {
      return !$(this).data(Wb) && !$(this).hasClass(ob)
    }).each(function () {
      $(this).data(Wb, !0);
      var a = $(document.createElement(Tb)).attr({
        allowtransparency: Lc,
        frameborder: '0',
        scrolling: 'no',
        src: [
          '//platform.twitter.com/widgets/tweet_button.html?url=',
          encodeURIComponent($(this).data('url')),
          '&count=',
          $(this).data('count') || Qb,
          '&text=',
          encodeURIComponent($(this).data('text')),
          '&size=',
          $(this).data('size') || 'medium'
        ].join('')
      });
      $(this).append(a)
    })
  }
  function tg() {
    $('.share-facebook').filter(function () {
      return !$(this).data(Wb) && !$(this).hasClass(ob)
    }).each(function () {
      $(this).data(Wb, !0);
      var a = $(document.createElement(Tb)).attr({
        allowtransparency: Lc,
        frameborder: '0',
        scrolling: 'no',
        src: [
          '//www.facebook.com/plugins/like.php?',
          $.param({
            href: $(this).data('url'),
            send: Bb,
            layout: $(this).data('layout') || 'button_count',
            action: 'like',
            show_faces: Bb,
            colorscheme: 'light'
          })
        ].join('')
      });
      $(this).append(a)
    })
  };
  function ug() {
    this.kb = '';
    this.Ed = new Date;
    this.lc = {
    }
  }
  K = ug.prototype;
  K.init = function (a) {
    this.i = a;
    $(document).bind('keypress.shortcuts', $.proxy(this.Zf, this));
    $(document).bind('keydown.shortcuts', $.proxy(this.Ve, this));
    return this
  };
  K.dispose = function () {
    $(document).unbind('.shortcuts');
    delete this.i
  };
  function vg(a) {
    return $.map(a, function (b) {
      return String.fromCharCode(b).toLowerCase()
    }).join('')
  }
  K.shortcut = function (a, b) {
    a = $.isArray(a) ? vg(a)  : a;
    null === b ? delete this.lc[a] : this.lc[a] = b
  };
  K.Zf = function (a) {
    return wg(this, a)
  };
  K.Ve = function (a) {
    if ( - 1 !== $.inArray(a.which, [
      27,
      37,
      38,
      39,
      40
    ])) return wg(this, a)
  };
  function wg(a, b) {
    if (/input|textarea|select|option|button/i.test(b.target.tagName)) return !0;
    var c = a.lc || {
    },
    d = String.fromCharCode(b.which).toLowerCase(),
    e = new Date;
    a.kb = 1000 > e - a.Ed ? a.kb + d : d;
    a.Ed = e;
    d = 0;
    for (e = a.kb.length; d < e; d++) {
      var k = a.kb.substr(d);
      if (c[k]) {
        a.kb = '';
        if ($.isFunction(c[k])) c[k]();
         else if (a.i[c[k]]) a.i[c[k]]();
         else a.i.notify(c[k]);
        b.preventDefault();
        return !1
      }
      for (var n in c) if (0 == n.indexOf(k)) return
    }
  };
  function xg(a, b, c) {
    this.m = a;
    this.J = $(b);
    this.Xd = void 0;
    this.settings = $.extend({
    }, {
      bloggerBase: Ba,
      pageSize: 50,
      loadAfter: 2000,
      maxDepth: 1,
      messages: {
      }
    }, this.defaults, c);
    this.m.comments = null;
    this.Ab = !1;
    this.oa = N.data().commentIterator(this.m, this.settings.pageSize);
    this.init()
  }
  xg.prototype.defaults = {
  };
  var yg = document.URL,
  zg = /^comment-form_/,
  Ag = /^c\d+$/;
  K = xg.prototype;
  K.init = function () {
    var a = this.m.comments ? 0 : this.settings.loadAfter || 0,
    b = this.J.find(za).length,
    c = this.J.attr('data-defer'),
    d = c == Lc || c == Sc,
    e = R.decode(yg);
    e.path == R.decode(this.m.url).path && e.fragment && (zg.test(e.fragment) || Ag.test(e.fragment)) && (d = !1, this.Ab = !0);
    M().settings.headless && (d = !1);
    b && this.J.find(za).click($.proxy(this.Bb, this));
    if (b) if (this.J.find(ya).addClass(Ic).toggle(!1), !d) this.ra = setTimeout($.proxy(this.Bb, this), a);
     else {
      if (c == Sc) {
        var k = this,
        n = 'viewitem.' + this.m.id;
        $(N.ui()).on(n, function (q, r) {
          r.id == k.m.id && /\.*(\/\d{4}\/\d{2}\/[^\/]+)$/.test(R.decode().path) && (k.sa || k.Bb(), $(N.ui()).off(n))
        })
      }
    } else this.ra = setTimeout($.proxy(this.load, this), a);
    return this
  };
  K.Bb = function () {
    this.sa ? this.J.find(ya).toggleClass(Ic).slideToggle()  : (this.Nc = !0, this.load())
  };
  K.dispose = function () {
    clearTimeout(this.ra);
    this.J && $(this.J).unbind('.commentview');
    this.oa.dispose();
    delete this.J;
    delete this.m
  };
  K.items = function () {
    return this.oa.items()
  };
  K.load = function (a) {
    this.sa || (this.m.comments ? this.jd(this.m.comments)  : this.oa.waiting() && !1 !== a || !this.oa.hasNext() || (Bg(this, !0), this.oa.next($.proxy(this.jd, this))))
  };
  K.jd = function (a) {
    Bg(this, !1);
    this.sa = !0;
    this.m.comments = a || [
    ];
    this.render(a);
    this.Nc && this.Bb();
    if (this.Ab && !this.J.closest('.no-autoscroll').length) {
      var b = this;
      setTimeout(function () {
        var c = b.Ab ? b.J.find('.comments-replybox, .comment-replybox-thread')  : b.J;
        c.length && c[0].scrollIntoView && c[0].scrollIntoView(!0)
      }, this.Ab ? 250 : 0)
    }
    this.m.commentCount <= this.settings.pageSize && this.J.find('.loadmore').hide()
  };
  function Bg(a, b) {
    void 0 !== b && a.J.toggleClass('loading', b)
  }
  K.render = function (a) {
    if (a) {
      Cg(this);
      var b = this,
      c = this.m.commentCount - b.settings.pageSize,
      d = (window.location.hash || '#').substring(1),
      e,
      k;
      zg.test(d) ? e = d.substring(14)  : Ag.test(d) && (k = d.substring(1));
      d = {
        maxDepth: this.settings.maxDepth
      };
      var n = {
        id: this.m.id,
        data: a,
        loadNext: function (r) {
          b.oa.hasNext() ? b.oa.next(function (p) {
            Bg(b, !1);
            p ? ($.merge(b.m.comments, p), r(p))  : r(null);
            b.settings.pageSize >= c ? b.J.find('.loadmore').hide()  : c -= b.settings.pageSize
          })  : r(null)
        },
        hasMore: function () {
          return b.oa.hasNext()
        },
        getMeta: $.proxy(this.Df, this),
        onReply: $.proxy(this.dg, this),
        initComment: k,
        initReplyThread: e,
        config: d,
        messages: this.settings.messages
      },
      q = $(this.J).find('.comments-content') [0];
      window.goog && window.goog.comments && window.goog.comments.render ? window.goog.comments.render(q, n)  : (window.goog = window.goog || {
      }, window.goog.comments = window.goog.comments || {
      }, window.goog.comments.Gd = window.goog.comments.Gd || [
      ], window.goog.comments.Gd.push(function () {
        window.goog.comments.render(q, n)
      }))
    }
  };
  function Cg(a) {
    if (!a.Yb) {
      var b = a.J.find('.comments-replybox');
      0 < b.length && !b.attr(E) && b.attr(lb) && (a.Yb = b[0], a.Xe = b.attr(lb), b.attr(E, b.attr(lb)))
    }
  }
  K.dg = function (a, b) {
    this.Yb && a !== this.Xd && (document.getElementById(b).insertBefore(this.Yb, null), this.Yb.src = this.Xe + (a ? '&parentID=' + a : ''), this.Xd = a)
  };
  K.Df = function (a, b) {
    return 'iswriter' === a ? (a = this.m, b = b && b.author ? b.author.profileUrl : null, b == (a && a.author ? a.author.profileUrl : null) && null != b ? Lc : Bb)  : 'deletelink' === a ? this.settings.bloggerBase + '/delete-comment.g?blogID=' + this.m.blogId + '&postID=' + b.id : 'deleteclass' === a ? 'item-control blog-admin ' + (b.extensions['blogger.itemClass'] || '')  : null
  };
  function Dg() {
  }
  Dg.md = 1000;
  K = Dg.prototype;
  K.init = function (a, b) {
    this.i = a;
    this.j = b;
    this.i.settings.headless && delete Dg.md;
    a = $.proxy(this.Ze, this);
    $(this.i).bind('select.viewitem', a);
    $(this.i).bind('fetch.viewitem', {
      Kf: !0
    }, a);
    $(this.i).bind('viewitem-show.viewitem', {
      force: !0
    }, a);
    $(this.i).bind('clearselection.viewitem', $.proxy(this.Ye, this));
    return this
  };
  K.dispose = function () {
    $(B).removeClass(Tc);
    $(this.i).unbind('.viewitem');
    delete this.i;
    delete this.j
  };
  K.Ze = function (a, b) {
    var c = !(!a.data || !a.data.Kf),
    d = !(!a.data || !a.data.force);
    if (c || !b.compareTo || 0 != b.compareTo(this.ld)) if (a = 0 == $(Aa).length && !c, this.pc(), d || !(0 <= $.inArray(b, this.j.items())) || this.i.settings.headless) {
      d = c ? Fe.translate({
        Placeholder: !0
      })  : Fe.translate(b);
      var e = $($.trim(Q().template('ViewItem').apply(d))).not(':text');
      e.find('.viewitem-inner').scrollLimit();
      e.find('.close').bind($a, $.proxy(this.pc, this));
      e.toggleClass('new', a);
      $(B).addClass(Tc);
      try {
        $(B).prepend(e)
      } catch (q) {
        try {
          $(B).prepend(e)
        } catch (r) {
          window.console.log(Ia)
        }
      }
      a && setTimeout(function () {
        e.removeClass('new')
      }, 1);
      if ((d = R.decode().fragment) && R.isSamePage(b.url, !0)) {
        if (!/^[a-zA-Z][\w:.-]*$/.test(d)) return;
        var k = e.find('[id=' + d + '],[name=' + d + ']').first();
        k.length && setTimeout(function () {
          k[0].scrollIntoView()
        }, a ? 1000 : 1)
      }
      c || (this.i.notify('viewitem', b, e), this.i.updated(), this.ld = b);
      var n = $.proxy(this.i.clearSelection, this.i);
      $(window).bind('click.viewitem', function (q) {
        $(q.target).parents().andSelf().filter(Aa).length || n()
      })
    }
  };
  K.pc = function () {
    $(B).removeClass(Tc);
    delete this.ld;
    $(Aa).each(function () {
      if (!$(this).hasClass(ab)) {
        $(this).addClass(ab);
        var a = this;
        setTimeout(function () {
          $(a).remove()
        }, Dg.md || 0)
      }
    });
    $(window).unbind('.viewitem')
  };
  K.Ye = function () {
    this.pc()
  };
  function Eg(a) {
    this.enabled = !0;
    this.isReady = !1;
    this.suffix_ = a || '1';
    this.settings_ = {
    };
    this.renderInLightbox = !1;
    this.showInGadgetDock = !0
  }
  K = Eg.prototype;
  K.invoke = Wc('enabled');
  K.show = function () {
    $(this).triggerHandler('show');
    this.onShow()
  };
  K.hide = function () {
    $(this).triggerHandler('hide');
    this.onHide()
  };
  K.init = function (a) {
    this.ui = a;
    this.ready_()
  };
  K.ready_ = function () {
    this.isReady = !0;
    $(this).trigger('ready')
  };
  K.extractGadgetSettings_ = function (a) {
    return (a = a.match(/_WidgetManager\._HandleControllerResult\(.*?,.*?,\{(.*)\}\);/)) ? eval('(function(){ return{' + a[1] + '}; })()')  : null
  };
  K.render = function (a) {
    this.isReady && this.enabled && ($(this).triggerHandler('render', a), $(a).append(this.getContentHtml()), this.ui.updated && this.ui.updated(), $(this).triggerHandler(vc, a), this.onRenderComplete(a))
  };
  K.template = function (a, b) {
    a = Q().template(a);
    b = b && new P(b);
    return a ? $.trim(a.apply(b))  : ''
  };
  K.getTitle = Xc('');
  K.getIconUrl = Xc('');
  K.getIconSelectedUrl = Xc('');
  K.getContentHtml = Xc('');
  K.onRenderComplete = H();
  K.onShow = H();
  K.onHide = H();
  K.requestData = function (a, b) {
    var c = a.settings.widget_settings[b];
    if (c) this.processSettings(c);
     else if ((a = a.resources()) && 0 < a.length && a[0] && a[0].baseUrl) b = {
      url: a[0].baseUrl,
      data: {
        v: '0',
        action: 'initial',
        widgetId: b,
        responseType: 'js'
      },
      dataType: 'text',
      success: $.proxy(this.onSuccess_, this),
      error: $.proxy(this.onError_, this)
    },
    window.__wavt && (b.data.xssi_token = window.__wavt),
    $.ajax(b);
     else this.onError_()
  };
  K.onSuccess_ = function (a) {
    if (a = this.extractGadgetSettings_(a)) this.processSettings(a);
     else this.onError_()
  };
  K.onError_ = function () {
    this.enabled = !1;
    this.ready_()
  };
  K.processSettings = function (a) {
    this.settings_ = a;
    this.ready_()
  };
  function X(a, b, c) {
    this.data = b || W();
    this.ui = c || M();
    this.settings = $.extend({
    }, {
      name: Sc,
      scrollBuffer: 400,
      pageSize: 25,
      infiniteScroll: !0,
      autoselect: !0
    }, this.defaults, a);
    this.Sc = [
    ];
    this.Ld = !1;
    this.async(this.lg)
  }
  K = X.prototype;
  K.defaults = {
  };
  K.shortcuts = [
    {
      chord: 'j',
      action: 'next'
    },
    {
      chord: 'k',
      action: 'previous'
    },
    {
      chord: ':t',
      action: 'templates'
    },
    {
      chord: [
        37
      ],
      action: 'previous'
    },
    {
      chord: [
        39
      ],
      action: 'next'
    },
    {
      chord: [
        27
      ],
      action: 'clearSelection'
    },
    {
      chord: [
        38,
        38,
        40,
        40,
        37,
        39,
        37,
        39,
        98,
        97
      ],
      action: 'konami'
    }
  ];
  K.modules = [
  ];
  K.Ud = !1;
  K.dispose = function () {
    Fg(this)
  };
  K.nameEvent = function (a) {
    return this.settings.name ? a + '.' + this.settings.name : a
  };
  K.bind = function (a, b, c, d) {
    b = this.nameEvent(b);
    if (d) $(a).on(b, d, c);
     else $(a).on(b, c)
  };
  K.async = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
    d = c.shift();
    if ($.isFunction(d)) {
      var e = this;
      setTimeout(function () {
        d.apply(e, c)
      }, 0)
    }
  };
  K.template = function (a, b) {
    return (a = Q().template(a)) ? $.trim(a.apply(this.templateData(b)) || '')  : ''
  };
  K.templateData = function (a) {
    a = 'undefined' !== typeof a ? Fe.translate(a)  : Fe.context();
    this.scope(a);
    return a
  };
  K.scope = H();
  K.onItemClick = function (a) {
    var b = $(a.target);
    b = b.hasClass('item') ? b : b.parents('.item');
    var c = b.attr(hb);
    if (c && !a.metaKey && !($(a.target).is('a') && R.decode($(a.target).attr('href')).authority && R.isCrossDomain($(a.target).attr('href')) && $(a.target).parents().andSelf().filter('.title').length)) return a.stopPropagation(),
    a.preventDefault(),
    this.ui.select(c, b),
    !1
  };
  K.preventMore = function (a) {
    'undefined' !== typeof a && (this.Ud = !!a);
    return this.Ud
  };
  K.maybeMore = function (a) {
    this.preventMore() || this.ui.settings.headless || (a || this.settings.infiniteScroll && this.needMore()) && this.async(this.Sd)
  };
  K.needMore = function () {
    var a = !1;
    if (!this.data.hasNext()) return !1;
    var b = this.settings.infiniteScroll;
    0 <= $.inArray(b, [
      Qc,
      Lc,
      'on',
      !0
    ]) ? b = Qc : b == Qb ? b = Qb : 0 <= $.inArray(b, [
      Bb,
      'off',
      !1
    ]) && (b = 'off');
    if (b && 'off' != b) {
      if (b == Qc) b = $(document).height() - $(window).height() - $(window).scrollTop(),
      a = this.settings.scrollBuffer >= b;
       else if (b == Qb) b = $(document).width() - $(window).width() - $(window).scrollLeft(),
      a = this.settings.scrollBuffer >= b;
       else {
        var c = $(b);
        if (c.length) {
          b = $(window).scrollTop();
          var d = $(window).scrollLeft() + $(window).width(),
          e = $(window).scrollTop() + $(window).height(),
          k = $(window).scrollLeft(),
          n = c.offset();
          if (n) {
            a = n.top;
            var q = n.left + c.width();
            c = n.top + c.height();
            n = n.left;
            a = a <= e && q >= k && c >= b && n <= d
          }
        }
      }
      a || (b = this.ui.current()) && $.inArray(b, this.data.items()) == this.data.items().length - 1 && (a = !0)
    }
    return a
  };
  K.lg = function () {
    if (this.modules) for (var a = 0, b; b = this.modules[a]; a++) this.ui.settings.modules.push(b);
    this.ui.configure().view(this);
    $(this).triggerHandler('preinit');
    this.onPreInit();
    this.async(this.T);
    if (this.shortcuts) for (a = 0; b = this.shortcuts[a]; a++) this.ui.shortcut(b.chord, b.action)
  };
  K.T = function () {
    $(B).addClass(this.settings.name);
    $.support.touch ? $(B).addClass('touch')  : $(B).addClass('notouch');
    this.bind(window, zc, $.proxy(this.ve, this));
    this.bind(window, 'resize', $.proxy(this.ue, this));
    this.settings.autoselect && this.bind(B, $a, $.proxy(this.onItemClick, this), '.item');
    var a = $.proxy(this.se, this);
    this.bind(this.data, fc, function (b, c) {
      a(c)
    });
    this.bind(this.ui, 'select', $.proxy(this.we, this));
    this.bind(this.ui, Za, $.proxy(this.oc, this));
    this.bind(this.ui, Db, $.proxy(this.re, this));
    this.bind(this.ui, 'clearfilter', $.proxy(this.kf, this));
    $(this).triggerHandler('init');
    this.onInit();
    this.async(this.If)
  };
  K.If = function () {
    $(this).triggerHandler('initcomplete');
    this.onInitComplete();
    this.async(this.Sd)
  };
  K.Sd = function () {
    !this.data.waiting() && this.data.hasNext() && !1 !== this.onPreLoad() && ($(this).triggerHandler('preload'), this.async(this.te))
  };
  K.te = function () {
    !1 !== this.onLoad() && ($(this).triggerHandler('load'), $(B).addClass('loading'), this.data.next(parseInt(this.settings.pageSize, 10) || 1))
  };
  K.se = function (a) {
    $(B).removeClass('loading');
    $(this).triggerHandler(fc, [
      a
    ]);
    this.onLoadComplete(a);
    this.async(this.mg, a)
  };
  K.mg = function (a) {
    this.ui.settings.headless && /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/.test(R.decode().path) || (!1 !== this.onPreRender(a) ? ($(this).triggerHandler(rc, [
      a
    ]), this.async(this.qg, a))  : (this.async(this.Tc, a), this.ui.updated()))
  };
  K.qg = function (a) {
    $(this).triggerHandler('render', [
      a
    ]);
    this.onRender(a);
    this.async(this.Tc)
  };
  K.Tc = function (a) {
    this.ui.updated();
    $(this).triggerHandler(vc, [
      a
    ]);
    this.onRenderComplete(a);
    this.Ld || this.data.hasNext() || (this.Ld = !0, this.async(this.tf));
    this.async(this.maybeMore)
  };
  K.tf = function () {
    $(this).triggerHandler('datacomplete');
    this.onDataComplete()
  };
  function Fg(a) {
    if (!1 !== a.onUnload()) {
      $(a).triggerHandler('unload');
      if (a.settings && a.settings.name) {
        $(B).removeClass(a.settings.name);
        var b = '.' + a.settings.name;
        $.each(a.Sc, function (c, d) {
          $(d).off(b)
        });
        delete a.Sc
      }
      delete a.ui;
      delete a.data;
      delete a.settings
    }
  }
  K.ue = function (a) {
    this.onResize(a);
    this.maybeMore()
  };
  K.ve = function (a) {
    this.onScroll(a);
    this.maybeMore()
  };
  K.we = function (a, b) {
    if (!this.ui.settings.headless || this.settings.name == eb) this.onSelect(b)
  };
  K.oc = function () {
    this.onClearSelection()
  };
  K.re = function (a, b, c) {
    this.onFilter(b, c)
  };
  K.kf = function () {
    this.onClearFilter()
  };
  K.ka = H();
  K.Uf = H();
  K.Rb = H();
  K.Kd = H();
  K.onPreInit = X.prototype.ka;
  K.onInit = X.prototype.ka;
  K.onInitComplete = X.prototype.ka;
  K.onPreLoad = X.prototype.ka;
  K.onLoad = X.prototype.ka;
  K.onLoadComplete = X.prototype.Rb;
  K.onPreRender = X.prototype.Rb;
  K.onRender = X.prototype.Rb;
  K.onRenderComplete = X.prototype.Rb;
  K.onDataComplete = X.prototype.ka;
  K.onUnload = X.prototype.ka;
  K.onResize = X.prototype.Kd;
  K.onScroll = X.prototype.Kd;
  K.onSelect = X.prototype.Uf;
  K.onClearSelection = X.prototype.ka;
  K.onFilter = H();
  K.onClearFilter = X.prototype.ka;
  function Gg() {
    this.settings = {
    };
    this.configure(void 0);
    this.Vc = [
    ]
  }
  var Hg;
  function W() {
    Hg || (Hg = new Gg);
    return Hg
  }
  var Ig = [
  ];
  Gg.prototype.notify = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
    d = c.shift(),
    e = this;
    setTimeout(function () {
      $(e).triggerHandler(d, c)
    }, 0);
    return this
  };
  Gg.prototype.configure = function (a) {
    this.settings = $.extend({
    }, Jg, this.settings, a);
    return this
  };
  var Jg = {
    batchSize: 25
  };
  K = Gg.prototype;
  K.open = function (a, b, c) {
    var d = a,
    e = b,
    k = c || this.settings.batchSize;
    arguments.length || (d = R.decode().root(), e = Be());
    if ($.isArray(d)) {
      var n = this;
      var q = new Ue(this.settings.batchSize, $.map(d, function (r) {
        return n.iterator(r, e)
      }))
    } else q = this.iterator(d, e);
    this.L = new Ze(q, k);
    this.Db = new Kg(d);
    return this.L
  };
  K.items = function () {
    return this.L ? this.L.items()  : [
    ]
  };
  K.resources = function () {
    return this.L ? this.L.resources()  : [
    ]
  };
  K.waiting = function () {
    return this.L ? this.L.waiting()  : !1
  };
  K.hasNext = function () {
    return this.L ? this.L.hasNext()  : !1
  };
  K.next = function (a, b) {
    if (this.L) {
      var c,
      d = 0;
      a && ($.isFunction(a) ? c = a : d = parseInt(a, 10));
      b && ($.isFunction(b) ? c = b : d = parseInt(b, 10));
      !isNaN(d) && 0 < d && this.L instanceof Ze && this.L.pageSize(d);
      this.H = c;
      this.L.next($.proxy(this.Ce, this))
    }
  };
  K.reset = function () {
    this.L && this.L.reset()
  };
  K.Ce = function (a) {
    this.notify(fc, a);
    this.H && (this.H(a), delete this.H)
  };
  K.find = function (a) {
    if (a) {
      var b = /\./.test(a);
      b && (a = R.decode(a).encode(!1, !1));
      var c = function (d) {
        return a == (b ? d.url : d.id)
      };
      if ((c = $.grep(this.items(), c).concat($.grep(this.Vc, c))) && 0 < c.length) return c[0]
    }
  };
  K.iterator = function (a, b, c) {
    for (var d = 0, e; e = Ig[d]; d++) if (e.owns(a)) return e.iterator(a, b, c);
    if (Lg && Lg.owns(a)) return Lg.iterator(a, b, c)
  };
  K.post = function (a, b) {
    var c;
    if (c = this.Db) {
      c = this.Db;
      b = $.proxy(this.yd, this, b);
      var d = [
        c.le,
        '/feeds/posts/default'
      ].join('');
      var e = {
        alt: Zb,
        v: 2,
        dynamicviews: 1
      };
      if (/^\d+$/.test(a)) d += '/' + a;
       else {
        var k = Mg(a);
        '/' != k && (e.path = k)
      }
      R.decode().scheme == Rb && (e.rewriteforssl = !0);
      d = {
        type: 'GET',
        url: d + '?' + $.param(e)
      };
      c = Ng(c, a, 'item', d, b)
    }
    return !!c
  };
  K.page = function (a, b) {
    var c;
    if (c = this.Db) {
      c = this.Db;
      b = $.proxy(this.yd, this, b);
      var d = Og(c, a);
      if (d) b && b(d),
      c = !1;
       else {
        d = [
          c.le,
          '/feeds/pages/default'
        ].join('');
        var e = {
          alt: Zb,
          v: 2,
          dynamicviews: 1
        };
        R.decode().scheme == Rb && (e.rewriteforssl = !0);
        /^\d+$/.test(a) && (d += '/' + a);
        d = {
          type: 'GET',
          url: d + '?' + $.param(e)
        };
        c = Ng(c, a, Ec, d, b)
      }
    }
    return !!c
  };
  K.yd = function (a, b) {
    b && this.Vc.push(b);
    a(b)
  };
  K.commentIterator = function (a, b) {
    return new Pg(new Pe(a), b || this.settings.batchSize)
  };
  function Qg() {
    this.Ja = [
    ];
    this.xc = [
    ];
    this.B = {
    };
    this.vg = (new ug).init(this);
    this.configure(void 0)
  }
  var Rg,
  Sg = {
    modules: [
      $e,
      af,
      bf,
      ff,
      of,
      qf,
      Bf,
      Df,
      Ff,
      If,
      Rf,
      ig,
      hg,
      lg
    ],
    showWelcome: !0,
    enableGadgets: !0
  };
  function M() {
    Rg || (Rg = new Qg, Rg.j = W());
    return Rg
  }
  K = Qg.prototype;
  K.dispose = function () {
    this.removeModules();
    $(this).unbind();
    return this
  };
  function Tg(a, b) {
    a.Xb ? a.Xb.push(b)  : (a.Xb = [
      b
    ], a.he = setInterval($.proxy(a.jf, a), 100))
  }
  K.jf = function () {
    (new he).get().ready && (clearInterval(this.he), $.each(this.Xb, function (a, b) {
      b()
    }), delete this.Xb, delete this.he)
  };
  K.configure = function (a) {
    var b = (new he(a)).get();
    b.ready || Tg(this, $.proxy(this.configure, this, a));
    this.settings = $.extend({
    }, Sg, this.settings, b);
    this.j && this.j.configure(this.settings);
    return this
  };
  K.cache = function (a, b) {
    if (void 0 !== b) return this.B = this.B || {
    },
    this.B[a] = b,
    this;
    if (this.B) return this.B[a]
  };
  K.shortcut = function (a, b) {
    this.vg.shortcut(a, b)
  };
  K.addModule = function (a, b) {
    if (a) {
      for (var c = 0, d; d = this.Ja[c]; c++) if (a.constructor === d.constructor) if (b) {
        this.removeModule(d);
        break
      } else return this;
      this.Ja.push(a);
      a.init && a.init(this, this.j, this.o)
    }
    return this
  };
  K.removeModules = function () {
    $.each(this.Ja, function (a, b) {
      b && b.dispose && b.dispose()
    });
    this.Ja = [
    ]
  };
  K.removeModule = function (a) {
    a && (a.dispose && a.dispose(), this.Ja = $.grep(this.Ja, function (b) {
      return b === a
    }, !0));
    return this
  };
  function Ug(a, b) {
    a.xc = [
    ];
    var c = a.settings.widget_ids || [
    ];
    c = c.concat(b || [
    ]);
    b = 0;
    for (var d = c.length; b < d; b++) {
      var e = N.gadgets().create(c[b]);
      if (e) {
        var k = a;
        k.settings.enableGadgets && e && (k.xc.push(e), e.init && e.init(k, k.j, k.o))
      }
    }
  }
  K.gadgets = Wc('xc');
  K.register = function (a, b) {
    !1 === b || a.prototype instanceof X || (a.prototype = $.extend({
    }, X.prototype, a.prototype));
    this.viewType_ = a;
    return this
  };
  K.localize = function (a, b) {
    if (a = N.l10n && N.l10n[a] || a) {
      var c = b instanceof P ? b : new P(b || '');
      a = a.replace(/{\w+}/g, function (d) {
        return (new ud).init(d).apply(c)
      })
    }
    return a
  };
  K.view = function (a, b) {
    if (!(this.settings && this.settings.ready || (new he).get().ready)) return Tg(this, $.proxy(this.view, this, a, b)),
    this;
    var c,
    d,
    e = this;
    a && (typeof a === G || $.isArray(a) ? d = a : c = a);
    b && (typeof b === G || $.isArray(a) ? d = b : c = b);
    d = d || this.settings.blog_url || R.decode().root();
    if (!c && d) {
      this.o && this.o.dispose();
      if (!Vg(this)) return;
      this.j.open(d, Be());
      this.j.next(function () {
        e.j.reset();
        e.o = new e.viewType_
      })
    } else c && (this.o = c, this.j = this.o.data, this.Ja.length || $.each(this.settings.modules, function (k, n) {
      e.addModule(new n)
    }));
    this.settings.enableGadgets && Ug(this, 0 == this.gadgets().length ? [
      'Subscribe'
    ] : [
    ]);
    this.B = {
    };
    this.ea = - 1;
    delete this.jc;
    return this
  };
  function Vg(a) {
    if (a.settings.error) {
      var b = Q().template('ErrorMessage');
      b && ($(B).children().not(wa).remove(), $(B).append(b.apply(Fe.translate(a.settings.error))))
    } else {
      if ($('#injected-iframe').length) return a.ui.settings.headless;
      a.settings.showWelcome && (b = Q().template('Welcome')) && ($(B).children().not(wa).remove(), $(B).append(b.apply(Fe.context())));
      return !0
    }
  }
  K.current = function () {
    if (0 <= this.ea && this.ea < this.j.items().length) return this.j.items() [this.ea];
    if (this.jc) return this.jc
  };
  K.hasPrevious = function () {
    return 0 < this.j.items().length && 0 < this.ea
  };
  K.hasNext = function () {
    var a = this.j.items().length;
    return 0 < a && (this.ea < a.length - 1 || this.j.hasNext())
  };
  K.next = function () {
    var a = this.Ya();
    if ( - 1 != a) return a < this.j.items().length ? this.select(this.j.items() [this.ea = a])  : this.j.hasNext() && !this.j.waiting() && this.o.maybeMore(!0),
    this
  };
  K.Ya = function () {
    var a = this.cache(Ma);
    if (a) {
      var b = $.inArray(this.current(), a);
      return $.inArray(a[Math.min(a.length - 1, b + 1)], this.j.items())
    }
    return this.ea + 1
  };
  K.previous = function () {
    var a = this.Ic();
    0 <= a && a < this.j.items().length && this.select(this.j.items() [this.ea = a]);
    return this
  };
  K.Ic = function () {
    var a = this.cache(Ma);
    if (a) {
      var b = $.inArray(this.current(), a);
      return $.inArray(a[Math.max(0, b - 1)], this.j.items())
    }
    return Math.max(0, this.ea - 1)
  };
  K.select = function (a, b) {
    var c = this.settings.pageType;
    if (void 0 === a) if (this.settings.preview) a = this.settings.preview;
     else if (c == Ec || 'item' == c) this.settings.permalinked = !0,
    this.settings.pageId ? a = this.settings.pageId : this.settings.postId && (a = this.settings.postId);
    if (void 0 === a) {
      var d = this.j.resources().length && this.j.resources() [0].url;
      d && !R.isSamePage(d) && (d = R.decode(), '/' != d.path && (a = d.encode(!1, !1), this.settings.permalinked = !0))
    }
    var e;
    'number' == typeof a || typeof a == G ? e = this.find(a)  : a && (e = a);
    if (e) Wg(this, e, b);
     else if (a && !1 !== b) {
      b && (b = $(b)) && b.attr(jb) && (c = 'page' == b.attr(jb) ? Ec : 'item');
      var k = this;
      b = function (n) {
        n && Wg(k, k.find(n.id) || n)
      };
      c == Ec ? this.j.page(a, b)  : this.j.post(a, b)
    }
    return this
  };
  function Wg(a, b, c) {
    var d = $.inArray(b, a.j.items());
    a.ea = 0 <= d ? d : a.ea;
    a.jc = 0 <= d ? void 0 : b;
    !1 !== c && a.notify('select', b, c)
  }
  K.clearSelection = function () {
    this.settings.permalinked = !1;
    return this.notify(Za)
  };
  K.find = function (a) {
    return this.j.find(a)
  };
  K.filter = function (a, b) {
    a && this.cache(Ma, a).notify(Db, a, b);
    return this
  };
  K.clearFilter = function () {
    return this.cache(Ma, null).notify('clearfilter', this.j.items())
  };
  K.updated = function () {
    return this.notify('updated', this.j.items())
  };
  K.notify = function (a, b) {
    var c = Array.prototype.slice.call(arguments),
    d = c.shift(),
    e = this;
    setTimeout(function () {
      $(e).triggerHandler(d, c)
    }, 0);
    return this
  };
  K.escapeHTML = function (a) {
    return a && a.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&#39;').replace(/`/g, '&#96;').replace(/"/g, '&quot;') || ''
  };
  function Kg(a) {
    this.le = a;
    this.fb = [
    ]
  }
  function Ng(a, b, c, d, e) {
    if (d) {
      var k = 0 < $.grep(a.fb, function (n) {
        return n.identifier == b
      }).length;
      a.fb.push({
        ha: e,
        identifier: b
      });
      if (k) return !0;
      d.context = {
        self: a,
        identifier: b,
        pageType: c
      };
      d.dataType = R.isCrossDomain(d.url) ? 'jsonp' : Zb;
      d.success = a.ye;
      d.error = $.proxy(a.xe, a);
      W().notify('fetchstart', d.identifier);
      $.ajax(d);
      return !0
    }
    if (e) return e(null),
    !1
  }
  Kg.prototype.list = function (a) {
    if (this.mc) a && a(this.mc);
     else {
      var b = this;
      $.ajax({
        type: 'GET',
        url: '//www.blogger.com/feeds/default/blogs?v=2&alt=json',
        dataType: 'jsonp',
        success: function (c) {
          b.mc = Xg(c);
          a && a(b.mc)
        },
        error: function () {
          a && a(null)
        }
      })
    }
  };
  Kg.prototype.ye = function (a) {
    this.self && this.identifier && (W().notify(Cb, this.identifier), this.self.ng.call(this.self, a, this.identifier, this.pageType))
  };
  Kg.prototype.xe = function () {
    $(this).trigger('error')
  };
  Kg.prototype.ng = function (a, b, c) {
    c == Ec ? a && a.entry ? a = Yg(a.entry)  : (a && a.feed && (this.Od = (a = Zg(a)) && a.items), a = Og(this, b))  : a = a && a.entry ? Yg(a.entry)  : a && a.feed && 1 == a.feed.entry.length ? Zg(a).items[0] : void 0;
    if (a) {
      c = this.fb;
      this.fb = [
      ];
      for (var d = 0, e; e = c[d]; d++) e.identifier == b ? e.ha(a)  : this.fb.push(e)
    }
  };
  function Og(a, b) {
    if (a.Od) return (a = $.grep(a.Od, function (c) {
      if (/^\d+$/.test(b)) return c.id == b;
      var d = Mg(b);
      c = Mg(c.url);
      return d == c
    })) && a[0]
  }
  function Mg(a) {
    var b = W().settings.blog_url;
    if (0 == a.indexOf(b)) return a = a.replace(b, ''),
    '/' == b[b.length - 1] && (a = '/' + a),
    a;
    b = R.decode(a).root();
    return a.replace(b, '')
  };
  function $g() {
    this.T()
  }
  var ah = {
    blogger_base: 'https://www.blogger.com'
  };
  $g.prototype.owns = function (a) {
    a = new S(a);
    return a.scheme && 'http' != a.scheme && a.scheme != Rb ? !1 : !0
  };
  $g.prototype.iterator = function (a, b, c) {
    bh();
    c = c || W().settings.batchSize;
    return new ch(new Pe(new Ne(a, b)), c)
  };
  $g.prototype.T = function () {
    bh();
    Q().converter(ie, this.rd);
    Q().converter(Ye, this.rd)
  };
  $g.prototype.rd = function (a, b) {
    a.Ba || (a.Ba = a.data());
    b.scope(a instanceof Ye ? 'Page' : 'Post', a.Ba);
    return a.Ba
  };
  function bh() {
    for (var a in ah) W().settings[a] || (W().settings[a] = ah[a])
  }
  var Lg = new $g;
  function Pg(a, b) {
    Le.call(this, a, b || 50)
  }
  Pg.prototype = $.extend({
  }, Le.prototype, Pg.prototype);
  Pg.prototype.Kb = function () {
    var a = W().settings,
    b = [
      a['private'] || a.hasCustomDomain && R.decode().scheme == Rb ? a.blogger_base + '/feeds/' + a.blog_id + '/' : a.blog_url + 'feeds/',
      this.C.resource().id,
      '/comments/default'
    ].join(''),
    c = {
      alt: Zb,
      v: 2,
      dynamicviews: 1,
      orderby: sc,
      reverse: Bb,
      'max-results': this.pageSize
    };
    3 == a.feeds_api && (c.proxy_feed = !0);
    this.Uc && (c['published-min'] = (new Date(this.Uc)).toISOString());
    R.decode().scheme == Rb && (c.rewriteforssl = !0);
    return {
      type: 'GET',
      url: b + '?' + $.param(c)
    }
  };
  Pg.prototype.Wb = function (a) {
    if (a && a.feed) {
      var b = {
      };
      b.results = dh(a.feed);
      b.comments = [
      ];
      if (a.feed.entry) for (var c = 0, d; d = a.feed.entry[c]; c++) b.comments.push(eh(d));
      a = b
    } else a = void 0;
    if (b = a && a.comments && a.comments.length) this.Uc = parseInt(a.comments[a.comments.length - 1].timestamp) + 1;
    c = this.C.resource() || 0;
    (!b || a.results.startIndex + a.results.pageSize > c) && this.hasNext(!1);
    return a && a.comments
  };
  function Zg(a) {
    if (a && a.feed) {
      var b = {
      };
      b.Cb = fh(a.feed);
      b.results = dh(a.feed);
      b.items = [
      ];
      if (a.feed.entry) for (var c = 0, d; d = a.feed.entry[c]; c++) (d = Yg(d)) && d.published && !d.Cd && (d.sourceTitle = b.Cb ? b.Cb.title : void 0, b.items.push(d));
      b.items[0] && (b.Cb.published = b.items[0].published);
      return b
    }
  }
  function Xg(a) {
    if (a && a.feed && a.feed.entry) {
      for (var b = [
      ], c = 0, d; d = a.feed.entry[c]; c++) {
        var e = fh(d);
        $.grep(d.link, function (k) {
          'alternate' == k.rel && (e.url = k.href)
        });
        b.push(e)
      }
      b.sort(function (k, n) {
        return n.updated - k.updated
      });
      return b
    }
  }
  function Yg(a) {
    if (a) {
      var b = a.tag || Y(a.id),
      c = a && /post-/i.test(b) && new ie || a && /page-/i.test(b) && new Ye || new Qe;
      (b = /blog-(\d+)\.\w{4}-(\d+)/.exec(Y(a.id))) ? (c.blogId = b[1], c.id = b[2])  : c.id = a.id;
      c.title = Y(a.title);
      c.body = a.content ? Y(a.content)  : Y(a.summary) + '...';
      c.updated = (new Date).fromISOString(Y(a.updated));
      c.published = (new Date).fromISOString(Y(a.published));
      c.Cd = !1;
      a.app$control && a.app$control.app$draft && (c.Cd = 'yes' == a.app$control.app$draft.$t);
      if (a.replies || a.thr$total) c.commentCount = parseInt(Y(a.replies || a.thr$total), 10);
      c.allowComments = void 0 !== a.thr$total;
      b = gh(a);
      b.length && (c.author = b[0]);
      a.link && ($.isArray(a.link) ? $.grep(a.link, function (d) {
        'alternate' == d.rel ? c.url = d.href : 'related' == d.rel && (c.relatedUrl = d.href)
      })  : c.url = a.link, c.url && (b = R.decode(c.url), b.scheme = R.decode().scheme, c.url = b.encode(), b.scheme = 'http', c.Bc = b.encode(), b = c.url.split('/'), 2 <= b.length && (c.baseUrl = b[0] + '//' + b[2])));
      a.enclosure && $.grep(a.enclosure, function (d) {
        'related' == d.type && (c.relatedUrl = d.url)
      });
      a.gf ? c.tags = a.gf.slice(0)  :
      a.category && (c.tags = $.map(a.category, function (d) {
        return d.term
      }));
      c.geoLocation = hh(a);
      a = ih(a);
      c.mf = a.commentSource;
      c.rc = a.commentModerationMode;
      return c
    }
  }
  function eh(a) {
    var b = new Oe,
    c = /blog-(\d+).post-(\d+)/.exec(Y(a.id));
    c && (b.id = c[2]);
    b.extensions = ih(a);
    b.body = Y(a.content || a.summary);
    b.timestamp = (new Date).fromISOString(Y(a.published)).getTime() + '';
    b.displayTime = b.extensions['blogger.displayTime'];
    b.extensions['blogger.contentRemoved'] == Lc && (b.body = '<span class="deleted-comment">' + b.body + '</span>');
    if (c = gh(a)) b.author = c[0];
    a.link && (a.link[2].href && (c = R.decode(a.link[2].href), c.scheme = R.decode().scheme, b.url = b.link = b.permalink = c.encode()), a.link[3] && (a = /.*comments\/default\/(\d+)\?.*/.exec(a.link[3].href))) && (b.parentId = a[1]);
    return b
  }
  function fh(a) {
    var b = {
      title: Y(a.title),
      subtitle: Y(a.subtitle),
      updated: (new Date).fromISOString(Y(a.updated))
    },
    c = /blog-(\d+)/.exec(Y(a.id));
    b.id = c && c[1] || a.id;
    a.author && (b.authors = gh(a));
    return b
  }
  function dh(a) {
    return {
      total: parseInt(Y(a.totalResults || a.openSearch$totalResults), 10),
      startIndex: parseInt(Y(a.startIndex || a.openSearch$startIndex), 10),
      pageSize: void 0 === a.openSearch$itemsPerPage ? void 0 : parseInt(Y(a.openSearch$itemsPerPage), 10)
    }
  }
  function gh(a) {
    var b = [
    ];
    a.author && ($.isArray(a.author) ? b = $.map(a.author, function (c) {
      return new je(Y(c.name), Y(c.uri), c.gd$image ? c.gd$image.src : void 0)
    })  : b.push(new je(Y(a.author.name), Y(a.author.uri))));
    return b
  }
  function hh(a) {
    if (a.georss$featurename && a.georss$point) {
      var b = Y(a.georss$point).split(' ');
      if (2 == b.length) return new Te(Y(a.georss$featurename), parseFloat(b[0], 10), parseFloat(b[1], 10))
    }
  }
  function ih(a) {
    var b = {
    };
    a = a.gd$extendedProperty || [
    ];
    $.isArray(a) && $.map(a, function (c) {
      b[c.name] = c.value
    });
    return b
  }
  function Y(a) {
    return a && void 0 !== a.$t ? a.$t : a
  };
  function ch(a, b) {
    Le.call(this, a, b || 25);
    this.ec = (b = jh(this)) && b.pa ? b.pa.getTime()  : void 0;
    this.Pc = 1;
    this.vd = (b = jh(this)) && b.qa ? b.qa.getTime()  : void 0;
    this.Kc = a.resource().filter && $.trim(a.resource().filter.query || '');
    this.Hc = a.resource().filter && $.trim(a.resource().filter.Gc || '');
    this.Ub = a.resource().filter && $.trim(a.resource().filter.Dc || '')
  }
  ch.prototype = $.extend({
  }, Le.prototype, ch.prototype);
  ch.prototype.Kb = function () {
    var a = W().settings,
    b = !!this.Ub,
    c = a['private'] || a.hasCustomDomain && R.decode().scheme == Rb,
    d = (c ? a.blogger_base : this.C.resource().url) || '';
    '/' !== d[d.length - 1] && (d += '/');
    c = [
      d,
      c ? 'feeds/' + a.blog_id : 'feeds',
      b ? '/pages/default' : '/posts/default',
      kh(this)
    ].join('');
    d = {
      alt: Zb,
      v: 2,
      dynamicviews: 1
    };
    b || (d.orderby = sc, d['max-results'] = this.pageSize);
    3 == a.feeds_api && (d.proxy_feed = !0);
    this.ec && (d['published-max'] = (new Date(this.ec)).toISOString());
    this.vd && (d['published-min'] = (new Date(this.vd)).toISOString());
    this.Kc && (d.q = this.Kc.replace(/(\s)+/g, '+'), 'best' == this.C.resource().filter.Sb && (d.orderby = 'relevance'), d['start-index'] = this.Pc);
    this.Hc && (d.path = this.Hc);
    R.decode().scheme == Rb && (d.rewriteforssl = !0);
    return {
      type: 'GET',
      url: c + '?' + $.param(d)
    }
  };
  function kh(a) {
    a = (a = jh(a)) && a.tags ? a.tags : [
    ];
    return a.length ? '/-/' + encodeURIComponent(a[0]).replace(/'/g, '%27')  : ''
  }
  function jh(a) {
    if (a.C || a.C.resource()) return a.C.resource().filter
  }
  ch.prototype.Wb = function (a) {
    a = Zg(a);
    var b = !!this.Ub;
    a && a.items && a.items.length && (b && (a.items = [
      lh(this, a)
    ]), 'best' != (this.C.resource().filter && this.C.resource().filter.Sb || 'recent') && a.items.sort(function (c, d) {
      return d.published.getTime() - c.published.getTime()
    }), this.Kc ? this.Pc += a.results.pageSize : this.ec = a.items[a.items.length - 1].published.getTime() - 1);
    $.extend(this.C.resource(), a.Cb);
    a.results && a.results.total ? this.C.resource().total = a.results.total : this.C.resource().total = $.valueOrDefault('items.length', 0, a);
    (!a.items || !a.items.length || a.results.startIndex + a.results.pageSize > a.results.total || this.Hc || this.Ub) && this.hasNext(!1);
    return a && a.items
  };
  function lh(a, b) {
    b = b.items;
    for (var c = 0, d = b.length; c < d; c++) if ((new S(b[c].url)).path == a.Ub) return b[c];
    return null
  };
  function mh(a, b) {
    Le.call(this, a, b || 25)
  }
  mh.prototype = $.extend({
  }, Le.prototype, mh.prototype);
  mh.prototype.Kb = function () {
    var a = [
      this.C.resource().url,
      '/activities/public'
    ].join(''),
    b = {
      maxResults: this.pageSize,
      key: W().settings.plus_key
    };
    this.dd && (b.pageToken = this.dd);
    return {
      type: 'GET',
      url: a + '?' + $.param(b)
    }
  };
  mh.prototype.Wb = function (a) {
    if (a && a.items) return $.extend(this.C.resource(), {
      id: /people\/(\d+)/.exec(this.C.resource().url) [1],
      title: a.title,
      updated: (new Date).fromISOString(a.updated),
      total: (this.C.resource().total || 0) + a.items.length
    }),
    this.dd = a.nextPageToken,
    this.pageSize > a.items.length && this.hasNext(!1),
    a = $.map(a.items, this.xf),
    !this.C.resource().published && a[0] && (this.C.resource().published = this.C.resource().published = a[0].published),
    a
  };
  mh.prototype.xf = function (a) {
    var b = new me;
    b.id = a.id;
    b.title = a.title;
    b.published = a.published && (new Date).fromISOString(a.published);
    b.updated = a.updated && (new Date).fromISOString(a.updated);
    b.url = a.url;
    b.author = a.actor && new je(a.actor.displayName, a.actor.url, a.actor.image);
    b.location = a.Fg;
    if (a = a.object) b.body = a.content,
    b.relatedUrl = a.url,
    b.commentCount = a.replies && a.replies.totalItems || 0,
    b.Jg = a.resharers && a.resharers.totalItems || 0,
    b.Ig = a.plusoners && a.plusoners.totalItems || 0,
    a.attachments && $.each(a.attachments, function (c, d) {
      c = {
        type: d.objectType,
        url: d.fullImage && d.fullImage.url || d.embed && d.embed.url || d.url,
        title: d.displayName,
        content: d.content,
        thumbnail: d.image && d.image.url,
        width: d.fullImage && d.fullImage.width,
        height: d.fullImage && d.fullImage.height
      };
      if (d.objectType == Rc) {
        var e = Ke(c.url);
        e && e.embed && (c.content = e.embed)
      }
      b.attach(d.objectType, c)
    });
    return b
  };
  var me = $.inherit(Qe);
  me.prototype.content = Wc(B);
  me.prototype.data = function () {
    var a = this.base();
    a.Plus = !0;
    a.PostID = this.id;
    a.Comments = a.Notes = !!M().settings.comments_enabled && !!this.allowComments;
    a.Comments && (a.CommentCount = a.NoteCount = this.commentCount || 0, a.CommentCountWithLabel = a.CommentCount + ' comment' + (1 != a.CommentCount ? 's' : ''), a.NoteCountWithLabel = a.CommentCountWithLabel);
    return a
  };
  function nh() {
    this.T()
  }
  var oh = {
    plus_base: 'https://plus.google.com',
    plusapi_base: Sb,
    plus_key: 'AIzaSyAH16LkZIgEhEx-wAoog7elYkd3djaMJGQ'
  },
  ph = /^plus:(\d+)$/;
  nh.prototype.owns = function (a) {
    return ph.test(a)
  };
  nh.prototype.iterator = function (a, b, c) {
    if (a = ph.exec(a)) return qh(),
    a = [
      W().settings.plusapi_base || Sb,
      '/v1/people/',
      a[1]
    ].join(''),
    new mh(new Pe(new rh(a, b)), c || W().settings.batchSize)
  };
  nh.prototype.T = function () {
    qh();
    Q().converter(me, function (a, b) {
      a.Ba || (a.Ba = a.data());
      b.scope('Post', a.Ba);
      b.scope('Plus', !0);
      return a.Ba
    })
  };
  function qh() {
    for (var a in oh) W().settings[a] || (W().settings[a] = oh[a])
  }
  Ig.push(new nh);
  function rh(a, b) {
    this.url = a;
    this.filter = b;
    this.id = void 0
  }
  rh.prototype.data = function () {
    var a = {
    };
    a.Title = this.title;
    a.PlusID = this.id;
    return a
  };
  function Qf(a, b, c) {
    var d = window.jstiming;
    if (d && d.getLabels && d.getTick) {
      var e = {
      };
      for (a = a ? a.slice(0)  : [
      ]; 0 < a.length; ) for (var k = a.shift(), n = d.getLabels(k) || [
      ], q = 0; q < n.length; ++q) if ('_' !== n[q][0] && n[q] !== Dc) {
        var r = d.getTick(k, n[q]);
        e[k.name] ? e[k.name].push({
          label: n[q],
          tick: r
        })  : e[k.name] = [
          {
            label: n[q],
            tick: r
          }
        ]
      }
      for (var p in e) {
        d = [
        ];
        for (a = 0; a < e[p].length; ++a) d.push(e[p][a].label + '.' + e[p][a].tick);
        a = $.extend({
        }, c);
        b && (a.e = b);
        k = [
        ];
        for (var v in a) k.push(v + '=' + a[v]);
        d = [
          '//csi.gstatic.com/csi?v=3&s=blogger',
          '&action=' +
          p,
          '&it=' + d.join(','),
          k ? '&' + k.join('&')  : ''
        ].join('');
        (new Image).src = d
      }
    }
  };
  var sh = {
    core: {
      view: X,
      gadget: Eg
    },
    data: W,
    gadgets: function () {
      oe || (oe = new ne);
      return oe
    },
    modules: {
      Overview: bg,
      Shortcuts: ug,
      Comments: xg,
      PlusComments: fg,
      PlusCommentCount: function (a, b) {
        eg(a, b)
      },
      ViewLightbox: Dg
    },
    ui: M,
    templates: Q,
    tools: {
      categorizer: ke,
      Mosaic: pe,
      path: R,
      PhotoLoader: ue,
      Photoset: ve,
      thumbnailer: T,
      data: Fe
    },
    views: [
    ]
  },
  th;
  for (th in sh) N[th] = sh[th];
  if (window.jstiming) {
    window.jstiming.pd = {
    };
    window.jstiming.rg = 1;
    var uh = function (a, b, c) {
      var d = a.t[b],
      e = a.t.start;
      if (d && (e || c)) return d = a.t[b][0],
      void 0 != c ? e = c : e = e[0],
      Math.round(d - e)
    };
    window.jstiming.getTick = uh;
    window.jstiming.getLabels = function (a) {
      var b = [
      ],
      c;
      for (c in a.t) b.push(c);
      return b
    };
    var vh = function (a, b, c) {
      var d = '';
      window.jstiming.srt && (d += '&srt=' + window.jstiming.srt, delete window.jstiming.srt);
      window.jstiming.pt && (d += '&tbsrt=' + window.jstiming.pt, delete window.jstiming.pt);
      try {
        window.external && window.external.tran ? d += '&tran=' + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += '&tran=' + window.gtbExternal.tran()  : window.chrome && window.chrome.csi && (d += '&tran=' + window.chrome.csi().tran)
      } catch (g) {
      }
      var e = window.chrome;
      if (e && (e = e.loadTimes)) {
        e().wasFetchedViaSpdy && (d += '&p=s');
        if (e().wasNpnNegotiated) {
          d += '&npn=1';
          var k = e().npnNegotiatedProtocol;
          k && (d += '&npnv=' + (encodeURIComponent || escape) (k))
        }
        e().wasAlternateProtocolAvailable && (d += '&apa=1')
      }
      var n = a.t,
      q = n.start;
      e = [
      ];
      k = [
      ];
      for (var r in n) if (r !=
      Dc && 0 != r.indexOf('_')) {
        var p = n[r][1];
        p ? n[p] && k.push(r + '.' + uh(a, r, n[p][0]))  : q && e.push(r + '.' + uh(a, r))
      }
      delete n.start;
      if (b) for (var v in b) d += '&' + v + '=' + b[v];
      (b = c) || (b = 'https:' == document.location.protocol ? 'https://csi.gstatic.com/csi' : 'http://csi.gstatic.com/csi');
      return [b,
      '?v=3',
      '&s=' + (window.jstiming.sn || 'blogger') + '&action=',
      a.name,
      k.length ? '&it=' + k.join(',')  : '',
      d,
      '&rt=',
      e.join(',')].join('')
    },
    wh = function (a, b, c) {
      a = vh(a, b, c);
      if (!a) return '';
      b = new Image;
      var d = window.jstiming.rg++;
      window.jstiming.pd[d] = b;
      b.onload = b.onerror = function () {
        window.jstiming && delete window.jstiming.pd[d]
      };
      b.src = a;
      b = null;
      return a
    };
    window.jstiming.report = function (a, b, c) {
      var d = document.visibilityState,
      e = 'visibilitychange';
      d || (d = document.webkitVisibilityState, e = 'webkitvisibilitychange');
      if (d == rc) {
        var k = !1,
        n = function () {
          if (!k) {
            b ? b.prerender = '1' : b = {
              prerender: '1'
            };
            if ((document.visibilityState || document.webkitVisibilityState) == rc) var q = !1;
             else wh(a, b, c),
            q = !0;
            q && (k = !0, document.removeEventListener(e, n, !1))
          }
        };
        document.addEventListener(e, n, !1);
        return ''
      }
      return wh(a, b, c)
    }
  };
}).call(this);
