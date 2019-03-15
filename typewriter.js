const demo = document.getElementById("demo");

// Message
const message = [
  "ㅇ이",
  "ㄱ거",
  " ",
  "ㅇ이일읽",
  "ㅇ으을",
  " ",
  "ㅅ수",
  " ",
  "ㅇ이있",
  "ㅇ어",
  "ㅇ요",
  "?"
];

// Building Character On The Screen

let array = [];
let b = 0;

function typeWriter(char) {
  let i = 0;
  let j = 0;
  const timer = setInterval(function() {
    if (i < char.length) {
      array[b] = char[i];
      demo.innerHTML =
        array.join("") + '<span class="caret blink" aria-hidden="true"></span>';
      i++;
    } else {
      clearInterval(timer);
    }
  }, 25);
}

// Character by Character
function write() {
  if (b === message.length) return;
  typeWriter(message[b]);
  b++;
  // Pause at periods
  if (
    message[b] === " " &&
    (message[b - 1] === "." || message[b - 1] === "?")
  ) {
    setTimeout(write, 300);
  } else {
    setTimeout(write, 150);
  }
}

// Init
write();

// Loop
setInterval(function() {
  demo.innerHTML = "";
  b = 0;
  array = [];
  write();
}, 4500);
