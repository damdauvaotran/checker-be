const Sequelize = require('sequelize');
const UserModel = require('./users');
const CoursesModel = require('./courses');
const LessonModel = require('./lessons');
const QuestionModel = require('./questions');
const VideoModel = require('./videos');
const DocumentModel = require('./documents');
const RecordModel = require('./learning_records');
const Users_Courses = require('./users_courses');

const DATABASE_NAME = process.env.DATABASE_NAME || 'math_app';
const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'root';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '12345678';


const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Users = UserModel(sequelize, Sequelize);
const Courses = CoursesModel(sequelize, Sequelize);
const Lessons = LessonModel(sequelize, Sequelize);
const Videos = VideoModel(sequelize, Sequelize);
const Questions = QuestionModel(sequelize, Sequelize);
const Records = RecordModel(sequelize, Sequelize);
const User_Course = Users_Courses(sequelize, Sequelize);
const Documents = DocumentModel(sequelize, Sequelize);

Users.hasMany(Records);
Lessons.hasMany(Records);
Users.hasMany(User_Course);
Courses.hasMany(User_Course);
Courses.hasMany(Lessons);
Lessons.hasMany(Videos);
Lessons.hasMany(Questions);
Lessons.hasMany(Documents)


sequelize.sync({force: true})
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = {
    Users, Lessons, Courses, User_Course, Questions, Documents, Videos, Records
};