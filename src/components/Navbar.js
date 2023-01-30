import { Component } from "react";
import "./Navbarstyles.css";
class Navbar extends Component {
  state = { clicked: false };
  handelClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="index.html">
            <div>
              <img
                src="https://itl-blog-aws.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2021/11/533f990dc23831acf78450490c4396db-lossy.png"
                alt="Logo"
              ></img>
            </div>
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? " #navbar active" : "#navbar"}
            >
              <li>
                <a href=" index.html">HOME</a>
              </li>
              <li>
                <a href=" index.html">NEWS</a>
              </li>
              <li>
                <a href=" index.html">SIGN UP</a>
              </li>
              <li>
                <a href=" index.html">SELLER LOGIN</a>
              </li>
              <li>
                <a href=" index.html">GUEST POST</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handelClicked}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : " fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
