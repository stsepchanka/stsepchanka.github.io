webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var router_1 = __webpack_require__(24);
	var http_1 = __webpack_require__(56);
	__webpack_require__(57);
	//import 'rxjs/add/observable/throw';
	//import 'rxjs/add/operator/catch';
	//import 'rxjs/add/operator/map';
	var core_2 = __webpack_require__(354);
	var app_component_1 = __webpack_require__(375);
	var cities_component_1 = __webpack_require__(378);
	var city_component_1 = __webpack_require__(380);
	var map_component_1 = __webpack_require__(383);
	var weatherInCity_component_1 = __webpack_require__(384);
	var pagenotfound_component_1 = __webpack_require__(386);
	var kelvin2celsius_pipe_1 = __webpack_require__(382);
	var temperature_pipe_1 = __webpack_require__(387);
	var appRoutes = [
	    { path: 'cities', component: cities_component_1.CitiesComponent },
	    { path: 'map', component: map_component_1.MapComponent },
	    { path: 'weather-in-city', component: weatherInCity_component_1.WeatherInCityComponent },
	    { path: '', component: cities_component_1.CitiesComponent },
	    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
	];
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                http_1.HttpModule,
	                router_1.RouterModule.forRoot(appRoutes),
	                core_2.AgmCoreModule.forRoot({
	                    apiKey: 'AIzaSyDatH1l956GXlJ4vu1EfVfJSGoKni2-Lxk'
	                })
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                cities_component_1.CitiesComponent,
	                city_component_1.CityComponent,
	                map_component_1.MapComponent,
	                weatherInCity_component_1.WeatherInCityComponent,
	                pagenotfound_component_1.PageNotFoundComponent,
	                kelvin2celsius_pipe_1.Kelvin2celsiusPipe,
	                temperature_pipe_1.TemperaturePipe
	            ],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// main modules
	__export(__webpack_require__(355));
	__export(__webpack_require__(370));
	// Google Maps types
	// core module
	// we explicitly export the module here to prevent this Ionic 2 bug:
	// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
	var core_module_1 = __webpack_require__(374);
	exports.AgmCoreModule = core_module_1.AgmCoreModule;
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var google_map_1 = __webpack_require__(356);
	exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
	var google_map_circle_1 = __webpack_require__(364);
	exports.SebmGoogleMapCircle = google_map_circle_1.SebmGoogleMapCircle;
	var google_map_info_window_1 = __webpack_require__(365);
	exports.SebmGoogleMapInfoWindow = google_map_info_window_1.SebmGoogleMapInfoWindow;
	var google_map_marker_1 = __webpack_require__(366);
	exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
	var google_map_polygon_1 = __webpack_require__(367);
	exports.SebmGoogleMapPolygon = google_map_polygon_1.SebmGoogleMapPolygon;
	var google_map_polyline_1 = __webpack_require__(368);
	exports.SebmGoogleMapPolyline = google_map_polyline_1.SebmGoogleMapPolyline;
	var google_map_polyline_point_1 = __webpack_require__(369);
	exports.SebmGoogleMapPolylinePoint = google_map_polyline_point_1.SebmGoogleMapPolylinePoint;
	//# sourceMappingURL=directives.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var google_maps_api_wrapper_1 = __webpack_require__(357);
	var circle_manager_1 = __webpack_require__(359);
	var info_window_manager_1 = __webpack_require__(360);
	var marker_manager_1 = __webpack_require__(361);
	var polygon_manager_1 = __webpack_require__(362);
	var polyline_manager_1 = __webpack_require__(363);
	/**
	 * SebMGoogleMap renders a Google Map.
	 * **Important note**: To be able see a map in the browser, you have to define a height for the CSS
	 * class `sebm-google-map-container`.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from '@angular/core';
	 * import { SebmGoogleMap } from 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMap = (function () {
	    function SebmGoogleMap(_elem, _mapsWrapper) {
	        this._elem = _elem;
	        this._mapsWrapper = _mapsWrapper;
	        /**
	         * The longitude that defines the center of the map.
	         */
	        this.longitude = 0;
	        /**
	         * The latitude that defines the center of the map.
	         */
	        this.latitude = 0;
	        /**
	         * The zoom level of the map. The default zoom level is 8.
	         */
	        this.zoom = 8;
	        /**
	         * Enables/disables if map is draggable.
	         */
	        this.draggable = true;
	        /**
	         * Enables/disables zoom and center on double click. Enabled by default.
	         */
	        this.disableDoubleClickZoom = false;
	        /**
	         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
	         * value cannot get updated.
	         */
	        this.disableDefaultUI = false;
	        /**
	         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
	         */
	        this.scrollwheel = true;
	        /**
	         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
	         * enabled by default.
	         */
	        this.keyboardShortcuts = true;
	        /**
	         * The enabled/disabled state of the Zoom control.
	         */
	        this.zoomControl = true;
	        /**
	         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
	         * modes, these styles will only apply to labels and geometry.
	         */
	        this.styles = [];
	        /**
	         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
	         * used to
	         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
	         */
	        this.usePanning = false;
	        /**
	         * The initial enabled/disabled state of the Street View Pegman control.
	         * This control is part of the default UI, and should be set to false when displaying a map type
	         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
	         */
	        this.streetViewControl = true;
	        /**
	         * Sets the viewport to contain the given bounds.
	         */
	        this.fitBounds = null;
	        /**
	         * The initial enabled/disabled state of the Scale control. This is disabled by default.
	         */
	        this.scaleControl = false;
	        /**
	         * The initial enabled/disabled state of the Map type control.
	         */
	        this.mapTypeControl = false;
	        this._observableSubscriptions = [];
	        /**
	         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
	         * marker or infoWindow).
	         */
	        this.mapClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
	         * on a marker or infoWindow).
	         */
	        this.mapRightClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
	         * on a marker or infoWindow).
	         */
	        this.mapDblClick = new core_1.EventEmitter();
	        /**
	         * This event emitter is fired when the map center changes.
	         */
	        this.centerChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the viewport bounds have changed.
	         */
	        this.boundsChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the map becomes idle after panning or zooming.
	         */
	        this.idle = new core_1.EventEmitter();
	        /**
	         * This event is fired when the zoom level has changed.
	         */
	        this.zoomChange = new core_1.EventEmitter();
	    }
	    /** @internal */
	    SebmGoogleMap.prototype.ngOnInit = function () {
	        // todo: this should be solved with a new component and a viewChild decorator
	        var container = this._elem.nativeElement.querySelector('.sebm-google-map-container-inner');
	        this._initMapInstance(container);
	    };
	    SebmGoogleMap.prototype._initMapInstance = function (el) {
	        this._mapsWrapper.createMap(el, {
	            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
	            zoom: this.zoom,
	            disableDefaultUI: this.disableDefaultUI,
	            backgroundColor: this.backgroundColor,
	            draggable: this.draggable,
	            draggableCursor: this.draggableCursor,
	            draggingCursor: this.draggingCursor,
	            keyboardShortcuts: this.keyboardShortcuts,
	            zoomControl: this.zoomControl,
	            styles: this.styles,
	            streetViewControl: this.streetViewControl,
	            scaleControl: this.scaleControl,
	            mapTypeControl: this.mapTypeControl
	        });
	        // register event listeners
	        this._handleMapCenterChange();
	        this._handleMapZoomChange();
	        this._handleMapMouseEvents();
	        this._handleBoundsChange();
	        this._handleIdleEvent();
	    };
	    /** @internal */
	    SebmGoogleMap.prototype.ngOnDestroy = function () {
	        // unsubscribe all registered observable subscriptions
	        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    /* @internal */
	    SebmGoogleMap.prototype.ngOnChanges = function (changes) {
	        this._updateMapOptionsChanges(changes);
	        this._updatePosition(changes);
	    };
	    SebmGoogleMap.prototype._updateMapOptionsChanges = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMap._mapOptionsAttributes.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        this._mapsWrapper.setMapOptions(options);
	    };
	    /**
	     * Triggers a resize event on the google map instance.
	     * Returns a promise that gets resolved after the event was triggered.
	     */
	    SebmGoogleMap.prototype.triggerResize = function () {
	        var _this = this;
	        // Note: When we would trigger the resize event and show the map in the same turn (which is a
	        // common case for triggering a resize event), then the resize event would not
	        // work (to show the map), so we trigger the event in a timeout.
	        return new Promise(function (resolve) {
	            setTimeout(function () { return _this._mapsWrapper.triggerMapEvent('resize').then(function () { return resolve(); }); });
	        });
	    };
	    SebmGoogleMap.prototype._updatePosition = function (changes) {
	        if (changes['latitude'] == null && changes['longitude'] == null &&
	            changes['fitBounds'] == null) {
	            // no position update needed
	            return;
	        }
	        // we prefer fitBounds in changes
	        if (changes['fitBounds'] && this.fitBounds != null) {
	            this._fitBounds();
	            return;
	        }
	        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
	            return;
	        }
	        var newCenter = {
	            lat: this.latitude,
	            lng: this.longitude,
	        };
	        if (this.usePanning) {
	            this._mapsWrapper.panTo(newCenter);
	        }
	        else {
	            this._mapsWrapper.setCenter(newCenter);
	        }
	    };
	    SebmGoogleMap.prototype._fitBounds = function () {
	        if (this.usePanning) {
	            this._mapsWrapper.panToBounds(this.fitBounds);
	            return;
	        }
	        this._mapsWrapper.fitBounds(this.fitBounds);
	    };
	    SebmGoogleMap.prototype._handleMapCenterChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
	            _this._mapsWrapper.getCenter().then(function (center) {
	                _this.latitude = center.lat();
	                _this.longitude = center.lng();
	                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
	            });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleBoundsChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
	            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleMapZoomChange = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
	            _this._mapsWrapper.getZoom().then(function (z) {
	                _this.zoom = z;
	                _this.zoomChange.emit(z);
	            });
	        });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleIdleEvent = function () {
	        var _this = this;
	        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
	        this._observableSubscriptions.push(s);
	    };
	    SebmGoogleMap.prototype._handleMapMouseEvents = function () {
	        var _this = this;
	        var events = [
	            { name: 'click', emitter: this.mapClick },
	            { name: 'rightclick', emitter: this.mapRightClick },
	        ];
	        events.forEach(function (e) {
	            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
	                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
	                e.emitter.emit(value);
	            });
	            _this._observableSubscriptions.push(s);
	        });
	    };
	    /**
	     * Map option attributes that can change over time
	     */
	    SebmGoogleMap._mapOptionsAttributes = [
	        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
	        'keyboardShortcuts', 'zoomControl', 'styles', 'streetViewControl', 'zoom', 'mapTypeControl'
	    ];
	    SebmGoogleMap.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'sebm-google-map',
	                    providers: [
	                        google_maps_api_wrapper_1.GoogleMapsAPIWrapper, marker_manager_1.MarkerManager, info_window_manager_1.InfoWindowManager, circle_manager_1.CircleManager, polyline_manager_1.PolylineManager,
	                        polygon_manager_1.PolygonManager
	                    ],
	                    inputs: [
	                        'longitude', 'latitude', 'zoom', 'draggable: mapDraggable', 'disableDoubleClickZoom',
	                        'disableDefaultUI', 'scrollwheel', 'backgroundColor', 'draggableCursor', 'draggingCursor',
	                        'keyboardShortcuts', 'zoomControl', 'styles', 'usePanning', 'streetViewControl', 'fitBounds',
	                        'scaleControl', 'mapTypeControl'
	                    ],
	                    outputs: [
	                        'mapClick', 'mapRightClick', 'mapDblClick', 'centerChange', 'idle', 'boundsChange', 'zoomChange'
	                    ],
	                    host: { '[class.sebm-google-map-container]': 'true' },
	                    styles: ["\n    .sebm-google-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .sebm-google-map-content {\n      display:none;\n    }\n  "],
	                    template: "\n    <div class='sebm-google-map-container-inner'></div>\n    <div class='sebm-google-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMap.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	    ];
	    return SebmGoogleMap;
	}());
	exports.SebmGoogleMap = SebmGoogleMap;
	//# sourceMappingURL=google-map.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var maps_api_loader_1 = __webpack_require__(358);
	/**
	 * Wrapper class that handles the communication with the Google Maps Javascript
	 * API v3
	 */
	var GoogleMapsAPIWrapper = (function () {
	    function GoogleMapsAPIWrapper(_loader, _zone) {
	        var _this = this;
	        this._loader = _loader;
	        this._zone = _zone;
	        this._map =
	            new Promise(function (resolve) { _this._mapResolver = resolve; });
	    }
	    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
	        var _this = this;
	        return this._loader.load().then(function () {
	            var map = new google.maps.Map(el, mapOptions);
	            _this._mapResolver(map);
	            return;
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
	        this._map.then(function (m) { m.setOptions(options); });
	    };
	    /**
	     * Creates a google map marker with the map context
	     */
	    GoogleMapsAPIWrapper.prototype.createMarker = function (options) {
	        if (options === void 0) { options = {}; }
	        return this._map.then(function (map) {
	            options.map = map;
	            return new google.maps.Marker(options);
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
	        return this._map.then(function () { return new google.maps.InfoWindow(options); });
	    };
	    /**
	     * Creates a google.map.Circle for the current map.
	     */
	    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
	        return this._map.then(function (map) {
	            options.map = map;
	            return new google.maps.Circle(options);
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
	        return this.getNativeMap().then(function (map) {
	            var line = new google.maps.Polyline(options);
	            line.setMap(map);
	            return line;
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
	        return this.getNativeMap().then(function (map) {
	            var polygon = new google.maps.Polygon(options);
	            polygon.setMap(map);
	            return polygon;
	        });
	    };
	    /**
	     * Determines if given coordinates are insite a Polygon path.
	     */
	    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
	        return google.maps.geometry.poly.containsLocation(latLng, polygon);
	    };
	    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._map.then(function (m) {
	                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
	            });
	        });
	    };
	    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
	        return this._map.then(function (map) { return map.setCenter(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
	    GoogleMapsAPIWrapper.prototype.getBounds = function () {
	        return this._map.then(function (map) { return map.getBounds(); });
	    };
	    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
	        return this._map.then(function (map) { return map.setZoom(zoom); });
	    };
	    GoogleMapsAPIWrapper.prototype.getCenter = function () {
	        return this._map.then(function (map) { return map.getCenter(); });
	    };
	    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
	        return this._map.then(function (map) { return map.panTo(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
	        return this._map.then(function (map) { return map.fitBounds(latLng); });
	    };
	    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
	        return this._map.then(function (map) { return map.panToBounds(latLng); });
	    };
	    /**
	     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
	     */
	    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
	    /**
	     * Triggers the given event name on the map instance.
	     */
	    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
	        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
	    };
	    GoogleMapsAPIWrapper.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    GoogleMapsAPIWrapper.ctorParameters = [
	        { type: maps_api_loader_1.MapsAPILoader, },
	        { type: core_1.NgZone, },
	    ];
	    return GoogleMapsAPIWrapper;
	}());
	exports.GoogleMapsAPIWrapper = GoogleMapsAPIWrapper;
	//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var MapsAPILoader = (function () {
	    function MapsAPILoader() {
	    }
	    MapsAPILoader.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    MapsAPILoader.ctorParameters = [];
	    return MapsAPILoader;
	}());
	exports.MapsAPILoader = MapsAPILoader;
	//# sourceMappingURL=maps-api-loader.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(357);
	var CircleManager = (function () {
	    function CircleManager(_apiWrapper, _zone) {
	        this._apiWrapper = _apiWrapper;
	        this._zone = _zone;
	        this._circles = new Map();
	    }
	    CircleManager.prototype.addCircle = function (circle) {
	        this._circles.set(circle, this._apiWrapper.createCircle({
	            center: { lat: circle.latitude, lng: circle.longitude },
	            clickable: circle.clickable,
	            draggable: circle.draggable,
	            editable: circle.editable,
	            fillColor: circle.fillColor,
	            fillOpacity: circle.fillOpacity,
	            radius: circle.radius,
	            strokeColor: circle.strokeColor,
	            strokeOpacity: circle.strokeOpacity,
	            strokePosition: circle.strokePosition,
	            strokeWeight: circle.strokeWeight,
	            visible: circle.visible,
	            zIndex: circle.zIndex
	        }));
	    };
	    ;
	    /**
	     * Removes the given circle from the map.
	     */
	    CircleManager.prototype.removeCircle = function (circle) {
	        var _this = this;
	        return this._circles.get(circle).then(function (c) {
	            c.setMap(null);
	            _this._circles.delete(circle);
	        });
	    };
	    CircleManager.prototype.setOptions = function (circle, options) {
	        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
	    };
	    ;
	    CircleManager.prototype.getBounds = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
	    };
	    ;
	    CircleManager.prototype.getCenter = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
	    };
	    ;
	    CircleManager.prototype.getRadius = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
	    };
	    CircleManager.prototype.setCenter = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
	    };
	    ;
	    CircleManager.prototype.setEditable = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
	    };
	    ;
	    CircleManager.prototype.setDraggable = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
	    };
	    ;
	    CircleManager.prototype.setVisible = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
	    };
	    ;
	    CircleManager.prototype.setRadius = function (circle) {
	        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
	    };
	    ;
	    CircleManager.prototype.createEventObservable = function (eventName, circle) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            var listener = null;
	            _this._circles.get(circle).then(function (c) {
	                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	            return function () {
	                if (listener !== null) {
	                    listener.remove();
	                }
	            };
	        });
	    };
	    CircleManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    CircleManager.ctorParameters = [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ];
	    return CircleManager;
	}());
	exports.CircleManager = CircleManager;
	//# sourceMappingURL=circle-manager.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var google_maps_api_wrapper_1 = __webpack_require__(357);
	var marker_manager_1 = __webpack_require__(361);
	var InfoWindowManager = (function () {
	    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._markerManager = _markerManager;
	        this._infoWindows = new Map();
	    }
	    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
	        var _this = this;
	        var iWindow = this._infoWindows.get(infoWindow);
	        if (iWindow == null) {
	            // info window already deleted
	            return Promise.resolve();
	        }
	        return iWindow.then(function (i) {
	            return _this._zone.run(function () {
	                i.close();
	                _this._infoWindows.delete(infoWindow);
	            });
	        });
	    };
	    InfoWindowManager.prototype.setPosition = function (infoWindow) {
	        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
	            lat: infoWindow.latitude,
	            lng: infoWindow.longitude
	        }); });
	    };
	    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
	        return this._infoWindows.get(infoWindow)
	            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
	    };
	    InfoWindowManager.prototype.open = function (infoWindow) {
	        var _this = this;
	        return this._infoWindows.get(infoWindow).then(function (w) {
	            if (infoWindow.hostMarker != null) {
	                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
	                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
	                });
	            }
	            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
	        });
	    };
	    InfoWindowManager.prototype.close = function (infoWindow) {
	        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
	    };
	    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
	        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
	    };
	    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
	        var options = {
	            content: infoWindow.content,
	            maxWidth: infoWindow.maxWidth,
	            zIndex: infoWindow.zIndex,
	        };
	        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
	            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
	        }
	        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
	        this._infoWindows.set(infoWindow, infoWindowPromise);
	    };
	    InfoWindowManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    InfoWindowManager.ctorParameters = [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	        { type: marker_manager_1.MarkerManager, },
	    ];
	    return InfoWindowManager;
	}());
	exports.InfoWindowManager = InfoWindowManager;
	//# sourceMappingURL=info-window-manager.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(357);
	var MarkerManager = (function () {
	    function MarkerManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._markers = new Map();
	    }
	    MarkerManager.prototype.deleteMarker = function (marker) {
	        var _this = this;
	        var m = this._markers.get(marker);
	        if (m == null) {
	            // marker already deleted
	            return Promise.resolve();
	        }
	        return m.then(function (m) {
	            return _this._zone.run(function () {
	                m.setMap(null);
	                _this._markers.delete(marker);
	            });
	        });
	    };
	    MarkerManager.prototype.updateMarkerPosition = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
	    };
	    MarkerManager.prototype.updateTitle = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
	    };
	    MarkerManager.prototype.updateLabel = function (marker) {
	        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
	    };
	    MarkerManager.prototype.updateDraggable = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
	    };
	    MarkerManager.prototype.updateIcon = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
	    };
	    MarkerManager.prototype.updateOpacity = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
	    };
	    MarkerManager.prototype.updateVisible = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
	    };
	    MarkerManager.prototype.updateZIndex = function (marker) {
	        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
	    };
	    MarkerManager.prototype.addMarker = function (marker) {
	        var markerPromise = this._mapsWrapper.createMarker({
	            position: { lat: marker.latitude, lng: marker.longitude },
	            label: marker.label,
	            draggable: marker.draggable,
	            icon: marker.iconUrl,
	            opacity: marker.opacity,
	            visible: marker.visible,
	            zIndex: marker.zIndex,
	            title: marker.title
	        });
	        this._markers.set(marker, markerPromise);
	    };
	    MarkerManager.prototype.getNativeMarker = function (marker) {
	        return this._markers.get(marker);
	    };
	    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._markers.get(marker).then(function (m) {
	                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    MarkerManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    MarkerManager.ctorParameters = [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ];
	    return MarkerManager;
	}());
	exports.MarkerManager = MarkerManager;
	//# sourceMappingURL=marker-manager.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(357);
	var PolygonManager = (function () {
	    function PolygonManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._polygons = new Map();
	    }
	    PolygonManager.prototype.addPolygon = function (path) {
	        var polygonPromise = this._mapsWrapper.createPolygon({
	            clickable: path.clickable,
	            draggable: path.draggable,
	            editable: path.editable,
	            fillColor: path.fillColor,
	            fillOpacity: path.fillOpacity,
	            geodesic: path.geodesic,
	            paths: path.paths,
	            strokeColor: path.strokeColor,
	            strokeOpacity: path.strokeOpacity,
	            strokeWeight: path.strokeWeight,
	            visible: path.visible,
	            zIndex: path.zIndex,
	        });
	        this._polygons.set(path, polygonPromise);
	    };
	    PolygonManager.prototype.updatePolygon = function (polygon) {
	        var _this = this;
	        var m = this._polygons.get(polygon);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
	    };
	    PolygonManager.prototype.setPolygonOptions = function (path, options) {
	        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
	    };
	    PolygonManager.prototype.deletePolygon = function (paths) {
	        var _this = this;
	        var m = this._polygons.get(paths);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) {
	            return _this._zone.run(function () {
	                l.setMap(null);
	                _this._polygons.delete(paths);
	            });
	        });
	    };
	    PolygonManager.prototype.createEventObservable = function (eventName, path) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._polygons.get(path).then(function (l) {
	                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    PolygonManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    PolygonManager.ctorParameters = [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ];
	    return PolygonManager;
	}());
	exports.PolygonManager = PolygonManager;
	//# sourceMappingURL=polygon-manager.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(357);
	var PolylineManager = (function () {
	    function PolylineManager(_mapsWrapper, _zone) {
	        this._mapsWrapper = _mapsWrapper;
	        this._zone = _zone;
	        this._polylines = new Map();
	    }
	    PolylineManager._convertPoints = function (line) {
	        var path = line._getPoints().map(function (point) {
	            return { lat: point.latitude, lng: point.longitude };
	        });
	        return path;
	    };
	    PolylineManager.prototype.addPolyline = function (line) {
	        var path = PolylineManager._convertPoints(line);
	        var polylinePromise = this._mapsWrapper.createPolyline({
	            clickable: line.clickable,
	            draggable: line.draggable,
	            editable: line.editable,
	            geodesic: line.geodesic,
	            strokeColor: line.strokeColor,
	            strokeOpacity: line.strokeOpacity,
	            strokeWeight: line.strokeWeight,
	            visible: line.visible,
	            zIndex: line.zIndex,
	            path: path
	        });
	        this._polylines.set(line, polylinePromise);
	    };
	    PolylineManager.prototype.updatePolylinePoints = function (line) {
	        var _this = this;
	        var path = PolylineManager._convertPoints(line);
	        var m = this._polylines.get(line);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
	    };
	    PolylineManager.prototype.setPolylineOptions = function (line, options) {
	        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
	    };
	    PolylineManager.prototype.deletePolyline = function (line) {
	        var _this = this;
	        var m = this._polylines.get(line);
	        if (m == null) {
	            return Promise.resolve();
	        }
	        return m.then(function (l) {
	            return _this._zone.run(function () {
	                l.setMap(null);
	                _this._polylines.delete(line);
	            });
	        });
	    };
	    PolylineManager.prototype.createEventObservable = function (eventName, line) {
	        var _this = this;
	        return Observable_1.Observable.create(function (observer) {
	            _this._polylines.get(line).then(function (l) {
	                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
	            });
	        });
	    };
	    PolylineManager.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    PolylineManager.ctorParameters = [
	        { type: google_maps_api_wrapper_1.GoogleMapsAPIWrapper, },
	        { type: core_1.NgZone, },
	    ];
	    return PolylineManager;
	}());
	exports.PolylineManager = PolylineManager;
	//# sourceMappingURL=polyline-manager.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var circle_manager_1 = __webpack_require__(359);
	var SebmGoogleMapCircle = (function () {
	    function SebmGoogleMapCircle(_manager) {
	        this._manager = _manager;
	        /**
	         * Indicates whether this Circle handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this circle over the map. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this circle by dragging the control points shown at
	         * the center and around the circumference of the circle. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * The radius in meters on the Earth's surface.
	         */
	        this.radius = 0;
	        /**
	         * The stroke position. Defaults to CENTER.
	         * This property is not supported on Internet Explorer 8 and earlier.
	         */
	        this.strokePosition = 'CENTER';
	        /**
	         * The stroke width in pixels.
	         */
	        this.strokeWeight = 0;
	        /**
	         * Whether this circle is visible on the map. Defaults to true.
	         */
	        this.visible = true;
	        /**
	         * This event is fired when the circle's center is changed.
	         */
	        this.centerChange = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user clicks on the circle.
	         */
	        this.circleClick = new core_1.EventEmitter();
	        /**
	         * This event emitter gets emitted when the user clicks on the circle.
	         */
	        this.circleDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the circle.
	         */
	        this.drag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the circle.
	         */
	        this.dragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the circle.
	         */
	        this.dragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the circle.
	         */
	        this.mouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the circle.
	         */
	        this.mouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on circle mouseout.
	         */
	        this.mouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on circle mouseover.
	         */
	        this.mouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mouseup event is fired on the circle.
	         */
	        this.mouseUp = new core_1.EventEmitter();
	        /**
	         * This event is fired when the circle's radius is changed.
	         */
	        this.radiusChange = new core_1.EventEmitter();
	        /**
	         * This event is fired when the circle is right-clicked on.
	         */
	        this.rightClick = new core_1.EventEmitter();
	        this._circleAddedToManager = false;
	        this._eventSubscriptions = [];
	    }
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnInit = function () {
	        this._manager.addCircle(this);
	        this._circleAddedToManager = true;
	        this._registerEventListeners();
	    };
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnChanges = function (changes) {
	        if (!this._circleAddedToManager) {
	            return;
	        }
	        if (changes['latitude'] || changes['longitude']) {
	            this._manager.setCenter(this);
	        }
	        if (changes['editable']) {
	            this._manager.setEditable(this);
	        }
	        if (changes['draggable']) {
	            this._manager.setDraggable(this);
	        }
	        if (changes['visible']) {
	            this._manager.setVisible(this);
	        }
	        if (changes['radius']) {
	            this._manager.setRadius(this);
	        }
	        this._updateCircleOptionsChanges(changes);
	    };
	    SebmGoogleMapCircle.prototype._updateCircleOptionsChanges = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapCircle._mapOptions.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        if (optionKeys.length > 0) {
	            this._manager.setOptions(this, options);
	        }
	    };
	    SebmGoogleMapCircle.prototype._registerEventListeners = function () {
	        var _this = this;
	        var events = new Map();
	        events.set('center_changed', this.centerChange);
	        events.set('click', this.circleClick);
	        events.set('dblclick', this.circleDblClick);
	        events.set('drag', this.drag);
	        events.set('dragend', this.dragEnd);
	        events.set('dragStart', this.dragStart);
	        events.set('mousedown', this.mouseDown);
	        events.set('mousemove', this.mouseMove);
	        events.set('mouseout', this.mouseOut);
	        events.set('mouseover', this.mouseOver);
	        events.set('mouseup', this.mouseUp);
	        events.set('radius_changed', this.radiusChange);
	        events.set('rightclick', this.rightClick);
	        events.forEach(function (eventEmitter, eventName) {
	            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
	                switch (eventName) {
	                    case 'radius_changed':
	                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
	                        break;
	                    case 'center_changed':
	                        _this._manager.getCenter(_this).then(function (center) {
	                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
	                        });
	                        break;
	                    default:
	                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
	                }
	            }));
	        });
	    };
	    /** @internal */
	    SebmGoogleMapCircle.prototype.ngOnDestroy = function () {
	        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
	        this._eventSubscriptions = null;
	        this._manager.removeCircle(this);
	    };
	    /**
	     * Gets the LatLngBounds of this Circle.
	     */
	    SebmGoogleMapCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
	    SebmGoogleMapCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
	    SebmGoogleMapCircle._mapOptions = [
	        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
	        'visible', 'zIndex'
	    ];
	    SebmGoogleMapCircle.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-circle',
	                    inputs: [
	                        'latitude', 'longitude', 'clickable', 'draggable: circleDraggable', 'editable', 'fillColor',
	                        'fillOpacity', 'radius', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
	                        'visible', 'zIndex'
	                    ],
	                    outputs: [
	                        'centerChange', 'circleClick', 'circleDblClick', 'drag', 'dragEnd', 'dragStart', 'mouseDown',
	                        'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'radiusChange', 'rightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapCircle.ctorParameters = [
	        { type: circle_manager_1.CircleManager, },
	    ];
	    return SebmGoogleMapCircle;
	}());
	exports.SebmGoogleMapCircle = SebmGoogleMapCircle;
	//# sourceMappingURL=google-map-circle.js.map

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var info_window_manager_1 = __webpack_require__(360);
	var infoWindowId = 0;
	/**
	 * SebmGoogleMapInfoWindow renders a info window inside a {@link SebmGoogleMapMarker} or standalone.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow } from
	 * 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGoogleMapMarker, SebmGoogleMapInfoWindow],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
	 *        <sebm-google-map-info-window [disableAutoPan]="true">
	 *          Hi, this is the content of the <strong>info window</strong>
	 *        </sebm-google-map-info-window>
	 *      </sebm-google-map-marker>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapInfoWindow = (function () {
	    function SebmGoogleMapInfoWindow(_infoWindowManager, _el) {
	        this._infoWindowManager = _infoWindowManager;
	        this._el = _el;
	        /**
	         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
	         */
	        this.isOpen = false;
	        /**
	         * Emits an event when the info window is closed.
	         */
	        this.infoWindowClose = new core_1.EventEmitter();
	        this._infoWindowAddedToManager = false;
	        this._id = (infoWindowId++).toString();
	    }
	    SebmGoogleMapInfoWindow.prototype.ngOnInit = function () {
	        this.content = this._el.nativeElement.querySelector('.sebm-google-map-info-window-content');
	        this._infoWindowManager.addInfoWindow(this);
	        this._infoWindowAddedToManager = true;
	        this._updateOpenState();
	    };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.ngOnChanges = function (changes) {
	        if (!this._infoWindowAddedToManager) {
	            return;
	        }
	        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
	            typeof this.longitude === 'number') {
	            this._infoWindowManager.setPosition(this);
	        }
	        if (changes['zIndex']) {
	            this._infoWindowManager.setZIndex(this);
	        }
	        if (changes['isOpen']) {
	            this._updateOpenState();
	        }
	        this._setInfoWindowOptions(changes);
	    };
	    SebmGoogleMapInfoWindow.prototype._updateOpenState = function () {
	        this.isOpen ? this._infoWindowManager.open(this) : this._infoWindowManager.close(this);
	    };
	    SebmGoogleMapInfoWindow.prototype._setInfoWindowOptions = function (changes) {
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
	        this._infoWindowManager.setOptions(this, options);
	    };
	    /**
	     * Opens the info window.
	     */
	    SebmGoogleMapInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
	    /**
	     * Closes the info window.
	     */
	    SebmGoogleMapInfoWindow.prototype.close = function () {
	        var _this = this;
	        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(void 0); });
	    };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.toString = function () { return 'SebmGoogleMapInfoWindow-' + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
	    SebmGoogleMapInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
	    SebmGoogleMapInfoWindow.decorators = [
	        { type: core_1.Component, args: [{
	                    selector: 'sebm-google-map-info-window',
	                    inputs: ['latitude', 'longitude', 'disableAutoPan', 'isOpen', 'zIndex', 'maxWidth'],
	                    outputs: ['infoWindowClose'],
	                    template: "<div class='sebm-google-map-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapInfoWindow.ctorParameters = [
	        { type: info_window_manager_1.InfoWindowManager, },
	        { type: core_1.ElementRef, },
	    ];
	    return SebmGoogleMapInfoWindow;
	}());
	exports.SebmGoogleMapInfoWindow = SebmGoogleMapInfoWindow;
	//# sourceMappingURL=google-map-info-window.js.map

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var marker_manager_1 = __webpack_require__(361);
	var google_map_info_window_1 = __webpack_require__(365);
	var markerId = 0;
	/**
	 * SebmGoogleMapMarker renders a map marker inside a {@link SebmGoogleMap}.
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGoogleMapMarker } from 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGoogleMapMarker],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
	 *      </sebm-google-map-marker>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapMarker = (function () {
	    function SebmGoogleMapMarker(_markerManager) {
	        this._markerManager = _markerManager;
	        /**
	         * If true, the marker can be dragged. Default value is false.
	         */
	        this.draggable = false;
	        /**
	         * If true, the marker is visible
	         */
	        this.visible = true;
	        /**
	         * Whether to automatically open the child info window when the marker is clicked.
	         */
	        this.openInfoWindow = true;
	        /**
	         * The marker's opacity between 0.0 and 1.0.
	         */
	        this.opacity = 1;
	        /**
	         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
	         * front of markers with lower values. By default, markers are displayed according to their
	         * vertical position on screen, with lower markers appearing in front of markers further up the
	         * screen.
	         */
	        this.zIndex = 1;
	        /**
	         * This event emitter gets emitted when the user clicks on the marker.
	         */
	        this.markerClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the marker.
	         */
	        this.dragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user mouses over the marker.
	         */
	        this.mouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user mouses outside the marker.
	         */
	        this.mouseOut = new core_1.EventEmitter();
	        this._markerAddedToManger = false;
	        this._observableSubscriptions = [];
	        this._id = (markerId++).toString();
	    }
	    /* @internal */
	    SebmGoogleMapMarker.prototype.ngAfterContentInit = function () {
	        if (this.infoWindow != null) {
	            this.infoWindow.hostMarker = this;
	        }
	    };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.ngOnChanges = function (changes) {
	        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
	            return;
	        }
	        if (!this._markerAddedToManger) {
	            this._markerManager.addMarker(this);
	            this._markerAddedToManger = true;
	            this._addEventListeners();
	            return;
	        }
	        if (changes['latitude'] || changes['longitude']) {
	            this._markerManager.updateMarkerPosition(this);
	        }
	        if (changes['title']) {
	            this._markerManager.updateTitle(this);
	        }
	        if (changes['label']) {
	            this._markerManager.updateLabel(this);
	        }
	        if (changes['draggable']) {
	            this._markerManager.updateDraggable(this);
	        }
	        if (changes['iconUrl']) {
	            this._markerManager.updateIcon(this);
	        }
	        if (changes['opacity']) {
	            this._markerManager.updateOpacity(this);
	        }
	        if (changes['visible']) {
	            this._markerManager.updateVisible(this);
	        }
	        if (changes['zIndex']) {
	            this._markerManager.updateZIndex(this);
	        }
	    };
	    SebmGoogleMapMarker.prototype._addEventListeners = function () {
	        var _this = this;
	        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
	            if (_this.openInfoWindow && _this.infoWindow != null) {
	                _this.infoWindow.open();
	            }
	            _this.markerClick.emit(null);
	        });
	        this._observableSubscriptions.push(cs);
	        var ds = this._markerManager.createEventObservable('dragend', this)
	            .subscribe(function (e) {
	            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(ds);
	        var mover = this._markerManager.createEventObservable('mouseover', this)
	            .subscribe(function (e) {
	            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(mover);
	        var mout = this._markerManager.createEventObservable('mouseout', this)
	            .subscribe(function (e) {
	            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
	        });
	        this._observableSubscriptions.push(mout);
	    };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.toString = function () { return 'SebmGoogleMapMarker-' + this._id.toString(); };
	    /** @internal */
	    SebmGoogleMapMarker.prototype.ngOnDestroy = function () {
	        this._markerManager.deleteMarker(this);
	        // unsubscribe all registered observable subscriptions
	        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapMarker.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-marker',
	                    inputs: [
	                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
	                        'openInfoWindow', 'opacity', 'visible', 'zIndex'
	                    ],
	                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapMarker.ctorParameters = [
	        { type: marker_manager_1.MarkerManager, },
	    ];
	    SebmGoogleMapMarker.propDecorators = {
	        'infoWindow': [{ type: core_1.ContentChild, args: [google_map_info_window_1.SebmGoogleMapInfoWindow,] },],
	    };
	    return SebmGoogleMapMarker;
	}());
	exports.SebmGoogleMapMarker = SebmGoogleMapMarker;
	//# sourceMappingURL=google-map-marker.js.map

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var polygon_manager_1 = __webpack_require__(362);
	/**
	 * SebmGoogleMapPolygon renders a polygon on a {@link SebmGoogleMap}
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from '@angular/core';
	 * import { SebmGoogleMap, SebmGooglePolygon, LatLngLiteral } from 'angular2-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  styles: [`
	 *    .semb-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <semb-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <semb-map-polygon [paths]="paths">
	 *      </semb-map-polygon>
	 *    </semb-map>
	 *  `
	 * })
	 * export class MyMapCmp {
	 *   lat: number = 0;
	 *   lng: number = 0;
	 *   zoom: number = 10;
	 *   paths: Array<LatLngLiteral> = [
	 *     { lat: 0,  lng: 10 },
	 *     { lat: 0,  lng: 20 },
	 *     { lat: 10, lng: 20 },
	 *     { lat: 10, lng: 10 },
	 *     { lat: 0,  lng: 10 }
	 *   ]
	 *   // Nesting paths will create a hole where they overlap;
	 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
	 *     { lat: 0,  lng: 10 },
	 *     { lat: 0,  lng: 20 },
	 *     { lat: 10, lng: 20 },
	 *     { lat: 10, lng: 10 },
	 *     { lat: 0,  lng: 10 }
	 *   ], [
	 *     { lat: 0, lng: 15 },
	 *     { lat: 0, lng: 20 },
	 *     { lat: 5, lng: 20 },
	 *     { lat: 5, lng: 15 },
	 *     { lat: 0, lng: 15 }
	 *   ]]
	 * }
	 * ```
	 */
	var SebmGoogleMapPolygon = (function () {
	    function SebmGoogleMapPolygon(_polygonManager) {
	        this._polygonManager = _polygonManager;
	        /**
	         * Indicates whether this Polygon handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this shape over the map. The geodesic
	         * property defines the mode of dragging. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this shape by dragging the control
	         * points shown at the vertices and on each segment. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * When true, edges of the polygon are interpreted as geodesic and will
	         * follow the curvature of the Earth. When false, edges of the polygon are
	         * rendered as straight lines in screen space. Note that the shape of a
	         * geodesic polygon may appear to change when dragged, as the dimensions
	         * are maintained relative to the surface of the earth. Defaults to false.
	         */
	        this.geodesic = false;
	        /**
	         * The ordered sequence of coordinates that designates a closed loop.
	         * Unlike polylines, a polygon may consist of one or more paths.
	         *  As a result, the paths property may specify one or more arrays of
	         * LatLng coordinates. Paths are closed automatically; do not repeat the
	         * first vertex of the path as the last vertex. Simple polygons may be
	         * defined using a single array of LatLngs. More complex polygons may
	         * specify an array of arrays. Any simple arrays are converted into Arrays.
	         * Inserting or removing LatLngs from the Array will automatically update
	         * the polygon on the map.
	         */
	        this.paths = [];
	        /**
	         * This event is fired when the DOM click event is fired on the Polygon.
	         */
	        this.polyClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM dblclick event is fired on the Polygon.
	         */
	        this.polyDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the polygon.
	         */
	        this.polyDrag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the polygon.
	         */
	        this.polyDragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the polygon.
	         */
	        this.polyDragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the Polygon.
	         */
	        this.polyMouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the Polygon.
	         */
	        this.polyMouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polygon mouseout.
	         */
	        this.polyMouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polygon mouseover.
	         */
	        this.polyMouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired whe the DOM mouseup event is fired on the Polygon
	         */
	        this.polyMouseUp = new core_1.EventEmitter();
	        /**
	         * This even is fired when the Polygon is right-clicked on.
	         */
	        this.polyRightClick = new core_1.EventEmitter();
	        this._polygonAddedToManager = false;
	        this._subscriptions = [];
	    }
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.ngAfterContentInit = function () {
	        if (!this._polygonAddedToManager) {
	            this._init();
	        }
	    };
	    SebmGoogleMapPolygon.prototype.ngOnChanges = function (changes) {
	        if (!this._polygonAddedToManager) {
	            this._init();
	            return;
	        }
	        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
	    };
	    SebmGoogleMapPolygon.prototype._init = function () {
	        this._polygonManager.addPolygon(this);
	        this._polygonAddedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapPolygon.prototype._addEventListeners = function () {
	        var _this = this;
	        var handlers = [
	            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
	            { name: 'dbclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
	            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
	            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
	            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
	            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
	            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
	            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
	            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
	            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
	            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
	        ];
	        handlers.forEach(function (obj) {
	            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    SebmGoogleMapPolygon.prototype._updatePolygonOptions = function (changes) {
	        return Object.keys(changes)
	            .filter(function (k) { return SebmGoogleMapPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
	            .reduce(function (obj, k) {
	            obj[k] = changes[k].currentValue;
	            return obj;
	        }, {});
	    };
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapPolygon.prototype.ngOnDestroy = function () {
	        this._polygonManager.deletePolygon(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapPolygon._polygonOptionsAttributes = [
	        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
	        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
	        'editable', 'visible'
	    ];
	    SebmGoogleMapPolygon.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-map-polygon',
	                    inputs: [
	                        'clickable',
	                        'draggable: polyDraggable',
	                        'editable',
	                        'fillColor',
	                        'fillOpacity',
	                        'geodesic',
	                        'paths',
	                        'strokeColor',
	                        'strokeOpacity',
	                        'strokeWeight',
	                        'visible',
	                        'zIndex',
	                    ],
	                    outputs: [
	                        'polyClick', 'polyDblClick', 'polyDrag', 'polyDragEnd', 'polyMouseDown', 'polyMouseMove',
	                        'polyMouseOut', 'polyMouseOver', 'polyMouseUp', 'polyRightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolygon.ctorParameters = [
	        { type: polygon_manager_1.PolygonManager, },
	    ];
	    return SebmGoogleMapPolygon;
	}());
	exports.SebmGoogleMapPolygon = SebmGoogleMapPolygon;
	//# sourceMappingURL=google-map-polygon.js.map

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var polyline_manager_1 = __webpack_require__(363);
	var google_map_polyline_point_1 = __webpack_require__(369);
	var polylineId = 0;
	/**
	 * SebmGoogleMapPolyline renders a polyline on a {@link SebmGoogleMap}
	 *
	 * ### Example
	 * ```typescript
	 * import { Component } from 'angular2/core';
	 * import { SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint } from
	 * 'angular2-google-maps/core';
	 *
	 * @Component({
	 *  selector: 'my-map-cmp',
	 *  directives: [SebmGoogleMap, SebmGooglePolyline, SebmGooglePolylinePoint],
	 *  styles: [`
	 *    .sebm-google-map-container {
	 *      height: 300px;
	 *    }
	 * `],
	 *  template: `
	 *    <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
	 *      <sebm-google-map-polyline>
	 *          <sebm-google-map-polyline-point [latitude]="latA" [longitude]="lngA">
	 *          </sebm-google-map-polyline-point>
	 *          <sebm-google-map-polyline-point [latitude]="latB" [longitude]="lngB">
	 *          </sebm-google-map-polyline-point>
	 *      </sebm-google-map-polyline>
	 *    </sebm-google-map>
	 *  `
	 * })
	 * ```
	 */
	var SebmGoogleMapPolyline = (function () {
	    function SebmGoogleMapPolyline(_polylineManager) {
	        this._polylineManager = _polylineManager;
	        /**
	         * Indicates whether this Polyline handles mouse events. Defaults to true.
	         */
	        this.clickable = true;
	        /**
	         * If set to true, the user can drag this shape over the map. The geodesic property defines the
	         * mode of dragging. Defaults to false.
	         */
	        this.draggable = false;
	        /**
	         * If set to true, the user can edit this shape by dragging the control points shown at the
	         * vertices and on each segment. Defaults to false.
	         */
	        this.editable = false;
	        /**
	         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
	         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
	         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
	         * are maintained relative to the surface of the earth. Defaults to false.
	         */
	        this.geodesic = false;
	        /**
	         * Whether this polyline is visible on the map. Defaults to true.
	         */
	        this.visible = true;
	        /**
	         * This event is fired when the DOM click event is fired on the Polyline.
	         */
	        this.lineClick = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM dblclick event is fired on the Polyline.
	         */
	        this.lineDblClick = new core_1.EventEmitter();
	        /**
	         * This event is repeatedly fired while the user drags the polyline.
	         */
	        this.lineDrag = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user stops dragging the polyline.
	         */
	        this.lineDragEnd = new core_1.EventEmitter();
	        /**
	         * This event is fired when the user starts dragging the polyline.
	         */
	        this.lineDragStart = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousedown event is fired on the Polyline.
	         */
	        this.lineMouseDown = new core_1.EventEmitter();
	        /**
	         * This event is fired when the DOM mousemove event is fired on the Polyline.
	         */
	        this.lineMouseMove = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polyline mouseout.
	         */
	        this.lineMouseOut = new core_1.EventEmitter();
	        /**
	         * This event is fired on Polyline mouseover.
	         */
	        this.lineMouseOver = new core_1.EventEmitter();
	        /**
	         * This event is fired whe the DOM mouseup event is fired on the Polyline
	         */
	        this.lineMouseUp = new core_1.EventEmitter();
	        /**
	         * This even is fired when the Polyline is right-clicked on.
	         */
	        this.lineRightClick = new core_1.EventEmitter();
	        this._polylineAddedToManager = false;
	        this._subscriptions = [];
	        this._id = (polylineId++).toString();
	    }
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        if (this.points.length) {
	            this.points.forEach(function (point) {
	                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
	                _this._subscriptions.push(s);
	            });
	        }
	        if (!this._polylineAddedToManager) {
	            this._init();
	        }
	        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
	        this._subscriptions.push(s);
	        this._polylineManager.updatePolylinePoints(this);
	    };
	    SebmGoogleMapPolyline.prototype.ngOnChanges = function (changes) {
	        if (!this._polylineAddedToManager) {
	            this._init();
	            return;
	        }
	        var options = {};
	        var optionKeys = Object.keys(changes).filter(function (k) { return SebmGoogleMapPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
	        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
	        this._polylineManager.setPolylineOptions(this, options);
	    };
	    SebmGoogleMapPolyline.prototype._init = function () {
	        this._polylineManager.addPolyline(this);
	        this._polylineAddedToManager = true;
	        this._addEventListeners();
	    };
	    SebmGoogleMapPolyline.prototype._addEventListeners = function () {
	        var _this = this;
	        var handlers = [
	            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
	            { name: 'dbclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
	            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
	            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
	            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
	            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
	            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
	            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
	            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
	            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
	            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
	        ];
	        handlers.forEach(function (obj) {
	            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
	            _this._subscriptions.push(os);
	        });
	    };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype._getPoints = function () {
	        if (this.points) {
	            return this.points.toArray();
	        }
	        return [];
	    };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.id = function () { return this._id; };
	    /** @internal */
	    SebmGoogleMapPolyline.prototype.ngOnDestroy = function () {
	        this._polylineManager.deletePolyline(this);
	        // unsubscribe all registered observable subscriptions
	        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
	    };
	    SebmGoogleMapPolyline._polylineOptionsAttributes = [
	        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
	        'zIndex'
	    ];
	    SebmGoogleMapPolyline.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'sebm-google-map-polyline',
	                    inputs: [
	                        'clickable', 'draggable: polylineDraggable', 'editable', 'geodesic', 'strokeColor',
	                        'strokeWeight', 'strokeOpacity', 'visible', 'zIndex'
	                    ],
	                    outputs: [
	                        'lineClick', 'lineDblClick', 'lineDrag', 'lineDragEnd', 'lineMouseDown', 'lineMouseMove',
	                        'lineMouseOut', 'lineMouseOver', 'lineMouseUp', 'lineRightClick'
	                    ]
	                },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolyline.ctorParameters = [
	        { type: polyline_manager_1.PolylineManager, },
	    ];
	    SebmGoogleMapPolyline.propDecorators = {
	        'points': [{ type: core_1.ContentChildren, args: [google_map_polyline_point_1.SebmGoogleMapPolylinePoint,] },],
	    };
	    return SebmGoogleMapPolyline;
	}());
	exports.SebmGoogleMapPolyline = SebmGoogleMapPolyline;
	//# sourceMappingURL=google-map-polyline.js.map

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	/**
	 * SebmGoogleMapPolylinePoint represents one element of a polyline within a  {@link
	 * SembGoogleMapPolyline}
	 */
	var SebmGoogleMapPolylinePoint = (function () {
	    function SebmGoogleMapPolylinePoint() {
	        /**
	         * This event emitter gets emitted when the position of the point changed.
	         */
	        this.positionChanged = new core_1.EventEmitter();
	    }
	    SebmGoogleMapPolylinePoint.prototype.ngOnChanges = function (changes) {
	        if (changes['latitude'] || changes['longitude']) {
	            var position = {
	                lat: changes['latitude'].currentValue,
	                lng: changes['longitude'].currentValue
	            };
	            this.positionChanged.emit(position);
	        }
	    };
	    SebmGoogleMapPolylinePoint.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'sebm-google-map-polyline-point' },] },
	    ];
	    /** @nocollapse */
	    SebmGoogleMapPolylinePoint.ctorParameters = [];
	    SebmGoogleMapPolylinePoint.propDecorators = {
	        'latitude': [{ type: core_1.Input },],
	        'longitude': [{ type: core_1.Input },],
	        'positionChanged': [{ type: core_1.Output },],
	    };
	    return SebmGoogleMapPolylinePoint;
	}());
	exports.SebmGoogleMapPolylinePoint = SebmGoogleMapPolylinePoint;
	//# sourceMappingURL=google-map-polyline-point.js.map

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var google_maps_api_wrapper_1 = __webpack_require__(357);
	exports.GoogleMapsAPIWrapper = google_maps_api_wrapper_1.GoogleMapsAPIWrapper;
	var circle_manager_1 = __webpack_require__(359);
	exports.CircleManager = circle_manager_1.CircleManager;
	var info_window_manager_1 = __webpack_require__(360);
	exports.InfoWindowManager = info_window_manager_1.InfoWindowManager;
	var marker_manager_1 = __webpack_require__(361);
	exports.MarkerManager = marker_manager_1.MarkerManager;
	var polygon_manager_1 = __webpack_require__(362);
	exports.PolygonManager = polygon_manager_1.PolygonManager;
	var polyline_manager_1 = __webpack_require__(363);
	exports.PolylineManager = polyline_manager_1.PolylineManager;
	var lazy_maps_api_loader_1 = __webpack_require__(371);
	exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
	exports.LAZY_MAPS_API_CONFIG = lazy_maps_api_loader_1.LAZY_MAPS_API_CONFIG;
	exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
	var maps_api_loader_1 = __webpack_require__(358);
	exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
	var noop_maps_api_loader_1 = __webpack_require__(373);
	exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;
	//# sourceMappingURL=services.js.map

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(3);
	var browser_globals_1 = __webpack_require__(372);
	var maps_api_loader_1 = __webpack_require__(358);
	(function (GoogleMapsScriptProtocol) {
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
	    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
	})(exports.GoogleMapsScriptProtocol || (exports.GoogleMapsScriptProtocol = {}));
	var GoogleMapsScriptProtocol = exports.GoogleMapsScriptProtocol;
	/**
	 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
	 * LazyMapsAPILoaderConfig}.
	 */
	exports.LAZY_MAPS_API_CONFIG = new core_1.OpaqueToken('angular2-google-maps LAZY_MAPS_API_CONFIG');
	var LazyMapsAPILoader = (function (_super) {
	    __extends(LazyMapsAPILoader, _super);
	    function LazyMapsAPILoader(config, w, d) {
	        _super.call(this);
	        this._config = config || {};
	        this._windowRef = w;
	        this._documentRef = d;
	    }
	    LazyMapsAPILoader.prototype.load = function () {
	        var _this = this;
	        if (this._scriptLoadingPromise) {
	            return this._scriptLoadingPromise;
	        }
	        var script = this._documentRef.getNativeDocument().createElement('script');
	        script.type = 'text/javascript';
	        script.async = true;
	        script.defer = true;
	        var callbackName = "angular2GoogleMapsLazyMapsAPILoader";
	        script.src = this._getScriptSrc(callbackName);
	        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
	            _this._windowRef.getNativeWindow()[callbackName] = function () { resolve(); };
	            script.onerror = function (error) { reject(error); };
	        });
	        this._documentRef.getNativeDocument().body.appendChild(script);
	        return this._scriptLoadingPromise;
	    };
	    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
	        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
	        var protocol;
	        switch (protocolType) {
	            case GoogleMapsScriptProtocol.AUTO:
	                protocol = '';
	                break;
	            case GoogleMapsScriptProtocol.HTTP:
	                protocol = 'http:';
	                break;
	            case GoogleMapsScriptProtocol.HTTPS:
	                protocol = 'https:';
	                break;
	        }
	        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
	        var queryParams = {
	            v: this._config.apiVersion || '3',
	            callback: callbackName,
	            key: this._config.apiKey,
	            client: this._config.clientId,
	            channel: this._config.channel,
	            libraries: this._config.libraries,
	            region: this._config.region,
	            language: this._config.language
	        };
	        var params = Object.keys(queryParams)
	            .filter(function (k) { return queryParams[k] != null; })
	            .filter(function (k) {
	            // remove empty arrays
	            return !Array.isArray(queryParams[k]) ||
	                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
	        })
	            .map(function (k) {
	            // join arrays as comma seperated strings
	            var i = queryParams[k];
	            if (Array.isArray(i)) {
	                return { key: k, value: i.join(',') };
	            }
	            return { key: k, value: queryParams[k] };
	        })
	            .map(function (entry) { return entry.key + "=" + entry.value; })
	            .join('&');
	        return protocol + "//" + hostAndPath + "?" + params;
	    };
	    LazyMapsAPILoader.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    LazyMapsAPILoader.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.LAZY_MAPS_API_CONFIG,] },] },
	        { type: browser_globals_1.WindowRef, },
	        { type: browser_globals_1.DocumentRef, },
	    ];
	    return LazyMapsAPILoader;
	}(maps_api_loader_1.MapsAPILoader));
	exports.LazyMapsAPILoader = LazyMapsAPILoader;
	//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ },

