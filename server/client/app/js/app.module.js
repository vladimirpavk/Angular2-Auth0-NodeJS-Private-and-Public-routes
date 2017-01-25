System.register(['@angular/core', '@angular/platform-browser', '@angular/http', './app.component', './homecomponent/home.component', './logincomponent/login.component', './pagenotfoundcomponent/pagenotfound.component', './app.routes', '@angular/common', 'angular2-jwt'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, http_1, app_component_1, home_component_1, login_component_1, pagenotfound_component_1, app_routes_1, common_1, angular2_jwt_1;
    var AppModule;
    function authConfigProvider() {
        return new angular2_jwt_1.AuthConfig();
    }
    exports_1("authConfigProvider", authConfigProvider);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (pagenotfound_component_1_1) {
                pagenotfound_component_1 = pagenotfound_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule],
                    declarations: [app_component_1.AppComponent,
                        home_component_1.HomeComponent,
                        login_component_1.LoginComponent,
                        pagenotfound_component_1.PageNotFoundComponent
                    ],
                    bootstrap: [app_component_1.AppComponent],
                    providers: [angular2_jwt_1.AUTH_PROVIDERS,
                        {
                            provide: common_1.LocationStrategy,
                            useClass: common_1.HashLocationStrategy
                        },
                        app_routes_1.appRoutingProviders,
                        {
                            provide: angular2_jwt_1.AuthConfig,
                            useFactory: authConfigProvider
                        }
                    ]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
