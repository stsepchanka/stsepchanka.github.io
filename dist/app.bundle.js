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
	var router_1 = __webpack_require__(24);
	var http_1 = __webpack_require__(56);
	__webpack_require__(57);
	//import 'rxjs/add/observable/throw';
	//import 'rxjs/add/operator/catch';
	//import 'rxjs/add/operator/map';
	var core_module_1 = __webpack_require__(354);
	var cities_module_1 = __webpack_require__(361);
	var citiesAsync_module_1 = __webpack_require__(373);
	var map_module_1 = __webpack_require__(375);
	var weatherInCity_module_1 = __webpack_require__(398);
	var app_component_1 = __webpack_require__(401);
	var pagenotfound_component_1 = __webpack_require__(355);
	var cities_component_1 = __webpack_require__(372);
	var citiesAsync_component_1 = __webpack_require__(374);
	var map_component_1 = __webpack_require__(397);
	var weatherInCity_component_1 = __webpack_require__(399);
	var appRoutes = [
	    { path: 'cities', component: cities_component_1.CitiesComponent },
	    { path: 'cities-async', component: citiesAsync_component_1.CitiesAsyncComponent },
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
	                core_module_1.CoreModule,
	                http_1.HttpModule,
	                router_1.RouterModule.forRoot(appRoutes),
	                cities_module_1.CitiesModule,
	                citiesAsync_module_1.CitiesAsyncModule,
	                map_module_1.MapModule,
	                weatherInCity_module_1.WeatherInCityModule
	            ],
	            declarations: [
	                app_component_1.AppComponent
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
	var pagenotfound_component_1 = __webpack_require__(355);
	var location_service_1 = __webpack_require__(356);
	var weather_service_1 = __webpack_require__(360);
	var logger_service_1 = __webpack_require__(357);
	var CoreModule = (function () {
	    function CoreModule() {
	    }
	    CoreModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	            ],
	            declarations: [
	                pagenotfound_component_1.PageNotFoundComponent
	            ],
	            providers: [
	                location_service_1.LocationService,
	                weather_service_1.WeatherService,
	                logger_service_1.LoggerService
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CoreModule);
	    return CoreModule;
	}());
	exports.CoreModule = CoreModule;


/***/ },

/***/ 355:
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

/***/ 356:
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
	var logger_service_1 = __webpack_require__(357);
	var cityCoordinates_1 = __webpack_require__(359);
	var statusMessage_1 = __webpack_require__(358);
	var LocationService = (function () {
	    function LocationService(loggerService) {
	        this.loggerService = loggerService;
	        this.serviceName = 'Location service';
	        this.centerCoord = null;
	    }
	    LocationService.prototype.getCenterCoord = function () {
	        var _this = this;
	        return new Observable_1.Observable(function (observer) {
	            if (_this.centerCoord == null) {
	                navigator.geolocation.getCurrentPosition(function (position) {
	                    _this.centerCoord = new cityCoordinates_1.CityCoordinates(position.coords.latitude, position.coords.longitude);
	                    observer.next(_this.centerCoord);
	                    observer.complete();
	                    _this.loggerService.log(_this.serviceName, 'Get geo coordinates from navigator', statusMessage_1.StatusMessage.Success);
	                });
	            }
	            else {
	                observer.next(_this.centerCoord);
	                observer.complete();
	                _this.loggerService.log(_this.serviceName, 'Get geo coordinates from saved data', statusMessage_1.StatusMessage.Info);
	            }
	        });
	    };
	    LocationService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [logger_service_1.LoggerService])
	    ], LocationService);
	    return LocationService;
	}());
	exports.LocationService = LocationService;


/***/ },

/***/ 357:
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
	var statusMessage_1 = __webpack_require__(358);
	var LoggerService = (function () {
	    function LoggerService() {
	    }
	    LoggerService.prototype.log = function (component, message, status) {
	        console.log("%c " + component + ": " + message, "color: " + this.getColor(status));
	    };
	    LoggerService.prototype.getColor = function (status) {
	        switch (status) {
	            case statusMessage_1.StatusMessage.Info:
	                return 'blue';
	            case statusMessage_1.StatusMessage.Success:
	                return 'green';
	            case statusMessage_1.StatusMessage.Error:
	                return 'red';
	            default:
	                return 'black';
	        }
	    };
	    LoggerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], LoggerService);
	    return LoggerService;
	}());
	exports.LoggerService = LoggerService;


/***/ },

/***/ 358:
/***/ function(module, exports) {

	"use strict";
	(function (StatusMessage) {
	    StatusMessage[StatusMessage["Info"] = 0] = "Info";
	    StatusMessage[StatusMessage["Success"] = 1] = "Success";
	    StatusMessage[StatusMessage["Error"] = 2] = "Error";
	})(exports.StatusMessage || (exports.StatusMessage = {}));
	var StatusMessage = exports.StatusMessage;


/***/ },

