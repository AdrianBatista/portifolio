import { ReactNode } from "react";
import { Box } from "@mui/material";

type Props = {
  children: ReactNode;
};

export default function Panel({ children }: Props) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/images/pc.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "none",
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: "none",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
