function displayAnswer(response) {
  new Typewriter("#word", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateWords(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#user-instructions");
  let apiKey = "3146t1140fd0d5bb8o78d46fad42f7bd";
  let context =
    "Please generate content based on the user's instruction. Be precise and return the answer accordingly and seperate each line with <br/>.";
  let prompt = instructionElement.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#word");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div id="blink">
      ⏳Genearate about ${instructionElement.value}
    </div>`;

  axios.get(apiUrl).then(displayAnswer);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateWords);
