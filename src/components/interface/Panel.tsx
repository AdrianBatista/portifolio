import { ReactNode } from "react";
import { Box } from "@mui/material";
import CanvaBackground from "./CanvaBackground";

type Props = {
  children: ReactNode;
  canvas?: boolean;
};

export default function Panel({ children, canvas }: Props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
              backgroundColor: "rgba(0,0,0,0.9)",
              borderRadius: "none",
            }}
          >
            {canvas ? <CanvaBackground /> : <></>}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            marginTop: "-100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
