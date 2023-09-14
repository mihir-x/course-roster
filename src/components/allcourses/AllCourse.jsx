import { useEffect, useState } from "react";
import Course from "../course/Course";

const AllCourse = () => {
    //Load data form json
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courseData.json').then(res => res.json()).then(data => setCourses(data))
    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default AllCourse;