import * as React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';

class App extends React.Component {
  public render() {
    return (
    <div className="App">
    <Header/>
    <Home/>
    <Footer/>
    </div>
    );
  }
}

export default App;
