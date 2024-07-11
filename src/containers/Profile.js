import { Box } from "@mui/material";
import HeroCard from "../components/HeroCard";

const Profile = ({ heros }) => {
  return (
    <Box>
      {heros.map((hero) => (
        <HeroCard hero={hero}></HeroCard>
      ))}
    </Box>
  );
};

export default Profile;
