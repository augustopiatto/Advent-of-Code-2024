import { sanitizeData } from "./sanitizeData.js";

function checkIfReportIsSafe(report) {
  const isOrdered = (arr, type) =>
    arr.every((num, index) => {
      if (!arr[index + 1]) return true;
      const diff = arr[index + 1] - num;
      if (type === "increasing") return diff > 0 && diff <= 3;
      if (type === "decreasing") return diff < 0 && diff >= -3;
      return false;
    });

  if (isOrdered(report, "increasing") || isOrdered(report, "decreasing")) {
    return true;
  }

  for (let i = 0; i < report.length; i++) {
    const modifiedReport = report.slice(0, i).concat(report.slice(i + 1));
    if (
      isOrdered(modifiedReport, "increasing") ||
      isOrdered(modifiedReport, "decreasing")
    ) {
      return true;
    }
  }

  return false;
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
