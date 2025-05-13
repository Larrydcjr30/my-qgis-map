var wms_layers = [];

var format_Provinces_0 = new ol.format.GeoJSON();
var features_Provinces_0 = format_Provinces_0.readFeatures(json_Provinces_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provinces_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provinces_0.addFeatures(features_Provinces_0);
var lyr_Provinces_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provinces_0, 
                style: style_Provinces_0,
                popuplayertitle: 'Provinces',
                interactive: true,
                title: '<img src="styles/legend/Provinces_0.png" /> Provinces'
            });
var format_Country_1 = new ol.format.GeoJSON();
var features_Country_1 = format_Country_1.readFeatures(json_Country_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Country_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_1.addFeatures(features_Country_1);
var lyr_Country_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Country_1, 
                style: style_Country_1,
                popuplayertitle: 'Country',
                interactive: true,
                title: '<img src="styles/legend/Country_1.png" /> Country'
            });

lyr_Provinces_0.setVisible(true);lyr_Country_1.setVisible(true);
var layersList = [lyr_Provinces_0,lyr_Country_1];
lyr_Provinces_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'PROVINCE': 'PROVINCE', 'REGION': 'REGION', });
lyr_Country_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_ISO': 'NAME_ISO', 'NAME_FAO': 'NAME_FAO', 'NAME_LOCAL': 'NAME_LOCAL', 'NAME_OBSOL': 'NAME_OBSOL', 'NAME_VARIA': 'NAME_VARIA', 'NAME_NONLA': 'NAME_NONLA', 'NAME_FRENC': 'NAME_FRENC', 'NAME_SPANI': 'NAME_SPANI', 'NAME_RUSSI': 'NAME_RUSSI', 'NAME_ARABI': 'NAME_ARABI', 'NAME_CHINE': 'NAME_CHINE', 'WASPARTOF': 'WASPARTOF', 'CONTAINS': 'CONTAINS', 'SOVEREIGN': 'SOVEREIGN', 'ISO2': 'ISO2', 'WWW': 'WWW', 'FIPS': 'FIPS', 'ISON': 'ISON', 'VALIDFR': 'VALIDFR', 'VALIDTO': 'VALIDTO', 'EUmember': 'EUmember', });
lyr_Provinces_0.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'PROVINCE': '', 'REGION': '', });
lyr_Country_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_ENGLI': '', 'NAME_ISO': '', 'NAME_FAO': '', 'NAME_LOCAL': '', 'NAME_OBSOL': '', 'NAME_VARIA': '', 'NAME_NONLA': '', 'NAME_FRENC': '', 'NAME_SPANI': '', 'NAME_RUSSI': '', 'NAME_ARABI': '', 'NAME_CHINE': '', 'WASPARTOF': '', 'CONTAINS': '', 'SOVEREIGN': '', 'ISO2': '', 'WWW': '', 'FIPS': '', 'ISON': '', 'VALIDFR': '', 'VALIDTO': '', 'EUmember': '', });
lyr_Provinces_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'PROVINCE': 'no label', 'REGION': 'no label', });
lyr_Country_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_ENGLI': 'no label', 'NAME_ISO': 'no label', 'NAME_FAO': 'no label', 'NAME_LOCAL': 'no label', 'NAME_OBSOL': 'no label', 'NAME_VARIA': 'no label', 'NAME_NONLA': 'no label', 'NAME_FRENC': 'no label', 'NAME_SPANI': 'no label', 'NAME_RUSSI': 'no label', 'NAME_ARABI': 'no label', 'NAME_CHINE': 'no label', 'WASPARTOF': 'no label', 'CONTAINS': 'no label', 'SOVEREIGN': 'no label', 'ISO2': 'no label', 'WWW': 'no label', 'FIPS': 'no label', 'ISON': 'no label', 'VALIDFR': 'no label', 'VALIDTO': 'no label', 'EUmember': 'no label', });
lyr_Country_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});