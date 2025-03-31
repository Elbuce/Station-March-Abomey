var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_March_1 = new ol.format.GeoJSON();
var features_March_1 = format_March_1.readFeatures(json_March_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_March_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_March_1.addFeatures(features_March_1);
var lyr_March_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_March_1, 
                style: style_March_1,
                popuplayertitle: 'Marché',
                interactive: true,
                title: '<img src="styles/legend/March_1.png" /> Marché'
            });
var format_Station_2 = new ol.format.GeoJSON();
var features_Station_2 = format_Station_2.readFeatures(json_Station_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Station_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Station_2.addFeatures(features_Station_2);
var lyr_Station_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Station_2, 
                style: style_Station_2,
                popuplayertitle: 'Station',
                interactive: true,
                title: '<img src="styles/legend/Station_2.png" /> Station'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_March_1.setVisible(true);lyr_Station_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_March_1,lyr_Station_2];
lyr_March_1.set('fieldAliases', {'id': 'id', 'Marché': 'Marché', 'Adresse': 'Adresse', 'Type de marché': 'Type de marché', 'Jour d\'ouverture': 'Jour d\'ouverture', 'heure d\'ouverture': 'heure d\'ouverture', 'produit vendus': 'produit vendus', 'gestion': 'gestion', 'infrastructure': 'infrastructure', 'Accès': 'Accès', 'prix du stand': 'prix du stand', 'remarque': 'remarque', 'arrondissement': 'arrondissement', });
lyr_Station_2.set('fieldAliases', {'id': 'id', 'Station': 'Station', 'Adresse': 'Adresse', 'Compagnie': 'Compagnie', 'Type de ca': 'Type de ca', 'Capacité': 'Capacité', 'Boutique': 'Boutique', 'Lavage': 'Lavage', 'Mécanique': 'Mécanique', 'Mode de pa': 'Mode de pa', 'Nombre de ': 'Nombre de ', 'Heure d\'ou': 'Heure d\'ou', 'Tarif carb': 'Tarif carb', 'Remarque': 'Remarque', 'Arrondisse': 'Arrondisse', });
lyr_March_1.set('fieldImages', {'id': 'TextEdit', 'Marché': 'TextEdit', 'Adresse': 'TextEdit', 'Type de marché': 'TextEdit', 'Jour d\'ouverture': 'TextEdit', 'heure d\'ouverture': 'TextEdit', 'produit vendus': 'TextEdit', 'gestion': 'TextEdit', 'infrastructure': 'TextEdit', 'Accès': 'TextEdit', 'prix du stand': 'TextEdit', 'remarque': 'TextEdit', 'arrondissement': 'TextEdit', });
lyr_Station_2.set('fieldImages', {'id': 'TextEdit', 'Station': 'TextEdit', 'Adresse': 'TextEdit', 'Compagnie': 'TextEdit', 'Type de ca': 'TextEdit', 'Capacité': 'TextEdit', 'Boutique': 'TextEdit', 'Lavage': 'TextEdit', 'Mécanique': 'TextEdit', 'Mode de pa': 'TextEdit', 'Nombre de ': 'TextEdit', 'Heure d\'ou': 'TextEdit', 'Tarif carb': 'TextEdit', 'Remarque': 'TextEdit', 'Arrondisse': 'TextEdit', });
lyr_March_1.set('fieldLabels', {'id': 'header label - visible with data', 'Marché': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'Type de marché': 'header label - visible with data', 'Jour d\'ouverture': 'header label - visible with data', 'heure d\'ouverture': 'header label - visible with data', 'produit vendus': 'header label - visible with data', 'gestion': 'header label - visible with data', 'infrastructure': 'header label - visible with data', 'Accès': 'header label - visible with data', 'prix du stand': 'header label - visible with data', 'remarque': 'header label - visible with data', 'arrondissement': 'header label - visible with data', });
lyr_Station_2.set('fieldLabels', {'id': 'header label - visible with data', 'Station': 'header label - visible with data', 'Adresse': 'header label - visible with data', 'Compagnie': 'header label - visible with data', 'Type de ca': 'header label - visible with data', 'Capacité': 'header label - visible with data', 'Boutique': 'header label - visible with data', 'Lavage': 'header label - visible with data', 'Mécanique': 'header label - visible with data', 'Mode de pa': 'header label - visible with data', 'Nombre de ': 'header label - visible with data', 'Heure d\'ou': 'header label - visible with data', 'Tarif carb': 'header label - visible with data', 'Remarque': 'header label - visible with data', 'Arrondisse': 'header label - visible with data', });
lyr_Station_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});