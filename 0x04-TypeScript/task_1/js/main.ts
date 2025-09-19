interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  yearsOfExperience?: number;
  fullTimeEmployee: boolean;
  location: string;
  [key: string]: any;
}
interface Director extends Teacher {
  numberOfReports: number;
}
const teacherOne: Teacher = {
  firstName: "David",
  lastName: "Maguire",
  yearsOfExperience: 5,
  fullTimeEmployee: true,
  location: "london",
  contract: false,
};
const director: Director = {
  firstName: "Mary",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New york",
  numberOfReports: 5,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const teach: printTeacherFunction = function printTeacher(
  firstName,
  lastName
): string {
  return `${firstName}. ${lastName}`;
};

console.log(teach("John", "Doe"));

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
interface studentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return `Currently workingk`;
  }
  displayName(): string {
    return `${this.firstName}, ${this.lastName[0]} is ${this.workOnHomework()}`;
  }
}

const printStudent = new StudentClass("Emmanuel", "Joseph");
console.log(printStudent.displayName());
