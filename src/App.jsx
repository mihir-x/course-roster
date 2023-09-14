
import './App.css'
import AllCourse from './components/allcourses/AllCourse'

function App() {

  return (
    <>
      <div className=' flex flex-col items-center max-w-screen-lg mx-auto p-2'>
        <h1 className=' text-4xl font-semibold my-4 md:my-10 text-center'>Course Registration</h1>
        <div>
            <AllCourse></AllCourse>
        </div>
      </div>
    </>
  )
}

export default App
