function getExcuse(val,id){
    const textExcuse1 = document.getElementById(id);
    const textExcuse2  = textExcuse1.previousElementSibling;

    console.log(id, textExcuse2);
     const ajax = new XMLHttpRequest;
     const url = "https://excuser.herokuapp.com/v1/" + val;

     ajax.open('GET', url, true);
 
     ajax.onreadystatechange = function(){
         if(this.status === 200 && this.readyState === 4){
             // console.log(this.responseText);
             let data = JSON.parse(this.responseText);
             if(Array.isArray(data))
                textExcuse2.innerText = `${data[0].excuse}`
             else
                 textExcuse2.innerText = `${data.excuse}`
         } else {
             console.log(this.status, this.readyState)
             this.onerror = onerror(textExcuse2);
         }
     }
     ajax.send();
 }
 
 function onerror(textExcuse2){
     textExcuse2.textContent = 'There was an error!';  
 }