ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([5326.392512, 9140500.789066, 197419.395873, 9487838.442923]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamento_1 = new ol.format.GeoJSON();
var features_Departamento_1 = format_Departamento_1.readFeatures(json_Departamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Departamento_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_1.addFeatures(features_Departamento_1);
var lyr_Departamento_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_1, 
                style: style_Departamento_1,
                popuplayertitle: 'Departamento',
                interactive: true,
                title: '<img src="styles/legend/Departamento_1.png" /> Departamento'
            });
var format_Cajamarca_2 = new ol.format.GeoJSON();
var features_Cajamarca_2 = format_Cajamarca_2.readFeatures(json_Cajamarca_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Cajamarca_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cajamarca_2.addFeatures(features_Cajamarca_2);
var lyr_Cajamarca_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cajamarca_2, 
                style: style_Cajamarca_2,
                popuplayertitle: 'Cajamarca ',
                interactive: true,
                title: '<img src="styles/legend/Cajamarca_2.png" /> Cajamarca '
            });
var format_RUTAS_VIAS_3 = new ol.format.GeoJSON();
var features_RUTAS_VIAS_3 = format_RUTAS_VIAS_3.readFeatures(json_RUTAS_VIAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RUTAS_VIAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTAS_VIAS_3.addFeatures(features_RUTAS_VIAS_3);
var lyr_RUTAS_VIAS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTAS_VIAS_3, 
                style: style_RUTAS_VIAS_3,
                popuplayertitle: 'RUTAS _VIAS ',
                interactive: true,
                title: '<img src="styles/legend/RUTAS_VIAS_3.png" /> RUTAS _VIAS '
            });
var format_RIOS_4 = new ol.format.GeoJSON();
var features_RIOS_4 = format_RIOS_4.readFeatures(json_RIOS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_RIOS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOS_4.addFeatures(features_RIOS_4);
var lyr_RIOS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIOS_4, 
                style: style_RIOS_4,
                popuplayertitle: 'RIOS ',
                interactive: true,
                title: '<img src="styles/legend/RIOS_4.png" /> RIOS '
            });
