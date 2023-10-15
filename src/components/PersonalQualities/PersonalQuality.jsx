import Chip from "@mui/material/Chip";

export const PersonalQuality = ({ label, color }) => {
  return (
    <Chip
      sx={{
        height: 55,
        width: 390,
        marginY: 1,
        fontSize: 26,
        backgroundColor: color,
      }}
      label={label}
    />
  );
};
