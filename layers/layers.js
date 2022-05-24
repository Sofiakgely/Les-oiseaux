var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_Letracducircuit_1 = new ol.format.GeoJSON();
var features_Letracducircuit_1 = format_Letracducircuit_1.readFeatures(json_Letracducircuit_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Letracducircuit_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Letracducircuit_1.addFeatures(features_Letracducircuit_1);
var lyr_Letracducircuit_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Letracducircuit_1, 
                style: style_Letracducircuit_1,
                interactive: true,
                title: '<img src="styles/legend/Letracducircuit_1.png" /> Le tracé du circuit'
            });
var format_oiseauxwgs84_2 = new ol.format.GeoJSON();
var features_oiseauxwgs84_2 = format_oiseauxwgs84_2.readFeatures(json_oiseauxwgs84_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oiseauxwgs84_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oiseauxwgs84_2.addFeatures(features_oiseauxwgs84_2);
var lyr_oiseauxwgs84_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oiseauxwgs84_2, 
                style: style_oiseauxwgs84_2,
                interactive: true,
                title: '<img src="styles/legend/oiseauxwgs84_2.png" /> oiseauxwgs84'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_Letracducircuit_1.setVisible(true);lyr_oiseauxwgs84_2.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_Letracducircuit_1,lyr_oiseauxwgs84_2];
lyr_Letracducircuit_1.set('fieldAliases', {'Tracé': 'Tracé', });
lyr_oiseauxwgs84_2.set('fieldAliases', {'Nom_oiseau': 'Nom_oiseau', 'Nb_oiseau': 'Nb_oiseau', 'type_ctct': 'type_ctct', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Qrcodes': 'Qrcodes', });
lyr_Letracducircuit_1.set('fieldImages', {'Tracé': 'TextEdit', });
lyr_oiseauxwgs84_2.set('fieldImages', {'Nom_oiseau': 'TextEdit', 'Nb_oiseau': 'TextEdit', 'type_ctct': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Qrcodes': 'TextEdit', });
lyr_Letracducircuit_1.set('fieldLabels', {'Tracé': 'no label', });
lyr_oiseauxwgs84_2.set('fieldLabels', {'Nom_oiseau': 'inline label', 'Nb_oiseau': 'inline label', 'type_ctct': 'inline label', 'Latitude': 'no label', 'Longitude': 'no label', 'Qrcodes': 'no label', });
lyr_oiseauxwgs84_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});