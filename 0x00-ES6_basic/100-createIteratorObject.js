export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department in report.allEmployees) {
    if (Object.hasOwn(report.allEmployees, department)) {
      allEmployees = allEmployees.concat(report.allEmployees[department]);
    }
  }
  return allEmployees[Symbol.iterator]();
}
