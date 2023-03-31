// Three.js - http://github.com/mrdoob/three.js
var THREE = THREE || {};
THREE.Color = function(a) {
    this.setHex(a)
}
;
THREE.Color.prototype = {
    setHex: function(a) {
        this.hex = a;
        this.updateRGBA();
        this.updateStyleString()
    },
    setRGBA: function(f, e, c, d) {
        this.r = f;
        this.g = e;
        this.b = c;
        this.a = d;
        this.updateHex();
        this.updateStyleString()
    },
    updateHex: function() {
        this.hex = Math.floor(this.a * 255) << 24 | Math.floor(this.r * 255) << 16 | Math.floor(this.g * 255) << 8 | Math.floor(this.b * 255)
    },
    updateRGBA: function() {
        this.a = (this.hex >> 24 & 255) / 255;
        this.r = (this.hex >> 16 & 255) / 255;
        this.g = (this.hex >> 8 & 255) / 255;
        this.b = (this.hex & 255) / 255
    },
    updateStyleString: function() {
        this.__styleString = "rgba(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + "," + this.a + ")"
    },
    toString: function() {
        return "THREE.Color ( r: " + this.r + ", g: " + this.g + ", b: " + this.b + ", a: " + this.a + ", hex: " + this.hex + " )"
    }
};
THREE.Vector2 = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
}
;
THREE.Vector2.prototype = {
    set: function(a, b) {
        this.x = a;
        this.y = b
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y
    },
    add: function(b, a) {
        this.x = b.x + a.x;
        this.y = b.y + a.y
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y
    },
    sub: function(b, a) {
        this.x = b.x - a.x;
        this.y = b.y - a.y
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a
    },
    unit: function() {
        this.multiplyScalar(1 / this.length())
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y
    },
    clone: function() {
        return new THREE.Vector2(this.x,this.y)
    },
    toString: function() {
        return "THREE.Vector2 (" + this.x + ", " + this.y + ")"
    }
};
THREE.Vector3 = function(a, c, b) {
    this.x = a || 0;
    this.y = c || 0;
    this.z = b || 0
}
;
THREE.Vector3.prototype = {
    set: function(a, c, b) {
        this.x = a;
        this.y = c;
        this.z = b
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z
    },
    add: function(b, a) {
        this.x = b.x + a.x;
        this.y = b.y + a.y;
        this.z = b.z + a.z
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z
    },
    addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a
    },
    sub: function(b, a) {
        this.x = b.x - a.x;
        this.y = b.y - a.y;
        this.z = b.z - a.z
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z
    },
    cross: function(b, a) {
        this.x = b.y * a.z - b.z * a.y;
        this.y = b.z * a.x - b.x * a.z;
        this.z = b.x * a.y - b.y * a.x
    },
    crossSelf: function(c) {
        var b = this.x
          , a = this.y
          , d = this.z;
        this.x = a * c.z - d * c.y;
        this.y = d * c.x - b * c.z;
        this.z = b * c.y - a * c.x
    },
    multiplySelf: function(a) {
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z
    },
    multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a
    },
    divideScalar: function(a) {
        this.x /= a;
        this.y /= a;
        this.z /= a
    },
    dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },
    distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },
    distanceToSquared: function(d) {
        var c = this.x - d.x
          , b = this.y - d.y
          , a = this.z - d.z;
        return c * c + b * b + a * a
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z
    },
    normalize: function() {
        if (this.length() > 0) {
            this.multiplyScalar(1 / this.length())
        } else {
            this.multiplyScalar(0)
        }
    },
    isZero: function() {
        var a = 0.0001;
        return (Math.abs(this.x) < a) && (Math.abs(this.y) < a) && (Math.abs(this.z) < a)
    },
    clone: function() {
        return new THREE.Vector3(this.x,this.y,this.z)
    },
    toString: function() {
        return "THREE.Vector3 ( " + this.x + ", " + this.y + ", " + this.z + " )"
    }
};
THREE.Vector4 = function(a, d, c, b) {
    this.x = a || 0;
    this.y = d || 0;
    this.z = c || 0;
    this.w = b || 1
}
;
THREE.Vector4.prototype = {
    set: function(a, d, c, b) {
        this.x = a;
        this.y = d;
        this.z = c;
        this.w = b
    },
    copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w
    },
    add: function(b, a) {
        this.x = b.x + a.x;
        this.y = b.y + a.y;
        this.z = b.z + a.z;
        this.w = b.w + a.w
    },
    addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w
    },
    sub: function(b, a) {
        this.x = b.x - a.x;
        this.y = b.y - a.y;
        this.z = b.z - a.z;
        this.w = b.w - a.w
    },
    subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w
    },
    clone: function() {
        return new THREE.Vector4(this.x,this.y,this.z,this.w)
    },
    toString: function() {
        return "THREE.Vector4 (" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
    }
};
THREE.Rectangle = function() {
    var f, h, d, g, a, c, e = true;
    function b() {
        a = d - f;
        c = g - h
    }
    this.getX = function() {
        return f
    }
    ;
    this.getY = function() {
        return h
    }
    ;
    this.getWidth = function() {
        return a
    }
    ;
    this.getHeight = function() {
        return c
    }
    ;
    this.getX1 = function() {
        return f
    }
    ;
    this.getY1 = function() {
        return h
    }
    ;
    this.getX2 = function() {
        return d
    }
    ;
    this.getY2 = function() {
        return g
    }
    ;
    this.set = function(j, l, i, k) {
        e = false;
        f = j;
        h = l;
        d = i;
        g = k;
        b()
    }
    ;
    this.addPoint = function(i, j) {
        if (e) {
            e = false;
            f = i;
            h = j;
            d = i;
            g = j
        } else {
            f = Math.min(f, i);
            h = Math.min(h, j);
            d = Math.max(d, i);
            g = Math.max(g, j)
        }
        b()
    }
    ;
    this.addRectangle = function(i) {
        if (e) {
            e = false;
            f = i.getX1();
            h = i.getY1();
            d = i.getX2();
            g = i.getY2()
        } else {
            f = Math.min(f, i.getX1());
            h = Math.min(h, i.getY1());
            d = Math.max(d, i.getX2());
            g = Math.max(g, i.getY2())
        }
        b()
    }
    ;
    this.inflate = function(i) {
        f -= i;
        h -= i;
        d += i;
        g += i;
        b()
    }
    ;
    this.minSelf = function(i) {
        f = Math.max(f, i.getX1());
        h = Math.max(h, i.getY1());
        d = Math.min(d, i.getX2());
        g = Math.min(g, i.getY2());
        b()
    }
    ;
    this.instersects = function(i) {
        return Math.min(d, i.getX2()) - Math.max(f, i.getX1()) >= 0 && Math.min(g, i.getY2()) - Math.max(h, i.getY1()) >= 0
    }
    ;
    this.empty = function() {
        e = true;
        f = 0;
        h = 0;
        d = 0;
        g = 0;
        b()
    }
    ;
    this.isEmpty = function() {
        return e
    }
    ;
    this.toString = function() {
        return "THREE.Rectangle (x1: " + f + ", y1: " + g + ", x2: " + d + ", y1: " + h + ", width: " + a + ", height: " + c + ")"
    }
}
;
THREE.Matrix4 = function() {
    this._x = new THREE.Vector3();
    this._y = new THREE.Vector3();
    this._z = new THREE.Vector3()
}
;
THREE.Matrix4.prototype = {
    n11: 1,
    n12: 0,
    n13: 0,
    n14: 0,
    n21: 0,
    n22: 1,
    n23: 0,
    n24: 0,
    n31: 0,
    n32: 0,
    n33: 1,
    n34: 0,
    n41: 0,
    n42: 0,
    n43: 0,
    n44: 1,
    identity: function() {
        this.n11 = 1;
        this.n12 = 0;
        this.n13 = 0;
        this.n14 = 0;
        this.n21 = 0;
        this.n22 = 1;
        this.n23 = 0;
        this.n24 = 0;
        this.n31 = 0;
        this.n32 = 0;
        this.n33 = 1;
        this.n34 = 0;
        this.n41 = 0;
        this.n42 = 0;
        this.n43 = 0;
        this.n44 = 1
    },
    lookAt: function(d, c, b) {
        var a = this._x
          , f = this._y
          , e = this._z;
        e.sub(d, c);
        e.normalize();
        a.cross(b, e);
        a.normalize();
        f.cross(e, a);
        f.normalize();
        this.n11 = a.x;
        this.n12 = a.y;
        this.n13 = a.z;
        this.n14 = -a.dot(d);
        this.n21 = f.x;
        this.n22 = f.y;
        this.n23 = f.z;
        this.n24 = -f.dot(d);
        this.n31 = e.x;
        this.n32 = e.y;
        this.n33 = e.z;
        this.n34 = -e.dot(d)
    },
    transform: function(a) {
        var d = a.x
          , c = a.y
          , b = a.z
          , e = a.w ? a.w : 1;
        a.x = this.n11 * d + this.n12 * c + this.n13 * b + this.n14 * e;
        a.y = this.n21 * d + this.n22 * c + this.n23 * b + this.n24 * e;
        a.z = this.n31 * d + this.n32 * c + this.n33 * b + this.n34 * e;
        e = this.n41 * d + this.n42 * c + this.n43 * b + this.n44 * e;
        if (a.w) {
            a.w = e
        } else {
            a.x = a.x / e;
            a.y = a.y / e;
            a.z = a.z / e
        }
    },
    crossVector: function(b) {
        var c = new THREE.Vector4();
        c.x = this.n11 * b.x + this.n12 * b.y + this.n13 * b.z + this.n14 * b.w;
        c.y = this.n21 * b.x + this.n22 * b.y + this.n23 * b.z + this.n24 * b.w;
        c.z = this.n31 * b.x + this.n32 * b.y + this.n33 * b.z + this.n34 * b.w;
        c.w = (b.w) ? this.n41 * b.x + this.n42 * b.y + this.n43 * b.z + this.n44 * b.w : 1;
        return c
    },
    multiply: function(d, c) {
        this.n11 = d.n11 * c.n11 + d.n12 * c.n21 + d.n13 * c.n31 + d.n14 * c.n41;
        this.n12 = d.n11 * c.n12 + d.n12 * c.n22 + d.n13 * c.n32 + d.n14 * c.n42;
        this.n13 = d.n11 * c.n13 + d.n12 * c.n23 + d.n13 * c.n33 + d.n14 * c.n43;
        this.n14 = d.n11 * c.n14 + d.n12 * c.n24 + d.n13 * c.n34 + d.n14 * c.n44;
        this.n21 = d.n21 * c.n11 + d.n22 * c.n21 + d.n23 * c.n31 + d.n24 * c.n41;
        this.n22 = d.n21 * c.n12 + d.n22 * c.n22 + d.n23 * c.n32 + d.n24 * c.n42;
        this.n23 = d.n21 * c.n13 + d.n22 * c.n23 + d.n23 * c.n33 + d.n24 * c.n43;
        this.n24 = d.n21 * c.n14 + d.n22 * c.n24 + d.n23 * c.n34 + d.n24 * c.n44;
        this.n31 = d.n31 * c.n11 + d.n32 * c.n21 + d.n33 * c.n31 + d.n34 * c.n41;
        this.n32 = d.n31 * c.n12 + d.n32 * c.n22 + d.n33 * c.n32 + d.n34 * c.n42;
        this.n33 = d.n31 * c.n13 + d.n32 * c.n23 + d.n33 * c.n33 + d.n34 * c.n43;
        this.n34 = d.n31 * c.n14 + d.n32 * c.n24 + d.n33 * c.n34 + d.n34 * c.n44;
        this.n41 = d.n41 * c.n11 + d.n42 * c.n21 + d.n43 * c.n31 + d.n44 * c.n41;
        this.n42 = d.n41 * c.n12 + d.n42 * c.n22 + d.n43 * c.n32 + d.n44 * c.n42;
        this.n43 = d.n41 * c.n13 + d.n42 * c.n23 + d.n43 * c.n33 + d.n44 * c.n43;
        this.n44 = d.n41 * c.n14 + d.n42 * c.n24 + d.n43 * c.n34 + d.n44 * c.n44
    },
    multiplySelf: function(c) {
        var o = this.n11
          , n = this.n12
          , k = this.n13
          , i = this.n14
          , f = this.n21
          , e = this.n22
          , d = this.n23
          , b = this.n24
          , a = this.n31
          , r = this.n32
          , q = this.n33
          , p = this.n34
          , l = this.n41
          , j = this.n42
          , h = this.n43
          , g = this.n44;
        this.n11 = o * c.n11 + n * c.n21 + k * c.n31 + i * c.n41;
        this.n12 = o * c.n12 + n * c.n22 + k * c.n32 + i * c.n42;
        this.n13 = o * c.n13 + n * c.n23 + k * c.n33 + i * c.n43;
        this.n14 = o * c.n14 + n * c.n24 + k * c.n34 + i * c.n44;
        this.n21 = f * c.n11 + e * c.n21 + d * c.n31 + b * c.n41;
        this.n22 = f * c.n12 + e * c.n22 + d * c.n32 + b * c.n42;
        this.n23 = f * c.n13 + e * c.n23 + d * c.n33 + b * c.n43;
        this.n24 = f * c.n14 + e * c.n24 + d * c.n34 + b * c.n44;
        this.n31 = a * c.n11 + r * c.n21 + q * c.n31 + p * c.n41;
        this.n32 = a * c.n12 + r * c.n22 + q * c.n32 + p * c.n42;
        this.n33 = a * c.n13 + r * c.n23 + q * c.n33 + p * c.n43;
        this.n34 = a * c.n14 + r * c.n24 + q * c.n34 + p * c.n44;
        this.n41 = l * c.n11 + j * c.n21 + h * c.n31 + g * c.n41;
        this.n42 = l * c.n12 + j * c.n22 + h * c.n32 + g * c.n42;
        this.n43 = l * c.n13 + j * c.n23 + h * c.n33 + g * c.n43;
        this.n44 = l * c.n14 + j * c.n24 + h * c.n34 + g * c.n44
    },
    multiplyScalar: function(a) {
        this.n11 *= a;
        this.n12 *= a;
        this.n13 *= a;
        this.n14 *= a;
        this.n21 *= a;
        this.n22 *= a;
        this.n23 *= a;
        this.n24 *= a;
        this.n31 *= a;
        this.n32 *= a;
        this.n33 *= a;
        this.n34 *= a;
        this.n41 *= a;
        this.n42 *= a;
        this.n43 *= a;
        this.n44 *= a
    },
    determinant: function() {
        return (this.n14 * this.n23 * this.n32 * this.n41 - this.n13 * this.n24 * this.n32 * this.n41 - this.n14 * this.n22 * this.n33 * this.n41 + this.n12 * this.n24 * this.n33 * this.n41 + this.n13 * this.n22 * this.n34 * this.n41 - this.n12 * this.n23 * this.n34 * this.n41 - this.n14 * this.n23 * this.n31 * this.n42 + this.n13 * this.n24 * this.n31 * this.n42 + this.n14 * this.n21 * this.n33 * this.n42 - this.n11 * this.n24 * this.n33 * this.n42 - this.n13 * this.n21 * this.n34 * this.n42 + this.n11 * this.n23 * this.n34 * this.n42 + this.n14 * this.n22 * this.n31 * this.n43 - this.n12 * this.n24 * this.n31 * this.n43 - this.n14 * this.n21 * this.n32 * this.n43 + this.n11 * this.n24 * this.n32 * this.n43 + this.n12 * this.n21 * this.n34 * this.n43 - this.n11 * this.n22 * this.n34 * this.n43 - this.n13 * this.n22 * this.n31 * this.n44 + this.n12 * this.n23 * this.n31 * this.n44 + this.n13 * this.n21 * this.n32 * this.n44 - this.n11 * this.n23 * this.n32 * this.n44 - this.n12 * this.n21 * this.n33 * this.n44 + this.n11 * this.n22 * this.n33 * this.n44)
    },
    transpose: function() {
        function a(d, e, c) {
            var b = d[e];
            d[e] = d[c];
            d[c] = b
        }
        a(this, "n21", "n12");
        a(this, "n31", "n13");
        a(this, "n32", "n23");
        a(this, "n41", "n14");
        a(this, "n42", "n24");
        a(this, "n43", "n34");
        return this
    },
    clone: function() {
        var a = new THREE.Matrix4();
        a.n11 = this.n11;
        a.n12 = this.n12;
        a.n13 = this.n13;
        a.n14 = this.n14;
        a.n21 = this.n21;
        a.n22 = this.n22;
        a.n23 = this.n23;
        a.n24 = this.n24;
        a.n31 = this.n31;
        a.n32 = this.n32;
        a.n33 = this.n33;
        a.n34 = this.n34;
        a.n41 = this.n41;
        a.n42 = this.n42;
        a.n43 = this.n43;
        a.n44 = this.n44;
        return a
    },
    flatten: function() {
        return [this.n11, this.n21, this.n31, this.n41, this.n12, this.n22, this.n32, this.n42, this.n13, this.n23, this.n33, this.n43, this.n14, this.n24, this.n34, this.n44]
    },
    toString: function() {
        return "| " + this.n11 + " " + this.n12 + " " + this.n13 + " " + this.n14 + " |\n| " + this.n21 + " " + this.n22 + " " + this.n23 + " " + this.n24 + " |\n| " + this.n31 + " " + this.n32 + " " + this.n33 + " " + this.n34 + " |\n| " + this.n41 + " " + this.n42 + " " + this.n43 + " " + this.n44 + " |"
    }
};
THREE.Matrix4.translationMatrix = function(b, d, c) {
    var a = new THREE.Matrix4();
    a.n14 = b;
    a.n24 = d;
    a.n34 = c;
    return a
}
;
THREE.Matrix4.scaleMatrix = function(b, d, c) {
    var a = new THREE.Matrix4();
    a.n11 = b;
    a.n22 = d;
    a.n33 = c;
    return a
}
;
THREE.Matrix4.rotationXMatrix = function(b) {
    var a = new THREE.Matrix4();
    a.n22 = a.n33 = Math.cos(b);
    a.n32 = Math.sin(b);
    a.n23 = -a.n32;
    return a
}
;
THREE.Matrix4.rotationYMatrix = function(b) {
    var a = new THREE.Matrix4();
    a.n11 = a.n33 = Math.cos(b);
    a.n13 = Math.sin(b);
    a.n31 = -a.n13;
    return a
}
;
THREE.Matrix4.rotationZMatrix = function(b) {
    var a = new THREE.Matrix4();
    a.n11 = a.n22 = Math.cos(b);
    a.n21 = Math.sin(b);
    a.n12 = -a.n21;
    return a
}
;
THREE.Matrix4.rotationAxisAngleMatrix = function(b, d) {
    var a = new THREE.Matrix4()
      , f = Math.cos(d)
      , j = Math.sin(d)
      , i = 1 - f
      , h = b.x
      , g = b.y
      , e = b.z;
    a.n11 = i * h * h + f;
    a.n12 = i * h * g - j * e;
    a.n13 = i * h * e + j * g;
    a.n21 = i * h * g + j * e;
    a.n22 = i * g * g + f;
    a.n23 = i * g * e - j * h;
    a.n31 = i * h * e - j * g;
    a.n32 = i * g * e + j * h;
    a.n33 = i * e * e + f;
    return a
}
;
THREE.Matrix4.makeInvert = function(b) {
    var a = new THREE.Matrix4();
    a.n11 = b.n23 * b.n34 * b.n42 - b.n24 * b.n33 * b.n42 + b.n24 * b.n32 * b.n43 - b.n22 * b.n34 * b.n43 - b.n23 * b.n32 * b.n44 + b.n22 * b.n33 * b.n44;
    a.n12 = b.n14 * b.n33 * b.n42 - b.n13 * b.n34 * b.n42 - b.n14 * b.n32 * b.n43 + b.n12 * b.n34 * b.n43 + b.n13 * b.n32 * b.n44 - b.n12 * b.n33 * b.n44;
    a.n13 = b.n13 * b.n24 * b.n42 - b.n14 * b.n23 * b.n42 + b.n14 * b.n22 * b.n43 - b.n12 * b.n24 * b.n43 - b.n13 * b.n22 * b.n44 + b.n12 * b.n23 * b.n44;
    a.n14 = b.n14 * b.n23 * b.n32 - b.n13 * b.n24 * b.n32 - b.n14 * b.n22 * b.n33 + b.n12 * b.n24 * b.n33 + b.n13 * b.n22 * b.n34 - b.n12 * b.n23 * b.n34;
    a.n21 = b.n24 * b.n33 * b.n41 - b.n23 * b.n34 * b.n41 - b.n24 * b.n31 * b.n43 + b.n21 * b.n34 * b.n43 + b.n23 * b.n31 * b.n44 - b.n21 * b.n33 * b.n44;
    a.n22 = b.n13 * b.n34 * b.n41 - b.n14 * b.n33 * b.n41 + b.n14 * b.n31 * b.n43 - b.n11 * b.n34 * b.n43 - b.n13 * b.n31 * b.n44 + b.n11 * b.n33 * b.n44;
    a.n23 = b.n14 * b.n23 * b.n41 - b.n13 * b.n24 * b.n41 - b.n14 * b.n21 * b.n43 + b.n11 * b.n24 * b.n43 + b.n13 * b.n21 * b.n44 - b.n11 * b.n23 * b.n44;
    a.n24 = b.n13 * b.n24 * b.n31 - b.n14 * b.n23 * b.n31 + b.n14 * b.n21 * b.n33 - b.n11 * b.n24 * b.n33 - b.n13 * b.n21 * b.n34 + b.n11 * b.n23 * b.n34;
    a.n31 = b.n22 * b.n34 * b.n41 - b.n24 * b.n32 * b.n41 + b.n24 * b.n31 * b.n42 - b.n21 * b.n34 * b.n42 - b.n22 * b.n31 * b.n44 + b.n21 * b.n32 * b.n44;
    a.n32 = b.n14 * b.n32 * b.n41 - b.n12 * b.n34 * b.n41 - b.n14 * b.n31 * b.n42 + b.n11 * b.n34 * b.n42 + b.n12 * b.n31 * b.n44 - b.n11 * b.n32 * b.n44;
    a.n33 = b.n13 * b.n24 * b.n41 - b.n14 * b.n22 * b.n41 + b.n14 * b.n21 * b.n42 - b.n11 * b.n24 * b.n42 - b.n12 * b.n21 * b.n44 + b.n11 * b.n22 * b.n44;
    a.n34 = b.n14 * b.n22 * b.n31 - b.n12 * b.n24 * b.n31 - b.n14 * b.n21 * b.n32 + b.n11 * b.n24 * b.n32 + b.n12 * b.n21 * b.n34 - b.n11 * b.n22 * b.n34;
    a.n41 = b.n23 * b.n32 * b.n41 - b.n22 * b.n33 * b.n41 - b.n23 * b.n31 * b.n42 + b.n21 * b.n33 * b.n42 + b.n22 * b.n31 * b.n43 - b.n21 * b.n32 * b.n43;
    a.n42 = b.n12 * b.n33 * b.n41 - b.n13 * b.n32 * b.n41 + b.n13 * b.n31 * b.n42 - b.n11 * b.n33 * b.n42 - b.n12 * b.n31 * b.n43 + b.n11 * b.n32 * b.n43;
    a.n43 = b.n13 * b.n22 * b.n41 - b.n12 * b.n23 * b.n41 - b.n13 * b.n21 * b.n42 + b.n11 * b.n23 * b.n42 + b.n12 * b.n21 * b.n43 - b.n11 * b.n22 * b.n43;
    a.n44 = b.n12 * b.n23 * b.n31 - b.n13 * b.n22 * b.n31 + b.n13 * b.n21 * b.n32 - b.n11 * b.n23 * b.n32 - b.n12 * b.n21 * b.n33 + b.n11 * b.n22 * b.n33;
    a.multiplyScalar(1 / b.determinant());
    return a
}
;
THREE.Matrix4.makeFrustum = function(f, r, e, o, i, h) {
    var g, q, n, p, l, k, j;
    g = new THREE.Matrix4();
    q = 2 * i / (r - f);
    n = 2 * i / (o - e);
    p = (r + f) / (r - f);
    l = (o + e) / (o - e);
    k = -(h + i) / (h - i);
    j = -2 * h * i / (h - i);
    g.n11 = q;
    g.n12 = 0;
    g.n13 = p;
    g.n14 = 0;
    g.n21 = 0;
    g.n22 = n;
    g.n23 = l;
    g.n24 = 0;
    g.n31 = 0;
    g.n32 = 0;
    g.n33 = k;
    g.n34 = j;
    g.n41 = 0;
    g.n42 = 0;
    g.n43 = -1;
    g.n44 = 0;
    return g
}
;
THREE.Matrix4.makePerspective = function(e, c, g, b) {
    var a, f, h, d;
    a = g * Math.tan(e * Math.PI / 360);
    f = -a;
    h = f * c;
    d = a * c;
    return THREE.Matrix4.makeFrustum(h, d, f, a, g, b)
}
;
THREE.Matrix4.makeOrtho = function(c, o, k, a, g, f) {
    var d, l, j, i, n, e, b;
    d = new THREE.Matrix4();
    n = o - c;
    e = a - k;
    b = f - g;
    l = (o + c) / n;
    j = (a + k) / e;
    i = (f + g) / b;
    d.n11 = 2 / n;
    d.n12 = 0;
    d.n13 = 0;
    d.n14 = -l;
    d.n21 = 0;
    d.n22 = 2 / e;
    d.n23 = 0;
    d.n24 = -j;
    d.n31 = 0;
    d.n32 = 0;
    d.n33 = -2 / b;
    d.n34 = -i;
    d.n41 = 0;
    d.n42 = 0;
    d.n43 = 0;
    d.n44 = 1;
    return d
}
;
THREE.Vertex = function(a, b) {
    this.position = a || new THREE.Vector3();
    this.normal = b || new THREE.Vector3();
    this.screen = new THREE.Vector3();
    this.__visible = true
}
;
THREE.Vertex.prototype = {
    toString: function() {
        return "THREE.Vertex ( position: " + this.position + ", normal: " + this.normal + " )"
    }
};
THREE.Face3 = function(e, d, h, g, f) {
    this.a = e;
    this.b = d;
    this.c = h;
    this.normal = g || new THREE.Vector3();
    this.screen = new THREE.Vector3();
    this.color = f || new THREE.Color(0)
}
;
THREE.Face3.prototype = {
    toString: function() {
        return "THREE.Face3 ( " + this.a + ", " + this.b + ", " + this.c + " )"
    }
};
THREE.Face4 = function(f, e, j, i, h, g) {
    this.a = f;
    this.b = e;
    this.c = j;
    this.d = i;
    this.normal = h || new THREE.Vector3();
    this.screen = new THREE.Vector3();
    this.color = g || new THREE.Color(0)
}
;
THREE.Face4.prototype = {
    toString: function() {
        return "THREE.Face4 ( " + this.a + ", " + this.b + ", " + this.c + " " + this.d + " )"
    }
};
THREE.UV = function(b, a) {
    this.u = b || 0;
    this.v = a || 0
}
;
THREE.UV.prototype = {
    copy: function(a) {
        this.u = a.u;
        this.v = a.v
    },
    toString: function() {
        return "THREE.UV (" + this.u + ", " + this.v + ")"
    }
};
THREE.Geometry = function() {
    this.vertices = [];
    this.faces = [];
    this.uvs = []
}
;
THREE.Geometry.prototype = {
    computeNormals: function() {
        var b, h, e, d, c, a, g;
        for (b = 0; b < this.vertices.length; b++) {
            this.vertices[b].normal.set(0, 0, 0)
        }
        for (h = 0; h < this.faces.length; h++) {
            e = this.vertices[this.faces[h].a];
            d = this.vertices[this.faces[h].b];
            c = this.vertices[this.faces[h].c];
            a = new THREE.Vector3();
            g = new THREE.Vector3();
            a.sub(c.position, d.position);
            g.sub(e.position, d.position);
            a.crossSelf(g);
            if (!a.isZero()) {
                a.normalize()
            }
            this.faces[h].normal = a
        }
    },
    toString: function() {
        return "THREE.Geometry ( vertices: " + this.vertices + ", faces: " + this.faces + " )"
    }
};
THREE.Camera = function(c, b, d, a) {
    this.position = new THREE.Vector3(0,0,0);
    this.target = {
        position: new THREE.Vector3(0,0,0)
    };
    this.projectionMatrix = THREE.Matrix4.makePerspective(c, b, d, a);
    this.up = new THREE.Vector3(0,1,0);
    this.matrix = new THREE.Matrix4();
    this.autoUpdateMatrix = true;
    this.updateMatrix = function() {
        this.matrix.lookAt(this.position, this.target.position, this.up)
    }
    ;
    this.toString = function() {
        return "THREE.Camera ( " + this.position + ", " + this.target.position + " )"
    }
}
;
THREE.Object3D = function(a) {
    this.position = new THREE.Vector3();
    this.rotation = new THREE.Vector3();
    this.scale = new THREE.Vector3(1,1,1);
    this.matrix = new THREE.Matrix4();
    this.screen = new THREE.Vector3();
    this.autoUpdateMatrix = true;
    this.updateMatrix = function() {
        this.matrix.identity();
        this.matrix.multiplySelf(THREE.Matrix4.translationMatrix(this.position.x, this.position.y, this.position.z));
        this.matrix.multiplySelf(THREE.Matrix4.rotationXMatrix(this.rotation.x));
        this.matrix.multiplySelf(THREE.Matrix4.rotationYMatrix(this.rotation.y));
        this.matrix.multiplySelf(THREE.Matrix4.rotationZMatrix(this.rotation.z));
        this.matrix.multiplySelf(THREE.Matrix4.scaleMatrix(this.scale.x, this.scale.y, this.scale.z))
    }
}
;
THREE.Line = function(b, a) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.material = a instanceof Array ? a : [a]
}
;
THREE.Line.prototype = new THREE.Object3D();
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function(b, a) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.material = a instanceof Array ? a : [a];
    this.flipSided = false;
    this.doubleSided = false;
    this.overdraw = false
}
;
THREE.Mesh.prototype = new THREE.Object3D();
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Particle = function(a) {
    THREE.Object3D.call(this);
    this.material = a instanceof Array ? a : [a];
    this.autoUpdateMatrix = false
}
;
THREE.Particle.prototype = new THREE.Object3D();
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.Light = function(a) {
    this.color = a
}
;
THREE.AmbientLight = function(a) {
    THREE.Light.call(this, a)
}
;
THREE.AmbientLight.prototype = new THREE.Light();
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(a, b) {
    THREE.Light.call(this, a);
    this.direction = b || new Vector3(1,1,1);
    this.direction.normalize()
}
;
THREE.DirectionalLight.prototype = new THREE.Light();
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.LineColorMaterial = function(c, b, a) {
    this.lineWidth = a || 1;
    this.color = new THREE.Color((b >= 0 ? (b * 255) << 24 : 4278190080) | c)
}
;
THREE.LineColorMaterial.prototype = {
    toString: function() {
        return "THREE.LineColorMaterial ( color: " + this.color + ", lineWidth: " + this.lineWidth + " )"
    }
};
THREE.MeshBitmapUVMappingMaterial = function(a) {
    this.bitmap = a;
    this.toString = function() {
        return "THREE.MeshBitmapUVMappingMaterial ( bitmap: " + this.bitmap + " )"
    }
}
;
THREE.MeshColorFillMaterial = function(b, a) {
    this.color = new THREE.Color((a >= 0 ? (a * 255) << 24 : 4278190080) | b);
    this.toString = function() {
        return "THREE.MeshColorFillMaterial ( color: " + this.color + " )"
    }
}
;
THREE.MeshColorStrokeMaterial = function(c, b, a) {
    this.lineWidth = a || 1;
    this.color = new THREE.Color((b >= 0 ? (b * 255) << 24 : 4278190080) | c);
    this.toString = function() {
        return "THREE.MeshColorStrokeMaterial ( lineWidth: " + this.lineWidth + ", color: " + this.color + " )"
    }
}
;
THREE.MeshFaceColorFillMaterial = function() {
    this.toString = function() {
        return "THREE.MeshFaceColorFillMaterial ( )"
    }
}
;
THREE.MeshFaceColorStrokeMaterial = function(a) {
    this.lineWidth = a || 1;
    this.toString = function() {
        return "THREE.MeshFaceColorStrokeMaterial ( lineWidth: " + this.lineWidth + " )"
    }
}
;
THREE.ParticleBitmapMaterial = function(a) {
    this.bitmap = a;
    this.offset = new THREE.Vector2();
    this.toString = function() {
        return "THREE.ParticleBitmapMaterial ( bitmap: " + this.bitmap + " )"
    }
}
;
THREE.ParticleCircleMaterial = function(b, a) {
    this.color = new THREE.Color((a >= 0 ? (a * 255) << 24 : 4278190080) | b);
    this.toString = function() {
        return "THREE.ParticleCircleMaterial ( color: " + this.color + " )"
    }
}
;
THREE.ParticleDOMMaterial = function(a) {
    this.domElement = a;
    this.toString = function() {
        return "THREE.ParticleDOMMaterial ( domElement: " + this.domElement + " )"
    }
}
;
THREE.Scene = function() {
    this.objects = [];
    this.lights = [];
    this.addObject = function(a) {
        this.objects.push(a)
    }
    ;
    this.removeObject = function(b) {
        for (var c = 0, a = this.objects.length; c < a; c++) {
            if (b == this.objects[c]) {
                this.objects.splice(c, 1);
                return
            }
        }
    }
    ;
    this.addLight = function(a) {
        this.lights.push(a)
    }
    ;
    this.removeLight = function(b) {
        for (var c = 0, a = this.lights.length; c < a; c++) {
            if (b == this.lights[c]) {
                this.lights.splice(c, 1);
                return
            }
        }
    }
    ;
    this.add = function(a) {
        this.addObject(a)
    }
    ;
    this.toString = function() {
        return "THREE.Scene ( " + this.objects + " )"
    }
}
;
THREE.Renderer = function() {
    var f = []
      , c = []
      , e = []
      , a = []
      , b = new THREE.Vector4()
      , d = new THREE.Matrix4();
    function g(i, h) {
        return h.z - i.z
    }
    this.renderList = null;
    this.project = function(A, x) {
        var s, q, p, B, z, m, y, n, l, C, k, j, i, h, r = 0, w = 0, t = 0, u = 0;
        this.renderList = [];
        if (x.autoUpdateMatrix) {
            x.updateMatrix()
        }
        for (s = 0,
        q = A.objects.length; s < q; s++) {
            C = A.objects[s];
            if (C.autoUpdateMatrix) {
                C.updateMatrix()
            }
            if (C instanceof THREE.Mesh) {
                d.multiply(x.matrix, C.matrix);
                for (p = 0,
                B = C.geometry.vertices.length; p < B; p++) {
                    y = C.geometry.vertices[p];
                    y.screen.copy(y.position);
                    d.transform(y.screen);
                    x.projectionMatrix.transform(y.screen);
                    y.__visible = y.screen.z > 0 && y.screen.z < 1
                }
                for (z = 0,
                m = C.geometry.faces.length; z < m; z++) {
                    l = C.geometry.faces[z];
                    if (l instanceof THREE.Face3) {
                        k = C.geometry.vertices[l.a];
                        j = C.geometry.vertices[l.b];
                        i = C.geometry.vertices[l.c];
                        if (k.__visible && j.__visible && i.__visible && (C.doubleSided || (C.flipSided != (i.screen.x - k.screen.x) * (j.screen.y - k.screen.y) - (i.screen.y - k.screen.y) * (j.screen.x - k.screen.x) < 0))) {
                            if (!f[r]) {
                                f[r] = new THREE.RenderableFace3()
                            }
                            f[r].v1.copy(k.screen);
                            f[r].v2.copy(j.screen);
                            f[r].v3.copy(i.screen);
                            f[r].z = Math.max(k.screen.z, Math.max(j.screen.z, i.screen.z));
                            f[r].material = C.material;
                            f[r].overdraw = C.overdraw;
                            f[r].uvs = C.geometry.uvs[z];
                            f[r].color = l.color;
                            this.renderList.push(f[r]);
                            r++
                        }
                    } else {
                        if (l instanceof THREE.Face4) {
                            k = C.geometry.vertices[l.a];
                            j = C.geometry.vertices[l.b];
                            i = C.geometry.vertices[l.c];
                            h = C.geometry.vertices[l.d];
                            if (k.__visible && j.__visible && i.__visible && h.__visible && (C.doubleSided || (C.flipSided != ((h.screen.x - k.screen.x) * (j.screen.y - k.screen.y) - (h.screen.y - k.screen.y) * (j.screen.x - k.screen.x) < 0 || (j.screen.x - i.screen.x) * (h.screen.y - i.screen.y) - (j.screen.y - i.screen.y) * (h.screen.x - i.screen.x) < 0)))) {
                                if (!c[w]) {
                                    c[w] = new THREE.RenderableFace4()
                                }
                                c[w].v1.copy(k.screen);
                                c[w].v2.copy(j.screen);
                                c[w].v3.copy(i.screen);
                                c[w].v4.copy(h.screen);
                                c[w].z = Math.max(k.screen.z, Math.max(j.screen.z, Math.max(i.screen.z, h.screen.z)));
                                c[w].material = C.material;
                                c[w].overdraw = C.overdraw;
                                c[w].uvs = C.geometry.uvs[z];
                                c[w].color = l.color;
                                this.renderList.push(c[w]);
                                w++
                            }
                        }
                    }
                }
            } else {
                if (C instanceof THREE.Line) {
                    d.multiply(x.matrix, C.matrix);
                    for (p = 0,
                    B = C.geometry.vertices.length; p < B; p++) {
                        y = C.geometry.vertices[p];
                        y.screen.copy(y.position);
                        d.transform(y.screen);
                        x.projectionMatrix.transform(y.screen);
                        y.__visible = y.screen.z > 0 && y.screen.z < 1;
                        if (p > 0) {
                            n = C.geometry.vertices[p - 1];
                            if (y.__visible && n.__visible) {
                                if (!e[t]) {
                                    e[t] = new THREE.RenderableLine()
                                }
                                e[t].v1.copy(y.screen);
                                e[t].v2.copy(n.screen);
                                e[t].z = Math.max(y.screen.z, n.screen.z);
                                e[t].material = C.material;
                                this.renderList.push(e[t]);
                                t++
                            }
                        }
                    }
                } else {
                    if (C instanceof THREE.Particle) {
                        b.set(C.position.x, C.position.y, C.position.z, 1);
                        x.matrix.transform(b);
                        x.projectionMatrix.transform(b);
                        C.screen.set(b.x / b.w, b.y / b.w, b.z / b.w);
                        if (C.screen.z > 0 && C.screen.z < 1) {
                            if (!a[u]) {
                                a[u] = new THREE.RenderableParticle()
                            }
                            a[u].x = C.screen.x;
                            a[u].y = C.screen.y;
                            a[u].z = C.screen.z;
                            a[u].rotation = C.rotation.z;
                            a[u].scale.x = C.scale.x * Math.abs(b.x / b.w - (b.x + x.projectionMatrix.n11) / (b.w + x.projectionMatrix.n14));
                            a[u].scale.y = C.scale.y * Math.abs(b.y / b.w - (b.y + x.projectionMatrix.n22) / (b.w + x.projectionMatrix.n24));
                            a[u].material = C.material;
                            a[u].color = C.color;
                            this.renderList.push(a[u]);
                            u++
                        }
                    }
                }
            }
        }
        this.renderList.sort(g)
    }
}
;
THREE.DOMRenderer = function() {
    THREE.Renderer.call(this);
    var b = document.createElement("div"), a, c, e, d;
    this.domElement = b;
    this.setSize = function(g, f) {
        a = g;
        c = f;
        e = a / 2;
        d = c / 2
    }
    ;
    this.render = function(n, p) {
        var o, f, g, k, l, q, j, i, h;
        this.project(n, p);
        for (o = 0,
        f = this.renderList.length; o < f; o++) {
            l = this.renderList[o];
            if (l instanceof THREE.RenderableParticle) {
                i = l.x * e + e;
                h = l.y * d + d;
                for (g = 0,
                k = l.material.length; g < k; g++) {
                    q = l.material[g];
                    if (q instanceof THREE.ParticleDOMMaterial) {
                        j = q.domElement;
                        j.style.left = i + "px";
                        j.style.top = h + "px"
                    }
                }
            }
        }
    }
}
;
THREE.DOMRenderer.prototype = new THREE.Renderer();
THREE.DOMRenderer.prototype.constructor = THREE.DOMRenderer;
THREE.CanvasRenderer = function() {
    THREE.Renderer.call(this);
    var i = document.createElement("canvas"), j = i.getContext("2d"), f, r, h, c, q = new THREE.Rectangle(), g = new THREE.Rectangle(), l = new THREE.Rectangle(), e = new THREE.Vector2(), d = new THREE.Vector2(), a = new THREE.Vector2(), p = new THREE.UV(), o = new THREE.UV(), n = new THREE.UV(), m = new THREE.UV();
    this.domElement = i;
    this.autoClear = true;
    this.setSize = function(t, s) {
        f = t;
        r = s;
        h = f / 2;
        c = r / 2;
        i.width = f;
        i.height = r;
        q.set(-h, -c, h, c)
    }
    ;
    this.clear = function() {
        if (!g.isEmpty()) {
            g.inflate(1);
            g.minSelf(q);
            j.setTransform(1, 0, 0, 1, h, c);
            j.clearRect(g.getX(), -(g.getHeight() + g.getY()), g.getWidth(), g.getHeight());
            g.empty()
        }
    }
    ;
    this.render = function(S, N) {
        var R, v, H, O, x, D, F = Math.PI * 2, z, y, L, J, u, s, B, A, M, K, w, t, G, E, U, T, Q, P, V, C, I;
        this.project(S, N);
        if (this.autoClear) {
            this.clear()
        }
        j.setTransform(1, 0, 0, -1, h, c);
        for (R = 0,
        v = this.renderList.length; R < v; R++) {
            x = this.renderList[R];
            l.empty();
            if (x instanceof THREE.RenderableParticle) {
                z = x.x * h;
                y = x.y * c;
                for (H = 0,
                O = x.material.length; H < O; H++) {
                    D = x.material[H];
                    if (D instanceof THREE.ParticleCircleMaterial) {
                        G = x.scale.x * h;
                        E = x.scale.y * c;
                        l.set(z - G, y - E, z + G, y + E);
                        if (!q.instersects(l)) {
                            continue
                        }
                        j.save();
                        j.translate(z, y);
                        j.rotate(-x.rotation);
                        j.scale(G, E);
                        j.beginPath();
                        j.arc(0, 0, 1, 0, F, true);
                        j.closePath();
                        j.fillStyle = D.color.__styleString;
                        j.fill();
                        j.restore()
                    } else {
                        if (D instanceof THREE.ParticleBitmapMaterial) {
                            V = D.bitmap;
                            C = V.width / 2;
                            I = V.height / 2;
                            U = x.scale.x * h;
                            T = x.scale.y * c;
                            G = U * C;
                            E = T * I;
                            Q = D.offset.x * U;
                            P = D.offset.y * T;
                            l.set(z + Q - G, y + P - E, z + Q + G, y + P + E);
                            if (!q.instersects(l)) {
                                continue
                            }
                            j.save();
                            j.translate(z, y);
                            j.rotate(-x.rotation);
                            j.scale(U, -T);
                            j.translate(-C + D.offset.x, -I - D.offset.y);
                            j.drawImage(V, 0, 0);
                            j.restore()
                        }
                    }
                }
            } else {
                if (x instanceof THREE.RenderableLine) {
                    z = x.v1.x * h;
                    y = x.v1.y * c;
                    L = x.v2.x * h;
                    J = x.v2.y * c;
                    l.addPoint(z, y);
                    l.addPoint(L, J);
                    if (!q.instersects(l)) {
                        continue
                    }
                    j.beginPath();
                    j.moveTo(z, y);
                    j.lineTo(L, J);
                    j.closePath();
                    for (H = 0,
                    O = x.material.length; H < O; H++) {
                        D = x.material[H];
                        if (D instanceof THREE.LineColorMaterial) {
                            j.lineWidth = D.lineWidth;
                            j.lineJoin = "round";
                            j.lineCap = "round";
                            j.strokeStyle = D.color.__styleString;
                            j.stroke();
                            l.inflate(j.lineWidth)
                        }
                    }
                } else {
                    if (x instanceof THREE.RenderableFace3) {
                        x.v1.x *= h;
                        x.v1.y *= c;
                        x.v2.x *= h;
                        x.v2.y *= c;
                        x.v3.x *= h;
                        x.v3.y *= c;
                        if (x.overdraw) {
                            b(x.v1, x.v2);
                            b(x.v2, x.v3);
                            b(x.v3, x.v1)
                        }
                        z = x.v1.x;
                        y = x.v1.y;
                        L = x.v2.x;
                        J = x.v2.y;
                        u = x.v3.x;
                        s = x.v3.y;
                        l.addPoint(z, y);
                        l.addPoint(L, J);
                        l.addPoint(u, s);
                        if (!q.instersects(l)) {
                            continue
                        }
                        for (H = 0,
                        O = x.material.length; H < O; H++) {
                            D = x.material[H];
                            if (D instanceof THREE.MeshColorFillMaterial) {
                                j.beginPath();
                                j.moveTo(z, y);
                                j.lineTo(L, J);
                                j.lineTo(u, s);
                                j.lineTo(z, y);
                                j.closePath();
                                j.fillStyle = D.color.__styleString;
                                j.fill()
                            } else {
                                if (D instanceof THREE.MeshColorStrokeMaterial) {
                                    j.beginPath();
                                    j.moveTo(z, y);
                                    j.lineTo(L, J);
                                    j.lineTo(u, s);
                                    j.lineTo(z, y);
                                    j.closePath();
                                    j.lineWidth = D.lineWidth;
                                    j.lineJoin = "round";
                                    j.lineCap = "round";
                                    j.strokeStyle = D.color.__styleString;
                                    j.stroke();
                                    l.inflate(j.lineWidth)
                                } else {
                                    if (D instanceof THREE.MeshFaceColorFillMaterial) {
                                        j.beginPath();
                                        j.moveTo(z, y);
                                        j.lineTo(L, J);
                                        j.lineTo(u, s);
                                        j.lineTo(z, y);
                                        j.closePath();
                                        j.fillStyle = x.color.__styleString;
                                        j.fill()
                                    } else {
                                        if (D instanceof THREE.MeshFaceColorStrokeMaterial) {
                                            j.beginPath();
                                            j.moveTo(z, y);
                                            j.lineTo(L, J);
                                            j.lineTo(u, s);
                                            j.lineTo(z, y);
                                            j.closePath();
                                            j.lineWidth = D.lineWidth;
                                            j.lineJoin = "round";
                                            j.lineCap = "round";
                                            j.strokeStyle = x.color.__styleString;
                                            j.stroke();
                                            l.inflate(j.lineWidth)
                                        } else {
                                            if (D instanceof THREE.MeshBitmapUVMappingMaterial) {
                                                V = D.bitmap;
                                                C = V.width - 1;
                                                I = V.height - 1;
                                                p.copy(x.uvs[0]);
                                                o.copy(x.uvs[1]);
                                                n.copy(x.uvs[2]);
                                                p.u *= C;
                                                p.v *= I;
                                                o.u *= C;
                                                o.v *= I;
                                                n.u *= C;
                                                n.v *= I;
                                                k(V, z, y, L, J, u, s, p.u, p.v, o.u, o.v, n.u, n.v)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (x instanceof THREE.RenderableFace4) {
                            x.v1.x *= h;
                            x.v1.y *= c;
                            x.v2.x *= h;
                            x.v2.y *= c;
                            x.v3.x *= h;
                            x.v3.y *= c;
                            x.v4.x *= h;
                            x.v4.y *= c;
                            d.copy(x.v2);
                            a.copy(x.v4);
                            if (x.overdraw) {
                                b(x.v1, x.v2);
                                b(x.v2, x.v4);
                                b(x.v4, x.v1)
                            }
                            z = x.v1.x;
                            y = x.v1.y;
                            L = x.v2.x;
                            J = x.v2.y;
                            B = x.v4.x;
                            A = x.v4.y;
                            if (x.overdraw) {
                                b(x.v3, d);
                                b(x.v3, a)
                            }
                            u = x.v3.x;
                            s = x.v3.y;
                            M = d.x;
                            K = d.y;
                            w = a.x;
                            t = a.y;
                            l.addPoint(z, y);
                            l.addPoint(L, J);
                            l.addPoint(u, s);
                            l.addPoint(B, A);
                            if (!q.instersects(l)) {
                                continue
                            }
                            for (H = 0,
                            O = x.material.length; H < O; H++) {
                                D = x.material[H];
                                if (D instanceof THREE.MeshColorFillMaterial) {
                                    j.beginPath();
                                    j.moveTo(z, y);
                                    j.lineTo(L, J);
                                    j.lineTo(u, s);
                                    j.lineTo(B, A);
                                    j.lineTo(z, y);
                                    j.closePath();
                                    j.fillStyle = D.color.__styleString;
                                    j.fill()
                                } else {
                                    if (D instanceof THREE.MeshColorStrokeMaterial) {
                                        j.beginPath();
                                        j.moveTo(z, y);
                                        j.lineTo(L, J);
                                        j.lineTo(u, s);
                                        j.lineTo(B, A);
                                        j.lineTo(z, y);
                                        j.closePath();
                                        j.lineWidth = D.lineWidth;
                                        j.lineJoin = "round";
                                        j.lineCap = "round";
                                        j.strokeStyle = D.color.__styleString;
                                        j.stroke();
                                        l.inflate(j.lineWidth)
                                    } else {
                                        if (D instanceof THREE.MeshFaceColorFillMaterial) {
                                            j.beginPath();
                                            j.moveTo(z, y);
                                            j.lineTo(L, J);
                                            j.lineTo(u, s);
                                            j.lineTo(B, A);
                                            j.lineTo(z, y);
                                            j.closePath();
                                            j.fillStyle = x.color.__styleString;
                                            j.fill()
                                        } else {
                                            if (D instanceof THREE.MeshFaceColorStrokeMaterial) {
                                                j.beginPath();
                                                j.moveTo(z, y);
                                                j.lineTo(L, J);
                                                j.lineTo(u, s);
                                                j.lineTo(B, A);
                                                j.lineTo(z, y);
                                                j.closePath();
                                                j.lineWidth = D.lineWidth;
                                                j.lineJoin = "round";
                                                j.lineCap = "round";
                                                j.strokeStyle = x.color.__styleString;
                                                j.stroke();
                                                l.inflate(j.lineWidth)
                                            } else {
                                                if (D instanceof THREE.MeshBitmapUVMappingMaterial) {
                                                    V = D.bitmap;
                                                    C = V.width - 1;
                                                    I = V.height - 1;
                                                    p.copy(x.uvs[0]);
                                                    o.copy(x.uvs[1]);
                                                    n.copy(x.uvs[2]);
                                                    m.copy(x.uvs[3]);
                                                    p.u *= C;
                                                    p.v *= I;
                                                    o.u *= C;
                                                    o.v *= I;
                                                    n.u *= C;
                                                    n.v *= I;
                                                    m.u *= C;
                                                    m.v *= I;
                                                    k(V, z, y, L, J, B, A, p.u, p.v, o.u, o.v, m.u, m.v);
                                                    k(V, M, K, u, s, w, t, o.u, o.v, n.u, n.v, m.u, m.v)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            g.addRectangle(l)
        }
        j.setTransform(1, 0, 0, 1, 0, 0)
    }
    ;
    function k(L, A, z, G, F, u, s, I, H, w, v, E, D) {
        var t, K, J, y, x, C, B;
        j.beginPath();
        j.moveTo(A, z);
        j.lineTo(G, F);
        j.lineTo(u, s);
        j.lineTo(A, z);
        j.closePath();
        j.save();
        j.clip();
        t = I * (D - v) - w * D + E * v + (w - E) * H;
        K = -(H * (u - G) - v * u + D * G + (v - D) * A) / t;
        J = (v * s + H * (F - s) - D * F + (D - v) * z) / t;
        y = (I * (u - G) - w * u + E * G + (w - E) * A) / t;
        x = -(w * s + I * (F - s) - E * F + (E - w) * z) / t;
        C = (I * (D * G - v * u) + H * (w * u - E * G) + (E * v - w * D) * A) / t;
        B = (I * (D * F - v * s) + H * (w * s - E * F) + (E * v - w * D) * z) / t;
        j.transform(K, J, y, x, C, B);
        j.drawImage(L, 0, 0);
        j.restore()
    }
    function b(t, s) {
        e.sub(s, t);
        e.unit();
        s.addSelf(e);
        t.subSelf(e)
    }
}
;
THREE.CanvasRenderer.prototype = new THREE.Renderer();
THREE.CanvasRenderer.prototype.constructor = THREE.CanvasRenderer;
THREE.SVGRenderer = function() {
    THREE.Renderer.call(this);
    var g = document.createElementNS("http://www.w3.org/2000/svg", "svg"), b, d, l, i, f = new THREE.Rectangle(), c = new THREE.Rectangle(), j = [], e = [], h = 1;
    this.domElement = g;
    this.autoClear = true;
    this.setQuality = function(m) {
        switch (m) {
        case "high":
            h = 1;
            break;
        case "low":
            h = 0;
            break
        }
    }
    ;
    this.setSize = function(n, m) {
        b = n;
        d = m;
        l = b / 2;
        i = d / 2;
        g.setAttribute("viewBox", (-l) + " " + (-i) + " " + b + " " + d);
        g.setAttribute("width", b);
        g.setAttribute("height", d);
        f.set(-l, -i, l, i)
    }
    ;
    this.clear = function() {
        while (g.childNodes.length > 0) {
            g.removeChild(g.childNodes[0])
        }
    }
    ;
    this.render = function(G, D) {
        var F, p, A, E, q, w, z = 0, r = 0, x, u, s, C, B, o, n, v, t, y;
        if (this.autoClear) {
            this.clear()
        }
        this.project(G, D);
        for (F = 0,
        p = this.renderList.length; F < p; F++) {
            q = this.renderList[F];
            for (A = 0,
            E = q.material.length; A < E; A++) {
                w = q.material[A];
                c.empty();
                if (q instanceof THREE.RenderableParticle) {
                    u = q.x * l;
                    s = q.y * -i;
                    y = q.size * l;
                    c.set(u - y, s - y, u + y, s + y);
                    if (!f.instersects(c)) {
                        continue
                    }
                    x = k(r++);
                    x.setAttribute("cx", u);
                    x.setAttribute("cy", s);
                    x.setAttribute("r", y)
                } else {
                    if (q instanceof THREE.RenderableFace3) {
                        u = q.v1.x * l;
                        s = q.v1.y * -i;
                        C = q.v2.x * l;
                        B = q.v2.y * -i;
                        o = q.v3.x * l;
                        n = q.v3.y * -i;
                        c.addPoint(u, s);
                        c.addPoint(C, B);
                        c.addPoint(o, n);
                        if (!f.instersects(c)) {
                            continue
                        }
                        x = a(z++);
                        x.setAttribute("d", "M " + u + " " + s + " L " + C + " " + B + " L " + o + "," + n + "z")
                    } else {
                        if (q instanceof THREE.RenderableFace4) {
                            u = q.v1.x * l;
                            s = q.v1.y * -i;
                            C = q.v2.x * l;
                            B = q.v2.y * -i;
                            o = q.v3.x * l;
                            n = q.v3.y * -i;
                            v = q.v4.x * l;
                            t = q.v4.y * -i;
                            c.addPoint(u, s);
                            c.addPoint(C, B);
                            c.addPoint(o, n);
                            c.addPoint(v, t);
                            if (!f.instersects(c)) {
                                continue
                            }
                            x = a(z++);
                            x.setAttribute("d", "M " + u + " " + s + " L " + C + " " + B + " L " + o + "," + n + " L " + v + "," + t + "z")
                        }
                    }
                }
                if (w instanceof THREE.MeshColorFillMaterial) {
                    x.setAttribute("style", "fill: " + w.color.__styleString)
                } else {
                    if (w instanceof THREE.MeshFaceColorFillMaterial) {
                        x.setAttribute("style", "fill: " + q.color.__styleString)
                    } else {
                        if (w instanceof THREE.MeshColorStrokeMaterial) {
                            x.setAttribute("style", "fill: none; stroke: " + w.color.__styleString + "; stroke-width: " + w.lineWidth + "; stroke-linecap: round; stroke-linejoin: round")
                        } else {
                            if (w instanceof THREE.MeshFaceColorStrokeMaterial) {
                                x.setAttribute("style", "fill: none; stroke: " + q.color.__styleString + "; stroke-width: " + w.lineWidth + "; stroke-linecap: round; stroke-linejoin: round")
                            }
                        }
                    }
                }
                g.appendChild(x)
            }
        }
    }
    ;
    function a(m) {
        if (j[m] == null) {
            j[m] = document.createElementNS("http://www.w3.org/2000/svg", "path");
            if (h == 0) {
                j[m].setAttribute("shape-rendering", "crispEdges")
            }
            return j[m]
        }
        return j[m]
    }
    function k(m) {
        if (e[m] == null) {
            e[m] = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            if (h == 0) {
                e[m].setAttribute("shape-rendering", "crispEdges")
            }
            return e[m]
        }
        return e[m]
    }
}
;
THREE.SVGRenderer.prototype = new THREE.Renderer();
THREE.SVGRenderer.prototype.constructor = THREE.CanvasRenderer;
THREE.WebGLRenderer = function() {
    var e = document.createElement("canvas"), a, h, d = new THREE.Matrix4(), g;
    this.domElement = e;
    this.autoClear = true;
    f();
    c();
    this.setSize = function(j, i) {
        e.width = j;
        e.height = i;
        a.viewport(0, 0, e.width, e.height)
    }
    ;
    this.clear = function() {
        a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT)
    }
    ;
    this.render = function(K, G) {
        var t, L, N, z, M, C, j, r, y, A, s, J, w, B, x, I, u, D, H, F, q, p, n, k, E, v;
        if (this.autoClear) {
            this.clear()
        }
        a.uniform1i(h.enableLighting, K.lights.length);
        for (E = 0,
        v = K.lights.length; E < v; E++) {
            r = K.lights[E];
            if (r instanceof THREE.AmbientLight) {
                C = r.color;
                a.uniform3f(h.ambientColor, C.r, C.g, C.b)
            } else {
                if (r instanceof THREE.DirectionalLight) {
                    C = r.color;
                    j = r.direction;
                    a.uniform3f(h.lightingDirection, j.x, j.y, j.z);
                    a.uniform3f(h.directionalColor, C.r, C.g, C.b)
                }
            }
        }
        for (B = 0,
        x = K.objects.length; B < x; B++) {
            N = K.objects[B];
            if (N instanceof THREE.Mesh) {
                if (!N.__webGLVertexBuffer) {
                    y = [];
                    A = [];
                    s = [];
                    J = [];
                    w = 0;
                    for (I = 0,
                    u = N.geometry.faces.length; I < u; I++) {
                        t = N.geometry.faces[I];
                        L = t.color;
                        M = t.normal;
                        if (t instanceof THREE.Face3) {
                            q = N.geometry.vertices[t.a].position;
                            p = N.geometry.vertices[t.b].position;
                            n = N.geometry.vertices[t.c].position;
                            y.push(q.x, q.y, q.z);
                            y.push(p.x, p.y, p.z);
                            y.push(n.x, n.y, n.z);
                            J.push(M.x, M.y, M.z);
                            J.push(M.x, M.y, M.z);
                            J.push(M.x, M.y, M.z);
                            s.push(L.r, L.g, L.b, L.a);
                            s.push(L.r, L.g, L.b, L.a);
                            s.push(L.r, L.g, L.b, L.a);
                            A.push(w, w + 1, w + 2);
                            w += 3
                        } else {
                            if (t instanceof THREE.Face4) {
                                q = N.geometry.vertices[t.a].position;
                                p = N.geometry.vertices[t.b].position;
                                n = N.geometry.vertices[t.c].position;
                                k = N.geometry.vertices[t.d].position;
                                y.push(q.x, q.y, q.z);
                                y.push(p.x, p.y, p.z);
                                y.push(n.x, n.y, n.z);
                                y.push(k.x, k.y, k.z);
                                J.push(M.x, M.y, M.z);
                                J.push(M.x, M.y, M.z);
                                J.push(M.x, M.y, M.z);
                                J.push(M.x, M.y, M.z);
                                s.push(L.r, L.g, L.b, L.a);
                                s.push(L.r, L.g, L.b, L.a);
                                s.push(L.r, L.g, L.b, L.a);
                                s.push(L.r, L.g, L.b, L.a);
                                A.push(w, w + 1, w + 2);
                                A.push(w, w + 2, w + 3);
                                w += 4
                            }
                        }
                    }
                    if (!y.length) {
                        continue
                    }
                    N.__webGLVertexBuffer = a.createBuffer();
                    a.bindBuffer(a.ARRAY_BUFFER, N.__webGLVertexBuffer);
                    a.bufferData(a.ARRAY_BUFFER, new Float32Array(y), a.STATIC_DRAW);
                    N.__webGLNormalBuffer = a.createBuffer();
                    a.bindBuffer(a.ARRAY_BUFFER, N.__webGLNormalBuffer);
                    a.bufferData(a.ARRAY_BUFFER, new Float32Array(J), a.STATIC_DRAW);
                    N.__webGLColorBuffer = a.createBuffer();
                    a.bindBuffer(a.ARRAY_BUFFER, N.__webGLColorBuffer);
                    a.bufferData(a.ARRAY_BUFFER, new Float32Array(s), a.STATIC_DRAW);
                    N.__webGLFaceBuffer = a.createBuffer();
                    a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, N.__webGLFaceBuffer);
                    a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array(A), a.STATIC_DRAW);
                    N.__webGLFaceCount = A.length
                }
                d.multiply(G.matrix, N.matrix);
                h.viewMatrixArray = new Float32Array(d.flatten());
                h.projectionMatrixArray = new Float32Array(G.projectionMatrix.flatten());
                g = THREE.Matrix4.makeInvert(d).transpose();
                h.normalMatrixArray = new Float32Array(g.flatten());
                a.uniformMatrix4fv(h.viewMatrix, false, h.viewMatrixArray);
                a.uniformMatrix4fv(h.projectionMatrix, false, h.projectionMatrixArray);
                a.uniformMatrix4fv(h.normalMatrix, false, h.normalMatrixArray);
                a.bindBuffer(a.ARRAY_BUFFER, N.__webGLVertexBuffer);
                a.vertexAttribPointer(h.position, 3, a.FLOAT, false, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, N.__webGLNormalBuffer);
                a.vertexAttribPointer(h.normal, 3, a.FLOAT, false, 0, 0);
                for (D = 0,
                H = N.material.length; D < H; D++) {
                    z = N.material[D];
                    if (z instanceof THREE.MeshColorFillMaterial) {
                        if (!z.__webGLColorBuffer) {
                            s = [];
                            for (F = 0; F < N.__webGLFaceCount; F++) {
                                s.push(z.color.r, z.color.g, z.color.b, z.color.a)
                            }
                            z.__webGLColorBuffer = a.createBuffer();
                            a.bindBuffer(a.ARRAY_BUFFER, z.__webGLColorBuffer);
                            a.bufferData(a.ARRAY_BUFFER, new Float32Array(s), a.STATIC_DRAW)
                        }
                        a.bindBuffer(a.ARRAY_BUFFER, z.__webGLColorBuffer);
                        a.vertexAttribPointer(h.color, 4, a.FLOAT, false, 0, 0)
                    } else {
                        if (z instanceof THREE.MeshFaceColorFillMaterial) {
                            a.bindBuffer(a.ARRAY_BUFFER, N.__webGLColorBuffer);
                            a.enableVertexAttribArray(h.color);
                            a.vertexAttribPointer(h.color, 4, a.FLOAT, false, 0, 0)
                        }
                    }
                }
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, N.__webGLFaceBuffer);
                a.drawElements(a.TRIANGLES, N.__webGLFaceCount, a.UNSIGNED_SHORT, 0)
            }
        }
    }
    ;
    function f() {
        try {
            a = e.getContext("experimental-webgl")
        } catch (i) {}
        if (!a) {
            alert("WebGL not supported");
            throw "cannot create webgl context"
        }
        a.clearColor(0, 0, 0, 1);
        a.clearDepth(1);
        a.enable(a.DEPTH_TEST);
        a.depthFunc(a.LEQUAL);
        a.enable(a.BLEND);
        a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
        a.clearColor(0, 0, 0, 0)
    }
    function c() {
        h = a.createProgram();
        a.attachShader(h, b("fragment", ["#ifdef GL_ES", "precision highp float;", "#endif", "varying vec4 vcolor;", "varying vec3 lightWeighting;", "void main(){", "gl_FragColor = vec4(vcolor.rgb * lightWeighting, vcolor.a);", "}"].join("\n")));
        a.attachShader(h, b("vertex", ["attribute vec3 position;", "attribute vec3 normal;", "attribute vec4 color;", "uniform bool enableLighting;", "uniform vec3 ambientColor;", "uniform vec3 directionalColor;", "uniform vec3 lightingDirection;", "uniform mat4 viewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 normalMatrix;", "varying vec4 vcolor;", "varying vec3 lightWeighting;", "void main(void) {", "if(!enableLighting) {", "lightWeighting = vec3(1.0, 1.0, 1.0);", "} else {", "vec4 transformedNormal = normalMatrix * vec4(normal, 1.0);", "float directionalLightWeighting = max(dot(transformedNormal.xyz, lightingDirection), 0.0);", "lightWeighting = ambientColor + directionalColor * directionalLightWeighting;", "}", "vcolor = color;", "gl_Position = projectionMatrix * viewMatrix * vec4( position, 1.0 );", "}"].join("\n")));
        a.linkProgram(h);
        if (!a.getProgramParameter(h, a.LINK_STATUS)) {
            alert("Could not initialise shaders")
        }
        a.useProgram(h);
        h.viewMatrix = a.getUniformLocation(h, "viewMatrix");
        h.projectionMatrix = a.getUniformLocation(h, "projectionMatrix");
        h.normalMatrix = a.getUniformLocation(h, "normalMatrix");
        h.enableLighting = a.getUniformLocation(h, "enableLighting");
        h.ambientColor = a.getUniformLocation(h, "ambientColor");
        h.directionalColor = a.getUniformLocation(h, "directionalColor");
        h.lightingDirection = a.getUniformLocation(h, "lightingDirection");
        h.color = a.getAttribLocation(h, "color");
        a.enableVertexAttribArray(h.color);
        h.position = a.getAttribLocation(h, "position");
        a.enableVertexAttribArray(h.position);
        h.normal = a.getAttribLocation(h, "normal");
        a.enableVertexAttribArray(h.normal);
        h.viewMatrixArray = new Float32Array(16);
        h.projectionMatrixArray = new Float32Array(16)
    }
    function b(j, i) {
        var k;
        if (j == "fragment") {
            k = a.createShader(a.FRAGMENT_SHADER)
        } else {
            if (j == "vertex") {
                k = a.createShader(a.VERTEX_SHADER)
            }
        }
        a.shaderSource(k, i);
        a.compileShader(k);
        if (!a.getShaderParameter(k, a.COMPILE_STATUS)) {
            alert(a.getShaderInfoLog(k));
            return null
        }
        return k
    }
}
;
THREE.RenderableFace3 = function() {
    this.v1 = new THREE.Vector2();
    this.v2 = new THREE.Vector2();
    this.v3 = new THREE.Vector2();
    this.z = null;
    this.color = null;
    this.material = null
}
;
THREE.RenderableFace4 = function() {
    this.v1 = new THREE.Vector2();
    this.v2 = new THREE.Vector2();
    this.v3 = new THREE.Vector2();
    this.v4 = new THREE.Vector2();
    this.z = null;
    this.color = null;
    this.material = null
}
;
THREE.RenderableParticle = function() {
    this.x = null;
    this.y = null;
    this.z = null;
    this.rotation = null;
    this.scale = new THREE.Vector2();
    this.color = null;
    this.material = null
}
;
THREE.RenderableLine = function() {
    this.v1 = new THREE.Vector2();
    this.v2 = new THREE.Vector2();
    this.z = null;
    this.color = null;
    this.material = null
}
;