/***/ 359:
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

/***/ 360:
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
	var Observable_1 = __webpack_require__(5);
	var logger_service_1 = __webpack_require__(357);
	var statusMessage_1 = __webpack_require__(358);
	var WeatherService = (function () {
	    function WeatherService(http, loggerService) {
	        this.http = http;
	        this.loggerService = loggerService;
	        this.serviceName = 'Weather service';
	        this.citiesInCycleUrl = 'http://api.openweathermap.org/data/2.5/find';
	        this.citiesByIdsUrl = 'http://api.openweathermap.org/data/2.5/group';
	        this.citiyWeatherByNameUrl = 'http://api.openweathermap.org/data/2.5/weather';
	        this.countCities = 50;
	        this.appid = 'f3dbe2c418d2f197d570d0224966b043';
	        this.refreshDataTime = 10 * 60 * 1000;
	        this.cities = null;
	        this.timeRequest = null;
	        this.timeRequestIds = null;
	    }
	    Object.defineProperty(WeatherService.prototype, "timeLastRequest", {
	        get: function () {
	            return this.timeRequest;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WeatherService.prototype, "timeLastRequestIds", {
	        get: function () {
	            return this.timeRequestIds;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    WeatherService.prototype.getCitiesWeather = function (centerCoord) {
	        var _this = this;
	        if (this.cities == null
	            || (new Date()).getTime() - this.timeRequest.getTime() > this.refreshDataTime) {
	            var params = new http_1.URLSearchParams();
	            params.set('lat', centerCoord.lat.toString());
	            params.set('lon', centerCoord.lon.toString());
	            params.set('cnt', this.countCities.toString());
	            params.set('appid', this.appid);
	            return this.http.get(this.citiesInCycleUrl, { search: params })
	                .map(function (result) {
	                var citiesInCycle = result.json();
	                _this.cities = citiesInCycle.list || [];
	                _this.cities.sort(function (city1, city2) {
	                    return city1.name > city2.name ? 1 : (city1.name < city2.name ? -1 : 0);
	                });
	                _this.timeRequest = new Date();
	                _this.timeRequestIds = _this.timeRequest;
	                _this.loggerService.log(_this.serviceName, 'Get cities weather from API', statusMessage_1.StatusMessage.Success);
	                return _this.cities;
	            })
	                .catch(function (error) { _this.loggerService.log(_this.serviceName, 'Error when getting cities weather from API', statusMessage_1.StatusMessage.Error); });
	        }
	        else {
	            return new Observable_1.Observable(function (observer) {
	                observer.next(_this.cities);
	                observer.complete();
	                _this.loggerService.log(_this.serviceName, 'Get cities weather from array', statusMessage_1.StatusMessage.Info);
	            });
	        }
	    };
	    WeatherService.prototype.getCitiesWeatherByIds = function (cities) {
	        var _this = this;
	        if ((new Date()).getTime() - this.timeRequestIds.getTime() < this.refreshDataTime) {
	            return new Observable_1.Observable(function (observer) {
	                observer.next(cities);
	                observer.complete();
	                _this.loggerService.log(_this.serviceName, "Get cities weather by ids from array", statusMessage_1.StatusMessage.Info);
	            });
	        }
	        var ids = cities.map(function (city) { return city.id; });
	        var idsMaxCnt = 20, index = 0, params = new http_1.URLSearchParams(), obsArr = [];
	        params.set('appid', this.appid);
	        while (ids.length > index * idsMaxCnt) {
	            params.set('id', ids.slice(index * idsMaxCnt, (index + 1) * idsMaxCnt).join(','));
	            obsArr.push(this.http.get(this.citiesByIdsUrl, { search: params })
	                .map(function (result) {
	                var citiesIds = result.json();
	                _this.loggerService.log(_this.serviceName, "Get cities weather by ids from " + citiesIds.list[0].name + " to " + citiesIds.list[citiesIds.cnt - 1].name + " from API (inside map)", statusMessage_1.StatusMessage.Success);
	                return citiesIds.list || [];
	            })
	                .catch(function (error) { _this.loggerService.log(_this.serviceName, 'Error when getting cities weather by ids from API (inside map)', statusMessage_1.StatusMessage.Error); }));
	            index++;
	        }
	        return Observable_1.Observable.onErrorResumeNext(obsArr)
	            .reduce(function (citiesAll, citiesNew) {
	            citiesAll = citiesAll.concat(citiesNew);
	            _this.timeRequestIds = new Date();
	            _this.loggerService.log(_this.serviceName, "Get cities weather by ids from " + citiesNew[0].name + " to " + citiesNew[citiesNew.length - 1].name + " from API (inside reduce)", statusMessage_1.StatusMessage.Info);
	            return citiesAll;
	        }, []);
	    };
	    WeatherService.prototype.getCityWeatherByName = function (cityName, units) {
	        var _this = this;
	        if (units === void 0) { units = 'metric'; }
	        var params = new http_1.URLSearchParams();
	        params.set('q', cityName);
	        params.set('units', units);
	        params.set('appid', this.appid);
	        return this.http.get(this.citiyWeatherByNameUrl, { search: params })
	            .map(function (result) {
	            var city = result.json();
	            _this.loggerService.log(_this.serviceName, "Get " + city.name + " city weather from API", statusMessage_1.StatusMessage.Success);
	            return city;
	        });
	    };
	    WeatherService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, logger_service_1.LoggerService])
	    ], WeatherService);
	    return WeatherService;
	}());
	exports.WeatherService = WeatherService;


/***/ },

