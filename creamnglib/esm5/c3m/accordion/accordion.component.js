/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
        this.groups = [];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.addGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        this.groups.push(group);
    };
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeOthers = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        this.groups.forEach(function (group) {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    };
    /**
     * @param {?} openGroup
     * @return {?}
     */
    AccordionComponent.prototype.closeAll = /**
     * @param {?} openGroup
     * @return {?}
     */
    function (openGroup) {
        this.groups.forEach(function (group) {
            group.isOpen = false;
        });
    };
    /**
     * @param {?} group
     * @return {?}
     */
    AccordionComponent.prototype.removeGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    };
    AccordionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'c3m-accordion',
                    template: "<ul class=\"accordion\">\n  <ng-content></ng-content>\n</ul>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [""]
                }] }
    ];
    return AccordionComponent;
}());
export { AccordionComponent };
if (false) {
    /** @type {?} */
    AccordionComponent.prototype.groups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RDtJQUFBO1FBT0UsV0FBTSxHQUFrQyxFQUFFLENBQUM7SUEwQjdDLENBQUM7Ozs7O0lBeEJDLHFDQUFROzs7O0lBQVIsVUFBUyxLQUE2QjtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxTQUFpQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQTZCO1lBQ2hELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdEI7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLFNBQWlDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBNkI7WUFDaEQsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxLQUE2Qjs7WUFDakMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkFoQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QiwwRUFBeUM7b0JBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7O0lBNEJELHlCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0EzQlksa0JBQWtCOzs7SUFDN0Isb0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XG4gIGdyb3VwczogQXJyYXk8QWNjb3JkaW9uSXRlbUNvbXBvbmVudD4gPSBbXTtcblxuICBhZGRHcm91cChncm91cDogQWNjb3JkaW9uSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xuICB9XG5cbiAgY2xvc2VPdGhlcnMob3Blbkdyb3VwOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvbkl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VBbGwob3Blbkdyb3VwOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvbkl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlR3JvdXAoZ3JvdXA6IEFjY29yZGlvbkl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=