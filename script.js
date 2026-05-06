const container = document.getElementById("joke");

async function getJoke() {
  try {
    container.innerHTML = "Loading...";

    let jokesSet = new Set();
    let attempts = 0;

    while (jokesSet.size < 5 && attempts < 10) {
      const res = await fetch("https://api.freeapi.app/api/v1/public/randomjokes");
      const result = await res.json();

      const jokeData = result.data.data;
      const joke = Array.isArray(jokeData) ? jokeData[0] : jokeData;

      jokesSet.add(joke.content);
      attempts++;
    }

    if (jokesSet.size === 0) {
      container.innerHTML = "Failed to load jokes 😢";
      return;
    }

    let jokesHTML = "";
    jokesSet.forEach(j => {
      jokesHTML += `<p class="mb-3">😂 ${j}</p>`;
    });

    container.innerHTML = jokesHTML;

  } catch (error) {
    container.innerHTML = "Failed to load jokes 😢";
    console.error(error);
  }
}

getJoke();