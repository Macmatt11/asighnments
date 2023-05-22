import './App.css'
import Header from './Header'
import Footer from './Footer'
import BlogList from './BlogList'


function App() {

  return (
    <div>
      <Header />
      <section>
          <BlogList/>
          <div><a className='oldButton'> Older Posts →</a></div>
      </section>
      
      <Footer/>
      
    </div>
  )
}

export default App