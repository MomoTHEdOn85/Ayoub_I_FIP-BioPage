var express = require('express');
var router = express.Router();

let team = {
  immama: {
    name: 'Immama Ayoub',
    role: 'Front-End Web Developer',
    descrip: 'Hi. I am Immama. As you might have seen from the above heading, I am the Front-End Web Developer of this campaign. As a Front-End developer,it is my duty to understand clients problems, designing a human-centered design for them, prototype it and help in coding it. With experise in HTML, CSS and JavaScript, I strive to give our clients the results and solutions they always have wished for. Graduating at Fanshawe College with advanced diploma in Interactive Media Design, I always wished to work for a company that values peoples dreamms, emotions and help them build it(in this case websites, marketing solutions).',
    pic: 'immama.jpg'
  },

  yuki: {
    name: 'Yuki-ki Ngai',
    role: 'Project Manager',
    descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pic: 'mock.png'
  },

  eugene: {
    name: 'Hyeongtae Kim (Eugene)',
    role: 'Back-End Web Developer',
    descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pic: 'mock.png'
  },

  cathy: {
    name: 'Chau-lin Lam',
    role: 'Graphic Designer',
    descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pic: 'mock.png'
  },

  sahar: {
    name: 'Sahar Motlagh',
    role: 'Motion/3D Artist',
    descrip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    pic: 'mock.png'
  },
  
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Meet Our Team' });
});

//Get team member page
router.get('/team/:member', function(req, res) {
  console.log(req.params.member);
  
  res.render('team', { person: team[req.params.member]});
})

module.exports = router;
