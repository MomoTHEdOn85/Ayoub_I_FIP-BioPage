var express = require('express');
var router = express.Router();

let team = {
  immama: {
    name: 'Immama Ayoub',
    role: 'Front-End Web Developer',
    descrip: 'Hi, My name is immama AND iAM THE Front-End Web Developer for the campaign and its website. etc etc etc etc etc etc etc etc. Here is the link to my portfolio, feel free to see it.',
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