/***/ 361:
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
	var share_module_1 = __webpack_require__(362);
	var cities_component_1 = __webpack_require__(372);
	var CitiesModule = (function () {
	    function CitiesModule() {
	    }
	    CitiesModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                share_module_1.ShareModule
	            ],
	            declarations: [
	                cities_component_1.CitiesComponent,
	            ],
	            exports: [
	                cities_component_1.CitiesComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CitiesModule);
	    return CitiesModule;
	}());
	exports.CitiesModule = CitiesModule;


/***/ },

/***/ 362:
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
	var common_1 = __webpack_require__(22);
	var city_component_1 = __webpack_require__(363);
	var wind_component_1 = __webpack_require__(365);
	var weatherIcon_component_1 = __webpack_require__(367);
	var kelvin2celsius_pipe_1 = __webpack_require__(368);
	var temperature_pipe_1 = __webpack_require__(369);
	var tempcolor_directive_1 = __webpack_require__(370);
	var rotate_directive_1 = __webpack_require__(371);
	var ShareModule = (function () {
	    function ShareModule() {
	    }
	    ShareModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule
	            ],
	            declarations: [
	                city_component_1.CityComponent,
	                wind_component_1.WindComponent,
	                weatherIcon_component_1.WeatherIconComponent,
	                kelvin2celsius_pipe_1.Kelvin2celsiusPipe,
	                temperature_pipe_1.TemperaturePipe,
	                tempcolor_directive_1.TempcolorDirective,
	                rotate_directive_1.RotateDirective
	            ],
	            exports: [
	                common_1.CommonModule,
	                city_component_1.CityComponent,
	                wind_component_1.WindComponent,
	                weatherIcon_component_1.WeatherIconComponent,
	                kelvin2celsius_pipe_1.Kelvin2celsiusPipe,
	                temperature_pipe_1.TemperaturePipe,
	                tempcolor_directive_1.TempcolorDirective,
	                rotate_directive_1.RotateDirective
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ShareModule);
	    return ShareModule;
	}());
	exports.ShareModule = ShareModule;


/***/ },

/***/ 363:
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
	var city_1 = __webpack_require__(364);
	var CityComponent = (function () {
	    function CityComponent() {
	        this.favorite = new core_1.EventEmitter();
	        this.remove = new core_1.EventEmitter();
	    }
	    CityComponent.prototype.onStarClick = function () {
	        this.favorite.emit(!this.isFavorite);
	    };
	    CityComponent.prototype.onRemove = function () {
	        this.remove.emit(this.city.name);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', city_1.City)
	    ], CityComponent.prototype, "city", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CityComponent.prototype, "isDisplayLetter", void 0);
	    __decorate([
	        core_1.Input('actions'), 
	        __metadata('design:type', Boolean)
	    ], CityComponent.prototype, "isWithActions", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], CityComponent.prototype, "isFavorite", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], CityComponent.prototype, "favorite", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], CityComponent.prototype, "remove", void 0);
	    CityComponent = __decorate([
	        core_1.Component({
	            selector: 'city',
	            templateUrl: './app/Components/City/city.component.html',
	            styleUrls: ['./app/Components/City/city.component.css'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CityComponent);
	    return CityComponent;
	}());
	exports.CityComponent = CityComponent;


/***/ },

/***/ 364:
/***/ function(module, exports) {

	"use strict";
	var City = (function () {
	    function City() {
	    }
	    return City;
	}());
	exports.City = City;


/***/ },

/***/ 365:
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
	var wind_1 = __webpack_require__(366);
	var WindComponent = (function () {
	    function WindComponent() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', wind_1.Wind)
	    ], WindComponent.prototype, "wind", void 0);
	    WindComponent = __decorate([
	        core_1.Component({
	            selector: 'wind',
	            templateUrl: './app/Components/Wind/wind.component.html',
	            styleUrls: ['./app/Components/Wind/wind.component.css']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WindComponent);
	    return WindComponent;
	}());
	exports.WindComponent = WindComponent;


/***/ },

/***/ 366:
/***/ function(module, exports) {

	"use strict";
	var Wind = (function () {
	    function Wind() {
	    }
	    return Wind;
	}());
	exports.Wind = Wind;


/***/ },

/***/ 367:
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
	var WeatherIconComponent = (function () {
	    function WeatherIconComponent() {
	        this.iconUrl = 'http://openweathermap.org/img/w/';
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], WeatherIconComponent.prototype, "icon", void 0);
	    WeatherIconComponent = __decorate([
	        core_1.Component({
	            selector: 'weather-icon',
	            templateUrl: './app/Components/WeatherIcon/weatherIcon.component.html',
	            styleUrls: ['./app/Components/WeatherIcon/weatherIcon.component.css']
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WeatherIconComponent);
	    return WeatherIconComponent;
	}());
	exports.WeatherIconComponent = WeatherIconComponent;


/***/ },

/***/ 368:
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
	        return Math.round(value - this.kelvin2celsius);
	    };
	    Kelvin2celsiusPipe = __decorate([
	        core_1.Pipe({ name: 'kelvin2celsius' }), 
	        __metadata('design:paramtypes', [])
	    ], Kelvin2celsiusPipe);
	    return Kelvin2celsiusPipe;
	}());
	exports.Kelvin2celsiusPipe = Kelvin2celsiusPipe;


