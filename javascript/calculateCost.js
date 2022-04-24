
  function calculateCost() {
    var cost = 0;
    var tot_Price = 0;
    var choice = document.getElementById("cmbChoice").value;
    var duration = document.getElementById("cmbDuratiom").value;
    var noOfAdults = document.getElementById("noOfAdult").value;
    var noOfChildren = document.getElementById("noOfChild").value;
    var foodTokens = document.getElementById("noOfTokens").value;
    var annualPasses = document.getElementById("noOfPasses").value;
  
    if(choice == ""){
        alert("select your choice");
        document.getElementById("cmbChoice").focus();
        return;
      }
    
    if(noOfAdults == ""){
      noOfAdults = 0;
      
    }
    else{
      noOfAdults = parseInt(noOfAdults);
  
    }
    if(noOfChildren == "" ){
      noOfChildren = 0;
    }
    else{
      noOfChildren = parseInt(noOfChildren);
  
    }
    
    if(annualPasses == ""){
      annualPasses = 0;
      
    }
    else{
      annualPasses = parseInt(annualPasses);
  
    }
    if(foodTokens == ""){
        foodTokens = 0;
        
      }
      else{
        foodTokens = parseInt(foodTokens);
    
      }
  
    choice = parseInt(choice);
    
    switch(choice) {
      case 0:
        tot_Price = 1000 * noOfAdults + 500 * noOfChildren;
        break;
      case 1:
        tot_Price = 500 * noOfAdults + 250 * noOfChildren;
        break;
      case 2:
        tot_Price = 5000 * noOfAdults + 2500* noOfChildren;
        break;
      default:
        
    }
    const durationarray = [0,250,500,1000];
    if(duration !=""){
      duration = parseInt(duration);
      tot_Price = tot_Price + durationarray[duration];
  
    }
    cost = parseFloat(tot_Price + foodTokens * 500 + annualPasses * 5000);
    document.getElementById("spCost").innerHTML = cost.toFixed(2);
  }
  
    document.getElementById("AddOrder").onclick = function(){

    var cost = parseFloat(document.getElementById("spCost").innerHTML);
    if(cost == 0){
        alert("select the number of tickets");
        return;
    }
  
    document.getElementById("divOrder").style = "display:block";
    var grand_total = parseFloat(document.getElementById("thGrandTot").innerHTML);
  
    var ctrl_choice = document.getElementById("cmbChoice");
    var choice_txt = ctrl_choice.options[ctrl_choice.selectedIndex].text;
  
    var ctrl_duration = document.getElementById("cmbDuratiom");
    var duration_txt = ctrl_duration.options[ctrl_duration.selectedIndex].text;
  
  
    var tbody = document.getElementById("tbody_order");
    var trow = tbody.insertRow(-1)
  
    td1 = trow.insertCell(0);
    td1.innerHTML = choice_txt;
  
    td2 = trow.insertCell(1);
    td2.innerHTML=document.getElementById("noOfAdult").value;
  
    td3 = trow.insertCell(2);
    td3.innerHTML=document.getElementById("noOfChild").value;
  
    td4 = trow.insertCell(3);
    td4.innerHTML = document.getElementById("date").value;
  
    td5 = trow.insertCell(4);
    td5.innerHTML = duration_txt;
  
    td6 = trow.insertCell(5);
    td6.innerHTML=document.getElementById("noOfPasses").value;
  
    td7 = trow.insertCell(6);
    td7.innerHTML=document.getElementById("noOfTokens").value;
  
    var total = parseFloat(document.getElementById("spCost").innerHTML);
    grand_total = grand_total + total;
  
    td8 = trow.insertCell(7);
    td8.innerHTML=total.toFixed(2);
    td8.style = "text-align:right";
  
    td9 = trow.insertCell(8);
    td9.innerHTML = "<a href='javascript:void(0)' style='color:red;font-weight:bold' onclick='removeRecord(this.parentElement);'>X</a>";
  
    document.getElementById("thGrandTot").innerHTML = grand_total.toFixed(2);
    document.getElementById("thGrandTot").style = "text-align:center"
  
    resetPurchaseForm();
  
  }
  
  
  
  
  function resetPurchaseForm(){
    document.getElementById("frmPurchase").reset();
    document.getElementById("spCost").innerHTML = "0.00";
  }
  
function removeRecord(item){
    var result = confirm("Do you want to remove this record?");
    
    if(result == true){
        var table = document.getElementById("tbl_order");
        var grand_total = parseFloat(document.getElementById("thGrandTot").innerHTML);
        var total = parseFloat(item.parentElement.cells[7].innerHTML);
        grand_total = grand_total - total;
        document.getElementById("thGrandTot").innerHTML = grand_total.toFixed(2);
        table.deleteRow(item.parentElement.rowIndex);
    }
   
  
  }
  

  // donate
function inputValidation(){
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var cardNumber = document.getElementById("cardNum").value;
  var pinNumber = document.getElementById("cvv").value;
  var email_pattern = /^[A-Za-z\d\.\_]+\@[A-Za-z\d\.\-]+\.[A-Za-z]{2,5}$/;

  var addr_pattern = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
  var card_pattern = /^[0-9]{16,16}$/;
  var pin_pattern = /^[0-9]{3,3}$/;




if(!email.match(email_pattern)){
    alert(" enter a valid email");
    document.getElementById("txtemail").focus();
    return false;
}

if(!address.match(addr_pattern)){
    alert(" enter a valid address");
    document.getElementById("address").focus();
    return false;
}

if(fixedDonatons == ""){
  alert("select the donation amout");
  return;
}

if(!cardNumber.match(card_pattern)){
    alert("enter a valid cardnumber");
    document.getElementById("cardNum").focus();
    return false;
}


if(!pinNumber.match(pin_pattern)){
  alert("enter a valid pin number(cvv)");
  document.getElementById("txtadd").focus();
  return false;
}


if(mothInput == ""){
  alert("select expiration month of your credit/debit card");
  document.getElementById("monthInput").focus();
  return;
}

if(yearInput == ""){
  alert("select the expiration year of your credit/debit card");
  document.getElementById("yearInput").focus(); 
  return;
}

alert("Thank yoo fo donation")


}