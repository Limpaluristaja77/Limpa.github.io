function fetchCatFact() {
    fetch("https://cat-fact.herokuapp.com/facts/random?amount=1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("newQuoteSection").innerText = data.text;
        })
        .catch(error => console.error('Error fetching the cat fact:', error));
  }
  