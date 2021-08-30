const dbConfig = require("../config/index.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = { };

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.equipe = require("./equipe.model.js")(sequelize, Sequelize);
db.joueur = require("./joueur.model.js")(sequelize, Sequelize);
db.match = require("./match.model.js")(sequelize, Sequelize);
db.tournoi = require("./tournoi.model.js")(sequelize, Sequelize);

module.exports = db;