//route for the /brew request
function brew(app) {
    app.get("/brew", (req, res) => {
        res
            .status(418)
            .send("I'm a teapot, so I cannot brew coffee!");
    });
}

module.exports = brew