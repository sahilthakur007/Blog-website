import { Slide } from "react-slideshow-image";
import { Button, Tooltip, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const slideImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
  {
    id: 4,
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

const SlideShow = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "2vh" }}>
      <Slide {...properties}>
        {slideImages.map((slideImage) => (
          <div
            key={slideImage.id}
            style={{
              height: "35vw",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                height: "35vw",
                width: "80vw",
                backgroundSize: "80vw 35vw",
                backgroundRepeat: "no-repeat",
                display: "flex",
              }}
             
            >
              <p style={{ marginLeft: "1vw" }}>
                <b style={{ fontSize: "25px" }}>{slideImage.caption}</b>{" "}
                <u style={{ color: "white" }}  onClick={() => {
                navigate(`/singleblog/${slideImage.id}`);
              }}> click here</u>
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideShow;
