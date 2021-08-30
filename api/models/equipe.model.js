module.exports = (sequelize, Sequelize) => {
    const Equipe = sequelize.define("equipe", {
        label: {
            type: Sequelize.STRING
        },
        entraineur: {
            type: Sequelize.BOOLEAN
        }
    });

    return Equipe;
};