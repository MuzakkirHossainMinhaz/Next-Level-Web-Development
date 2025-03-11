{
  // constraints in ts

  const enrolledStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const courseTitle = "Next Level Web Development";

    return {
      courseTitle,
      ...student,
    };
  };

  // a student must have id, name and email
  const student1 = enrolledStudent({
    id: 11,
    name: "Muzakkir Hossain Minhaz",
    email: "minhaz@example.com",
    address: "Dhaka, Bangladesh",
  });

  const student2 = enrolledStudent({
    id: 22,
    name: "John Doe",
    email: "john@example.com",
    education: "BSc Graduated",
  });

  const student3 = enrolledStudent({
    id: 33,
    name: "Jane Doe",
    email: "jane@example.com",
  });
}
