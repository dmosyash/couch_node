const NodeCouchDb = require('node-couchdb');
 
// node-couchdb instance talking to external service 
const couchLG = new NodeCouchDb({
    host: 'couch.laughguru.com',
    protocol: 'http',
    port: 5984,
    auth: {
        user: 'admin@laughguru.com',
        pass: '*****'
    }
});

const couchLocal = new NodeCouchDb({
    host: 'localhost',
    protocol: 'http',
    port: 5984,
    auth: {
        user: 'admin',
        pass: 'ADMIN'
    }
});

var preferences = {
    "_id": "preferences",
    "slide_interval": 5000,
    "slide_interval_with_audio": 5000,
    "qna_interval": 30000,
    "comprehension_timer": 300000,
    "is_mute_teaching": "false",
    "is_mute_practice": "false",
    "show_tips": true,
    "sound": true,
    "mute_questions": false,
    "mute_explanations": false,
    "auto_forward_next_ques": 0,
    "auto_fullscreen_on_phone": true,
    "auto_fullscreen_otherwise": false,
    "analytics_email_subscription": true,
    "games": ["Football", "Cricket", "Jokes", "Grid"]
}

var dbName = [];
var dbNameLocal = 'alice';


var loop = function (i) {
    if(i<dbName.length) {
        couchLG.get(dbName[i], 'preferences').then(function (result) {
            var rev = result.data._rev;
            preferences._rev = rev;
            couchLG.update(dbName[i], preferences).then(function (result) {
                console.log(i, dbName[i], result);
                i++;
                if(i === dbName.length) {
                    console.log('full finish');
                }
                loop(i);
            })
        }, function (msg) {
            if(msg.code === 'EDOCMISSING') {
                couchLG.insert(dbName[i], preferences).then(function (result) {
                    console.log('INSERT: ', i, dbName[i], result);
                    i++;
                    if(i === dbName.length) {
                        console.log('full finish');
                    }
                    loop(i);
                }, function (err) {
                    console.log('ERR: ', i, dbName[i], msg);
                    return;
                })
            } else {
                console.log(msg);
            }
        });
    }
    // couchLG.insert(dbName[i], filter_readOnly).then(function (result) {
    //     console.log(result.data);
    // }, function (msg) {
    //     console.log('err: ', msg);
    // })
}

loop(process.argv[2]);

// couchLocal.get(dbNameLocal, '_security').then(function (result) {
//     console.log(result.data);
//     var doc = result.data;
//     doc.admins.roles.push('admin');
//     // doc._id = '_security';
//     couchLocal.update(dbNameLocal.resource, doc).then(function (result) {
//         console.log(result);
//     }, function (msg) {
//         console.log('update err: ', msg);
//     });
// }, function (msg) {
//     console.log('err: ', msg);
// })

