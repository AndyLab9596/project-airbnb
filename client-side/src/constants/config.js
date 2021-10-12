import { createTheme } from "@material-ui/core";

export const BASE_URL = "https://airbnb.cybersoft.edu.vn/api/";
export const TOKEN_BY_CLASS =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI3LzAxLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0MzI0MTYwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjQzMzg5MjAwfQ.NEQRF8SKORq7R7kYbYCCO9ZZXYxTWlbaTc2wxXWMfiw";

export const FAKE_AVATAR = "https://i.pravatar.cc/300?u=";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 768,
      lg: 950,
      xl: 1128,
      xxl: 1440,
      home: 1760,
      detail: 1280,
    },
  },
});
