/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr.map(obj => {
        if(obj.marks > 50) {
            console.log(obj);
        }
    })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   arr.forEach(obj => {
        if(obj.marks > 50) {
            console.log(obj);
        }
    })
}

function addData() {
  //Write your code here, just console.log
   const newStudent = {id:4,name:"susan",age:"20",marks:45};
    arr.push(newStudent);
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let i = 0; i < arr.length; i++) {
        if(arr[i].marks < 50) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
        { id: 4, name: "dan", age: "23", marks: 53 },
        { id: 5, name: "jackie", age: "15", marks: 37 },
        { id: 6, name: "olga", age: "18", marks: 98 },
      ];

    arr.push(...newArr);
    console.log(arr);
}
