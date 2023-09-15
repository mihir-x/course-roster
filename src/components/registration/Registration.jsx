import PropTypes from 'prop-types'
import Register from '../register/Register';

const Registration = ({registered , totalCredit, totalPrice, remainingCredit}) => {
    
    return (
        <div className="mt-4">
            <div className="p-4 bg-white rounded-xl space-y-4">
                <h1 className="text-lg text-[#2F80ED] font-bold bg-white">Credit Hour Remaining:  {remainingCredit} hr</h1>
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
                <h3 className=" text-lg text-[#1c1b1bcc] font-medium bg-white">Total Credit Hour :{totalCredit}</h3>
                <hr />
                <h3 className=" text-lg text-[#1c1b1bcc] font-medium bg-white">Total Price : {totalPrice} USD</h3>
            </div>
        </div>
    );
};

Registration.propTypes = {
    registered: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    remainingCredit: PropTypes.number.isRequired
}
export default Registration;