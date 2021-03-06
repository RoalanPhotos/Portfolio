(function () {
    var b = '#text-widget-tpl',
    g = '.text-widget-content',
    h = '</style>',
    k = 'Attribution',
    l = 'BlogArchive',
    m = 'blogarchive-expanded',
    n = 'blogarchive-loading',
    p = 'head',
    q = 'object',
    r,
    t = 'function' == typeof Object.assign ? Object.assign : function (a, c) {
      for (var d = 1; d < arguments.length; d++) {
        var e = arguments[d];
        if (e) for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (a[f] = e[f])
      }
      return a
    },
    u = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (a, c, d) {
      a != Array.prototype && a != Object.prototype && (a[c] = d.value)
    };
    function v(a) {
      a = [
        q == typeof globalThis && globalThis,
        q == typeof window && window,
        q == typeof self && self,
        q == typeof global && global,
        a
      ];
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d && d.Math == Math) return d
      }
      throw Error('Cannot find global object');
    }
    var w = v(this);
    function x(a, c) {
      if (c) {
        var d = w;
        a = a.split('.');
        for (var e = 0; e < a.length - 1; e++) {
          var f = a[e];
          f in d || (d[f] = {
          });
          d = d[f]
        }
        a = a[a.length - 1];
        e = d[a];
        c = c(e);
        c != e && null != c && u(d, a, {
          configurable: !0,
          writable: !0,
          value: c
        })
      }
    }
    x('Object.assign', function (a) {
      return a || t
    });
    blogger.templates().compile('{template:AttributionCSS}\n.attribution {\n  background-color: #f5f5f5;\n  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);\n  bottom: 0;\n  color: #444;\n  font-size: 11px;\n  padding: 5px;\n  position: fixed;\n  text-align: center;\n  width: 100%;\n  z-index: 998;\n}\n{/template:AttributionCSS}\n{template:Attribution}\n<div class="attribution">{attribution}</div>\n{/template:Attribution}\n');
    function y(a) {
      blogger.core.gadget.apply(this, arguments);
      this.showInGadgetDock = !1
    }
    y.prototype = $.extend({
    }, blogger.core.gadget.prototype, y.prototype);
    y.prototype.init = function (a, c) {
      this.ui = a;
      $('head #attributioncss').remove();
      $(p).append('<style id="attributioncss" class="singleton-element">' + this.template('AttributionCSS') + h);
      this.requestData(c, k + this.suffix_)
    };
    y.prototype.render = function (a) {
      this.isReady && this.enabled && (a = $('#attribution-container'), $(this).triggerHandler('render', a), $(a).append(this.template(k, this.settings_)))
    };
    blogger.templates().compile('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:BlogArchiveCSS}\n.blogarchive-tree {\n  padding: 12px;\n  {css-transition value="width 0.15s, height 0.15s"}\n}\n\n.blogarchive-title {\n  padding: 8px;\n  vertical-align: middle;\n  line-height: 14px;\n  white-space: nowrap;\n  cursor: pointer;\n}\n\n.blogarchive-title:after {\n  content: "";\n  display: inline-block;\n  border-width: 5px;\n  border-color: transparent transparent transparent #666;\n  border-style: solid;\n  width: 0;\n  height: 0;\n  position: relative;\n  left: 4px;\n  visibility: hidden;\n}\n\n.blogarchive-title:hover:after {\n  border-color: transparent transparent transparent #ccc;\n}\n\n.blogarchive-expanded > .blogarchive-title:after {\n  border-color: transparent transparent transparent #666;\n}\n\n.blogarchive-title:hover:after,\n.blogarchive-expanded > .blogarchive-title:after {\n  visibility: visible;\n}\n\n.blogarchive-expanded > .blogarchive-title a {\n  color: #666;\n  font-weight: bold;\n}\n\n.blogarchive-flat .blogarchive-title:after {\n  display: none;\n}\n\n.blogarchive-loading {\n  background-image: url(data:image/gif;base64,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);\n  background-repeat: no-repeat;\n  background-position: left center;\n  height: 28px;\n}\n\n.blogarchive-loading:after {\n  content: "loading";\n  color: #666;\n  display: inline-block;\n  line-height: 28px;\n  margin-left: 28px;\n  min-width: 192px;\n}\n\n.blogarchive-dates {\n  min-width: 128px;\n}\n\n.blogarchive-tree > .blogarchive-dates {\n  position: relative;\n}\n\n.blogarchive-date > .blogarchive-dates {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 90%;\n  {css-transition value="left 0.15s ease-out"}\n}\n\n.blogarchive-date.blogarchive-expanded > .blogarchive-dates {\n  display: block;\n  left: 100%;\n}\n\n.blogarchive-expanded > .blogarchive-dates {\n  display: inline-block;\n}\n\n.blogarchive-post-count {\n  color: #666;\n  font-size: 12px;\n}\n.blogarchive-post-count:before {\n  content: " (";\n}\n.blogarchive-post-count:after {\n  content: ")";\n}\n.blogarchive-post {\n  padding: 8px 0 0 16px;\n  text-indent: -8px;\n  min-width: 200px;\n}\n\n@media only screen and (max-width : 546px) {\n  .blogarchive-tree {\n    height: auto !important;\n    width: auto !important;\n  }\n\n  .blogarchive-date > .blogarchive-dates {\n    position: static;\n    margin-left: 12px;\n  }\n\n  .blogarchive-post {\n    padding: 4px 0 4px 16px;\n  }\n}\n\n{/template:BlogArchiveCSS}\n{template:BlogArchiveGadgetDefaultTitle}\nArchive\n{/template:BlogArchiveGadgetDefaultTitle}\n\n<!-- Attributes {dates, flat} -->\n{template:BlogArchiveGadget}\n<div class="blogarchive-tree blogarchive-expanded{block:flat} blogarchive-flat{/block:flat}">\n  <ul class="blogarchive-dates">\n  {block:items}\n  {BlogArchiveGadgetYear}\n  {/block:items}\n  </ul>\n</div>\n{/template:BlogArchiveGadget}\n\n{template:BlogArchiveGadgetYear}\n<li class="blogarchive-date blogarchive-collapsed">\n  <div class="blogarchive-title">\n    <a href="{url}">{name}</a><span class="blogarchive-post-count">{post-count}</span>\n  </div>\n  <ul class="blogarchive-dates">\n  {block:items}\n    {BlogArchiveGadgetMonth}\n  {/block:items}\n  {BlogArchiveGadgetPosts}\n  </ul>\n</li>\n{/template:BlogArchiveGadgetYear}\n\n{template:BlogArchiveGadgetMonth}\n<li class="blogarchive-date blogarchive-collapsed">\n  <div class="blogarchive-title">\n    <a href="{url}">{name}</a><span class="blogarchive-post-count">{post-count}</span>\n  </div>\n  <ul class="blogarchive-dates">\n  {block:items}\n    {BlogArchiveGadgetDate}\n  {/block:items}\n  {BlogArchiveGadgetPosts}\n  </ul>\n</li>\n{/template:BlogArchiveGadgetMonth}\n\n{template:BlogArchiveGadgetDate}\n<li class="blogarchive-date blogarchive-collapsed">\n  <div class="blogarchive-title">\n    <a href="{url}">{name}</a><span class="blogarchive-post-count">{post-count}</span>\n  </div>\n  <ul>\n  {BlogArchiveGadgetPosts}\n  </ul>\n</li>\n{/template:BlogArchiveGadgetDate}\n\n{template:BlogArchiveGadgetPosts}\n{block:posts}\n  {BlogArchiveGadgetPost}\n{/block:posts}\n{/template:BlogArchiveGadgetPosts}\n\n{template:BlogArchiveGadgetPost}\n<li class="blogarchive-post">\n  <a href="{url}">{title}</a>\n</li>\n{/template:BlogArchiveGadgetPost}\n\n{template:BlogArchiveGadgetIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMVQxMzo1OToxNSswMDowMK9rX9AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDFUMTM6NTk6MTUrMDA6MDDeNudsAAADfElEQVRIibWRTWhrRRiG3zOZc5KZk9oUmnIxSBBzF2pVxJ+FC90VrVfkLrqzIC68IAa61HJxI9GNCnLFUpBK0bUgFqSguChcrtjeCkFaaekPsW2wvQ1NzszkzJlz4sKckKZ/V6jv7pnvm/ed7xugR9vb249JKTeEENVKpfJSb71Xu7u7L0sp96WUf5bL5Ucu6oeU8vNWW41G4/uL+j3P+znuF0KUeut0a2vr4YGBAbqwsBACqDmOk4qLURSl5ufnXUrp4GnmxpiDKIo6/Y7jpObm5gYYYw8AACHEh9a6HL+gVqt92mw2b8Xsed4Pxpg3W2dIKfWW53m/xCyl/LhWq33SdX+RHBuH0kK1Wv06CIJ9Y0yj0Wh8KYQonLUe3/cLQogvjDHS9/29nZ2dbyilnf5Wq2UdC3Bd91VKaWFkZOTBUqk0KKU84Jy/e1ZAOp1+RwhRKZVKA+Pj4w8xxh7nnF/r7rG01mXbtoe7zlpSyj8IIdJxnGcIIYmzAgAgiqLQ9/27AFKMsWEAVlzzPO8uPeWOxTkfPuX8VBFCEoyx584ItygAhGHY1FqX79f0fuQ4zhMAQAFAa/0X5/z5ywyQUq51As7T8vLy1Vwu9yIAbGxszKfT6b+HhobGAaBer68Wi8XF2dnZN9q8UigUbsd3E4mEdWFAJpN5IZvNftU2GLVt+07MjuNMZ7PZ1ZgJIVMAOgGu6148gTHGBEEgACAIgjCRSLRi1lpr27aP8QkDrXU53tdlSkq5FkXR76S3cHR0NCqEuCmEuFksFpOrq6tPxry0tFTY3NxMxby3tzc6NjbGYq5UKq/0+p1Ykeu6rycSibcBgHN+K5lMPs05/xAA+vv7lwgh92IOgmCaMfZrzEqpKQA/nhsghNi3bXsdABhjoda6rpRab48tc7lc2MX7hJAOK6X2e/0srXXZGJPinF+9cLH/QVLKtWQyKU9MUK/XX7Ms61kAmJyc/OjGjRuP5vP56wCwvr7+bSaTqQwODr7f7l2cmJj4aWZm5j0AODw8/C2fz891+50I4Jxf6/qDz1zXfSqdTn8AAH19fXcIIQcxh2E4zRi7HbPv+1MAzg9QSlUppSvAv3+glDpqNpsr7bEFYyyMWSlVJYR02Pf9ardXFEXW//oHtm0rCgC2bV+p1WrfXWaAbdtXAGxSAKCUpjOZzPXLDDDGtDzPwz/H/iQroOaNawAAAABJRU5ErkJggg==\n{/template:BlogArchiveGadgetIconUrl}\n\n{template:BlogArchiveGadgetIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMVQxMzo1OToxNSswMDowMK9rX9AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDFUMTM6NTk6MTUrMDA6MDDeNudsAAAB0ElEQVRIibXUz4uNYRQH8M81N90iEovZykjERliyRVEWrMjCn8CCrNkopTSxsmBhpUhJkZ3CXD8XQzOxoEyuMugOpjuuxXuu+8zjvdMtd771dM/3nPOcc7/nvO/Lv9iEt5jCrpJ4jt1o4A3W9ZHvAtpxbvaRfz/JP5MHq1gbv3P4gloSr2EZ1vQo/rkkfxVWBP9VxS1sDsd5zCYXZnEQV3o0OFaSfxrHg9eXZBdGolgD3zEavl4YwUXM4COuZvkVeKU7wxYOKUa2FNsxncTzM40dkTsUaltJvJ43aON3+B5lyb1OC4/xMu6msXq1RHZFdyf9YCiUlqHSafAz/vUgsYVi1vBBMctBYiJtsBDWY2fYd/EJR4K/xhgOBx/Hw+Tu36doYoEGR3WXtkfxInX4JaxO+Gim4Fk/Clpohj0XhTp8toTPQyUU1BSjGCQm0CxTsBdbwz6HDdgf/LrigTgR/CkeSD4NuJMXzHdwWXemK/3fDp6XKWhgMuw5fEv4TPgmk9ycz8Ni72CmTME+bAv7LDbiQPBreI9TwcdwDyeDP8HtvOBi7uBFmYIpxRtJMd+vCW+GbzzJzXmKymLv4EdHwTBuDLjBMN51GizXXeSg0IY/A2uvvseT2DIAAAAASUVORK5CYII=\n{/template:BlogArchiveGadgetIconSelectedUrl}\n');
    function z(a) {
      blogger.core.gadget.apply(this, arguments);
      this.f = !1;
      this.o = '';
      this.i = null
    }
    z.prototype = $.extend({
    }, blogger.core.gadget.prototype, z.prototype);
    r = z.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #blogarchivecss').remove();
      $(p).append('<style id="blogarchivecss" class="singleton-element">' + this.template('BlogArchiveCSS') + h);
      this.requestData(c, l + this.suffix_)
    };
    r.render = function (a) {
      this.isReady && this.enabled && ($(a).append(this.getContentHtml()), this.f || $('.blogarchive-title', a).click($.proxy(this.B, this)), this.i = a)
    };
    function A(a) {
      if (a.data) {
        for (var c = a.data, d = 0, e = c.length; d < e; d++) A(c[d]);
        a.items = a.data;
        delete a.data
      }
    }
    r.processSettings = function (a) {
      A(a);
      this.settings_ = a;
      this.f = 'FLAT' == a.style || 'MENU' == a.style;
      this.ready_()
    };
    r.B = function (a) {
      if (!$(a.target).is('a')) {
        a = $(a.target).closest('.blogarchive-date');
        for (var c = a.hasClass(m), d = $('.blogarchive-expanded', a.parent()), e = 0, f = d.length; e < f; e++) B(d[e], !0);
        B(a, c);
        c = $('.blogarchive-dates', a);
        0 == c.children().length && (c = c[0], a = $('a', a).attr('href'), c && a && ($(c).addClass(n), a = {
          url: this.o,
          data: {
            v: '0',
            action: 'getTitles',
            widgetId: 'BlogArchive1',
            widgetType: l,
            responseType: 'js',
            path: a
          },
          dataType: 'text',
          success: $.proxy(this.u, this, c)
        }, $.ajax(a)));
        C(this)
      }
    };
    function B(a, c) {
      $(a).toggleClass(m, !c).toggleClass('blogarchive-collapsed', c)
    }
    function C(a) {
      var c = $('.blogarchive-tree', a.i);
      var d = $('.blogarchive-expanded > .blogarchive-dates', a.i);
      for (var e = a = 0, f = 0, R = d.length; f < R; f++) a += $(d[f]).width(),
      e = Math.max($(d[f]).height(), e);
      d = e;
      c.width(a);
      c.height(d)
    }
    r.u = function (a, c) {
      c = this.extractGadgetSettings_(c);
      A(c);
      c && ($(a).removeClass(n), $(a).append(this.template('BlogArchiveGadgetPosts', {
        posts: c.posts
      })), C(this))
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('BlogArchiveGadgetDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('BlogArchiveGadgetIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('BlogArchiveGadgetIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('BlogArchiveGadget', {
        items: this.settings_.items || {
        },
        flat: this.f
      })
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetBlogListCSS}\n.gadget-bloglist {\n  padding: 12px;\n  min-width: 240px;\n}\n\n.gadget-bloglist-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n.gadget-bloglist-title {\n  font-weight: bold;\n  height: 16px;\n  line-height: 16px;\n  margin: 0 0 2px 0;\n}\n\n.gadget-bloglist-title img, .gadget-bloglist-title a {\n  vertical-align: middle;\n}\n\n.gadget-bloglist-recent {\n  font-size: 11px;\n}\n\n.gadget-bloglist-recent-title {\n  display: none;\n}\n.gadget-bloglist-show-recent-title .gadget-bloglist-recent-title {\n  display: block;\n}\n\n.gadget-bloglist-recent-thumbnail {\n  display: none;\n  float: left;\n  margin: 4px 8px 0 0;\n}\n.gadget-bloglist-show-recent-thumbnail .gadget-bloglist-recent-thumbnail {\n  display: inline-block;\n}\n\n.gadget-bloglist-recent-snippet {\n  display: none;\n}\n.gadget-bloglist-show-recent-snippet .gadget-bloglist-recent-snippet {\n  display: inline;\n}\n\n.gadget-bloglist-recent-update {\n  display: none;\n}\n.gadget-bloglist-show-recent-update .gadget-bloglist-recent-update {\n  display: block;\n}\n\n{/template:GadgetBlogListCSS}\n{template:GadgetBlogListDefaultTitle}\nLink List\n{/template:GadgetBlogListDefaultTitle}\n\n<!-- Attributes {items} -->\n{template:GadgetBlogList}\n<ul class="gadget-bloglist\n    {block:IfshowItemTitle}gadget-bloglist-show-recent-title{/block:IfshowItemTitle}\n    {block:IfshowItemSnippet}gadget-bloglist-show-recent-snippet{/block:IfshowItemSnippet}\n    {block:IfshowItemThumbnail}gadget-bloglist-show-recent-thumbnail{/block:IfshowItemThumbnail}\n    {block:IfshowTimePeriodSinceLastUpdate}gadget-bloglist-show-recent-update{/block:IfshowTimePeriodSinceLastUpdate}">\n  {block:items}\n  {GadgetBlogListItem}\n  {/block:items}\n</ul>\n{/template:GadgetBlogList}\n\n<!-- Attributes {blogTitle, blogUrl, blogIconUrl,\n    itemTitle, itemUrl, itemSnippet, itemThumbnail,\n    timePeriodSinceLastUpdate} -->\n{template:GadgetBlogListItem}\n<li class="gadget-bloglist-item">\n  <div class="gadget-bloglist-title">\n    {block:IfblogIconUrl}\n    <img src="{blogIconUrl}" width="16" height="16" />\n    {/block:IfblogIconUrl}\n    <a href="{blogUrl}">\n      {blogTitle}\n    </a>\n  </div>\n  <div class="gadget-bloglist-recent">\n    <p>\n      {block:IfitemTitle}\n      <a href="{itemUrl}" class="gadget-bloglist-recent-title">{itemTitle}</a>\n      {/block:IfitemTitle}\n      {block:IfitemThumbnail}\n      {block:IfitemThumbnail.url}\n      <a href="{itemUrl}" class="gadget-bloglist-recent-thumbnail">\n        <img src="{itemThumbnail.url}"\n            width="{itemThumbnail.width}" height="{itemThumbnail.height}"/>\n      </a>\n      {/block:IfitemThumbnail.url}\n      {/block:IfitemThumbnail}\n      <span class="gadget-bloglist-recent-snippet">{itemSnippet}</span>\n    </p>\n    {block:IftimePeriodSinceLastUpdate}\n    <div class="gadget-bloglist-recent-update">{timePeriodSinceLastUpdate}</div>\n    {/block:IftimePeriodSinceLastUpdate}\n  </div>\n</li>\n{/template:GadgetBlogListItem}\n\n{template:GadgetBlogListIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAIUlEQVQoz2P4jwQYoOA/iYBh8BgyeMBowI4GLD0CFmQGAJeZHQCjUvPAAAAAAElFTkSuQmCC\n{/template:GadgetBlogListIconUrl}\n\n{template:GadgetBlogListIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAJ0lEQVQoz2MwNjb+D8MMUIAsRgxmGDyGDB4wGrCjAUuPgP3//z8DAG+r2iZzG/daAAAAAElFTkSuQmCC\n{/template:GadgetBlogListIconSelectedUrl}\n');
    function D(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    D.prototype = $.extend({
    }, blogger.core.gadget.prototype, D.prototype);
    r = D.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #bloglistcss').remove();
      $(p).append('<style id="bloglistcss" class="singleton-element">' + this.template('GadgetBlogListCSS') + h);
      this.requestData(c, 'BlogList' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetBlogListDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetBlogListIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetBlogListIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetBlogList', this.settings_)
    };
    blogger.templates().compile('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:GadgetLabelCSS}\n.gadget-label {\n  padding: 10px;\n  min-width: 250px;\n}\n\n.gadget-label-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n.gadget-label-cloud .gadget-label-item {\n  display: inline-block;\n}\n\n.gadget-label-cloud .gadget-label-size-1 {\n  font-size: 80%;\n}\n.gadget-label-cloud .gadget-label-size-2 {\n  font-size: 90%;\n}\n.gadget-label-cloud .gadget-label-size-3 {\n  font-size: 100%;\n}\n.gadget-label-cloud .gadget-label-size-4 {\n  font-size: 120%;\n}\n.gadget-label-cloud .gadget-label-size-5 {\n  font-size: 160%;\n}\n\n.gadget-label-count {\n  display: none;\n  color: #666;\n  font-size: 12px;\n}\n.gadget-label-show-freq-numbers .gadget-label-count {\n  display: inline;\n}\n.gadget-label-count:before {\n  content: " (";\n}\n.gadget-label-count:after {\n  content: ")";\n}\n\n{/template:GadgetLabelCSS}\n{template:GadgetLabelDefaultTitle}\nLabel\n{/template:GadgetLabelDefaultTitle}\n\n<!-- Attributes {labels, display, showFreqNumbers} -->\n{template:GadgetLabel}\n<ul class="gadget-label gadget-label-{display}{block:IfshowFreqNumbers} gadget-label-show-freq-numbers{/block:IfshowFreqNumbers}">\n  {block:labels}\n  {GadgetLabelItem}\n  {/block:labels}\n</ul>\n{/template:GadgetLabel}\n\n<!-- Attributes {name, count, cssSize, url} -->\n{template:GadgetLabelItem}\n<li class="gadget-label-item gadget-label-size-{cssSize}">\n  <a href="{url}">{name}</a><span class="gadget-label-count">{count}</span>\n</li>\n{/template:GadgetLabelItem}\n\n{template:GadgetLabelIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMTo1MjoxMCswMDowMNEoa08AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDE6NTI6MTArMDA6MDCgddPzAAAC+klEQVRIidWU3UtTYRzHf2ebm9tkL00mbotEBokgWTf9ARKMQINuu/GilnYRHCMcXrQGUYrhxVbddCOB0E2MySBUxkBhXWgXk9WmmwlzOzYVzgvnnL2cs/N004lttkI3iL53z/Pj9/083+cN4H8XBgAwPj7eOTIy4mjVLJPJHPl8PqZuMpFIuHieJ1EbVCqVSqlUaqIuAU3T+xqNppvjuCWEkNRKAr1eP6ZUKrsXFhZ6PB4PDQCAsSwrCYIQMZvNNwAANjY2rvT3919SKpVnBmi12vsGg+Hm9vb2g8PDwzWXy5UBlmUliqJWAQCy2exLhJDUju0SRVFMJpNulUyfn5+39vb24hzHfREE4a1CoUDn3SpRFJU6nc5jt9uf/UoQCAQGEEKIpunAGf2wdDo9SZJk8ODg4CmO41oAAIqiVlmWlRTnXaWsvb29h06n843RaLzlcDi809PTr2vrLQMsFstopVKRfD5fH8Mw33Q63VhbAcViMalWqxU4ji93dXX1iaL49cwAt9vdUSgU3mWz2eeNtWAw+OT4+DisUqkGGIb5nE6n79bWVY0NvzOfm5t7bzKZbgMA5PP5Drvd/hgAIBaLDVmt1qtWq3W0Wf8fAbXmDMN8UqlUJpvN9iifz8Pu7u7S8PDwmlartRAE4bDZbKfSAQA0vaZut7uDJMkPCCFEUdRHv9+viUaj3RzHxX/+O0VBEASWZXMIIYkgiJlaX/maAsMwR8Vi8fv+/v4LGdBo7vV6O+XGWghBEOGVlZWLPM+nEUJSLpebOQXY2dm5J4qiKD9xmqYD6+vr16rVarXRvBFSqVR4HMcvRKNRB8/zaZ7nqcHBQXUdAAAgFAo54/H4JEIIkST5CgBga2vrut/v1zQ7n3A4bI7FYkPyOBQK9Wxubl6WxyRJrrEsK2HyxOzsrHFqaqpQrVZPOI5bbn70fxeGYQq9Xn+nXC6f1BVSqdREuVwutuM35XmeTCQSLqyR7vV6DU6n09pKAgCASCSSW1xcLLXq8+/1A2RmoJHkoBqgAAAAAElFTkSuQmCC\n{/template:GadgetLabelIconUrl}\n\n{template:GadgetLabelIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMTo1MjoxMCswMDowMNEoa08AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDE6NTI6MTArMDA6MDCgddPzAAABoElEQVRIidXUvWsUURQF8N9sshobvzFNTCwEbUS0yb8QBEUsNZWoxMZGBLEQK20shNjZCQEbCUhA2GhtZWETiwTTBNQgRFNoQN1YvLvhOU5QdwfEA8PMu/fNOe9+Pf53FPEewFANfMtYLRvHsIL1Gp41TJQjWMReTKHdYwSngmsQn6AfI3ieKR8NWzcYwQmcxSwWSKduxYa7sa4jXd9wqQjCZxjHW8zhQWzqFn24jkYeweEgnfxLsgKXMY1b2Bb2Ftr9PZyygyu4F4c7jWGc7zgbNQiclLJwAG+kTtpAHQKvg+dJiMx1I9DEQ9yu8N3EjFTDl7iQO/+kBk08wplsfS2+j+CYlKZK/E4gJ3+BnbgavilpmPZI91hVdNi8TZt4HLan2CpdA6/C9gVfsRQcN0q8rbBbxjvcyQTK5APZj7nIDPZjvkJkQ+CiNNadEZ/EcXyvIC+LfMbuSNE8PmJLWQAOStO4jvthG420bIZdUpE7GMShbD2LdpEZduA9Pkg93QsaOBdcP2FCKl4dt+kKxgq/Yjv29RgBqbvWauD5x/gByLGWRbtCAQwAAAAASUVORK5CYII=\n{/template:GadgetLabelIconSelectedUrl}\n');
    function E(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    E.prototype = $.extend({
    }, blogger.core.gadget.prototype, E.prototype);
    r = E.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #labelcss').remove();
      $(p).append('<style id="labelcss" class="singleton-element">' + this.template('GadgetLabelCSS') + h);
      this.requestData(c, 'Label' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetLabelDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetLabelIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetLabelIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetLabel', {
        labels: this.settings_.labels || [
        ],
        display: this.settings_.display,
        showFreqNumbers: this.settings_.showFreqNumbers
      })
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetLinkListCSS}\n.gadget-linklist {\n  padding: 12px;\n  min-width: 120px;\n  max-width: 320px;\n}\n\n.gadget-linklist-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n{/template:GadgetLinkListCSS}\n{template:GadgetLinkListDefaultTitle}\nLink List\n{/template:GadgetLinkListDefaultTitle}\n\n<!-- Attributes {links} -->\n{template:GadgetLinkList}\n<ul class="gadget-linklist">\n  {block:links}\n  {GadgetLinkListItem}\n  {/block:links}\n</ul>\n{/template:GadgetLinkList}\n\n<!-- Attributes {target, name} -->\n{template:GadgetLinkListItem}\n<li class="gadget-linklist-item">\n  <a href="{target}" rel="noopener" target="_blank">{name}</a>\n</li>\n{/template:GadgetLinkListItem}\n\n{template:GadgetLinkListIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMjowODowMiswMDowMFGiKr0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDI6MDg6MDIrMDA6MDAg/5IBAAACeUlEQVRIibWWQWsTQRTHJysGaw/qqVBy0R56EnLVT9AvECqIx/bSGqFXD/EqCM2tVDwI3nITe7CyUEJASlgQ9rRBgwtrmml21zmku/t2tzPPg90YJ5N0g/UPc5l583477715swVERPIfpV2lsziOaRAE9TAMP48mMYc45yKKom4URc2L0eWcC8lMmKZ5nxBCKpXKtTAMTUTEmQAAsD3Pq+q6viR/ra7rS57nVQHARkQUQvD9/f2b2XoYhu+nAoQQgjG222g0Fi4LS6PRWGCM7V7sedNqte45jvP4/Pw8VgKEEKLf72/PG/9+v78thJDDNglgjO3O6zyT7/v1mQAAsFVhcRxnLQiCw3a7/ZBSuhkEwSfHcdZU4cpyogR4nleVN1FKnyOiODs7+3BwcHAnSRI3i2av13sh23ueV1UCOOdCVS2u6+5wzmPLslYppYuIuJINAFiR7XVdXxov4REgiqKuIjQva7XaDdu2t+S1TqfzaDgcfnRddyJnURR1VYCmbBiGIaOUbsjzhBBiGMatJElOAYApAM1cAABgaZqeHh0d3VZBKKUbAPBzFmC8F5Vkw+Fw+BYAviwvL09UjG3bW3t7e+9833+tYP/xdVmSAWCUVERcoZQuWpa1yjmPXdfdke3lJI9OoGlaoVwur8sbfN9/Qgj5Sgj5lqbpsWEYxVKp9ErTtOtpmk7cmXK5vK5pWmHiBHkuGqV00zTNB0EQHJ6cnMx/0RARfd+vK2KaS4yx2a0C8Xez6/V6T+d1nrvZZRDGWH2Odl1XOZ8KGM/JYDB4lufBmaYC4uWPvhACkyT5Tgj5cTFVKhaLd/+qlinKBfgXXelfhUq/APWJyBHtqG3+AAAAAElFTkSuQmCC\n{/template:GadgetLinkListIconUrl}\n\n{template:GadgetLinkListIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMjowODowMiswMDowMFGiKr0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDI6MDg6MDIrMDA6MDAg/5IBAAABjklEQVRIibXWsW4TQRQF0OOgIEwKoHKTBiio8gHhC/iDICFK0iQ4Ei0UFDRISHEdpUDiCyIaoHOD6JBowcIFBYgCpUzBmmJniT1+jker5Eojzb739t6ZuTOz28HEBWLlnPl+YoCP08FJQaswwjC1UYrlNRuJ8xK+pPiZxGP00QtG20u5car9i6tT+aOzBCrso1uwLN1UW+EQt/AAJ4sEKuwWEOfYNb9socB+C/IGg2UCY/Gy3MN73MU2PqRYjq5TT0KBfvDSU/XU3+IGfjtdyudBfX+RQCXeLU/Uht3BGm5nLUfPrBf/O6Og+CWuYCfI3cc7sWejSGAYFP7BoyAO1/Ar1eQYNrwlV8ULXA/ix3jWjHIRpgXWg/xrfBbvmB28wUGQm+FaZnJu6pra8BP1BsgxY/L0DDrYCl54iK/4hk+4jFdYFZ+ZrcQ1N4OSg7aNzdRvddAm6uPeFkuvisaLxy3Iiy+7RmSg/LoeLCAv+uDsKfvghK3TqCzBBN/xIz2v46Zst0QoFWiN8/6rmMM/lYnIkPDHvysAAAAASUVORK5CYII=\n{/template:GadgetLinkListIconSelectedUrl}\n');
    function F(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    F.prototype = $.extend({
    }, blogger.core.gadget.prototype, F.prototype);
    r = F.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #linklistcss').remove();
      $(p).append('<style id="linklistcss" class="singleton-element">' + this.template('GadgetLinkListCSS') + h);
      this.requestData(c, 'LinkList' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetLinkListDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetLinkListIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetLinkListIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetLinkList', {
        links: this.settings_.links || [
        ]
      })
    };
    blogger.templates().compile('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:ProfileCSS}\n\n.profile {\n  color: #666;\n  min-width: 280px;\n  padding: 8px 16px 16px 16px;\n}\n\n.profile-data {\n  margin: 0;\n}\n\n.profile-name {\n  display: inline-block;\n}\n\n.profile-name-link {\n  background: no-repeat left center;\n  display: inline-block;\n  min-height: 20px;\n  padding-left: 20px;\n}\n\n.profile-photo {\n  display: inline-block;\n  float: left;\n  margin: 0 12px 10px 0;\n}\n\n.profile-name, .profile-location, .profile-occupation {\n  font-size: 16px;\n  margin-bottom: 6px;\n}\n\n.profile-photo img {\n  vertical-align: middle;\n}\n.profile-aboutme {\n  clear: both;\n  line-height: 1.2em;\n  margin: 0;\n}\n\n.profile-link {\n  clear: both;\n  display: block;\n  margin-top: 4px;\n  text-align: right;\n}\n\n{/template:ProfileCSS}\n{template:ProfileGadget}\n<div class="profile">\n  {block:IfisDisplayable}\n    {block:Ifteam}\n      {ProfileGadgetTeam}\n    {/block:Ifteam}\n    {block:IfNotteam}\n      {ProfileGadgetPersonal}\n    {/block:IfNotteam}\n  {/block:IfisDisplayable}\n</div>\n{/template:ProfileGadget}\n\n{template:ProfileGadgetPersonal}\n<dl class="profile-data">\n  {block:displayname}\n  <dt class="profile-name">\n  <a href="{userUrl}" class="profile-name-link g-profile"\n      rel="author"\n      style="background-image: url(\'{profileLogo}\');">{displayname}</a>\n  </dt>\n  {block:Ifhasgoogleprofile}\n  <br>\n  <div class="g-follow" data-href="{userUrl}"\n    data-height="20" data-annotation="bubble"></div>\n  {/block:Ifhasgoogleprofile}\n  {/block:displayname}\n  {block:Ifphoto}\n    {block:Ifphoto.url}\n    <dd class="profile-photo">\n      <a href="{userUrl}">\n        <img src="{photo.url}"\n            {block:photo.width} width="{photo.width}" {/block:photo.width}\n            {block:photo.height} height="{photo.height}" {/block:photo.height}\n            {block:photo.alt} alt="{photo.alt}" {/block:photo.alt} />\n      </a>\n    </dd>\n    {/block:Ifphoto.url}\n  {/block:Ifphoto}\n  {block:showlocation}\n  <dd class="profile-location">\n    {location}\n  </dd>\n  {/block:showlocation}\n  {block:showoccupation}\n  <dd class="profile-occupation">\n    {occupation}\n  </dd>\n  {/block:showoccupation}\n  {block:showaboutme}\n  <dd class="profile-aboutme">{aboutme}</dd>\n  {/block:showaboutme}\n</dl>\n{/template:ProfileGadgetPersonal}\n\n{template:ProfileGadgetTeam}\n<ul class="profile-data-list">\n  {block:authors}\n  <li><a href="{userUrl}" class="profile-name-link g-profile"\n      style="background-image: url(\'{profileLogo}\');">{display-name}</a></li>\n  {/block:authors}\n</ul>\n{/template:ProfileGadgetTeam}\n\n{template:ProfileGadgetDefaultIcon}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB40lEQVRIx7XWwWoTURQG4Lst0jTiolRa2qW4sAWhbrsTBJ8h2bpKNkUUBKGL2idQfIgGuhNsLW7UTaiPYTFpN92Y1s/NmTSEzGSmpj8MAzPnP//cc/97zqRUACyggX30cIlB3C/j2X7E1HJyJBSKtNGPZJ/wAg8xh3lsYhtHEdNDq7QQVnGCP3iJO2kKsIId/AruaqEQ1mMVh7iXKgJL6OIM6xOFYiV9fMTddENgEQchtjpJqIvDNAPEPn6PnNdCIxv/oIBcx7FrHKNeEL+B32hhaOE+3kz5ylGRodgUzl64sZbQxMU0d8lHfYobL9BI6OBribpXFgreZ3RSuONVCaHKpQvea/QT/uJJCUIlM4zwnuIqE6pVsG69jMDYubrKaj+fbglYzoQusVkQuIa30cPGcRLv1gr4zzOhHrZzgpo4Nx3naObk2M3MsI+jipYubXV8y+zdiM6wMgOhrQlGGKCZUIvy7dyC0Ic4pwvZgxZOsTQWuFXxqo9wH8fwbI+PiZNo64szsPT92Jtu0eA7wNx/inzJ9r1olJ/hJzZuIPIoWlP+KB9bWTeG1t4kN+a0mffhsO4op8zvVivceIEfeIdnkXQ5TvxujOxBHNp25f+6CKrFOetEza/Grn68aw4tnCP0D7HegqWQsg0fAAAAAElFTkSuQmCC\n{/template:ProfileGadgetDefaultIcon}\n\n{template:ProfileGadgetDefaultIconSelected}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB8klEQVRIx7XWT0uUURTH8buVcJxoIYaiy2iRwgds6y4Ieg3OttW4kSgIAhfmKyh6ETPgLkiTNtVmsJeR5OjGTWpPm/MM0zjz/DE9cHng3nPO93nu/d1znpQKDDNYRwfHuMB5PC9irhM+jXE5sixLWZYVQjbQj2Qf8RwPMYVprGIT++FzjHZlEBZxiN94gTupxLCALfyM2MVCEJbjK/ZwL9U0zKGHEyzH3L+g+JI+PuBuuqZhFrsBWxwH6mEv3YDFOX6LnAlXDv5BQXATB8hiHKBZ4L+CX2hjIOE+Xpe85TBkACuJ2Qk1NhJaOCtT1xhIPpolajzDekIXXyrse21QxH1CN4U6XlYA1d66iHuFfsIfPK4QUEsMQ3FPcJmDGjWk26wCGLlXl/neT6dbMsznoAusFjgu4U3UsNEzOoy1pYL4ZznoGJsTnFo4LVBcPk7RmpBjOxdDB/s1JV1Z6viay3s9KsPCDYDWxgjhHK2ERmzf1i2A3sc9nckn2jjC3IjjWs3RHIoVzXNjUL1j4TDK+uwNSPp+nE2vqPHtYuo/IZ/zc78CGmrlJ/iBlWtAHkVpGrTysp+TXjStnXFqnFBm3oXCesMxVX632qHGM3zHWzyNpPNx47ejZZ/Hpd0YzVMKClgj7lk39vxyZPRjrTWQ8ATQX2/rqVTnkWAqAAAAAElFTkSuQmCC\n{/template:ProfileGadgetDefaultIconSelected}\n');
    function G(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    G.prototype = $.extend({
    }, blogger.core.gadget.prototype, G.prototype);
    r = G.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #profilecss').remove();
      $(p).append('<style id="profilecss" class="singleton-element">' + this.template('ProfileCSS') + h);
      this.requestData(c, 'Profile' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || 'Profile'
    };
    r.getIconUrl = function () {
      return this.settings_.photo && this.settings_.photo.url || this.template('ProfileGadgetDefaultIcon')
    };
    r.getIconSelectedUrl = function () {
      return this.settings_.photo && this.settings_.photo.url || this.template('ProfileGadgetDefaultIconSelected')
    };
    r.getContentHtml = function () {
      return this.template('ProfileGadget', this.settings_)
    };
    blogger.templates().compile('/* Copyright 2011 Google Inc. All Rights Reserved. */\n{template:SubscribeCSS}\n\n#subscribe {\n  text-align: left;\n  margin: 10px;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.subscribe-by-email,\n.subscribe-rss-feed {\n  min-width: 250px;\n  padding: 4px 16px 16px 16px;\n}\n\n.subscribe-by-email {\n  border-bottom: 1px solid #ddd;\n}\n\n.subscribe-by-email-title,\n.subscribe-rss-feed-title {\n  font-size: 16px;\n  margin: 8px 0;\n}\n\n.subscribe-by-email-address {\n  border: 1px solid #ddd;\n  {css-box-shadow value="inset 0 0 1px rgba(0, 0, 0, 0.3)"};\n  font-size: 12px;\n  height: 27px;\n  line-height: 27px;\n  min-width: 192px;\n  padding: 0 0 0 6px;\n}\n\n.subscribe-by-email-submit {\n  display: inline-block;\n  min-width: 54px;\n  border: 1px solid #dcdcdc;\n  text-align: center;\n  color: #444;\n  font-size: 11px;\n  font-weight: bold;\n  height: 27px;\n  padding: 0 8px;\n  line-height: 27px;\n  {css-border-radius value="2px"}\n  {css-transition value="right 0.218s"};\n  background-color: #f5f5f5;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f5f5f5,#f1f1f1);\n  background-image: linear-gradient(top,#f5f5f5,#f1f1f1);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f5f5f5\',EndColorStr=\'#f1f1f1\');\n  {css-box-sizing value="content-box"};\n}\n.subscribe-by-email-submit:hover {\n  border: 1px solid #c6c6c6;\n  color: #222;\n  -webkit-transition: all 0.0s;\n  -moz-transition: all 0.0s;\n  -o-transition: all 0.0s;\n  transition: all 0.0s;\n  background-color: #f8f8f8;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f8f8f8,#f1f1f1);\n  background-image: linear-gradient(top,#f8f8f8,#f1f1f1);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f8f8f8\',EndColorStr=\'#f1f1f1\');\n  {css-box-shadow value="0px 1px 1px rgba(0,0,0,0.1)"};\n}\n.subscribe-by-email-submit:active {\n  background-color: #f6f6f6;\n  background-image: -webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));\n  background-image: -webkit-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -moz-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -ms-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: -o-linear-gradient(top,#f6f6f6,#f1f1f1);\n  background-image: linear-gradient(top,#f6f6f6,#f1f1f1);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorStr=\'#f6f6f6\',EndColorStr=\'#f1f1f1\');\n  {css-box-shadow value="inset 0px 1px 2px rgba(0,0,0,0.1)"};\n}\n.subscribe-by-email-submit:visited {\n  color: #666;\n}\n\n.subscribe-rss-feed-view-rss {\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  padding-left: 28px;\n}\n\n.subscribe-rss-feed-add-to {\n  /* http://www.google.com/images/icons/product/reader-16.png */\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACfElEQVQ4T22TXUhTYRjH/0dn6pZNkkZa2rKrRMgshO4q6KbooqCbbrwqQhMsEPqAvsuK6KYuoroRQigogkxErMhMIqxZGNTWtjbSmcO5zfOx856vznlOmx3Zc3He8/7f5/k9H7wvh2XG3+gwLIml0tCEHJ3K8wvgY3MFz4aHj+FuauYsgT55ywcL3lp4MokCxAKwVBZsMQeFFyGlJbTFZ4sDKk7ehKowYrKJUagvn0CMW7AlgCIxtIamiwNcXVcoWNNUaLoKXeAhPLgLefw9VSAm01BlDb43g/BvauUcLaRudRu5PYcKLa30b4RugVQV2etXwY+8hpU9JyioHx82k+j2DMqvKTS4vOnZP47RtrgT6D9YAv54B5RIDKqqLwHKezUDhl402JBFGIwHFBmt610Y8A0hfOkO+RYqsLILPTKiKRVvf+noHdUQn5fJ6X+Atf99rgrRtt10VvduCKqmgbMAme5Fx+DufdRwZlCyIf8qsP5jZz1Ith+BFIw6AcN7g/BVV6ChpsqevDm4L/FFHHikIZMVCu0F/M+hTwQgfpgkgCQzu4JU1wIFBqILaFxTiapKF03+WSCNY09lsxXBdPRgZLKLYDWXL2Dd1ibMzCZsQLIzSVmpzKTdTq23jNZ99zP4FM7AUCTM3t4CZvrV+nyQcyLCP7+Dc50IGq/aFXJurqukNZKUsKGmzKyCYeAbw9G+adKVvl0QxSzc7lW0D4WmwJV2fjbmzleTMDUjYfNaO/NYMI0djW66LPWnY6R9PbWaVsbshNu27+QIMNXjJYE3Xx9XWgJPxQqM/cigzV9OesvFCK1G/37HzbU0+0EcfuG4ieS9zIoFWy5/AXxpdXGYm4ahAAAAAElFTkSuQmCC);\n  background-repeat: no-repeat;\n  background-position: 4px center;\n  padding-left: 25px;\n}\n\na.feed-reader-link {\n  display: block;\n font-weight: normal;\n margin: .5em;\n text-decoration: none;\n z-index: 1000;\n}\n\n.subscribe-netvibes,\n.subscribe-myyahoo {\n  background-repeat: no-repeat;\n  height: 17px;\n  width: 91px;\n}\n\n.subscribe-netvibes {\n  /* http://img1.blogblog.com/img/widgets/subscribe-netvibes.png */\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAARCAMAAACFKyChAAAC7lBMVEX////////o8f9fti79/v/y9/+It/55rv5Fbrj8/f76+/33+v/z+P/q8//l7/+Cs/5rpv5dnf76/P9VmP74+vyUvv6Gtv56r/41oTVLcrqqqqr2+Pvv9f/h7f/e6//Y4fDL4P/R2+3F3P/C2v/N2OyqzP+2xuSix/5Ysy/5+//MzMxxqf5qpf6EntBno/5Zm/5fti9eti41ojQ1oTSSvf4+aLYsWa4iUqv5/P/4+fz0+f/29/v09vrx9Pro8v/r7/jm8P/g7P/j6fXa6f/e5fLU5f/T5P/a4vHV3u/J3//E2//L1uu+1/+51f+uzv+9y+atzv+6yeWoy/6myf+fxf6wweGcw/6awf6Nuv6gtNuJuP6EtP6CtP6As/6SqtV3rf51q/5tp/5mov5jof5env5bnP5ctS5ctC9btC9TsDBOrjFhg8NIqzI+pjM9pjM+pTM5pDRRdr1Mc7tIb7lBarcvkRg9Z7UrixgriRgqiRglghkxXbEifxkifRkgeRqQvP4ddhuuv+AyoDX+/v/2+f/2+Pzy9vvy9frt9P/w8/rs8//s7/fq7vfo7fbi7v/i7f/n7Pbg7f/k7Pnn6/bh7P/f7P/d6v/h6PTh5/Tf5vPY5//W5v/d5PLR5P/a4fHO4v/X4PDH3f/D2//C2v7C2f7M1+zM1+u/2P671/+61f+31P630/7Cz+ix0P+/zeawz/60xOOyw+KywuGawv6Zwv6rvd+YwP6XwP6Svv+httuLuf+Luf6Kuf6LuP6KuP6es9qbsdl+sv58r/6PptOFp9+JotKGoNCDndB9ms5enf50kspRlv5dtC5ctC5XszBYsi9TsTBTsC9oiMVPrjFPrjBjhcRJrDFJqzJFqjJFqTJCqTJDqDI/pzNApjNYfMA8pTQ7pDM5pDNWer84pDQ5ozQ5ozM4ozU3ozQ0ojU0oTRKcbpJcLpIcLkvkRcvjxgtjhgtjBg8ZbI6ZbQohhgohRk0YLIifxoifRooVq4aTKg1STZjAAAAAXRSTlMAQObYZgAAAmVJREFUeF611EOMbE0ch+H+tc2xbdu2bdv2XNu2bdu2bdv8uLsnmaRzchaTWUw/VUn9a/Puqmg2KkOj2UBFbHSINkYpDXr7I0NJC/3xVU6pbkhziB9A+11FZcW39vavVyuvvEc/TlgoR7oB9IstB9B+bmVl9R34QRwvQBIZpbsw0R+A7rYt3kBUx+lZM4OnM6fNFdP1WYAkRWAUCgIz3EgIQGi0KIhFbT+t7uruBjo7u24+Acnd3mdcj1pvGH9u+dQchkueP89wyiTWJ8uPpDlmABocjt3FQ0KI8m01i8NB1yzUVGygth/W/O67/VXzACQL3GvDdv4dotZqz+PbN6tN5R4fJ7YzRZKtng97OHCsPEZvaak52DnW2ChlbXJgebHXUNv36nr6bj1190Hi9yUZxu6zzTzOFxTY/78WLSOBTHWc2gq4EW3JPgApuQElB5LMzRVxYmlRhomA2r7z6J+hQ4AhQ/99fBsk41t3wMx9SqxHdnq6RXKgrzbRnmcbJxURbTcgLxOApSSoJDVm1cpoOs8gIbcsntq+0VjfOAwY1tBQXw2SGdy9PLMOw7Hcc8C6C/663Gw+mDmO+wF5VpbcS0NmIlgu2w6Nw3LQd09azfYZfZRNbV9787JpBOHt66brIHnl2Rsb+V/bZGPtNu1fZ/nMW54HgfWKCMBS4Ziw53I+p1SmLgA9T8pxUB+zWVZUaBdNbVd9cHUhlpaWi2sVSJYYrvBTW2bIx8TEXfMBBFqEAHIxDxAFz9ETGQgnmCxmArCOMNUHWAGhpnRQ23BmMJwYTs7EHtw3r9q/SlWINk1HZf4AwCDWutwHXcUAAAAASUVORK5CYII=);\n}\n\n.subscribe-myyahoo {\n  /* http://img1.blogblog.com/img/widgets/subscribe-yahoo.png */\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAAARCAMAAACFKyChAAAAe1BMVEX////8GSH///9UVFT+xcj/8PH8KzL+jZH/5eb9SlH/Zmb+19j+sbP8dnv9bnOjz//8PEP+n6KZmZn09PT9f4P9WmDU1NRmZmYNJppeXl7f398pXOZ0dHR+fn7q6ur/9vbMzMwPQtuJiYm0tLQAAJmpqakYMqUAM8xKc+0wAtJHAAAAAXRSTlMAQObYZgAAAXdJREFUeF6108eu2zAYhFHPsDd1ubfbkrz/E4bShQ3aSRYBrE+ACGhx8IMiV91irVYdF6rbZPvnY58vtX/lDofD29z2xfY07jY3rf+yvfcpGcWHLorFF2WtJS0Qn23Whf0hjuRanNZi1/MqvkhZAU6x9aMbJUkb8mM0BjJIaUnlkNOKgC3seWrW+XWzv4T44FGc2Imu3x05FQBJpdGkNgQaIJESVA1yLedxrYaFK/bkkEXOlfauE9nuN+Jd7DnXAjbCUAEjmdAa4xyhSUa4iSYtDNKTXdes67qw34Xoss1rXvkdBwCSDFqnya5G3zgJyRya73FHSB0L++1ve7I+bfrJ5lH0vDXT1KOHooYlBxggStngEoFUaUQalnb5L+/2+crZPgne0yBVg0hU0ulByqGKtnKjc4EMlfeDZQv/h517sMlne9CAdu1glATSpTiJ5dFUVSDu9o9t2WyfJ5rrM8n9/mbI7/7r7nw+9NJ7uUyzvVTZXm0W6zcSt0JtZ/HJvQAAAABJRU5ErkJggg==);\n}\n\n{/template:SubscribeCSS}\n{template:SubscribeGadgetTitle}\nSubscribe\n{/template:SubscribeGadgetTitle}\n\n<!-- Attributes {feedPath}, {feedUrl} -->\n{template:SubscribeGadget}\n{SubscribeGadgetFollowByEmail feedPath="{feedPath}"}\n{SubscribeGadgetRssFeed feedUrl="{feedUrl}"}\n{/template:SubscribeGadget}\n\n{template:SubscribeGadgetFollowByEmail}\n{block:feedPath}\n<div class="subscribe-by-email">\n  <div class="subscribe-by-email-title">{lang:Subscribe via email}</div>\n  <form name="subscribe-by-email" method="post" target="popupwindow"\n      action="https://feedburner.google.com/fb/a/mailverify?uri={feedPath}"\n      onsubmit="window.open(\'https://feedburner.google.com/fb/a/mailverify?uri={feedPath}\', \'popupwindow\', \'scrollbars=yes,width=550,height=520\'); return true">\n    <input type="text" placeholder="{lang:Enter email address}" name="email" class="subscribe-by-email-address" />\n    <input type="submit" class="subscribe-by-email-submit" value="{lang:Submit}" />\n  </form>\n</div>\n{/block:feedPath}\n{/template:SubscribeGadgetFollowByEmail}\n\n{template:SubscribeGadgetRssFeed}\n{block:feedUrl}\n<div class="subscribe-rss-feed">\n<div class="subscribe-rss-feed-title">{lang:RSS Feed}</div>\n<div>\n  <a class="feed-reader-link subscribe-netvibes" href="https://www.netvibes.com/subscribe.php?url={feedUrl}" rel="noopener" target="_blank">&nbsp;</a>\n  <a class="feed-reader-link subscribe-myyahoo" href="https://add.my.yahoo.com/content?url={feedUrl}" rel="noopener" target="_blank">&nbsp;</a>\n  <a href="{feedUrl}" class="subscribe-rss-feed-add-to">{lang:View RSS Feed}</a>\n</div>\n</div>\n{/block:feedUrl}\n{/template:SubscribeGadgetRssFeed}\n\n{template:SubscribeGadgetIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMzozNzo0NSswMDowMKUw/sAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDM6Mzc6NDUrMDA6MDDUbUZ8AAAClklEQVRIie2VPWgUQRTHZ9c7B3NaRTQnphCJTQpBjIiNKRQsAkEkKIIQG0GwEGIrwVo4SBq5QrAQCVuIhcWlSoJ3TapEMHGDx3EZ1r1ks7nbvcvO7OzHs7kJs6fx9CBW/qs37z3e773Z2RkFAAAdotTDLP5PACl54TjOawD4pCjK6VQqdUFV1SsY42FVVXtvBCSZpvm4M14sFs9YlvWUUroOPagrQJJaq9Xu+r5f6Rlg2/aMYRjXlpaWBhFCyq8o8/PzmUaj8SqO4/ivAbIYY1az2ZwzDGN8YmLiSCfINM3JMAx5zwBZlNINQsidTsjOzs54N0gC0Gw2n6yurp7b2tq66TjOC0rpFzneaDS0YrF4QoYYhvEQAA7crgQgDMPJzi4rlcotz/M+ixzP81ZKpdIpOWd3dzffMwAhhPL5fLper+dEp57nrciTaJp2nDFW7Qrwff+j67rPCCHXNU376cNaljUlII7jzMkxQsj9rgBZjDFSq9UeoY7jWq/XZ0QOIeS2FFIZY/ofA4Rc1/2Qy+WOiSqzs7OYMbYGAEAp/To9Pb1/jdi2PdUVEMdxxBhb55xvS5D38iSbm5vjIlatVseEf3l5eTCKosSJSgCCILB1XR9BCKGFhYWUbds5ETNNUz4ACmOsDADQarXeylu4t7e3diDAcZzncvLo6GjK930TAIAx9k2ewnXdl22/2QF4I9dMXMNhGH6X14uLi2EURdsIIYQxPl8uly+LGOe81PYPFAqFrPBHUbQh10gAMMb35C51Xb+IMR4W6/7+/kvCppSWhT00NHRW2EEQbMs1Ew9OJpO50Wq1CkEQvFMUZaCvr29KVdX9/yGdTo9xzo+2t+Kk8Gez2Qec86vtyUbkmgrA/0f/9/oB/jP57svVdZcAAAAASUVORK5CYII=\n{/template:SubscribeGadgetIconUrl}\n\n{template:SubscribeGadgetIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMzozNzo0NSswMDowMKUw/sAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDM6Mzc6NDUrMDA6MDDUbUZ8AAABlklEQVRIidXVv2sUQRTA8c9dzoionZhETCGCjYUgRsTGJoEUgSNYRAQhNoJgIZythbUgpBILIUWQkEJSpLCX9EEwmmAIQTAQ8R8QNRY3B2/nVrN6nOCDx75fO983O7MzNezro9T7Ofg/ATQy/zleYwjncBnne21kP+jdkvwp3Me7rLaqHgjoSB0z2O4FMIerGEXtF6CjeIoffwOI+hmLaGKgBDSLr70Aom7iegmkWQFScO7hDCbwCG+z/BKOZ5DbB3yugjNb0uUk3oSaNZzMap71AoBDeBI6Xctmcgw7VQAreIBryhe2FSCLWe5mFUDUj7ije7vOhZrpEK9j408AHV3GkTDQYayn3HvFY6RVBfBd+1jYC7GX2UyaITcV4qO6d1TB+YKxVNzQXtiyDVDDVoovKMq63wAeZsUN7Kbch2wWj1N8N3tnPo6ZH8OfMv+b9qeCs7gUcqvpOYyREN+MA+SAG1mXF7Tvg45cDPZWsE8Hey/YXRfOOF7hReqspfg/TGEw2SdC/BauJHssxNWkheiX/P+X/k/rG+LSAx2t2wAAAABJRU5ErkJggg==\n{/template:SubscribeGadgetIconSelectedUrl}\n');
    function H(a) {
      blogger.core.gadget.apply(this, arguments);
      this.j = ''
    }
    H.prototype = $.extend({
    }, blogger.core.gadget.prototype, H.prototype);
    r = H.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #subscribecss').remove();
      $(p).append('<style id="subscribecss" class="singleton-element">' + this.template('SubscribeCSS') + h);
      var d = c.resources() [0].baseUrl;
      this.j = (d.match(/^https?:/) ? '' : 'http:') + d + '/feeds/posts/default';
      a && a.settings && a.settings.widget_ids && - 1 != $.inArray('FollowByEmail1', a.settings.widget_ids) ? this.requestData(c, 'FollowByEmail' + this.suffix_)  : this.ready_()
    };
    r.getTitle = function () {
      return this.template('SubscribeGadgetTitle')
    };
    r.getIconUrl = function () {
      return this.template('SubscribeGadgetIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('SubscribeGadgetIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('SubscribeGadget', {
        feedPath: this.settings_.feedPath,
        feedUrl: this.j
      })
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetTextListCSS}\n.gadget-textlist {\n  padding: 12px;\n  max-width: 320px;\n  min-width: 120px;\n}\n\n.gadget-textlist-item {\n  line-height: 14px;\n  padding: 8px;\n}\n\n{/template:GadgetTextListCSS}\n{template:GadgetTextListDefaultTitle}\nText List\n{/template:GadgetTextListDefaultTitle}\n\n<!-- Attributes {links} -->\n{template:GadgetTextList}\n<ul class="gadget-textlist">\n  {block:items}\n  {GadgetTextListItem}\n  {/block:items}\n</ul>\n{/template:GadgetTextList}\n\n{template:GadgetTextListItem}\n<li class="gadget-textlist-item">\n  {item}\n</li>\n{/template:GadgetTextListItem}\n\n{template:GadgetTextListIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAOCAYAAADJ7fe0AAAAJ0lEQVQoz2MwNjb+D8MMUIAsRgxmGDyGDB4wGrCjAUuPgP3//z8DAG+r2iZzG/daAAAAAElFTkSuQmCC\n{/template:GadgetTextListIconSelectedUrl}\n');
    function I(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    I.prototype = $.extend({
    }, blogger.core.gadget.prototype, I.prototype);
    r = I.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #textlistcss').remove();
      $(p).append('<style id="textlistcss" class="singleton-element">' + this.template('GadgetTextListCSS') + h);
      this.requestData(c, 'TextList' + this.suffix_)
    };
    r.processSettings = function (a) {
      this.settings_ = a;
      this.ready_()
    };
    r.onError_ = function () {
      this.enabled = !1;
      this.ready_()
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetTextListDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetTextListIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetTextListIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetTextList', {
        items: this.settings_.items || [
        ]
      })
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetTranslateCSS}\n.gadget-translate {\n  padding: 9px 13px;\n}\n{/template:GadgetTranslateCSS}\n{template:GadgetTranslateTitle}\nGoogle Translate\n{/template:GadgetTranslateTitle}\n\n<!-- Attributes {suffix} -->\n{template:GadgetTranslate}\n<div id="gadget-translate{suffix}" class="gadget-translate">\n</div>\n{/template:GadgetTranslate}\n\n{template:GadgetTranslateIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABvUlEQVRIx63WsWsUURDH8SRnJIQDLwTBNMZe8P6HFBamCWIrhHQ2MWihkEDKNGLl3yCxEMQqjZB/IJgihXbRNCIoAQPHyZmPzUQe6+7dvtsMDLtvZofv23n7fm8n0MV79NW3ftR0J+oa9rGF2Yya2ajZzwHBVEVuDo8xV5KbgixQct/BYuJLMZGlQrxTrM0F7dRco52moIX4OMr8LT7E/UIjUBK7gydoxfg6fuHhqNpcUAc/8DTGL3GC6UsFRXwDZ7iHHjbq1uaCruAoFv+o+DaX1bpreIEBTuO6HJt7kKEgg6jplu2jZ7E+3/Eo3mwVH41vB0XQbXzBJtolCjK2/SdBmMFqhVRV2efwoaB/oop2bEp4hckaoMPkmcNhoHGOidTWMR++XgkqtOdWkjut0bp+AJ6Hz1dNuBYIk/hTUv8GLXwNb0VsbNAM1nBeqL+LlWS8ErGRoKvYS2Hh3xJZurDjOPzauBHejtjxUFAy+73Cc70k/zpi25jGLt6F70ZseySoAtaL+DJ+RwsXcb+kSw8idz4SlIjqRUtuxnHeSzTsU0hV0X5GblALVPIjctZIgjJU/qCRqGaAuk2Oib+ZfjulBtlUHAAAAABJRU5ErkJggg==\n{/template:GadgetTranslateIconUrl}\n\n{template:GadgetTranslateIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAABw0lEQVRIx62WvUoDQRSFY6IiIWAkCKZRe8Et8gYpLLQJYiuInU0ULRQUUqYRK59BYiGIVRohLxBMkcJ0URsRlICBJbJGz4UTGcbd7Ew2gY/duXfvnvnbM4nlcjkH3IEe+DGkxxonZvrDwzVwBpIWNUnW1GyEpIfxgNwc2JerTy4utVZCyn0aLCnk2ZG8Fk/rtbZCZcM1KkcVynJz+HED7nmfjSSkxFbBIUiwPQ8+wXZYra2QrNU7OGL7AryAqbEKMX4AumAduNI2rbUVmgRNLn5TH824pm4WnAMPdHjd4MftWTiIxxrH7zs65vq8gT2ObAc8WAjo1HWhFfAETkHKx0FG5p8F4X5GRhBgVUG0yFChP1OVUfCjlOQlmDAQaijPNIYJjXJMqBRBhhQDhbTpWVaSHYOp61HghGSCOmwkJFMIvn1ecC02BZ5JgrGRhWSD7IK+9oI1UFDaBcZChaZBVRUjr4otDXJtHn6ygRZIirH2UCGl91XtQVfJXzFWElsCFXBLKoyVQoUCxFzGxYa+OIVy0m76TNMWc/1QIcVUB1OyyOPcVTzskValC30w5xkJ+fwR6UayIAuXr0cyVQshJ8ox8Qty20EB8f+CcwAAAABJRU5ErkJggg==\n{/template:GadgetTranslateIconSelectedUrl}\n');
    function J(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    J.prototype = $.extend({
    }, blogger.core.gadget.prototype, J.prototype);
    r = J.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #gadget-translate-css').remove();
      $(p).append('<style id="gadget-translate-css" class="singleton-element">' + this.template('GadgetTranslateCSS') + h);
      this.requestData(c, 'Translate' + this.suffix_)
    };
    r.w = function () {
      var a = $.valueOrDefault('google.translate.TranslateElement');
      new a({
        pageLanguage: this.settings_.pageLanguage || 'en',
        autoDisplay: 'true',
        layout: this.settings_.layout && a.InlineLayout[this.settings_.layout]
      }, 'gadget-translate' + this.suffix_)
    };
    r.render = function (a) {
      this.isReady && this.enabled && ($(a).append(this.getContentHtml()), window.googleTranslateElementInit = $.proxy(this.w, this), $.getScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'))
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetTranslateTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetTranslateIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetTranslateIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetTranslate', {
        suffix: this.suffix_
      })
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetPopularPostsCSS}\n\n.PopularPosts {\n  max-width: 350px;\n  min-width: 250px;\n  padding: 0 10px;\n}\n\n.PopularPosts-content { padding: 8px; line-height: 14px; }\n\n.PopularPosts ul { padding: 0.7em 0; }\n\n.PopularPosts .PopularPosts-title { padding-bottom: 0.2em; }\n\n.hide-snippet .PopularPosts-snippet,\n.hide-thumbnail .PopularPosts-thumbnail {\n  display: none;\n}\n\n.PopularPosts .PopularPosts-thumbnail { float: left; margin: 0 5px 5px 0; }\n\n{/template:GadgetPopularPostsCSS}\n{template:GadgetPopularPostsDefaultTitle}\nPopular Posts\n{/template:GadgetPopularPostsDefaultTitle}\n\n<!-- Popular Posts gadget main template -->\n{template:GadgetPopularPosts}\n  <div class="PopularPosts {block:IfNotshowBoth} {block:IfNotshowSnippets} hide-snippet {/block:IfNotshowSnippets} {block:IfNotshowThumbnails} hide-thumbnail {/block:IfNotshowThumbnails} {/block:IfNotshowBoth} ">\n    <ul>\n      {block:posts}\n        {GadgetPopularPostsContent}\n      {/block:posts}\n    </ul>\n  </div>\n{/template:GadgetPopularPosts}\n\n<!-- Attributes {href, title, snippet} -->\n{template:GadgetPopularPostsContent}\n <li>\n    <div class="PopularPosts-content">\n    {block:Ifthumbnail}\n      <div class="PopularPosts-thumbnail">\n        <a href="{href}" target="_blank">\n          <img alt="{title}" border="0" height="72" src="{thumbnail}" width="72" />\n        </a>\n      </div>\n    {/block:Ifthumbnail}\n      <div class="PopularPosts-title">\n        <a href="{href}">{title}</a>\n      </div>\n      <div class="PopularPosts-snippet">\n        {snippet}\n      </div>\n    </div>\n    <div style="clear:both;"></div>\n  </li>\n{/template:GadgetPopularPostsContent}\n\n<!-- Base 64 code for image /popularposts/resources/icon.png -->\n{template:GadgetPopularPostsIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMjoxMDo0NCswMDowMGRhjkkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDI6MTA6NDQrMDA6MDAVPDb1AAAC4ElEQVRIibWWQWsTQRTH35SlhoIHD2IVWlvFUsGLXnrQfoCeBUGPfgAPXvS2nvQiCvXiwSIe/ACFFIK0VLs5lFJbmkWyISwmuK5p4iaZZDczm53k78FdEGltgu077b55b37z/m9mdxgA0AmaRkQEIFRKfT3WiTVtmjF2igCg2+3mB0nSdX1E1/WRQWK73W4eAIYCVCqVu5VK5e6JAHRdH5FSfpFSfhmkiqEB5XL5DmJzHOfOcQNYEAQ5AH0A/SAIckTEjg3guu5tAGi32x/a7fYHAHBd9/Z/A5aWlk4Xi8XrUso9AP1CoTBfKBRuAehLKfdKpdKN5eXl0wMBtra2Jlqt1qMgCN4IIT5JKd1er9dPdBdCrCXJQoi1xN/r9fpCiB9CiA3f95eazeZjwzAmE4CWJK2srHyfnZ2dGRsbu09EpJTqhGGYI6KiUqq4v7//Pol1HOfB+Pj4PcbYFU3TrmiaNqNp2jwRzXPO366urjpzc3O/g/+SiHme9zpe8TfbtmeSSS3Lmg6C4HMQBJ8ty5pO/LZtzwghvgGA53mvKW7+v3rA6vX6IgBEUeSapnmViIhz/iSRhXP+hIjINM2rURS5AFCv1xfpj511ZJNrtdrzuJJ9y7Iu2LZ9SynVUUp1yuXyTcuyLkgpKwBQq9WeH9nkg3aClDIHAJlM5jwRUTqdPpNOp88QEWUymfMAIKXMHZQ7CICFYdgUQvxMHKZpTmxvb08m70KIn2EYNumAQ3ckwDCMyViijxsbG2c55y+UUkIpJTjnL3d2ds52Op2PAGAYxuTQgGq1uhADSlEUteKm16Mo8uLnlhCiBADVanXhMMChX8XR0dFrRESpVOoiY4x5nvcsm81eymazlxuNxlPGGEulUhf/jD3QDqvA9/13SinZaDRera+vj/89vrm5eY5zvqiUkr7vvxtaIsdxHubz+alDVxbb7u7ulOM4D4cG/K8lABYfzhP76TPgZK8tvwB1fydTuKz59wAAAABJRU5ErkJggg==\n{/template:GadgetPopularPostsIconUrl}\n\n<!-- Base 64 code for image /popularposts/resources/icon-selected.png -->\n{template:GadgetPopularPostsIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMlQwMjoxMDo0NCswMDowMGRhjkkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDJUMDI6MTA6NDQrMDA6MDAVPDb1AAABs0lEQVRIibXVP2sUURQF8N8uARtFLMQ/kJgoBmJMoa2xsUsrAcGP4SdIozZBQRsbBRsL/QqihXXQhMiiFgYEo4UWghIbx2LOsKNMZmfRHLjMfeed++6ffY/tobCHmMj3J97/57NnsI+yg0HHoH6sCwYouoorXImNha4d9PE61qWwsTtYxpnY8hhxnTroYQO/Yhvh2jBWB5exgKexhXCd0NbBAZzDurLyi1iMv47z0TRhgGKiRkziKk7X7KjhKJ7hRfznuIS1FPgZ72r2qKmDPu5nXeA7XuEJbmC+FjOP63iMl9FWcQ9y1iDrP0bUw71wHzBbO3QmFa/FrzAbbZHYquPGBFWSO+E/Yi78Sq3KlXBz0RSJqd+sXRNUWDWc73Hlj/sjdiHcp2hWG+JHJqC87wWOZX0oJlwRTRNGvoMepvAF2+H2G17L7exNaXl0bQkmcRCbOIxbeIs3uB1uM5rJlnN2HdFS9rbwLf7XVF2E24q/1BA/ckRn8z2hHMFNnMQp5bvoZa+uHauDh9jBXeWL/htHlFdzJ9rGDtoSXMN0W2XBdLRjJ/hXDFD0kmDP/vSrBHuG3x6UjyyrVHcHAAAAAElFTkSuQmCC\n{/template:GadgetPopularPostsIconSelectedUrl}\n');
    function K(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    K.prototype = $.extend({
    }, blogger.core.gadget.prototype, K.prototype);
    r = K.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #PopularPostsCSS').remove();
      $(p).append('<style id="PopularPostsCSS" class="singleton-element">' + this.template('GadgetPopularPostsCSS') + h);
      this.requestData(c, 'PopularPosts' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetPopularPostsDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetPopularPostsIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetPopularPostsIconSelectedUrl')
    };
    r.getContentHtml = function () {
      for (var a = this.settings_ && this.settings_.posts && this.settings_.posts.length, c = 0; c < a; c++) {
        var d = this.settings_.posts[c].title;
        this.settings_.posts[c].title = 50 < d.length ? d.substring(0, 50) + '...' : d
      }
      return this.template('GadgetPopularPosts', {
        posts: this.settings_.posts,
        showBoth: this.settings_.C && this.settings_.D,
        showSnippets: this.settings_.C,
        showThumbnails: this.settings_.D,
        thumbnailSize: this.settings_.F || '',
        title: this.settings_.title || ''
      })
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetImageCSS}\n\n.image-gadget-content {\n  padding: 0 12px;\n  text-align: center;\n}\n\n{/template:GadgetImageCSS}\n{template:GadgetImageDefaultTitle}\nPicture\n{/template:GadgetImageDefaultTitle}\n\n<!-- Attributes {link, width, height, title, sourceUrl, caption} -->\n{template:GadgetImage}\n  <div class="image-gadget-content">\n    <a href="{link}">\n      <img width="{width}" height="{height}" src="{sourceUrl}"\n           alt="{title}" style="visibility: visible;" />\n    </a>\n    <div class="caption">{caption}</div>\n  </div>\n{/template:GadgetImage}\n\n<!-- Base 64 code for image/resources/icon.png -->\n{template:GadgetImageIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAyUlEQVR42u2UMQoCMRBFR7Sw0ksseIDUNiIewNZmK2sLwXN4E8EDiFUSSO0BrMUrjH+qhFhkRzaI4INXpJi8yRZLzAyrQcSVSQPUp//ADwWstXN4ggtjDBXUB0IILCDwdM5New3g0i1HJLJHhFIzdAHZPkXOuHQEx/AK73CmC8Ttl/yOBDbwkJwvnwbOHMkjj+xVK1UAA40MFonB4L0faAJHViDLILDuFMDlExnQgsANDrsEdhzRRtpiIN9e+6m+8C+qTP1A5Qi9ANfX3A/iP+/QAAAAAElFTkSuQmCC\n{/template:GadgetImageIconUrl}\n\n<!-- Base 64 code for image/resources/icon-selected.png -->\n{template:GadgetImageIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAMAAADto6y6AAAAb1BMVEX///83Nzc2NjY4ODjPz881NTVOTk739/dJSUl2dnZFRUXz8/Ovr6+kpKRaWlrLy8v5+floaGjg4ODKysq4uLiioqJpaWlzc3NcXFxGRkbIyMjj4+NfX1+NjY2+vr709PRAQEBWVlanp6ezs7NSUlISFTdWAAAAAXRSTlMAQObYZgAAAIJJREFUeF610TcSAzAIRFEWkJxzzvH+ZzQjeWwxpvUved1CCh/XlBBDMlD6SQtQEPM/QHuTEDpd6Q8iGIrIKIKxQabpLM89LMTCcgWsPWwMgO0OwL6Fg+DTsYUTms5fuFwb4JvBe8S73/1RgA2e7s6ZKBlw9I8ClnuelSr4Uo00vusL6wAErFKALucAAAAASUVORK5CYII=\n\n{/template:GadgetImageIconSelectedUrl}\n');
    function L(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    L.prototype = $.extend({
    }, blogger.core.gadget.prototype, L.prototype);
    r = L.prototype;
    r.init = function (a, c) {
      this.ui = a;
      this.renderInLightbox = !0;
      $('head #Imagecss').remove();
      $(p).append('<style id="Imagecss" class="singleton-element">' + this.template('GadgetImageCSS') + h);
      this.requestData(c, 'Image' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetImageDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetImageIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetImageIconSelectedUrl')
    };
    r.getContentHtml = function () {
      this.renderInLightbox = !this.settings_.shrinkToFit;
      return this.template('GadgetImage', this.settings_ || [
      ])
    };
    r.onRenderComplete = function (a) {
      a && (this.renderInLightbox || $(a).parents().filter('.gadget-title, .gadget').addClass('image-gadget-content'))
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetStatsCSS}\n\n.gadget-stats { margin: 5px }\n\n.gadget-stats .blind-plate {\n  border-bottom: 1px solid #fff;\n  border-top: 1px solid #000;\n  filter: alpha(opacity=65);\n  height: 0;\n  left: 0;\n  opacity: .65;\n  position: absolute;\n  top: 13px;\n  width: 22px;\n}\n\n.gadget-stats .counter-wrapper {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: bold;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: top;\n}\n\n.gadget-stats .counter-wrapper {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: bold;\n  height: 30px;\n  line-height: 30px;\n  vertical-align: top;\n}\n\n.gadget-stats .digit {\n  background: url("https://resources.blogblog.com/img/widgets/stats-flipper.png") no-repeat left !important;\n  border: 1px solid #fff;\n  display: inline-block;\n  height: 28px;\n  line-height: 28px;\n  margin-left: -8px;\n  position: relative;\n  text-align: center;\n  width: 22px;\n}\n\n.gadget-stats .graph-counter-wrapper {\n  color: #fff;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.gadget-stats .stage-0 { background-position: 0 0 !important; }\n\n.gadget-stats .chart {\n  display:inline-block;\n  height:30px;\n  width:75px;\n}\n\n.gadget-stats .chart.white {\n  background-color: grey;\n}\n\n{/template:GadgetStatsCSS}\n{template:GadgetStatsDefaultTitle}\nBlogs Stats\n{/template:GadgetStatsDefaultTitle}\n\n<!-- Attributes {sparklineUrl} -->\n{template:GadgetStats}\n<div class="gadget-stats">\n  <!-- Content is going to be visible when data will be fetched from server. -->\n  <div style="text-align: center">\n    {block:IfshowSparkline}\n      {block:IfNotsparklineData}\n        <img src="{sparklineUrl}" width="75" height="30" alt="sparkline" {block:Ifbackgroundwhite}style="background-color: grey;"{/block:Ifbackgroundwhite}/>\n      {/block:IfNotsparklineData}\n      {block:IfsparklineData}\n        <span class="chart"/>\n      {/block:IfsparklineData}\n    {/block:IfshowSparkline}\n    {block:IfshowGraphicalCounter}\n      <span class="counter-wrapper graph-counter-wrapper"\n            style="padding:5px;">\n        {block:splitValues}\n          {IndividualCounter}\n        {/block:splitValues}\n      </span>\n    {/block:IfshowGraphicalCounter}\n    {block:IfNotshowGraphicalCounter}\n      <span class="counter-wrapper">{total}</span>\n    {/block:IfNotshowGraphicalCounter}\n  </div>\n</div>\n{/template:GadgetStats}\n\n<!-- Attributes {individualCounter} -->\n{template:IndividualCounter}\n  <span class="digit stage-0">\n    <strong>{individualCounter}</strong>\n    <span class="blind-plate"></span>\n  </span>\n{/template:IndividualCounter}\n\n<!-- Base 64 code for image /stats/resources/icon.png -->\n{template:GadgetStatsIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAALVBMVEX///////9dXV03Nzf////z8/Obm5va2tqCgoJERES0tLSPj4/Nzc12dnZQUFANaTq2AAAAAnRSTlPvMImsErcAAACDSURBVHheldAxCgJBDAXQETyAZ9iQwsYi04ggWPxvYxey2NjpTTyEB/AKHsGDOQtBx3J/E14Tkl9W+GZRlj8cCrrMB28dfN/h/kgwcKrvhCueu1xAsUt9TRgBN1lv0cAhKOpVJ7ThFtxEA2UwUeCMBrdRLPKcq8IViWOAMfOfvpC/qj5eR0uIUNLLMAAAAABJRU5ErkJggg==\n{/template:GadgetStatsIconUrl}\n\n<!-- Base 64 code for image /stats/resources/icon-selected.png -->\n{template:GadgetStatsIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAALVBMVEU3Nzc3Nzfa2tr///83NzdERESbm5tdXV20tLTz8/OCgoKoqKhpaWnBwcHm5uZSesK3AAAAAnRSTlPvMImsErcAAACDSURBVHheldAxCgJBDAXQETyAZ9iQwsYi04ggWPxvYxey2NjpTTyEB/AKHsGDOQtBx3J/E14Tkl9W+GZRlj8cCrrMB28dfN/h/kgwcKrvhCueu1xAsUt9TRgBN1lv0cAhKOpVJ7ThFtxEA2UwUeCMBrdRLPKcq8IViWOAMfOfvpC/qj5eR0uIUNLLMAAAAABJRU5ErkJggg==\n{/template:GadgetStatsIconSelectedUrl}\n');
    function M(a) {
      blogger.core.gadget.apply(this, arguments);
      this.m = {
      }
    }
    M.prototype = $.extend({
    }, blogger.core.gadget.prototype, M.prototype);
    r = M.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #statscss').remove();
      $(p).append('<style id="statscss" class="singleton-element">' + this.template('GadgetStatsCSS') + h);
      this.requestData(c, 'Stats' + this.suffix_)
    };
    r.processSettings = function (a) {
      this.settings_ = a;
      a = {
        url: a.statsUrl,
        data: {
          v: '0',
          action: 'initial',
          widgetId: 'Stats' + this.suffix_,
          responseType: 'js'
        },
        dataType: 'text',
        success: $.proxy(this.A, this),
        error: $.proxy(this.onError_, this)
      };
      $.ajax(a)
    };
    r.A = function (a) {
      this.m = a;
      this.ready_()
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetStatsDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetStatsIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetStatsIconSelectedUrl')
    };
    r.getContentHtml = function () {
      if (this.c = eval('(' + this.m + ')')) {
        for (var a = this.c.total && this.c.total.toString().length, c = [
        ], d = 0; d < a; d++) {
          var e = {
          };
          e.individualCounter = this.c.total.toString().charAt(d);
          c.push(e)
        }
        this.c.splitValues = c;
        this.c.lenViews = a;
        for (var f in this.settings_) this.c[f.toString()] = this.settings_[f];
        this.c.showSparkline && (a = blogger.tools.path.decode(this.settings_.statsUrl), this.c.backgroundwhite = a.params.style && a.params.style.match(/WHITE/));
        return this.template('GadgetStats', this.c)
      }
    };
    r.onRenderComplete = function (a) {
      var c = this,
      d = $('.chart', a) && $('.chart', a) [0];
      d && (this.c.backgroundwhite && (d.className += ' white'), $.ajax({
        url: 'https://www.gstatic.com/charts/loader.js',
        dataType: 'script',
        cache: !0
      }).done(function () {
        google.charts.load('current', {
          packages: [
            'corechart'
          ]
        });
        google.charts.setOnLoadCallback(function () {
          (new google.visualization.AreaChart(d)).draw(google.visualization.arrayToDataTable(c.c.sparklineData, !0), Object.assign({
            enableInteractivity: !1,
            chartArea: {
              top: 0,
              left: 0,
              width: 75,
              height: 30
            },
            hAxis: {
              textPosition: 'none',
              gridlines: {
                color: 'transparent'
              }
            },
            vAxis: {
              textPosition: 'none',
              gridlines: {
                color: 'transparent'
              }
            },
            legend: {
              position: 'none'
            }
          }, c.c.sparklineOptions))
        })
      }))
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n\n{template:GadgetPollCSS}\n\n.GadgetPoll { padding: 0 12px; }\n\n.GadgetPoll .poll-frame {\n  border: none;\n  width: 100%;\n}\n\n{/template:GadgetPollCSS}\n{template:GadgetPollDefaultTitle}\nPoll\n{/template:GadgetPollDefaultTitle}\n\n<!-- Poll gadget main template, Attributes {iframeheight, iframeurl, pollid} -->\n{template:GadgetPoll}\n  <div class="GadgetPoll">\n    <iframe height="{iframeheight}" frameborder="0" class="poll-frame"\n            src="{iframeurl}" name="poll-widget{pollid}" allowtransparency="true">\n    </iframe>\n  </div>\n{/template:GadgetPoll}\n\n\n{template:GadgetPollIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAAJ0lEQVQ4jWP4jx0wUIoZRg0eNZgmBmPVPzwNJkt+1OBRg+lsME0wAGzXma2Bd1DeAAAAAElFTkSuQmCC\n{/template:GadgetPollIconUrl}\n\n{template:GadgetPollIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAAKklEQVQ4jWMwNjb+jw0DAQMlmGHU4FGDqW8wLv3D0GBy5UcNHjV4OBgMAIMHkphlFw2qAAAAAElFTkSuQmCC\n\n{/template:GadgetPollIconSelectedUrl}\n');
    function N(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    N.prototype = $.extend({
    }, blogger.core.gadget.prototype, N.prototype);
    r = N.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #PollCSS').remove();
      $(p).append('<style id="PollCSS" class="singleton-element">' + this.template('GadgetPollCSS') + h);
      this.requestData(c, 'Poll' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetPollDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetPollIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetPollIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetPoll', this.settings_ || [
      ])
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetLogoCSS}\n\n.gadget-logo { padding: 6px; }\n\n.gadget-logo-item { line-height: 14px; }\n\n{/template:GadgetLogoCSS}\n{template:GadgetLogoDefaultTitle}\nLogo\n{/template:GadgetLogoDefaultTitle}\n\n<!-- Attributes {links} -->\n{template:GadgetLogo}\n  <ul class="gadget-logo">\n    <li class="gadget-logo-item">\n      <a href="//www.blogger.com"><img src="{fullButton}"/></a>\n    </li>\n  </ul>\n{/template:GadgetLogo}\n\n<!-- Base 64 code for image /bloggerbutton/resources/icon.png -->\n{template:GadgetLogoIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWBAMAAAAoU0G7AAAAKlBMVEUAAAD///////////////////////////////////////////////////+Gu8ovAAAADXRSTlMAAFCfr0DvzyAQj3C/rdBwigAAAHZJREFUeF6dz70JhGAQhOHxJ7ULMd4GDO7AXDsQe7ABc0Hs6Dq447I7phf3W3ZBMPPNHiYaADW1DkAGFLTE0NL6JeT0ekUZEEUVGBUrOQM7+U6LYSH/myF6nfG5iwla45CE4rKUjPiwC94AtIGv3fZEgZrWE9kBCpSeoeUfB5QAAAAASUVORK5CYII=\n{/template:GadgetLogoIconUrl}\n\n<!-- Base 64 code for image /bloggerbutton/resources/icon-selected.png -->\n{template:GadgetLogoIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWBAMAAAAoU0G7AAAAKlBMVEUAAAD///83Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzchX4A7AAAADXRSTlMAAFCfr0DvzyAQj3C/rdBwigAAAHZJREFUeF6dz70JhGAQhOHxJ7ULMd4GDO7AXDsQe7ABc0Hs6Dq447I7phf3W3ZBMPPNHiYaADW1DkAGFLTE0NL6JeT0ekUZEEUVGBUrOQM7+U6LYSH/myF6nfG5iwla45CE4rKUjPiwC94AtIGv3fZEgZrWE9kBCpSeoeUfB5QAAAAASUVORK5CYII=\n{/template:GadgetLogoIconSelectedUrl}\n');
    function O(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    O.prototype = $.extend({
    }, blogger.core.gadget.prototype, O.prototype);
    r = O.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #logocss').remove();
      $(p).append('<style id="logocss" class="singleton-element">' + this.template('GadgetLogoCSS') + h);
      this.requestData(c, 'BloggerButton' + this.suffix_)
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetLogoDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetLogoIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetLogoIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetLogo', this.settings_)
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetTextCSS}\n\n.text-widget-content {\n  background: #fff;\n  border: 0;\n  color: #000;\n  height: 100px;\n  max-height: 600px;\n  max-width: 400px;\n  overflow: auto;\n  padding: 10px 18px;\n  width: 200px;\n}\n\n{/template:GadgetTextCSS}\n{template:GadgetTextDefaultTitle}\nText\n{/template:GadgetTextDefaultTitle}\n\n<!-- Attributes {content} -->\n{template:GadgetText}\n<div class="text-widget-content"></div>\n<textarea id="text-widget-tpl" style="display:none">{content}</textarea>\n{/template:GadgetText}\n\n{template:GadgetTextIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMVQxNDowNjozMiswMDowMNXGl7QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDFUMTQ6MDY6MzIrMDA6MDCkmy8IAAADT0lEQVRIia1UXWgjVRi9aRoaSq30wbVVXBUqIoKKvogPLu6Lgi+L4IsirPShyCKIiMKuMvtSX0SQQpGIEHApaLTPuj4YVouMEaYpZEv6myHpMMnMbXqZ+zOdn3s/X1JJspM0u+x5m3vPd873nW9mELoLEEJ+Yoz9qev69N3UjQRN08ZN01wCAAiC4O/7YqLr+sPtdvuaEKIURVEAXaCUfnfPwoVCIY0xvhrHMQMA8H3fZIzdwBj/AgCglGKu615ACCHDMB6hlH4ThuFflNLCwcHBq0PFi8XiFOf8JgAA51w3TfPi6Z0Q4g+lFMMYX0QIoXK5/Kjv+1b3ZFLK2HGctxPFNU0bZ4z9DgDKcZwvNU0b677f3t5+vlarvXD6TCldgQT4vm/11yKEEGo2m+8AADiOszRKlIyxUpIBAECpVHoMIYTGuwscx/l1bGzs8srKyo1RDFKpVDPpXEoZVqvVdtIEC0KITSGEwxj7zTTNF4cZNBqNN5RSqr97QkjuDnKr1fq4nxjHMd3d3X12mInjOJeDIMCdBUeEkO/z+Xy2h5TL5TJhGB4nZel53g+DxLe2tp6ilK7Fcex3Xl/JOTfq9fqlHmKlUjk/aFmc83+TxHd2dp4Jw7CdVKOUUrZtX/mfvLy8PBGGIU0iM8Z+TDJgjN0c1FQnXm4YxkPdO9ASSCd7e3sv9YsXCoWpOI7jYQYAAK7rvttdlzo8PLwWRVHYicZqNBoXkrqvVqtPniUOAEAI+SR1Ko4x/nR6evqzTCYzcyokhLjted6Hc3NzxT6PFMb4ysTExAwaDGVZVh4hhJDrul8N6kJKGdTr9eE/sI6pbdvvb25unus53djYeEIpFQ0blXP+z1nqrVbrCwCAo6OjhZ4LQsjCWVlKKdXq6uoMQihlWdal9fX1B7o7bzabnyulFGPsVi6Xy/QYHB8ffzTCvpRhGI/btv0tAADG+D2EEKrVai8LIYoAAIyxW/v7+w/ekVuxWJyan59/PYqi9KDxAaA9OTn51uzs7AdxHNMgCH5Op9OvZLPZp6WUISHk67W1teuLi4vRWVEmIp/PZ7s/RCml9H3/tud5S5VK5fw9ifajXC6/FoYhOzk58XRdf+6+iCaZcM6PbNt+c9Sa/wAXVM9FG3h2CwAAAABJRU5ErkJggg==\n{/template:GadgetTextIconUrl}\n\n{template:GadgetTextIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyWlDQ1BDdXN0b20AABiVY2Bg3M4ABEwODAy5eSVFQe5OChGRUQoMSCAxubiAATdgZGD4dg1EMjBc1g0sYeXDoxYb4CwCWgikPwCxSDqYzcgCYidB2BIgdnlJQQmQrQNiJxcUgdhAFzPwFIUEOQPZPkC2QDoSOwmJnZJanAxkxwDZ0Qi/5c9nYLD4wsDAPBEhljSNgWF7OwODxG2EmMpCBgb+VgaGbVcQYp8Dwf5lFDtTklpRAhLx03dkKEgsSkR4qyQWYi8sjKgKAIzKMZ5JGE2RAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wMVQxNDowNjozMiswMDowMNXGl7QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDFUMTQ6MDY6MzIrMDA6MDCkmy8IAAAB7ElEQVRIia3VT4hNURwH8M9jZMqgt0CRfwtJCrGRYmJD2UzKhoTeSlKSKEZsxkbKRiKl2Pi7sTIWhA2jlIWdhc1sxChGPMy7Fue83Hfd+959zLfO4tzz/X2/5/zu73cO3eEWnmJW2YApXYj34C024kE3Ju0wDycxgjqS1LjyP8JTcQLjUewdbuBunI+jP3Ln4wKe4TY2dRLvw3AUeo4tqbVHUbz5bQFGtZ7sF3YWiffgIRo46+9/tBprUvOLGfHmGM2JBbsiYajdEVMYKTBIsDAvoIq9Re45uF8gXseMvIAaXuO9UIprOxhsE9KZNbicRz6SQ/yClR1M9uFD5P/EVfRmSdPwKccgwfU24stwD98idwKvMJAlLioQT/CyQHwFxgpiGjiYJk8X0pFHvllgMFzAb46vmJMOOJ1D+o51OeJ9QkO1M0iwOx1UEe6dH/40S798LC0hnuBoJSV+DMeFXmjiDQ7hccagIuS4qhgNXGtOzrXZRV2JCyya7sfc7MISoX7bHfVFCYNTkVvLLtQ6iDfLrhp3OYCZmZ0PRs4ToadacLikwWJcivM9MXa98H+SKD47K14RSm6r8MgUYQw7cEDolzvYgOVC1Z3HGSHV/4RerY04IVTYkHALTAo2C6/ZZ6yaLNE8k4/YXjbgNw8Jz7Y+p7QVAAAAAElFTkSuQmCC\n{/template:GadgetTextIconSelectedUrl}\n');
    function P(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    P.prototype = $.extend({
    }, blogger.core.gadget.prototype, P.prototype);
    r = P.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #Textcss').remove();
      $(p).append('<style id="Textcss" class="singleton-element">' + this.template('GadgetTextCSS') + h);
      this.requestData(c, 'Text' + this.suffix_)
    };
    r.onRenderComplete = function (a) {
      var c = $(g, a) && $(g, a) [0];
      if (c) a = $(b, a) && $(b, a) [0],
      c.innerHTML = a.value.replace(/<\s*script([^>]*)>/g, '&lt;script$1&gt;').replace(/<\s*\/\s*script\s*>/g, '&lt;/script&gt;'),
      a.value = '';
       else this.onError_()
    };
    r.getTitle = function () {
      return this.settings_.title || this.template('GadgetTextDefaultTitle')
    };
    r.getIconUrl = function () {
      return this.template('GadgetTextIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetTextIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetText', this.settings_)
    };
    blogger.templates().compile('/* Copyright 2012 Google Inc. All Rights Reserved. */\n{template:GadgetHTMLCSS}\n\n.gadget-html {\n  max-width: 320px;\n  min-width: 120px;\n  overflow: auto;\n  padding: 12px;\n}\n\n{/template:GadgetHTMLCSS}\n{template:GadgetHTML}\n<div class="gadget-html" style="display:none"></div>\n<div id="gadget-html-content-{index}"></div>\n{/template:GadgetHTML}\n\n\n<!-- Base 64 code for image /html/resources/icon.png -->\n{template:GadgetHTMLIconUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAPFBMVEX///////////////////83NzdQUFD////z8/PNzc12dnabm5va2tpdXV3BwcFERETm5uaCgoJpaWmPj4+x8IN9AAAABXRSTlO/n2DPEKzdeEMAAACGSURBVHhendDJDsMgDEVRMjwPzGn//19LQiJCi6qqd8dhYctm5kGz4WH/sgLQn5kBcMfqb+z1YgtymRMCZ0ewJwv2tgDasCeVFX16jVRnqdLjGeW+SQ4AgrwtKEVDc9OUhKo3tsekiOKNj7c9f2NjVkpSWFKK/ch6JS/f772MdDHrZD6a1hdbxQ0fQh31XwAAAABJRU5ErkJggg==\n{/template:GadgetHTMLIconUrl}\n\n<!-- Base 64 code for image /html/resources/icon-selected.png -->\n{template:GadgetHTMLIconSelectedUrl}\ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAOVBMVEU3Nzc3Nzc3Nzf///9paWldXV3a2trNzc12dnY3Nzfz8/O0tLSCgoKbm5vm5uZQUFBERESoqKiPj48Kern6AAAAA3RSTlMw798RlwEoAAAAiklEQVR4XoXRWQ7DIAwEUJLxwpb1/oetg4IEJWnnA6MnS1jYuTkMmZ2bwkMmFx7zl1lVeWQCQCPvxnvHW3HjQlvlFBNdvIZAdq8cYZQVklcA8WaPPv7upkVjNTl8OwnLZfQ9YAIikCo3ysVbXgCc5UwNe1OxKua+72ZjBo7uST5LyfTzv1+W9rLiDxTpDyuFpZ1+AAAAAElFTkSuQmCC\n{/template:GadgetHTMLIconSelectedUrl}\n');
    function Q(a) {
      blogger.core.gadget.apply(this, arguments)
    }
    Q.prototype = $.extend({
    }, blogger.core.gadget.prototype, Q.prototype);
    r = Q.prototype;
    r.init = function (a, c) {
      this.ui = a;
      $('head #htmlcss').remove();
      $(p).append('<style id="htmlcss" class="singleton-element">' + this.template('GadgetHTMLCSS') + h);
      this.requestData(c, 'HTML' + this.suffix_)
    };
    r.onRenderComplete = function () {
      var a = document.getElementById('gadget-html-content-' + this.suffix_);
      if (a) {
        a.innerHTML = '';
        var c = document.createElement('iframe');
        c.setAttribute('frameborder', 0);
        a.appendChild(c);
        a = c.contentWindow || c.contentDocument;
        a.document && (a = a.document);
        a.open();
        a.write(this.settings_.content);
        a.close()
      } else this.onError_()
    };
    r.getTitle = function () {
      return this.settings_.title || ''
    };
    r.getIconUrl = function () {
      return this.template('GadgetHTMLIconUrl')
    };
    r.getIconSelectedUrl = function () {
      return this.template('GadgetHTMLIconSelectedUrl')
    };
    r.getContentHtml = function () {
      return this.template('GadgetHTML', {
        index: this.suffix_
      })
    };
    blogger && blogger.gadgets && blogger.gadgets().register && (blogger.gadgets().register(k, y), blogger.gadgets().register('BloggerButton', O), blogger.gadgets().register(l, z), blogger.gadgets().register('BlogList', D), blogger.gadgets().register('Image', L), blogger.gadgets().register('Label', E), blogger.gadgets().register('LinkList', F), blogger.gadgets().register('Poll', N), blogger.gadgets().register('PopularPosts', K), blogger.gadgets().register('Profile', G), blogger.gadgets().register('Stats', M), blogger.gadgets().register('Subscribe', H), blogger.gadgets().register('Text', P), blogger.gadgets().register('TextList', I), blogger.gadgets().register('Translate', J));
  }).call(this);
  
