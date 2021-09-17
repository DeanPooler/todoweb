// eslint-disable-next-line no-undef
const _ = require("underscore");

export default class DOMHelper {
    constructor(firstElementDivLog = document.getElementById("wrapper")) {
        this.divFuncLog = [firstElementDivLog];
        this.pFuncLog = [];
        this.ulFuncLog = [];
        this.svgFuncLog = [];
        
        if (!Array.prototype.last) {
            Array.prototype.last = function() {
                return this[this.length - 1];
            };
        }
    }

    setDefaults(options, defaults){
        return _.defaults({}, _.clone(options), defaults);
    }

    div(options) {
        const defaults = {
            parent: this.divFuncLog.last(),
            class: null,
            id: null,
            text: null,
            width: null
        };
        const opt = this.setDefaults(options, defaults);

        const div = document.createElement("div");
        
        if (opt.width !== null) {div.style.setProperty("width", opt.width);}
        if (opt.class !== null ) {div.setAttribute("class", opt.class);}
        if (opt.id !== null ) {div.setAttribute("id", opt.id);}
        if (opt.text !== null ) {div.textContent = opt.text;}
        
        this.divFuncLog.push(div);
        document.getElementById(opt.parent).appendChild(div);
    }

    p(options) {
        const p = document.createElement("p");

        const defaults = {
            parent: this.divFuncLog.last(),
            text: "placeholder text",
            class: null,
            id: null
        };
        const opt = this.setDefaults(options, defaults);

        if (opt.text !== "placeholder text") { p.textContent = opt.text; }
        if (opt.class !== null) { p.setAttribute("class", opt.class); }
        if (opt.id !== null) { p.setAttribute("id", opt.id); }
        this.pFuncLog.push(p);
        document.getElementById(opt.parent).appendChild(p);
    }

    ul(options) {
        const defaults = {
            parent: this.divFuncLog.last(),
            class: null,
            id: null
        };
        const opt = this.setDefaults(options, defaults);
        
        const ul = document.createElement("ul");

        if (opt.class !== null) { ul.setAttribute("class", opt.class);}
        if (opt.id !== null) {ul.setAttribute("id", opt.id);}
        this.ulFuncLog.push(ul);
        document.getElementById(opt.parent).appendChild(ul);
    }

    li(options) {
        const defaults = {
            parent: this.ulFuncLog.last(),
            class: null,
            id: null
        };
        const opt = this.setDefaults(options, defaults);
        
        const li = document.createElement("li");

        if (opt.class !== null) { li.setAttribute("class", opt.class);}
        if (opt.id !== null) { li.setAttribute("id", opt.id);}    

        if (opt.parent == this.ulFuncLog.last()) {
            opt.parent.appendChild(li);
        } else {
            document.getElementById(opt.parent).appendChild(li);
        }
    }

    a(options) {
        const defaults = {
            parent: this.divFuncLog.last(),
            href: null,
            text: null
        };
        const opt = this.setDefaults(options, defaults);
        
        const a = document.createElement("a");
        
        a.href = opt.href;
        a.text = opt.text;
        document.getElementById(opt.parent).appendChild(a);
    }

    h(options) {
        const defaults = {
            parent: this.divFuncLog.last(),
            size: "1",
            text: "placeholder text"
            
        };
        const opt = this.setDefaults(options, defaults);

        const h = document.createElement(`h${opt.size}`);

        h.textContent = opt.text;
        document.getElementById(opt.parent).appendChild(h);
    }

    svg(options) {
        
        const defaults = {
            parent: this.divFuncLog.last(),
            prefab: null,
            color: "rgb(200,200,200)"
        };
        const opt = this.setDefaults(options, defaults);
        
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("viewBox", "0, 0, 50, 50");
        
        if (opt.prefab !== null && opt.prefab === "test") {
            line(4,20,20,4,2);
            line(19,4,35,20,2);
            line(8,16,8,36,2);
            line(31,16,31,36,2);
            
        }
        if (opt.prefab !== null && opt.prefab === "settings") {
            path("M 5,40 H 45", `fill:none;stroke:${opt.color};stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none`);
            path("M 5,10 H 45", `fill:none;stroke:${opt.color};stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none`);
            path("M 5,25 H 45", `fill:none;stroke:${opt.color};stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none`);
        }
        if (opt.prefab !== null && opt.prefab === "home") {
            path("M 5,18 C 25,3 25,3 25,3", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`);
            path("m 25,13 20,15 v 0", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`);
            path("m 25,3 9,7", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`);
            path("m 25,13 -9,7", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`);
            path("M 10,15 V 47", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`);
            path("M 40,24 V 48", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`);
            rect(4,7,10,5,`fill:${opt.color};stroke-width:4.6188;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none`);
            path("M 8,17 V 45", "fill:#808080;stroke:#1e1e1e;stroke-width:4;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:0;stroke-miterlimit:4;stroke-dasharray:none");
            text(22.035709, 42.812504, `font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.3333px;line-height:0.25;font-family:"Eras Bold ITC";-inkscape-font-specification:"Eras Bold ITC";fill:${opt.color};fill-opacity:1;stroke:none;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none`, "D");
            text(14.285713, 37.151791, `font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:17.3333px;line-height:0.25;font-family:"Eras Bold ITC";-inkscape-font-specification:"Eras Bold ITC";fill:${opt.color};fill-opacity:1;stroke:none;stroke-width:0.5;stroke-miterlimit:4;stroke-dasharray:none`, "T");
        }
        if (opt.prefab !== null && opt.prefab === "add") {
            path("m 25,5 v 40 0 0", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none`);
            path("M 45,25 H 5", `fill:none;stroke:${opt.color};stroke-width:4;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none`);
        }
        
        document.getElementById(opt.parent).appendChild(svg);
        
        function line(x1,y1,x2,y2, width = 1, color =  "${opt.color}") {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttributeNS(null, "x1", x1.toString());
            line.setAttributeNS(null, "y1", y1.toString());
            line.setAttributeNS(null, "x2", x2.toString());
            line.setAttributeNS(null, "y2", y2.toString());
            line.setAttributeNS(null, "style", `stroke:${color};stroke-width:${width.toString()}`);
            svg.append(line);
        }
        
        function path(d, style) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttributeNS(null, "d", d);
            path.setAttributeNS(null, "style", style);
            svg.append(path);
        }
        
        function rect(width, height, x, y, style) {
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttributeNS(null, "width", width.toString());
            rect.setAttributeNS(null, "height", height.toString());
            rect.setAttributeNS(null, "x", x.toString());
            rect.setAttributeNS(null, "y", y.toString());
            rect.setAttributeNS(null, "style", style);
            svg.append(rect);
        }
        
        function text(x, y, style, textContent) {
            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.setAttributeNS(null, "x", x.toString());
            tspan.setAttributeNS(null, "y", y.toString());
            tspan.innerHTML = textContent;
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttributeNS(null, "x", x.toString());
            text.setAttributeNS(null, "y", y.toString());
            text.setAttributeNS(null, "style", style);
            text.appendChild(tspan);
            svg.append(text);
        }
    }
}