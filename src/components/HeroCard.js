import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const HeroCard = ({ hero }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={hero.image.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {hero.name}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HeroCard;
