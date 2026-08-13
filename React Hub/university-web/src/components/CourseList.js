import React from 'react';
import { Link } from 'react-router-dom';

function CourseList() {

    const courses = [
        { id: 101, title: "Python Basics", credits: 3 },
        { id: 102, title: "Django Core", credits: 4 },
        { id: 103, title: "React Frontend", credits: 4 }
    ];

    return (
        <div className="course-list-card">

            <h2 className="course-list-title">
                📚 Available Courses
            </h2>

            <ul className="course-list">

                {courses.map(course => (

                    <li key={course.id} className="course-item">
                        <Link to={`/courses/${course.id}`}>
                            <div className="course-info">

                            <h3>{course.title}</h3>

                            <p>Course ID: {course.id}</p>

                        </div>

                        <span className="credits">
                            {course.credits} Credits
                        </span>
    
                        </Link>
                    </li>

                ))}

            </ul>

        </div>
    );
}

export default CourseList;