/***/ 372:
/***/ function(module, exports) {

	"use strict";
	var WindowRef = (function () {
	    function WindowRef() {
	    }
	    WindowRef.prototype.getNativeWindow = function () { return window; };
	    return WindowRef;
	}());
	exports.WindowRef = WindowRef;
	var DocumentRef = (function () {
	    function DocumentRef() {
	    }
	    DocumentRef.prototype.getNativeDocument = function () { return document; };
	    return DocumentRef;
	}());
	exports.DocumentRef = DocumentRef;
	exports.BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
	//# sourceMappingURL=browser-globals.js.map

/***/ },

/***/ 373:
/***/ function(module, exports) {

	"use strict";
	/**
	 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
	 * Tag.
	 * It's important that the Google Maps API script gets loaded first on the page.
	 */
	var NoOpMapsAPILoader = (function () {
	    function NoOpMapsAPILoader() {
	    }
	    NoOpMapsAPILoader.prototype.load = function () {
	        if (!window.google || !window.google.maps) {
	            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
	        }
	        return Promise.resolve();
	    };
	    ;
	    return NoOpMapsAPILoader;
	}());
	exports.NoOpMapsAPILoader = NoOpMapsAPILoader;
	//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var google_map_1 = __webpack_require__(356);
	var google_map_circle_1 = __webpack_require__(364);
	var google_map_info_window_1 = __webpack_require__(365);
	var google_map_marker_1 = __webpack_require__(366);
	var google_map_polygon_1 = __webpack_require__(367);
	var google_map_polyline_1 = __webpack_require__(368);
	var google_map_polyline_point_1 = __webpack_require__(369);
	var lazy_maps_api_loader_1 = __webpack_require__(371);
	var lazy_maps_api_loader_2 = __webpack_require__(371);
	var maps_api_loader_1 = __webpack_require__(358);
	var browser_globals_1 = __webpack_require__(372);
	/**
	 * @internal
	 */
	function coreDirectives() {
	    return [
	        google_map_1.SebmGoogleMap, google_map_marker_1.SebmGoogleMapMarker, google_map_info_window_1.SebmGoogleMapInfoWindow, google_map_circle_1.SebmGoogleMapCircle,
	        google_map_polygon_1.SebmGoogleMapPolygon, google_map_polyline_1.SebmGoogleMapPolyline, google_map_polyline_point_1.SebmGoogleMapPolylinePoint
	    ];
	}
	exports.coreDirectives = coreDirectives;
	;
	/**
	 * The angular2-google-maps core module. Contains all Directives/Services/Pipes
	 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
	 */
	var AgmCoreModule = (function () {
	    function AgmCoreModule() {
	    }
	    /**
	     * Please use this method when you register the module at the root level.
	     */
	    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
	        return {
	            ngModule: AgmCoreModule,
	            providers: browser_globals_1.BROWSER_GLOBALS_PROVIDERS.concat([
	                { provide: maps_api_loader_1.MapsAPILoader, useClass: lazy_maps_api_loader_1.LazyMapsAPILoader },
	                { provide: lazy_maps_api_loader_2.LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig }
	            ]),
	        };
	    };
	    AgmCoreModule.decorators = [
	        { type: core_1.NgModule, args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
	    ];
	    /** @nocollapse */
	    AgmCoreModule.ctorParameters = [];
	    return AgmCoreModule;
	}());
	exports.AgmCoreModule = AgmCoreModule;
	//# sourceMappingURL=core-module.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/index.d.ts" />
	/// <reference path="../node_modules/@types/node/index.d.ts"/>
	/// <reference path="../node_modules/rxjs/rx.d.ts"/>  
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var app_service_1 = __webpack_require__(376);
	var AppComponent = (function () {
	    function AppComponent(appService) {
	        this.appService = appService;
	        appService.setCenterCoord();
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            providers: [app_service_1.AppService],
	            templateUrl: './app/app.component.html',
	            styleUrls: ['./app/app.component.css']
	        }), 
	        __metadata('design:paramtypes', [app_service_1.AppService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var cityCoordinates_1 = __webpack_require__(377);
	var AppService = (function () {
	    function AppService() {
	    }
	    AppService.prototype.setCenterCoord = function () {
	        this.centerCoord = new Observable_1.Observable(function (observer) {
	            navigator.geolocation.getCurrentPosition(function (position) {
	                observer.next(new cityCoordinates_1.CityCoordinates(position.coords.latitude, position.coords.longitude));
	                observer.complete();
	            });
	        });
	    };
	    AppService.prototype.getCenterCoord = function () {
	        return this.centerCoord;
	    };
	    AppService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], AppService);
	    return AppService;
	}());
	exports.AppService = AppService;


/***/ },

/***/ 377:
/***/ function(module, exports) {

	"use strict";
	var CityCoordinates = (function () {
	    function CityCoordinates(latitude, longitude) {
	        this.lat = latitude;
	        this.lon = longitude;
	    }
	    return CityCoordinates;
	}());
	exports.CityCoordinates = CityCoordinates;


/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var cities_service_1 = __webpack_require__(379);
	var app_service_1 = __webpack_require__(376);
	var CitiesComponent = (function () {
	    function CitiesComponent(citiesService, appService) {
	        this.citiesService = citiesService;
	        this.appService = appService;
	        this.firstLetter = '';
	    }
	    CitiesComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.appService.getCenterCoord().subscribe(function (coord) {
	            _this.centerCoord = coord;
	            //this.getCitiesWeather();
	            _this.cities = _this.citiesService.getCitiesWeather(_this.centerCoord);
	        });
	    };
	    CitiesComponent.prototype.isNewLetter = function (letter) {
	        var isDifferent = this.firstLetter !== letter;
	        this.firstLetter = letter;
	        return isDifferent;
	    };
	    CitiesComponent = __decorate([
	        core_1.Component({
	            selector: 'cities',
	            providers: [cities_service_1.CitiesService],
	            templateUrl: './app/Cities/cities.component.html',
	            styleUrls: ['./app/Cities/cities.component.css']
	        }), 
	        __metadata('design:paramtypes', [cities_service_1.CitiesService, app_service_1.AppService])
	    ], CitiesComponent);
	    return CitiesComponent;
	}());
	exports.CitiesComponent = CitiesComponent;


/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(56);
	var CitiesService = (function () {
	    function CitiesService(http) {
	        this.http = http;
	        this.citiesInCycleUrl = 'http://api.openweathermap.org/data/2.5/find';
	        this.countCities = 50;
	        this.appid = 'f3dbe2c418d2f197d570d0224966b043';
	    }
	    CitiesService.prototype.getCitiesWeather = function (centerCoord) {
	        var params = new http_1.URLSearchParams();
	        params.set('lat', centerCoord.lat.toString());
	        params.set('lon', centerCoord.lon.toString());
	        params.set('cnt', this.countCities.toString());
	        params.set('appid', this.appid);
	        return this.http.get(this.citiesInCycleUrl, { search: params })
	            .map(function (result) {
	            var citiesInCycle = result.json();
	            var cities = citiesInCycle.list || [];
	            cities.sort(function (city1, city2) {
	                return city1.name > city2.name ? 1 : (city1.name < city2.name ? -1 : 0);
	            });
	            return cities;
	        });
	    };
	    CitiesService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], CitiesService);
	    return CitiesService;
	}());
	exports.CitiesService = CitiesService;


