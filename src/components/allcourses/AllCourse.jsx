import { useEffect, useState } from "react";
import Course from "../course/Course";
import PropTypes from 'prop-types'

const AllCourse = ({handleSelect}) => {
    //Load data form json
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courseData.json').then(res => res.json()).then(data => setCourses(data))
    },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4 md:mb-10">
            {
                courses.map(course => <Course key={course.id} course={course} handleSelect={handleSelect}></Course>)
            }
        </div>
    );
};

AllCourse.propTypes = {
    handleSelect: PropTypes.func.isRequired
}
export default AllCourse;