/***/ },

/***/ 369:
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
	        return (value > 0 ? '+' : '') + value.toString();
	    };
	    TemperaturePipe = __decorate([
	        core_1.Pipe({ name: 'temperature' }), 
	        __metadata('design:paramtypes', [])
	    ], TemperaturePipe);
	    return TemperaturePipe;
	}());
	exports.TemperaturePipe = TemperaturePipe;


/***/ },

/***/ 370:
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
	var TempColor = (function () {
	    function TempColor(temp, color) {
	        this.temp = temp;
	        this.color = color;
	    }
	    return TempColor;
	}());
	var TempcolorDirective = (function () {
	    function TempcolorDirective(el) {
	        this.el = el;
	    }
	    TempcolorDirective.prototype.ngOnInit = function () {
	        var color;
	        if (this.tempColor < 0) {
	            color = Math.max(0xFF + this.tempColor * 0x5, 0x30);
	        }
	        else {
	            color = 0xFF0000 + Math.max(0x0, 0x60 - this.tempColor * 0x3) * 0x100 - Math.min(0, 0x60 - this.tempColor * 0x3);
	        }
	        this.el.nativeElement.style.color = ('0000' + color.toString(16)).slice(-6);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TempcolorDirective.prototype, "tempColor", void 0);
	    TempcolorDirective = __decorate([
	        core_1.Directive({
	            selector: '[tempColor]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], TempcolorDirective);
	    return TempcolorDirective;
	}());
	exports.TempcolorDirective = TempcolorDirective;


/***/ },

/***/ 371:
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
	var RotateDirective = (function () {
	    function RotateDirective(el) {
	        this.el = el;
	        this.rotate = 0;
	    }
	    RotateDirective.prototype.ngOnInit = function () {
	        this.el.nativeElement.style.transform = "rotate(" + this.rotate + "deg)";
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], RotateDirective.prototype, "rotate", void 0);
	    RotateDirective = __decorate([
	        core_1.Directive({
	            selector: '[rotate]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], RotateDirective);
	    return RotateDirective;
	}());
	exports.RotateDirective = RotateDirective;


/***/ },

/***/ 372:
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
	var location_service_1 = __webpack_require__(356);
	var weather_service_1 = __webpack_require__(360);
	var logger_service_1 = __webpack_require__(357);
	var statusMessage_1 = __webpack_require__(358);
	var CitiesComponent = (function () {
	    function CitiesComponent(locationService, weatherService, loggerService, changeDetector) {
	        this.locationService = locationService;
	        this.weatherService = weatherService;
	        this.loggerService = loggerService;
	        this.changeDetector = changeDetector;
	        this.componentName = 'Cities component';
	        this.firstLetter = '';
	        this.favoriteId = -1;
	        this.isContinueRefresh = true;
	    }
	    CitiesComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.locationService.getCenterCoord().subscribe(function (coord) {
	            _this.centerCoord = coord;
	            _this.loggerService.log(_this.componentName, 'Get geo coordinates', statusMessage_1.StatusMessage.Info);
	            _this.weatherService.getCitiesWeather(_this.centerCoord).subscribe(function (cities) {
	                _this.cities = cities;
	                _this.timeRequest = _this.weatherService.timeLastRequest;
	                _this.changeDetector.markForCheck();
	                _this.loggerService.log(_this.componentName, 'Get cities weather', statusMessage_1.StatusMessage.Info);
	                //4. Add real-time updates (every 5 sec) for weather via detectChanges() method
	                var self = _this;
	                self.timerRefreshId = setTimeout(function tick() {
	                    self.weatherService.getCitiesWeatherByIds(self.cities).subscribe(function (cities) {
	                        if (self.isContinueRefresh) {
	                            cities.forEach(function (city) {
	                                var index = self.cities.findIndex(function (c) { return c.id === city.id; });
	                                if (index > -1) {
	                                    self.cities[index] = Object.assign({}, city);
	                                }
	                            });
	                            self.timeRequest = self.weatherService.timeLastRequestIds;
	                            self.timerRefreshId = setTimeout(tick, 5000);
	                            self.changeDetector.markForCheck();
	                            self.loggerService.log(self.componentName, 'Refresh cities weather', statusMessage_1.StatusMessage.Info);
	                        }
	                    });
	                }, 5000);
	            });
	        });
	    };
	    CitiesComponent.prototype.isNewLetter = function (letter) {
	        var isDifferent = this.firstLetter !== letter;
	        this.firstLetter = letter;
	        return isDifferent;
	    };
	    CitiesComponent.prototype.onFavorite = function (isFavorite, index) {
	        if (isFavorite) {
	            this.favoriteId = this.cities[index].id;
	            this.loggerService.log(this.componentName, "Set city " + this.cities[index].name + " as favorite", statusMessage_1.StatusMessage.Info);
	        }
	        else {
	            this.favoriteId = -1;
	            this.loggerService.log(this.componentName, "There is not favorite city", statusMessage_1.StatusMessage.Info);
	        }
	    };
	    CitiesComponent.prototype.onRemove = function (name, index) {
	        if (this.cities[index].id === this.favoriteId) {
	            this.favoriteId = -1;
	        }
	        this.cities.splice(index, 1);
	        this.loggerService.log(this.componentName, "Delete city " + name, statusMessage_1.StatusMessage.Info);
	    };
	    CitiesComponent.prototype.addCity = function (name) {
	        var _this = this;
	        if (name) {
	            name = name.trim().toUpperCase();
	            this.weatherService.getCityWeatherByName(name, '').subscribe(function (city) {
	                var currentIndex = _this.cities.findIndex(function (c) { return c.name === city.name; });
	                if (currentIndex < 0) {
	                    currentIndex = _this.cities.findIndex(function (c) { return c.name > city.name; });
	                    if (currentIndex < 0) {
	                        _this.cities.push(city);
	                    }
	                    else {
	                        _this.cities.splice(currentIndex, 0, city);
	                    }
	                    _this.changeDetector.markForCheck();
	                    _this.loggerService.log(_this.componentName, "Add city " + city.name, statusMessage_1.StatusMessage.Info);
	                }
	            });
	        }
	    };
	    CitiesComponent.prototype.ngOnDestroy = function () {
	        clearTimeout(this.timerRefreshId);
	        this.isContinueRefresh = false;
	        this.loggerService.log(this.componentName, "Destroy component", statusMessage_1.StatusMessage.Info);
	    };
	    CitiesComponent = __decorate([
	        core_1.Component({
	            selector: 'cities',
	            templateUrl: './app/Components/Cities/cities.component.html',
	            styleUrls: ['./app/Components/Cities/cities.component.css'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [location_service_1.LocationService, weather_service_1.WeatherService, logger_service_1.LoggerService, core_1.ChangeDetectorRef])
	    ], CitiesComponent);
	    return CitiesComponent;
	}());
	exports.CitiesComponent = CitiesComponent;


/***/ },

/***/ 373:
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
	var share_module_1 = __webpack_require__(362);
	var citiesAsync_component_1 = __webpack_require__(374);
	var CitiesAsyncModule = (function () {
	    function CitiesAsyncModule() {
	    }
	    CitiesAsyncModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                share_module_1.ShareModule
	            ],
	            declarations: [
	                citiesAsync_component_1.CitiesAsyncComponent,
	            ],
	            exports: [
	                citiesAsync_component_1.CitiesAsyncComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CitiesAsyncModule);
	    return CitiesAsyncModule;
	}());
	exports.CitiesAsyncModule = CitiesAsyncModule;


/***/ },

/***/ 374:
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
	var location_service_1 = __webpack_require__(356);
	var weather_service_1 = __webpack_require__(360);
	var logger_service_1 = __webpack_require__(357);
	var statusMessage_1 = __webpack_require__(358);
	var CitiesAsyncComponent = (function () {
	    function CitiesAsyncComponent(locationService, weatherService, loggerService) {
	        this.locationService = locationService;
	        this.weatherService = weatherService;
	        this.loggerService = loggerService;
	        this.componentName = 'CitiesAsync component';
	        this.firstLetter = '';
	    }
	    CitiesAsyncComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.locationService.getCenterCoord().subscribe(function (coord) {
	            _this.centerCoord = coord;
	            _this.loggerService.log(_this.componentName, "Get geo coordinates", statusMessage_1.StatusMessage.Info);
	            _this.$cities = _this.weatherService.getCitiesWeather(_this.centerCoord);
	            _this.weatherService.getCitiesWeather(_this.centerCoord).subscribe(function () {
	                _this.timeRequest = _this.weatherService.timeLastRequest;
	            });
	        });
	    };
	    CitiesAsyncComponent.prototype.isNewLetter = function (letter) {
	        var isDifferent = this.firstLetter !== letter;
	        this.firstLetter = letter;
	        return isDifferent;
	    };
	    CitiesAsyncComponent = __decorate([
	        core_1.Component({
	            selector: 'cities-async',
	            templateUrl: './app/Components/CitiesAsync/citiesAsync.component.html',
	            styleUrls: ['./app/Components/CitiesAsync/citiesAsync.component.css']
	        }), 
	        __metadata('design:paramtypes', [location_service_1.LocationService, weather_service_1.WeatherService, logger_service_1.LoggerService])
	    ], CitiesAsyncComponent);
	    return CitiesAsyncComponent;
	}());
	exports.CitiesAsyncComponent = CitiesAsyncComponent;


/***/ },

/***/ 375:
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
	var core_2 = __webpack_require__(376);
	var map_component_1 = __webpack_require__(397);
	var MapModule = (function () {
	    function MapModule() {
	    }
	    MapModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                core_2.AgmCoreModule.forRoot({
	                    apiKey: 'AIzaSyDatH1l956GXlJ4vu1EfVfJSGoKni2-Lxk'
	                })
	            ],
	            declarations: [
	                map_component_1.MapComponent,
	            ],
	            exports: [
	                map_component_1.MapComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MapModule);
	    return MapModule;
	}());
	exports.MapModule = MapModule;


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	// main modules
	__export(__webpack_require__(377));
	__export(__webpack_require__(392));
	// Google Maps types
	// core module
	// we explicitly export the module here to prevent this Ionic 2 bug:
	// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/
	var core_module_1 = __webpack_require__(396);
	exports.AgmCoreModule = core_module_1.AgmCoreModule;
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var google_map_1 = __webpack_require__(378);
	exports.SebmGoogleMap = google_map_1.SebmGoogleMap;
	var google_map_circle_1 = __webpack_require__(386);
	exports.SebmGoogleMapCircle = google_map_circle_1.SebmGoogleMapCircle;
	var google_map_info_window_1 = __webpack_require__(387);
	exports.SebmGoogleMapInfoWindow = google_map_info_window_1.SebmGoogleMapInfoWindow;
	var google_map_marker_1 = __webpack_require__(388);
	exports.SebmGoogleMapMarker = google_map_marker_1.SebmGoogleMapMarker;
	var google_map_polygon_1 = __webpack_require__(389);
	exports.SebmGoogleMapPolygon = google_map_polygon_1.SebmGoogleMapPolygon;
	var google_map_polyline_1 = __webpack_require__(390);
	exports.SebmGoogleMapPolyline = google_map_polyline_1.SebmGoogleMapPolyline;
	var google_map_polyline_point_1 = __webpack_require__(391);
	exports.SebmGoogleMapPolylinePoint = google_map_polyline_point_1.SebmGoogleMapPolylinePoint;
	//# sourceMappingURL=directives.js.map

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var google_maps_api_wrapper_1 = __webpack_require__(379);
	var circle_manager_1 = __webpack_require__(381);
	var info_window_manager_1 = __webpack_require__(382);
	var marker_manager_1 = __webpack_require__(383);
	var polygon_manager_1 = __webpack_require__(384);
	var polyline_manager_1 = __webpack_require__(385);
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

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var maps_api_loader_1 = __webpack_require__(380);
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

