/* eslint-disable space-before-function-paren */
/* eslint-disable quotes */
/* eslint-disable semi */
import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};

// AuthenticationService.register({
//   email: "verma.yashu@gmail.com",
//   password: "12345"
// });
