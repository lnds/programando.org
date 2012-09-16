// jquery-turtle.js version 0.6
//
// Simple turtle movement additions to jQuery (David Bau)
// With this extension, every DOM element is a turtle.
//
// The heading of each turtle is given by the css rotation of
// the element (requires a browser that supports css rotation).
// The position of the turtle is given by the document offset
// position of the element.  Cases such as handing nested rotated
// or mirrored elements and elements with fractional positions 
// are handled.
//
// Hit-testing is done using true rotated rectangle overlapping
// tests on the rotated bounding boxes of the element.
//
// Relevant methods are:             
// $(elt).turn(degrees)               
// $(elt).turnto(direction)
// $(elt).move(pixels)
// $(elt).moveto(location)
// $(elt).mirror(flip)
// $(elt).center()
// $(elt).direction()
// $(elt).touches(target)
// $(elt).encloses(target)
// $(elt).pen(color)
// $(elt).dot(color, diameter)
// $(elt).erase(color)
// $(elt).shown()
// $(elt).hidden()
// $(elt).todo(callback)
//
// Also provides $.setupids() to set up global variables named
// after the id of each element with an id, and $.setupevents()
// to set up global variables named after mouse and keyboard
// events.
//
//
// Copyright (c) 2011 David Bau.  (MIT License.)
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
  
(function($) {

// Simplify $('#x').move() to just x.move()
$.setupids = function setupids(prefix) {
  prefix = prefix || '';
  $('[id]').each(function(j, item) {
    window[prefix + item.id] = $('#' + item.id);
  });
};

function makeeventsaver(name) {
  window[name] = null;
  return function eventsaver(e) {
    window[name] = e;
  }
}

// Simplify $(window).click(function(e) { x.moveto(e); } to just
// x.moveto(click).
$.setupevents = function setupevents(prefix) {
  prefix = prefix || '';
  var names = [
    'click', 'mouseup', 'mousedown', 'mousemove',
    'keydown', 'keypress', 'keyup'], j;
  for (j = 0; j < names.length; ++j) {
    $(window).bind(names[j], makeeventsaver(prefix + names[j]));
  }
}

// Canvas for pen and fill commands - only created on first use.
var turtlecanvas = null,
    turtlectx = null,
    transformprop = null;

function gettransformname(elt) {
  var p, names = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
  while (p = names.shift()) {
    if (p in elt.style) { return p; }
  }
  return 'transform';
}

function gettransform(elt) {
  if (transformprop === null) { transformprop = gettransformname(elt); }
  return elt.style[transformprop];
}

function settransform(elt, v) {
  if (transformprop === null) { transformprop = gettransformname(elt); }
  elt.style[transformprop] = v;
}

function getrotation(elt) {
  var t = gettransform(elt), m = t && t.match(/rotate\(([^)]+)\)/);
  if (m && m[1]) { return parseFloat(m[1]); }
  return 0;
}

function setrotation(elt, v) {
  settransform(
    elt,
    gettransform(elt).replace(/none|rotate\([^)]*\)/, '') +
    'rotate(' + v + 'deg)'
  );
}

function savestate(item) {
  return {
    c: item.center(),
    d: item.direction(),
    pd: item.data('pendown'),
    ps: item.data('penstyle')
  };
}

function restorestate(item, s) {
  item.removeData('pendown').removeData('penstyle')
      .moveto(s.c).turnto(s.d);
  if (s.pd) { item.data('pendown', s.pd); }
  if (s.ps) { item.data('penstyle', s.ps); }
}

function resizecanvas() {
  var b = $(window),
      bw = Math.max(1500, b.width()),
      bh = Math.max(1500, b.height()),
      cw = turtlecanvas.width,
      ch = turtlecanvas.height,
      tc;
  if (cw != bw || ch != bh) {
    tc = document.createElement('canvas');
    tc.width = Math.max(turtlecanvas.width, bw);
    tc.height = Math.max(turtlecanvas.height, bh);
    tc.getContext('2d').drawImage(turtlecanvas, 0, 0);
    turtlecanvas.width = bw;
    turtlecanvas.height = bh;
    turtlecanvas.getContext('2d').drawImage(tc, 0, 0);
  }
}

