/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) { function c(b, c) { var e = b.nodeName.toLowerCase(); if ("area" === e) { var f = b.parentNode, g = f.name, h; return !b.href || !g || f.nodeName.toLowerCase() !== "map" ? !1 : (h = a("img[usemap=#" + g + "]")[0], !!h && d(h)) } return (/input|select|textarea|button|object/.test(e) ? !b.disabled : "a" == e ? b.href || c : c) && d(b) } function d(b) { return !a(b).parents().andSelf().filter(function () { return a.curCSS(this, "visibility") === "hidden" || a.expr.filters.hidden(this) }).length } a.ui = a.ui || {}; if (a.ui.version) return; a.extend(a.ui, { version: "1.8.23", keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91} }), a.fn.extend({ propAttr: a.fn.prop || a.fn.attr, _focus: a.fn.focus, focus: function (b, c) { return typeof b == "number" ? this.each(function () { var d = this; setTimeout(function () { a(d).focus(), c && c.call(d) }, b) }) : this._focus.apply(this, arguments) }, scrollParent: function () { var b; return a.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? b = this.parents().filter(function () { return /(relative|absolute|fixed)/.test(a.curCSS(this, "position", 1)) && /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1)) }).eq(0) : b = this.parents().filter(function () { return /(auto|scroll)/.test(a.curCSS(this, "overflow", 1) + a.curCSS(this, "overflow-y", 1) + a.curCSS(this, "overflow-x", 1)) }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b }, zIndex: function (c) { if (c !== b) return this.css("zIndex", c); if (this.length) { var d = a(this[0]), e, f; while (d.length && d[0] !== document) { e = d.css("position"); if (e === "absolute" || e === "relative" || e === "fixed") { f = parseInt(d.css("zIndex"), 10); if (!isNaN(f) && f !== 0) return f } d = d.parent() } } return 0 }, disableSelection: function () { return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) { a.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") } }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) { function h(b, c, d, f) { return a.each(e, function () { c -= parseFloat(a.curCSS(b, "padding" + this, !0)) || 0, d && (c -= parseFloat(a.curCSS(b, "border" + this + "Width", !0)) || 0), f && (c -= parseFloat(a.curCSS(b, "margin" + this, !0)) || 0) }), c } var e = d === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], f = d.toLowerCase(), g = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight }; a.fn["inner" + d] = function (c) { return c === b ? g["inner" + d].call(this) : this.each(function () { a(this).css(f, h(this, c) + "px") }) }, a.fn["outer" + d] = function (b, c) { return typeof b != "number" ? g["outer" + d].call(this, b) : this.each(function () { a(this).css(f, h(this, b, !0, c) + "px") }) } }), a.extend(a.expr[":"], { data: a.expr.createPseudo ? a.expr.createPseudo(function (b) { return function (c) { return !!a.data(c, b) } }) : function (b, c, d) { return !!a.data(b, d[3]) }, focusable: function (b) { return c(b, !isNaN(a.attr(b, "tabindex"))) }, tabbable: function (b) { var d = a.attr(b, "tabindex"), e = isNaN(d); return (e || d >= 0) && c(b, !e) } }), a(function () { var b = document.body, c = b.appendChild(c = document.createElement("div")); c.offsetHeight, a.extend(c.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }), a.support.minHeight = c.offsetHeight === 100, a.support.selectstart = "onselectstart" in c, b.removeChild(c).style.display = "none" }), a.curCSS || (a.curCSS = a.css), a.extend(a.ui, { plugin: { add: function (b, c, d) { var e = a.ui[b].prototype; for (var f in d) e.plugins[f] = e.plugins[f] || [], e.plugins[f].push([c, d[f]]) }, call: function (a, b, c) { var d = a.plugins[b]; if (!d || !a.element[0].parentNode) return; for (var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c) } }, contains: function (a, b) { return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b) }, hasScroll: function (b, c) { if (a(b).css("overflow") === "hidden") return !1; var d = c && c === "left" ? "scrollLeft" : "scrollTop", e = !1; return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e) }, isOverAxis: function (a, b, c) { return a > b && a < b + c }, isOver: function (b, c, d, e, f, g) { return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g) } }) })(jQuery); ; /*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) { if (a.cleanData) { var c = a.cleanData; a.cleanData = function (b) { for (var d = 0, e; (e = b[d]) != null; d++) try { a(e).triggerHandler("remove") } catch (f) { } c(b) } } else { var d = a.fn.remove; a.fn.remove = function (b, c) { return this.each(function () { return c || (!b || a.filter(b, [this]).length) && a("*", this).add([this]).each(function () { try { a(this).triggerHandler("remove") } catch (b) { } }), d.call(a(this), b, c) }) } } a.widget = function (b, c, d) { var e = b.split(".")[0], f; b = b.split(".")[1], f = e + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][f] = function (c) { return !!a.data(c, b) }, a[e] = a[e] || {}, a[e][b] = function (a, b) { arguments.length && this._createWidget(a, b) }; var g = new c; g.options = a.extend(!0, {}, g.options), a[e][b].prototype = a.extend(!0, g, { namespace: e, widgetName: b, widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b, widgetBaseClass: f }, d), a.widget.bridge(b, a[e][b]) }, a.widget.bridge = function (c, d) { a.fn[c] = function (e) { var f = typeof e == "string", g = Array.prototype.slice.call(arguments, 1), h = this; return e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e, f && e.charAt(0) === "_" ? h : (f ? this.each(function () { var d = a.data(this, c), f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d; if (f !== d && f !== b) return h = f, !1 }) : this.each(function () { var b = a.data(this, c); b ? b.option(e || {})._init() : a.data(this, c, new d(e, this)) }), h) } }, a.Widget = function (a, b) { arguments.length && this._createWidget(a, b) }, a.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: !1 }, _createWidget: function (b, c) { a.data(c, this.widgetName, this), this.element = a(c), this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b); var d = this; this.element.bind("remove." + this.widgetName, function () { d.destroy() }), this._create(), this._trigger("create"), this._init() }, _getCreateOptions: function () { return a.metadata && a.metadata.get(this.element[0])[this.widgetName] }, _create: function () { }, _init: function () { }, destroy: function () { this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled") }, widget: function () { return this.element }, option: function (c, d) { var e = c; if (arguments.length === 0) return a.extend({}, this.options); if (typeof c == "string") { if (d === b) return this.options[c]; e = {}, e[c] = d } return this._setOptions(e), this }, _setOptions: function (b) { var c = this; return a.each(b, function (a, b) { c._setOption(a, b) }), this }, _setOption: function (a, b) { return this.options[a] = b, a === "disabled" && this.widget()[b ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", b), this }, enable: function () { return this._setOption("disabled", !1) }, disable: function () { return this._setOption("disabled", !0) }, _trigger: function (b, c, d) { var e, f, g = this.options[b]; d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent; if (f) for (e in f) e in c || (c[e] = f[e]); return this.element.trigger(c, d), !(a.isFunction(g) && g.call(this.element[0], c, d) === !1 || c.isDefaultPrevented()) } } })(jQuery); ; /*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) { var c = !1; a(document).mouseup(function (a) { c = !1 }), a.widget("ui.mouse", { options: { cancel: ":input,option", distance: 1, delay: 0 }, _mouseInit: function () { var b = this; this.element.bind("mousedown." + this.widgetName, function (a) { return b._mouseDown(a) }).bind("click." + this.widgetName, function (c) { if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1 }), this.started = !1 }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (b) { if (c) return; this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b; var d = this, e = b.which == 1, f = typeof this.options.cancel == "string" && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1; if (!e || f || !this._mouseCapture(b)) return !0; this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { d.mouseDelayMet = !0 }, this.options.delay)); if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) { this._mouseStarted = this._mouseStart(b) !== !1; if (!this._mouseStarted) return b.preventDefault(), !0 } return !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) { return d._mouseMove(a) }, this._mouseUpDelegate = function (a) { return d._mouseUp(a) }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), c = !0, !0 }, _mouseMove: function (b) { return !a.browser.msie || document.documentMode >= 9 || !!b.button ? this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted) : this._mouseUp(b) }, _mouseUp: function (b) { return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target == this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1 }, _mouseDistanceMet: function (a) { return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance }, _mouseDelayMet: function (a) { return this.mouseDelayMet }, _mouseStart: function (a) { }, _mouseDrag: function (a) { }, _mouseStop: function (a) { }, _mouseCapture: function (a) { return !0 } }) })(jQuery); ; /*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) { a.ui = a.ui || {}; var c = /left|center|right/, d = /top|center|bottom/, e = "center", f = {}, g = a.fn.position, h = a.fn.offset; a.fn.position = function (b) { if (!b || !b.of) return g.apply(this, arguments); b = a.extend({}, b); var h = a(b.of), i = h[0], j = (b.collision || "flip").split(" "), k = b.offset ? b.offset.split(" ") : [0, 0], l, m, n; return i.nodeType === 9 ? (l = h.width(), m = h.height(), n = { top: 0, left: 0 }) : i.setTimeout ? (l = h.width(), m = h.height(), n = { top: h.scrollTop(), left: h.scrollLeft() }) : i.preventDefault ? (b.at = "left top", l = m = 0, n = { top: b.of.pageY, left: b.of.pageX }) : (l = h.outerWidth(), m = h.outerHeight(), n = h.offset()), a.each(["my", "at"], function () { var a = (b[this] || "").split(" "); a.length === 1 && (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]), a[0] = c.test(a[0]) ? a[0] : e, a[1] = d.test(a[1]) ? a[1] : e, b[this] = a }), j.length === 1 && (j[1] = j[0]), k[0] = parseInt(k[0], 10) || 0, k.length === 1 && (k[1] = k[0]), k[1] = parseInt(k[1], 10) || 0, b.at[0] === "right" ? n.left += l : b.at[0] === e && (n.left += l / 2), b.at[1] === "bottom" ? n.top += m : b.at[1] === e && (n.top += m / 2), n.left += k[0], n.top += k[1], this.each(function () { var c = a(this), d = c.outerWidth(), g = c.outerHeight(), h = parseInt(a.curCSS(this, "marginLeft", !0)) || 0, i = parseInt(a.curCSS(this, "marginTop", !0)) || 0, o = d + h + (parseInt(a.curCSS(this, "marginRight", !0)) || 0), p = g + i + (parseInt(a.curCSS(this, "marginBottom", !0)) || 0), q = a.extend({}, n), r; b.my[0] === "right" ? q.left -= d : b.my[0] === e && (q.left -= d / 2), b.my[1] === "bottom" ? q.top -= g : b.my[1] === e && (q.top -= g / 2), f.fractions || (q.left = Math.round(q.left), q.top = Math.round(q.top)), r = { left: q.left - h, top: q.top - i }, a.each(["left", "top"], function (c, e) { a.ui.position[j[c]] && a.ui.position[j[c]][e](q, { targetWidth: l, targetHeight: m, elemWidth: d, elemHeight: g, collisionPosition: r, collisionWidth: o, collisionHeight: p, offset: k, my: b.my, at: b.at }) }), a.fn.bgiframe && c.bgiframe(), c.offset(a.extend(q, { using: b.using })) }) }, a.ui.position = { fit: { left: function (b, c) { var d = a(window), e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(); b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left) }, top: function (b, c) { var d = a(window), e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(); b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top) } }, flip: { left: function (b, c) { if (c.at[0] === e) return; var d = a(window), f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(), g = c.my[0] === "left" ? -c.elemWidth : c.my[0] === "right" ? c.elemWidth : 0, h = c.at[0] === "left" ? c.targetWidth : -c.targetWidth, i = -2 * c.offset[0]; b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0 }, top: function (b, c) { if (c.at[1] === e) return; var d = a(window), f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(), g = c.my[1] === "top" ? -c.elemHeight : c.my[1] === "bottom" ? c.elemHeight : 0, h = c.at[1] === "top" ? c.targetHeight : -c.targetHeight, i = -2 * c.offset[1]; b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0 } } }, a.offset.setOffset || (a.offset.setOffset = function (b, c) { /static/.test(a.curCSS(b, "position")) && (b.style.position = "relative"); var d = a(b), e = d.offset(), f = parseInt(a.curCSS(b, "top", !0), 10) || 0, g = parseInt(a.curCSS(b, "left", !0), 10) || 0, h = { top: c.top - e.top + f, left: c.left - e.left + g }; "using" in c ? c.using.call(b, h) : d.css(h) }, a.fn.offset = function (b) { var c = this[0]; return !c || !c.ownerDocument ? null : b ? a.isFunction(b) ? this.each(function (c) { a(this).offset(b.call(this, c, a(this).offset())) }) : this.each(function () { a.offset.setOffset(this, b) }) : h.call(this) }), a.curCSS || (a.curCSS = a.css), function () { var b = document.getElementsByTagName("body")[0], c = document.createElement("div"), d, e, g, h, i; d = document.createElement(b ? "div" : "body"), g = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, b && a.extend(g, { position: "absolute", left: "-1000px", top: "-1000px" }); for (var j in g) d.style[j] = g[j]; d.appendChild(c), e = b || document.documentElement, e.insertBefore(d, e.firstChild), c.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", h = a(c).offset(function (a, b) { return b }).offset(), d.innerHTML = "", e.removeChild(d), i = h.top + h.left + (b ? 2e3 : 0), f.fractions = i > 21 && i < 22 } () })(jQuery); ; /*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) { a.widget("ui.draggable", a.ui.mouse, { widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1 }, _create: function () { this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit() }, destroy: function () { if (!this.element.data("draggable")) return; return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this }, _mouseCapture: function (b) { var c = this.options; return this.helper || c.disabled || a(b.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(b), this.handle ? (c.iframeFix && a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () { a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3 }).css(a(this).offset()).appendTo("body") }), !0) : !1) }, _mouseStart: function (b) { var c = this.options; return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, a.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), c.containment && this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0) }, _mouseDrag: function (b, c) { this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"); if (!c) { var d = this._uiHash(); if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1; this.position = d.position } if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px"; if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; return a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1 }, _mouseStop: function (b) { var c = !1; a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)), this.dropped && (c = this.dropped, this.dropped = !1); var d = this.element[0], e = !1; while (d && (d = d.parentNode)) d == document && (e = !0); if (!e && this.options.helper === "original") return !1; if (this.options.revert == "invalid" && !c || this.options.revert == "valid" && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c)) { var f = this; a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { f._trigger("stop", b) !== !1 && f._clear() }) } else this._trigger("stop", b) !== !1 && this._clear(); return !1 }, _mouseUp: function (b) { return this.options.iframeFix === !0 && a("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b) }, cancel: function () { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this }, _getHandle: function (b) { var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1; return a(this.options.handle, this.element).find("*").andSelf().each(function () { this == b.target && (c = !0) }), c }, _createHelper: function (b) { var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : c.helper == "clone" ? this.element.clone().removeAttr("id") : this.element; return d.parents("body").length || d.appendTo(c.appendTo == "parent" ? this.element[0].parentNode : c.appendTo), d[0] != this.element[0] && !/(fixed|absolute)/.test(d.css("position")) && d.css("position", "absolute"), d }, _adjustOffsetFromHelper: function (b) { typeof b == "string" && (b = b.split(" ")), a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top) }, _getParentOffset: function () { this.offsetParent = this.helper.offsetParent(); var b = this.offsetParent.offset(); this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()); if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) b = { top: 0, left: 0 }; return { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)} }, _getRelativeOffset: function () { if (this.cssPosition == "relative") { var a = this.element.position(); return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()} } return { top: 0, left: 0} }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0} }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () { var b = this.options; b.containment == "parent" && (b.containment = this.helper[0].parentNode); if (b.containment == "document" || b.containment == "window") this.containment = [b.containment == "document" ? 0 : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b.containment == "document" ? 0 : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (b.containment == "document" ? 0 : a(window).scrollLeft()) + a(b.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (b.containment == "document" ? 0 : a(window).scrollTop()) + (a(b.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) { var c = a(b.containment), d = c[0]; if (!d) return; var e = c.offset(), f = a(d).css("overflow") != "hidden"; this.containment = [(parseInt(a(d).css("borderLeftWidth"), 10) || 0) + (parseInt(a(d).css("paddingLeft"), 10) || 0), (parseInt(a(d).css("borderTopWidth"), 10) || 0) + (parseInt(a(d).css("paddingTop"), 10) || 0), (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(a(d).css("borderLeftWidth"), 10) || 0) - (parseInt(a(d).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(a(d).css("borderTopWidth"), 10) || 0) - (parseInt(a(d).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c } else b.containment.constructor == Array && (this.containment = b.containment) }, _convertPositionTo: function (b, c) { c || (c = this.position); var d = b == "absolute" ? 1 : -1, e = this.options, f = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, g = /(html|body)/i.test(f[0].tagName); return { top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d), left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d)} }, _generatePosition: function (b) { var c = this.options, d = this.cssPosition == "absolute" && (this.scrollParent[0] == document || !a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, e = /(html|body)/i.test(d[0].tagName), f = b.pageX, g = b.pageY; if (this.originalPosition) { var h; if (this.containment) { if (this.relative_container) { var i = this.relative_container.offset(); h = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top] } else h = this.containment; b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left), b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top), b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left), b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top) } if (c.grid) { var j = c.grid[1] ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY; g = h ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3] ? j - this.offset.click.top < h[1] ? j + c.grid[1] : j - c.grid[1] : j : j; var k = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX; f = h ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2] ? k - this.offset.click.left < h[0] ? k + c.grid[0] : k - c.grid[0] : k : k } } return { top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : d.scrollTop()), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : d.scrollLeft())} }, _clear: function () { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1 }, _trigger: function (b, c, d) { return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), b == "drag" && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d) }, plugins: {}, _uiHash: function (a) { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs} } }), a.extend(a.ui.draggable, { version: "1.8.23" }), a.ui.plugin.add("draggable", "connectToSortable", { start: function (b, c) { var d = a(this).data("draggable"), e = d.options, f = a.extend({}, c, { item: d.element }); d.sortables = [], a(e.connectToSortable).each(function () { var c = a.data(this, "sortable"); c && !c.options.disabled && (d.sortables.push({ instance: c, shouldRevert: c.options.revert }), c.refreshPositions(), c._trigger("activate", b, f)) }) }, stop: function (b, c) { var d = a(this).data("draggable"), e = a.extend({}, c, { item: d.element }); a.each(d.sortables, function () { this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, d.options.helper == "original" && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e)) }) }, drag: function (b, c) { var d = a(this).data("draggable"), e = this, f = function (b) { var c = this.offset.click.top, d = this.offset.click.left, e = this.positionAbs.top, f = this.positionAbs.left, g = b.height, h = b.width, i = b.top, j = b.left; return a.ui.isOver(e + c, f + d, i, j, g, h) }; a.each(d.sortables, function (f) { this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () { return c.helper[0] }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1) }) } }), a.ui.plugin.add("draggable", "cursor", { start: function (b, c) { var d = a("body"), e = a(this).data("draggable").options; d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor) }, stop: function (b, c) { var d = a(this).data("draggable").options; d._cursor && a("body").css("cursor", d._cursor) } }), a.ui.plugin.add("draggable", "opacity", { start: function (b, c) { var d = a(c.helper), e = a(this).data("draggable").options; d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity) }, stop: function (b, c) { var d = a(this).data("draggable").options; d._opacity && a(c.helper).css("opacity", d._opacity) } }), a.ui.plugin.add("draggable", "scroll", { start: function (b, c) { var d = a(this).data("draggable"); d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML" && (d.overflowOffset = d.scrollParent.offset()) }, drag: function (b, c) { var d = a(this).data("draggable"), e = d.options, f = !1; if (d.scrollParent[0] != document && d.scrollParent[0].tagName != "HTML") { if (!e.axis || e.axis != "x") d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed); if (!e.axis || e.axis != "y") d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed) } else { if (!e.axis || e.axis != "x") b.pageY - a(document).scrollTop() < e.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed)); if (!e.axis || e.axis != "y") b.pageX - a(document).scrollLeft() < e.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed)) } f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b) } }), a.ui.plugin.add("draggable", "snap", { start: function (b, c) { var d = a(this).data("draggable"), e = d.options; d.snapElements = [], a(e.snap.constructor != String ? e.snap.items || ":data(draggable)" : e.snap).each(function () { var b = a(this), c = b.offset(); this != d.element[0] && d.snapElements.push({ item: this, width: b.outerWidth(), height: b.outerHeight(), top: c.top, left: c.left }) }) }, drag: function (b, c) { var d = a(this).data("draggable"), e = d.options, f = e.snapTolerance, g = c.offset.left, h = g + d.helperProportions.width, i = c.offset.top, j = i + d.helperProportions.height; for (var k = d.snapElements.length - 1; k >= 0; k--) { var l = d.snapElements[k].left, m = l + d.snapElements[k].width, n = d.snapElements[k].top, o = n + d.snapElements[k].height; if (!(l - f < g && g < m + f && n - f < i && i < o + f || l - f < g && g < m + f && n - f < j && j < o + f || l - f < h && h < m + f && n - f < i && i < o + f || l - f < h && h < m + f && n - f < j && j < o + f)) { d.snapElements[k].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })), d.snapElements[k].snapping = !1; continue } if (e.snapMode != "inner") { var p = Math.abs(n - j) <= f, q = Math.abs(o - i) <= f, r = Math.abs(l - h) <= f, s = Math.abs(m - g) <= f; p && (c.position.top = d._convertPositionTo("relative", { top: n - d.helperProportions.height, left: 0 }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", { top: o, left: 0 }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", { top: 0, left: l - d.helperProportions.width }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", { top: 0, left: m }).left - d.margins.left) } var t = p || q || r || s; if (e.snapMode != "outer") { var p = Math.abs(n - i) <= f, q = Math.abs(o - j) <= f, r = Math.abs(l - g) <= f, s = Math.abs(m - h) <= f; p && (c.position.top = d._convertPositionTo("relative", { top: n, left: 0 }).top - d.margins.top), q && (c.position.top = d._convertPositionTo("relative", { top: o - d.helperProportions.height, left: 0 }).top - d.margins.top), r && (c.position.left = d._convertPositionTo("relative", { top: 0, left: l }).left - d.margins.left), s && (c.position.left = d._convertPositionTo("relative", { top: 0, left: m - d.helperProportions.width }).left - d.margins.left) } !d.snapElements[k].snapping && (p || q || r || s || t) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })), d.snapElements[k].snapping = p || q || r || s || t } } }), a.ui.plugin.add("draggable", "stack", { start: function (b, c) { var d = a(this).data("draggable").options, e = a.makeArray(a(d.stack)).sort(function (b, c) { return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0) }); if (!e.length) return; var f = parseInt(e[0].style.zIndex) || 0; a(e).each(function (a) { this.style.zIndex = f + a }), this[0].style.zIndex = f + e.length } }), a.ui.plugin.add("draggable", "zIndex", { start: function (b, c) { var d = a(c.helper), e = a(this).data("draggable").options; d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex) }, stop: function (b, c) { var d = a(this).data("draggable").options; d._zIndex && a(c.helper).css("zIndex", d._zIndex) } }) })(jQuery); ; /*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function (a, b) { var c = 5; a.widget("ui.slider", a.ui.mouse, { widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null }, _create: function () { var b = this, d = this.options, e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", g = d.values && d.values.length || 1, h = []; this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (d.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = a([]), d.range && (d.range === !0 && (d.values || (d.values = [this._valueMin(), this._valueMin()]), d.values.length && d.values.length !== 2 && (d.values = [d.values[0], d.values[0]])), this.range = a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (d.range === "min" || d.range === "max" ? " ui-slider-range-" + d.range : ""))); for (var i = e.length; i < g; i += 1) h.push(f); this.handles = e.add(a(h.join("")).appendTo(b.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (a) { a.preventDefault() }).hover(function () { d.disabled || a(this).addClass("ui-state-hover") }, function () { a(this).removeClass("ui-state-hover") }).focus(function () { d.disabled ? a(this).blur() : (a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), a(this).addClass("ui-state-focus")) }).blur(function () { a(this).removeClass("ui-state-focus") }), this.handles.each(function (b) { a(this).data("index.ui-slider-handle", b) }), this.handles.keydown(function (d) { var e = a(this).data("index.ui-slider-handle"), f, g, h, i; if (b.options.disabled) return; switch (d.keyCode) { case a.ui.keyCode.HOME: case a.ui.keyCode.END: case a.ui.keyCode.PAGE_UP: case a.ui.keyCode.PAGE_DOWN: case a.ui.keyCode.UP: case a.ui.keyCode.RIGHT: case a.ui.keyCode.DOWN: case a.ui.keyCode.LEFT: d.preventDefault(); if (!b._keySliding) { b._keySliding = !0, a(this).addClass("ui-state-active"), f = b._start(d, e); if (f === !1) return } } i = b.options.step, b.options.values && b.options.values.length ? g = h = b.values(e) : g = h = b.value(); switch (d.keyCode) { case a.ui.keyCode.HOME: h = b._valueMin(); break; case a.ui.keyCode.END: h = b._valueMax(); break; case a.ui.keyCode.PAGE_UP: h = b._trimAlignValue(g + (b._valueMax() - b._valueMin()) / c); break; case a.ui.keyCode.PAGE_DOWN: h = b._trimAlignValue(g - (b._valueMax() - b._valueMin()) / c); break; case a.ui.keyCode.UP: case a.ui.keyCode.RIGHT: if (g === b._valueMax()) return; h = b._trimAlignValue(g + i); break; case a.ui.keyCode.DOWN: case a.ui.keyCode.LEFT: if (g === b._valueMin()) return; h = b._trimAlignValue(g - i) } b._slide(d, e, h) }).keyup(function (c) { var d = a(this).data("index.ui-slider-handle"); b._keySliding && (b._keySliding = !1, b._stop(c, d), b._change(c, d), a(this).removeClass("ui-state-active")) }), this._refreshValue(), this._animateOff = !1 }, destroy: function () { return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this }, _mouseCapture: function (b) { var c = this.options, d, e, f, g, h, i, j, k, l; return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), d = { x: b.pageX, y: b.pageY }, e = this._normValueFromMouse(d), f = this._valueMax() - this._valueMin() + 1, h = this, this.handles.each(function (b) { var c = Math.abs(e - h.values(b)); f > c && (f = c, g = a(this), i = b) }), c.range === !0 && this.values(1) === c.min && (i += 1, g = a(this.handles[i])), j = this._start(b, i), j === !1 ? !1 : (this._mouseSliding = !0, h._handleIndex = i, g.addClass("ui-state-active").focus(), k = g.offset(), l = !a(b.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0} : { left: b.pageX - k.left - g.width() / 2, top: b.pageY - k.top - g.height() / 2 - (parseInt(g.css("borderTopWidth"), 10) || 0) - (parseInt(g.css("borderBottomWidth"), 10) || 0) + (parseInt(g.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(b, i, e), this._animateOff = !0, !0)) }, _mouseStart: function (a) { return !0 }, _mouseDrag: function (a) { var b = { x: a.pageX, y: a.pageY }, c = this._normValueFromMouse(b); return this._slide(a, this._handleIndex, c), !1 }, _mouseStop: function (a) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function () { this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal" }, _normValueFromMouse: function (a) { var b, c, d, e, f; return this.orientation === "horizontal" ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), d < 0 && (d = 0), this.orientation === "vertical" && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f) }, _start: function (a, b) { var c = { handle: this.handles[b], value: this.value() }; return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c) }, _slide: function (a, b, c) { var d, e, f; this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (b === 0 && c > d || b === 1 && c < d) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, { handle: this.handles[b], value: c, values: e }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c, !0))) : c !== this.value() && (f = this._trigger("slide", a, { handle: this.handles[b], value: c }), f !== !1 && this.value(c)) }, _stop: function (a, b) { var c = { handle: this.handles[b], value: this.value() }; this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c) }, _change: function (a, b) { if (!this._keySliding && !this._mouseSliding) { var c = { handle: this.handles[b], value: this.value() }; this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("change", a, c) } }, value: function (a) { if (arguments.length) { this.options.value = this._trimAlignValue(a), this._refreshValue(), this._change(null, 0); return } return this._value() }, values: function (b, c) { var d, e, f; if (arguments.length > 1) { this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), this._change(null, b); return } if (!arguments.length) return this._values(); if (!a.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value(); d = this.options.values, e = arguments[0]; for (f = 0; f < d.length; f += 1) d[f] = this._trimAlignValue(e[f]), this._change(null, f); this._refreshValue() }, _setOption: function (b, c) { var d, e = 0; a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments); switch (b) { case "disabled": c ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled")); break; case "orientation": this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(); break; case "value": this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break; case "values": this._animateOff = !0, this._refreshValue(); for (d = 0; d < e; d += 1) this._change(null, d); this._animateOff = !1 } }, _value: function () { var a = this.options.value; return a = this._trimAlignValue(a), a }, _values: function (a) { var b, c, d; if (arguments.length) return b = this.options.values[a], b = this._trimAlignValue(b), b; c = this.options.values.slice(); for (d = 0; d < c.length; d += 1) c[d] = this._trimAlignValue(c[d]); return c }, _trimAlignValue: function (a) { if (a <= this._valueMin()) return this._valueMin(); if (a >= this._valueMax()) return this._valueMax(); var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c; return Math.abs(c) * 2 >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5)) }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.options.max }, _refreshValue: function () { var b = this.options.range, c = this.options, d = this, e = this._animateOff ? !1 : c.animate, f, g = {}, h, i, j, k; this.options.values && this.options.values.length ? this.handles.each(function (b, i) { f = (d.values(b) - d._valueMin()) / (d._valueMax() - d._valueMin()) * 100, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", a(this).stop(1, 1)[e ? "animate" : "css"](g, c.animate), d.options.range === !0 && (d.orientation === "horizontal" ? (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({ left: f + "%" }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({ width: f - h + "%" }, { queue: !1, duration: c.animate })) : (b === 0 && d.range.stop(1, 1)[e ? "animate" : "css"]({ bottom: f + "%" }, c.animate), b === 1 && d.range[e ? "animate" : "css"]({ height: f - h + "%" }, { queue: !1, duration: c.animate }))), h = f }) : (i = this.value(), j = this._valueMin(), k = this._valueMax(), f = k !== j ? (i - j) / (k - j) * 100 : 0, g[d.orientation === "horizontal" ? "left" : "bottom"] = f + "%", this.handle.stop(1, 1)[e ? "animate" : "css"](g, c.animate), b === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[e ? "animate" : "css"]({ width: f + "%" }, c.animate), b === "max" && this.orientation === "horizontal" && this.range[e ? "animate" : "css"]({ width: 100 - f + "%" }, { queue: !1, duration: c.animate }), b === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[e ? "animate" : "css"]({ height: f + "%" }, c.animate), b === "max" && this.orientation === "vertical" && this.range[e ? "animate" : "css"]({ height: 100 - f + "%" }, { queue: !1, duration: c.animate })) } }), a.extend(a.ui.slider, { version: "1.8.23" }) })(jQuery); ; /*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.datepicker.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function ($, undefined) { function Datepicker() { this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) } function bindHover(a) { var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return a.bind("mouseout", function (a) { var c = $(a.target).closest(b); if (!c.length) return; c.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover") }).bind("mouseover", function (c) { var d = $(c.target).closest(b); if ($.datepicker._isDisabledDatepicker(instActive.inline ? a.parent()[0] : instActive.input[0]) || !d.length) return; d.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), d.addClass("ui-state-hover"), d.hasClass("ui-datepicker-prev") && d.addClass("ui-datepicker-prev-hover"), d.hasClass("ui-datepicker-next") && d.addClass("ui-datepicker-next-hover") }) } function extendRemove(a, b) { $.extend(a, b); for (var c in b) if (b[c] == null || b[c] == undefined) a[c] = b[c]; return a } function isArray(a) { return a && ($.browser.safari && typeof a == "object" && a.length || a.constructor && a.constructor.toString().match(/\Array\(\)/)) } $.extend($.ui, { datepicker: { version: "1.8.23"} }); var PROP_NAME = "datepicker", dpuuid = (new Date).getTime(), instActive; $.extend(Datepicker.prototype, { markerClassName: "hasDatepicker", maxRows: 4, log: function () { this.debug && console.log.apply("", arguments) }, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (a) { return extendRemove(this._defaults, a || {}), this }, _attachDatepicker: function (target, settings) { var inlineSettings = null; for (var attrName in this._defaults) { var attrValue = target.getAttribute("date:" + attrName); if (attrValue) { inlineSettings = inlineSettings || {}; try { inlineSettings[attrName] = eval(attrValue) } catch (err) { inlineSettings[attrName] = attrValue } } } var nodeName = target.nodeName.toLowerCase(), inline = nodeName == "div" || nodeName == "span"; target.id || (this.uuid += 1, target.id = "dp" + this.uuid); var inst = this._newInst($(target), inline); inst.settings = $.extend({}, settings || {}, inlineSettings || {}), nodeName == "input" ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst) }, _newInst: function (a, b) { var c = a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"); return { id: c, input: a, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: b, dpDiv: b ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv} }, _connectDatepicker: function (a, b) { var c = $(a); b.append = $([]), b.trigger = $([]); if (c.hasClass(this.markerClassName)) return; this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (a, c, d) { b.settings[c] = d }).bind("getData.datepicker", function (a, c) { return this._get(b, c) }), this._autoSize(b), $.data(a, PROP_NAME, b), b.settings.disabled && this._disableDatepicker(a) }, _attachments: function (a, b) { var c = this._get(b, "appendText"), d = this._get(b, "isRTL"); b.append && b.append.remove(), c && (b.append = $('<span class="' + this._appendClass + '">' + c + "</span>"), a[d ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove(); var e = this._get(b, "showOn"); (e == "focus" || e == "both") && a.focus(this._showDatepicker); if (e == "button" || e == "both") { var f = this._get(b, "buttonText"), g = this._get(b, "buttonImage"); b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({ src: g, alt: f, title: f }) : $('<button type="button"></button>').addClass(this._triggerClass).html(g == "" ? f : $("<img/>").attr({ src: g, alt: f, title: f }))), a[d ? "before" : "after"](b.trigger), b.trigger.click(function () { return $.datepicker._datepickerShowing && $.datepicker._lastInput == a[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != a[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0])) : $.datepicker._showDatepicker(a[0]), !1 }) } }, _autoSize: function (a) { if (this._get(a, "autoSize") && !a.inline) { var b = new Date(2009, 11, 20), c = this._get(a, "dateFormat"); if (c.match(/[DM]/)) { var d = function (a) { var b = 0, c = 0; for (var d = 0; d < a.length; d++) a[d].length > b && (b = a[d].length, c = d); return c }; b.setMonth(d(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort"))), b.setDate(d(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay()) } a.input.attr("size", this._formatDate(a, b).length) } }, _inlineDatepicker: function (a, b) { var c = $(a); if (c.hasClass(this.markerClassName)) return; c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (a, c, d) { b.settings[c] = d }).bind("getData.datepicker", function (a, c) { return this._get(b, c) }), $.data(a, PROP_NAME, b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block") }, _dialogDatepicker: function (a, b, c, d, e) { var f = this._dialogInst; if (!f) { this.uuid += 1; var g = "dp" + this.uuid; this._dialogInput = $('<input type="text" id="' + g + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), f = this._dialogInst = this._newInst(this._dialogInput, !1), f.settings = {}, $.data(this._dialogInput[0], PROP_NAME, f) } extendRemove(f.settings, d || {}), b = b && b.constructor == Date ? this._formatDate(f, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null; if (!this._pos) { var h = document.documentElement.clientWidth, i = document.documentElement.clientHeight, j = document.documentElement.scrollLeft || document.body.scrollLeft, k = document.documentElement.scrollTop || document.body.scrollTop; this._pos = [h / 2 - 100 + j, i / 2 - 150 + k] } return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), f.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, f), this }, _destroyDatepicker: function (a) { var b = $(a), c = $.data(a, PROP_NAME); if (!b.hasClass(this.markerClassName)) return; var d = a.nodeName.toLowerCase(); $.removeData(a, PROP_NAME), d == "input" ? (c.append.remove(), c.trigger.remove(), b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (d == "div" || d == "span") && b.removeClass(this.markerClassName).empty() }, _enableDatepicker: function (a) { var b = $(a), c = $.data(a, PROP_NAME); if (!b.hasClass(this.markerClassName)) return; var d = a.nodeName.toLowerCase(); if (d == "input") a.disabled = !1, c.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" }); else if (d == "div" || d == "span") { var e = b.children("." + this._inlineClass); e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled") } this._disabledInputs = $.map(this._disabledInputs, function (b) { return b == a ? null : b }) }, _disableDatepicker: function (a) { var b = $(a), c = $.data(a, PROP_NAME); if (!b.hasClass(this.markerClassName)) return; var d = a.nodeName.toLowerCase(); if (d == "input") a.disabled = !0, c.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" }); else if (d == "div" || d == "span") { var e = b.children("." + this._inlineClass); e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled") } this._disabledInputs = $.map(this._disabledInputs, function (b) { return b == a ? null : b }), this._disabledInputs[this._disabledInputs.length] = a }, _isDisabledDatepicker: function (a) { if (!a) return !1; for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] == a) return !0; return !1 }, _getInst: function (a) { try { return $.data(a, PROP_NAME) } catch (b) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function (a, b, c) { var d = this._getInst(a); if (arguments.length == 2 && typeof b == "string") return b == "defaults" ? $.extend({}, $.datepicker._defaults) : d ? b == "all" ? $.extend({}, d.settings) : this._get(d, b) : null; var e = b || {}; typeof b == "string" && (e = {}, e[b] = c); if (d) { this._curInst == d && this._hideDatepicker(); var f = this._getDateDatepicker(a, !0), g = this._getMinMaxDate(d, "min"), h = this._getMinMaxDate(d, "max"); extendRemove(d.settings, e), g !== null && e.dateFormat !== undefined && e.minDate === undefined && (d.settings.minDate = this._formatDate(d, g)), h !== null && e.dateFormat !== undefined && e.maxDate === undefined && (d.settings.maxDate = this._formatDate(d, h)), this._attachments($(a), d), this._autoSize(d), this._setDate(d, f), this._updateAlternate(d), this._updateDatepicker(d) } }, _changeDatepicker: function (a, b, c) { this._optionDatepicker(a, b, c) }, _refreshDatepicker: function (a) { var b = this._getInst(a); b && this._updateDatepicker(b) }, _setDateDatepicker: function (a, b) { var c = this._getInst(a); c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c)) }, _getDateDatepicker: function (a, b) { var c = this._getInst(a); return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null }, _doKeyDown: function (a) { var b = $.datepicker._getInst(a.target), c = !0, d = b.dpDiv.is(".ui-datepicker-rtl"); b._keyEvent = !0; if ($.datepicker._datepickerShowing) switch (a.keyCode) { case 9: $.datepicker._hideDatepicker(), c = !1; break; case 13: var e = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", b.dpDiv); e[0] && $.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, e[0]); var f = $.datepicker._get(b, "onSelect"); if (f) { var g = $.datepicker._formatDate(b); f.apply(b.input ? b.input[0] : null, [g, b]) } else $.datepicker._hideDatepicker(); return !1; case 27: $.datepicker._hideDatepicker(); break; case 33: $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M"); break; case 34: $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M"); break; case 35: (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), c = a.ctrlKey || a.metaKey; break; case 36: (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), c = a.ctrlKey || a.metaKey; break; case 37: (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? 1 : -1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(b, "stepBigMonths") : -$.datepicker._get(b, "stepMonths"), "M"); break; case 38: (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), c = a.ctrlKey || a.metaKey; break; case 39: (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, d ? -1 : 1, "D"), c = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(b, "stepBigMonths") : +$.datepicker._get(b, "stepMonths"), "M"); break; case 40: (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), c = a.ctrlKey || a.metaKey; break; default: c = !1 } else a.keyCode == 36 && a.ctrlKey ? $.datepicker._showDatepicker(this) : c = !1; c && (a.preventDefault(), a.stopPropagation()) }, _doKeyPress: function (a) { var b = $.datepicker._getInst(a.target); if ($.datepicker._get(b, "constrainInput")) { var c = $.datepicker._possibleChars($.datepicker._get(b, "dateFormat")), d = String.fromCharCode(a.charCode == undefined ? a.keyCode : a.charCode); return a.ctrlKey || a.metaKey || d < " " || !c || c.indexOf(d) > -1 } }, _doKeyUp: function (a) { var b = $.datepicker._getInst(a.target); if (b.input.val() != b.lastVal) try { var c = $.datepicker.parseDate($.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, $.datepicker._getFormatConfig(b)); c && ($.datepicker._setDateFromField(b), $.datepicker._updateAlternate(b), $.datepicker._updateDatepicker(b)) } catch (d) { $.datepicker.log(d) } return !0 }, _showDatepicker: function (a) { a = a.target || a, a.nodeName.toLowerCase() != "input" && (a = $("input", a.parentNode)[0]); if ($.datepicker._isDisabledDatepicker(a) || $.datepicker._lastInput == a) return; var b = $.datepicker._getInst(a); $.datepicker._curInst && $.datepicker._curInst != b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])); var c = $.datepicker._get(b, "beforeShow"), d = c ? c.apply(a, [a, b]) : {}; if (d === !1) return; extendRemove(b.settings, d), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight); var e = !1; $(a).parents().each(function () { return e |= $(this).css("position") == "fixed", !e }), e && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop); var f = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] }; $.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), $.datepicker._updateDatepicker(b), f = $.datepicker._checkOffset(b, f, e), b.dpDiv.css({ position: $.datepicker._inDialog && $.blockUI ? "static" : e ? "fixed" : "absolute", display: "none", left: f.left + "px", top: f.top + "px" }); if (!b.inline) { var g = $.datepicker._get(b, "showAnim"), h = $.datepicker._get(b, "duration"), i = function () { var a = b.dpDiv.find("iframe.ui-datepicker-cover"); if (!!a.length) { var c = $.datepicker._getBorders(b.dpDiv); a.css({ left: -c[0], top: -c[1], width: b.dpDiv.outerWidth(), height: b.dpDiv.outerHeight() }) } }; b.dpDiv.zIndex($(a).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[g] ? b.dpDiv.show(g, $.datepicker._get(b, "showOptions"), h, i) : b.dpDiv[g || "show"](g ? h : null, i), (!g || !h) && i(), b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(), $.datepicker._curInst = b } }, _updateDatepicker: function (a) { var b = this; b.maxRows = 4; var c = $.datepicker._getBorders(a.dpDiv); instActive = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a); var d = a.dpDiv.find("iframe.ui-datepicker-cover"); !d.length || d.css({ left: -c[0], top: -c[1], width: a.dpDiv.outerWidth(), height: a.dpDiv.outerHeight() }), a.dpDiv.find("." + this._dayOverClass + " a").mouseover(); var e = this._getNumberOfMonths(a), f = e[1], g = 17; a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", g * f + "em"), a.dpDiv[(e[0] != 1 || e[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a == $.datepicker._curInst && $.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus(); if (a.yearshtml) { var h = a.yearshtml; setTimeout(function () { h === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), h = a.yearshtml = null }, 0) } }, _getBorders: function (a) { var b = function (a) { return { thin: 1, medium: 2, thick: 3}[a] || a }; return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))] }, _checkOffset: function (a, b, c) { var d = a.dpDiv.outerWidth(), e = a.dpDiv.outerHeight(), f = a.input ? a.input.outerWidth() : 0, g = a.input ? a.input.outerHeight() : 0, h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()), i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop()); return b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left == a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top == a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0), b }, _findPos: function (a) { var b = this._getInst(a), c = this._get(b, "isRTL"); while (a && (a.type == "hidden" || a.nodeType != 1 || $.expr.filters.hidden(a))) a = a[c ? "previousSibling" : "nextSibling"]; var d = $(a).offset(); return [d.left, d.top] }, _hideDatepicker: function (a) { var b = this._curInst; if (!b || a && b != $.data(a, PROP_NAME)) return; if (this._datepickerShowing) { var c = this._get(b, "showAnim"), d = this._get(b, "duration"), e = function () { $.datepicker._tidyDialog(b) }; $.effects && $.effects[c] ? b.dpDiv.hide(c, $.datepicker._get(b, "showOptions"), d, e) : b.dpDiv[c == "slideDown" ? "slideUp" : c == "fadeIn" ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1; var f = this._get(b, "onClose"); f && f.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1 } }, _tidyDialog: function (a) { a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") }, _checkExternalClick: function (a) { if (!$.datepicker._curInst) return; var b = $(a.target), c = $.datepicker._getInst(b[0]); (b[0].id != $.datepicker._mainDivId && b.parents("#" + $.datepicker._mainDivId).length == 0 && !b.hasClass($.datepicker.markerClassName) && !b.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || b.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != c) && $.datepicker._hideDatepicker() }, _adjustDate: function (a, b, c) { var d = $(a), e = this._getInst(d[0]); if (this._isDisabledDatepicker(d[0])) return; this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e) }, _gotoToday: function (a) { var b = $(a), c = this._getInst(b[0]); if (this._get(c, "gotoCurrent") && c.currentDay) c.selectedDay = c.currentDay, c.drawMonth = c.selectedMonth = c.currentMonth, c.drawYear = c.selectedYear = c.currentYear; else { var d = new Date; c.selectedDay = d.getDate(), c.drawMonth = c.selectedMonth = d.getMonth(), c.drawYear = c.selectedYear = d.getFullYear() } this._notifyChange(c), this._adjustDate(b) }, _selectMonthYear: function (a, b, c) { var d = $(a), e = this._getInst(d[0]); e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d) }, _selectDay: function (a, b, c, d) { var e = $(a); if ($(d).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0])) return; var f = this._getInst(e[0]); f.selectedDay = f.currentDay = $("a", d).html(), f.selectedMonth = f.currentMonth = b, f.selectedYear = f.currentYear = c, this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)) }, _clearDate: function (a) { var b = $(a), c = this._getInst(b[0]); this._selectDate(b, "") }, _selectDate: function (a, b) { var c = $(a), d = this._getInst(c[0]); b = b != null ? b : this._formatDate(d), d.input && d.input.val(b), this._updateAlternate(d); var e = this._get(d, "onSelect"); e ? e.apply(d.input ? d.input[0] : null, [b, d]) : d.input && d.input.trigger("change"), d.inline ? this._updateDatepicker(d) : (this._hideDatepicker(), this._lastInput = d.input[0], typeof d.input[0] != "object" && d.input.focus(), this._lastInput = null) }, _updateAlternate: function (a) { var b = this._get(a, "altField"); if (b) { var c = this._get(a, "altFormat") || this._get(a, "dateFormat"), d = this._getDate(a), e = this.formatDate(c, d, this._getFormatConfig(a)); $(b).each(function () { $(this).val(e) }) } }, noWeekends: function (a) { var b = a.getDay(); return [b > 0 && b < 6, ""] }, iso8601Week: function (a) { var b = new Date(a.getTime()); b.setDate(b.getDate() + 4 - (b.getDay() || 7)); var c = b.getTime(); return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1 }, parseDate: function (a, b, c) { if (a == null || b == null) throw "Invalid arguments"; b = typeof b == "object" ? b.toString() : b + ""; if (b == "") return null; var d = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff; d = typeof d != "string" ? d : (new Date).getFullYear() % 100 + parseInt(d, 10); var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = -1, j = -1, k = -1, l = -1, m = !1, n = function (b) { var c = s + 1 < a.length && a.charAt(s + 1) == b; return c && s++, c }, o = function (a) { var c = n(a), d = a == "@" ? 14 : a == "!" ? 20 : a == "y" && c ? 4 : a == "o" ? 3 : 2, e = new RegExp("^\\d{1," + d + "}"), f = b.substring(r).match(e); if (!f) throw "Missing number at position " + r; return r += f[0].length, parseInt(f[0], 10) }, p = function (a, c, d) { var e = $.map(n(a) ? d : c, function (a, b) { return [[b, a]] }).sort(function (a, b) { return -(a[1].length - b[1].length) }), f = -1; $.each(e, function (a, c) { var d = c[1]; if (b.substr(r, d.length).toLowerCase() == d.toLowerCase()) return f = c[0], r += d.length, !1 }); if (f != -1) return f + 1; throw "Unknown name at position " + r }, q = function () { if (b.charAt(r) != a.charAt(s)) throw "Unexpected literal at position " + r; r++ }, r = 0; for (var s = 0; s < a.length; s++) if (m) a.charAt(s) == "'" && !n("'") ? m = !1 : q(); else switch (a.charAt(s)) { case "d": k = o("d"); break; case "D": p("D", e, f); break; case "o": l = o("o"); break; case "m": j = o("m"); break; case "M": j = p("M", g, h); break; case "y": i = o("y"); break; case "@": var t = new Date(o("@")); i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate(); break; case "!": var t = new Date((o("!") - this._ticksTo1970) / 1e4); i = t.getFullYear(), j = t.getMonth() + 1, k = t.getDate(); break; case "'": n("'") ? q() : m = !0; break; default: q() } if (r < b.length) throw "Extra/unparsed characters found in date: " + b.substring(r); i == -1 ? i = (new Date).getFullYear() : i < 100 && (i += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (i <= d ? 0 : -100)); if (l > -1) { j = 1, k = l; do { var u = this._getDaysInMonth(i, j - 1); if (k <= u) break; j++, k -= u } while (!0) } var t = this._daylightSavingAdjust(new Date(i, j - 1, k)); if (t.getFullYear() != i || t.getMonth() + 1 != j || t.getDate() != k) throw "Invalid date"; return t }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7, formatDate: function (a, b, c) { if (!b) return ""; var d = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, e = (c ? c.dayNames : null) || this._defaults.dayNames, f = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames, h = function (b) { var c = m + 1 < a.length && a.charAt(m + 1) == b; return c && m++, c }, i = function (a, b, c) { var d = "" + b; if (h(a)) while (d.length < c) d = "0" + d; return d }, j = function (a, b, c, d) { return h(a) ? d[b] : c[b] }, k = "", l = !1; if (b) for (var m = 0; m < a.length; m++) if (l) a.charAt(m) == "'" && !h("'") ? l = !1 : k += a.charAt(m); else switch (a.charAt(m)) { case "d": k += i("d", b.getDate(), 2); break; case "D": k += j("D", b.getDay(), d, e); break; case "o": k += i("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864e5), 3); break; case "m": k += i("m", b.getMonth() + 1, 2); break; case "M": k += j("M", b.getMonth(), f, g); break; case "y": k += h("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100; break; case "@": k += b.getTime(); break; case "!": k += b.getTime() * 1e4 + this._ticksTo1970; break; case "'": h("'") ? k += "'" : l = !0; break; default: k += a.charAt(m) } return k }, _possibleChars: function (a) { var b = "", c = !1, d = function (b) { var c = e + 1 < a.length && a.charAt(e + 1) == b; return c && e++, c }; for (var e = 0; e < a.length; e++) if (c) a.charAt(e) == "'" && !d("'") ? c = !1 : b += a.charAt(e); else switch (a.charAt(e)) { case "d": case "m": case "y": case "@": b += "0123456789"; break; case "D": case "M": return null; case "'": d("'") ? b += "'" : c = !0; break; default: b += a.charAt(e) } return b }, _get: function (a, b) { return a.settings[b] !== undefined ? a.settings[b] : this._defaults[b] }, _setDateFromField: function (a, b) { if (a.input.val() == a.lastVal) return; var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e, f; e = f = this._getDefaultDate(a); var g = this._getFormatConfig(a); try { e = this.parseDate(c, d, g) || f } catch (h) { this.log(h), d = b ? "" : d } a.selectedDay = e.getDate(), a.drawMonth = a.selectedMonth = e.getMonth(), a.drawYear = a.selectedYear = e.getFullYear(), a.currentDay = d ? e.getDate() : 0, a.currentMonth = d ? e.getMonth() : 0, a.currentYear = d ? e.getFullYear() : 0, this._adjustInstDate(a) }, _getDefaultDate: function (a) { return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date)) }, _determineDate: function (a, b, c) { var d = function (a) { var b = new Date; return b.setDate(b.getDate() + a), b }, e = function (b) { try { return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a)) } catch (c) { } var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(b); while (i) { switch (i[2] || "d") { case "d": case "D": g += parseInt(i[1], 10); break; case "w": case "W": g += parseInt(i[1], 10) * 7; break; case "m": case "M": f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f)); break; case "y": case "Y": e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f)) } i = h.exec(b) } return new Date(e, f, g) }, f = b == null || b === "" ? c : typeof b == "string" ? e(b) : typeof b == "number" ? isNaN(b) ? c : d(b) : new Date(b.getTime()); return f = f && f.toString() == "Invalid Date" ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f) }, _daylightSavingAdjust: function (a) { return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null }, _setDate: function (a, b, c) { var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date)); a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), (e != a.selectedMonth || f != a.selectedYear) && !c && this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a)) }, _getDate: function (a) { var b = !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return b }, _attachHandlers: function (a) { var b = this._get(a, "stepMonths"), c = "#" + a.id.replace(/\\\\/g, "\\"); a.dpDiv.find("[data-handler]").map(function () { var a = { prev: function () { window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, -b, "M") }, next: function () { window["DP_jQuery_" + dpuuid].datepicker._adjustDate(c, +b, "M") }, hide: function () { window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker() }, today: function () { window["DP_jQuery_" + dpuuid].datepicker._gotoToday(c) }, selectDay: function () { return window["DP_jQuery_" + dpuuid].datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function () { return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "M"), !1 }, selectYear: function () { return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(c, this, "Y"), !1 } }; $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")]) }) }, _generateHTML: function (a) { var b = new Date; b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate())); var c = this._get(a, "isRTL"), d = this._get(a, "showButtonPanel"), e = this._get(a, "hideIfNoPrevNext"), f = this._get(a, "navigationAsDateFormat"), g = this._getNumberOfMonths(a), h = this._get(a, "showCurrentAtPos"), i = this._get(a, "stepMonths"), j = g[0] != 1 || g[1] != 1, k = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), l = this._getMinMaxDate(a, "min"), m = this._getMinMaxDate(a, "max"), n = a.drawMonth - h, o = a.drawYear; n < 0 && (n += 12, o--); if (m) { var p = this._daylightSavingAdjust(new Date(m.getFullYear(), m.getMonth() - g[0] * g[1] + 1, m.getDate())); p = l && p < l ? l : p; while (this._daylightSavingAdjust(new Date(o, n, 1)) > p) n--, n < 0 && (n = 11, o--) } a.drawMonth = n, a.drawYear = o; var q = this._get(a, "prevText"); q = f ? this.formatDate(q, this._daylightSavingAdjust(new Date(o, n - i, 1)), this._getFormatConfig(a)) : q; var r = this._canAdjustMonth(a, -1, o, n) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>" : e ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + q + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + q + "</span></a>", s = this._get(a, "nextText"); s = f ? this.formatDate(s, this._daylightSavingAdjust(new Date(o, n + i, 1)), this._getFormatConfig(a)) : s; var t = this._canAdjustMonth(a, 1, o, n) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : e ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>", u = this._get(a, "currentText"), v = this._get(a, "gotoCurrent") && a.currentDay ? k : b; u = f ? this.formatDate(u, v, this._getFormatConfig(a)) : u; var w = a.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(a, "closeText") + "</button>", x = d ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? w : "") + (this._isInRange(a, v) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + u + "</button>" : "") + (c ? "" : w) + "</div>" : "", y = parseInt(this._get(a, "firstDay"), 10); y = isNaN(y) ? 0 : y; var z = this._get(a, "showWeek"), A = this._get(a, "dayNames"), B = this._get(a, "dayNamesShort"), C = this._get(a, "dayNamesMin"), D = this._get(a, "monthNames"), E = this._get(a, "monthNamesShort"), F = this._get(a, "beforeShowDay"), G = this._get(a, "showOtherMonths"), H = this._get(a, "selectOtherMonths"), I = this._get(a, "calculateWeek") || this.iso8601Week, J = this._getDefaultDate(a), K = ""; for (var L = 0; L < g[0]; L++) { var M = ""; this.maxRows = 4; for (var N = 0; N < g[1]; N++) { var O = this._daylightSavingAdjust(new Date(o, n, a.selectedDay)), P = " ui-corner-all", Q = ""; if (j) { Q += '<div class="ui-datepicker-group'; if (g[1] > 1) switch (N) { case 0: Q += " ui-datepicker-group-first", P = " ui-corner-" + (c ? "right" : "left"); break; case g[1] - 1: Q += " ui-datepicker-group-last", P = " ui-corner-" + (c ? "left" : "right"); break; default: Q += " ui-datepicker-group-middle", P = "" } Q += '">' } Q += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + P + '">' + (/all|left/.test(P) && L == 0 ? c ? t : r : "") + (/all|right/.test(P) && L == 0 ? c ? r : t : "") + this._generateMonthYearHeader(a, n, o, l, m, L > 0 || N > 0, D, E) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>"; var R = z ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : ""; for (var S = 0; S < 7; S++) { var T = (S + y) % 7; R += "<th" + ((S + y + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + A[T] + '">' + C[T] + "</span></th>" } Q += R + "</tr></thead><tbody>"; var U = this._getDaysInMonth(o, n); o == a.selectedYear && n == a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, U)); var V = (this._getFirstDayOfMonth(o, n) - y + 7) % 7, W = Math.ceil((V + U) / 7), X = j ? this.maxRows > W ? this.maxRows : W : W; this.maxRows = X; var Y = this._daylightSavingAdjust(new Date(o, n, 1 - V)); for (var Z = 0; Z < X; Z++) { Q += "<tr>"; var _ = z ? '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(Y) + "</td>" : ""; for (var S = 0; S < 7; S++) { var ba = F ? F.apply(a.input ? a.input[0] : null, [Y]) : [!0, ""], bb = Y.getMonth() != n, bc = bb && !H || !ba[0] || l && Y < l || m && Y > m; _ += '<td class="' + ((S + y + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (bb ? " ui-datepicker-other-month" : "") + (Y.getTime() == O.getTime() && n == a.selectedMonth && a._keyEvent || J.getTime() == Y.getTime() && J.getTime() == O.getTime() ? " " + this._dayOverClass : "") + (bc ? " " + this._unselectableClass + " ui-state-disabled" : "") + (bb && !G ? "" : " " + ba[1] + (Y.getTime() == k.getTime() ? " " + this._currentClass : "") + (Y.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!bb || G) && ba[2] ? ' title="' + ba[2] + '"' : "") + (bc ? "" : ' data-handler="selectDay" data-event="click" data-month="' + Y.getMonth() + '" data-year="' + Y.getFullYear() + '"') + ">" + (bb && !G ? "&#xa0;" : bc ? '<span class="ui-state-default">' + Y.getDate() + "</span>" : '<a class="ui-state-default' + (Y.getTime() == b.getTime() ? " ui-state-highlight" : "") + (Y.getTime() == k.getTime() ? " ui-state-active" : "") + (bb ? " ui-priority-secondary" : "") + '" href="#">' + Y.getDate() + "</a>") + "</td>", Y.setDate(Y.getDate() + 1), Y = this._daylightSavingAdjust(Y) } Q += _ + "</tr>" } n++, n > 11 && (n = 0, o++), Q += "</tbody></table>" + (j ? "</div>" + (g[0] > 0 && N == g[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), M += Q } K += M } return K += x + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), a._keyEvent = !1, K }, _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) { var i = this._get(a, "changeMonth"), j = this._get(a, "changeYear"), k = this._get(a, "showMonthAfterYear"), l = '<div class="ui-datepicker-title">', m = ""; if (f || !i) m += '<span class="ui-datepicker-month">' + g[b] + "</span>"; else { var n = d && d.getFullYear() == c, o = e && e.getFullYear() == c; m += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">'; for (var p = 0; p < 12; p++) (!n || p >= d.getMonth()) && (!o || p <= e.getMonth()) && (m += '<option value="' + p + '"' + (p == b ? ' selected="selected"' : "") + ">" + h[p] + "</option>"); m += "</select>" } k || (l += m + (f || !i || !j ? "&#xa0;" : "")); if (!a.yearshtml) { a.yearshtml = ""; if (f || !j) l += '<span class="ui-datepicker-year">' + c + "</span>"; else { var q = this._get(a, "yearRange").split(":"), r = (new Date).getFullYear(), s = function (a) { var b = a.match(/c[+-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+-].*/) ? r + parseInt(a, 10) : parseInt(a, 10); return isNaN(b) ? r : b }, t = s(q[0]), u = Math.max(t, s(q[1] || "")); t = d ? Math.max(t, d.getFullYear()) : t, u = e ? Math.min(u, e.getFullYear()) : u, a.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; for (; t <= u; t++) a.yearshtml += '<option value="' + t + '"' + (t == c ? ' selected="selected"' : "") + ">" + t + "</option>"; a.yearshtml += "</select>", l += a.yearshtml, a.yearshtml = null } } return l += this._get(a, "yearSuffix"), k && (l += (f || !i || !j ? "&#xa0;" : "") + m), l += "</div>", l }, _adjustInstDate: function (a, b, c) { var d = a.drawYear + (c == "Y" ? b : 0), e = a.drawMonth + (c == "M" ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + (c == "D" ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f))); a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), (c == "M" || c == "Y") && this._notifyChange(a) }, _restrictMinMax: function (a, b) { var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && b < c ? c : b; return e = d && e > d ? d : e, e }, _notifyChange: function (a) { var b = this._get(a, "onChangeMonthYear"); b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a]) }, _getNumberOfMonths: function (a) { var b = this._get(a, "numberOfMonths"); return b == null ? [1, 1] : typeof b == "number" ? [1, b] : b }, _getMinMaxDate: function (a, b) { return this._determineDate(a, this._get(a, b + "Date"), null) }, _getDaysInMonth: function (a, b) { return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate() }, _getFirstDayOfMonth: function (a, b) { return (new Date(a, b, 1)).getDay() }, _canAdjustMonth: function (a, b, c, d) { var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1)); return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f) }, _isInRange: function (a, b) { var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"); return (!c || b.getTime() >= c.getTime()) && (!d || b.getTime() <= d.getTime()) }, _getFormatConfig: function (a) { var b = this._get(a, "shortYearCutoff"); return b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), { shortYearCutoff: b, dayNamesShort: this._get(a, "dayNamesShort"), dayNames: this._get(a, "dayNames"), monthNamesShort: this._get(a, "monthNamesShort"), monthNames: this._get(a, "monthNames")} }, _formatDate: function (a, b, c, d) { b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear); var e = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a)) } }), $.fn.datepicker = function (a) { if (!this.length) return this; $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0); var b = Array.prototype.slice.call(arguments, 1); return typeof a != "string" || a != "isDisabled" && a != "getDate" && a != "widget" ? a == "option" && arguments.length == 2 && typeof arguments[1] == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) : this.each(function () { typeof a == "string" ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a) }) : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.23", window["DP_jQuery_" + dpuuid] = $ })(jQuery); ;

