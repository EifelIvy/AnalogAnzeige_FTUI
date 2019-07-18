# AnalogAnzeige_FTUI
Analoge Messgeraete FTUI 

Ausgabe von Messwerten (z.B. Leistungserzeugung PV-Anlage) als Analoges Messgeraet fuer FTUI

data-type="analogscala" 
data-device=[device] data-get=[reading]
    
data-actColor=[Farbe der Messwerte] data-bgcolor=[Hintergrund] data-fgcolor=[Skala] data-hdcolor=[Zeiger]
  
data-vfont=[Font Messwert] data-font=[Font Skala]

# Fuer die Teilung der Skala
data-tickhighlight="10" data-tickstep="20"                                  

# Fuer Min-Max-Werte und Mess-Einheit
data-min="0" data-max="600" data-unit="V-"
oder auch:
data-min="-5000" data-max="5000" data-unit="W~"

# Fuer weiteren Text in der Skala (z.B. Einspeisung / Bezug)
data-mintext="Einsp." data-maxtext="Bezug"