function initcanvas() {
  if (!turtlectx) {
    var div = document.createElement('div');
    turtlecanvas = document.createElement('canvas');
    div.style.position = turtlecanvas.style.position = 'absolute';
    div.style.top = div.style.left =
      turtlecanvas.style.top = turtlecanvas.style.left = 0;
    div.style.zIndex = turtlecanvas.style.zIndex = -1;
    div.style.width = div.style.height = '100%';
    div.style.overflow = 'hidden';
    resizecanvas();
    document.body.appendChild(div);
    div.appendChild(turtlecanvas);
    turtlectx = turtlecanvas.getContext('2d');
    $(window).resize(resizecanvas);
  }
}

function drawline(pt1, pt2, opts) {
  var a;
  initcanvas();
  turtlectx.lineWidth = 1.62;
  turtlectx.strokeStyle = '#000000';
  turtlectx.lineCap = 'round';
  if ($.isPlainObject(opts)) {
    for (a in opts) {
      turtlectx[a] = opts[a];
    }
  }
  turtlectx.beginPath();
  turtlectx.moveTo(pt1.pageX, pt1.pageY);
  turtlectx.lineTo(pt2.pageX, pt2.pageY);
  turtlectx.stroke();
}

function numberish(n) {
  if (typeof(n) == 'number') return true;
  if (typeof(n) == 'string' && n.match(/^\d/)) return true;
  return false;
}

function isposition(p) {
  return p && p.hasOwnProperty('pageX') && p.hasOwnProperty('pageY');
}

// Relative rotation.
// turn() means turn to a random heading.
// turn(a) means turn right by a degrees (negative to turn left).
$.fn.turn = function turn(a) {
  if (typeof(a) == 'undefined') {
    this.each(function(j, elt) {
      setrotation(elt, Math.random() * 360);
    });
  } else {
    this.each(function(j, elt) {
      var item = $(elt),
          flip = (item.mirror() ? -1 : 1),
          ang = (getrotation(elt) + a * flip) % 360;
      if (ang < 0) { ang += 360; }
      setrotation(elt, ang);
    });
  }
  return this;
};

// Relative motion.
// move() means move to a random position in the parent.
// move(p) means move forward at the current bearing.
$.fn.move = function move(x) {
  if (typeof(x) == 'undefined') {
    this.each(function(j, elt) {
      var item = $(elt),
          par = item.parent(),
          pw = par.width(),
          ph = par.height(),
          rx = Math.random() * pw - pw / 2,
          ry = Math.random() * ph - ph / 2,
          ra = par.direction() * Math.PI / 180,
          ca = Math.cos(ra),
          sa = Math.sin(ra),
          dx = rx * ca - ry * sa,
          dy = ry * ca + rx * sa,
          c = par.center();
      item.moveto({
        pageX: c.pageX + dx,
        pageY: c.pageY + dy
      });
    });
  } else {
    this.each(function(j, elt) {
      var item = $(elt);
      var c = item.center();
      if (!c) return;
      var angle = item.direction(),
          ra = angle * Math.PI / 180,
          ca = Math.cos(ra),
          sa = Math.sin(ra),
          dx = sa * x,
          dy = -ca * x;
      item.moveto({
        pageX: c.pageX + dx,
        pageY: c.pageY + dy
      });
    });
  }
  return this;
};

function limitTurn(start, target, limit) {
  if (limit > 180) return target;
  if (limit <= 0) return start;
  var delta = (target - start) % 360;
  if (delta <= -180) { delta += 360; }
  else if (delta > 180) { delta -= 360; }
  if (delta > limit) { target = (start + limit) % 360; }
  else if (delta < -limit) { target = (start + 360 - limit) % 360; }
  else { target = target % 360; }
  if (target < 0) { target += 360; }
  return target;
}

