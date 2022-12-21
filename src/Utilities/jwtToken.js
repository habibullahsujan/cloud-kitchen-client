
export const jwtToken = (user) => {
  console.log(user);
    const userEmail = {
      email: user.email,
    };
    fetch(" https://cloud-kitchen-server-puce.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("userToken", data.token);
      });
  };
  