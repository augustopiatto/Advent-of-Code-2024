import { sanitizeData } from "./sanitizeData.js";

function checkIfReportIsSafe(report) {
  let type = null;

  const isSafe = report.every((number, index) => {
    if (report[index + 1]) {
      if (number > report[index + 1]) {
        if (type === "increasing" || number - report[index + 1] > 3)
          return false;
        type = "decreasing";
      } else if (number < report[index + 1]) {
        if (type === "decreasing" || report[index + 1] - number > 3) {
          return false;
        }
        type = "increasing";
      } else {
        return false;
      }
    }
    return true;
  });

  return isSafe;
}

function getSafeReports() {
  const reports = sanitizeData();

  const totalSafeReports = reports.reduce((acc, report) => {
    const isSafe = checkIfReportIsSafe(report);

    if (isSafe) acc++;
    return acc;
  }, 0);

  return totalSafeReports;
}

console.log("Relatórios seguros", getSafeReports());
