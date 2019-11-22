module.exports = (sequelize, type) => {
    return sequelize.define("lessons",
        {
            lesson_id: {
                type: type.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: type.STRING,
                allowNull: false,
            },
            courses_id: {
                type: type.BIGINT,
                allowNull: false,
            }
        }, {
            underscored: true,
            sequelize,
        });
};
