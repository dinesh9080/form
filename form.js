let label = document.createElement("label");
label.setAttribute("for", "first name");
label.innerHTML = "<b>first name</b>";

let jam = document.createElement("br");

let input1 = document.createElement("input");
input1.setAttribute("id", "first-name");
input1.setAttribute("type", "text");
input1.setAttribute("placeholder", "enter the name");

let jam1 = document.createElement("br");

let label2 = document.createElement("label");
label2.setAttribute("for", "last name");
label2.innerHTML = "<b>last name</b>";

let jam2 = document.createElement("br");

let input2 = document.createElement("input");
input2.setAttribute("id", "last-name");
input2.setAttribute("type", "text");
input2.setAttribute("placeholder", "enter the name");

let jam3 = document.createElement("br");

let label3 = document.createElement("label");
label3.setAttribute("for", "address");
label3.innerHTML = "<b>address</b>";

let jam4 = document.createElement("br");

let input3 = document.createElement("input");
input3.setAttribute("id", "address");
input3.setAttribute("type", "text");
input3.setAttribute("placeholder", "enter the address");

let jam5 = document.createElement("br");

let label4 = document.createElement("label");
label4.setAttribute("for", "pincode");
label4.innerHTML = "<b>pincode</b>";

let jam6 = document.createElement("br");

let input4 = document.createElement("input");
input4.setAttribute("id", "pincode");
input4.setAttribute("type", "text");
input4.setAttribute("placeholder", "enter pincode");

let jam7 = document.createElement("br");

let label5 = document.createElement("label");
label5.setAttribute("for", "gender");
label5.innerHTML = "<b>gender</b>";

let jam8 = document.createElement("br");

let label6 = document.createElement("label");
label6 = "male";

let input5 = document.createElement("input");
input5.setAttribute("name", "gender");
input5.setAttribute("type", "radio");
input5.setAttribute("id", "gender");
input5.setAttribute("value", "male");

let label7 = document.createElement("label");
label7 = "female";

let input6 = document.createElement("input");
input6.setAttribute("name", "gender");
input6.setAttribute("type", "radio");
input6.setAttribute("id", "gender");
input6.setAttribute("value", "female");

let jam9 = document.createElement("br");
let jam10 = document.createElement("br");

let label8 = document.createElement("label");
label8.setAttribute("for", "food");
label8.innerHTML =
  "<b>Choice of Food</b> <small><i>(must choose at least 2 out of 5 options)</i><small>";

let jam11 = document.createElement("br");

let input7 = document.createElement("input");
input7.setAttribute("id", "food");
input7.setAttribute("type", "checkbox");
input7.setAttribute("name", "food");
input7.setAttribute("value", "North Indian");
let Northindian = document.createElement("span");
Northindian.innerHTML = " &nbsp;North Indian";

let jam12 = document.createElement("br");

let input8 = document.createElement("input");
input8.setAttribute("id", "food");
input8.setAttribute("type", "checkbox");
input8.setAttribute("name", "food");
input8.setAttribute("value", "south Indian");
let southIndian = document.createElement("span");
southIndian.innerHTML = " &nbsp;south Indian";

let jam13 = document.createElement("br");

let input9 = document.createElement("input");
input9.setAttribute("id", "food");
input9.setAttribute("type", "checkbox");
input9.setAttribute("name", "food");
input9.setAttribute("value", "chinesse");
let chinesse = document.createElement("span");
chinesse.innerHTML = " &nbsp; chinesse";

let jam14 = document.createElement("br");

let input10 = document.createElement("input");
input10.setAttribute("id", "food");
input10.setAttribute("type", "checkbox");
input10.setAttribute("name", "food");
input10.setAttribute("value", "itanlian");
let itanlian = document.createElement("span");
itanlian.innerHTML = " &nbsp; itanlian";

let jam15 = document.createElement("br");

let input11 = document.createElement("input");
input11.setAttribute("id", "food");
input11.setAttribute("type", "checkbox");
input11.setAttribute("name", "food");
input11.setAttribute("value", "asian");
let asian = document.createElement("span");
asian.innerHTML = " &nbsp; asian";

