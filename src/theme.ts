import { createTheme } from "@mui/material/styles";
import createCache from "@emotion/cache";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1272b2",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100%",
        },
        html: {
          height: "100%",
        },
        "#__next": {
          height: "100%",
        },
        b: {
          fontWeight: "bold !important",
        },
        strong: {
          fontWeight: "bold !important",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontWeight: "500 !important",
          },
        },
      },
    },
  },
});

export const createEmotionCache = () => {
  const isBrowser = typeof document !== "undefined";
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: "mui-style", insertionPoint });
};
