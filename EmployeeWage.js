//UC-01-Check Employee Is Present Or Absent
// UC-02-Ability to Calculate Daily Employee Wage based on part time or full time work 
// - Use Math.Random to check No Time,Part Time or Full Time
// - Assume Part Time is 4 Hrs and Full time is 8 Hrs and per hour wage is $20
// - Solve Using Switch Statement



const IS_ABSENT = 0
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee Is Absent");
    return;
}
else {
    console.log("Emloyee Is Present");
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            console.log("Part Time Employee");
            empHrs = IS_PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            console.log("Full Time Employee");
            empHrs = IS_FULL_TIME_HOURS
            break;
        
    }
    let empWage=empHrs*WAGE_PER_HOUR;
    console.log("Employee Wage:"+empWage);
}