import { Component, Input, Output, EventEmitter } from '@angular/core';

    // CHILD COMPONENT
@Component({
    selector: 'app-employee-count',
    templateUrl: 'employeeCount.component.html',
    styleUrls: ['employeeCount.component.css']
})
export class EmployeeCountComponent {

    selectedRadioButtonValue = 'All';

    @Output()
    countRadioButtonSelectionChangedChild: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all;

    @Input()
    male;

    @Input()
    female;

    onRadioButtonSelectionChanged() {
        this.countRadioButtonSelectionChangedChild.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }

}
