// var cfg = {
//   host: "http://couch.laughguru.com",
//   port: "5984",
//   user: 'admin@laughguru.com',
//   pass: 'AdminLG123',
//   ssl: false
// };

// cfg.credentials = function credentials() {
//   if (cfg.user && cfg.pass) {
//     return cfg.user + ":" + cfg.pass + "@";
//   }
//   else { return ""; }
// };

// cfg.url = function () {
//   return "http" + (cfg.ssl ? "s" : "") + "://" + cfg.credentials() + cfg.host +
//     ":" + cfg.port;
// };

var read = function(err, msg) {
    console.log(err, msg);
    if(!err) {
        var alice = nano.use('alice');
        // and insert a document in it
        alice.get('rabbit', function(err, body) {
          if (err) {
            console.log('[alice.insert] ', err.message);
            return;
          }
          console.log('you have inserted the rabbit.')
          console.log(body);
        });
    }
}

// var nano = require('nano')(cfg.url()), read;



var nano = require('nano')("http://localhost:5984")
, username = 'admin'
, userpass = 'ADMIN'
, callback = read // this would normally be some callback 
, cookies  = {} // store cookies, normally redis or something 
;

nano.auth(username, userpass, function (err, body, headers) {
  if (err) {
    return callback(err);
  }
 
  if (headers && headers['set-cookie']) {
    cookies = headers['set-cookie'];
  }
 
  callback(null, "it worked");
});

// clean up the database we created previously
// nano.db.destroy('alice', function() {
  // create a new database
  // nano.db.create('alice', function() {
    // specify the database we are going to use

  // });
// });