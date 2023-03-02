const welcText = "It's literally 2023. What happened there, Mewlif? ~the dev";
let i = 0;
const interval = setInterval(() => {
  if (i >= welcText.length) {
    clearInterval(interval);
  } else {
    document.getElementById("devnote").innerHTML += welcText[i];
    i++;
  }
}, 100);