var format_INSTITUCIONES_5 = new ol.format.GeoJSON();
var features_INSTITUCIONES_5 = format_INSTITUCIONES_5.readFeatures(json_INSTITUCIONES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_INSTITUCIONES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSTITUCIONES_5.addFeatures(features_INSTITUCIONES_5);
var lyr_INSTITUCIONES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSTITUCIONES_5, 
                style: style_INSTITUCIONES_5,
                popuplayertitle: 'INSTITUCIONES ',
                interactive: true,
                title: '<img src="styles/legend/INSTITUCIONES_5.png" /> INSTITUCIONES '
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamento_1.setVisible(true);lyr_Cajamarca_2.setVisible(true);lyr_RUTAS_VIAS_3.setVisible(true);lyr_RIOS_4.setVisible(true);lyr_INSTITUCIONES_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamento_1,lyr_Cajamarca_2,lyr_RUTAS_VIAS_3,lyr_RIOS_4,lyr_INSTITUCIONES_5];
lyr_Departamento_1.set('fieldAliases', {'fid': 'fid', 'NOMBDEP': 'NOMBDEP', 'COUNT': 'COUNT', 'FIRST_IDDP': 'FIRST_IDDP', 'HECTARES': 'HECTARES', });
lyr_Cajamarca_2.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'FIRST_IDPR', 'NOMBPROV': 'NOMBPROV', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'HIPER_VIDEO': 'HIPER_VIDEO', 'HIPER_IMAGEN': 'HIPER_IMAGEN', 'HIPER_WIKI': 'HIPER_WIKI', });
lyr_RUTAS_VIAS_3.set('fieldAliases', {'RODADURA': 'RODADURA', 'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RIOS_4.set('fieldAliases', {'COD_DS11': 'COD_DS11', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_INSTITUCIONES_5.set('fieldAliases', {'CODLOCAL': 'CODLOCAL', 'NOMCPSIG': 'NOMCPSIG', 'FUENTE_LOC': 'FUENTE_LOC', 'FTE_LOCD': 'FTE_LOCD', 'X_LONGITUD': 'X_LONGITUD', 'Y_LATITUD': 'Y_LATITUD', 'CORD_YX': 'CORD_YX', 'NALT_LOCAL': 'NALT_LOCAL', 'CEN_EDU_L': 'CEN_EDU_L', 'CODCPSIG': 'CODCPSIG', });
lyr_Departamento_1.set('fieldImages', {'fid': '', 'NOMBDEP': '', 'COUNT': '', 'FIRST_IDDP': '', 'HECTARES': '', });
lyr_Cajamarca_2.set('fieldImages', {'fid': 'TextEdit', 'COUNT': 'TextEdit', 'FIRST_IDPR': 'TextEdit', 'NOMBPROV': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_DCTO': 'TextEdit', 'LAST_LEY': 'TextEdit', 'FIRST_FECH': 'TextEdit', 'LAST_FECHA': 'TextEdit', 'MIN_SHAPE_': 'TextEdit', 'ha': 'TextEdit', 'HIPER_VIDEO': 'ExternalResource', 'HIPER_IMAGEN': 'ExternalResource', 'HIPER_WIKI': 'ExternalResource', });
lyr_RUTAS_VIAS_3.set('fieldImages', {'RODADURA': '', 'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', 'SENTIDO': '', 'BASE': '', 'DATA': '', 'FECHA_ACTU': '', 'FUENTE': '', 'COD_RODADU': '', 'NOMBDIST': '', 'CAPITAL': '', });
lyr_RIOS_4.set('fieldImages', {'COD_DS11': '', 'COD_DS12': '', 'TRAY_DS12': '', 'TRAY_DS11': '', 'UBIGEO': '', 'DEP': '', 'PROV': '', 'COD_DEP': '', 'COD_PROV': '', 'LONG_KM': '', 'OBS': '', });
lyr_INSTITUCIONES_5.set('fieldImages', {'CODLOCAL': '', 'NOMCPSIG': '', 'FUENTE_LOC': '', 'FTE_LOCD': '', 'X_LONGITUD': '', 'Y_LATITUD': '', 'CORD_YX': '', 'NALT_LOCAL': '', 'CEN_EDU_L': '', 'CODCPSIG': '', });
lyr_Departamento_1.set('fieldLabels', {'fid': 'inline label - always visible', 'NOMBDEP': 'inline label - always visible', 'COUNT': 'inline label - always visible', 'FIRST_IDDP': 'inline label - always visible', 'HECTARES': 'inline label - always visible', });
lyr_Cajamarca_2.set('fieldLabels', {'fid': 'inline label - always visible', 'COUNT': 'inline label - always visible', 'FIRST_IDPR': 'inline label - always visible', 'NOMBPROV': 'inline label - always visible', 'FIRST_NOMB': 'inline label - always visible', 'LAST_DCTO': 'inline label - always visible', 'LAST_LEY': 'inline label - always visible', 'FIRST_FECH': 'inline label - always visible', 'LAST_FECHA': 'inline label - always visible', 'MIN_SHAPE_': 'inline label - always visible', 'ha': 'header label - always visible', 'HIPER_VIDEO': 'header label - visible with data', 'HIPER_IMAGEN': 'inline label - always visible', 'HIPER_WIKI': 'inline label - always visible', });
lyr_RUTAS_VIAS_3.set('fieldLabels', {'RODADURA': 'inline label - always visible', 'COD_DS11': 'inline label - always visible', 'COD_DS12': 'inline label - always visible', 'TRAY_DS12': 'inline label - always visible', 'TRAY_DS11': 'inline label - always visible', 'UBIGEO': 'inline label - always visible', 'DEP': 'inline label - always visible', 'PROV': 'inline label - always visible', 'COD_DEP': 'inline label - always visible', 'COD_PROV': 'inline label - always visible', 'LONG_KM': 'inline label - always visible', 'OBS': 'inline label - always visible', 'SENTIDO': 'inline label - always visible', 'BASE': 'inline label - always visible', 'DATA': 'inline label - always visible', 'FECHA_ACTU': 'inline label - always visible', 'FUENTE': 'inline label - always visible', 'COD_RODADU': 'inline label - always visible', 'NOMBDIST': 'inline label - always visible', 'CAPITAL': 'inline label - always visible', });
lyr_RIOS_4.set('fieldLabels', {'COD_DS11': 'inline label - always visible', 'COD_DS12': 'inline label - always visible', 'TRAY_DS12': 'inline label - always visible', 'TRAY_DS11': 'inline label - always visible', 'UBIGEO': 'inline label - always visible', 'DEP': 'inline label - always visible', 'PROV': 'inline label - always visible', 'COD_DEP': 'inline label - always visible', 'COD_PROV': 'inline label - always visible', 'LONG_KM': 'inline label - always visible', 'OBS': 'inline label - always visible', });
lyr_INSTITUCIONES_5.set('fieldLabels', {'CODLOCAL': 'inline label - always visible', 'NOMCPSIG': 'inline label - always visible', 'FUENTE_LOC': 'inline label - always visible', 'FTE_LOCD': 'inline label - always visible', 'X_LONGITUD': 'inline label - always visible', 'Y_LATITUD': 'inline label - always visible', 'CORD_YX': 'inline label - always visible', 'NALT_LOCAL': 'inline label - always visible', 'CEN_EDU_L': 'inline label - always visible', 'CODCPSIG': 'inline label - always visible', });
lyr_INSTITUCIONES_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});