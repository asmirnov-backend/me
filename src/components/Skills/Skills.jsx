import Container from "@mui/material/Container";
import { TitleS, FullCenteredFlexBox } from "../FullCenteredFlexBox";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 15,
  borderRadius: 10,
  width: "40vh",
}));

function LinearProgressWithLabel(props) {
  return (
    <>
      <Typography sx={{ fontSize: 28 }} color="text.primary">
        {props.text}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <BorderLinearProgress
            variant="determinate"
            color="inherit"
            sx={{ color: props.colour }}
            {...props}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            sx={{ fontSize: 24 }}
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    </>
  );
}

export const Skills = () => {
  return (
    <Container component="main" maxWidth="md">
      <FullCenteredFlexBox>
        <TitleS>Профессиональные навыки</TitleS>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <LinearProgressWithLabel
              value={100}
              text="TypeScript"
              colour="#FF0000"
            />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel
              value={70}
              text="Python"
              colour="#aa7F44"
            />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={70} text="AWS" colour="#FFFF00" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel
              value={100}
              text="Nest.js"
              colour="#00FF00"
            />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={80} text="SQL" colour="#0000FF" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel
              value={60}
              text="Docker"
              colour="#4B0082"
            />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={90} text="Git" colour="#9400D3" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={60} text="Linux" colour="#2244aa" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={40} text="React" colour="#2196f3" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={65} text="UML" colour="#009688" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={30} text="Deno" colour="#00bcd4" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={50} text="MUI" colour="#451c44" />
          </Grid>
          <Grid item>
            <LinearProgressWithLabel
              value={50}
              text="GraphQL"
              colour="#fad04f"
            />
          </Grid>
        </Grid>
      </FullCenteredFlexBox>
    </Container>
  );
};
