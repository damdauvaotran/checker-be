module.exports = (sequelize, type) => {
    return sequelize.define("questions",
        {
            question_id: {
                type: type.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            question: {
                type: type.STRING,
                allowNull: false,
            },
            answer: {
                type: type.STRING,
                allowNull: false,
            },
            lesson_id: {
                type: type.BIGINT,
                allowNull: false
            }
        }, {
            underscored: true,
            sequelize,
        });
};
