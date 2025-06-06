const express= require("express");
const app= express();
const PORT=5050;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
  
})

app.get("/:username/:id",(req,res)=>{
  console.log(req.params);
  let username= req.params.username;
  res.send(`Hello ${username}`);
})

app.get("/search",(req,res)=>{
  let {q}= req.query;
  if(!q){
    res.send("<h1>Nothing Searched</h1>")
  }
  res.send(`<h1>Results for Query: ${q}</h1>`)
})