/***/ 380:
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

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(379);
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

/***/ 382:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var google_maps_api_wrapper_1 = __webpack_require__(379);
	var marker_manager_1 = __webpack_require__(383);
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

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(379);
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

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(379);
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

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(5);
	var google_maps_api_wrapper_1 = __webpack_require__(379);
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

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var circle_manager_1 = __webpack_require__(381);
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

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var info_window_manager_1 = __webpack_require__(382);
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

/***/ 388:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var marker_manager_1 = __webpack_require__(383);
	var google_map_info_window_1 = __webpack_require__(387);
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

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var polygon_manager_1 = __webpack_require__(384);
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

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var polyline_manager_1 = __webpack_require__(385);
	var google_map_polyline_point_1 = __webpack_require__(391);
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

/***/ 391:
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

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var google_maps_api_wrapper_1 = __webpack_require__(379);
	exports.GoogleMapsAPIWrapper = google_maps_api_wrapper_1.GoogleMapsAPIWrapper;
	var circle_manager_1 = __webpack_require__(381);
	exports.CircleManager = circle_manager_1.CircleManager;
	var info_window_manager_1 = __webpack_require__(382);
	exports.InfoWindowManager = info_window_manager_1.InfoWindowManager;
	var marker_manager_1 = __webpack_require__(383);
	exports.MarkerManager = marker_manager_1.MarkerManager;
	var polygon_manager_1 = __webpack_require__(384);
	exports.PolygonManager = polygon_manager_1.PolygonManager;
	var polyline_manager_1 = __webpack_require__(385);
	exports.PolylineManager = polyline_manager_1.PolylineManager;
	var lazy_maps_api_loader_1 = __webpack_require__(393);
	exports.GoogleMapsScriptProtocol = lazy_maps_api_loader_1.GoogleMapsScriptProtocol;
	exports.LAZY_MAPS_API_CONFIG = lazy_maps_api_loader_1.LAZY_MAPS_API_CONFIG;
	exports.LazyMapsAPILoader = lazy_maps_api_loader_1.LazyMapsAPILoader;
	var maps_api_loader_1 = __webpack_require__(380);
	exports.MapsAPILoader = maps_api_loader_1.MapsAPILoader;
	var noop_maps_api_loader_1 = __webpack_require__(395);
	exports.NoOpMapsAPILoader = noop_maps_api_loader_1.NoOpMapsAPILoader;
	//# sourceMappingURL=services.js.map

