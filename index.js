const express = require('express');
const app  = express();

app.set('view engine', 'ejs');

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

app.get('/', (req, res)=> {
    let A = new Date("August 27 2024 11:16:00");
    const num = A.getDay();
    
    let data = "A Weekday"
    let adv = "WorkHard, DreamBig"

    if(num === 0 || num === 6){
         data = "The WeekEnd"
         adv = "Have some funnn"
    }

    res.render("index.ejs", {
         datatype: data,
         advise: adv,

    });
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});




