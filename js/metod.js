



export function maxSalary(salaries) {
    let max = 0;
    let maxKeyName = '';
    for (const [name, salary] of Object.entries(salaries)) {
      if (salary > max) {
        max = salary;
        maxKeyName = name;
      }
    }
    return maxKeyName;
  }