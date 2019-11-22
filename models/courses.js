module.exports = (sequelize, type) => {
    return sequelize.define("courses", {
        course_id: {
            type: type.BIGINT,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        grade: {
            type: type.STRING,
            allowNull: false,
        }
    }, {
        underscored: true,
        sequelize,
    });
};
