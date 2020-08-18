let quoteArray = [
    '"Ego mówi: gdy wszystko się ułoży, wówczas poczuję spokój. Duch mówi: znajdź swój spokój i wszystko się ułoży" - Marianne Williamson',
    '"Jedną z przyczyn, dla których pracujemy nad sobą jest nawiązywanie kontaktów z różnymi aspektami siebie, stwarzanie sobie możliwości do stawania się nimi oraz pozwalanie im, aby wychodziły na światło dzienne." Arnold Mindell', 
    '"Człowiek ma nieskończoną  zdolność samookreślania. To, kim się staje - w granicach wyznaczonych mu przez otoczenie oraz przyrodzone możliwości - zawdzięcza tylko sobie samemu. --Viktor E. Frankl"'];

let randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  

function loadQuote() {

    document.getElementById('quote').innerText = randomQuote
 


}



console.log(loadQuote());


setTimeout(function(){ 
    document.querySelector('.animationcss').classList.add("move")
    }, 20);

    

jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
    });


