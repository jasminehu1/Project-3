var projectNy = {
  title: "New York",
  description: "New York City (NYC), is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over a land area of about 302.6 square miles. As many as 800 languages are spoken in New York, making it the most linguistically diverse city in the world. New York City is home to 3.2 million residents born outside the United States, the largest foreign-born population of any city in the world as of 2016. Many districts and landmarks in New York City are well known, including three of the world's ten most visited tourist attractions in 2013. Times Square, iconic as the world's \"heart\" and \"crossroads\", is the brightly illuminated hub of the Broadway Theater District, one of the world's busiest pedestrian intersections, and a major center of the world's entertainment industry.",
  image: "https://www.history.com/.image/t_share/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg"
};

function displayTitleNy() {
  var container = document.querySelector("#containerN");
  var title = document.createElement("h1");
  var nyImage = document.createElement("img");
  var description = document.createElement("p");

  description.innerHTML = projectNy.description;
  nyImage.src = projectNy.image;
  title.innerHTML = projectNy.title;

  title.className = "titleClass";
  description.className = "descriptionClass";
  nyImage.className = "imageClass";

  container.appendChild(nyImage);
  container.appendChild(title);
  container.appendChild(description);
}

var projectJapan = {
  title: "Japan",
  description: "Tokyo is one of the 47 prefectures of Japan. It has served as the Japanese capital since 1869, its urban area housing the Emperor of Japan and the Japanese government. Tokyo is often referred to as a city but is officially known and governed as a \"metropolitan prefecture\", which differs from and combines elements of a city and a prefecture, a characteristic unique to Tokyo. Tokyo has enacted a measure to cut greenhouse gases. Governor Shintaro Ishihara created Japan's first emissions cap system, aiming to reduce greenhouse gas emission by a total of 25% by 2020 from the 2000 level. Tokyo, as the center of the Greater Tokyo Area, is Japan's largest domestic and international hub for rail and ground. However, its airspace has been under the US military's exclusive rights after World War II and some flight routes are returned to Japan.",
  image: "https://c-lj.gnst.jp/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20180907172427"
};

function displayTitleJapan() {
  var container = document.querySelector("#containerJ");
  var title = document.createElement("h1");
  var japanImage = document.createElement("img");
  var description = document.createElement("p");

  description.innerHTML = projectJapan.description;
  japanImage.src = projectJapan.image;
  title.innerHTML = projectJapan.title;

  title.className = "titleClass";
  description.className = "descriptionClass";
  japanImage.className = "imageClass";

  container.appendChild(japanImage);
  container.appendChild(title);
  container.appendChild(description);
}

var projectSeoul = {
  title: "Seoul",
  description: "Seoul officially the Seoul Special City, is the capital] and largest metropolis of South Korea. Seoul forms the heart of the Seoul Capital Area. Ranked as an alpha world city, Seoul was the world's 4th largest metropolitan economy with a GDP of US$635 billion in 2014 after Tokyo, New York City, and Los Angeles. Seoul was the capital of various Korean kingdoms, including Baekje, Joseon, and the Korean Empire and served as the secondary capital of Goryeo. Strategically located along the Han River, Seoul's history could stretch back over two thousand years, when it was founded in 18 BCE by the people of Baekje, one of the Three Kingdoms of Korea. The city has later designated the capital of Korea under the Joseon dynasty. Seoul is surrounded by a mountainous and hilly landscape, with Bukhan Mountain located on the northern edge of the city.",
  image: "https://static-new.lhw.com/HotelImages/Final/LW2854/lw2854_82974400_720x450.jpg"
};

function displayTitleSeoul() {
  var container = document.querySelector("#containerS");
  var title = document.createElement("h1");
  var seoulImage = document.createElement("img");
  var description = document.createElement("p");

  description.innerHTML = projectSeoul.description;
  seoulImage.src = projectSeoul.image;
  title.innerHTML = projectSeoul.title;

  title.className = "titleClass";
  description.className = "descriptionClass";
  seoulImage.className = "imageClass";

  container.appendChild(seoulImage);
  container.appendChild(title);
  container.appendChild(description);
}

var projectParis = {
  title: "Paris",
  description: " Paris is the capital and most populous city of France, with a population of 2,140,526 residents (official estimate, 1 January 2019) in an area of 105 square kilometers (41 square miles). Since the 17th century, Paris has been one of Europe's major centers of finance, diplomacy, commerce, fashion, science, and the arts. The City of Paris is the center and seat of government of the Île-de-France, or Paris Region, which has an estimated official 2019 population of 12,213,364, or about 18 percent of the population of France. The Paris Region had a GDP of €709 billion ($808 billion) in 2017. According to the Economist Intelligence Unit Worldwide Cost of Living Survey in 2018, Paris was the second most expensive city in the world, after Singapore, and ahead of Zürich, Hong Kong, Oslo, and Geneva. Another source ranked Paris as the most expensive, on a par with Singapore and Hong Kong, in 2018.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/1920px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG"
};

function displayTitleParis() {
  var container = document.querySelector("#containerP");
  var title = document.createElement("h1");
  var parisImage = document.createElement("img");
  var description = document.createElement("p");

  description.innerHTML = projectParis.description;
  parisImage.src = projectParis.image;
  title.innerHTML = projectParis.title;

  title.className = "titleClass";
  description.className = "descriptionClass";
  parisImage.className = "imageClass";

  container.appendChild(parisImage);
  container.appendChild(title);
  container.appendChild(description);
}

var projectLondon = {
  title: "London",
  description: " London is the capital and largest city of England and of the United Kingdom. Standing on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea, London has been a major settlement for two millennia. Londinium was founded by the Romans. The City of London, London's ancient core − an area of just 1.12 square miles (2.9 km2) and colloquially known as the Square Mile − retains boundaries that closely follow its medieval limits. The City of Westminster is also an Inner London borough holding city status. Greater London is governed by the Mayor of London and the London Assembly. London is considered to be one of the world's most important global cities and has been termed the world's most powerful, most desirable, most influential, most visited, most expensive, innovative, sustainable, most investment-friendly, and most popular for work city. London exerts a considerable impact upon the arts, commerce, education, entertainment, fashion, finance, healthcare, media, professional services, research and development, tourism and transportation.",
  image: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide-xlarge.jpg"
};

function displayTitleLondon() {
  var container = document.querySelector("#containerL");
  var title = document.createElement("h1");
  var londonImage = document.createElement("img");
  var description = document.createElement("p");

  description.innerHTML = projectLondon.description;
  londonImage.src = projectLondon.image;
  title.innerHTML = projectLondon.title;

  title.className = "titleClass";
  description.className = "descriptionClass";
  londonImage.className = "imageClass";

  container.appendChild(londonImage);
  container.appendChild(title);
  container.appendChild(description);
}