let jam16 = document.createElement("br");

let label9 = document.createElement("label");
label9.setAttribute("for", "state");
label9.innerHTML = "<b>state</b>";

let jam17 = document.createElement("br");

let input12 = document.createElement("input");
input12.setAttribute("id", "state");
input12.setAttribute("type", "text");
input12.setAttribute("placeholder", "enter state");

let jam18 = document.createElement("br");

let label10 = document.createElement("label");
label10.setAttribute("for", "country");
label10.innerHTML = "<b>country</b>";

let jam19 = document.createElement("br");

let input13 = document.createElement("input");
input13.setAttribute("id", "country");
input13.setAttribute("type", "text");
input13.setAttribute("placeholder", "enter country");

let jam20 = document.createElement("br");
let jam21 = document.createElement("br");

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("id", "submit");
button.setAttribute("onclick", "successful()");
button.setAttribute("style", "width:190px");
button.className = "btn btn-dark";
button.innerHTML = "submit";

form.append(
  label,
  jam,
  input1,
  jam1,
  label2,
  jam2,
  input2,
  jam3,
  label3,
  jam4,
  input3,
  jam5,
  label4,
  jam6,
  input4,
  jam7,
  label5,
  jam8,
  label6,
  input5,
  label7,
  input6,
  jam9,
  jam10,
  label8,
  jam11,
  input7,
  jam12,
  input8,
  jam13,
  input9,
  jam14,
  input10,
  jam15,
  input11,
  jam16,
  jam17,
  label9,
  input12,
  jam18,
  label10,
  jam19,
  input13,
  jam20,
  jam21,
  button
);

let thead = document.createElement("thead");
thead.className = "thead-dark";

let tr = document.createElement("tr");

function johnny(element, values) {
  let ell = document.createElement(element);
  ell.innerHTML = values;
  return ell;
}

let th1 = johnny("th", "firstname");
let th2 = johnny("th", "lastname");
let th3 = johnny("th", "address");
let th4 = johnny("th", "pincode");
let th5 = johnny("th", "gender");
let th6 = johnny("th", "choice of food");
let th7 = johnny("th", "state");
let th8 = johnny("th", "country");

tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr);

let tbody = document.createElement("tbody");
table.append(thead, tbody);

let submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  let gendertype = document.getElementsByName("gender");
  let genderlist1;
  for (let i = 0; i < gendertype.length; i++) {
    if (gendertype[i].checked) {
      genderlist1 = gendertype[i].value;
    }
  }

  let food = document.getElementsByName("food");
  let foodlist = [];
  let foodcount = 0;
  for (let i = 0; i < food.length; i++) {
    if (food[i].checked) {
      foodlist.push(food[i].value);
      foodcount++;
    }
  }
  if (foodlist.length >= 2) {
    foodans = foodlist.join(",");
  } else {
    foodans = alert("choose alteast two option in food");
  }

  let vfirstname = document.getElementById("first-name").value;
  let vlastname = document.getElementById("last-name").value;
  let vpincode = document.getElementById("pincode").value;
  let vaddress = document.getElementById("address").value;
  let vstate = document.getElementById("state").value;
  let vcountry = document.getElementById("country").value;


  console.log(vfirstname, vlastname, vpincode, genderlist1, vaddress, foodlist, vstate, vcountry);
    mytable(vfirstname, vlastname, vpincode, vaddress, genderlist1, vaddress, foodlist, vstate, vcountry)
});


function mytable(vfirstname, vlastname, vpincode, vaddress, genderlist1, vaddress, foodlist, vstate, vcountry) {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = vfirstname
    td2.innerHTML = vlastname
    td3.innerHTML = vaddress
    td4.innerHTML = genderlist1
    td5.innerHTML = vaddress
    td6.innerHTML = foodlist
    td7.innerHTML = vstate
    td8.innerHTML = vcountry
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
    tbody.append(tr)
}