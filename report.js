const newman = require('newman');
newman.run({
        
        collection: 'https://api.postman.com/collections/22180294-1fbaa132-975b-4949-b903-5b83afab0211?access_key=PMAT-01H8X6NQ8NWDQ6AFP5XXC6V5XA',
        //environment: require('./collection/environment.json'),
        reporters: 'htmlextra',
        iterationCount: 1,
reporter:
{
    htmextra: {
        export: './Reports/report.html',
    }
}
}, function(err) {
    if(err) {throw err ;}
    console.log('collection rum complete!');
    
});