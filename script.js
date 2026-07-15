const submitBtn = document.getElementById("submit");

let serialCount = 0;

function addRow(){
  const data = getData();
  const table = document.querySelector("table");
  const row = document.createElement("tr");
  serialCount++;
  row.innerHTML += `<td>${serialCount}</td>`;
  for(let key in data){
    row.innerHTML += `<td>${data[key]}</td>`;
  }
  if(data.category === "food"){
    row.style.cssText = "background-color:tomato;";}
  else if (data.category === "travel"){
    row.style.backgroundColor = "#0e86cc";
  }else if (data.category === "hostel"){
    row.style.backgroundColor = "#09885a";
  }else{
    row.style.backgroundColor = "yellow";
  }
  table.appendChild(row);
  console.log("run");
}

submitBtn.addEventListener("click", event =>{
  event.preventDefault() 
  submitBtn.innerText = "Submitted!";
  addRow();
})

let miscCategory = "misc";

// collect data of form
function getData(){
  const getAmount = document.getElementById("amount").value;
  let getChoice = document.querySelector(`input[name="category"]:checked`)?.value;
  if (getChoice === "misc") {
    getChoice = miscCategory;
  }
  const getDate = document.getElementById("date").value;
  const getNote = document.getElementById("note").value;
  return {amount: getAmount, category: getChoice, date: getDate, note: getNote};
}

const miscBtn = () => {
  const miscBtnSelect = document.querySelector("#miscBtn");
  console.log("run")
  miscBtnSelect.style.cssText = "border:1px solid black;"
  miscBtnSelect.addEventListener("click", event => {
    event.preventDefault();
    let getCategory = prompt("expense name", "misc");
    if (getCategory) {
    miscCategory = getCategory;
  }
  })
}
miscBtn();