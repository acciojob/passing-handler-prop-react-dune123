import { useState } from 'react';
import './App.css';
import ColorChange from './components/ColorChange';

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)',
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)',
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)',
  },
];

let arr = [1, 2, 3];

function App() {
  const [chosenColor, setChosenColor] = useState(null);
  const [boxColor, setBoxColor] = useState(Array(arr.length).fill(null));

  const changeBoxColor = (index, color) => {
    const newColors = [...boxColor];
    newColors[index] = color;
    setBoxColor(newColors);
  };

  return (
    <div className='container'>
      <div className='buttonContainer'>
        {colourConfig.map((item) => (
          <button
            key={item.key}
            style={{ backgroundColor: `${item.background}` }}
            onClick={() => setChosenColor(item.background)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className='colorContainer'>
        {arr.map((item, index) => (
          <ColorChange
            chosenColor={boxColor[index]}
            key={item}
            onClick={() => changeBoxColor(index, chosenColor)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