// Absolute rotation: point to a given angle (0 is north and 90 is east)
// or towards a given object or location.  If limit is given, bearing
// will not change more than the given number of degrees.
$.fn.turnto = function turnto(pos, limit) {
  if (numberish(pos)) {
    var pos = parseFloat(pos);
    this.each(function(j, elt) {
      var item = $(elt),
          ang = ((typeof(limit) != 'number') ?
            pos : limitTurn(item.direction(), pos, limit)),
          targ = ang - item.parent().direction(),
          flipped = (item.mirror() ? (360 - targ) : targ) % 360;
      setrotation(elt, flipped < 0 ? flipped + 360 : flipped);
    });       
  } else {
    if (!pos) return this;
    if (!isposition(pos)) {
      pos = $(pos).center();
    }
    if (!pos) return this;
    if (!isposition(pos)) return;
    this.each(function(j, elt) {
      var item = $(elt),
          c = item.center(), ang, targ;
      if (!c) return;
      ang = Math.atan2(
        pos.pageY - c.pageY, pos.pageX - c.pageX)
        / Math.PI * 180 + 90;
      if (typeof(limit) == 'number') {
        ang = limitTurn(item.direction(), ang, limit);
      }
      targ = ang - item.parent().direction();
      targ = (item.mirror() ? 360 - targ : targ) % 360;
      if (targ < 0) { targ += 360; }
      setrotation(elt, targ);
    });
  }
  return this;
};

function limitMovement(start, target, limit) {
  if (limit <= 0) return start;
  var distx = target.pageX - start.pageX,
      disty = target.pageY - start.pageY,
      dist2 = distx * distx + disty * disty;
  if (limit * limit >= dist2) {
    return target;
  }
  var frac = limit / Math.sqrt(dist2);
  return {
    pageX: start.pageX + frac * distx,
    pageY: start.pageY + frac * disty
  };
}

function adjustFractional(target, cx, cy) {
  if (Math.abs(target.pageX - cx) < 1 &&
      Math.abs(target.pageY - cy) < 1) {
    return { pageX: cx, pageY: cy };
  }
  return target;
}

// Substitute for $.offset.setOffset that is rotation-aware.
function setOffset(elem, curElem, options, i) {
  var position = $.css(elem, "position");

  // set position first, in-case top/left are set even on static elem
  if (position === "static") {
    elem.style.position = "relative";
  }

  var curOffset = curElem.offset(),
      parent = curElem.parent(),
      parentDirection = parent.direction(),
      parentFlip = (parent.mirror() ? -1 : 1),
      curCSSTop = $.css(elem, "top"),
      curCSSLeft = $.css(elem, "left"),
      calculatePosition = (position === "absolute" || position === "fixed") &&
          $.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
      props = {},
      curPosition = {},
      ra, ca, sa, dx, dy,
      curTop, curLeft;

  // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
  if (calculatePosition) {
    curPosition = curElem.position();
    curTop = curPosition.top;
    curLeft = curPosition.left;
  } else {
    curTop = parseFloat(curCSSTop) || 0;
    curLeft = parseFloat(curCSSLeft) || 0;
  }

  if (jQuery.isFunction(options)) {
    options = options.call(elem, i, curOffset);
  }

  if (parentDirection == 0 && !parentFlip) {
    if (options.top != null) {
      props.top = (options.top - curOffset.top) + curTop;
    }
    if (options.left != null) {
      props.left = (options.left - curOffset.left) + curLeft;
    }
  } else {
    ra = parentDirection * Math.PI / 180;
    ca = Math.cos(ra);
    sa = Math.sin(ra);
    dx = 0;
    dy = 0;
    if (options.top != null) {
      dy = options.top - curOffset.top;
    }
    if (options.left != null) {
      dx = options.left - curOffset.left;
    }
    props.top = curTop + dy * ca - dx * sa;
    props.left = curLeft + parentFlip * (dx * ca + dy * sa);
  }
  
  if ( "using" in options ) {
    options.using.call(elem, props);
  } else {
    curElem.css(props);
  }
}
  
