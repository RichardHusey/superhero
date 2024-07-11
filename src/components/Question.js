import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Question = ({ question, setQuery }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const handleSelect = (e) => {
    const { feature, property } = question;
    setQuery({ [`${feature}_${property}`]: e.target.value });
  };

  return (
    <Box>
      <Typography sx={{ fontSize: { xs: "30px", md: "40px" } }}>
        {question.question}
      </Typography>
      <FormControl sx={{ pb: 3 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          {question.feature}
        </FormLabel>
        <RadioGroup
          row={isMdUp}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleSelect}
        >
          {question.options.map((option, index) => (
            <FormControlLabel
              key={`${index}${option}`}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Question;
