import { Box } from "@mui/material";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Appearance from "../components/Profile/Appearance";
import PowerStats from "../components/Profile/PowerStats";
import BioGraphy from "../components/Profile/BioGraphy";
import WorkConnection from "../components/Profile/WorkConnection";

const Profile = ({ hero }) => {
  if (hero) {
    const { name, powerstats, biography, apperance, work, connections, image } =
      hero;
    return (
      <Box sx={{ mt: 3 }}>
        <ProfileHeader name={name} image={image}></ProfileHeader>
        <Appearance apperance={apperance}></Appearance>
        <PowerStats powerstats={powerstats}></PowerStats>
        <BioGraphy biography={biography}></BioGraphy>
        <WorkConnection work={work} connections={connections}></WorkConnection>
      </Box>
    );
  }
};

export default Profile;
