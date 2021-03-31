const app = require('./server')

app.models.Profile.findOrCreate({ username: "asadAli" }, (error, result) => {
    if (error) {
        console.warn(error)
    }
    // else if (result) {
    //     result.updateAttributes({ age: 21 }, (error, result) => {
    //         error ? console.warn(error) : console.log("Updated Profile",result)
    //     })
    // }

    else if (result) {
        result.age = 20;
        result.save((error, result) => error ? console.warn(error) : console.log("Updated Profiles",result))
    }
}


)

