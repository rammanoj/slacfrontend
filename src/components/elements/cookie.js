import Cookies from "universal-cookie";
// This file deals with the cookies over the entire project

const cookie = new Cookies();

// GetCookie
export const getCookie = name => {
  let status = cookie.get(name);
  if (status) {
    return [cookie.get(name), status];
  } else {
    return [undefined, status];
  }
};

// SetCookie
export const setCookie = names_obj => {
  for (let i in names_obj) {
    console.log(names_obj[i]);
    cookie.set(
      names_obj[i].key,
      {
        value: names_obj[i].value
      },
      {
        path: "/",
        expires: new Date(names_obj[i].age)
      }
    );
  }
};

// DeleteCookie
export const deleteCookie = list_names => {
  for (let i in list_names) {
    cookie.remove(list_names[i]);
  }
};
