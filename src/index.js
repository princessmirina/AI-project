function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      "You Are the Penultimate Love of My Life.",
      "The garden you plant and I plan is tunneled through by voles the vowels. ",
      "we speak aren't vows but there's something holding me here, for now, ",
      " like your eyes, which I suppose are brown, after all.",
    ],
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
