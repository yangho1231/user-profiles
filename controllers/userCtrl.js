var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];
module.exports = {
  login:function(req,res,next) {
    var correctUser = false;
    for(var i = 0; i < users.length; i++) {

      if(users[i].name === req.body.name && users[i].password === req.body.password){
        req.session.currentUser = users[i];
        correctUser = true;
      }


    }
    res.json({userFound: correctUser});
  }
};
// module.exports = {
//   login: function(req, res, next) {
//     var name = req.body.name;
//     var password = req.body.password;
//     for(var i = 0; i < users.length; i++) {
//       if(users[i].name === name && users[i].password === password) {
//         req.session.currentUser = users[i];
//         res.send({userFound: true});
//       }
//       else {
//         res.send({userFound: false});
//       }
//     }
//   }
// };
