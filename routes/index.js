//./routes/index.js
//loads the routes for the caller

//imports for file indexing
const fs = require('fs');

function dynamicallyLoadRoutes(app) {
    //read all filenames
    fs.readdirSync(__dirname).forEach(function (file) {
        //ignore index.js or all non .js files
        if(
            file === "index.js" ||
            file.substring(file.lastIndexOf(".") + 1) !== "js"
        )
            return;
        
        //name of the file
        let name = file.substring(0, file.indexOf("."));
        //add routes to the export
        require("./" + name)(app);
    });
}

module.exports = dynamicallyLoadRoutes;