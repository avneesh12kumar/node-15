const express = require('express');
const app = express();
const user = require('./Routes/User');
app.use(user);


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server is running on port 3000");
    }
})