const {Schema,model}=require('mongoose');


const TaskSchema=new Schema({
    title:{type:String, require:true},
    description:{type:String,require:true}
});

module.exports=model('task',TaskSchema);