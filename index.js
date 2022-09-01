raqam = 0
function osh1() {
  let son = nechta.innerText;
  son++;
  raqam++
  nechta.innerText = son;
  if(raqam == 0 ){
    zikr.innerText = "SubhanAlloh"
  }
  if(raqam>32){
    nechta.innerText = raqam -33
    zikr.innerText = "Alhamdulillah"
    
  } 
  if(raqam>65){
    nechta.innerText = raqam - 66
    zikr.innerText = "Allohu Akbar"

    
  }
  if(raqam>98){
    nechta.innerText = 0
    zikr.innerText = "La ilaha illallohu vahdahu la shariyka lah, lahul-mulku va lahul hamd va huva 'ala kulli shay'in qodiyr "

    
  }

  console.log(raqam);

  event.preventDefault();




}


function tozala() {
  zikr.innerText = "SubhanAlloh"
  raqam =0
  if (nechta.innerText > 0){
    
  nechta.innerText--;
  setTimeout("tozala()" , 5)
  
  }
  
  event.preventDefault();
}

// let nechta = document.sonlar.nechta
// son = nechta.value;
// son++;
// nechta.value = son;
