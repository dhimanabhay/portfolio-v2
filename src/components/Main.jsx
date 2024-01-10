import About from './section/About'
import Contact from './section/Contact'
import Project from './section/Project'

export default function Main() {
  return (
    <div id="main" className='flex flex-col items-center justify-center pt-44 w-full'>
        <About /> 
        <Project />
        <Contact />
    </div>
  )
}
