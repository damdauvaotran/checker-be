const Sequelize = require('sequelize');
const UserModel = require('./users');
const SubjectModel = require('./subjects');
const ExamRegistrationModel = require('./exam_registration');
const ExamShiftModel = require('./exam_shifts');
const LearningStateModel = require('./learning_states');
const RoomModel = require('./rooms');

const DATABASE_NAME = process.env.DATABASE_NAME || 'math_app';
const DATABASE_USERNAME = process.env.DATABASE_USERNAME || 'root';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '12345678';


const db = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const Users = UserModel(db, Sequelize);
const Subjects = SubjectModel(db, Sequelize);
const ExamRegistrations = ExamRegistrationModel(db, Sequelize);
const ExamShifts = ExamShiftModel(db, Sequelize);
const LearningStates = LearningStateModel(db, Sequelize);
const Rooms = RoomModel(db, Sequelize);

Users.hasMany(LearningStates, { foreignKey: 'user_id' });
Subjects.hasMany(LearningStates, { foreignKey: 'subject_id' });
Subjects.hasMany(ExamShifts, { foreignKey: 'subject_id' });
Rooms.hasMany(ExamShifts, { foreignKey: 'room_id' });
ExamShifts.hasMany(ExamRegistrations, { foreignKey: 'exam_shift_id' });
Users.hasMany(ExamRegistrations, { foreignKey: 'user_id' });


db.sync({force: true}).then(() => {
  console.log('Database & tables created!');
});

module.exports = {
  Users, Subjects, ExamRegistrations, ExamShifts, LearningStates, Rooms,
};
