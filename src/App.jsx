
import './App.css'
import AllCourse from './components/allcourses/AllCourse'
import Registration from './components/registration/Registration'

function App() {

  return (
    <>
      <div className=' flex flex-col items-center max-w-screen-xl mx-auto p-2'>
        <h1 className=' text-4xl font-semibold my-4 md:my-10 text-center'>Course Registration</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div className=' md:col-span-3'>
            <AllCourse></AllCourse>
            </div>
            <div>
            <Registration></Registration>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
