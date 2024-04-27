var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ke_charcoalsources_1 = new ol.format.GeoJSON();
var features_ke_charcoalsources_1 = format_ke_charcoalsources_1.readFeatures(json_ke_charcoalsources_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ke_charcoalsources_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ke_charcoalsources_1.addFeatures(features_ke_charcoalsources_1);
var lyr_ke_charcoalsources_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ke_charcoalsources_1, 
                style: style_ke_charcoalsources_1,
                popuplayertitle: "ke_charcoal-sources",
                interactive: true,
                title: '<img src="styles/legend/ke_charcoalsources_1.png" /> ke_charcoal-sources'
            });
var format_ken_admbnda_adm1_iebc_20191031_2 = new ol.format.GeoJSON();
var features_ken_admbnda_adm1_iebc_20191031_2 = format_ken_admbnda_adm1_iebc_20191031_2.readFeatures(json_ken_admbnda_adm1_iebc_20191031_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ken_admbnda_adm1_iebc_20191031_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ken_admbnda_adm1_iebc_20191031_2.addFeatures(features_ken_admbnda_adm1_iebc_20191031_2);
var lyr_ken_admbnda_adm1_iebc_20191031_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ken_admbnda_adm1_iebc_20191031_2, 
                style: style_ken_admbnda_adm1_iebc_20191031_2,
                popuplayertitle: "ken_admbnda_adm1_iebc_20191031",
                interactive: true,
                title: '<img src="styles/legend/ken_admbnda_adm1_iebc_20191031_2.png" /> ken_admbnda_adm1_iebc_20191031'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ke_charcoalsources_1.setVisible(true);lyr_ken_admbnda_adm1_iebc_20191031_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ke_charcoalsources_1,lyr_ken_admbnda_adm1_iebc_20191031_2];
lyr_ke_charcoalsources_1.set('fieldAliases', {'DISTNAME': 'DISTNAME', 'NBR_PRDCRS': 'NBR_PRDCRS', 'PRCT_OWN': 'PRCT_OWN', 'PRCT_PRIV': 'PRCT_PRIV', 'PRCT_GVT': 'PRCT_GVT', 'PRCT_COMCT': 'PRCT_COMCT', });
lyr_ken_admbnda_adm1_iebc_20191031_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_ke_charcoalsources_1.set('fieldImages', {'DISTNAME': 'TextEdit', 'NBR_PRDCRS': 'Range', 'PRCT_OWN': 'TextEdit', 'PRCT_PRIV': 'TextEdit', 'PRCT_GVT': 'TextEdit', 'PRCT_COMCT': 'TextEdit', });
lyr_ken_admbnda_adm1_iebc_20191031_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_ke_charcoalsources_1.set('fieldLabels', {'DISTNAME': 'no label', 'NBR_PRDCRS': 'inline label - always visible', 'PRCT_OWN': 'no label', 'PRCT_PRIV': 'no label', 'PRCT_GVT': 'inline label - always visible', 'PRCT_COMCT': 'no label', });
lyr_ken_admbnda_adm1_iebc_20191031_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_ken_admbnda_adm1_iebc_20191031_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});