// Absolute motion.
//
// $(elt).moveto({ pageX: x, pageY: y }) moves the center of 
//    the object to the given document position.
// $(elt).moveto({ pageX: x, pageY: y }, limit) moves the center
//    of the object towards the given position but does
//    not more the object more the limit pixels.
// $(elt).moveto(other_object) moves the center of the object
//    to be equal to the center of the other object.
// $(elt).moveto(other_object, limit) similarly moves the object
//    towards the other object but no further than limit pixels.
// $(elt).moveto(x, y) for numeric x and y is a synonym for
//    $(elt).moveto({ pageX: x, pageY: y})
//
// Details - note that unlike absolute css positioning, you can
// set the center of an object to a non-integer number and it
// will remember its location with floating point precision.
//
// Also note that if the object being moved is the $(window)
// object, then the visible window will be scrolled (as far as possible)
// to be centered at the given document coordinates.
$.fn.moveto = function moveto(pos, limit) {
  if (numberish(pos) && numberish(limit)) {
    // Handle "moveto(x, y)" as an idiom.
    pos = { pageX: parseFloat(pos), pageY: parseFloat(limit) };
    limit = null;
  }
  if (!pos) return this;
  if (!pos.hasOwnProperty('pageX') ||
      !pos.hasOwnProperty('pageY')) {
    pos = $(pos).center();
  }
  if (!pos ||
      !pos.hasOwnProperty('pageX') ||
      !pos.hasOwnProperty('pageY')) return this;
  this.each(function(j, elt) {
    var item = $(elt),
        visible, targ, angle, orig;
    if ($.isWindow(elt)) {
      var tx = pos.pageX, ty = pos.pageY,
          ww = item.width(), wh = item.height(),
          dw = $('body').width(), dh = $('body').height();
      if (tx > dw - ww / 2) { tx = dw - ww / 2; }
      if (tx < ww / 2) { tx = ww / 2; }
      if (ty > dh - wh / 2) { ty = dh - wh / 2; }
      if (ty < wh / 2) { ty = wh / 2; }
      targ = { pageX: tx, pageY: ty };
      if (typeof(limit) == 'number') { 
        targ = limitMovement(item.center(), targ, limit);
      }
      item.scrollLeft(targ.pageX - item.width() / 2);
      item.scrollTop(targ.pageY - item.height() / 2);
      item.data('cx', targ.pageX);
      item.data('cy', targ.pageY);
      return;
    }
    if (elt.tagName == 'IMG' && !elt.complete && !item.data('cp')) {
      item.data('cp', 1);
      $(elt).load(function() {
        if (item.data('cx') && item.data('cy')) {
          var pd = item.data('pendown');
          if (pd) { item.removeData('pendown'); }
          item.moveto(item.data('cx'), item.data('cy'));
          if (pd) { item.data('pendown', pd); }
        }
      });
    }
    visible = (elt.nodeType != 1 || item.css('display') != 'none');
    if (!visible) { item.show(); }
    angle = getrotation(elt);
    if (angle) { setrotation(elt, 0); }
    targ = pos;
    orig = item.center();
    if (typeof(limit) == 'number') {
      targ = limitMovement(item.center(), pos, limit);
    }
    setOffset(elt, item, {
      left: Math.round(targ.pageX - item.width() / 2),
      top: Math.round(targ.pageY - item.height() / 2)
    }, j);
    if (angle) { setrotation(elt, angle); }
    if (!visible) { item.hide(); }
    item.data('cx', targ.pageX);
    item.data('cy', targ.pageY);
    if (item.data('pendown')) {
      drawline(orig, targ, item.data('penstyle'));
    }
  });
  return this;
};

function flippedstyle(style) {
  var m = style.match(/scaleX\(([^)]+)\)/);
  return !!(m && m[1] && (m[1] < 0));
}

