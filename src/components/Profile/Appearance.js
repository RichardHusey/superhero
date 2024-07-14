import { Box, Paper, Table, TableBody, TableHead, TableRow, Typography } from "@mui/material";

const Appearance = ({ apperance }) => {
  const { gender, race, height, weight } = apperance;
  const eyeColor = apperance["eye-color"];
  const hairColor = apperance["hair-color"];
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </Paper>
  );
};

export default Appearance;
