// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { HomeContainer } from './components/HomeContainer';
import { TopMenu } from './components/TopMenu';

function App() {
  return (   
    <>  
      <div id="bimg">
        <TopMenu/>
        <div className="row">
          <div className="col-md-12">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <HomeContainer/>
          </div>
        </div>
      </div>
      <Footer/>
    </> 
  );
}

export default App;
