function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#user-instructions");
  let apiKey = "3146t1140fd0d5bb8o78d46fad42f7bd";
  let context =
    "Generate a love poem letter of 10 lines,please be precise and seperate each line with a <br/>";
  let prompt = `Generate an english poem about ${instructionElement.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div id="blink">
      ⏳Genearate an english Poem about ${instructionElement.value}
    </div>`;

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);
