const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

app.get("/style.css", (req,res)=>{
    res.sendFile(__dirname +    "/style.css");
});

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/bmiCalculatorUI.html");
})

app.post("/output", (req, res)=>{
    const height = parseFloat(req.body.height);
    const weight = parseFloat(req.body.weight);
    if(height <= 0 || weight <= 0)
    res.send("Height or weight cannot be lesser or equal to 0!!!!!!!!!");

    const bmi = weight/(height * height);
    const styles = "'margin : auto; text-align : center; font-size : 50px;'";
    var mainMessage = "<h1 style = " + styles + "> Your BMI  : " + bmi + "</h1>";

    var output = "";
    if(bmi <= 18.5)
        output = "You are underweight!! Eat more.. Be a foodie like me..";
    else if(bmi > 18.5 && bmi <= 24.9)
        output = "You are normal!! And perfectttt like me...";
    else if(bmi >= 25 && bmi <= 29.9)
        output = "You are overweight!! Eat precisely!! Focus on deit..!";
    else if(bmi >= 30)
        output = "You are obese!! Bhai kyaa krr rha hai tuu..";
    output = "<h2 style = " + styles + ">" + output + "</h2>";
    mainMessage += output; 
    res.send(mainMessage);
})
app.listen(3000, () => {console.log("Server started at port 3000!!")});