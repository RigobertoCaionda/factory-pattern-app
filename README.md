# FACTORY PATTERN APP
This project is aimed at creating a simple code using the factory design pattern.
The Factory design pattern is a pattern that is used to separate the object creation logic from the class that creates the objects, thus making the code more flexible.

# Prerequisites
Node.js (https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
npm or Yarn
Installation
Clone the master branch of the repository:
git clone https://github.com/RigobertoCaionda/factory-pattern-app
Enter the factory-pattern-app:
cd factory-pattern-app
Install the dependencies:
npm install or yarn install
Now you can run the file Main.js to see the results:
node Main.js
If everything went well up to this point, you'll have somethings printed in the command prompt.

# Project Structure
This is the folder structure of this project:

src/: It has the main source code of the application.
factories/: Contains the factories of this app. 
Important files:
FinancilReport.js: A class with a Financial Report logic.
InventoryReport.js: A class with a Inventory Report logic.
SalesReport.js: A class with a Sales Report logic.

# Code Example:
This is the ReportFacotry.js file:
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

This is the Main.js file:
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


# Credits
This project was developed by Rigoberto Caionda.

# Contact
If you have any questions or suggestions, please contact via email rigobertocaionda98@gmail.com or via my github page https://github.com/RigobertoCaionda