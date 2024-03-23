"use strict";

const FinancialReport = require("../FinancialReport");
const SalesReport = require("../SalesReport");
const InventoryReport = require("../InventoryReport");

class ReportFactory {
  static createReport(reportObj) {
    switch (reportObj.reportType) {
      case "sales":
        return new SalesReport(reportObj);
      case "inventory":
        return new InventoryReport(reportObj);
      case "financial":
        return new FinancialReport(reportObj);
    }
  }
}
module.exports = ReportFactory;
