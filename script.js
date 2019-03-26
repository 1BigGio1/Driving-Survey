var fName;
var lName;
var age;
var bday;
var eye;

var ufName = {
userfName: "",
checkfName: function(){
    return this.fName = this.userfName;
    }
};
ufName.userfName=fName;
ufName.checkfName(fName);

var ulName = {
userlName: "",
checklName: function(){
    return this.lName = this.userlName;
    }
};
ulName.userlName=lName;
ulName.checklName(lName);

var uAge = {  
userAge: 0,
checkAge: function(){
    return this.uAge = this.userAge;

if (age < 16) {
          alert("You can't drive.");
        } else if (age < 18) {
            alert("You can get your permit.");
        } else if (age < 25) {
            alert("You can drive.");
            
        }
            
    }
};
uAge.userAge=age;
uAge.checkAge(uAge);
//alert();

var uBday = {  
userBday: 0
};
uBday.userBday=bday;

var eyeOne = {
eyeOne: ""
};
eyeOne.eyeOne=eye;

var eyeTwo = {
eyeTwo: ""
};
eyeTwo.eyeTwo=eye;

var eyeThree = {
eyeThree: ""
};
eyeThree.eyeThree=eye;


function myFunction1() {
    document.getElementById('btn').addEventListener('click', function(){
    var formInput = document.getElementById("form");
    var e = formInput.eye.value;
     document.getElementById('copy5').innerHTML = e;
 
 });
 
 
 var a = document.getElementById("fName").value;
  document.getElementById("copy1").innerHTML = a;
  
 var b = document.getElementById("lName").value;
  document.getElementById("copy2").innerHTML = b;
  
 var c = document.getElementById("age").value;
  document.getElementById("copy3").innerHTML = c;
 
 var d = document.getElementById("date").value;
  document.getElementById("copy4").innerHTML = d;
  
 
}



function myFunction2() {
    var q = document.getElementById('form').reset(); 
    
}









        
        