/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var city_1 = __webpack_require__(381);
	var kelvin2celsius_pipe_1 = __webpack_require__(382);
	var CityComponent = (function () {
	    function CityComponent(kelvin2celsius) {
	        this.kelvin2celsius = kelvin2celsius;
	    }
	    CityComponent.prototype.getClassColor = function (tempKelvin) {
	        var tempCelsius = this.kelvin2celsius.transform(tempKelvin);
	        return tempCelsius > 0 ? 'red' : 'blue';
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', city_1.City)
	    ], CityComponent.prototype, "city", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CityComponent.prototype, "isDisplayLetter", void 0);
	    CityComponent = __decorate([
	        core_1.Component({
	            selector: 'city',
	            providers: [kelvin2celsius_pipe_1.Kelvin2celsiusPipe],
	            templateUrl: './app/City/city.component.html',
	            styleUrls: ['./app/City/city.component.css']
	        }), 
	        __metadata('design:paramtypes', [kelvin2celsius_pipe_1.Kelvin2celsiusPipe])
	    ], CityComponent);
	    return CityComponent;
	}());
	exports.CityComponent = CityComponent;


/***/ },

/***/ 381:
/***/ function(module, exports) {

	"use strict";
	var City = (function () {
	    function City() {
	    }
	    return City;
	}());
	exports.City = City;


/***/ },

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var Kelvin2celsiusPipe = (function () {
	    function Kelvin2celsiusPipe() {
	        this.kelvin2celsius = 273.15;
	    }
	    Kelvin2celsiusPipe.prototype.transform = function (value) {
	        return value - this.kelvin2celsius;
	    };
	    Kelvin2celsiusPipe = __decorate([
	        core_1.Pipe({ name: 'kelvin2celsius' }), 
	        __metadata('design:paramtypes', [])
	    ], Kelvin2celsiusPipe);
	    return Kelvin2celsiusPipe;
	}());
	exports.Kelvin2celsiusPipe = Kelvin2celsiusPipe;


