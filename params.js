const express= require("express");
const app= express();
const PORT= 5001;
app.listen(PORT,()=>{
  console.log(`Server is running on the port ${PORT}`);
  
})

app.get("/:username/:id",(req,res)=>{
  console.log(req.params);
  const username= req.params.username;
  res.send(`Hello ${username}, Welcome to our website`)
  
})