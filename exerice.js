
 var cliquer = document.querySelector('.cliquer')
 var adve = document.querySelector('.adve') 
 var cliquer1 = document.querySelector('.cliquer1')
 var adve1 = document.querySelector('.adve1')
 var couleur = document.querySelector('.bt')
 

 cliquer.addEventListener('mouseover',function(){
   adve.classList.add('adve_remove')
   adve1.classList.add('adve1_remove')
   cliquer.classList.add('cliquer_remove')
   cliquer1.classList.add('cliquer1_remove')
 })
 cliquer1.addEventListener('mouseover',function(){
  adve.classList.remove('adve_remove')
  adve1.classList.remove('adve1_remove')
  cliquer.classList.remove('cliquer_remove')
  cliquer1.classList.remove('cliquer1_remove') 
 })
 
couleur.addEventListener('click',function(){
  change.classList.add('.change1')
})


  /* Liste evenements */
  /* click (cliquer ray)
    mouseover (mandalo ny souris)
    dblclick (cliquer roa)
    mouseout (any ivelany ny souris) 
    mousedown (any ambany ny souris) + parametre
    mouseup (any ambony ny souris) + parametre
    mousemove (rehefa mihetsika ny souris)
    keydown (direction ambany)
    keyup (direction ambony)
   */

    /* var person ={
      name :"John", age:50
    };
    console.log(person.name + " is " + person.age); Création des objet*/