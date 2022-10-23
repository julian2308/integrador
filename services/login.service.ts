const endpoint = "http://digitalmoney.ctd.academy/api/";

export const LoginPost = async (email: any, password: any) => {
  const response = await fetch(`${endpoint}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email, password),
  });
  const data = await response.json();
  if (data.status === 200) {
    console.log(data);
  } else {
    console.log("no anda");
  }
};
