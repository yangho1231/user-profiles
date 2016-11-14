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
    for(var i = 0; user.length; i++) {
      if(req.body.name === user[i].name && req.body.password === user[i].password) {
        req.session.currentUser === user[i];
      }
    
      else {
        res.send({userFound: false});
      }
    }
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
