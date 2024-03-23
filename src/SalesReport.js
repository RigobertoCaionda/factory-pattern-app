"use strict";

class SalesReport {
  firstName = "";
  lastName = "";
  constructor(reportObj) {
    this.firstName = reportObj.firstName;
    this.lastName = reportObj.lastName;
  }
  generate() {
    console.log(`This is a SALE report to ${this.firstName}-${this.lastName}`);
  }
}
module.exports = SalesReport;
