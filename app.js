var inp = document.getElementById('inp');

var student1 = {
    rollNum: "001",
    name: "Rasheed",
    course: "Web and Mobile App Development",
    age: "18",
    institute: "SAIMS"
};

var student2 = {
    rollNum: "002",
    name: "Ahmed",
    course: "Web and Mobile App Development",
    age: "24",
    institute: "SAIMS"
};

var student3 = {
    rollNum: "003",
    name: "Mustufa",
    course: "Web and Mobile App Development",
    age: "18",
    institute: "SAIMS"
};

var student4 = {
    rollNum: "004",
    name: "Rafay",
    course: "Web and Mobile App Development",
    age: "17",
    institute: "SAIMS"
};

var student5 = {
    rollNum: "005",
    name: "Zunair",
    course: "Web and Mobile App Development",
    age: "18",
    institute: "SAIMS"
};

var student6 = {
    rollNum: "006",
    name: "Hamza",
    course: "Web and Mobile App Development",
    age: "18",
    institute: "SAIMS"
};

var student7 = {
    rollNum: "007",
    name: "Arsalan",
    course: "Web and Mobile App Development",
    age: "18",
    institute: "SAIMS"
};

var student8 = {
    rollNum: "008",
    name: "Saad",
    course: "Flutter",
    age: "15",
    institute: "SAIMS"
};

var student9 = {
    rollNum: "009",
    name: "Hassan",
    course: "Web and Mobile App Development",
    age: "13",
    institute: "SAIMS"
};

var student10 = {
    rollNum: "0010",
    name: "Subhan",
    course: "Web and Mobile App Development",
    age: "24",
    institute: "SAIMS"
};

// var details = document.getElementById("details");
// var details = document.getElementById('details');
var arr = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]

var notfound = document.getElementById('notfound');
var txt1 = document.getElementById('txt1');
var txt2 = document.getElementById('txt2');
var txt3 = document.getElementById('txt3');
var txt4 = document.getElementById('txt4');
var txt5 = document.getElementById('txt5');
function search() {
    for (i = 0; i < arr.length; i++) {
        if (inp.value == arr[i].rollNum) {
            
            // document.getElementById("txt1").style.display = "Block"
            txt1.innerHTML = "Student Roll No: " + (arr[i]).rollNum
            txt2.innerHTML = "Student Name: " + (arr[i]).name
            txt3.innerHTML = "Student Age: " + (arr[i]).age
            txt4.innerHTML = "Course: " + (arr[i]).course
            txt5.innerHTML = "Institute: " + (arr[i]).institute
            break;
        }
        else if(inp.value != arr[i].rollNum){
            document.getElementById("notfound").style.display = "block";
            // break;
        }
        else if (inp.value != arr[i].rollNum){
            document.getElementById("notfound").style.display = "none"
    }
    // else if(inp.value == arr[i].rollNum){
    //     document.getElementById("notfound").style.display = "none";
    // }
    }

}
