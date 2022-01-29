import React, {Component} from 'react';
import './index.css';
import Button from './Button';

class App extends Component {

  state = {
    isCallToAction: false, 
    style: 'none'
  }
  

  toggleButton = () => {
    this.setState({
      style: 'flex'
    });
  };  

  render() {
    return (
      <div className="App">
        <header className="main-header">
          <h1>Web Site Title/Logo</h1>
          <button> <img className="burger" src="https://i.imgur.com/29QhEBe.png" /></button>

          <div className="burger-navbar disapear">
            <span className="close-bnt">x</span>
            <ul>
              <li className="navlink"><a href="#">Item 1</a></li>
              <li className="navlink"><a href="#">Item 2</a></li>
              <li className="navlink"><a href="#">Item 3</a></li>
              <li className="navlink"><a href="#">Item 4</a></li>
            </ul>
          </div>
        </header>

        {/* banner */}
        <div className="banner">
          <h2 className="headline">Welcome Message</h2>
        </div>

        {/* section */}
        <div className="section-container">
          <h2 className="section-title">Section Title</h2>

          <div className="first-col-container">
            {/* 第一欄位  */}
            <div className="first box">
              <p>Content Box 1</p>
            </div>

            {/* 第二欄位  */}
            <div className="second box">
              <p>Content Box 2</p>
            </div>

            {/* 第三欄位  */}
            <div className="third box">
              <p>Content Box 3</p>
            </div>

            {/* 第四欄位 */}
            <div className="forth box">
              <p>Content Box 4</p>
            </div>
          </div>

          
          <Button onClick={this.toggleButton} />

          {/* style={{display:this.state.style}} */}
          <div className="second-col-container" style={{display:this.state.style}} >
            {/* 第五欄位 */}
            <div className="fifth box">
              <p>Content Box 5</p>
            </div>

            {/* 第六欄位  */}
            <div className="sixth box">
              <p>Content Box 6</p>
            </div>

            {/* 第七欄位 */}
            <div className="seventh box">
              <p>Content Box 7</p>
            </div>

            {/* 第八欄位 */}
            <div className="eighth box">
              <p>Content Box 8</p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
