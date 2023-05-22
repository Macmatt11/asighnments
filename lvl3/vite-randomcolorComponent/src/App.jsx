import React from 'react'
import './App.css'



function App() {
  const [randomColor, setRandomColor] = React.useState('');

  React.useEffect(() => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
    .then(response => {setRandomColor(response.data.new_color)
    });
  }, []);
console.log(randomColor)
  return (
    <div>
      <div className= 'colorDiv' style={{ backgroundColor: "#" + randomColor }}>
        test
      </div>
    </div>
    
  );
}

export default App


