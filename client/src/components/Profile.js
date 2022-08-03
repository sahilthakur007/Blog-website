import { Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useSelector } from "react-redux";
const Profile = () => {
    const { userInfo } = useSelector((state) => state.authReducer);
  return (
    <>
      <Box
        pt="100px"
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "5vh",
        }}
      >
        <Box className="profile-box">
          <Box
            className="profile-image"
            sx={{ backgroundImage: `url(${userInfo.user.photo})` }}
          ></Box>
          <h2 style={{ marginTop: "35px" }}>{userInfo.user.name}</h2>
          <div className="profile-mail-div">
            <MailOutlineIcon sx={{ mr: "2vw" }} />
            <h4>{userInfo.user.email}</h4>
          </div>
        </Box>
      </Box>
    </>
  );
};
export default Profile;
