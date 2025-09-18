class Student {
  // Private fields for encapsulation. The '#' prefix makes them private.
  #name;
  #marks = new Map();

  /**
   * Initializes a new Student instance.
   * @param {string} name - The name of the student.
   */
  constructor(name) {
    this.#name = name;
  }

  /**
   * Adds or updates the mark for a specific subject.
   * @param {string} subject - The name of the subject.
   * @param {number} mark - The numerical mark for the subject.
   */
  addMark(subject, mark) {
    if (typeof mark !== 'number' || mark < 0 || mark > 100) {
      console.error(`Invalid mark for ${subject}. Mark must be a number between 0 and 100.`);
      return;
    }
    this.#marks.set(subject, mark);
  }

  /**
   * Retrieves the mark for a specific subject.
   * @param {string} subject - The name of the subject.
   * @returns {number | undefined} The mark for the subject, or undefined if not found.
   */
  getMark(subject) {
    return this.#marks.get(subject);
  }

  /**
   * Retrieves the student's name.
   * This is a getter method to safely access the private #name field.
   * @returns {string} The name of the student.
   */
  get name() {
    return this.#name;
  }

  /**
   * Calculates the average mark of the student.
   * @returns {number} The average mark, or 0 if no marks have been added.
   */
  getAverageMark() {
    if (this.#marks.size === 0) {
      return 0;
    }
    let total = 0;
    for (const mark of this.#marks.values()) {
      total += mark;
    }
    return total / this.#marks.size;
  }

  /**
   * Displays all the student's marks and average.
   */
  displayReport() {
    console.log(`--- Student Report for ${this.name} ---`);
    if (this.#marks.size === 0) {
      console.log("No marks recorded yet.");
    } else {
      for (const [subject, mark] of this.#marks.entries()) {
        console.log(`${subject}: ${mark}`);
      }
      console.log(`Average Mark: ${this.getAverageMark().toFixed(2)}`);
    }
  }
}

// Example usage of the Student class
const student1 = new Student("Bhavani Vanamu");

// Add marks for Alice using the public method
student1.addMark("Bnaking", 95);
student1.addMark("Accounts", 88);
student1.addMark("Commerce", 76);

// Attempt to directly access the private field (will fail)
try {
  console.log(student1._marks); // This line would cause a SyntaxError in a non-console environment
} catch (e) {
  console.error("Error when trying to access private field directly:", e.message);
}

// Access the marks and other data through the public methods
console.log(`Bhavani's name is: ${student1.name}`);