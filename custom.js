//prikaz podataka o autorima prelaskom miša preko slike
$(document).ready(function(){
    $("#slika").mouseover(function(){
      $("#prvi").show(1000);
    });
  });

  $("#slika").mouseleave(function(){
    $("#prvi").hide(1000);
  });

  $("#slika1").mouseover(function(){
      $("#drugi").show(1000);
    });

    $("#slika1").mouseleave(function(){
      $("#drugi").hide(1000);
    });


var red = document.querySelector('.redovi').children;//napravljen niz od div elementa
function Rezervisi(n)//fukcija za proveru da li je izbrano sediste zauzeto i ako nije za unos broja sedista u polje Broj sedista
{
  var paragraf = red[n-1].children;
  if(paragraf[0].classList.contains('zauzeto'))
    alert("Izabrano sedište je zauzeto.");
  else
  {
    var sediste = Number(n);
    document.getElementById('br').value= sediste;
  }
}
function ProveraStringa(el) //funkcija za proveru da li je paragraf(p) prazan
{
  return el.innerHTML === "" ? true : false;
}
function Proveri()//funkcija za proveru unetih podataka i promenu pozadine rezervisanog sedišta
{
  //validacija unetih podataka
  var broj= document.getElementById('br').value;
  var ime= document.getElementById('ime').value;
  var mail= document.getElementById('mail').value;
  var email= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(broj == "") 
    document.getElementById('val_broj').innerHTML= "Morate izabrati broj sedišta";
  else if(broj < 0 || broj > 52)
    document.getElementById('val_broj').innerHTML= "Pogrešan unos broja sedišta";
  else 
    document.getElementById('val_broj').innerHTML = "";
  if(ime == "") 
    document.getElementById('val_name').innerHTML = "Morate uneti ime";
  else if(!ime.match(/^[A-Za-z]+\s+[A-Za-z]/))
    document.getElementById('val_name').innerHTML = "Pogrešan format imena";
  else
    document.getElementById('val_name').innerHTML = "";
  if(mail=="")
    document.getElementById('val_mail').innerHTML = "Morate uneti mail";
  else  if(!(mail.match(email)))
    document.getElementById('val_mail').innerHTML = "Mail nije u dobrom formatu";
  else
    document.getElementById('val_mail').innerHTML = "";
  //promena pozadine ako su uneti podaci ispravni
  if(ProveraStringa(document.getElementById('val_broj')) && ProveraStringa(document.getElementById('val_name')) && ProveraStringa(document.getElementById('val_mail')))
  {
    var paragraf = red[broj-1].children;
    paragraf[0].classList.replace('slobodno','zauzeto');
    document.getElementById('br').value = "";
    document.getElementById('ime').value = "";
    document.getElementById('mail').value = "";
    alert("Uspešno ste rezervisali sedište sa brojem " + broj);
  }
}
//dugme se povecava kada se predje misom preko njega
$(document).ready(function(){
  $("button").hover(function(){
    $(this).animate({height: '55px', width: '120px'}, 100)
  },
  function(){
    $(this).css({height: 'auto', width: 'auto'})
  }); 
});
//polja sa brojem sedista se povecavaju kada se predje preko njih
// $(document).ready(function(){
//   $(".sediste").hover(function(){
//     $(this).animate({height: '90%', width: '104%'}, 1)
//   },
//   function(){
//     $(this).css({height: 'auto', width: 'auto'})
//   }); 
// });