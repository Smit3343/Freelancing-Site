const mongoose = require('mongoose');
const schema=mongoose.Schema;

let User=new schema({
    Email:{type:String,required:true,index: true,unique: true},
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},
    Password:{type:String,required:true},
    Role:{type:String,required:true},
    Description:{type:String},
    CollegeCountry:{type:String},
    CollegeName:{type:String},
    Degree:{type:String},
    Branch:{type:String},
    YearOfGraduation:{type:Number},
    Certificate:{type:String},
    CertificateFrom:{type:String},
    YearOfCertificate:{type:Number},
    profileImg:{type:String},
    Category:{type:String,default:"none"},
    
},{collation:"Users",timestamps: true});


module.exports=mongoose.model('user',User);
