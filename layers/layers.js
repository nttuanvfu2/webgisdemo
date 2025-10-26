var wms_layers = [];

var format_BasaltStone_rkk_0 = new ol.format.GeoJSON();
var features_BasaltStone_rkk_0 = format_BasaltStone_rkk_0.readFeatures(json_BasaltStone_rkk_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BasaltStone_rkk_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BasaltStone_rkk_0.addFeatures(features_BasaltStone_rkk_0);
var lyr_BasaltStone_rkk_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BasaltStone_rkk_0, 
                style: style_BasaltStone_rkk_0,
                popuplayertitle: 'BasaltStone_rkk',
                interactive: true,
                title: '<img src="styles/legend/BasaltStone_rkk_0.png" /> BasaltStone_rkk'
            });

lyr_BasaltStone_rkk_0.setVisible(true);
var layersList = [lyr_BasaltStone_rkk_0];
lyr_BasaltStone_rkk_0.set('fieldAliases', {'tk': 'tk', 'kh': 'kh', 'lo': 'lo', 'dtich': 'dtich', 'qh3lr': 'qh3lr', 'ghichu': 'ghichu', 'area': 'area', 'ldlr_vt': 'ldlr_vt', 'htsdd': 'htsdd', 'ldlr': 'ldlr', 'ID': 'ID', });
lyr_BasaltStone_rkk_0.set('fieldImages', {'tk': '', 'kh': '', 'lo': '', 'dtich': '', 'qh3lr': '', 'ghichu': '', 'area': '', 'ldlr_vt': '', 'htsdd': '', 'ldlr': '', 'ID': '', });
lyr_BasaltStone_rkk_0.set('fieldLabels', {'tk': 'inline label - always visible', 'kh': 'inline label - always visible', 'lo': 'no label', 'dtich': 'no label', 'qh3lr': 'no label', 'ghichu': 'no label', 'area': 'no label', 'ldlr_vt': 'inline label - always visible', 'htsdd': 'no label', 'ldlr': 'no label', 'ID': 'no label', });
lyr_BasaltStone_rkk_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});