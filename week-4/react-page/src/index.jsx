

function Header() {
    return (
        <React.Fragment>
            <header className="main-header">
                <h1>Web Site Title/Logo</h1>
                <button> <img className="burger" src="./img/burger.png" /></button>

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
        </React.Fragment>
    );
}

function Banner() {
    return (
        <div className="banner">
            <h2 className="headline">Welcome Message</h2>
        </div>
    );
}

{/* 第一欄位的box，無標題*/ }
function FirstContainer() {
    return (
        <div className="first-col-container">
            <div className="first box">
                <p>Content Box 1</p>
            </div>

            <div className="second box">
                <p>Content Box 2</p>
            </div>

            <div className="third box">
                <p>Content Box 3</p>
            </div>

            <div className="forth box">
                <p>Content Box 4</p>
            </div>
        </div>
    );
}

class Button extends React.Component {
    // state = {
    //     ShowSection: false
    // };

    showSecondSection = () => {
        return (
            <React.Fragment>
                <div className="second-col-container" >
                    <div className="fifth box">
                        <p>Content Box 5</p>
                    </div>

                    <div className="sixth box">
                        <p>Content Box 6</p>
                    </div>

                    <div className="seventh box">
                        <p>Content Box 7</p>
                    </div>

                    <div className="eighth box">
                        <p>Content Box 8</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    render() {
        return (
            <React.Fragment>
                <div className="button" >
                    <a href="javascript:void(0)" onClick={this.showSecondSection}>Call To Action</a>
                </div>
            </React.Fragment>
        );
    }
}


function Section() {
    return (
        <React.Fragment>
            <h2 className="section-title">Section Title</h2>
            <FirstContainer />
            <Button />
        </React.Fragment>
    );
}



const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Banner />
            <Section />

        </React.Fragment>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);



