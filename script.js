let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  document.querySelector("#main-title").innerHTML = "DOM's Homepage";
  // Part 2
  document.querySelector("body").style.backgroundColor = "yellow";
  // Part 3
  let favorite = document.getElementById("favorite-things")
   favorite.removeChild(favorite.lastElementChild);
  // Part 4
  let newFont= document.querySelectorAll(".special-title")
  for(i =0; i < newFont.length; i++){
    newFont[i].style.fontSize ="2rem"
  }

  // Part 5
  let pastRaces = document.querySelector("#past-races");
  pastRaces.removeChild(pastRaces.children[3])

  // Part 6
  const race = document.createElement("li");
  let city = document.createTextNode("Pittsburgh")
  race.appendChild(city)
  document.querySelector("#past-races").appendChild(race)

  // Part 7
  const blog = document.createElement("div")
  blog.classList.add("blog-post","purple")
  
  const h1 = document.createElement("h1")
  const h1Text = document.createTextNode("PITTSBURGH")
  h1.appendChild(h1Text)
  

  const p = document.createElement("p")
  const pText=  document.createTextNode("EH PITTSBURGHS ALRIGHT")
  p.appendChild(pText)
  
blog.appendChild(h1)
blog.appendChild(p)

  document.querySelector(".main").appendChild(blog)
}

