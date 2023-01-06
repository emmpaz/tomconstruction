import './css/App.css';
import BackgroundVideo from './backgroundVideo';
import Header from './Header';
import BigText from './BigText';
import ResidentialCommerical from './ResidentialCommerical';

function App() {
  return (
    <div className="App">
      <div className="HeaderGaurd">
        <BackgroundVideo/>
        <Header/>
        <BigText/>
      </div>
      <ResidentialCommerical/>
    </div>
  );
}

export default App;
