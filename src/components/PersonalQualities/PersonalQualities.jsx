import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { PersonalQuality } from "./PersonalQuality";
import { TitleS, FullCenteredFlexBox } from "../FullCenteredFlexBox";

export const PersonalQualities = () => {
  return (
    <Container component="main" maxWidth="md">
      <FullCenteredFlexBox>
        <TitleS>Личные качества</TitleS>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <PersonalQuality label="Любознательность" color="#9575cd" />
          </Grid>
          <Grid item>
            <PersonalQuality label="Честность" color="#009688" />
          </Grid>
          <Grid item>
            <PersonalQuality label="Целеустремлённость" color="#ff5722" />
          </Grid>
          <Grid item>
            <PersonalQuality label="Ответственность" color="#8bc34a" />
          </Grid>
          <Grid item>
            <PersonalQuality
              label="Умение работать в команде"
              color="#00bcd4"
            />
          </Grid>
          <Grid item>
            <PersonalQuality label="Внимательность" color="#2196f3" />
          </Grid>
          <Grid item>
            <PersonalQuality label="Инициативность" color="#dce775" />
          </Grid>
          <Grid item>
            <PersonalQuality label="Коммуникабельность" color="#ffc107" />
          </Grid>
        </Grid>
      </FullCenteredFlexBox>
    </Container>
  );
};
