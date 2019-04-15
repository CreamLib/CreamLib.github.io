/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
export class AccordionComponent {
    constructor() {
        this.groups = [];
    }
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        this.groups.push(group);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeOthers(openGroup) {
        this.groups.forEach((group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeAll(openGroup) {
        this.groups.forEach((group) => {
            group.isOpen = false;
        });
    }
    /**
     * @param {?} group
     * @return {?}
     */
    removeGroup(group) {
        /** @type {?} */
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-accordion',
                template: "<ul class=\"accordion\">\n  <ng-content></ng-content>\n</ul>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [""]
            }] }
];
if (false) {
    /** @type {?} */
    AccordionComponent.prototype.groups;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjcmVhbWxpYi9uZy8iLCJzb3VyY2VzIjpbImMzbS9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVM3RCxNQUFNLE9BQU8sa0JBQWtCO0lBTi9CO1FBT0UsV0FBTSxHQUFrQyxFQUFFLENBQUM7SUEwQjdDLENBQUM7Ozs7O0lBeEJDLFFBQVEsQ0FBQyxLQUE2QjtRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFpQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQTZCLEVBQUUsRUFBRTtZQUNwRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxTQUFpQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQTZCLEVBQUUsRUFBRTtZQUNwRCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQTZCOztjQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDBFQUF5QztnQkFFekMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O0lBRUMsb0NBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWNjb3JkaW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWFjY29yZGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24uY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCB7XG4gIGdyb3VwczogQXJyYXk8QWNjb3JkaW9uSXRlbUNvbXBvbmVudD4gPSBbXTtcblxuICBhZGRHcm91cChncm91cDogQWNjb3JkaW9uSXRlbUNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xuICB9XG5cbiAgY2xvc2VPdGhlcnMob3Blbkdyb3VwOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvbkl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgIGlmIChncm91cCAhPT0gb3Blbkdyb3VwKSB7XG4gICAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VBbGwob3Blbkdyb3VwOiBBY2NvcmRpb25JdGVtQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IEFjY29yZGlvbkl0ZW1Db21wb25lbnQpID0+IHtcbiAgICAgIGdyb3VwLmlzT3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlR3JvdXAoZ3JvdXA6IEFjY29yZGlvbkl0ZW1Db21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ3JvdXBzLmluZGV4T2YoZ3JvdXApO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZ3JvdXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG59XG4iXX0=