// Mirroring.  Useful when turning an object that has an "up" side.
// $(elt).mirror(true) mirrors the object left-to-right.
// $(elt).mirror(false) makes the object unmirrored again.
// $(elt).mirror() returns true if the object is mirrored.
$.fn.mirror = function(val) {
  if (typeof val == 'undefined') {
    if (this.length == 0 || $.isWindow(this[0]) || this[0].nodeType == 9) {
      return false;
    }
    return !flippedstyle(gettransform(this[0])) == this.parent().mirror();
  }
  this.each(function(j, elt) {
    item = $(elt);
    var flip = (!val == item.parent().mirror()),
        style = gettransform(item[0]) || 'none',
        oldstate = flippedstyle(style);
    settransform(item[0],
      (flip  ? ' scaleX(-1) ' : '') + 
      style.replace(/none|scaleX\([^)]*\)/, ''));
    if ((flip == !oldstate) && getrotation(elt)) {
      setrotation(elt, 360 - getrotation(elt));
    }
  });
  return this;
};

// Querying location.
// $(elt).center() returns an object { pageX: x, pageY: y } that
//    gives the center of the elt in document coordinates.
$.fn.center = function() {
  if (!this.length) return null;
  var elem = this[0],
      cx = this.data('cx'), cy = this.data('cy'),
      visible;
  if ($.isWindow(elem)) {
    return adjustFractional({
      pageX: this.width() / 2 + this.scrollLeft(),
      pageY: this.height() / 2 + this.scrollTop()
    }, cx, cy);
  } else if (elem.nodeType === 9) {
    return {
      pageX: this.width() / 2, pageY: this.height() / 2
    };
  }
  visible = (elem.nodeType != 1 || this.css('display') != 'none');
  if (!visible) { this.eq(0).show(); }
  var angle = getrotation(elem);
  if (angle) { setrotation(elem, 0); }
  var corner = this.offset();
  var result = {
    pageX: corner.left + this.width() / 2,
    pageY: corner.top + this.height() / 2
  };
  if (angle) { setrotation(elem, angle); }
  if (!visible) { this.eq(0).hide(); }
  return adjustFractional(result, cx, cy);
};

// Querying bearing.
// $(elt).direction() returns a number that gives the direction of the elt.
// Similar to $(elt).rotation but returns a number instead of a string,
// and deals with nested rotated objects.  Returns 0 for the window object
// and document object.
$.fn.direction = function() {
  if (!this.length) return null;
  var elem = this[0], dir;
  if ($.isWindow(elem) || elem.nodeType == 9) return 0;
  dir = getrotation(elem) * (this.mirror() ? -1 : 1)
    + this.parent().direction() % 360;
  if (dir < 0) { dir += 360; }
  return dir;
};

function corners(elt) {
  var item = $(elt),
      c = item.center(),
      hw = item.width() / 2,
      hh = item.height() / 2,
      ra = item.direction() * Math.PI / 180,
      ca = Math.cos(ra),
      sa = Math.sin(ra),
      yh = hh * ca,
      xh = -hh * sa,
      xw = hw * ca,
      yw = hw * sa;
  if (!isposition(c)) { return []; }
  return [
    { pageX: c.pageX - xh - xw, pageY: c.pageY - yh - yw },
    { pageX: c.pageX - xh + xw, pageY: c.pageY - yh + yw },
    { pageX: c.pageX + xh + xw, pageY: c.pageY + yh + yw },
    { pageX: c.pageX + xh - xw, pageY: c.pageY + yh - yw }
  ];
}

