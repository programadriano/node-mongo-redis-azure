const startUp = require('./src/startUp');

const port = process.env.PORT || '3000';

startUp.listen(port, function () {
    console.log(`app listening on port ${port}`)
})