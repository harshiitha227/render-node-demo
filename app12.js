const express=require('express');
const app=express();
app.get('/', (req, res)=>{
    res.send("Hello From Render");
})
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`SERVER RUNNING at port ${PORT}`);
})