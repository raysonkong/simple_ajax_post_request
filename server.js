const express = require('express');
const app = express();
const port = 3000;

const helmet = require('helmet');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false})); // For creating req.body, otherwise body does not exist
app.use(express.json());
app.use(helmet());


app.post('/ajax', (req, res) => {
    console.log(req.body);
  //  console.log(req.headers);
    res.send("Test Success!")
})

app.listen(port, () => console.log(`App is listening on ${port}`))
