import React from "react";
import Navbar from "./navbar";
import Signup from "./Signup";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { width } from "@mui/system";

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
  {
    url: "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 4",
  },
];
const properties = {
  duration: 5000,
  autoplay: true,
  transitionDuration: 1000,
  arrows: true,
  infinite: true,
  easing: "ease",
};
const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "18vh" }}>
        <Slide {...properties}>
          {slideImages.map((slideImage, index) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={slideImage.url}
                style={{ height: "50vh", width: "80%" }}
              />
            </div>
          ))}
        </Slide>
      </div>

      {/* <Slide {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each.url} alt="sample" style={{height:"25vw"}}/>
              </div>
            ))}
          </Slide> */}
    </>
  );
};
export default Home