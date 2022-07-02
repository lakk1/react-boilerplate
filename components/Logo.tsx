import { Box  } from "@chakra-ui/react";
import { BsFillHexagonFill } from "react-icons/bs";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        color: "newblue.500",
        flex: { base: 1, md: "none" },
      }}
    >
      <BsFillHexagonFill size={24} />
    </Box>
  );
};

export default Logo;
