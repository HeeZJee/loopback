'use strict';

module.exports = function(Profile) {

    // Profile.create({
    //     firstName: "Ammad",
    //     lastName: "Ali",
    //     createdAt: new Date(),
    //     age: 24,
    // }, (err, result )=>{
    //     if(err){
    //         console.error(err)
    //     }
    //     else{
    //         console.log("Result", result)
    //     }
    // })


    Profile.afterRemote('create',(ctx,user,next)=>{
        console.log(user);
        next()
    }) 
    
};

