/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
export class CalendarComponent {
    /* ********* CONSTRUCTOR ********* */
    /**
     * @param {?} eRef
     * @param {?} renderer
     */
    constructor(eRef, renderer) {
        this.eRef = eRef;
        this.renderer = renderer;
        this.targetString = ' ';
        this.type = 'text';
        this.keys = {};
    }
    /* ************ ON INIT *********** */
    /**
     * @return {?}
     */
    ngOnInit() {
        this.datepicker(true);
        if (this.type === 'date') {
            if (this.checkDateInput()) {
                this.renderer.setStyle(this.buttonShow.nativeElement, 'display', 'none');
            }
        }
    }
    /* ************** MAIN FUNCTION ************** */
    /**
     * @param {?} modal
     * @return {?}
     */
    datepicker(modal) {
        /* All the selectors */
        this.dp = this.dp.nativeElement;
        this.prev = this.prev.nativeElement;
        this.next = this.next.nativeElement;
        this.grid = this.grid.nativeElement;
        this.target = this.target.nativeElement;
        this.bModal = modal; // true if datepicker should appear in modal
        // Month Names
        this.monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        // Day Names
        this.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // DATE
        this.dateObj = new Date();
        // Current Date
        this.curYear = this.dateObj.getFullYear(); // Get the Year using Local Time
        this.year = this.curYear;
        this.curMonth = this.dateObj.getMonth(); // Get the Month using Local Time
        this.month = this.curMonth;
        this.currentDate = true;
        this.date = this.dateObj.getDate();
        // Keyboard Keys
        this.keys = {
            tab: 9,
            enter: 13,
            esc: 27,
            space: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40
        };
        // Stock name of current Date
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        // Fill the calendar grid
        this.fillGrid();
        // Point Activedescendant to the current day
        /** @type {?} */
        const today = this.grid.querySelector('.today');
        this.grid.setAttribute('aria-activedescendant', today.getAttribute('id'));
        // Call all events listener
        this.bindHandlers();
    }
    /* ************ CHECK IF TYPE DATE IS SUPPORTED ******** */
    /**
     * @return {?}
     */
    checkDateInput() {
        /** @type {?} */
        const input = document.createElement('input');
        input.setAttribute('type', 'date');
        /** @type {?} */
        const notADateValue = 'not-a-date';
        input.setAttribute('value', notADateValue);
        return input.value !== notADateValue;
    }
    /* ************ BIND ALL THE BUTTON WITH EVENT LISTENER ******** */
    /**
     * @return {?}
     */
    bindHandlers() {
        /** @type {?} */
        const thisobj = this;
        /* ---------------------------------------------- */
        thisobj.renderer.listen(this.grid, 'keydown', e => {
            return thisobj.handleGridKeyDown(e);
        });
        thisobj.renderer.listen(this.grid, 'keypress', e => {
            return thisobj.handleGridKeyDown(e);
        });
        thisobj.renderer.listen(this.grid, 'focus', () => {
            return thisobj.handleGridFocus();
        });
        thisobj.renderer.listen(this.grid, 'blur', () => {
            return thisobj.handleGridBlur();
        });
        /* ---------------------------------------------- */
        this.addEventListenerList(thisobj);
    }
    /* ************************** HANDLE GRID BLUR ********************** */
    /**
     * @return {?}
     */
    handleGridBlur() {
        if (this.eRef.nativeElement.querySelector('#' + this.grid.getAttribute('aria-activedescendant'))) {
            /** @type {?} */
            const idActiveDescendant = this.eRef.nativeElement.querySelector('#' + this.grid.getAttribute('aria-activedescendant'));
            idActiveDescendant.classList.remove('focus');
            idActiveDescendant.setAttribute('aria-selected', 'false');
        }
        return true;
    }
    /* ************************** HANDLE GRID FOCUS ********************** */
    /**
     * @return {?}
     */
    handleGridFocus() {
        /** @type {?} */
        const active = this.grid.getAttribute('aria-activedescendant');
        if (this.eRef.nativeElement.querySelector('#' + active).getAttribute('id') === undefined) {
            /** @type {?} */
            const lastDay = 'day' + this.calcNumDays(this.year, this.month);
            this.eRef.nativeElement.querySelector('#' + lastDay).classList.add('focus');
            this.eRef.nativeElement.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
        }
        else {
            this.eRef.nativeElement.querySelector('#' + active).classList.add('focus');
            this.eRef.nativeElement.querySelector('#' + active).setAttribute('aria-selected', 'true');
        }
        return true;
    }
    /* ************************** HANDLE KEY PRESS ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleGridKeyPress(e) {
        if (e.altKey) {
            return true;
        }
        switch (e.keyCode) {
            case this.keys.tab:
            case this.keys.enter:
            case this.keys.space:
            case this.keys.esc:
            case this.keys.left:
            case this.keys.right:
            case this.keys.up:
            case this.keys.down:
            case this.keys.pageup:
            case this.keys.pagedown:
            case this.keys.home:
            case this.keys.end: {
                e.stopPropagation();
                return false;
            }
        }
        return true;
    }
    /* ************************** HANDLE GRID CLICK ********************** */
    /**
     * @param {?} id
     * @param {?} e
     * @return {?}
     */
    handleGridClick(id, e) {
        /** @type {?} */
        const cell = id;
        // If Cell is empty
        if (cell.classList.contains('empty')) {
            return true;
        }
        // Get Focus Cell
        /** @type {?} */
        const tmpCell = this.grid.querySelector('.focus');
        tmpCell.classList.remove('focus');
        tmpCell.setAttribute('aria-selected', 'false');
        // Add New Focus Cell
        cell.classList.add('focus');
        cell.setAttribute('aria-selected', 'true');
        // Change Grid ActiveDescendant to the newCellId
        this.grid.setAttribute('aria-activedescendant', cell.getAttribute('id'));
        // Get the new Click Cell
        /** @type {?} */
        const curDay = this.eRef.nativeElement.querySelector(`#${this.grid.getAttribute('aria-activedescendant')}`);
        // Change the targetString to represente the new current date
        /** @type {?} */
        const x = curDay.firstChild.nodeValue;
        this.targetString =
            (this.month < 9 ? '0' : '') +
                (this.month + 1) +
                '/' +
                (parseInt(x, 10) < 9 ? '0' : '') +
                curDay.firstChild.nodeValue +
                '/' +
                this.year;
        // Hide modal Dialog
        this.hideDlg();
        e.stopPropagation();
        return false;
    }
    /* ************************** ADD EVENT LISTENER FOR MULTIPLE ELEMENTS  ********************** */
    /**
     * @param {?} thisobj
     * @return {?}
     */
    addEventListenerList(thisobj) {
        /** @type {?} */
        const list = this.grid.querySelectorAll('td');
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        const len = list.length;
        for (i = 0; i < len; i++) {
            /** @type {?} */
            const itemList = list[i];
            /*itemList.addEventListener('click', function(e){
                return thisobj.handleGridClick(this, e);
              });*/
            thisobj.renderer.listen(itemList, 'click', e => {
                return thisobj.handleGridClick(itemList, e);
            });
        }
    }
    /* ************************** HANDLE PREVIOUS BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handlePrevClick(e) {
        /** @type {?} */
        const active = this.grid.getAttribute('aria-activedescendant');
        if (e.ctrlKey) {
            this.showPrevYear();
        }
        else {
            this.showPrevMonth(1);
        }
        if (this.currentDate === false) {
            this.grid.setAttribute('aria-activedescendant', 'day1');
        }
        else {
            this.grid.setAttribute('aria-activedescendant', 'active');
        }
        e.stopPropagation();
        return false;
    }
    /* ************************** HANDLE NEXT BUTTON CLICK ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleNextClick(e) {
        /** @type {?} */
        const active = this.grid.getAttribute('aria-activedescendant');
        if (e.ctrlKey) {
            this.showNextYear();
        }
        else {
            this.showNextMonth(1);
        }
        if (this.currentDate === false) {
            this.grid.setAttribute('aria-activedescendant', 'day1');
        }
        else {
            this.grid.setAttribute('aria-activedescendant', active);
        }
        e.stopPropagation();
        return false;
    }
    /* ************************** HANDLE PREVIOUS BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handlePrevKeyDown(e) {
        if (e.altKey) {
            return true;
        }
        switch (e.keyCode) {
            case this.keys.tab: {
                e.preventDefault();
                if (e.ctrlKey) {
                    return true;
                }
                else if (e.shiftKey) {
                    this.grid.focus();
                }
                else {
                    this.next.focus();
                }
                e.stopPropagation();
                return false;
            }
            case this.keys.enter:
            case this.keys.space: {
                if (e.shiftKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showPrevYear();
                }
                else {
                    this.showPrevMonth(1);
                }
                e.stopPropagation();
                return false;
            }
        }
        return true;
    }
    /* ************************** HANDLE NEXT BUTTON KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleNextKeyDown(e) {
        // Alt
        if (e.altKey) {
            return true;
        }
        // ENTER OR SPACE
        switch (e.keyCode) {
            case this.keys.enter:
            case this.keys.space: {
                // CTRL + SPACE   OR CTRL + ENTER
                if (e.ctrlKey) {
                    this.showNextYear();
                }
                else {
                    this.showNextMonth(1);
                }
                e.stopPropagation();
                return false;
            }
        }
        return true;
    }
    /* ************************** SHOW DIALOG ********************** */
    /**
     * @return {?}
     */
    showDlg() {
        /** @type {?} */
        const thisObj = this;
        // Bind Event Listener
        thisObj.renderer.listen(this.eRef.nativeElement, 'click', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mousedown', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mouseup', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mousemove', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.renderer.listen(this.eRef.nativeElement, 'mouseover', e => {
            return thisObj.showDialogMethod(e);
        });
        thisObj.dp.setAttribute('aria-hidden', 'false');
        this.grid.focus();
    }
    /* ************************** ShowDialog Modal Method ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    showDialogMethod(e) {
        this.grid.focus();
        e.stopPropagation();
        return false;
    }
    /* ************************** HANDLE GRID CELL KEYDOWN ********************** */
    /**
     * @param {?} e
     * @return {?}
     */
    handleGridKeyDown(e) {
        /** @type {?} */
        const rows = this.grid.querySelectorAll('tbody tr');
        /** @type {?} */
        const curDay = this.eRef.nativeElement.querySelector(`#${this.grid.getAttribute('aria-activedescendant')}`);
        /** @type {?} */
        let days = this.grid.querySelectorAll('td:not(.empty)');
        /** @type {?} */
        const curRow = curDay.parentElement;
        // ALT
        if (e.altKey) {
            return true;
        }
        // TAB
        switch (e.keyCode) {
            case this.keys.tab: {
                e.preventDefault();
                if (this.bModal === true) {
                    // SHIFT + TAB
                    if (e.shiftKey) {
                        this.next.focus();
                    }
                    else {
                        this.prev.focus();
                    }
                    e.stopPropagation();
                    return false;
                }
                break;
            }
            // ENTER OR SPACE
            case this.keys.enter:
            case this.keys.space: {
                // CTRL ENTER OR CTRL SPACE
                if (e.ctrlKey) {
                    return true;
                }
                // update targent box
                this.targetString =
                    (this.month < 9 ? '0' : '') + (this.month + 1) + '/' + curDay.firstChild.nodeValue + '/' + this.year;
                this.hideDlg();
                return false;
            }
            // ESCAPE
            case this.keys.esc: {
                this.hideDlg();
                e.stopPropagation();
                return false;
            }
            // LEFT
            case this.keys.left: {
                // LEFT + CTRL OR LEFT + SHIFT
                if (e.ctlrKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                const dayIndex = days.indexOf(curDay) - 1;
                /** @type {?} */
                let prevDay = null;
                if (dayIndex >= 0) {
                    prevDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    prevDay.classList.add('focus');
                    prevDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
                }
                else {
                    this.showPrevMonth(1);
                }
                e.stopPropagation();
                return false;
            }
            // RIGHT
            case this.keys.right: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                const dayIndex = days.indexOf(curDay) + 1;
                /** @type {?} */
                let nextDay = null;
                if (dayIndex < days.length) {
                    nextDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    nextDay.classList.add('focus');
                    nextDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
                }
                else {
                    this.showNextMonth(1);
                }
                e.stopPropagation();
                return false;
            }
            // UP
            case this.keys.up: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                let dayIndex = days.indexOf(curDay) - 7;
                /** @type {?} */
                let prevDay = null;
                if (dayIndex > 0) {
                    prevDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    prevDay.classList.add('focus');
                    prevDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', prevDay.getAttribute('id'));
                }
                else {
                    days = Array.prototype.slice.call(days);
                    dayIndex = 3 - days.indexOf(curDay) + 7;
                    this.showPrevMonth(dayIndex);
                }
                e.preventDefault();
                return false;
            }
            // DOWN
            case this.keys.down: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                days = Array.prototype.slice.call(days);
                /** @type {?} */
                let dayIndex = days.indexOf(curDay) + 7;
                /** @type {?} */
                let nextDay = null;
                if (dayIndex < days.length) {
                    nextDay = days[dayIndex];
                    curDay.classList.remove('focus');
                    curDay.setAttribute('aria-selected', 'false');
                    nextDay.classList.add('focus');
                    nextDay.setAttribute('aria-selected', 'true');
                    this.grid.setAttribute('aria-activedescendant', nextDay.getAttribute('id'));
                }
                else {
                    days = Array.prototype.slice.call(days);
                    dayIndex = 8 - (days.length - days.indexOf(curDay));
                    this.showNextMonth(dayIndex);
                }
                e.preventDefault();
                return false;
            }
            // PAGE UP
            case this.keys.pageup: {
                /** @type {?} */
                const active = this.grid.getAttribute('aria-activedescendant');
                if (e.shifKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showPrevYear();
                }
                else {
                    this.showPrevMonth(1);
                }
                if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
                    /** @type {?} */
                    const lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + active);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                e.preventDefault();
                return false;
            }
            // PAGE DOWN
            case this.keys.pagedown: {
                /** @type {?} */
                const active = this.grid.getAttribute('aria-activedescendant');
                if (e.shifKey) {
                    return true;
                }
                if (e.ctrlKey) {
                    this.showNextYear();
                }
                else {
                    this.showNextMonth(1);
                }
                if (this.grid.querySelector('#' + active).getAttribute('id') === undefined) {
                    /** @type {?} */
                    const lastDay = 'day' + this.calcNumDays(this.year, this.month);
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + lastDay);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                else {
                    /** @type {?} */
                    const lastDayId = this.grid.querySelector('#' + active);
                    lastDayId.classList.add('focus');
                    lastDayId.setAttribute('aria-selected', 'true');
                }
                e.preventDefault();
                return false;
            }
            // HOME
            case this.keys.home: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                curDay.classList.remove('focus');
                curDay.setAttribute('aria-selected', 'false');
                this.grid.querySelector('#day1').classList.add('focus');
                this.grid.querySelector('#day1').setAttribute('aria-selected', 'true');
                this.grid.setAttribute('aria-activedescendant', 'day1');
                e.stopPropagation();
                return false;
            }
            // END
            case this.keys.end: {
                if (e.ctrlKey || e.shiftKey) {
                    return true;
                }
                /** @type {?} */
                const lastDay = 'day' + this.calcNumDays(this.year, this.month);
                curDay.classList.remove('focus');
                curDay.setAttribute('aria-selected', 'false');
                this.grid.querySelector('#' + lastDay).classList.add('focus');
                this.grid.querySelector('#' + lastDay).setAttribute('aria-selected', 'true');
                this.grid.setAttribute('aria-activedescendant', lastDay);
                e.stopPropagation();
                return false;
            }
        }
        return true;
    }
    /* ****************** Hide modal on click outiside ******************* */
    /**
     * @param {?} event
     * @return {?}
     */
    clickedOutside(event) {
        // here you can hide your menu
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.hideDlg();
        }
    }
    /* ************************** HIDE MODAL DIALOG ********************** */
    /**
     * @return {?}
     */
    hideDlg() {
        /** @type {?} */
        const thisObj = this;
        thisObj.renderer.destroy();
        thisObj.dp.setAttribute('aria-hidden', 'true');
        this.target.focus();
    }
    /* ************************** SHOW PREVIOUS MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    showPrevMonth(offset) {
        if (this.month === 0) {
            this.month = 11;
            this.year--;
        }
        else {
            this.month--;
        }
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
        if (offset !== null) {
            /** @type {?} */
            const numDays = this.calcNumDays(this.year, this.month);
            /** @type {?} */
            const day = 'day' + (numDays - offset);
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    }
    /* ************************** SHOW NEXT MONTH ********************** */
    /**
     * @param {?} offset
     * @return {?}
     */
    showNextMonth(offset) {
        if (this.month === 11) {
            this.month = 0;
            this.year++;
        }
        else {
            this.month++;
        }
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
        if (offset !== null) {
            /** @type {?} */
            const day = 'day' + offset;
            this.grid.setAttribute('aria-activedescendant', day);
            this.grid.querySelector('#' + day).classList.add('focus');
            this.grid.querySelector('#' + day).setAttribute('aria-selected', 'true');
        }
    }
    /* ************************** SHOW PREVIOUS YEAR ********************** */
    /**
     * @return {?}
     */
    showPrevYear() {
        this.year--;
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
    }
    /* ************************** SHOW NEXT YEAR ********************** */
    /**
     * @return {?}
     */
    showNextYear() {
        this.year++;
        if (this.month !== this.curMonth || this.year !== this.curYear) {
            this.currentDate = false;
        }
        else {
            this.currentDate = true;
        }
        this.fillGrid();
        this.monthString = this.monthNames[this.month] + ' ' + this.year;
        this.addEventListenerList(this);
    }
    /* ************************** FILL THE GRID ********************** */
    /**
     * @return {?}
     */
    fillGrid() {
        /** @type {?} */
        const numDays = this.calcNumDays(this.year, this.month);
        /** @type {?} */
        const startWeekDay = this.calcStarWeekDay(this.year, this.month);
        /** @type {?} */
        let weekDay = 0;
        /** @type {?} */
        let curDay = 1;
        /** @type {?} */
        let rowCount = 1;
        this.tbody = this.grid.querySelector('tbody');
        /** @type {?} */
        let gridCells = '\t<tr id="row0">\n';
        while (this.tbody.firstChild) {
            this.tbody.removeChild(this.tbody.firstChild);
        }
        // Insert Empty Cells
        for (weekDay = 0; weekDay < startWeekDay; weekDay++) {
            gridCells += '\t\t<td class="empty">&nbsp; </td>\n';
        }
        // Insert the days of the month
        for (curDay = 1; curDay <= numDays; curDay++) {
            if (curDay === this.date && this.currentDate === true) {
                gridCells +=
                    '\t\t<td id="day' +
                        curDay +
                        '" class="today"' +
                        'headers="row' +
                        rowCount +
                        ' ' +
                        this.dayNames[weekDay] +
                        '" ' +
                        'role="gridcell" aria-selected="false">' +
                        curDay +
                        '</td> \n';
            }
            else {
                gridCells +=
                    '\t\t<td id="day' +
                        curDay +
                        '" headers="row' +
                        rowCount +
                        ' ' +
                        this.dayNames[weekDay] +
                        '" ' +
                        'role="gridcell" aria-selected="false">' +
                        curDay +
                        '</td> \n';
            }
            // Last day of week
            if (weekDay === 6 && curDay < numDays) {
                gridCells += '\t</tr>\n\t<tr id="row' + rowCount + '">\n';
                rowCount++;
                weekDay = 0;
            }
            else {
                weekDay++;
            }
        }
        // Insert empty cells
        for (weekDay; weekDay < 7; weekDay++) {
            gridCells += '\t\t<td class="empty">&nbsp;</td>\n';
        }
        gridCells += '\t </tr>';
        this.tbody.insertAdjacentHTML('beforeend', gridCells);
    }
    /* ************************** CALCULATE NUMBER OF DAY IN A MONTH ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    calcNumDays(year, month) {
        return 32 - new Date(year, month, 32).getDate();
    }
    /* ************************** CALCULULATE THE FIRST DAY OF A MONTH AND A YEAR  ********************** */
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    calcStarWeekDay(year, month) {
        return new Date(year, month, 1).getDay();
    }
}
CalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'c3m-calendar',
                template: "<div role=\"application\">\n  <p>\n    <label for=\"date\">Date</label>\n    <input [attr.type]=\"type\" value=\"{{ targetString }}\" #date />\n    <button (click)=\"showDlg()\" #showDP>Select Date</button>\n  </p>\n\n  <div class=\"datepicker\" aria-hidden=\"true\" #dp>\n    <div class=\"month-wrap\">\n      <button\n        (click)=\"handlePrevClick($event)\"\n        (keydown)=\"handlePrevKeyDown($event)\"\n        role=\"button\"\n        aria-label=\"Mois ou Ann\u00E9e pr\u00E9c\u00E9dent(e)\"\n        aria-labelledby=\"bn_prev-label\"\n        tabindex=\"0\"\n        #prev\n      >\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#leftCalendarSvg\"></use>\n        </svg>\n      </button>\n      <strong role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\">{{ monthString }}</strong>\n      <button\n        (click)=\"handleNextClick($event)\"\n        (keydown)=\"handleNextKeyDown($event)\"\n        role=\"button\"\n        aria-label=\"Mois ou Ann\u00E9e suivant(e)\"\n        aria-labelledby=\"bn_next-label\"\n        tabindex=\"0\"\n        #next\n      >\n        <svg>\n          <use xlink:href=\"assets/img/icons.svg#rightCalendarSvg\"></use>\n        </svg>\n      </button>\n    </div>\n\n    <table aria-activedescendant=\"errMsg\" aria-labelledby=\"month\" tabindex=\"0\" #cal>\n      <thead>\n        <tr id=\"weekdays\">\n          <th scope=\"col\"><abbr title=\"Sunday\">Su</abbr></th>\n          <th scope=\"col\"><abbr title=\"Monday\">Mo</abbr></th>\n          <th scope=\"col\"><abbr title=\"Tuesday\">Tu</abbr></th>\n          <th scope=\"col\"><abbr title=\"Wednesday\">We</abbr></th>\n          <th scope=\"col\"><abbr title=\"Thursday\">Th</abbr></th>\n          <th scope=\"col\"><abbr title=\"Friday\">Fr</abbr></th>\n          <th scope=\"col\"><abbr title=\"Saturday\">Sa</abbr></th>\n        </tr>\n      </thead>\n\n      <tbody #tbody>\n        <tr>\n          <td id=\"errMsg\" colspan=\"7\">Javascript must be enabled</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <button id=\"bn_prev-label\" class=\"offscreen\">Go to previous month</button>\n    <button id=\"bn_next-label\" class=\"offscreen\">Go to next month</button>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["c3m-calendar div>input{max-width:9em}c3m-calendar p button{color:var(--text-inv);background-color:var(--n-dark)}c3m-calendar button:hover{opacity:.8}c3m-calendar .datepicker{position:absolute;width:250px;background-color:var(--body-bg);margin:.5rem;border:none;border-radius:.3rem;box-shadow:0 3px 7px rgba(0,0,0,.5)}.month-wrap{display:flex;justify-content:space-between;align-items:center;color:var(--text-inv);background-color:var(--main-color);padding:.5em}.month-wrap strong{display:inline-block}.month-wrap button{background-color:var(--main-color);padding:0}c3m-calendar table thead{margin-top:2rem;line-height:2.2rem}c3m-calendar button svg{height:1.2rem;width:1.7rem;fill:var(--text-inv)}c3m-calendar div#month{float:left;padding-top:6px;width:199px;height:24px;text-align:center;font-weight:700;font-size:1.2em}c3m-calendar tbody#cal{width:261px;font-size:1.2em;text-align:center}c3m-calendar table{color:var(--text-inv);background-color:var(--main-color);width:100%;border-collapse:collapse;border-spacing:1px}c3m-calendar table td,c3m-calendar table th{width:35px;height:35px;line-height:2em;text-align:center;color:var(--text-inv);background-color:var(--main-color);padding:0}c3m-calendar table th{font:var(--stack-l);text-transform:uppercase}c3m-calendar table th abbr{text-decoration:none}c3m-calendar table td.today,c3m-calendar table td.today.focus{background-color:var(--hot-color-sec)}c3m-calendar table td.empty,c3m-calendar table td.empty:hover{background-color:var(--main-color);cursor:initial}c3m-calendar table td.focus,c3m-calendar table td:hover{background-color:rgba(255,255,255,.15);cursor:pointer}c3m-calendar .offscreen{position:absolute;left:-200em;top:-100em}c3m-calendar [aria-hidden=true]{display:none}"]
            }] }
];
/** @nocollapse */
CalendarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
CalendarComponent.propDecorators = {
    monthString: [{ type: Input }],
    targetString: [{ type: Input }],
    type: [{ type: Input }],
    dp: [{ type: ViewChild, args: ['dp',] }],
    prev: [{ type: ViewChild, args: ['prev',] }],
    next: [{ type: ViewChild, args: ['next',] }],
    grid: [{ type: ViewChild, args: ['cal',] }],
    buttonShow: [{ type: ViewChild, args: ['showDP',] }],
    target: [{ type: ViewChild, args: ['date',] }],
    clickedOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    CalendarComponent.prototype.monthString;
    /** @type {?} */
    CalendarComponent.prototype.targetString;
    /** @type {?} */
    CalendarComponent.prototype.type;
    /** @type {?} */
    CalendarComponent.prototype.dp;
    /** @type {?} */
    CalendarComponent.prototype.prev;
    /** @type {?} */
    CalendarComponent.prototype.next;
    /** @type {?} */
    CalendarComponent.prototype.grid;
    /** @type {?} */
    CalendarComponent.prototype.buttonShow;
    /** @type {?} */
    CalendarComponent.prototype.tbody;
    /** @type {?} */
    CalendarComponent.prototype.target;
    /** @type {?} */
    CalendarComponent.prototype.monthNames;
    /** @type {?} */
    CalendarComponent.prototype.dayNames;
    /** @type {?} */
    CalendarComponent.prototype.dateObj;
    /** @type {?} */
    CalendarComponent.prototype.curYear;
    /** @type {?} */
    CalendarComponent.prototype.year;
    /** @type {?} */
    CalendarComponent.prototype.curMonth;
    /** @type {?} */
    CalendarComponent.prototype.month;
    /** @type {?} */
    CalendarComponent.prototype.currentDate;
    /** @type {?} */
    CalendarComponent.prototype.keys;
    /** @type {?} */
    CalendarComponent.prototype.date;
    /** @type {?} */
    CalendarComponent.prototype.bModal;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.eRef;
    /**
     * @type {?}
     * @private
     */
    CalendarComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNyZWFtbGliL25nLyIsInNvdXJjZXMiOlsiYzNtL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBRVYsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQVF2QixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUE0QjVCLFlBQW9CLElBQWdCLEVBQVUsUUFBbUI7UUFBN0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUF6QnhELGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ25CLFNBQUksR0FBRyxNQUFNLENBQUM7UUFrQnZCLFNBQUksR0FBNEIsRUFBRSxDQUFDO0lBTWlDLENBQUM7Ozs7O0lBR3JFLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUMxRTtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQWM7UUFDdkIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMs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RSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQWRDLFVBQVU7WUFHVixTQUFTOzs7MEJBY1IsS0FBSzsyQkFDTCxLQUFLO21CQUNMLEtBQUs7aUJBR0wsU0FBUyxTQUFDLElBQUk7bUJBQ2QsU0FBUyxTQUFDLE1BQU07bUJBQ2hCLFNBQVMsU0FBQyxNQUFNO21CQUNoQixTQUFTLFNBQUMsS0FBSzt5QkFDZixTQUFTLFNBQUMsUUFBUTtxQkFFbEIsU0FBUyxTQUFDLE1BQU07NkJBNG1CaEIsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBdm5CMUMsd0NBQTZCOztJQUM3Qix5Q0FBNEI7O0lBQzVCLGlDQUF1Qjs7SUFHdkIsK0JBQXlCOztJQUN6QixpQ0FBNkI7O0lBQzdCLGlDQUE2Qjs7SUFDN0IsaUNBQTRCOztJQUM1Qix1Q0FBcUM7O0lBQ3JDLGtDQUFXOztJQUNYLG1DQUErQjs7SUFDL0IsdUNBQXFCOztJQUNyQixxQ0FBbUI7O0lBQ25CLG9DQUFjOztJQUNkLG9DQUFnQjs7SUFDaEIsaUNBQWE7O0lBQ2IscUNBQWlCOztJQUNqQixrQ0FBYzs7SUFDZCx3Q0FBcUI7O0lBQ3JCLGlDQUFtQzs7SUFDbkMsaUNBQWE7O0lBQ2IsbUNBQWdCOzs7OztJQUlKLGlDQUF3Qjs7Ozs7SUFBRSxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBOZ01vZHVsZSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEhvc3RMaXN0ZW5lclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYzNtLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FsZW5kYXIuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyogKioqKioqKioqKiogSU5QVVQgKioqKioqKioqKiogKi9cbiAgQElucHV0KCkgbW9udGhTdHJpbmc6IHN0cmluZztcbiAgQElucHV0KCkgdGFyZ2V0U3RyaW5nID0gJyAnO1xuICBASW5wdXQoKSB0eXBlID0gJ3RleHQnO1xuXG4gIC8qICoqKioqKioqKioqKiogVkFSSUFCTEVTICoqKioqKioqKioqKioqICovXG4gIEBWaWV3Q2hpbGQoJ2RwJykgZHA6IGFueTtcbiAgQFZpZXdDaGlsZCgncHJldicpIHByZXY6IGFueTtcbiAgQFZpZXdDaGlsZCgnbmV4dCcpIG5leHQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnY2FsJykgZ3JpZDogYW55O1xuICBAVmlld0NoaWxkKCdzaG93RFAnKSBidXR0b25TaG93OiBhbnk7XG4gIHRib2R5OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2RhdGUnKSB0YXJnZXQ6IGFueTtcbiAgbW9udGhOYW1lczogc3RyaW5nW107XG4gIGRheU5hbWVzOiBzdHJpbmdbXTtcbiAgZGF0ZU9iajogRGF0ZTtcbiAgY3VyWWVhcjogbnVtYmVyO1xuICB5ZWFyOiBudW1iZXI7XG4gIGN1ck1vbnRoOiBudW1iZXI7XG4gIG1vbnRoOiBudW1iZXI7XG4gIGN1cnJlbnREYXRlOiBib29sZWFuO1xuICBrZXlzOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICBkYXRlOiBudW1iZXI7XG4gIGJNb2RhbDogYm9vbGVhbjtcblxuICAvKiAqKioqKioqKiogQ09OU1RSVUNUT1IgKioqKioqKioqICovXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgLyogKioqKioqKioqKioqIE9OIElOSVQgKioqKioqKioqKiogKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlcGlja2VyKHRydWUpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgaWYgKHRoaXMuY2hlY2tEYXRlSW5wdXQoKSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuYnV0dG9uU2hvdy5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogKioqKioqKioqKioqKiogTUFJTiBGVU5DVElPTiAqKioqKioqKioqKioqKiAqL1xuICBkYXRlcGlja2VyKG1vZGFsOiBib29sZWFuKSB7XG4gICAgLyogQWxsIHRoZSBzZWxlY3RvcnMgKi9cbiAgICB0aGlzLmRwID0gdGhpcy5kcC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucHJldiA9IHRoaXMucHJldi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubmV4dCA9IHRoaXMubmV4dC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZ3JpZCA9IHRoaXMuZ3JpZC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLmJNb2RhbCA9IG1vZGFsOyAvLyB0cnVlIGlmIGRhdGVwaWNrZXIgc2hvdWxkIGFwcGVhciBpbiBtb2RhbFxuXG4gICAgLy8gTW9udGggTmFtZXNcbiAgICB0aGlzLm1vbnRoTmFtZXMgPSBbXG4gICAgICAnSmFudWFyeScsXG4gICAgICAnRmVicnVhcnknLFxuICAgICAgJ01hcmNoJyxcbiAgICAgICdBcHJpbCcsXG4gICAgICAnTWF5JyxcbiAgICAgICdKdW5lJyxcbiAgICAgICdKdWx5JyxcbiAgICAgICdBdWd1c3QnLFxuICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAnT2N0b2JlcicsXG4gICAgICAnTm92ZW1iZXInLFxuICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICAvLyBEYXkgTmFtZXNcbiAgICB0aGlzLmRheU5hbWVzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuXG4gICAgLy8gREFURVxuICAgIHRoaXMuZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyBDdXJyZW50IERhdGVcbiAgICB0aGlzLmN1clllYXIgPSB0aGlzLmRhdGVPYmouZ2V0RnVsbFllYXIoKTsgLy8gR2V0IHRoZSBZZWFyIHVzaW5nIExvY2FsIFRpbWVcbiAgICB0aGlzLnllYXIgPSB0aGlzLmN1clllYXI7XG4gICAgdGhpcy5jdXJNb250aCA9IHRoaXMuZGF0ZU9iai5nZXRNb250aCgpOyAvLyBHZXQgdGhlIE1vbnRoIHVzaW5nIExvY2FsIFRpbWVcbiAgICB0aGlzLm1vbnRoID0gdGhpcy5jdXJNb250aDtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gdHJ1ZTtcblxuICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZU9iai5nZXREYXRlKCk7XG5cbiAgICAvLyBLZXlib2FyZCBLZXlzXG4gICAgdGhpcy5rZXlzID0ge1xuICAgICAgdGFiOiA5LFxuICAgICAgZW50ZXI6IDEzLFxuICAgICAgZXNjOiAyNyxcbiAgICAgIHNwYWNlOiAzMixcbiAgICAgIHBhZ2V1cDogMzMsXG4gICAgICBwYWdlZG93bjogMzQsXG4gICAgICBlbmQ6IDM1LFxuICAgICAgaG9tZTogMzYsXG4gICAgICBsZWZ0OiAzNyxcbiAgICAgIHVwOiAzOCxcbiAgICAgIHJpZ2h0OiAzOSxcbiAgICAgIGRvd246IDQwXG4gICAgfTtcblxuICAgIC8vIFN0b2NrIG5hbWUgb2YgY3VycmVudCBEYXRlXG4gICAgdGhpcy5tb250aFN0cmluZyA9IHRoaXMubW9udGhOYW1lc1t0aGlzLm1vbnRoXSArICcgJyArIHRoaXMueWVhcjtcblxuICAgIC8vIEZpbGwgdGhlIGNhbGVuZGFyIGdyaWRcbiAgICB0aGlzLmZpbGxHcmlkKCk7XG5cbiAgICAvLyBQb2ludCBBY3RpdmVkZXNjZW5kYW50IHRvIHRoZSBjdXJyZW50IGRheVxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHRvZGF5LmdldEF0dHJpYnV0ZSgnaWQnKSk7XG5cbiAgICAvLyBDYWxsIGFsbCBldmVudHMgbGlzdGVuZXJcbiAgICB0aGlzLmJpbmRIYW5kbGVycygpO1xuICB9XG5cbiAgLyogKioqKioqKioqKioqIENIRUNLIElGIFRZUEUgREFURSBJUyBTVVBQT1JURUQgKioqKioqKiogKi9cbiAgY2hlY2tEYXRlSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG5cbiAgICBjb25zdCBub3RBRGF0ZVZhbHVlID0gJ25vdC1hLWRhdGUnO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBub3RBRGF0ZVZhbHVlKTtcblxuICAgIHJldHVybiBpbnB1dC52YWx1ZSAhPT0gbm90QURhdGVWYWx1ZTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKiBCSU5EIEFMTCBUSEUgQlVUVE9OIFdJVEggRVZFTlQgTElTVEVORVIgKioqKioqKiogKi9cbiAgYmluZEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IHRoaXNvYmogPSB0aGlzO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIHRoaXNvYmoucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZCwgJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIHJldHVybiB0aGlzb2JqLmhhbmRsZUdyaWRLZXlEb3duKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpc29iai5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkLCAna2V5cHJlc3MnLCBlID0+IHtcbiAgICAgIHJldHVybiB0aGlzb2JqLmhhbmRsZUdyaWRLZXlEb3duKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpc29iai5yZW5kZXJlci5saXN0ZW4odGhpcy5ncmlkLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpc29iai5oYW5kbGVHcmlkRm9jdXMoKTtcbiAgICB9KTtcblxuICAgIHRoaXNvYmoucmVuZGVyZXIubGlzdGVuKHRoaXMuZ3JpZCwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpc29iai5oYW5kbGVHcmlkQmx1cigpO1xuICAgIH0pO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyTGlzdCh0aGlzb2JqKTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIEhBTkRMRSBHUklEIEJMVVIgKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBoYW5kbGVHcmlkQmx1cigpIHtcbiAgICBpZiAodGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmdyaWQuZ2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKSkpIHtcbiAgICAgIGNvbnN0IGlkQWN0aXZlRGVzY2VuZGFudCA9IHRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcjJyArIHRoaXMuZ3JpZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpXG4gICAgICApO1xuICAgICAgaWRBY3RpdmVEZXNjZW5kYW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgICBpZEFjdGl2ZURlc2NlbmRhbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogSEFORExFIEdSSUQgRk9DVVMgKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBoYW5kbGVHcmlkRm9jdXMoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5ncmlkLmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgaWYgKHRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYWN0aXZlKS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbGFzdERheSA9ICdkYXknICsgdGhpcy5jYWxjTnVtRGF5cyh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICAgICAgdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBsYXN0RGF5KS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBsYXN0RGF5KS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGFjdGl2ZSkuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgIHRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgYWN0aXZlKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIEhBTkRMRSBLRVkgUFJFU1MgKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBoYW5kbGVHcmlkS2V5UHJlc3MoZSkge1xuICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIHRoaXMua2V5cy50YWI6XG4gICAgICBjYXNlIHRoaXMua2V5cy5lbnRlcjpcbiAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOlxuICAgICAgY2FzZSB0aGlzLmtleXMuZXNjOlxuICAgICAgY2FzZSB0aGlzLmtleXMubGVmdDpcbiAgICAgIGNhc2UgdGhpcy5rZXlzLnJpZ2h0OlxuICAgICAgY2FzZSB0aGlzLmtleXMudXA6XG4gICAgICBjYXNlIHRoaXMua2V5cy5kb3duOlxuICAgICAgY2FzZSB0aGlzLmtleXMucGFnZXVwOlxuICAgICAgY2FzZSB0aGlzLmtleXMucGFnZWRvd246XG4gICAgICBjYXNlIHRoaXMua2V5cy5ob21lOlxuICAgICAgY2FzZSB0aGlzLmtleXMuZW5kOiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBIQU5ETEUgR1JJRCBDTElDSyAqKioqKioqKioqKioqKioqKioqKioqICovXG4gIGhhbmRsZUdyaWRDbGljayhpZCwgZSkge1xuICAgIGNvbnN0IGNlbGwgPSBpZDtcblxuICAgIC8vIElmIENlbGwgaXMgZW1wdHlcbiAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEdldCBGb2N1cyBDZWxsXG4gICAgY29uc3QgdG1wQ2VsbCA9IHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yKCcuZm9jdXMnKTtcbiAgICB0bXBDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gICAgdG1wQ2VsbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcblxuICAgIC8vIEFkZCBOZXcgRm9jdXMgQ2VsbFxuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG5cbiAgICAvLyBDaGFuZ2UgR3JpZCBBY3RpdmVEZXNjZW5kYW50IHRvIHRoZSBuZXdDZWxsSWRcbiAgICB0aGlzLmdyaWQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBjZWxsLmdldEF0dHJpYnV0ZSgnaWQnKSk7XG5cbiAgICAvLyBHZXQgdGhlIG5ldyBDbGljayBDZWxsXG4gICAgY29uc3QgY3VyRGF5ID0gdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5ncmlkLmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyl9YCk7XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHRhcmdldFN0cmluZyB0byByZXByZXNlbnRlIHRoZSBuZXcgY3VycmVudCBkYXRlXG4gICAgY29uc3QgeDogc3RyaW5nID0gY3VyRGF5LmZpcnN0Q2hpbGQubm9kZVZhbHVlO1xuICAgIHRoaXMudGFyZ2V0U3RyaW5nID1cbiAgICAgICh0aGlzLm1vbnRoIDwgOSA/ICcwJyA6ICcnKSArXG4gICAgICAodGhpcy5tb250aCArIDEpICtcbiAgICAgICcvJyArXG4gICAgICAocGFyc2VJbnQoeCwgMTApIDwgOSA/ICcwJyA6ICcnKSArXG4gICAgICBjdXJEYXkuZmlyc3RDaGlsZC5ub2RlVmFsdWUgK1xuICAgICAgJy8nICtcbiAgICAgIHRoaXMueWVhcjtcblxuICAgIC8vIEhpZGUgbW9kYWwgRGlhbG9nXG4gICAgdGhpcy5oaWRlRGxnKCk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIEFERCBFVkVOVCBMSVNURU5FUiBGT1IgTVVMVElQTEUgRUxFTUVOVFMgICoqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgYWRkRXZlbnRMaXN0ZW5lckxpc3QodGhpc29iaikge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdyaWQucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbGVuID0gbGlzdC5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtTGlzdCA9IGxpc3RbaV07XG4gICAgICAvKml0ZW1MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgcmV0dXJuIHRoaXNvYmouaGFuZGxlR3JpZENsaWNrKHRoaXMsIGUpO1xuICAgICAgICB9KTsqL1xuICAgICAgdGhpc29iai5yZW5kZXJlci5saXN0ZW4oaXRlbUxpc3QsICdjbGljaycsIGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpc29iai5oYW5kbGVHcmlkQ2xpY2soaXRlbUxpc3QsIGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogSEFORExFIFBSRVZJT1VTIEJVVFRPTiBDTElDSyAqKioqKioqKioqKioqKioqKioqKioqICovXG4gIGhhbmRsZVByZXZDbGljayhlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5ncmlkLmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgdGhpcy5zaG93UHJldlllYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UHJldk1vbnRoKDEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50RGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsICdkYXkxJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsICdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIEhBTkRMRSBORVhUIEJVVFRPTiBDTElDSyAqKioqKioqKioqKioqKioqKioqKioqICovXG4gIGhhbmRsZU5leHRDbGljayhlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5ncmlkLmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG5cbiAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICB0aGlzLnNob3dOZXh0WWVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dOZXh0TW9udGgoMSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnREYXRlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5ncmlkLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgJ2RheTEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ncmlkLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgYWN0aXZlKTtcbiAgICB9XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIEhBTkRMRSBQUkVWSU9VUyBCVVRUT04gS0VZRE9XTiAqKioqKioqKioqKioqKioqKioqKioqICovXG4gIGhhbmRsZVByZXZLZXlEb3duKGUpOiBib29sZWFuIHtcbiAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIHRoaXMua2V5cy50YWI6IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMuZ3JpZC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmV4dC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY2FzZSB0aGlzLmtleXMuZW50ZXI6XG4gICAgICBjYXNlIHRoaXMua2V5cy5zcGFjZToge1xuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICB0aGlzLnNob3dQcmV2WWVhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd1ByZXZNb250aCgxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBIQU5ETEUgTkVYVCBCVVRUT04gS0VZRE9XTiAqKioqKioqKioqKioqKioqKioqKioqICovXG4gIGhhbmRsZU5leHRLZXlEb3duKGUpOiBib29sZWFuIHtcbiAgICAvLyBBbHRcbiAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBFTlRFUiBPUiBTUEFDRVxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIHRoaXMua2V5cy5lbnRlcjpcbiAgICAgIGNhc2UgdGhpcy5rZXlzLnNwYWNlOiB7XG4gICAgICAgIC8vIENUUkwgKyBTUEFDRSAgIE9SIENUUkwgKyBFTlRFUlxuICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5zaG93TmV4dFllYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dOZXh0TW9udGgoMSk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogU0hPVyBESUFMT0cgKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBzaG93RGxnKCk6IHZvaWQge1xuICAgIGNvbnN0IHRoaXNPYmogPSB0aGlzO1xuICAgIC8vIEJpbmQgRXZlbnQgTGlzdGVuZXJcbiAgICB0aGlzT2JqLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgZSA9PiB7XG4gICAgICByZXR1cm4gdGhpc09iai5zaG93RGlhbG9nTWV0aG9kKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpc09iai5yZW5kZXJlci5saXN0ZW4odGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgIHJldHVybiB0aGlzT2JqLnNob3dEaWFsb2dNZXRob2QoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzT2JqLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNldXAnLCBlID0+IHtcbiAgICAgIHJldHVybiB0aGlzT2JqLnNob3dEaWFsb2dNZXRob2QoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzT2JqLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgICAgcmV0dXJuIHRoaXNPYmouc2hvd0RpYWxvZ01ldGhvZChlKTtcbiAgICB9KTtcblxuICAgIHRoaXNPYmoucmVuZGVyZXIubGlzdGVuKHRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICByZXR1cm4gdGhpc09iai5zaG93RGlhbG9nTWV0aG9kKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpc09iai5kcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICB0aGlzLmdyaWQuZm9jdXMoKTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIFNob3dEaWFsb2cgTW9kYWwgTWV0aG9kICoqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2hvd0RpYWxvZ01ldGhvZChlKTogYm9vbGVhbiB7XG4gICAgdGhpcy5ncmlkLmZvY3VzKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBIQU5ETEUgR1JJRCBDRUxMIEtFWURPV04gKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBoYW5kbGVHcmlkS2V5RG93bihlKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgcm93cyA9IHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuICAgIGNvbnN0IGN1ckRheSA9IHRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZ3JpZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpfWApO1xuICAgIGxldCBkYXlzID0gdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkOm5vdCguZW1wdHkpJyk7XG4gICAgY29uc3QgY3VyUm93ID0gY3VyRGF5LnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gQUxUXG4gICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUQUJcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSB0aGlzLmtleXMudGFiOiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuYk1vZGFsID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gU0hJRlQgKyBUQUJcbiAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgdGhpcy5uZXh0LmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJldi5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gRU5URVIgT1IgU1BBQ0VcbiAgICAgIGNhc2UgdGhpcy5rZXlzLmVudGVyOlxuICAgICAgY2FzZSB0aGlzLmtleXMuc3BhY2U6IHtcbiAgICAgICAgLy8gQ1RSTCBFTlRFUiBPUiBDVFJMIFNQQUNFXG4gICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgdGFyZ2VudCBib3hcbiAgICAgICAgdGhpcy50YXJnZXRTdHJpbmcgPVxuICAgICAgICAgICh0aGlzLm1vbnRoIDwgOSA/ICcwJyA6ICcnKSArICh0aGlzLm1vbnRoICsgMSkgKyAnLycgKyBjdXJEYXkuZmlyc3RDaGlsZC5ub2RlVmFsdWUgKyAnLycgKyB0aGlzLnllYXI7XG4gICAgICAgIHRoaXMuaGlkZURsZygpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIEVTQ0FQRVxuICAgICAgY2FzZSB0aGlzLmtleXMuZXNjOiB7XG4gICAgICAgIHRoaXMuaGlkZURsZygpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIExFRlRcbiAgICAgIGNhc2UgdGhpcy5rZXlzLmxlZnQ6IHtcbiAgICAgICAgLy8gTEVGVCArIENUUkwgT1IgTEVGVCArIFNISUZUXG4gICAgICAgIGlmIChlLmN0bHJLZXkgfHwgZS5zaGlmdEtleSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGRheXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXlzKTtcbiAgICAgICAgY29uc3QgZGF5SW5kZXggPSBkYXlzLmluZGV4T2YoY3VyRGF5KSAtIDE7XG4gICAgICAgIGxldCBwcmV2RGF5ID0gbnVsbDtcblxuICAgICAgICBpZiAoZGF5SW5kZXggPj0gMCkge1xuICAgICAgICAgIHByZXZEYXkgPSBkYXlzW2RheUluZGV4XTtcbiAgICAgICAgICBjdXJEYXkuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgICBjdXJEYXkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgcHJldkRheS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICAgIHByZXZEYXkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcblxuICAgICAgICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHByZXZEYXkuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dQcmV2TW9udGgoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBSSUdIVFxuICAgICAgY2FzZSB0aGlzLmtleXMucmlnaHQ6IHtcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF5cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRheXMpO1xuICAgICAgICBjb25zdCBkYXlJbmRleCA9IGRheXMuaW5kZXhPZihjdXJEYXkpICsgMTtcbiAgICAgICAgbGV0IG5leHREYXkgPSBudWxsO1xuXG4gICAgICAgIGlmIChkYXlJbmRleCA8IGRheXMubGVuZ3RoKSB7XG4gICAgICAgICAgbmV4dERheSA9IGRheXNbZGF5SW5kZXhdO1xuICAgICAgICAgIGN1ckRheS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICAgIGN1ckRheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICBuZXh0RGF5LmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICAgICAgbmV4dERheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuXG4gICAgICAgICAgdGhpcy5ncmlkLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgbmV4dERheS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd05leHRNb250aCgxKTtcbiAgICAgICAgfVxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFVQXG4gICAgICBjYXNlIHRoaXMua2V5cy51cDoge1xuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBkYXlzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGF5cyk7XG4gICAgICAgIGxldCBkYXlJbmRleCA9IGRheXMuaW5kZXhPZihjdXJEYXkpIC0gNztcbiAgICAgICAgbGV0IHByZXZEYXkgPSBudWxsO1xuXG4gICAgICAgIGlmIChkYXlJbmRleCA+IDApIHtcbiAgICAgICAgICBwcmV2RGF5ID0gZGF5c1tkYXlJbmRleF07XG5cbiAgICAgICAgICBjdXJEYXkuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgICBjdXJEYXkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgcHJldkRheS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICAgIHByZXZEYXkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcblxuICAgICAgICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIHByZXZEYXkuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXlzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGF5cyk7XG4gICAgICAgICAgZGF5SW5kZXggPSAzIC0gZGF5cy5pbmRleE9mKGN1ckRheSkgKyA3O1xuICAgICAgICAgIHRoaXMuc2hvd1ByZXZNb250aChkYXlJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIERPV05cbiAgICAgIGNhc2UgdGhpcy5rZXlzLmRvd246IHtcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZGF5cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRheXMpO1xuICAgICAgICBsZXQgZGF5SW5kZXggPSBkYXlzLmluZGV4T2YoY3VyRGF5KSArIDc7XG4gICAgICAgIGxldCBuZXh0RGF5ID0gbnVsbDtcblxuICAgICAgICBpZiAoZGF5SW5kZXggPCBkYXlzLmxlbmd0aCkge1xuICAgICAgICAgIG5leHREYXkgPSBkYXlzW2RheUluZGV4XTtcblxuICAgICAgICAgIGN1ckRheS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICAgIGN1ckRheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICBuZXh0RGF5LmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICAgICAgbmV4dERheS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuXG4gICAgICAgICAgdGhpcy5ncmlkLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgbmV4dERheS5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRheXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXlzKTtcbiAgICAgICAgICBkYXlJbmRleCA9IDggLSAoZGF5cy5sZW5ndGggLSBkYXlzLmluZGV4T2YoY3VyRGF5KSk7XG5cbiAgICAgICAgICB0aGlzLnNob3dOZXh0TW9udGgoZGF5SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBQQUdFIFVQXG4gICAgICBjYXNlIHRoaXMua2V5cy5wYWdldXA6IHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gdGhpcy5ncmlkLmdldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG5cbiAgICAgICAgaWYgKGUuc2hpZktleSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLmN0cmxLZXkpIHtcbiAgICAgICAgICB0aGlzLnNob3dQcmV2WWVhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd1ByZXZNb250aCgxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3IoJyMnICsgYWN0aXZlKS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGxhc3REYXkgPSAnZGF5JyArIHRoaXMuY2FsY051bURheXModGhpcy55ZWFyLCB0aGlzLm1vbnRoKTtcbiAgICAgICAgICBjb25zdCBsYXN0RGF5SWQgPSB0aGlzLmdyaWQucXVlcnlTZWxlY3RvcignIycgKyBsYXN0RGF5KTtcbiAgICAgICAgICBsYXN0RGF5SWQuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgICBsYXN0RGF5SWQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBsYXN0RGF5SWQgPSB0aGlzLmdyaWQucXVlcnlTZWxlY3RvcignIycgKyBhY3RpdmUpO1xuICAgICAgICAgIGxhc3REYXlJZC5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xuICAgICAgICAgIGxhc3REYXlJZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBQQUdFIERPV05cbiAgICAgIGNhc2UgdGhpcy5rZXlzLnBhZ2Vkb3duOiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuZ3JpZC5nZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuXG4gICAgICAgIGlmIChlLnNoaWZLZXkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5zaG93TmV4dFllYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNob3dOZXh0TW9udGgoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yKCcjJyArIGFjdGl2ZSkuZ2V0QXR0cmlidXRlKCdpZCcpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBsYXN0RGF5ID0gJ2RheScgKyB0aGlzLmNhbGNOdW1EYXlzKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gICAgICAgICAgY29uc3QgbGFzdERheUlkID0gdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3IoJyMnICsgbGFzdERheSk7XG4gICAgICAgICAgbGFzdERheUlkLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICAgICAgbGFzdERheUlkLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbGFzdERheUlkID0gdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3IoJyMnICsgYWN0aXZlKTtcbiAgICAgICAgICBsYXN0RGF5SWQuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgICBsYXN0RGF5SWQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gSE9NRVxuICAgICAgY2FzZSB0aGlzLmtleXMuaG9tZToge1xuICAgICAgICBpZiAoZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjdXJEYXkuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgICAgICAgY3VyRGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICdmYWxzZScpO1xuXG4gICAgICAgIHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yKCcjZGF5MScpLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICAgIHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yKCcjZGF5MScpLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsICdkYXkxJyk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gRU5EXG4gICAgICBjYXNlIHRoaXMua2V5cy5lbmQ6IHtcbiAgICAgICAgaWYgKGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXN0RGF5ID0gJ2RheScgKyB0aGlzLmNhbGNOdW1EYXlzKHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gICAgICAgIGN1ckRheS5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xuICAgICAgICBjdXJEYXkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3IoJyMnICsgbGFzdERheSkuY2xhc3NMaXN0LmFkZCgnZm9jdXMnKTtcbiAgICAgICAgdGhpcy5ncmlkLnF1ZXJ5U2VsZWN0b3IoJyMnICsgbGFzdERheSkuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5ncmlkLnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgbGFzdERheSk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiAqKioqKioqKioqKioqKioqKiogSGlkZSBtb2RhbCBvbiBjbGljayBvdXRpc2lkZSAqKioqKioqKioqKioqKioqKioqICovXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xpY2tlZE91dHNpZGUoZXZlbnQpIHtcbiAgICAvLyBoZXJlIHlvdSBjYW4gaGlkZSB5b3VyIG1lbnVcbiAgICBpZiAoIXRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuaGlkZURsZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIEhJREUgTU9EQUwgRElBTE9HICoqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgaGlkZURsZygpOiB2b2lkIHtcbiAgICBjb25zdCB0aGlzT2JqID0gdGhpcztcblxuICAgIHRoaXNPYmoucmVuZGVyZXIuZGVzdHJveSgpO1xuICAgIHRoaXNPYmouZHAuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgdGhpcy50YXJnZXQuZm9jdXMoKTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIFNIT1cgUFJFVklPVVMgTU9OVEggKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBzaG93UHJldk1vbnRoKG9mZnNldCkge1xuICAgIGlmICh0aGlzLm1vbnRoID09PSAwKSB7XG4gICAgICB0aGlzLm1vbnRoID0gMTE7XG4gICAgICB0aGlzLnllYXItLTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb250aC0tO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1vbnRoICE9PSB0aGlzLmN1ck1vbnRoIHx8IHRoaXMueWVhciAhPT0gdGhpcy5jdXJZZWFyKSB7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZmlsbEdyaWQoKTtcbiAgICB0aGlzLm1vbnRoU3RyaW5nID0gdGhpcy5tb250aE5hbWVzW3RoaXMubW9udGhdICsgJyAnICsgdGhpcy55ZWFyO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lckxpc3QodGhpcyk7XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1EYXlzID0gdGhpcy5jYWxjTnVtRGF5cyh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICAgICAgY29uc3QgZGF5ID0gJ2RheScgKyAobnVtRGF5cyAtIG9mZnNldCk7XG5cbiAgICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGRheSk7XG4gICAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvcignIycgKyBkYXkpLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvcignIycgKyBkYXkpLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgfVxuICB9XG5cbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogU0hPVyBORVhUIE1PTlRIICoqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2hvd05leHRNb250aChvZmZzZXQpIHtcbiAgICBpZiAodGhpcy5tb250aCA9PT0gMTEpIHtcbiAgICAgIHRoaXMubW9udGggPSAwO1xuICAgICAgdGhpcy55ZWFyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9udGgrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb250aCAhPT0gdGhpcy5jdXJNb250aCB8fCB0aGlzLnllYXIgIT09IHRoaXMuY3VyWWVhcikge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmZpbGxHcmlkKCk7XG4gICAgdGhpcy5tb250aFN0cmluZyA9IHRoaXMubW9udGhOYW1lc1t0aGlzLm1vbnRoXSArICcgJyArIHRoaXMueWVhcjtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJMaXN0KHRoaXMpO1xuXG4gICAgaWYgKG9mZnNldCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZGF5ID0gJ2RheScgKyBvZmZzZXQ7XG5cbiAgICAgIHRoaXMuZ3JpZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGRheSk7XG4gICAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvcignIycgKyBkYXkpLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gICAgICB0aGlzLmdyaWQucXVlcnlTZWxlY3RvcignIycgKyBkYXkpLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgfVxuICB9XG5cbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogU0hPVyBQUkVWSU9VUyBZRUFSICoqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2hvd1ByZXZZZWFyKCkge1xuICAgIHRoaXMueWVhci0tO1xuXG4gICAgaWYgKHRoaXMubW9udGggIT09IHRoaXMuY3VyTW9udGggfHwgdGhpcy55ZWFyICE9PSB0aGlzLmN1clllYXIpIHtcbiAgICAgIHRoaXMuY3VycmVudERhdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5maWxsR3JpZCgpO1xuICAgIHRoaXMubW9udGhTdHJpbmcgPSB0aGlzLm1vbnRoTmFtZXNbdGhpcy5tb250aF0gKyAnICcgKyB0aGlzLnllYXI7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyTGlzdCh0aGlzKTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIFNIT1cgTkVYVCBZRUFSICoqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgc2hvd05leHRZZWFyKCkge1xuICAgIHRoaXMueWVhcisrO1xuXG4gICAgaWYgKHRoaXMubW9udGggIT09IHRoaXMuY3VyTW9udGggfHwgdGhpcy55ZWFyICE9PSB0aGlzLmN1clllYXIpIHtcbiAgICAgIHRoaXMuY3VycmVudERhdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5maWxsR3JpZCgpO1xuICAgIHRoaXMubW9udGhTdHJpbmcgPSB0aGlzLm1vbnRoTmFtZXNbdGhpcy5tb250aF0gKyAnICcgKyB0aGlzLnllYXI7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyTGlzdCh0aGlzKTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIEZJTEwgVEhFIEdSSUQgKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBmaWxsR3JpZCgpIHtcbiAgICBjb25zdCBudW1EYXlzID0gdGhpcy5jYWxjTnVtRGF5cyh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICAgIGNvbnN0IHN0YXJ0V2Vla0RheSA9IHRoaXMuY2FsY1N0YXJXZWVrRGF5KHRoaXMueWVhciwgdGhpcy5tb250aCk7XG4gICAgbGV0IHdlZWtEYXkgPSAwO1xuICAgIGxldCBjdXJEYXkgPSAxO1xuICAgIGxldCByb3dDb3VudCA9IDE7XG4gICAgdGhpcy50Ym9keSA9IHRoaXMuZ3JpZC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuICAgIGxldCBncmlkQ2VsbHMgPSAnXFx0PHRyIGlkPVwicm93MFwiPlxcbic7XG5cbiAgICB3aGlsZSAodGhpcy50Ym9keS5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLnRib2R5LnJlbW92ZUNoaWxkKHRoaXMudGJvZHkuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IEVtcHR5IENlbGxzXG4gICAgZm9yICh3ZWVrRGF5ID0gMDsgd2Vla0RheSA8IHN0YXJ0V2Vla0RheTsgd2Vla0RheSsrKSB7XG4gICAgICBncmlkQ2VsbHMgKz0gJ1xcdFxcdDx0ZCBjbGFzcz1cImVtcHR5XCI+Jm5ic3A7IDwvdGQ+XFxuJztcbiAgICB9XG5cbiAgICAvLyBJbnNlcnQgdGhlIGRheXMgb2YgdGhlIG1vbnRoXG4gICAgZm9yIChjdXJEYXkgPSAxOyBjdXJEYXkgPD0gbnVtRGF5czsgY3VyRGF5KyspIHtcbiAgICAgIGlmIChjdXJEYXkgPT09IHRoaXMuZGF0ZSAmJiB0aGlzLmN1cnJlbnREYXRlID09PSB0cnVlKSB7XG4gICAgICAgIGdyaWRDZWxscyArPVxuICAgICAgICAgICdcXHRcXHQ8dGQgaWQ9XCJkYXknICtcbiAgICAgICAgICBjdXJEYXkgK1xuICAgICAgICAgICdcIiBjbGFzcz1cInRvZGF5XCInICtcbiAgICAgICAgICAnaGVhZGVycz1cInJvdycgK1xuICAgICAgICAgIHJvd0NvdW50ICtcbiAgICAgICAgICAnICcgK1xuICAgICAgICAgIHRoaXMuZGF5TmFtZXNbd2Vla0RheV0gK1xuICAgICAgICAgICdcIiAnICtcbiAgICAgICAgICAncm9sZT1cImdyaWRjZWxsXCIgYXJpYS1zZWxlY3RlZD1cImZhbHNlXCI+JyArXG4gICAgICAgICAgY3VyRGF5ICtcbiAgICAgICAgICAnPC90ZD4gXFxuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRDZWxscyArPVxuICAgICAgICAgICdcXHRcXHQ8dGQgaWQ9XCJkYXknICtcbiAgICAgICAgICBjdXJEYXkgK1xuICAgICAgICAgICdcIiBoZWFkZXJzPVwicm93JyArXG4gICAgICAgICAgcm93Q291bnQgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgdGhpcy5kYXlOYW1lc1t3ZWVrRGF5XSArXG4gICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgICdyb2xlPVwiZ3JpZGNlbGxcIiBhcmlhLXNlbGVjdGVkPVwiZmFsc2VcIj4nICtcbiAgICAgICAgICBjdXJEYXkgK1xuICAgICAgICAgICc8L3RkPiBcXG4nO1xuICAgICAgfVxuXG4gICAgICAvLyBMYXN0IGRheSBvZiB3ZWVrXG4gICAgICBpZiAod2Vla0RheSA9PT0gNiAmJiBjdXJEYXkgPCBudW1EYXlzKSB7XG4gICAgICAgIGdyaWRDZWxscyArPSAnXFx0PC90cj5cXG5cXHQ8dHIgaWQ9XCJyb3cnICsgcm93Q291bnQgKyAnXCI+XFxuJztcbiAgICAgICAgcm93Q291bnQrKztcbiAgICAgICAgd2Vla0RheSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZWVrRGF5Kys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5zZXJ0IGVtcHR5IGNlbGxzXG4gICAgZm9yICh3ZWVrRGF5OyB3ZWVrRGF5IDwgNzsgd2Vla0RheSsrKSB7XG4gICAgICBncmlkQ2VsbHMgKz0gJ1xcdFxcdDx0ZCBjbGFzcz1cImVtcHR5XCI+Jm5ic3A7PC90ZD5cXG4nO1xuICAgIH1cbiAgICBncmlkQ2VsbHMgKz0gJ1xcdCA8L3RyPic7XG5cbiAgICB0aGlzLnRib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZ3JpZENlbGxzKTtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqIENBTENVTEFURSBOVU1CRVIgT0YgREFZIElOIEEgTU9OVEggKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBjYWxjTnVtRGF5cyh5ZWFyLCBtb250aCkge1xuICAgIHJldHVybiAzMiAtIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAzMikuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKiogQ0FMQ1VMVUxBVEUgVEhFIEZJUlNUIERBWSBPRiBBIE1PTlRIIEFORCBBIFlFQVIgICoqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgY2FsY1N0YXJXZWVrRGF5KHllYXIsIG1vbnRoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKTtcbiAgfVxufVxuIl19