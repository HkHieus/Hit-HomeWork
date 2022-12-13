//Ex1

const isPrime = ( number ) => {
    if ( number < 2 ) return false ;
    for( let i = 2 ; i <= Math.sqrt(number) ; i++ ) {
      if( number % i == 0 ) return false
    }
    return true ;
 }
 
 //Ex2
 const obj = {
   name: "Hưng",
   age: 20,
   email: "dth27902@gamil.com",
 };
 
 const convertObjectToArray = Object.keys(obj).map(
   (key) => `${key} : ${obj[key]}`
 );
 
 //Ex3
 var courses = ["C++", "Java", "Javascript"];
 
 const addCourse = (arrayCourse, courseToAdd) => [...arrayCourse, courseToAdd];
 
 const getFirstElement = (arrayCourse) => arrayCourse.shift();
 
 const joinArr = (coursesArray, separator) =>
   coursesArray.reduce(
     (result, course, index) =>
       (result += course + (coursesArray.length != index + 1 ? separator : "")),
     ""
   );
 
 
 