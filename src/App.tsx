
import './App.css';
import {ImageSplitter} from './ImageSpliter'

function App() {
  return (
    <div className="App">
      <ImageSplitter
 source={<img src="https://cdn.pixabay.com/photo/2016/10/14/22/52/tiger-1741443_1280.jpg" />}
 content={<img src="https://cdn.pixabay.com/photo/2016/10/14/22/52/tiger-1741443_1280.jpg" style={{filter:'grayscale(100%)'}}/>}
  startPosition={30}
 />
    
    </div>
  );
}

export default App;