/***/ },

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(3);
	var browser_globals_1 = __webpack_require__(394);
	var maps_api_loader_1 = __webpack_require__(380);
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

/***/ 394:
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

/***/ 395:
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

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var google_map_1 = __webpack_require__(378);
	var google_map_circle_1 = __webpack_require__(386);
	var google_map_info_window_1 = __webpack_require__(387);
	var google_map_marker_1 = __webpack_require__(388);
	var google_map_polygon_1 = __webpack_require__(389);
	var google_map_polyline_1 = __webpack_require__(390);
	var google_map_polyline_point_1 = __webpack_require__(391);
	var lazy_maps_api_loader_1 = __webpack_require__(393);
	var lazy_maps_api_loader_2 = __webpack_require__(393);
	var maps_api_loader_1 = __webpack_require__(380);
	var browser_globals_1 = __webpack_require__(394);
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

/***/ 397:
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
	var location_service_1 = __webpack_require__(356);
	var weather_service_1 = __webpack_require__(360);
	var logger_service_1 = __webpack_require__(357);
	var cityCoordinates_1 = __webpack_require__(359);
	var statusMessage_1 = __webpack_require__(358);
	var MapComponent = (function () {
	    function MapComponent(locationService, weatherService, loggerService) {
	        var _this = this;
	        this.locationService = locationService;
	        this.weatherService = weatherService;
	        this.loggerService = loggerService;
	        this.componentName = 'Map component';
	        this.centerCoord = new cityCoordinates_1.CityCoordinates(0, 0);
	        locationService.getCenterCoord().subscribe(function (coord) {
	            _this.centerCoord = coord;
	            _this.loggerService.log(_this.componentName, 'Get geo coordinates', statusMessage_1.StatusMessage.Info);
	        });
	    }
	    MapComponent = __decorate([
	        core_1.Component({
	            selector: 'map',
	            templateUrl: './app/Components/Map/map.component.html',
	            styleUrls: ['./app/Components/Map/map.component.css']
	        }), 
	        __metadata('design:paramtypes', [location_service_1.LocationService, weather_service_1.WeatherService, logger_service_1.LoggerService])
	    ], MapComponent);
	    return MapComponent;
	}());
	exports.MapComponent = MapComponent;


