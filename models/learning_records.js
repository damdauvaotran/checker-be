module.exports = (sequelize, type) => {
    return sequelize.define("learning_records",
        {
            record_id: {
                type: type.BIGINT,
                primaryKey: true,
                allowNull: false,
            },
            user_id: {
                type: type.BIGINT,
                allowNull: false,
            },

            lesson_id: {
                type: type.BIGINT,
                allowNull: false,
            },
            point: {
                type: type.INTEGER,
                allowNull: false,
            },

        },
        {
            underscored: true,
            sequelize,
        },
    );
};
