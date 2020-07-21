const mongoose=require('mongoose');

const url=process.env.MONGO_URI;
    
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{  
    if(err){  
        console.log('Error in database connection');  
    }else{  
        console.log('Database Connected!');  
    }  
});

mongoose.set("useCreateIndex", true);

module.exports=mongoose;