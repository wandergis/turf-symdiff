//实现两个geojson之间的交集取反,前者大，后者小
var flatten = require('turf-flatten');

module.exports = function symdiff(wrap_geojson, input_geojson) {
    var wrap_geojson = flatten(wrap_geojson);
    var input_geojson = flatten(input_geojson);
    var output_geojson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": []
            }
        }]
    };
    wrap_geojson.features.forEach(function(geo1, index) {
        geo1.geometry.coordinates.forEach(function(coord, index) {
            output_geojson.features[0].geometry.coordinates.push(coord);
        })
    });
    input_geojson.features.forEach(function(geo2, index) {
        geo2.geometry.coordinates.forEach(function(coord, index) {
            output_geojson.features[0].geometry.coordinates.push(coord);
        })
    });
    return output_geojson;
};
