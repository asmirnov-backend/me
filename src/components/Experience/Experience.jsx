import Container from "@mui/material/Container";
import { TitleS, FullCenteredFlexBox } from "../FullCenteredFlexBox";
import exp from "./assets/exp.png";

export const Experience = () => {
  return (
    <Container component="main" maxWidth="md">
      <FullCenteredFlexBox>
        <TitleS>Опыт</TitleS>
        <img src={exp} alt="exp" width={"1200vw"} />
      </FullCenteredFlexBox>
    </Container>
  );
};
