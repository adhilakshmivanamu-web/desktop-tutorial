const passingMarks = 50;

const students = [
    { name: 'navya', marks: 90 },
    { name: 'lekha', marks: 70 },
    { name: 'nandhini', marks: 80 },
    { name: 'hema', marks: 60 },
];

function managestudentGrades(students) {
    const passedstudent = students.filter(student => student.marks >= passingMarks);
    passedstudent.forEach(student => {
        const shortName = student.name.slice(0, 4).toUpperCase(); // Fixed typo
        const hasA = student.name.toUpperCase().includes("A");    // Fixed typo
        let grade;
        if (student.marks >= 75) {
            grade = "A";
        } else if (student.marks >= 60) {
            grade = "B";
        } else {
            grade = "C";
        }
        console.log(`Name: ${shortName}, Marks: ${student.marks}, Grade: ${grade}, HasA: ${hasA}`);
    });
}
managestudentGrades(students);