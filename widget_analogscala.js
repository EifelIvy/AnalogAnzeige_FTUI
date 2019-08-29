/* FTUI Plugin
 * Copyright (c) 2015-2016 Mario Stephan <mstephan@shared-files.de>
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
/* global ftui:true, Modul_knob:true */

/* Widget for analoque electrical values
 * use digital 7 segement font designed by ....
 * Have fun!
 * WN eifel.ivy@web.de
 */

"use strict";

function depends_analogscala() {
    if (window["Modul_knob"] === void 0|| !$.fn.knob) {
        return ["knob"];
    }
}

var Modul_analogscala = function () {
var isUpdating = false;

   function drawDial() {

    /*jshint validthis: true */
    var c = this.g,                                                             // context
        a = this.arc(this.cv),                                                  // Arc
        i = 0,                      
        tick_w = Math.PI / 360,
        schrittweite = (this.o.max - this.o.min) / this.o.tickdistance, 
        pos_offset = Math.floor(this.o.height/20),                              // Offset for drawing
        font_pix_size =  Math.floor(window.devicePixelRatio * this.o.height);   // Fontsize

	// Scale background
 	c.beginPath();
	c.rect(0, 0, this.o.width, this.o.height);
    c.lineWidth = this.lineWidth;
    c.lineCap = this.lineCap;     
  	c.strokeStyle = this.o.bgColor;
    c.stroke(); 
	c.fillStyle = this.o.bgColor;
	c.fill();
       
    // draw data-unit, data-mintext, data-maxtext
	c.fillStyle = this.o.fgColor;
    c.font = 'bold ' + 1/5 * font_pix_size + 'px ' + this.o.font;
	c.textAlign="left"; 
    c.fillText(this.o.unit,pos_offset,1/5*font_pix_size);
    c.fillText(this.o.mintext,pos_offset,this.o.height-pos_offset);
    c.textAlign="right";
    c.fillText(this.o.maxtext,2*this.xy-pos_offset,this.o.height-pos_offset);
    
    //draw act. value from this.v
    c.fillStyle = this.o.actColor;
    c.font = 'bold ' + 1/5 * font_pix_size + 'px ' + this.o.vfont;
    c.textAlign = "center";
	c.fillText(this.v,this.xy,this.o.height-pos_offset);
       
    // draw ticks
    for (var tick = this.startAngle; tick < (this.endAngle + 0.00000000001); tick += this.angleArc / schrittweite) {     
        var w = tick_w;
        
	    c.font = ' ' + 1/8 * font_pix_size + 'px ' + this.o.font;      
	    c.beginPath();
        c.strokeStyle = this.o.fgColor;
            
        // thicker lines + scale 
        if ((i % this.o.tickhighlight) == 0 || i == 0)  {
            w = tick_w * 2.2;
            w *= (c.strokeStyle != this.o.fgColor) ? 1.5 : 1;
          
            // Text for scale 
            var scale_text = this.o.min + i*this.o.tickdistance;
            var x = this.xy + (this.radius - 7*pos_offset) * Math.cos(tick);
            var y = this.xy + (this.radius - 8*pos_offset) * Math.sin(tick);
      
            c.fillStyle = this.o.fgColor;
		    c.arc(this.xy, this.xy, this.radius-pos_offset, tick, tick + w, false);
            c.fillText(scale_text,x,y);
        } else {
            w *= (c.strokeStyle != this.o.fgColor) ? 1 : 1;
            c.arc(this.xy, this.xy, this.radius-pos_offset, tick, tick + w, false);
        } 
        c.stroke();
        i += 1;
    }
        
    // draw selection cursor
    c.beginPath();
    c.strokeStyle = this.o.hdColor;
    c.lineWidth = this.lineWidth * 2;
    c.arc(this.xy, this.xy, this.radius - this.lineWidth/2-pos_offset, a.e, a.e+w, a.d);
    c.stroke();

    return false;
}

    function init_ui(elem) {
        var analogscala_elem = $('<input/>', {
                type: 'text',
                disabled: true,
            }).data(elem.data())
            .appendTo(elem);
        if (analogscala_elem) {
            analogscala_elem.knob({
                
                'displayNominal': false,
                'step': elem.data('step') || 1,
                'angleOffset': -60,
                'angleArc': 120,
                'thickness': elem.data('thickness') || 0.28,
                
                'height': Math.floor(elem.data('height') / 2),
                'width': elem.data('width'),
                
                'draw': me.drawDial,
                'readOnly': elem.hasClass('readonly'),
                
                'bgColor': elem.data('bgcolor'),
                'fgColor': elem.data('fgcolor'),
                'actColor': elem.data('actcolor'),
                'hdColor': elem.data('hdcolor'),
                
                'min': elem.data('min') || 0,
                'max': elem.data('max') || 400,
                'tickdistance': elem.data('tickstep') || 10,
                'tickhighlight': elem.data('tickhighlight') || 10,
                'vfont': elem.data('vfont') || 'Times',
                'font': elem.data('font') || 'Times',
                'unit': elem.data('unit') || '',
                'mintext': elem.data('mintext') || '',
                'maxtext': elem.data('maxtext') || ''
            });
            elem.append($('<div/>', {
                class: 'overlay'
            }));
        }
        return elem;
    }

   // public
   // inherit all public members from base class
   var parent = new Modul_knob();
   var base = {
       onFormat: parent.onFormat,
    };

   var me = $.extend(parent, {
        //override or own public members
        widgetname: 'analogscala',
        init_ui: init_ui,
        drawDial: drawDial
   });
   return me;
};
