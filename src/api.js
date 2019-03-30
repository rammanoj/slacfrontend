/*
    The Rott Backend Domain name and all the avialable api requests are documented here.
*/

const BASE_API_URI = "https://slac-backend.herokuapp.com/";

// method: POST
export const login = BASE_API_URI + "accounts/login/";
// method: POST
export const signup = BASE_API_URI + "accounts/signup/";
// method: POST
export const forgotPassword = BASE_API_URI + "accounts/forgot_password/";
// method: POST
export const mobileverify = BASE_API_URI + "accounts/mobile-verify/";
// method: POST
export const mobileverifyResend = BASE_API_URI + "accounts/mobile-resend/";
// method: GET, PATCH
export const profile = BASE_API_URI + "accounts/update/";
// method: PATCH
export const passwordUpdate = BASE_API_URI + "accounts/password_update/";
// method: POST
export const logout = BASE_API_URI + "accounts/logout/";
// method: GET
export const userListView = BASE_API_URI + "accounts/users/";

/* List of All States */

export const states = [];

/* End of List*/
