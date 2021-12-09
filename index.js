var button = document.getElementsByClassName('button');
var display = document.getElementById('display');
var ac = document.getElementById('ac');
var oparrand1 = 0 ;
var oparrand1 = null ;
var oparator = null ;

for(var i = 0 ; i < button.length ; i++){
      button[i].addEventListener('click' , function(){
            var value = this.getAttribute('data-value');
            
            ac.innerText = 'C';
            if(value=='+'){
                  oparator = '+';
                  oparrand1 = parseFloat(display.textContent);
                  display.textContent = null;
            }else if(value=='='){
                  oparrand2 = parseFloat(display.textContent);
                  value = eval('oparrand1' + oparator + 'oparrand2');
                  display.innerText = value ;

            }else if(value=='AC'){
                  oparrand1 = 0 ;
                  oparrand2 = 0 ;
                  display.innerText = '0';
                  ac.innerText = 'AC';
            }else if(value=='-'){
                  oparator = '-';
                  oparrand1 = parseFloat(display.textContent);
                  display.textContent = null;
            }else if(value=='*'){
                  oparator = '*';
                  oparrand1 = parseFloat(display.textContent);
                  display.textContent = null;
            }else if(value == '/'){
                  oparator = '/';
                  oparrand1 = parseFloat(display.textContent);
                  display.textContent = null;
            }else if(value=='%'){
                  oparator = '%';
                  oparrand1 = parseFloat(display.textContent);
                  value = oparrand1/100;
                  display.innerText = value;
            }
            else{
                  
                  display.innerText +=value ;
            }
      })
}
