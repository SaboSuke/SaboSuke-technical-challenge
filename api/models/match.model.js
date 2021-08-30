module.exports = (sequelize, Sequelize) => {
    const Match = sequelize.define("match", {
        label: {
            type: Sequelize.STRING,
        },
        e1: {
            type: Sequelize.BOOLEAN
        },
        e2: {
            type: Sequelize.BOOLEAN
        }
    });

    return Match;
};