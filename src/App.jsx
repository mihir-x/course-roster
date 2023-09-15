
import { useState } from 'react'
import './App.css'
import AllCourse from './components/allcourses/AllCourse'
import Registration from './components/registration/Registration'

function App() {
  //handle click on select
  const [registered, setRegistered] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)
  console.log(remainingCredit)
  if(remainingCredit < 0){
    setRemainingCredit(0)
  }
  const handleSelect = (course) => {
    const isExist = registered.find(item => item.id === course.id)
    if(course.credit > remainingCredit){
      return showToast()
    }
    if (isExist) {
      return showToast()
    }
    else {
      const newRegistered = [...registered, course]
      setRegistered(newRegistered)
      setTotalCredit(totalCredit + course.credit)
      setTotalPrice(totalPrice + course.price)
      setRemainingCredit(remainingCredit - course.credit)
    }
  }


  const showToast = () => {
    const toast = document.getElementById('toast')
    toast.classList.remove('hidden')
    setTimeout(() => {
      toast.classList.add('hidden')
    }, 3000);
  }

  return (
    <>
      <div className=' flex flex-col items-center max-w-screen-xl mx-auto p-2'>
        <h1 className=' text-4xl font-semibold my-4 md:my-10 text-center'>Course Registration</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          <div className=' md:col-span-3'>
            <AllCourse handleSelect={handleSelect}></AllCourse>
          </div>
          <div>
            <Registration registered={registered} remainingCredit={remainingCredit} totalCredit={totalCredit} totalPrice={totalPrice}></Registration>
          </div>
        </div>
      </div>

      {/* toast */}
      <div className="toast hidden" id='toast'>
        <div className="alert alert-info bg-sky-500">
          <span className=' bg-sky-500 text-white'>You can not select more</span>
        </div>
      </div>
    </>
  )
}

export default App
