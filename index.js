const express = require("express");

const app = express();
app.use(express.static(__dirname));

app.set("view engine", "ejs");

app.get("/about-us", (req, res) => {
  let data = {
    memberName: "Anhelina",
    textDescription: "vbjhbk",
    image: "/images/photo.png",
    githubLink: "https://github.com/AnhelinaLytovchenko",
  };
  res.render("about-us", data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
