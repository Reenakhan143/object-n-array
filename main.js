// object  is mai hum nay
var governorhouse = {
    total_students: 50000,
    city: "karachi",
    course_duration: "1 year",
    class_timing: ["9 to 12", "2 to 5", "7 to 10"],
    days: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    per_class_student: 2000,
    tuesday: {
        morning_class: "9:00 AM  to  12:00 PM",
        student: 2000,
        is_attendence: true,
        start_subject: ["typescript", "next.js"],
        after_noon_class: "2:00 PM to  5:00 PM",
        student2: 3000,
        isattendence: true,
        subjects: ["typescript", "next.js"],
        evening_class: " 7:00 pm to  10:00 pm",
        students: 25000,
        is_attendence_student: true,
    },
};
console.log("detail of  the governer house it course\n" + governorhouse.tuesday.morning_class);
console.log(governorhouse.tuesday.start_subject[0]);
