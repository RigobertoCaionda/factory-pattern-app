"use strict";

class FinancialReport {
  firstName = "";
  lastName = "";
  constructor(reportObj) {
    this.firstName = reportObj.firstName;
    this.lastName = reportObj.lastName;
  }
  generate() {
    console.log(
      `This is a FINANCIAL report to ${this.firstName}-${this.lastName}`
    );
  }
}
module.exports = FinancialReport;
