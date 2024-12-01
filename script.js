





// Burda randomEl adli bir funkiya yaratmisiq ve random 0 ilə 1 arasında təsadüfi onluq ədəd yaradır. 
// Elementlərin sayına vurularaq təsadüfi indeks alınır. 
// Math.floor() – Onluq hissəni goturur tam ədədə çevirir. 


function randomEl(arr) {                                  
    const rIndex = Math.floor(Math.random() * arr.length);   
    return arr[rIndex];    
}                                                           
                                                               
  const words = ["aysen", "anar", "aynur"];
  const guessWord = randomEl(words).split("");          // Burda təsadüfi sözu seçir və hərflərə ayırir
  const hiddenWord = guessWord.map(() => "_"); // daha sonra hərfləri "_" ilə əvəz edirik.
  




//   loop vasitəsilə gizli sözün hərflərini tapiriq. 
  while (hiddenWord.includes("_")) {
    prompt(`Sizin gizli sozunuz: ${hiddenWord.join(" ")}`);     
  
    const letter = prompt("Bir herf daxil edin:").toLowerCase();
  
    if (guessWord.includes(letter)) {
                                                // Tapılan hərfin bütün indekslərini doldururuq.
      guessWord.forEach((item, index) => {
        if (item === letter) {
          hiddenWord[index] = letter;
        }
      });
      alert(`Tebrikler! "${letter}" herfini tapdiniz.`);
    } else {
      alert(`Bele, "${letter}" sozde yoxdur.`);
    }
  }
  
  alert(`Tebrikler! Sozu tapdiniz: ${guessWord.join("")}`);








// function greet(name) {

//   return function() {
//     console.log("Hello, " + name + "!");
//   };
// }


// const greetJohn = greet("John");
// greetJohn(); 

// const greetAlice = greet("Alice");
// greetAlice();

  