/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var app_service_1 = __webpack_require__(376);
	var cityCoordinates_1 = __webpack_require__(377);
	var MapComponent = (function () {
	    function MapComponent(appService) {
	        var _this = this;
	        this.appService = appService;
	        this.centerCoord = new cityCoordinates_1.CityCoordinates(0, 0);
	        appService.getCenterCoord().subscribe(function (coord) {
	            _this.centerCoord = coord;
	        });
	    }
	    MapComponent = __decorate([
	        core_1.Component({
	            selector: 'map',
	            templateUrl: './app/Map/map.component.html',
	            styleUrls: ['./app/Map/map.component.css']
	        }), 
	        __metadata('design:paramtypes', [app_service_1.AppService])
	    ], MapComponent);
	    return MapComponent;
	}());
	exports.MapComponent = MapComponent;


/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var cities_service_1 = __webpack_require__(385);
	var WeatherInCityComponent = (function () {
	    function WeatherInCityComponent(citiesService) {
	        this.citiesService = citiesService;
	    }
	    WeatherInCityComponent = __decorate([
	        core_1.Component({
	            selector: 'weather-in-city',
	            providers: [cities_service_1.CitiesService],
	            templateUrl: './app/WeatherInCity/weatherInCity.component.html',
	            styleUrls: ['./app/WeatherInCity/weatherInCity.component.css']
	        }), 
	        __metadata('design:paramtypes', [cities_service_1.CitiesService])
	    ], WeatherInCityComponent);
	    return WeatherInCityComponent;
	}());
	exports.WeatherInCityComponent = WeatherInCityComponent;


