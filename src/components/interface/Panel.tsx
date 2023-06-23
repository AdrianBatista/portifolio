import { ReactNode } from "react";
import { Box } from "@mui/material";
import CanvaBackground from "./CanvaBackground";

type TBackground = {
  type?: string;
  url?: string;
  color?: string;
  alpha?: number;
};

type Props = {
  children: ReactNode;
  canvas?: boolean;
  background?: TBackground;
};

export default function Panel({ children, canvas, background }: Props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={
            background?.type == "image"
              ? {
                  backgroundImage: `url(${
                    background?.url ?? "/images/pc.jpg"
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "none",
                }
              : {
                  backgroundColor: background?.color ?? "#CCC",
                }
          }
        >
          <Box
            sx={() => {
              var style = {
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "none",
                backgroundColor: "",
              };
              return background?.color
                ? style
                : {
                    ...style,
                    backgroundColor: `rgba(0,0,0,${
                      background?.alpha ?? "0.9"
                    })`,
                  };
            }}
          >
            {canvas ? <CanvaBackground /> : <></>}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100vw",
            minHeight: "100vh",
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
