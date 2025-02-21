const express = require("express"); // Підключення модуля
const app = express();
const path = require("path");

app.use(express.static(__dirname));
app.set("view engine", "ejs");

// Тимчасові дані про учасників (пізніше можна замінити на JSON)
const members = {
  daria: {
    memberName: "Daria",
    textDescription: "UI/UX Designer. Now I work as a math tutor and prepare pupils for exams. I also like to spend my free time actively, something like kayaking or ice-skating.",
    image: "/images/daria.webp",
    githubLink: "https://github.com/cherrryblazerrr",
    profileLink: "/about-us/daria",
    linkedinLink: "https://www.linkedin.com/in/darianaush",
  },
  elina: {
    memberName: "Elina",
    textDescription: "Backend Developer",
    image: "/images/elina.webp",
    githubLink: "",
    profileLink: "/about-us/elina",
  },
  anhelina: {
    memberName: "Anhelina",
    textDescription: "Frontend Developer",
    image: "/images/anhelina.webp",
    githubLink: "https://github.com/AnhelinaLytovchenko",
    profileLink: "/about-us/anhelina",
  },
};

app.get("/", (req, res) => {
  res.render("index", { members });
});

app.get("/about-us/:member", (req, res) => {
  const memberKey = req.params.member.toLowerCase();
  const memberData = members[memberKey];

  if (memberData) {
    res.render("about-us", memberData);
  } else {
    res.status(404).send("Member not found");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
