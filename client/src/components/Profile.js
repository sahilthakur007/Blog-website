import { Box, Button, Divider } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useSelector } from "react-redux";
import  {useNavigate} from "react-router-dom"
import { useEffect } from "react";
const Profile = () => {
  const { userInfo } = useSelector((state) => state.authReducer);
  const navigate = useNavigate()
  useEffect(() => {
    if (!userInfo) return (navigate("/signup"))
 },[userInfo])
  return (
    <>
      {
        userInfo && (
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
                sx={{ backgroundImage: `url(${userInfo.user.photo})`,boxShadow:"0px 0px 10px grey" }}
              ></Box>
              <h2 style={{ marginTop: "35px" }}>{userInfo.user.name}</h2>
              <div className="profile-mail-div">
                <MailOutlineIcon sx={{ mr: "2vw" }} />
                <h4>{userInfo.user.email}</h4>
              </div>
            </Box>
          </Box>
        )
      }
    </>
  );
};
export default Profile;
