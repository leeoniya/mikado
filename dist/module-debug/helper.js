
import Mikado from "./mikado.js";

/**
 * Move a template node to an absolute position (moveTo)
 * @param {!Element|number} node
 * @param {!number} position
 * @return {Mikado}
 * @this Mikado
 * @const
 */

Mikado.prototype.move = Mikado.prototype.moveTo = function (node, position) {

    let index;

    if ("number" == typeof node) {

        index = node;
        node = this.dom[index];
    } else {

        index = this.index(node);
    }

    if (0 > position) {

        position = this.length + position - 1;
    }

    if (index !== position) {

        this.shift(node, position - index);
    }

    return this;
};

/**
 * Shift a template node by relative position (shiftBy)
 * @param {!Element|number} a
 * @param {!number} offset
 * @return {Mikado}
 * @this Mikado
 * @const
 */

Mikado.prototype.shift = Mikado.prototype.shiftBy = function (a, offset) {

    if (!offset) {

        return this;
    }

    let index;

    if ("number" == typeof a) {

        index = a;
        a = this.dom[a];
    } else {

        index = this.index(a);
    }

    const up = 0 > offset;

    if (up && index || !up && index < this.length - 1) {
        const pos = up ? Math.max(index + offset, 0) : Math.min(index + offset, this.length - 1),
              b = this.dom[pos],
              multi_update = up && 1 < index - pos || !up && 1 < pos - index;


        this.root.insertBefore(a, up ? b : this.dom[pos + 1] || null);

        if (multi_update) {

            const tmp = this.dom[index];
            let current;

            if (up) {

                for (let i = index; i > pos; i--) {

                    this.dom[i] = current = this.dom[i - 1];
                }
            } else {

                for (let i = index; i < pos; i++) {

                    this.dom[i] = current = this.dom[i + 1];
                }
            }

            this.dom[pos] = current = tmp;
        } else {

            this.dom[index] = b;
            this.dom[pos] = a;
        }
    }

    return this;
};

/**
 * Move a template node up by offset (shift up)
 * @param {!Element|number} a
 * @param {number=} offset
 * @return {Mikado}
 * @this Mikado
 * @const
 */

Mikado.prototype.up = function (a, offset) {

    if (!offset || 0 < offset) {

        this.shift(a, -(offset || 1));
    }

    return this;
};

/**
 * Move a template node down by offset (shift down)
 * @param {!Element|number} a
 * @param {number=} offset
 * @return {Mikado}
 * @this Mikado
 * @const
 */

Mikado.prototype.down = function (a, offset) {

    if (!offset || 0 < offset) {

        this.shift(a, offset || 1);
    }

    return this;
};

/**
 * Move a template node to the start (becomes the first element)
 * @param {!Element|number} a
 * @return {Mikado}
 * @this Mikado
 * @const
 */

Mikado.prototype.first = function (a) {

    return this.shift(a, -this.length);
};

/**
 * Move a template node to the end (becomes the last element)
 * @param {!Element|number} a
 * @return {Mikado}
 * @this Mikado
 */

Mikado.prototype.last = function (a) {

    return this.shift(a, this.length);
};

/**
 * Move a template node before a specific position
 * @param {!Element|number} tmp_a
 * @param {!Element|number} tmp_b
 * @return {Mikado}
 * @this Mikado
 * @const
 */

Mikado.prototype.before = function (tmp_a, tmp_b) {

    if ("number" != typeof tmp_a) {

        tmp_a = this.index(tmp_a);
    }

    if ("number" != typeof tmp_b) {

        tmp_b = this.index(tmp_b);
    }

    if (tmp_b !== tmp_a + 1) {

        if (0 > tmp_b) {

            tmp_b = this.length + tmp_b;

            if (0 > tmp_a) {

                tmp_b--;
            }
        }

        if (0 > tmp_a) {

            tmp_a = this.length + tmp_a - 1;
        }

        this.shift(tmp_a, tmp_b - tmp_a - 1);
    }

    return this;
};

/**
 * Move a template node after a specific position
 * @param {!Element|number} tmp_a
 * @param {!Element|number} tmp_b
 * @return {Mikado}
 * @this Mikado
 * @const
 */

Mikado.prototype.after = function (tmp_a, tmp_b) {

    if ("number" != typeof tmp_a) {

        tmp_a = this.index(tmp_a);
    }

    if ("number" != typeof tmp_b) {

        tmp_b = this.index(tmp_b);
    }

    if (tmp_b !== tmp_a - 1) {

        if (0 > tmp_b) {

            tmp_b = this.length + tmp_b - 2;

            if (0 > tmp_a) {

                tmp_b++;
            }
        }

        if (0 > tmp_a) {

            tmp_a = this.length + tmp_a - 1;
        }

        this.shift(tmp_a, tmp_b - tmp_a + 1);
    }

    return this;
};

/**
 * Swap two template nodes
 * @param {!Element|number} a
 * @param {!Element|number} b
 * @returns Mikado
 * @this Mikado
 * @const
 */

Mikado.prototype.swap = function (a, b) {

    //profiler_start("swap");

    if (a !== b) {
        let tmp_a, tmp_b;


        if ("number" == typeof a) {

            tmp_a = 0 > a ? this.length + a : a;
            a = this.dom[tmp_a];
        } else {

            tmp_a = this.index(a);
        }

        if ("number" == typeof b) {

            tmp_b = 0 > b ? this.length + b : b;
            b = this.dom[tmp_b];
        } else {

            tmp_b = this.index(b);
        }

        //this.arrange(a, b, null, view, tmp_a, tmp_b);

        const no_predecessor = tmp_a + 1 !== tmp_b;

        this.root.insertBefore(no_predecessor ? a : b, no_predecessor ? b : a);
        if (no_predecessor && tmp_b + 1 !== tmp_a) this.root.insertBefore(b, this.dom[tmp_a + 1] || null);

        //this.root.insertBefore(a, b);
        //this.root.insertBefore(b, (tmp_a + 1) === tmp_b ? a : this.dom[tmp_a + 1]);
        //this.root.insertBefore(b, this.dom[tmp_a + 1] || null);

        this.dom[tmp_a] = b;
        this.dom[tmp_b] = a;
    }

    //profiler_end("swap");

    return this;
};