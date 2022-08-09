import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const Sidebar = (props) => {
  const navigate = useNavigate();
  return (
    <div className={props.userinfo ? "sidebar-large" : "sidebar"}>
      <CloseIcon className="sidebar-close-icon" onClick={props.close} />
      {props.userinfo && (
        <Avatar
          alt="Profile photo"
          src={props.userinfo.user.photo}
          onClick={()=>{navigate("./profile")}}
          sx={{ mt: "10px", mb: "35px", height: "56px", width: "56px",cursor:"pointer" }}
        />
      )}
      <div
        className="sidebar-buttons"
        onClick={() => {
          navigate("/");
          props.close();
        }}
      >
        <h3>Home</h3>
      </div>
      <div className="sidebar-buttons" onClick={() => {navigate("/about");}}> 
        <h3>About</h3>
      </div>
      {props.userinfo && (
        <>
          <div
            className="sidebar-buttons"
            onClick={() => {
              navigate("/myblog");
              props.close();
            }}
          >
            <h3>My blogs</h3>
          </div>
          <div
            className="sidebar-buttons"
            onClick={() => {
              navigate("/profile");
              props.close();
            }}
          >
            <h3>Profile</h3>
          </div>
          <div
            className="sidebar-buttons"
            onClick={() => {
              props.logout();
              props.close();
            }}
          >
            <h3>Logout</h3>
          </div>
        </>
      )}
      {!props.userinfo && (
        <div
          className="sidebar-buttons"
          onClick={() => {
            navigate("/signup");
            props.close();
          }}
        >
          <h3>Login</h3>
        </div>
      )}
    </div>
  );
};
export default Sidebar;