/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(56);
	var CitiesService = (function () {
	    function CitiesService(http) {
	        this.http = http;
	        this.citiesInCycleUrl = 'http://api.openweathermap.org/data/2.5/find';
	        this.countCities = 50;
	        this.appid = 'f3dbe2c418d2f197d570d0224966b043';
	    }
	    CitiesService.prototype.getCitiesWeather = function (centerCoord) {
	        var params = new http_1.URLSearchParams();
	        params.set('lat', centerCoord.lat.toString());
	        params.set('lon', centerCoord.lon.toString());
	        params.set('cnt', this.countCities.toString());
	        params.set('appid', this.appid);
	        return this.http.get(this.citiesInCycleUrl, { search: params })
	            .map(function (result) {
	            var citiesInCycle = result.json();
	            var cities = citiesInCycle.list || [];
	            cities.sort(function (city1, city2) {
	                return city1.name > city2.name ? 1 : (city1.name < city2.name ? -1 : 0);
	            });
	            return cities;
	        });
	    };
	    CitiesService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], CitiesService);
	    return CitiesService;
	}());
	exports.CitiesService = CitiesService;


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var PageNotFoundComponent = (function () {
	    function PageNotFoundComponent() {
	    }
	    PageNotFoundComponent = __decorate([
	        core_1.Component({
	            selector: 'pagenotfound',
	            template: "I am sorry, page not found ((("
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PageNotFoundComponent);
	    return PageNotFoundComponent;
	}());
	exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var TemperaturePipe = (function () {
	    function TemperaturePipe() {
	    }
	    TemperaturePipe.prototype.transform = function (value) {
	        return (value > 0 ? '+' : '') + value.toFixed(0).toString();
	    };
	    TemperaturePipe = __decorate([
	        core_1.Pipe({ name: 'temperature' }), 
	        __metadata('design:paramtypes', [])
	    ], TemperaturePipe);
	    return TemperaturePipe;
	}());
	exports.TemperaturePipe = TemperaturePipe;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map