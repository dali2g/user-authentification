const express = require("express");
const bcrypt = require("bcrypt");
 
const app = express();

app.use(express.json());
const users = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users",  async  (req, res) => {
    try{

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash( "123456789",salt) // we can initalize the number of salt instead of declaring him
        
        const user = { name: "SuccessName", password: hashedPassword };
        users.push(user);
        res.status(201).send();
        hash(salt + 'password')
        }catch {
            res.status(500).send()
        }
})

app.post("/users/login",async(req,res)=>{
        const user = users.find(user => user.name = "SuccessName") //replace SuccessName with incorrect name to test the absence of a user
        if(user == null)
        {
            return res.status(400).send('Cannot find user')
        }
        try{    
              if( await bcrypt.compare("123456789",user.password)){
                return res.send('Success')
              }
              else
              return res.send('Not allowed')
        }catch {
            res.status(500).send()
        }
})

app.listen(3000);
