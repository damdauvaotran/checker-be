module.exports = (sequelize, type) => {
    return sequelize.define('users_courses',
        {
            document_id:{
                type:type.BIGINT,
                primaryKey:true,
                allowNull:false
            },
            name:{
                type: type.STRING,
                allowNull:false,
            },
            link:{
                type:type.STRING,
            }
        }, {

            createdAt: false,
            updatedAt: false,
            underscored: true,
            sequelize,
        });
};
