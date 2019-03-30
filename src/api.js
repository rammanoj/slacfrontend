import React from "react";
import { MenuItem } from "@material-ui/core";
/*
    The Root Backend Domain name and all the avialable api requests are documented here.
*/

const BASE_API_URI = "https://slac-backend.herokuapp.com/";

// method: POST
export const login = BASE_API_URI + "api/login";
// method: POST
export const signup = BASE_API_URI + "api/register";
// method: GET
export const profile = BASE_API_URI + "api/profile/";
// method: POST
export const logout = BASE_API_URI + "accounts/logout/";
// method: GET
export const userListView = BASE_API_URI + "accounts/users/";

export const RegsiterMenu = [
  <MenuItem key="sample1" value="sample1">
    sample1
  </MenuItem>,
  <MenuItem key="sample2" value="sample2">
    sample2
  </MenuItem>,
  <MenuItem key="sample3" value="sample3">
    sample3
  </MenuItem>,
  <MenuItem key="sample4" value="sample4">
    sample4
  </MenuItem>,
  <MenuItem key="sample5" value="sample5">
    sample5
  </MenuItem>,
  <MenuItem key="sample6" value="sample6">
    sample6
  </MenuItem>,
  <MenuItem key="sample7" value="sample7">
    sample7
  </MenuItem>,
  <MenuItem key="sample8" value="sample8">
    sample8
  </MenuItem>,
  <MenuItem key="sample9" value="sample9">
    sample9
  </MenuItem>,
  <MenuItem key="sample10" value="sample10">
    sample10
  </MenuItem>,
  <MenuItem key="sample11" value="sample11">
    sample11
  </MenuItem>,
  <MenuItem key="sample12" value="sample12">
    sample12
  </MenuItem>,
  <MenuItem key="sample13" value="sample13">
    sample13
  </MenuItem>,
  <MenuItem key="sample14" value="sample14">
    sample14
  </MenuItem>,
  <MenuItem key="sample15" value="sample15">
    sample15
  </MenuItem>
];

/* End of List*/
