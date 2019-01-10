(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@fullpage/angular-fullpage', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.fullpage = global.fullpage || {}, global.fullpage['angular-fullpage'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fullpage = null;
    if (!fullpage && typeof window !== 'undefined') {
        fullpage = require('fullpage.js/dist/fullpage.extensions.min');
    }
    var FullpageDirective = /** @class */ (function () {
        function FullpageDirective(platformId, renderer) {
            this.platformId = platformId;
            this.renderer = renderer;
            this.ref = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FullpageDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (common.isPlatformBrowser(this.platformId)) {
                    this.initFullpage();
                }
                if (common.isPlatformServer(this.platformId)) ;
            };
        /**
         * @return {?}
         */
        FullpageDirective.prototype.initFullpage = /**
         * @return {?}
         */
            function () {
                this.fullpage_api = new fullpage('#' + this.id, this.options);
                this.addBuildFunction();
                this.ref.emit(this.fullpage_api);
            };
        /**
         * @return {?}
         */
        FullpageDirective.prototype.addBuildFunction = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.fullpage_api.build = function () {
                    /** @type {?} */
                    var activeSection = _this.fullpage_api.getActiveSection();
                    /** @type {?} */
                    var activeSlide = _this.fullpage_api.getActiveSlide();
                    // bug destroy(all) also destroyed angular events such as (click)
                    _this.destroyFullpage();
                    if (activeSection) {
                        _this.renderer.addClass(activeSection.item, 'active');
                    }
                    if (activeSlide) {
                        _this.renderer.addClass(activeSlide.item, 'active');
                    }
                    _this.initFullpage();
                };
            };
        /**
         * @return {?}
         */
        FullpageDirective.prototype.destroyFullpage = /**
         * @return {?}
         */
            function () {
                if (typeof this.fullpage_api !== 'undefined' && typeof this.fullpage_api.destroy !== 'undefined') {
                    this.fullpage_api.destroy('all');
                }
            };
        /**
         * @return {?}
         */
        FullpageDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroyFullpage();
            };
        FullpageDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[fullpage]'
                    },] }
        ];
        FullpageDirective.ctorParameters = function () {
            return [
                { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
                { type: core.Renderer2 }
            ];
        };
        FullpageDirective.propDecorators = {
            id: [{ type: core.Input }],
            options: [{ type: core.Input }],
            ref: [{ type: core.Output }]
        };
        return FullpageDirective;
    }());
    var AnchorLinkDirective = /** @class */ (function () {
        function AnchorLinkDirective() {
        }
        /**
         * @param {?} event
         * @return {?}
         */
        AnchorLinkDirective.prototype.onClick = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this.href.length > 0 && this.href[0] === '#') {
                    event.preventDefault();
                    window.location.hash = this.href;
                }
            };
        AnchorLinkDirective.decorators = [
            { type: core.Directive, args: [{
                        // tslint:disable-next-line:directive-selector
                        selector: '[href]'
                    },] }
        ];
        AnchorLinkDirective.propDecorators = {
            href: [{ type: core.Input }],
            onClick: [{ type: core.HostListener, args: ['click', ['$event'],] }]
        };
        return AnchorLinkDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var AngularFullpageModule = /** @class */ (function () {
        function AngularFullpageModule() {
        }
        AngularFullpageModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [FullpageDirective, AnchorLinkDirective],
                        exports: [FullpageDirective, AnchorLinkDirective]
                    },] }
        ];
        return AngularFullpageModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.AngularFullpageModule = AngularFullpageModule;
    exports.ɵb = AnchorLinkDirective;
    exports.ɵa = FullpageDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHBhZ2UtYW5ndWxhci1mdWxscGFnZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BmdWxscGFnZS9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9mdWxscGFnZS5kaXJlY3RpdmUudHMiLCJuZzovL0BmdWxscGFnZS9hbmd1bGFyLWZ1bGxwYWdlL2xpYi9hbmd1bGFyLWZ1bGxwYWdlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmRlY2xhcmUgdmFyIHJlcXVpcmU7XG5sZXQgZnVsbHBhZ2UgPSBudWxsO1xuaWYgKCFmdWxscGFnZSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBmdWxscGFnZSA9IHJlcXVpcmUoJ2Z1bGxwYWdlLmpzL2Rpc3QvZnVsbHBhZ2UuZXh0ZW5zaW9ucy5taW4nKTtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbZnVsbHBhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBGdWxscGFnZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIG9wdGlvbnM7XG4gIEBPdXRwdXQoKSByZWYgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZ1bGxwYWdlX2FwaTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5pbml0RnVsbHBhZ2UoKTtcbiAgICB9XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgLy8gc2VydmVyIHNpZGUgY29kZVxuICAgIH1cbiAgfVxuXG4gIGluaXRGdWxscGFnZSgpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaSA9IG5ldyBmdWxscGFnZSgnIycgKyB0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYWRkQnVpbGRGdW5jdGlvbigpO1xuICAgIHRoaXMucmVmLmVtaXQodGhpcy5mdWxscGFnZV9hcGkpO1xuICB9XG5cbiAgYWRkQnVpbGRGdW5jdGlvbigpIHtcbiAgICB0aGlzLmZ1bGxwYWdlX2FwaS5idWlsZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSB0aGlzLmZ1bGxwYWdlX2FwaS5nZXRBY3RpdmVTZWN0aW9uKCk7XG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHRoaXMuZnVsbHBhZ2VfYXBpLmdldEFjdGl2ZVNsaWRlKCk7XG5cbiAgICAgIC8vIGJ1ZyBkZXN0cm95KGFsbCkgYWxzbyBkZXN0cm95ZWQgYW5ndWxhciBldmVudHMgc3VjaCBhcyAoY2xpY2spXG4gICAgICB0aGlzLmRlc3Ryb3lGdWxscGFnZSgpO1xuXG4gICAgICBpZiAoYWN0aXZlU2VjdGlvbikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGFjdGl2ZVNlY3Rpb24uaXRlbSwgJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlU2xpZGUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhhY3RpdmVTbGlkZS5pdGVtLCAnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdEZ1bGxwYWdlKCk7XG4gICAgfTtcbiAgfVxuXG4gIGRlc3Ryb3lGdWxscGFnZSgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZnVsbHBhZ2VfYXBpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5mdWxscGFnZV9hcGkuZGVzdHJveSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuZnVsbHBhZ2VfYXBpLmRlc3Ryb3koJ2FsbCcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUZ1bGxwYWdlKCk7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3JcbiAgc2VsZWN0b3IgOiAnW2hyZWZdJ1xufSlcbmV4cG9ydCBjbGFzcyBBbmNob3JMaW5rRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaHJlZjogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25DbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLmhyZWYubGVuZ3RoID4gMCAmJiB0aGlzLmhyZWZbMF0gPT09ICcjJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdGhpcy5ocmVmO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZ1bGxwYWdlRGlyZWN0aXZlLCBBbmNob3JMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9mdWxscGFnZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbRnVsbHBhZ2VEaXJlY3RpdmUsIEFuY2hvckxpbmtEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRnVsbHBhZ2VEaXJlY3RpdmUsIEFuY2hvckxpbmtEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJGdWxscGFnZU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJpc1BsYXRmb3JtQnJvd3NlciIsImlzUGxhdGZvcm1TZXJ2ZXIiLCJEaXJlY3RpdmUiLCJJbmplY3QiLCJQTEFURk9STV9JRCIsIlJlbmRlcmVyMiIsIklucHV0IiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQUlJLFFBQVEsR0FBRyxJQUFJO0lBQ25CLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQzlDLFFBQVEsR0FBRyxPQUFPLENBQUMsMENBQTBDLENBQUMsQ0FBQztLQUNoRTtBQUVEO1FBVUUsMkJBQytCLFVBQWtCLEVBQ3ZDLFFBQW1CO1lBREUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtZQUN2QyxhQUFRLEdBQVIsUUFBUSxDQUFXO1lBTG5CLFFBQUcsR0FBRyxJQUFJQSxpQkFBWSxFQUFFLENBQUM7U0FPbEM7Ozs7UUFFRCxvQ0FBUTs7O1lBQVI7Z0JBQ0UsSUFBSUMsd0JBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO2dCQUNELElBQUlDLHVCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUV0QzthQUNGOzs7O1FBRUQsd0NBQVk7OztZQUFaO2dCQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDOzs7O1FBRUQsNENBQWdCOzs7WUFBaEI7Z0JBQUEsaUJBa0JDO2dCQWpCQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRzs7d0JBQ2xCLGFBQWEsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFOzt3QkFDcEQsV0FBVyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFOztvQkFHdEQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUV2QixJQUFJLGFBQWEsRUFBRTt3QkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDdEQ7b0JBRUQsSUFBSSxXQUFXLEVBQUU7d0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDcEQ7b0JBRUQsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQixDQUFDO2FBQ0g7Ozs7UUFFRCwyQ0FBZTs7O1lBQWY7Z0JBQ0UsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO29CQUNoRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEM7YUFDRjs7OztRQUVELHVDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7O29CQTNERkMsY0FBUyxTQUFDOzt3QkFFVCxRQUFRLEVBQUUsWUFBWTtxQkFDdkI7Ozs7d0JBUTRDLE1BQU0sdUJBQTlDQyxXQUFNLFNBQUNDLGdCQUFXO3dCQXBCNkNDLGNBQVM7Ozs7eUJBYzFFQyxVQUFLOzhCQUNMQSxVQUFLOzBCQUNMQyxXQUFNOztRQXFEVCx3QkFBQztLQTVERCxJQTREQzs7UUFFRDtTQWFDOzs7OztRQU5vQyxxQ0FBTzs7OztZQUExQyxVQUEyQyxLQUFLO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDaEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNsQzthQUNGOztvQkFaRkwsY0FBUyxTQUFDOzt3QkFFVCxRQUFRLEVBQUcsUUFBUTtxQkFDcEI7OzsyQkFFRUksVUFBSzs4QkFFTEUsaUJBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O1FBTW5DLDBCQUFDO0tBYkQ7Ozs7OztBQ3ZFQTtRQUdBO1NBS3NDOztvQkFMckNDLGFBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUUsRUFBRTt3QkFDWCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQzt3QkFDdEQsT0FBTyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7cUJBQ2xEOztRQUNvQyw0QkFBQztLQUx0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9