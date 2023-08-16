import React from "react";
import Error from "./error.png"
import "./errorBoundary.scss"
import Navigation from "../navigation/navigation.js";
import { Link } from "react-router-dom";
import Footer from "../footer/footer.js";
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  render() {
    const handleClick=()=> {
window.location.reload();

    } 
    if (this.state.isError) {
      return (
        <>
        <Navigation />
        <h1 className="errorText">Something went wrong.</h1>
        <button className="errorBtn"  onClick={handleClick}>Перезагрузить страницу?</button>
    <img src={Error} alt="error" className="boundaryError" />
    <Footer />
        </>
      )
    }

    return this.props.children;
  }
}