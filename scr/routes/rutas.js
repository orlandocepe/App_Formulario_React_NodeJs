const {Router}=require('express');
const routes=Router();
const Task=require('../models/task')

routes.get('/',async(req,res)=>{
   const tasks=await Task.find();
    res.json(tasks)
});

routes.get('/:id',async(req,res)=>{
    const tasks=await Task.findById(req.params.id);
     res.json(tasks)
 });

routes.post('/',async(req,res)=>{
    const {title,description}=req.body;
    const task=new Task({title,description})
    await task.save();
    res.json({Satatus:"ok"})
 });

routes.put('/:id',async(req,res)=>{
    const {title,description}=req.body;
    const newTask={title,description};
    console.log(newTask);
    await Task.findByIdAndUpdate(req.params.id,newTask);
    res.json({
        estado:"PUt ok"
    })
 });
 
routes.delete('/:id',async(req,res)=>{

    await Task.findByIdAndRemove(req.params.id);
    res.json({
        estado:"Borrado Ok"
    })
 });

module.exports=routes;