const newman = require('newman');
 
newman.run({
//    collection: require('./collection/dMoney.json'),
    collection:'https://api.postman.com/collections/4637629-e51947a0-058b-411e-b2b8-a6dbb95f8c97?access_key=PMAT-01H200336GT225B8B5RGXWM9Q8',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
