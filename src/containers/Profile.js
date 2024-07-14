import { Box } from "@mui/material";
import ProfileHeader from "../components/Profile/ProfileHeader";
import Appearance from "../components/Profile/Appearance";
import PowerStats from "../components/Profile/PowerStats";
import BioGraphy from "../components/Profile/BioGraphy";
import WorkConnection from "../components/Profile/WorkConnection";
import FeatureCard from "../components/Profile/FeatureCard";

const Profile = ({ hero }) => {
  if (hero) {
    const {
      name,
      powerstats,
      biography,
      appearance,
      work,
      connections,
      image,
    } = hero;
    return (
      <Box sx={{ mt: 3, gap: 2 }}>
        <ProfileHeader name={name} image={image}></ProfileHeader>
        <FeatureCard
          feature={"Appearance"}
          properties={{ appearance }}
        ></FeatureCard>
        <FeatureCard
          feature={"PowerStats"}
          properties={{ powerstats }}
        ></FeatureCard>
        <FeatureCard
          feature={"Biography"}
          properties={{ biography }}
        ></FeatureCard>
        <FeatureCard
          feature={"Appearance"}
          properties={{ appearance }}
        ></FeatureCard>
        <WorkConnection work={work} connections={connections}></WorkConnection>
      </Box>
    );
  }
};

export default Profile;
