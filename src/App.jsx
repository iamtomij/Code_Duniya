
import Category from './Components/Category.jsx'
import CourseCard from './Components/CourseCard.jsx'
import Header from './Components/Header.jsx'
import Banner from './Components/Layout/Banner.jsx'
const App = () => {
  return (
    <main>
      <Header/>
      <Banner/>
      <div className='relative'>
      <Category/>
      </div>
    <CourseCard/>
    

    </main>
  )
}

export default App