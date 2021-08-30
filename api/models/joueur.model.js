module.exports = (sequelize, Sequelize) => {
    const Joueur = sequelize.define("joueur", {
        nom: {
            type: Sequelize.STRING
        }
    });

    return Joueur;
};