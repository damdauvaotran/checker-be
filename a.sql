CREATE TABLE students (
    studentId INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(255,
    MSSV INT,
    PRIMARY KEY (studentId)
);

CREATE TABLE subjects (
    subjectId INT NOT NULL AUTO_INCREMENT,
    subjectName VARCHAR(255,
    credit INT,
    PRIMARY KEY (subjectId)
);

CREATE TABLE scores (
    scoresId INT NOT NULL AUTO_INCREMENT,
    studentId INT,
    subjectId INT,
    weight INT,
    score INT,
    PRIMARY KEY (scoresId)
);



ALTER TABLE scores 
ADD 
	CONSTRAINT fk_student_id FOREIGN KEY(studentId) REFERENCES students(studentId),
    CONSTRAINT fk_subject_id FOREIGN KEY(subjectId) REFERENCES subjects(subjectId);