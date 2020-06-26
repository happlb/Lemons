var unirest = require("unirest");

var req = unirest(
  "GET",
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer"
);

req.query({
  q: "How much vitamin c is in 2 apples%3F",
});

req.headers({
  "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  "x-rapidapi-key": "SIGN-UP-FOR-KEY",
  useQueryString: true,
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