/***/ },

/***/ 398:
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
	var weatherInCity_component_1 = __webpack_require__(399);
	var weather_pipe_1 = __webpack_require__(400);
	var WeatherInCityModule = (function () {
	    function WeatherInCityModule() {
	    }
	    WeatherInCityModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                weatherInCity_component_1.WeatherInCityComponent,
	                weather_pipe_1.WeatherPipe,
	            ],
	            exports: [
	                weatherInCity_component_1.WeatherInCityComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WeatherInCityModule);
	    return WeatherInCityModule;
	}());
	exports.WeatherInCityModule = WeatherInCityModule;


/***/ },

/***/ 399:
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
	var logger_service_1 = __webpack_require__(357);
	var statusMessage_1 = __webpack_require__(358);
	var WeatherInCityComponent = (function () {
	    function WeatherInCityComponent(loggerService) {
	        this.loggerService = loggerService;
	        this.componentName = 'WeatherInCity component';
	    }
	    WeatherInCityComponent.prototype.refreshName = function (cityName) {
	        if (cityName) {
	            this.cityName = cityName;
	            this.loggerService.log(this.componentName, 'Click on "Get weather" button', statusMessage_1.StatusMessage.Info);
	        }
	    };
	    WeatherInCityComponent = __decorate([
	        core_1.Component({
	            selector: 'weather-in-city',
	            templateUrl: './app/Components/WeatherInCity/weatherInCity.component.html',
	            styleUrls: ['./app/Components/WeatherInCity/weatherInCity.component.css']
	        }), 
	        __metadata('design:paramtypes', [logger_service_1.LoggerService])
	    ], WeatherInCityComponent);
	    return WeatherInCityComponent;
	}());
	exports.WeatherInCityComponent = WeatherInCityComponent;


