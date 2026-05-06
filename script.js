const jokeText = document.getElementById("joke");

async function getJoke() {
  try {
    jokeText.innerText = "Loading...";

    const res = await fetch("https://api.freeapi.app/api/v1/public/randomjokes");
    const data = await res.json();

    const joke = data.data;

    jokeText.innerText = joke.content;

  } catch (error) {
    jokeText.innerText = "Failed to load joke 😢";
    console.error(error);
  }
}

// Load first joke automatically
getJoke();