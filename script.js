const form = document.getElementById("form");
const complete = document.getElementById("complete");
  const campos = [document.getElementById('input0'), document.getElementById('input1'),
                document.getElementById('input2'), document.getElementById('input3'), 
                document.getElementById('input4')];
  const spans = document.querySelectorAll('.span-required');
  const num = document.getElementById('num-card-front');
  const date = document.getElementById('date-card-front');
  const name = document.getElementById('name-card-front');
  const cvc = document.getElementById('cvc-card-back');
  const divRC = document.querySelectorAll('.right-container');
  const button = document.querySelectorAll('.confirm');
  var numberRegex = /^\d+$/;
  

  function setError(index){
    campos[index].style.border = '2px solid hsl(0, 100%, 66%)';
    spans[index].style.display = 'block';
  }

  function removeError(index){
    campos[index].style.border = ''; 
    spans[index].style.display = 'none';
  }

  function nameValidate(){
    name.innerHTML=campos[0].value;
    if(campos[0].value.length === 0){
      name.innerHTML="Jane Appleseed";
      setError(0);
      return 1;
    }else{
      removeError(0);
      return 0;
    }
  }
  function numValidate(){
    let aux="";
    for (let i = 0; i < campos[1].value.length; i++) {
      if(i%4===0)
        aux+=" ";
      aux+=campos[1].value[i];
    }
    num.innerHTML=aux;
    if(campos[1].value.length < 16 || !campos[1].value.match(numberRegex) ){
      if (campos[1].value.length === 0) {
        num.innerHTML="0000 0000 0000 0000";
      }
      setError(1);
      return 1;
    }else{
      removeError(1);
      return 0;
    }
  }
  function monthValidate(){
    date.innerHTML=campos[2].value+"/"+campos[3].value;
    if(String(campos[2].value).length === 0 || campos[2].value<1 || campos[2].value>12 || !campos[2].value.match(numberRegex)){
      if (String(campos[2].value).length === 0 && String(campos[3].value).length === 0) {
        date.innerHTML="00"+"/"+"00";
      }else if(String(campos[2].value).length !== 0 && String(campos[3].value).length === 0){
        date.innerHTML=campos[2].value+"/"+"00";
      }else if(String(campos[2].value).length === 0 && String(campos[3].value).length !== 0){
        date.innerHTML='00'+"/"+campos[3].value;
      }
      setError(2);
      return 1;
    }else{
      removeError(2);
      return 0;
    }
  }
  function yearValidate(){
    date.innerHTML=campos[2].value+"/"+campos[3].value;
    if(String(campos[3].value).length === 0||campos[3].value<24 || campos[3].value>99 || !campos[3].value.match(numberRegex)){
      if (String(campos[2].value).length === 0 && String(campos[3].value).length === 0) {
        date.innerHTML="00"+"/"+"00";
      }else if(String(campos[2].value).length !== 0 && String(campos[3].value).length === 0){
        date.innerHTML=campos[2].value+"/"+"00";
      }else if(String(campos[2].value).length === 0 && String(campos[3].value).length !== 0){
        date.innerHTML='00'+"/"+campos[3].value;
      }
      setError(3);
      return 1;
    }else{
      removeError(3);
      return 0;
    }
  }
  function cvcValidate(){
    cvc.innerHTML=campos[4].value;
    if(campos[4].value.length != 3 || !campos[4].value.match(numberRegex)){
      if (campos[4].value.length === 0) {
        cvc.innerHTML="000";
      }
      setError(4);
      return 1;
    }else{
      removeError(4);
      return 0;
    }
  }
  function Complete(){
    form.style.display='none';
    complete.style.display='flex';
  }
  function Continue(){
    form.style.display='flex';
    complete.style.display='none';
    name.innerHTML="Jane Appleseed";
    num.innerHTML="0000 0000 0000 0000";
    date.innerHTML="00"+"/"+"00";
    cvc.innerHTML="000";
   form.reset();

  }


  form.addEventListener('submit',e=>{
      e.preventDefault();
      let namEr=nameValidate();
      let numEr=numValidate();
      let monEr=monthValidate();
      let yearEr=yearValidate();
      let cvcEr=cvcValidate();
      if (namEr || numEr || monEr || yearEr || cvcEr) {
      }else{
        Complete();
      }
  })

  complete.addEventListener('click',e=>{
    Continue();
})

  
