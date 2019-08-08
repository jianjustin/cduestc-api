var student = require('../api/student.js');

module.exports = function(app) {

  app.route('/login')
    .get(student.login)
    .post(student.login);

}