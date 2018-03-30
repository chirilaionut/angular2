import { Component } from '@angular/core';

// PARENT COMPONENT
@Component({
    selector: 'app-list-employee',
    templateUrl: 'employeeList.component.html',
    styleUrls: ['employeeList.component.css']
})

export class EmployeeListComponent {

    employees: any[];

    selectedEmployeeCountRadioButton = 'All';

    constructor() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/06/1988' },
            { code: 'emp102', name: 'John', gender: 'Male', annualSalary: 3500, dateOfBirth: '14/12/1978' },
            { code: 'emp103', name: 'Alex', gender: 'Male', annualSalary: 6500, dateOfBirth: '21/04/1934' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 7500, dateOfBirth: '04/06/1972' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 8300, dateOfBirth: '04/06/1992' }
        ];
    }

    onEmployeeCountRadioButtonChangeParent(selectedRadioButtonValueX: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValueX;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

}
