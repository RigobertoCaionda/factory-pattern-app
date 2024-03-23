'use strict'

class InventoryReport {
    firstName = ''
    lastName = ''
    constructor(reportObj) {
        this.firstName = reportObj.firstName;
        this.lastName = reportObj.lastName;
    }
    generate() {
         console.log(
           `This is AN INVENTORY report to ${this.firstName}-${this.lastName}`
         );
    }
}
module.exports = InventoryReport;