class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Child class: Student, inheriting from Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying for their ${this.grade} grade.`);
  }
}

// Create a Student object
const student1 = new Student("Alice", 16, "10th");

// Call parent method
student1.introduce();

// Call child method
student1.study();