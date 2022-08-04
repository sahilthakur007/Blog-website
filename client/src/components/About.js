import MailOutlineIcon from "@mui/icons-material/MailOutline";
const About = () => {
  return (
    <>
      <div className="about-page-image">
        <marquee>
          <h1>
            <i>We are here to share the blogs & explore the life!</i>
          </h1>
        </marquee>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="about-page-div">
          <h2 style={{ color: "orange" }}>
            Read The Blogs, Gain The Knowledge!
          </h2>
          <p>
            Read the blogs thorougly and get the knowledge of diferent domains.
            Get to know about others' life experiences.
          </p>
        </div>
        <div className="about-page-div">
          <h2 style={{ color: "red" }}>
            Explore The Blogs, Know The Different Aspects Of Life!
          </h2>
          <p>
            Visit the different blogs based on different filtered topics and get
            expertised in the topic. Enjoy your favourite topics and subjects.
          </p>
        </div>
        <div className="about-page-div">
          <h2 style={{ color: "orange" }}>
            Write The Blogs, Share The Knowledge!
          </h2>
          <p>
            Write the blogs in your own words, share the knowledge with others
            and collect the valuable feedbacks from readers.{" "}
          </p>
        </div>
        <div className="about-page-div">
          <h2 style={{ color: "red" }}>
            Develope Your Creativity, Enjoy Your Freedom!
          </h2>
          <p>
            Build your blogs with your own creative title, words and images.
            Share your experiences and enjoy the freedom.
          </p>
        </div>
        <hr style={{ width: "90%", marginTop: "20px" }}></hr>
      </div>
    </>
  );
};
export default About;
