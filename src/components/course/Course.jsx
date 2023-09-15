import PropTypes from 'prop-types'

const Course = ({ course, handleSelect }) => {
    const { image, course_title, course_details, credit, price } = course
    return (
        <div className="card bg-base-100 shadow-xl rounded-xl">
            <figure className="px-5 pt-5 h-1/3">
                <img src={image} alt="Course" className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-left text-[#1C1B1B]">{course_title}</h2>
                <p className='text-[#1c1b1b99] text-left'>{course_details}</p>
                <p className=' space-x-2 text-[#1c1b1b99]'><span><i className="fa-solid fa-dollar-sign"></i> Price: {price} </span> <span><i className="fa-solid fa-book-open"></i> Credit: {credit}hr</span></p>
                <div className="card-actions w-full">
                    <button onClick={() => handleSelect(course)} className="btn w-full bg-[#2F80ED] text-white">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
}
export default Course;