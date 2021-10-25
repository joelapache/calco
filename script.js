
var o=document.querySelector("#input-operation");
var r=document.querySelector("#input-result");
const arrop = ['+', '-', '*', '/', "."];




// affichage de l'opération composée

function btnOperation(valeur)
{
  if(valeur == '=')
  {
    r.value = o.value +' = '+ calcul(o.value);
  }
  else if(arrop.indexOf(valeur) != -1)
  {
    var str = o.value.split("");

    if(str[str.length-1] != undefined)
    {
      if(arrop.indexOf(str[str.length-1]) < 0)
      {
        if(r.value != '')
        {
          var rerult = r.value.split("=");
          if(rerult[1] != undefined)
 	  {
            o.value = rerult[1] + valeur;
            r.value = '';
	  }
        }else{
          o.value = o.value + valeur;
        }
      }else{
         cancel();
         o.value = o.value + valeur;
      }
    }else{
      o.value = o.value != '' ? o.value + valeur : valeur == "-" ? valeur : "";
    }
  }
  else{
     o.value = o.value + valeur;
  }
}


// calcul de l'opération
//5 + 5 * 5 / 5 - 5 BODMAX 7.5
//5 * 10 - 2 / 4 + 2 BODMAX 46

function calcul(op){
  return eval(op) == 'Infinity' ? 'Erreur Fatale.': eval(op);
}


// initialiser l'opération 


function init(){
  o.value = "";
  r.value = "";
}


// effacer l'opération

function cancel(){
  var str    = o.value;
  var strlen = str.length;
  var i = 0, newstr = "";

  while(i < (str.length - 1))
  {
    newstr += ""+str[i];
    i++;
  }
  o.value = newstr == 0 ? '' : newstr ;     
}
