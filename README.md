# Analogue gauge widget for FTUI

Display readingsvalue in analogue gauge style, e.g. cockpit for photovoltaic-systems. The widget is styled regarding analogue electrical gauges.

## Install
copy the file widget_analogscala.js into the corresponding folder of your FHEM server /<fhem-path>/www/tablet/js

## Forum
FHEM Forum FTUI

#### uses knob widget and additional parameters for example:

* data-type: 		  name of widget : "analogscala" 
* data-device:	  [device] 
* data-get:		    [reading]
* data-actColor:	color of value of reading  
* data-bgcolor:	  color of background 
* data-fgcolor:	  color of scale (ticks, text) 
* data-hdcolor:	  color of needle
* data-vfont:		  Font of value (e.g. additional style "digital"; see further discription in Readme_addfont.md) 
* data-font:		  Font of scale (e.g. data-mintext, data-maxtext)
* data-tickhighlight:	highlight every [n] ticks , e.g. "10" 
* data-tickstep:	  	value between two ticks - interacts with data-min/data-max , e.g. "20"
* data-min:		    minimum value , e.g. "0" or "-1000" to display negative values 
* data-max:		    maximum value 
* data-unit:		  unit for gauge, e.g. "V-" or "W~"
* data-mintext:	  text on left side , e.g. "GRID In" or "charge"
* data-maxtext:	  text on right side , e.g. "GRID out" or "discharge"

Use CSS-class to force "readonly" and outfit style (big/normal/small).
