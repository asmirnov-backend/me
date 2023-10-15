import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

export const FlexBox = styled(Box)({
  display: "flex",
});

export const CenteredFlexBox = styled(FlexBox)({
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});

export const FullCenteredFlexBox = styled(CenteredFlexBox)({
  marginTop: 80,
});

export const TitleS = styled(Typography)`
  text-align: center;
  margin-bottom: 40px;
  font-size: 40px;
`;
