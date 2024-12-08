alert("Söz oyununa xoş gəlmisiniz!");
alert("Qaydalar: Hər oyunda iki şansınız olacaq!");

function randomEl(arr) {
  const rIndex = Math.floor(Math.random() * arr.length);
  return arr[rIndex];
}

const words = ["aysen", "anar", "aynur"];
let playAgain = true; // Oyuna başlamaq üçün `true` olaraq təyin edirik

while (playAgain) {
  const guessWord = randomEl(words).split(""); // Təsadüfi sözü seçirik və hərflərə ayırırıq
  const hiddenWord = guessWord.map(() => "_"); // Sözü "_" ilə gizlədirik
  let chances = 2; // İstifadəçinin 2 şansı var

  // Gizli söz tapılmadıqca dövr davam edir
  while (hiddenWord.includes("_") && chances > 0) {
    alert(`Gizli söz: ${hiddenWord.join(" ")}`); // Gizli sözün hal-hazırkı vəziyyətini göstəririk
    const letter = prompt("Bir hərf daxil edin:").toLowerCase(); // İstifadəçidən hərf daxil etməyi istə

    // Əgər daxil edilən hərf doğruysa, doğru yerləri doldururuq
    if (guessWord.includes(letter)) {
      guessWord.forEach((item, index) => {
        if (item === letter) {
          hiddenWord[index] = letter; // Düzgün olan hərfi tapırıq
        }
      });
      alert(`Təbriklər! "${letter}" hərfini tapdınız.`);
    } else {
      chances--; // Şans azalır
      alert(`Təəssüf ki, "${letter}" sözdə yoxdur. Qalan şansınız: ${chances}`);
    }
  }

  // Oyunun sonu
  if (!hiddenWord.includes("_")) {
    alert(`Təbriklər! Sözü tapdınız: ${guessWord.join("")}`);
  } else {
    alert(`Uduzdunuz! Gizli söz: ${guessWord.join("")}`);
  }

  playAgain = confirm("Yenidən oynamaq istəyirsiniz?");
}

alert("Oyunu oynadığınız üçün təşəkkürlər!");

    


    
  

