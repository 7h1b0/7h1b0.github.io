const loveText = document.getElementById("love_text");
const text = [
  "friendship",
  "Mechanical Keyboard",
  "my mom",
  "you",
  "the monsters under my bed",
  "a sunny day in Paris",
  "Sziget festival",
  "my fabulous Pixel 5",
  "when my best friend arrives on time",
  "when trains only have 30 minutes late",
  "HBO !",
  "when my program compile without any errors or warnings",
  "my two little Raspberry Pi",
  "Singapore's MRT",
  "Nodejs",
  "Anna <3",
  "when I wake up at 3pm",
  "Ultrawide screen",
];

function setTitle(text) {
  loveText.innerText = text;
}

function onMouseMove() {
  let date = Date.now();
  let index = 0;
  setTitle("I love when you move your mouse.");

  return () => {
    const newDate = Date.now();

    if (newDate - 250 >= date) {
      date = newDate;
      index++;
      setTitle(`I love ${text[index % text.length]}`);
    }
  };
}

if (window.matchMedia("(min-width:1000px)").matches) {
  document.onmousemove = onMouseMove();
} else {
  setTitle("I love web mobile.");
}