// Geometric containment.  Returns true if the element
// contains every point or element in the given list.
$.fn.encloses = function encloses(arg, y) {
  if (!this.is(':visible')) return false;
  if (numberish(arg) && numberish(y)) {
    arg = { pageX: arg, pageY: y };
  }
  var ra = this.direction() * Math.PI / 180,
      ca = Math.cos(ra),
      sa = Math.sin(ra),
      hw = this.width() / 2,
      hh = this.height() / 2,
      c = this.center(),
      cx = c.pageX,
      cy = c.pageY,
      j = 0, count = 0, k, elt, crn;
  function containsPoint(pt) {
    var tx = pt.pageX - cx,
        ty = pt.pageY - cy,
        rx = tx * ca + ty * sa,
        ry = ty * ca - tx * sa;
    return Math.abs(rx) <= hw && Math.abs(ry) <= hh;
  }
  if (!$.isArray(arg)) {
    if (!isposition(arg)) {
      arg = $(arg);
    } else {
      arg = [arg];
    }
  }
  for (; j < arg.length; j += 1) {
    elt = arg[j];
    if (isposition(elt)) {
      if (!containsPoint(elt)) { return false; }
      count += 1;
    } else {
      if (!elt) continue;
      crn = corners(elt);
      for (k = 0; k < crn.length; k += 1) {
        if (!containsPoint(crn[k])) { return false; }
      }
      count += 1;
    }
  }
  return (count > 0);
};
    
// Collision detection between two rotated rectangles.
$.fn.touches = function touches(arg, y) {
  if (!this.is(':visible')) { return false; }
  if (numberish(arg) && numberish(y)) {
    arg = { pageX: arg, pageY: y };
  }
  if (!$.isArray(arg)) {
    if (!isposition(arg)) {
      arg = $(arg);
    } else {
      arg = [arg];
    }
  }
  var C1 = this.center(), agn2, cosa2, sina2, ang, cosa, sina,
      A, B, C, TR, BL, j, s, t, u, v, x, a, dx, elt, ext1, ext2;
  if (!C1) { return false; }
  for (j = 0; j < arg.length; j += 1) {
    elt = arg[j];
    if (isposition(elt)) {
      if (this.encloses(elt)) { return true; }
      continue;
    }
    item = $(elt);
    if (!item.is(':visible')) { continue; }
    ang2 = item.direction() * Math.PI / 180;
    cosa2 = Math.cos(ang2);
    sina2 = Math.sin(ang2);
    ang = this.direction() * Math.PI / 180 - ang2;
    cosa = Math.cos(ang);
    sina = Math.sin(ang);
    C = item.center();
    // Change coords: moveto this rect, and axis-align item rect.
    // C is resulting moveto of item rect, and ang is angle of this.
    C.pageX -= C1.pageX;
    C.pageY -= C1.pageY;
    t = C.pageX;
    C.pageX = (t * cosa2 + C.pageY * sina2) * 2;
    C.pageY = (-t * sina2 + C.pageY * cosa2) * 2;
    // TR is topright of item, BL is bottomleft of item
    TR = { pageX: C.pageX + item.width(), pageY: C.pageY + item.height() };
    BL = { pageX: C.pageX - item.width(), pageY: C.pageY - item.height() };
    // A is top/bottom corner of this and B is leftmost corner.
    s = this.width() * sina;
    t = this.width() * cosa;
    u = this.height() * sina;
    v = this.height() * cosa;
    A = { pageX: -u + t, pageY: v + s };
    B = { pageX: -u - t, pageY: v - s };
    t = sina * cosa;
    if (t < 0) { s = A; A = B; B = s; }
    if (sina < 0) { B.pageX = -B.pageX; B.pageY = -B.pageY; }
    // No touch if left corner right of TR or right corner left of BL.
    if (B.pageX > TR.pageX || -B.pageX < BL.pageX) { continue; }
    // Get vertical min/max within TR-BL vertical stripe.
    if (t == 0) { ext1 = A.pageY; ext2 = -ext1; }
    else {
      // A is max if in stripe; if outside stripe, then intersect.
      dx = A.pageX;
      x = BL.pageX - dx;
      a = TR.pageX - dx;
      ext1 = A.pageY;
      if (a * x > 0) {
        if (x < 0) { dx -= B.pageX; ext1 -= B.pageY; x = a; }
        else { dx += B.pageX; ext1 += B.pageY; }
        ext1 = ext1 * x / dx + A.pageY;
      }
      // -A ix max if in stripe; if outside stripe, then intersect.
      dx = -A.pageX;
      x = BL.pageX - dx;
      a = TR.pageX - dx;
      ext2 = -A.pageY;
      if (a * x > 0) {
        if (x < 0) { dx -= B.pageX; ext2 -= B.pageY; x = a; }
        else { dx += B.pageX; ext2 += B.pageY; }
        ext2 = ext2 * x / dx - A.pageY;
      }
    }
    // Extremal values in stripe known; check vertical bounds.
    if (ext1 < BL.pageY && ext2 < BL.pageY) { continue; }
    if (ext1 > TR.pageY && ext2 > TR.pageY) { continue; }
    return true;
  }
  return false;
};

