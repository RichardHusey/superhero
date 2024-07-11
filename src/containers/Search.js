import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { QUESTIONS } from "../mock";
import Question from "../components/Question";

const Search = ({ setQuery }) => {
  return (
    <Box sx={{ pt: 5 }}>
      <Carousel
        autoPlay={false}
        animation="slide"
        duration={800}
        navButtonsAlwaysVisible={true}
      >
        {QUESTIONS.map((question) => (
          <Question
            key={`${question.question}`}
            question={question}
            setQuery={setQuery}
          ></Question>
        ))}
      </Carousel>
    </Box>
  );
};

export default Search;
