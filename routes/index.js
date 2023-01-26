var express = require("express");
var router = express.Router();

let team = {
  immama: {
    name: "Immama Ayoub",
    role: "Front-End Web Developer",
    descrip:
      "Hi. I am Immama. As you might have seen from the above heading, I am the Front-End Web Developer of this campaign. As a Front-End developer,it is my duty to understand clients problems, designing a human-centered design for them, prototype it and help in coding it. With experise in HTML, CSS and JavaScript, I strive to give our clients the results and solutions they always have wished for. Graduating at Fanshawe College with advanced diploma in Interactive Media Design, I always wished to work for a company that values peoples dreamms, emotions and help them build it(in this case websites, marketing solutions).",
    pic: "immama.jpg",
  },

  yuki: {
    name: "Yuki-ki Ngai",
    role: "Project Manager",
    descrip:
      "I am Yuki, a passionate multimedia designer to apply psychology knowledge into design and marketing. From designing, it also brings me more and extend my interest in motion design and coding as well. I want our production to be strategically deliver a message constantly that audiences are received by whatever our solutions are, such as by visuals, videos or contents. Eventually, call to action for the problem. This project is a good opportunity to show our skillsets and apply my knowledge to the content creation and project management.",
    pic: "yuki.jpg",
  },

  eugene: {
    name: "Hyeongtae Kim (Eugene)",
    role: "Back-End Web Developer",
    descrip:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    pic: "mock.png",
  },

  cathy: {
    name: "Cathy Lam (Chau Lin)",
    role: "Graphic Designer",
    descrip:
      "Hi, I am Cathy and a Graphic Designer on the team. I am responsible for creating all promotional graphic materials, such as logos, posters, flyers, social media ADs (Facebook, Instagram, LinkedIn), and Website UI/UX design. In addition, I have more than 7 years of Graphic Design experience working in the marketing department, so I can work smoothly with the team as I have the skill to communicate with other coworkers or clients. Moreover, I am a graduate of the Interactive Media Design Program at Fanshawe College. Thus, I also have some basic skills in Motion Design, Video Design/Editing, HTML, CSS, and Javascript. On the other hand, I learn and improve a lot of skills on this project, such as teamwork, knowledge of social problems, management of working time, and improving design skills.",
    pic: "cathy.jpg",
  },

  sahar: {
    name: "Sahar Motlagh",
    role: "Motion/3D Artist",
    descrip:
      "I’m a Multimedia Designer who can translate ideas into innovative and crafted designs. I’ve worked as a Graphic and Motion Designer for 4 years. Also my study background in visual design helps me to be more creative in design. I've Experienced as a UX and UI designer who created several brands from the ground up. I implement my knowledge in Adobe Creative Suite; Photoshop, Illustrator, InDesign, Aftereffect XD and Cinema 4D to design.",
    pic: "sahar.png",
  },
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Meet Our Team" });
});

//Get team member page
router.get("/team/:member", function (req, res) {
  console.log(req.params.member);

  res.render("team", { person: team[req.params.member] });
});

module.exports = router;