// Pendown/penup.
$.fn.pen = function(style) {
  if (typeof(style) == 'undefined') {
    style = true;
  } else if (style == 'none') {
    style = false;
    this.removeData('penstyle');
  }
  if (typeof(style) == 'string') {
    style = { strokeStyle: style };
  }
  this.data('pendown', !!style);
  if ($.isPlainObject(style)) {
    this.data('penstyle', style);
  }
  return this;
};

// Just draw a dot
$.fn.dot = function dot(style, diameter) {
  if (typeof(style) == 'undefined') {
    style = '#000000';
  } else if (style == 'none' || !style) {
    style = '#ffffff';
  }
  if (typeof(style) == 'string') {
    style = { fillStyle: style };
  }
  if (typeof(diameter) == 'undefined') {
    diameter = 1;
  }
  initcanvas();
  if ($.isPlainObject(style)) {
    for (var attr in style) {
      turtlectx[attr] = style[attr];
    }
  } 
  this.each(function(j, elt) {
    var c = $(elt).center();
    turtlectx.beginPath();
    turtlectx.arc(c.pageX, c.pageY, diameter / 2, 0, 2 * Math.PI, false);
    turtlectx.closePath();
    turtlectx.fill();
  });
  return this;
}

// Clear rectangle.
$.fn.erase = function erase(style) {
  if (typeof(style) == 'undefined') {
    style = 'rgba(0,0,0,0)';
  }
  if (typeof(style) == 'string') {
    style = { fillStyle: style };
  }
  initcanvas();
  if ($.isPlainObject(style)) {
    for (var attr in style) {
      turtlectx[attr] = style[attr];
    }
  } 
  this.each(function(j, elt) {
    var c = corners(elt === document ? turtlecanvas : elt), j;
    if (!c || c.length < 3) { return; }
    turtlectx.beginPath();
    turtlectx.moveTo(c[0].pageX, c[0].pageY);
    for (j = 1; j < c.length; j += 1) {
      turtlectx.lineTo(c[j].pageX, c[j].pageY);
    }
    turtlectx.closePath();
    var gco = turtlectx.globalCompositeOperation;
    turtlectx.globalCompositeOperation = 'copy';
    turtlectx.fill();
    turtlectx.globalCompositeOperation = gco;
  });
  return this;
};   

// Replay an animated gif.
$.fn.replay = function replay() {
  this.each(function(j, elt) {
    if (elt.src) {
      var src = elt.src;
      elt.src = '';
      elt.src = src;
    }
  });
  return this;
};
  
// Abbreviation for is(':visible')
$.fn.shown = function shown() {
  return this.is(':visible');
}

// Abbreviation for is(':hidden')
$.fn.hidden = function hidden() {
  return this.is(':hidden');
}
    
// Deferred execution.  Remember the current state of
// the turtle, and enqueue the callback to run after a
// brief delay, after restoring the current state.
$.fn.todo = function todo(cb) {
  this.each(function(j, elt) {
    var item = $(elt), s = savestate(item);
    item.delay(0).queue(function(next) {
      restorestate(item, s);
      cb.call(item);
      next();
    });
  });
};

})(jQuery);
