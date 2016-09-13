# turf-symdiff
Features or portions of features in the input and update features that do not overlap will be written to the output feature class.

### `turf.symdiff(wrap_geojson, input_geojson)`


### Parameters

| parameter | type              | description                                                                              |
| --------- | ----------------- | ---------------------------------------------------------------------------------------- |
| `wrap_geojson` | FeatureCollection           | Wrap FeatureCollection                                                               |
| `input_geojson`    | FeatureCollection | FeatureCollection to be clipped |


### Example


```js
var wrap_geojson={
     "type": "FeatureCollection",
     "features": [{
       "type": "Feature",
       "properties": {},
       "geometry": {
         "type": "Polygon",
         "coordinates": [
           [
             [
               110.85205078124999,
               31.74685416292141
             ],
             [
               110.85205078124999,
               35.04798673426734
             ],
             [
               117.44384765625,
               35.04798673426734
             ],
             [
               117.44384765625,
               31.74685416292141
             ],
             [
               110.85205078124999,
               31.74685416292141
             ]
           ]
         ]
       }
     }]
   };
var input_geojson={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              113.367919921875,
              35.36217605914681
            ],
            [
              111.97265625,
              30.694611546632277
            ],
            [
              116.12548828124999,
              30.93050081760779
            ],
            [
              114.93896484374999,
              35.69299463209881
            ],
            [
              113.367919921875,
              35.36217605914681
            ]
          ]
        ]
      }
    }
  ]
};
var result = turf.symdiff(wrap_geojson, input_geojson);

//=result
```


**Returns** `FeatureCollection`, 

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-symdiff
```

## Tests

```sh
$ npm run test
```

 
