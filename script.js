let fname = document.createElement('label');
fname.innerHTML = "Firstname";
fname.setAttribute('for', 'main1');
document.body.append(fname);

var line = document.createElement('br');
document.body.append(line);

let input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('name', '');
input1.setAttribute('id', 'main1');
document.body.append(input1);

var line = document.createElement('br');
document.body.append(line);

let mname = document.createElement('label');
mname.innerHTML = "Middlename";
mname.setAttribute('for', 'main2');
document.body.append(mname);

var line = document.createElement('br');
document.body.append(line);

let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('name', '');
input2.setAttribute('id', 'main2');
document.body.append(input2);

var line = document.createElement('br');
document.body.append(line);

let lname = document.createElement('label');
lname.innerHTML = "Lastname";
lname.setAttribute('for', 'main3');
document.body.append(lname);

var line = document.createElement('br');
document.body.append(line);

let input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.setAttribute('name', '');
input3.setAttribute('id', 'main3');
document.body.append(input3);

var line = document.createElement('br');
document.body.append(line);

let email = document.createElement('label');
email.innerHTML = "Email";
email.setAttribute('for', 'main4');
document.body.append(email);

var line = document.createElement('br');
document.body.append(line);

let input4 = document.createElement('input');
input4.setAttribute('type', 'email');
input4.setAttribute('name', '');
input4.setAttribute('id', 'main4');
document.body.append(input4);

var line = document.createElement('br');
document.body.append(line);

let pic = document.createElement('label');
pic.innerHTML = "Upload Picture";
pic.setAttribute('for', 'main');
document.body.append(pic);

var line = document.createElement('br');
document.body.append(line);

let input5 = document.createElement('input');
input5.setAttribute('type', 'file');
input5.setAttribute('name', '');
input5.setAttribute('id', 'main');
document.body.append(input5);

var line = document.createElement('br');
document.body.append(line);

let button = document.createElement('button');
button.innerHTML = "Submit";
button.setAttribute('onclick', 'foo()');
document.body.append(button);



function foo(){
    let output1 = document.getElementById("main1").value;
    let output2 = document.getElementById("main2").value;
    let output3 = document.getElementById("main3").value;
    let output4 = document.getElementById("main4").value;
    console.log(output1);
    console.log(output2);
    console.log(output3);
    console.log(output4);
}