import PropTypes from 'prop-types'
import Register from '../register/Register';

const Registration = ({registered}) => {
    
    return (
        <div className="mt-4">
            <div className="p-4 bg-white rounded-xl space-y-4">
                <h1 className="text-xl text-[#2F80ED] font-bold bg-white">Credit Hour Remaining: </h1>
                <hr />
                <div className='bg-white'>
                    <h1 className=" bg-white text-xl font-bold text-[#1C1B1B]">Course Name</h1>
                    <ol className=' list-decimal ml-5 bg-white'>
                        {
                            registered.map((register, idx) => <Register key={idx} register={register}></Register>)
                        }
                    </ol>
                </div>
                <hr />
                <h3 className=" text-lg text-[#1c1b1bcc] font-medium bg-white">Total Credit Hour :</h3>
                <hr />
                <h3 className=" text-lg text-[#1c1b1bcc] font-medium bg-white">Total Price :</h3>
            </div>
        </div>
    );
};

Registration.propTypes = {
    registered: PropTypes.array.isRequired
}
export default Registration;