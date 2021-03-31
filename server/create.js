const app = require('./server.js')


app.models.Profile.create(
    {
        username:"asadAli",
        firstName: "Asad",
        lastName: "Ali",
        age: 22,
        birthDate: "1998-03-19T15:19:13.057Z",
        createdAt: new Date().toUTCString(),
    },
    (err, result) => {
        err ? console.warn("Error:", err) : console.log("Result:", result)
    }
)

// app.models.Profile.upsert(
//     {   
//         id:"6064ba16a191ff280fd5eecc",
//         age: 21,
//     },
//     (err, result) => {
//         err ? console.warn("Error:", err) : console.log("Result:", result)
//     }
// )


// app.models.Profile.findOrCreate(
//     {
//         __id: "6064ba16a191ff280fd5eecc",
//         //     {
//         firstName: "Bilal",
//         lastName: "Raza",
//         age: 22,
//         birthDate: "1998-03-19T15:19:13.057Z",
//         createdAt: new Date(),
//     },
//     (err, result) => {
//         err ? console.warn("Error:", err) : console.log("Result:", result)
//     }
// )
