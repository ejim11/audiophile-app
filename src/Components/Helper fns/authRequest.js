const authRequest = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  return res;
};

export default authRequest;
