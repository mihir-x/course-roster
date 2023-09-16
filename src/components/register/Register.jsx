import PropTypes from 'prop-types'

const Register = ({register}) => {
    const {course_title} = register
    return (
        <li className='bg-white text-[#1c1b1b99]'>{course_title}</li>
    );
};

Register.propTypes = {
    register: PropTypes.object.isRequired
}
export default Register;