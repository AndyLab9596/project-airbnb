import axios from "axios";
import manageAuthApi from "../../api/manageAuthApi";
import { BASE_URL } from "../../constants/config";

export const loginAction = (user) => {
  return async (dispatch) => {
    try {
      console.log(user);
      const res = await axios({
        url: "https://airbnb.cybersoft.edu.vn/api/auth/login",
        method: "POST",
        data: user,
        headers: {
          "Content-Type": "application/json",
          tokenByClass:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI3LzAxLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0MzI0MTYwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjQzMzg5MjAwfQ.NEQRF8SKORq7R7kYbYCCO9ZZXYxTWlbaTc2wxXWMfiw",
        },
      });
      console.log(res);
      //   const res = await manageAuthApi.login(user);
      //   console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};

export const registerAction = (user) => {
  return async (dispatch) => {
    try {
      const res = await manageAuthApi.register(user);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
};
