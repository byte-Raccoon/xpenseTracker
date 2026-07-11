const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", event =>{
  event.preventDefault() 
  getData();
  submitBtn.innerText = "Submitted!";
  addData();
})

function getData(){
  const getAmount = document.getElementById("amount").value;
  const getChoice = document.querySelector('input[name="category"]:checked')?.value;
  const getDate = document.getElementById("date").value;
  const getNote = document.getElementById("note").value;
  return {amount: getAmount, category: getChoice, date: getDate, note: getNote};
}

function addData(){
     const data = getData();
     const para = document.createElement("p");
     para.textContent = `${data.amount} - ${data.category} - ${data.date} - ${data.note}`;
     para.style.color = "tomato";
     document.body.append(para); // ← missing line, actually adds it to the page
   }