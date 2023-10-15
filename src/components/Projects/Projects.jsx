import Container from "@mui/material/Container";
import { TitleS, FullCenteredFlexBox } from "../FullCenteredFlexBox";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Card } from "./Card";

import memh from "./assets/memh.png";

export const learnEx = {
  name: "MemHouse",
  desciption:
    "Сайт с мемами. Создан для прокачивания backend и frontend навыков, а также освоения новых технологий с реализацией их в этом сайте.",
  stack: [
    "REACT",
    "TYPESCRIPT",
    "RECOIL",
    "Nest.js",
    "GraphQL",
    "styled-components",
    "react-router-dom",
  ],
  link: "https://memhouse-client.web.app/",
  pic: memh,
};

export const Projects = () => {
  return (
    <Container component="main" maxWidth="md">
      <FullCenteredFlexBox>
        <TitleS>Pet-проект MemHouse</TitleS>
        <Card {...learnEx} />
      </FullCenteredFlexBox>
    </Container>
  );
};
