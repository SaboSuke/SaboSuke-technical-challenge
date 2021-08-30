module.exports = (sequelize, Sequelize) => {
    const Tournoi = sequelize.define("tournoi", {
        label: {
            type: Sequelize.STRING
        },
    });

    return Tournoi;
};