/***/ },

/***/ 400:
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
	var weather_service_1 = __webpack_require__(360);
	var logger_service_1 = __webpack_require__(357);
	var statusMessage_1 = __webpack_require__(358);
	var CityWeather = (function () {
	    function CityWeather(name, city, timeRequest, isRequestGoes) {
	        if (city === void 0) { city = null; }
	        if (timeRequest === void 0) { timeRequest = null; }
	        if (isRequestGoes === void 0) { isRequestGoes = false; }
	        this.name = name;
	        this.city = city;
	        this.timeRequest = timeRequest;
	        this.isRequestGoes = isRequestGoes;
	    }
	    return CityWeather;
	}());
	var WeatherPipe = (function () {
	    function WeatherPipe(weatherService, loggerService) {
	        this.weatherService = weatherService;
	        this.loggerService = loggerService;
	        this.pipeName = 'Weather pipe';
	        this.cities = [];
	    }
	    WeatherPipe.prototype.transform = function (value) {
	        var _this = this;
	        var resultHtml = '';
	        if (value) {
	            value = value.trim().toUpperCase();
	            var cityWeather_1 = this.cities.find(function (cw) { return cw.name === value; });
	            if (cityWeather_1) {
	                this.loggerService.log(this.pipeName, "Get " + cityWeather_1.name + " city weather from array", statusMessage_1.StatusMessage.Info);
	            }
	            else {
	                cityWeather_1 = new CityWeather(value);
	                this.cities.push(cityWeather_1);
	            }
	            if (!cityWeather_1.isRequestGoes && (!cityWeather_1.timeRequest || (new Date()).getTime() - cityWeather_1.timeRequest.getTime() > 10 * 60 * 1000)) {
	                cityWeather_1.isRequestGoes = true;
	                this.weatherService.getCityWeatherByName(value).subscribe(function (city) {
	                    cityWeather_1.timeRequest = new Date();
	                    cityWeather_1.city = city;
	                    cityWeather_1.isRequestGoes = false;
	                    _this.loggerService.log(_this.pipeName, "Get " + city.name + " city weather from API", statusMessage_1.StatusMessage.Info);
	                });
	            }
	            if (cityWeather_1 && cityWeather_1.city) {
	                resultHtml = "<table class=\"weather-table\">\n                                <caption class=\"weather-table-caption\">\n                                    <div>Weather in " + cityWeather_1.city.name + "</div>\n                                    <div>Last refreshed " + (('0' + cityWeather_1.timeRequest.getHours().toString()).slice(-2) + ':' + ('0' + cityWeather_1.timeRequest.getMinutes().toString()).slice(-2)) + "</div>\n                                </caption>\n                                <tbody>\n                                    <tr class=\"weather-table-tr\">\n                                        <td>Temperature</td>\n                                        <td>" + cityWeather_1.city.main.temp.toFixed(0) + "</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Wind</td>\n                                        <td>" + cityWeather_1.city.wind.speed + "</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Cloudiness</td>\n                                        <td>" + cityWeather_1.city.clouds.all + "</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Pressure</td>\n                                        <td>" + cityWeather_1.city.main.pressure + "</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Humidity</td>\n                                        <td>" + cityWeather_1.city.main.humidity + "</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Geo coordinates</td>\n                                        <td>[" + cityWeather_1.city.coord.lat.toFixed(2) + ", " + cityWeather_1.city.coord.lon.toFixed(2) + "]</td>\n                                    </tr>\n                                </tbody>\n                            </table>";
	            }
	            else {
	                resultHtml = '<div class="nodata">No data</div>';
	            }
	        }
	        return resultHtml;
	    };
	    WeatherPipe = __decorate([
	        core_1.Pipe({
	            name: 'weather',
	            pure: false
	        }), 
	        __metadata('design:paramtypes', [weather_service_1.WeatherService, logger_service_1.LoggerService])
	    ], WeatherPipe);
	    return WeatherPipe;
	}());
	exports.WeatherPipe = WeatherPipe;


/***/ },

/***/ 401:
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
	var AppComponent = (function () {
	    function AppComponent(zone, changeDetectorRef) {
	        this.zone = zone;
	        this.changeDetectorRef = changeDetectorRef;
	        this.timeGetStable = 0;
	        this.timeStartTask = new Date();
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.zone.onUnstable.subscribe(function () {
	            _this.timeStartTask = new Date();
	        });
	        this.zone.onStable.subscribe(function () {
	            _this.timeGetStable = (new Date()).getTime() - _this.timeStartTask.getTime();
	        });
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            templateUrl: './app/app.component.html',
	            styleUrls: ['./app/app.component.css']
	        }), 
	        __metadata('design:paramtypes', [core_1.NgZone, core_1.ChangeDetectorRef])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ }

});
//# sourceMappingURL=app.bundle.js.map