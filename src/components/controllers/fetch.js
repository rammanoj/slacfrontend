export const fetchSynchronous = async (uri, method, data, headers) => {
  let response = await fetch(uri, {
    method: method,
    body: JSON.stringify(data),
    headers: headers
  });

  let responseData = await response.json();
  return responseData;
};

export const fetchAsynchronous = (uri, method, data, headers, callback) => {
  fetch(uri, {
    method: method,
    body: method === "GET" ? undefined : JSON.stringify(data),
    headers: headers,
    credentials: "include"
  })
    .then(response => {
      console.log("came here");
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        if (response.bodyUsed) {
          return response.json();
        } else {
          return { message: "Error while fetching the server" };
        }
      }
    })
    .then(object => {
      console.log(object);
      return callback(object);
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });
};
