
import Category from './Components/Category.jsx'
import CourseCard from './Components/CourseCard.jsx'
import Header from './Components/Header.jsx'
import Banner from './Components/Layout/Banner.jsx'
import SuccesStory from './Components/UI/SuccesStory.jsx'
const App = () => {
  return (
    <main>
      <Header/>
      <Banner/>
      <div className='relative'>
      <Category/>
      </div>
    <CourseCard/>
    <SuccesStory/>
    

    </main>
  )
}

export default App