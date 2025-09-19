interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {
  salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  workFromHome(): string {
    return `Working from home`;
  }
  getCoffeeBreak(): string {
    return `Getting a coffee break`;
  }
  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  workFromHome(): string {
    return `Cannot work from home`;
  }
  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }
  workTeacherTasks(): string {
    return `Getting to work`;
  }
}

const teacherSalary = new Teacher(200);
const directorSalary = new Director(500);

let convertToNumber: number;
const dirctorAverageSalary = 500;

function createEmployee(salary: number | string) {
  let numericSalary: number;
  if (typeof salary === "string") {
    numericSalary = parseInt(salary.replace(/[^0-9]/g, ""), 10);
  } else {
    numericSalary = salary;
  }
  if (numericSalary < 500) {
    return new Teacher(numericSalary);
  } else {
    return new Director(numericSalary);
  }
}
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") console.log("Teaching Math");
  if (todayClass === "History") console.log("Teaching History");
}

const emp1 = createEmployee("$200");
const emp2 = createEmployee(500);
const emp3 = createEmployee(100);

console.log(emp1);
console.log(emp2);
console.log(emp3);

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

teachClass("Math");
teachClass("History");
