class Student {
  constructor(name, age, gender, phone, email, course, marks) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
    this.course = course;
    this.marks = marks; // An object or array to store marks for different subjects
  }

  // Method to display student information
  displayStudentInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Phone: ${this.phone}`);
    console.log(`Email: ${this.email}`);
    console.log(`Course: ${this.course}`);
    console.log(`Marks:`, this.marks);
  }

  // Method to update student's course
  updateCourse(newCourse) {
    this.course = newCourse;
    console.log(`${this.name}' course updated to ${this.course}`);
  }

  // Method to add or update marks for a subject
  updateMarks(subject, score) {
    if (typeof this.marks !== 'object' || this.marks === null) {
      this.marks = {}; // Initialize marks as an object if not already
    }
    this.marks[subject] = score;
    console.log(`${this.name}'s ${subject} marks updated to ${score}`);
  }
}

class StudentManagementSystem {
  constructor() {
    this.students = []; // Array to store all student objects
  }

  addStudent(student) {
    this.students.push(student);
    console.log(`${student.name} added to the system.`);
  }

  findStudentByName(name) {
    return this.students.find(student => student.name === name);
  }

  listAllStudents() {
    if (this.students.length === 0) {
      console.log("No students in the system.");
      return;
    }
    console.log("--- All Students ---");
    this.students.forEach(student => student.displayStudentInfo());
    console.log("--------------------");
  }

  removeStudentByName(name) {
    const initialLength = this.students.length;
    this.students = this.students.filter(student => student.name !== name);
    if (this.students.length < initialLength) {
      console.log(`${name} removed from the system.`);
    } else {
      console.log(`${name} not found in the system.`);
    }
  }
}

// Example Usage:
const sms = new StudentManagementSystem();

const student1 = new Student("Lakshmi", 21, "Female", "123-456-7890", "lakshmi@example.com", "Computer Science", { Math: 90, Physics: 85 });
const student2 = new Student("Bhavani", 23, "Female", "098-765-4321", "bhavani@example.com", "Accounts", { Banking:85,Commerce:80});


sms.addStudent(student1);
sms.addStudent(student2);

sms.listAllStudents();

const foundStudent = sms.findStudentByName("Lakshmi");
if (foundStudent) {
  foundStudent.updateCourse("Data Science");
  foundStudent.updateMarks("Physics", 75);
  foundStudent.displayStudentInfo();
}

sms.removeStudentByName("Bhavani");
sms.listAllStudents();