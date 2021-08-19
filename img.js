// a wonder ful thing that is
// const product="case"; hoi
// product+"-number"
// tahale out put  asbe case-number
// sadaranato f2 click kre ekoi namer sob select kra jai abon modipy kra jai .kono function result er jdi kaj thake tahale otake return krte hbe..ar nah thakle kra lag be nah.


// update case 
function updateProductNumber( product,price,isincreasing){
    const input=document.getElementById( product+'-number');
//   protome ekta number paoici jete bosamo input e value hisave kintu eta tu string tai parseint krte hoiec 

// ekhane const na deoar karon input number change hbe 
// ar ei value ta newa hoice 
  let productNumber=input.value;
//   jdi true parameter value ase tahale eta kaj krbe 
  if(isincreasing==true){
    productNumber=parseInt(productNumber)+1;
  }
else if(productNumber>0){
   productNumber=parseInt(productNumber)-1;
}
// value set in input. 
input.value=productNumber;
// input e value hisabe inputnumber add hbe 
const productTotal=document.getElementById( product+'-total');
productTotal.innerText=productNumber*price;
// casetotal e innertext hisabe add hbe inputnumber *59 er man 
// subtotal er function ta tokhon e kaj krbe jokon amra buton click krmo amra sokol kaj ei function theke krci so amader oi function ta ekhn theke declare kra ucit .
calculatetotal(); 
}
// calculate therapy 
// got number okf phone 
function getinputvalue(product){
    const amountphn=document.getElementById(product+'-number');
    const getphnnumber=parseInt(amountphn.value);
    return getphnnumber;
};
function calculatetotal(){
    const phonetotal=getinputvalue('phone')*1219;
    const casetotal=getinputvalue('case')*59;
    const subtotal=phonetotal+casetotal;
    const tax=subtotal/10;
    const alltotal =subtotal+tax;
    // set subtotal \
    document.getElementById('sub-total').innerText=subtotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=alltotal;
    // mane subtotal er man inner text hisabe add hbe sub-total id te  
}
// phone er increase decrece 

document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true);

})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1219,false);
    // here id name in the quatation er mdde thakbe 
})


// first of all make a plus increser 
document.getElementById('case-plus').addEventListener('click',function(){
//   const input=document.getElementById('input-number');
//   protome ekta number paoici jete bosamo input e value hisave kintu eta tu string tai parseint krte hoiec 
//   const inputnumber=input.value;
//   input.value=parseInt(inputnumber)+1;
// by clicking true it will go the function 
updateProductNumber('case',59,true);
});


// case minus 
document.getElementById('case-minus').addEventListener('click',function(){
    // const input=document.getElementById('input-number');
    // //   protome ekta number paoici jete bosamo input e value hisave kintu eta tu string tai parseint krte hoiec 
    //   const inputnumber=input.value;
    //   input.value=parseInt(inputnumber)-1;
    updateProductNumber('case',59,false);

})