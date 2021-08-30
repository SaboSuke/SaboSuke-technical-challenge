const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const MySQL_DB = require('./database');
const dotenv = require('dotenv')
const { success, error } = require("consola");

// App constants
dotenv.config({ path: './.env' })
const { PORT } = require("./config/index");

// Initialize the application
const app = exp();

// Sequelize
// const db = require("./models");
// db.sequelize.sync();

// Middlewares
app.use(cors());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// User Router Middlewares
app.use("/api/tournoi", require("./routes/api/tournoi"));
app.use("/api/joueur", require("./routes/api/joueur"));
app.use("/api/match", require("./routes/api/match"));
app.use("/api/equipe", require("./routes/api/equipe"));


// Handling Production
if (process.env.NODE_ENV === 'production') {
    // Static Folder
    app.use(express.static(__dirname + '/dist/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.send(__dirname + '/public/index.html'));
}

// launching server
const launchApp = async () => {
    try {
        // checking database connection
        MySQL_DB.connect((err) => {
            if (err) error({
                message: `${err}`,
                badge: true,
            });
            else success({
                message: `Successfully connected to database!`,
                badge: true,
            })
        })

        // Start Listening for the server on PORT
        app.listen(PORT, () =>
            success({
                message: `Server started on PORT ${PORT
                    }\nhttp://localhost:5000/`,
                badge: true,
            })
        );
    } catch (err) {
        error({
            message: `Unable to connect with Database \n${err}`,
            badge: true,
        });
    }
};

launchApp();