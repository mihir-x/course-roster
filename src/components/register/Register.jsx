import PropTypes from 'prop-types'

const Register = ({register}) => {
    const {course_title} = register
    return (
        <li className='bg-white'>{course_title}</li>
    );
};

Register.propTypes = {
    register: PropTypes.object.isRequired
}
export default Register;