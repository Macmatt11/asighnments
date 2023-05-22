import './cssStyling/App.css'
import data from "./data"
import Cards from "./components/Cards"



function App() {
console.log(data)
const cards = data.map(item=>{
  return(
    <Cards
      key = {item.id}
      item = {item}
    />
  )
})
  return (
    <div className="App">
        <div className='cardList'>
          {cards}
        </div>
      
    </div>
  )
}

export default App
