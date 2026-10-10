const inputNumber=document.getElementById("input-number");
const pickF=document.getElementById("pickF");
const pickC=document.getElementById("pickC");
const submitBtn=document.getElementById("submitBtn");
const tempResault=document.getElementById("tempResault");
let temp;
submitBtn.onclick=()=>{
    if (inputNumber.value !=="") {
        
    
if (pickF.checked) {
    temp=Number(inputNumber.value);
    temp=temp*9/5+32;
    tempResault.textContent=`${temp.toFixed(1)} F`
}
else if(pickC.checked){
        temp=Number(inputNumber.value);
        temp =(temp -32)*(5/9);
        tempResault.textContent=`${temp.toFixed(1)} C`
}
else{
    tempResault.textContent="Select a Convert Type "
}
    }
else {
        tempResault.textContent = "Please enter a temperature";
    }


  
}