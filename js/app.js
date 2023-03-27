import { usersNames, salaries, users1 } from "./user";
import { maxSalary } from "./metod";




let users = {}
users = usersNames.reduce((acc, name) => {
  const key = name.toLowerCase();
  return {...acc, [key]: name};
}, {});

console.log(users);



console.log(maxSalary(salaries));




let { mike: userMike, bob: userBob, nikola: userNikola } = users1;

console.log(`userMike = ${userMike}`);
console.log(`userBob = ${userBob}`);
console.log(`userNikola = ${userNikola}`);