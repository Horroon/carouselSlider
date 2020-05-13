import React, { useReducer, useEffect } from "react";
import {reducer, InitialState} from './Slider-Reducer'
import "../components/Slider.css";


function Slider() {
  let [state, setState] = useReducer(reducer, InitialState);

  useEffect(() => {
    setState({
      type: "findSlides",
      payload: document.querySelectorAll(".slide")
    });
  }, []);

  function dragEvent(e) {
    const clickTarget = e.target;
    const clickTargetWidth = clickTarget.offsetWidth;
    const xCoordInClickTarget =
      e.clientX - clickTarget.getBoundingClientRect().left;
    if (clickTargetWidth / 2 > xCoordInClickTarget) {
      //lef Side
      setState({ type: "arrow-left", payload: 1 });
    } else {
      //right Side
      setState({ type: "arrow-right", payload: 1 });
    }
  }
  // create onChangeSlide Arrow Function
  const onChangeSlide = index => {
    setState({ type: "dot", payload: index });
  };

  return (
    <div className="wrap">
      <div
        id="arrow-left"
        className="arrow"
        onClick={() => setState({ type: "arrow-left", payload: 1 })}
      ></div>
      <div id="slider">
        <div
          className="slide slide1 fade"
          draggable
          onDragEnd={dragEvent}
          style={{
            display: state.current == 0 ? "block" : "none",
            transition: "cubic-bezier(0.075, 0.82, 0.165, 1)"
          }}
        >
          <div className="slide-content"></div>
        </div>
        <div
          className="slide slide2 fade"
          draggable
          onDragEnd={dragEvent}
          style={{ display: state.current == 1 ? "block" : "none" }}
        >
          <div className="slide-content"></div>
        </div>
        <div className="slide slide3 fade">
          <div
            className="slide-content"
            draggable
            onDragEnd={dragEvent}
            style={{ display: state.current == 2 ? "block" : "none" }}
          ></div>
        </div>
        <div
          className="slide slide4 fade"
          draggable
          onDragEnd={dragEvent}
          style={{ display: state.current == 3 ? "block" : "none" }}
        >
          <div className="slide-content"></div>
        </div>
        <div
          className="slide slide5 fade"
          draggable
          onDragEnd={dragEvent}
          style={{ display: state.current == 4 ? "block" : "none" }}
        >
          <div className="slide-content"></div>
        </div>
      </div>
      <div
        id="arrow-right"
        className="arrow"
        onClick={() => setState({ type: "arrow-right", payload: 1 })}
      ></div>
      <div className="nav">
        <div
          onClick={() => onChangeSlide(0)}
          className={`dot ${state.current == 0 ? "active_dot" : ""}`}
        ></div>
        <div
          onClick={() => onChangeSlide(1)}
          className={`dot ${state.current == 1 ? "active_dot" : ""}`}
        ></div>
        <div
          onClick={() => onChangeSlide(2)}
          className={`dot ${state.current == 2 ? "active_dot" : ""}`}
        ></div>
        <div
          onClick={() => onChangeSlide(3)}
          className={`dot ${state.current == 3 ? "active_dot" : ""}`}
        ></div>
        <div
          onClick={() => onChangeSlide(4)}
          className={`dot ${state.current == 4 ? "active_dot" : ""}`}
        ></div>
      </div>
    </div>
  );
}
export default Slider;
