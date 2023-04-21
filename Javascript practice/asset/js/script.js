function Object (fname, lname) {
    this.Firstname = fname;
    this.Lastname = lname;
}

let person1 = new Object("Vivek", "Ramoliya");
let person2 = new Object("sdgfd", "Ramosgfgagliya");

function fun(){
    document.getElementById('demo').innerHTML= person2.Firstname + " " + person1.Lastname;
}

// // Create an object:
// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

// // Display some data from the object:
// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";

// // let x = -100;
// // x >>= 3;
// let x = 16 + 4 + "Volvo";
// document.getElementById("demo").innerHTML = "Value of x is: " +  person.fullName();

// let text = "We are the so-called \"Vikings\" from the north.";
// document.getElementById("demo").innerHTML = text; 

// // x is a string
// let x = "John";
// // y is an object
// let y = new String("John");
// document.getElementById("demo").innerHTML =
// typeof x + "<br>" + typeof y;

///////////////////////////////////////////////////////////String Methods///////////////////////////////////////////////////////////
//// String length
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// document.getElementById("demo").innerHTML = text.length;

//// String slice()
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7,13);
// document.getElementById("demo").innerHTML = part; 

//// String substring()
// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substring(-12,-6); // not working - only positive value

//// String substr()
// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substr(7,4);

// //String replace()
// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML =
//     text.replace("Microsoft","W3Schools");
//   }
// function myFunction() {
//     let text = document.getElementById("demo").innerHTML; 
//     document.getElementById("demo").innerHTML =
//     text.replace("Microsoft","W3Schools");
//   }

//// String replaceAll()
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// document.getElementById("demo").innerHTML = text;

//// String toUpperCase()
// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML =
//     text.toUpperCase();
//   }

//// String toLowerCase()
// function myFunction() {
//     let text = document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML =
//     text.toLowerCase();
//   }

//// String concat()
// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ",text2);
// document.getElementById("demo").innerHTML = text3;

//// String trim()
// let text1 = "     Hello World!     ";
// let text2 = text1.trim();
// document.getElementById("demo").innerHTML =
// "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

//// String trimStart()
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// document.getElementById("demo").innerHTML =
// "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

//// String trimEnd()
// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd();
// document.getElementById("demo").innerHTML =
// "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

//// String padStart()
// let text = "5";
// document.getElementById("demo").innerHTML = text.padStart(4,"x");

//// String padEnd()
// let text = "5";
// document.getElementById("demo").innerHTML = text.padEnd(4,"x");

//// String charAt()
// var text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charAt(6);

//// String charCodeAt()
// let text = "HELLO WORLD";
// document.getElementById("demo").innerHTML = text.charCodeAt(0);

//// String split()
// let text = "a,b,c,d,e,f";
// const myArray = text.split(",");
// document.getElementById("demo").innerHTML = myArray[0];
// let text = "Hello";
// const myArr = text.split("");

// text = "";
// for (let i = 0; i < myArr.length; i++) {
//   text += myArr[i] + "<br>"
// }
// document.getElementById("demo").innerHTML = text;

///////////////////////////////////////////////////////////String Search///////////////////////////////////////////////////////////

//// String indexOf()
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// document.getElementById("demo").innerHTML = index; 

//// String lastIndexOf()


//// String search()
//// String match()
//// String matchAll()
//// String includes()
//// String startsWith()
//// String endsWith()



const asf = function(e){
    console.log(e)
}