/*
* jQuery timepicker addon
* By: Trent Richardson [http://trentrichardson.com]
* Version 1.0.1
* Last Modified: 07/01/2012
*
* Copyright 2012 Trent Richardson
* You may use this project under MIT or GPL licenses.
* http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
* http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
*
* HERES THE CSS:
* .ui-timepicker-div .ui-widget-header { margin-bottom: 8px; }
* .ui-timepicker-div dl { text-align: left; }
* .ui-timepicker-div dl dt { height: 25px; margin-bottom: -25px; }
* .ui-timepicker-div dl dd { margin: 0 10px 10px 65px; }
* .ui-timepicker-div td { font-size: 90%; }
* .ui-tpicker-grid-label { background: none; border: none; margin: 0; padding: 0; }
*/

/*jslint evil: true, maxlen: 300, white: false, undef: false, nomen: false, onevar: false */

(function ($) {

    // Prevent "Uncaught RangeError: Maximum call stack size exceeded"
    $.ui.timepicker = $.ui.timepicker || {};
    if ($.ui.timepicker.version) {
        return;
    }

    $.extend($.ui, { timepicker: { version: "1.0.1"} });

    /* Time picker manager.
    Use the singleton instance of this class, $.timepicker, to interact with the time picker.
    Settings for (groups of) time pickers are maintained in an instance object,
    allowing multiple different settings on the same page. */

    function Timepicker() {
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            currentText: 'Now',
            closeText: 'Done',
            ampm: false,
            amNames: ['AM', 'A'],
            pmNames: ['PM', 'P'],
            timeFormat: 'hh:mm tt',
            timeSuffix: '',
            timeOnlyTitle: 'Choose Time',
            timeText: 'Time',
            hourText: 'Hour',
            minuteText: 'Minute',
            secondText: 'Second',
            millisecText: 'Millisecond',
            timezoneText: 'Time Zone'
        };
        this._defaults = { // Global defaults for all the datetime picker instances
            showButtonPanel: true,
            timeOnly: false,
            showHour: true,
            showMinute: true,
            showSecond: false,
            showMillisec: false,
            showTimezone: false,
            showTime: true,
            stepHour: 1,
            stepMinute: 1,
            stepSecond: 1,
            stepMillisec: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisec: 0,
            timezone: null,
            useLocalTimezone: false,
            defaultTimezone: "+0000",
            hourMin: 0,
            minuteMin: 0,
            secondMin: 0,
            millisecMin: 0,
            hourMax: 23,
            minuteMax: 59,
            secondMax: 59,
            millisecMax: 999,
            minDateTime: null,
            maxDateTime: null,
            onSelect: null,
            hourGrid: 0,
            minuteGrid: 0,
            secondGrid: 0,
            millisecGrid: 0,
            alwaysSetTime: true,
            separator: ' ',
            altFieldTimeOnly: true,
            showTimepicker: true,
            timezoneIso8601: false,
            timezoneList: null,
            addSliderAccess: false,
            sliderAccessArgs: null
        };
        $.extend(this._defaults, this.regional['']);
    }

    $.extend(Timepicker.prototype, {
        $input: null,
        $altInput: null,
        $timeObj: null,
        inst: null,
        hour_slider: null,
        minute_slider: null,
        second_slider: null,
        millisec_slider: null,
        timezone_select: null,
        hour: 0,
        minute: 0,
        second: 0,
        millisec: 0,
        timezone: null,
        defaultTimezone: "+0000",
        hourMinOriginal: null,
        minuteMinOriginal: null,
        secondMinOriginal: null,
        millisecMinOriginal: null,
        hourMaxOriginal: null,
        minuteMaxOriginal: null,
        secondMaxOriginal: null,
        millisecMaxOriginal: null,
        ampm: '',
        formattedDate: '',
        formattedTime: '',
        formattedDateTime: '',
        timezoneList: null,

        /* Override the default settings for all instances of the time picker.
        @param  settings  object - the new settings to use as defaults (anonymous object)
        @return the manager object */
        setDefaults: function (settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },

        //########################################################################
        // Create a new Timepicker instance
        //########################################################################
        _newInst: function ($input, o) {
            var tp_inst = new Timepicker(),
			inlineSettings = {};

            for (var attrName in this._defaults) {
                var attrValue = $input.attr('time:' + attrName);
                if (attrValue) {
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
                beforeShow: function (input, dp_inst) {
                    if ($.isFunction(o.beforeShow)) {
                        return o.beforeShow(input, dp_inst, tp_inst);
                    }
                },
                onChangeMonthYear: function (year, month, dp_inst) {
                    // Update the time as well : this prevents the time from disappearing from the $input field.
                    tp_inst._updateDateTime(dp_inst);
                    if ($.isFunction(o.onChangeMonthYear)) {
                        o.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
                    }
                },
                onClose: function (dateText, dp_inst) {
                    if (tp_inst.timeDefined === true && $input.val() !== '') {
                        tp_inst._updateDateTime(dp_inst);
                    }
                    if ($.isFunction(o.onClose)) {
                        o.onClose.call($input[0], dateText, dp_inst, tp_inst);
                    }
                },
                timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
            });
            tp_inst.amNames = $.map(tp_inst._defaults.amNames, function (val) { return val.toUpperCase(); });
            tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function (val) { return val.toUpperCase(); });

            if (tp_inst._defaults.timezoneList === null) {
                var timezoneList = [];
                for (var i = -11; i <= 12; i++) {
                    timezoneList.push((i >= 0 ? '+' : '-') + ('0' + Math.abs(i).toString()).slice(-2) + '00');
                }
                if (tp_inst._defaults.timezoneIso8601) {
                    timezoneList = $.map(timezoneList, function (val) {
                        return val == '+0000' ? 'Z' : (val.substring(0, 3) + ':' + val.substring(3));
                    });
                }
                tp_inst._defaults.timezoneList = timezoneList;
            }

            tp_inst.timezone = tp_inst._defaults.timezone;
            tp_inst.hour = tp_inst._defaults.hour;
            tp_inst.minute = tp_inst._defaults.minute;
            tp_inst.second = tp_inst._defaults.second;
            tp_inst.millisec = tp_inst._defaults.millisec;
            tp_inst.ampm = '';
            tp_inst.$input = $input;

            if (o.altField) {
                tp_inst.$altInput = $(o.altField)
				.css({ cursor: 'pointer' })
				.focus(function () { $input.trigger("focus"); });
            }

            if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
                tp_inst._defaults.minDate = new Date();
            }
            if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
                tp_inst._defaults.maxDate = new Date();
            }

            // datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
            if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
                tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
            }
            if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
                tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
            }
            if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
                tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
            }
            if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
                tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
            }
            return tp_inst;
        },

        //########################################################################
        // add our sliders to the calendar
        //########################################################################
        _addTimePicker: function (dp_inst) {
            var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ?
				this.$input.val() + ' ' + this.$altInput.val() :
				this.$input.val();

            this.timeDefined = this._parseTime(currDT);
            this._limitMinMaxDateTime(dp_inst, false);
            this._injectTimePicker();
        },

        //########################################################################
        // parse the time string from input value or _setTime
        //########################################################################
        _parseTime: function (timeString, withDate) {
            if (!this.inst) {
                this.inst = $.datepicker._getInst(this.$input[0]);
            }

            if (withDate || !this._defaults.timeOnly) {
                var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
                try {
                    var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
                    if (!parseRes.timeObj) { return false; }
                    $.extend(this, parseRes.timeObj);
                } catch (err) {
                    return false;
                }
                return true;
            }
            else {
                var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
                if (!timeObj) { return false; }
                $.extend(this, timeObj);
                return true;
            }
        },

        //########################################################################
        // generate and inject html for timepicker into ui datepicker
        //########################################################################
        _injectTimePicker: function () {
            var $dp = this.inst.dpDiv,
			o = this._defaults,
			tp_inst = this,
            // Added by Peter Medeiros:
            // - Figure out what the hour/minute/second max should be based on the step values.
            // - Example: if stepMinute is 15, then minMax is 45.
			hourMax = parseInt((o.hourMax - ((o.hourMax - o.hourMin) % o.stepHour)), 10),
			minMax = parseInt((o.minuteMax - ((o.minuteMax - o.minuteMin) % o.stepMinute)), 10),
			secMax = parseInt((o.secondMax - ((o.secondMax - o.secondMin) % o.stepSecond)), 10),
			millisecMax = parseInt((o.millisecMax - ((o.millisecMax - o.millisecMin) % o.stepMillisec)), 10),
			dp_id = this.inst.id.toString().replace(/([^A-Za-z0-9_])/g, '');

            // Prevent displaying twice
            //if ($dp.find("div#ui-timepicker-div-"+ dp_id).length === 0) {
            if ($dp.find("div#ui-timepicker-div-" + dp_id).length === 0 && o.showTimepicker) {
                var noDisplay = ' style="display:none;"',
				html = '<div class="ui-timepicker-div" id="ui-timepicker-div-' + dp_id + '"><dl>' +
						'<dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
						'<dd class="ui_tpicker_time" id="ui_tpicker_time_' + dp_id + '"' +
						((o.showTime) ? '' : noDisplay) + '></dd>' +
						'<dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_' + dp_id + '"' +
						((o.showHour) ? '' : noDisplay) + '>' + o.hourText + '</dt>',
				hourGridSize = 0,
				minuteGridSize = 0,
				secondGridSize = 0,
				millisecGridSize = 0,
				size = null;

                // Hours
                html += '<dd class="ui_tpicker_hour"><div id="ui_tpicker_hour_' + dp_id + '"' +
						((o.showHour) ? '' : noDisplay) + '></div>';
                if (o.showHour && o.hourGrid > 0) {
                    html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

                    for (var h = o.hourMin; h <= hourMax; h += parseInt(o.hourGrid, 10)) {
                        hourGridSize++;
                        var tmph = (o.ampm && h > 12) ? h - 12 : h;
                        if (tmph < 10) { tmph = '0' + tmph; }
                        if (o.ampm) {
                            if (h === 0) {
                                tmph = 12 + 'a';
                            } else {
                                if (h < 12) { tmph += 'a'; }
                                else { tmph += 'p'; }
                            }
                        }
                        html += '<td>' + tmph + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                // Minutes
                html += '<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_' + dp_id + '"' +
					((o.showMinute) ? '' : noDisplay) + '>' + o.minuteText + '</dt>' +
					'<dd class="ui_tpicker_minute"><div id="ui_tpicker_minute_' + dp_id + '"' +
							((o.showMinute) ? '' : noDisplay) + '></div>';

                if (o.showMinute && o.minuteGrid > 0) {
                    html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

                    for (var m = o.minuteMin; m <= minMax; m += parseInt(o.minuteGrid, 10)) {
                        minuteGridSize++;
                        html += '<td>' + ((m < 10) ? '0' : '') + m + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                // Seconds
                html += '<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_' + dp_id + '"' +
					((o.showSecond) ? '' : noDisplay) + '>' + o.secondText + '</dt>' +
					'<dd class="ui_tpicker_second"><div id="ui_tpicker_second_' + dp_id + '"' +
							((o.showSecond) ? '' : noDisplay) + '></div>';

                if (o.showSecond && o.secondGrid > 0) {
                    html += '<div style="padding-left: 1px"><table><tr>';

                    for (var s = o.secondMin; s <= secMax; s += parseInt(o.secondGrid, 10)) {
                        secondGridSize++;
                        html += '<td>' + ((s < 10) ? '0' : '') + s + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                // Milliseconds
                html += '<dt class="ui_tpicker_millisec_label" id="ui_tpicker_millisec_label_' + dp_id + '"' +
					((o.showMillisec) ? '' : noDisplay) + '>' + o.millisecText + '</dt>' +
					'<dd class="ui_tpicker_millisec"><div id="ui_tpicker_millisec_' + dp_id + '"' +
							((o.showMillisec) ? '' : noDisplay) + '></div>';

                if (o.showMillisec && o.millisecGrid > 0) {
                    html += '<div style="padding-left: 1px"><table><tr>';

                    for (var l = o.millisecMin; l <= millisecMax; l += parseInt(o.millisecGrid, 10)) {
                        millisecGridSize++;
                        html += '<td>' + ((l < 10) ? '0' : '') + l + '</td>';
                    }

                    html += '</tr></table></div>';
                }
                html += '</dd>';

                // Timezone
                html += '<dt class="ui_tpicker_timezone_label" id="ui_tpicker_timezone_label_' + dp_id + '"' +
					((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
                html += '<dd class="ui_tpicker_timezone" id="ui_tpicker_timezone_' + dp_id + '"' +
							((o.showTimezone) ? '' : noDisplay) + '></dd>';

                html += '</dl></div>';
                var $tp = $(html);

                // if we only want time picker...
                if (o.timeOnly === true) {
                    $tp.prepend(
					'<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' +
						'<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' +
					'</div>');
                    $dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
                }

                this.hour_slider = $tp.find('#ui_tpicker_hour_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.hour,
                    min: o.hourMin,
                    max: hourMax,
                    step: o.stepHour,
                    slide: function (event, ui) {
                        tp_inst.hour_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });


                // Updated by Peter Medeiros:
                // - Pass in Event and UI instance into slide function
                this.minute_slider = $tp.find('#ui_tpicker_minute_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.minute,
                    min: o.minuteMin,
                    max: minMax,
                    step: o.stepMinute,
                    slide: function (event, ui) {
                        tp_inst.minute_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                this.second_slider = $tp.find('#ui_tpicker_second_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.second,
                    min: o.secondMin,
                    max: secMax,
                    step: o.stepSecond,
                    slide: function (event, ui) {
                        tp_inst.second_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                this.millisec_slider = $tp.find('#ui_tpicker_millisec_' + dp_id).slider({
                    orientation: "horizontal",
                    value: this.millisec,
                    min: o.millisecMin,
                    max: millisecMax,
                    step: o.stepMillisec,
                    slide: function (event, ui) {
                        tp_inst.millisec_slider.slider("option", "value", ui.value);
                        tp_inst._onTimeChange();
                    }
                });

                this.timezone_select = $tp.find('#ui_tpicker_timezone_' + dp_id).append('<select></select>').find("select");
                $.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function (val, idx) {
				    return $("<option />")
						.val(typeof val == "object" ? val.value : val)
						.text(typeof val == "object" ? val.label : val);
				})
			);
                if (typeof (this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
                    var local_date = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
                    var local_timezone = timeZoneString(local_date);
                    if (local_timezone == this.timezone) {
                        selectLocalTimeZone(tp_inst);
                    } else {
                        this.timezone_select.val(this.timezone);
                    }
                } else {
                    if (typeof (this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
                        this.timezone_select.val(o.defaultTimezone);
                    } else {
                        selectLocalTimeZone(tp_inst);
                    }
                }
                this.timezone_select.change(function () {
                    tp_inst._defaults.useLocalTimezone = false;
                    tp_inst._onTimeChange();
                });

                // Add grid functionality
                if (o.showHour && o.hourGrid > 0) {
                    size = 100 * hourGridSize * o.hourGrid / (hourMax - o.hourMin);

                    $tp.find(".ui_tpicker_hour table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * hourGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            var h = $(this).html();
                            if (o.ampm) {
                                var ap = h.substring(2).toLowerCase(),
								aph = parseInt(h.substring(0, 2), 10);
                                if (ap == 'a') {
                                    if (aph == 12) { h = 0; }
                                    else { h = aph; }
                                } else if (aph == 12) { h = 12; }
                                else { h = aph + 12; }
                            }
                            tp_inst.hour_slider.slider("option", "value", h);
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / hourGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showMinute && o.minuteGrid > 0) {
                    size = 100 * minuteGridSize * o.minuteGrid / (minMax - o.minuteMin);
                    $tp.find(".ui_tpicker_minute table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * minuteGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.minute_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / minuteGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showSecond && o.secondGrid > 0) {
                    $tp.find(".ui_tpicker_second table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * secondGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.second_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / secondGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                if (o.showMillisec && o.millisecGrid > 0) {
                    $tp.find(".ui_tpicker_millisec table").css({
                        width: size + "%",
                        marginLeft: (size / (-2 * millisecGridSize)) + "%",
                        borderCollapse: 'collapse'
                    }).find("td").each(function (index) {
                        $(this).click(function () {
                            tp_inst.millisec_slider.slider("option", "value", $(this).html());
                            tp_inst._onTimeChange();
                            tp_inst._onSelectHandler();
                        }).css({
                            cursor: 'pointer',
                            width: (100 / millisecGridSize) + '%',
                            textAlign: 'center',
                            overflow: 'hidden'
                        });
                    });
                }

                var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
                if ($buttonPanel.length) { $buttonPanel.before($tp); }
                else { $dp.append($tp); }

                this.$timeObj = $tp.find('#ui_tpicker_time_' + dp_id);

                if (this.inst !== null) {
                    var timeDefined = this.timeDefined;
                    this._onTimeChange();
                    this.timeDefined = timeDefined;
                }

                //Emulate datepicker onSelect behavior. Call on slidestop.
                var onSelectDelegate = function () {
                    tp_inst._onSelectHandler();
                };
                this.hour_slider.bind('slidestop', onSelectDelegate);
                this.minute_slider.bind('slidestop', onSelectDelegate);
                this.second_slider.bind('slidestop', onSelectDelegate);
                this.millisec_slider.bind('slidestop', onSelectDelegate);

                // slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
                if (this._defaults.addSliderAccess) {
                    var sliderAccessArgs = this._defaults.sliderAccessArgs;
                    setTimeout(function () { // fix for inline mode
                        if ($tp.find('.ui-slider-access').length === 0) {
                            $tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

                            // fix any grids since sliders are shorter
                            var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
                            if (sliderAccessWidth) {
                                $tp.find('table:visible').each(function () {
                                    var $g = $(this),
									oldWidth = $g.outerWidth(),
									oldMarginLeft = $g.css('marginLeft').toString().replace('%', ''),
									newWidth = oldWidth - sliderAccessWidth,
									newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%';

                                    $g.css({ width: newWidth, marginLeft: newMarginLeft });
                                });
                            }
                        }
                    }, 0);
                }
                // end slideAccess integration

            }
        },

        //########################################################################
        // This function tries to limit the ability to go outside the
        // min/max date range
        //########################################################################
        _limitMinMaxDateTime: function (dp_inst, adjustSliders) {
            var o = this._defaults,
			dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

            if (!this._defaults.showTimepicker) { return; } // No time so nothing to check here

            if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
                var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
				minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null) {
                    this.hourMinOriginal = o.hourMin;
                    this.minuteMinOriginal = o.minuteMin;
                    this.secondMinOriginal = o.secondMin;
                    this.millisecMinOriginal = o.millisecMin;
                }

                if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMin = minDateTime.getHours();
                    if (this.hour <= this._defaults.hourMin) {
                        this.hour = this._defaults.hourMin;
                        this._defaults.minuteMin = minDateTime.getMinutes();
                        if (this.minute <= this._defaults.minuteMin) {
                            this.minute = this._defaults.minuteMin;
                            this._defaults.secondMin = minDateTime.getSeconds();
                        } else if (this.second <= this._defaults.secondMin) {
                            this.second = this._defaults.secondMin;
                            this._defaults.millisecMin = minDateTime.getMilliseconds();
                        } else {
                            if (this.millisec < this._defaults.millisecMin) {
                                this.millisec = this._defaults.millisecMin;
                            }
                            this._defaults.millisecMin = this.millisecMinOriginal;
                        }
                    } else {
                        this._defaults.minuteMin = this.minuteMinOriginal;
                        this._defaults.secondMin = this.secondMinOriginal;
                        this._defaults.millisecMin = this.millisecMinOriginal;
                    }
                } else {
                    this._defaults.hourMin = this.hourMinOriginal;
                    this._defaults.minuteMin = this.minuteMinOriginal;
                    this._defaults.secondMin = this.secondMinOriginal;
                    this._defaults.millisecMin = this.millisecMinOriginal;
                }
            }

            if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
                var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
				maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

                if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null) {
                    this.hourMaxOriginal = o.hourMax;
                    this.minuteMaxOriginal = o.minuteMax;
                    this.secondMaxOriginal = o.secondMax;
                    this.millisecMaxOriginal = o.millisecMax;
                }

                if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
                    this._defaults.hourMax = maxDateTime.getHours();
                    if (this.hour >= this._defaults.hourMax) {
                        this.hour = this._defaults.hourMax;
                        this._defaults.minuteMax = maxDateTime.getMinutes();
                        if (this.minute >= this._defaults.minuteMax) {
                            this.minute = this._defaults.minuteMax;
                            this._defaults.secondMax = maxDateTime.getSeconds();
                        } else if (this.second >= this._defaults.secondMax) {
                            this.second = this._defaults.secondMax;
                            this._defaults.millisecMax = maxDateTime.getMilliseconds();
                        } else {
                            if (this.millisec > this._defaults.millisecMax) { this.millisec = this._defaults.millisecMax; }
                            this._defaults.millisecMax = this.millisecMaxOriginal;
                        }
                    } else {
                        this._defaults.minuteMax = this.minuteMaxOriginal;
                        this._defaults.secondMax = this.secondMaxOriginal;
                        this._defaults.millisecMax = this.millisecMaxOriginal;
                    }
                } else {
                    this._defaults.hourMax = this.hourMaxOriginal;
                    this._defaults.minuteMax = this.minuteMaxOriginal;
                    this._defaults.secondMax = this.secondMaxOriginal;
                    this._defaults.millisecMax = this.millisecMaxOriginal;
                }
            }

            if (adjustSliders !== undefined && adjustSliders === true) {
                var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
                minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
                secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
				millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);

                if (this.hour_slider) {
                    this.hour_slider.slider("option", { min: this._defaults.hourMin, max: hourMax }).slider('value', this.hour);
                }
                if (this.minute_slider) {
                    this.minute_slider.slider("option", { min: this._defaults.minuteMin, max: minMax }).slider('value', this.minute);
                }
                if (this.second_slider) {
                    this.second_slider.slider("option", { min: this._defaults.secondMin, max: secMax }).slider('value', this.second);
                }
                if (this.millisec_slider) {
                    this.millisec_slider.slider("option", { min: this._defaults.millisecMin, max: millisecMax }).slider('value', this.millisec);
                }
            }

        },


        //########################################################################
        // when a slider moves, set the internal time...
        // on time change is also called when the time is updated in the text field
        //########################################################################
        _onTimeChange: function () {
            var hour = (this.hour_slider) ? this.hour_slider.slider('value') : false,
			minute = (this.minute_slider) ? this.minute_slider.slider('value') : false,
			second = (this.second_slider) ? this.second_slider.slider('value') : false,
			millisec = (this.millisec_slider) ? this.millisec_slider.slider('value') : false,
			timezone = (this.timezone_select) ? this.timezone_select.val() : false,
			o = this._defaults;

            if (typeof (hour) == 'object') { hour = false; }
            if (typeof (minute) == 'object') { minute = false; }
            if (typeof (second) == 'object') { second = false; }
            if (typeof (millisec) == 'object') { millisec = false; }
            if (typeof (timezone) == 'object') { timezone = false; }

            if (hour !== false) { hour = parseInt(hour, 10); }
            if (minute !== false) { minute = parseInt(minute, 10); }
            if (second !== false) { second = parseInt(second, 10); }
            if (millisec !== false) { millisec = parseInt(millisec, 10); }

            var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

            // If the update was done in the input field, the input field should not be updated.
            // If the update was done using the sliders, update the input field.
            var hasChanged = (hour != this.hour || minute != this.minute ||
				second != this.second || millisec != this.millisec ||
				(this.ampm.length > 0 &&
				    (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) ||
				timezone != this.timezone);

            if (hasChanged) {

                if (hour !== false) { this.hour = hour; }
                if (minute !== false) { this.minute = minute; }
                if (second !== false) { this.second = second; }
                if (millisec !== false) { this.millisec = millisec; }
                if (timezone !== false) { this.timezone = timezone; }

                if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]); }

                this._limitMinMaxDateTime(this.inst, true);
            }
            if (o.ampm) { this.ampm = ampm; }

            //this._formatTime();
            this.formattedTime = $.datepicker.formatTime(this._defaults.timeFormat, this, this._defaults);
            if (this.$timeObj) { this.$timeObj.text(this.formattedTime + o.timeSuffix); }
            this.timeDefined = true;
            if (hasChanged) { this._updateDateTime(); }
        },

        //########################################################################
        // call custom onSelect.
        // bind to sliders slidestop, and grid click.
        //########################################################################
        _onSelectHandler: function () {
            var onSelect = this._defaults.onSelect;
            var inputEl = this.$input ? this.$input[0] : null;
            if (onSelect && inputEl) {
                onSelect.apply(inputEl, [this.formattedDateTime, this]);
            }
        },

        //########################################################################
        // left for any backwards compatibility
        //########################################################################
        _formatTime: function (time, format) {
            time = time || { hour: this.hour, minute: this.minute, second: this.second, millisec: this.millisec, ampm: this.ampm, timezone: this.timezone };
            var tmptime = (format || this._defaults.timeFormat).toString();

            tmptime = $.datepicker.formatTime(tmptime, time, this._defaults);

            if (arguments.length) { return tmptime; }
            else { this.formattedTime = tmptime; }
        },

        //########################################################################
        // update our input with the new date time..
        //########################################################################
        _updateDateTime: function (dp_inst) {
            dp_inst = this.inst || dp_inst;
            var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
			dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
			formatCfg = $.datepicker._getFormatConfig(dp_inst),
			timeAvailable = dt !== null && this.timeDefined;
            this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
            var formattedDateTime = this.formattedDate;
            // remove following lines to force every changes in date picker to change the input value
            // Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
            // If the user manually empty the value in the input field, the date picker will never change selected value.
            //if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
            //	return;
            //}

            if (this._defaults.timeOnly === true) {
                formattedDateTime = this.formattedTime;
            } else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
                formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
            }

            this.formattedDateTime = formattedDateTime;

            if (!this._defaults.showTimepicker) {
                this.$input.val(this.formattedDate);
            } else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
                this.$altInput.val(this.formattedTime);
                this.$input.val(this.formattedDate);
            } else if (this.$altInput) {
                this.$altInput.val(formattedDateTime);
                this.$input.val(formattedDateTime);
            } else {
                this.$input.val(formattedDateTime);
            }

            this.$input.trigger("change");
        }

    });

    $.fn.extend({
        //########################################################################
        // shorthand just to use timepicker..
        //########################################################################
        timepicker: function (o) {
            o = o || {};
            var tmp_args = arguments;

            if (typeof o == 'object') { tmp_args[0] = $.extend(o, { timeOnly: true }); }

            return $(this).each(function () {
                $.fn.datetimepicker.apply($(this), tmp_args);
            });
        },

        //########################################################################
        // extend timepicker to datepicker
        //########################################################################
        datetimepicker: function (o) {
            o = o || {};
            var tmp_args = arguments;

            if (typeof (o) == 'string') {
                if (o == 'getDate') {
                    return $.fn.datepicker.apply($(this[0]), tmp_args);
                }
                else {
                    return this.each(function () {
                        var $t = $(this);
                        $t.datepicker.apply($t, tmp_args);
                    });
                }
            }
            else {
                return this.each(function () {
                    var $t = $(this);
                    $t.datepicker($.timepicker._newInst($t, o)._defaults);
                });
            }
        }
    });

    $.datepicker.parseDateTime = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
        if (parseRes.timeObj) {
            var t = parseRes.timeObj;
            parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
        }

        return parseRes.date;
    };

    $.datepicker.parseTime = function (timeFormat, timeString, options) {

        //########################################################################
        // pattern for standard and localized AM/PM markers
        //########################################################################
        var getPatternAmpm = function (amNames, pmNames) {
            var markers = [];
            if (amNames) {
                $.merge(markers, amNames);
            }
            if (pmNames) {
                $.merge(markers, pmNames);
            }
            markers = $.map(markers, function (val) { return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&'); });
            return '(' + markers.join('|') + ')?';
        };

        //########################################################################
        // figure out position of time elements.. cause js cant do named captures
        //########################################################################
        var getFormatPositions = function (timeFormat) {
            var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z)/g),
			orders = { h: -1, m: -1, s: -1, l: -1, t: -1, z: -1 };

            if (finds) {
                for (var i = 0; i < finds.length; i++) {
                    if (orders[finds[i].toString().charAt(0)] == -1) {
                        orders[finds[i].toString().charAt(0)] = i + 1;
                    }
                }
            }
            return orders;
        };

        var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});

        var regstr = '^' + timeFormat.toString()
			.replace(/h{1,2}/ig, '(\\d?\\d)')
			.replace(/m{1,2}/ig, '(\\d?\\d)')
			.replace(/s{1,2}/ig, '(\\d?\\d)')
			.replace(/l{1}/ig, '(\\d?\\d?\\d)')
			.replace(/t{1,2}/ig, getPatternAmpm(o.amNames, o.pmNames))
			.replace(/z{1}/ig, '(z|[-+]\\d\\d:?\\d\\d)?')
			.replace(/\s/g, '\\s?') + o.timeSuffix + '$',
		order = getFormatPositions(timeFormat),
		ampm = '',
		treg;

        treg = timeString.match(new RegExp(regstr, 'i'));

        var resTime = { hour: 0, minute: 0, second: 0, millisec: 0 };

        if (treg) {
            if (order.t !== -1) {
                if (treg[order.t] === undefined || treg[order.t].length === 0) {
                    ampm = '';
                    resTime.ampm = '';
                } else {
                    ampm = $.inArray(treg[order.t], o.amNames) !== -1 ? 'AM' : 'PM';
                    resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
                }
            }

            if (order.h !== -1) {
                if (ampm == 'AM' && treg[order.h] == '12') {
                    resTime.hour = 0; // 12am = 0 hour
                } else {
                    if (ampm == 'PM' && treg[order.h] != '12') {
                        resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
                    }
                    else { resTime.hour = Number(treg[order.h]); }
                }
            }

            if (order.m !== -1) { resTime.minute = Number(treg[order.m]); }
            if (order.s !== -1) { resTime.second = Number(treg[order.s]); }
            if (order.l !== -1) { resTime.millisec = Number(treg[order.l]); }
            if (order.z !== -1 && treg[order.z] !== undefined) {
                var tz = treg[order.z].toUpperCase();
                switch (tz.length) {
                    case 1: // Z
                        tz = o.timezoneIso8601 ? 'Z' : '+0000';
                        break;
                    case 5: // +hhmm
                        if (o.timezoneIso8601) {
                            tz = tz.substring(1) == '0000' ?
							'Z' :
							tz.substring(0, 3) + ':' + tz.substring(3);
                        }
                        break;
                    case 6: // +hh:mm
                        if (!o.timezoneIso8601) {
                            tz = tz == 'Z' || tz.substring(1) == '00:00' ?
							'+0000' :
							tz.replace(/:/, '');
                        } else {
                            if (tz.substring(1) == '00:00') {
                                tz = 'Z';
                            }
                        }
                        break;
                }
                resTime.timezone = tz;
            }


            return resTime;
        }

        return false;
    };

    //########################################################################
    // format the time all pretty...
    // format = string format of the time
    // time = a {}, not a Date() for timezones
    // options = essentially the regional[].. amNames, pmNames, ampm
    //########################################################################
    $.datepicker.formatTime = function (format, time, options) {
        options = options || {};
        options = $.extend($.timepicker._defaults, options);
        time = $.extend({ hour: 0, minute: 0, second: 0, millisec: 0, timezone: '+0000' }, time);

        var tmptime = format;
        var ampmName = options.amNames[0];

        var hour = parseInt(time.hour, 10);
        if (options.ampm) {
            if (hour > 11) {
                ampmName = options.pmNames[0];
                if (hour > 12) {
                    hour = hour % 12;
                }
            }
            if (hour === 0) {
                hour = 12;
            }
        }
        tmptime = tmptime.replace(/(?:hh?|mm?|ss?|[tT]{1,2}|[lz])/g, function (match) {
            switch (match.toLowerCase()) {
                case 'hh': return ('0' + hour).slice(-2);
                case 'h': return hour;
                case 'mm': return ('0' + time.minute).slice(-2);
                case 'm': return time.minute;
                case 'ss': return ('0' + time.second).slice(-2);
                case 's': return time.second;
                case 'l': return ('00' + time.millisec).slice(-3);
                case 'z': return time.timezone;
                case 't': case 'tt':
                    if (options.ampm) {
                        if (match.length == 1) {
                            ampmName = ampmName.charAt(0);
                        }
                        return match.charAt(0) == 'T' ? ampmName.toUpperCase() : ampmName.toLowerCase();
                    }
                    return '';
            }
        });

        tmptime = $.trim(tmptime);
        return tmptime;
    };

    //########################################################################
    // the bad hack :/ override datepicker so it doesnt close on select
    // inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
    //########################################################################
    $.datepicker._base_selectDate = $.datepicker._selectDate;
    $.datepicker._selectDate = function (id, dateStr) {
        var inst = this._getInst($(id)[0]),
		tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            tp_inst._limitMinMaxDateTime(inst, true);
            inst.inline = inst.stay_open = true;
            //This way the onSelect handler called from calendarpicker get the full dateTime
            this._base_selectDate(id, dateStr);
            inst.inline = inst.stay_open = false;
            this._notifyChange(inst);
            this._updateDatepicker(inst);
        }
        else { this._base_selectDate(id, dateStr); }
    };

    //#############################################################################################
    // second bad hack :/ override datepicker so it triggers an event when changing the input field
    // and does not redraw the datepicker on every selectDate event
    //#############################################################################################
    $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
    $.datepicker._updateDatepicker = function (inst) {

        // don't popup the datepicker if there is another instance already opened
        var input = inst.input[0];
        if ($.datepicker._curInst &&
	   $.datepicker._curInst != inst &&
	   $.datepicker._datepickerShowing &&
	   $.datepicker._lastInput != input) {
            return;
        }

        if (typeof (inst.stay_open) !== 'boolean' || inst.stay_open === false) {

            this._base_updateDatepicker(inst);

            // Reload the time control when changing something in the input text field.
            var tp_inst = this._get(inst, 'timepicker');
            if (tp_inst) {
                tp_inst._addTimePicker(inst);

                if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
                    var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
                    selectLocalTimeZone(tp_inst, date);
                    tp_inst._onTimeChange();
                }
            }
        }
    };

    //#######################################################################################
    // third bad hack :/ override datepicker so it allows spaces and colon in the input field
    //#######################################################################################
    $.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
    $.datepicker._doKeyPress = function (event) {
        var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if ($.datepicker._get(inst, 'constrainInput')) {
                var ampm = tp_inst._defaults.ampm,
				dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
				datetimeChars = tp_inst._defaults.timeFormat.toString()
								.replace(/[hms]/g, '')
								.replace(/TT/g, ampm ? 'APM' : '')
								.replace(/Tt/g, ampm ? 'AaPpMm' : '')
								.replace(/tT/g, ampm ? 'AaPpMm' : '')
								.replace(/T/g, ampm ? 'AP' : '')
								.replace(/tt/g, ampm ? 'apm' : '')
								.replace(/t/g, ampm ? 'ap' : '') +
								" " +
								tp_inst._defaults.separator +
								tp_inst._defaults.timeSuffix +
								(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') +
								(tp_inst._defaults.amNames.join('')) +
								(tp_inst._defaults.pmNames.join('')) +
								dateChars,
				chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
                return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
            }
        }

        return $.datepicker._base_doKeyPress(event);
    };

    //#######################################################################################
    // Override key up event to sync manual input changes.
    //#######################################################################################
    $.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
    $.datepicker._doKeyUp = function (event) {
        var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

        if (tp_inst) {
            if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
                try {
                    $.datepicker._updateDatepicker(inst);
                }
                catch (err) {
                    $.datepicker.log(err);
                }
            }
        }

        return $.datepicker._base_doKeyUp(event);
    };

    //#######################################################################################
    // override "Today" button to also grab the time.
    //#######################################################################################
    $.datepicker._base_gotoToday = $.datepicker._gotoToday;
    $.datepicker._gotoToday = function (id) {
        var inst = this._getInst($(id)[0]),
		$dp = inst.dpDiv;
        this._base_gotoToday(id);
        var tp_inst = this._get(inst, 'timepicker');
        selectLocalTimeZone(tp_inst);
        var now = new Date();
        this._setTime(inst, now);
        $('.ui-datepicker-today', $dp).click();
    };

    //#######################################################################################
    // Disable & enable the Time in the datetimepicker
    //#######################################################################################
    $.datepicker._disableTimepickerDatepicker = function (target) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = false;
            tp_inst._updateDateTime(inst);
        }
    };

    $.datepicker._enableTimepickerDatepicker = function (target) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');
        $(target).datepicker('getDate'); // Init selected[Year|Month|Day]
        if (tp_inst) {
            tp_inst._defaults.showTimepicker = true;
            tp_inst._addTimePicker(inst); // Could be disabled on page load
            tp_inst._updateDateTime(inst);
        }
    };

    //#######################################################################################
    // Create our own set time function
    //#######################################################################################
    $.datepicker._setTime = function (inst, date) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var defaults = tp_inst._defaults,
            // calling _setTime with no date sets time to defaults
			hour = date ? date.getHours() : defaults.hour,
			minute = date ? date.getMinutes() : defaults.minute,
			second = date ? date.getSeconds() : defaults.second,
			millisec = date ? date.getMilliseconds() : defaults.millisec;
            //check if within min/max times..
            // correct check if within min/max times. 	
            // Rewritten by Scott A. Woodward
            var hourEq = hour === defaults.hourMin,
			minuteEq = minute === defaults.minuteMin,
			secondEq = second === defaults.secondMin;
            var reset = false;
            if (hour < defaults.hourMin || hour > defaults.hourMax)
                reset = true;
            else if ((minute < defaults.minuteMin || minute > defaults.minuteMax) && hourEq)
                reset = true;
            else if ((second < defaults.secondMin || second > defaults.secondMax) && hourEq && minuteEq)
                reset = true;
            else if ((millisec < defaults.millisecMin || millisec > defaults.millisecMax) && hourEq && minuteEq && secondEq)
                reset = true;
            if (reset) {
                hour = defaults.hourMin;
                minute = defaults.minuteMin;
                second = defaults.secondMin;
                millisec = defaults.millisecMin;
            }
            tp_inst.hour = hour;
            tp_inst.minute = minute;
            tp_inst.second = second;
            tp_inst.millisec = millisec;
            if (tp_inst.hour_slider) tp_inst.hour_slider.slider('value', hour);
            if (tp_inst.minute_slider) tp_inst.minute_slider.slider('value', minute);
            if (tp_inst.second_slider) tp_inst.second_slider.slider('value', second);
            if (tp_inst.millisec_slider) tp_inst.millisec_slider.slider('value', millisec);

            tp_inst._onTimeChange();
            tp_inst._updateDateTime(inst);
        }
    };

    //#######################################################################################
    // Create new public method to set only time, callable as $().datepicker('setTime', date)
    //#######################################################################################
    $.datepicker._setTimeDatepicker = function (target, date, withDate) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst);
            var tp_date;
            if (date) {
                if (typeof date == "string") {
                    tp_inst._parseTime(date, withDate);
                    tp_date = new Date();
                    tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
                }
                else { tp_date = new Date(date.getTime()); }
                if (tp_date.toString() == 'Invalid Date') { tp_date = undefined; }
                this._setTime(inst, tp_date);
            }
        }

    };

    //#######################################################################################
    // override setDate() to allow setting time too within Date object
    //#######################################################################################
    $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
    $.datepicker._setDateDatepicker = function (target, date) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

        this._updateDatepicker(inst);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(target, tp_date, true);
    };

    //#######################################################################################
    // override getDate() to allow getting time too within Date object
    //#######################################################################################
    $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
    $.datepicker._getDateDatepicker = function (target, noDefault) {
        var inst = this._getInst(target);
        if (!inst) { return; }

        var tp_inst = this._get(inst, 'timepicker');

        if (tp_inst) {
            this._setDateFromField(inst, noDefault);
            var date = this._getDate(inst);
            if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) { date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec); }
            return date;
        }
        return this._base_getDateDatepicker(target, noDefault);
    };

    //#######################################################################################
    // override parseDate() because UI 1.8.14 throws an error about "Extra characters"
    // An option in datapicker to ignore extra format characters would be nicer.
    //#######################################################################################
    $.datepicker._base_parseDate = $.datepicker.parseDate;
    $.datepicker.parseDate = function (format, value, settings) {
        var splitRes = splitDateTime(format, value, settings);
        return $.datepicker._base_parseDate(format, splitRes[0], settings);
    };

    //#######################################################################################
    // override formatDate to set date with time to the input
    //#######################################################################################
    $.datepicker._base_formatDate = $.datepicker._formatDate;
    $.datepicker._formatDate = function (inst, day, month, year) {
        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            tp_inst._updateDateTime(inst);
            return tp_inst.$input.val();
        }
        return this._base_formatDate(inst);
    };

    //#######################################################################################
    // override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
    //#######################################################################################
    $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
    $.datepicker._optionDatepicker = function (target, name, value) {
        var inst = this._getInst(target);
        if (!inst) { return null; }

        var tp_inst = this._get(inst, 'timepicker');
        if (tp_inst) {
            var min = null, max = null, onselect = null;
            if (typeof name == 'string') { // if min/max was set with the string
                if (name === 'minDate' || name === 'minDateTime') {
                    min = value;
                }
                else {
                    if (name === 'maxDate' || name === 'maxDateTime') {
                        max = value;
                    }
                    else {
                        if (name === 'onSelect') {
                            onselect = value;
                        }
                    }
                }
            } else {
                if (typeof name == 'object') { //if min/max was set with the JSON
                    if (name.minDate) {
                        min = name.minDate;
                    } else {
                        if (name.minDateTime) {
                            min = name.minDateTime;
                        } else {
                            if (name.maxDate) {
                                max = name.maxDate;
                            } else {
                                if (name.maxDateTime) {
                                    max = name.maxDateTime;
                                }
                            }
                        }
                    }
                }
            }
            if (min) { //if min was set
                if (min === 0) {
                    min = new Date();
                } else {
                    min = new Date(min);
                }

                tp_inst._defaults.minDate = min;
                tp_inst._defaults.minDateTime = min;
            } else if (max) { //if max was set
                if (max === 0) {
                    max = new Date();
                } else {
                    max = new Date(max);
                }
                tp_inst._defaults.maxDate = max;
                tp_inst._defaults.maxDateTime = max;
            } else if (onselect) {
                tp_inst._defaults.onSelect = onselect;
            }
        }
        if (value === undefined) {
            return this._base_optionDatepicker(target, name);
        }
        return this._base_optionDatepicker(target, name, value);
    };

    //#######################################################################################
    // jQuery extend now ignores nulls!
    //#######################################################################################
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] === null || props[name] === undefined) {
                target[name] = props[name];
            }
        }
        return target;
    }

    //#######################################################################################
    // Splits datetime string into date ans time substrings.
    // Throws exception when date can't be parsed
    // If only date is present, time substring eill be '' 
    //#######################################################################################
    var splitDateTime = function (dateFormat, dateTimeString, dateSettings) {
        try {
            var date = $.datepicker._base_parseDate(dateFormat, dateTimeString, dateSettings);
        } catch (err) {
            if (err.indexOf(":") >= 0) {
                // Hack!  The error message ends with a colon, a space, and
                // the "extra" characters.  We rely on that instead of
                // attempting to perfectly reproduce the parsing algorithm.
                var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2);
                var timeString = dateTimeString.substring(dateStringLength);

                return [dateTimeString.substring(0, dateStringLength), dateTimeString.substring(dateStringLength)];

            } else {
                throw err;
            }
        }
        return [dateTimeString, ''];
    };

    //#######################################################################################
    // Internal function to parse datetime interval
    // Returns: {date: Date, timeObj: Object}, where
    //   date - parsed date without time (type Date)
    //   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
    //#######################################################################################
    var parseDateTimeInternal = function (dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
        var date;
        var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings);
        date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
        if (splitRes[1] !== '') {
            var timeString = splitRes[1];
            var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator;
            if (timeString.indexOf(separator) !== 0) {
                throw 'Missing time separator';
            }
            timeString = timeString.substring(separator.length);
            var parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);
            if (parsedTime === null) {
                throw 'Wrong time format';
            }
            return { date: date, timeObj: parsedTime };
        } else {
            return { date: date };
        }
    };

    //#######################################################################################
    // Internal function to set timezone_select to the local timezone
    //#######################################################################################
    var selectLocalTimeZone = function (tp_inst, date) {
        if (tp_inst && tp_inst.timezone_select) {
            tp_inst._defaults.useLocalTimezone = true;
            var now = typeof date !== 'undefined' ? date : new Date();
            var tzoffset = timeZoneString(now);
            if (tp_inst._defaults.timezoneIso8601) {
                tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
            }
            tp_inst.timezone_select.val(tzoffset);
        }
    };

    // Input: Date Object
    // Output: String with timezone offset, e.g. '+0100'
    var timeZoneString = function (date) {
        var off = date.getTimezoneOffset() * -10100 / 60;
        var timezone = (off >= 0 ? '+' : '-') + Math.abs(off).toString().substr(1);
        return timezone;
    };

    $.timepicker = new Timepicker(); // singleton instance
    $.timepicker.version = "1.0.1";

})(jQuery);
