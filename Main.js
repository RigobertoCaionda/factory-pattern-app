"use strict";

const ReportFactory = require("./src/factories/ReportFactory");

const salesReport = ReportFactory.createReport({
  reportType: "sales",
  firstName: "Rigoberto",
  lastName: "Caionda",
});
salesReport?.generate();

const inventoryReport = ReportFactory.createReport({
  reportType: "inventory",
  firstName: "Silvio",
  lastName: "Caionda",
});
inventoryReport?.generate();
const financialReport = ReportFactory.createReport({
  reportType: "financial",
  firstName: "André",
  lastName: "Augusto",
});
financialReport?.generate();
