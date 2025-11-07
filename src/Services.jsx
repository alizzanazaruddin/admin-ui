export const users = [
    {
    name: "Izza",
    email: "alizzanazaruddinfirdaus@gmail.com",
    street: "Perum dinar elok",
    city: "Semarang",
    age: "24",
    job: "Web Developer",
    },
    {
    name: "Nazaruddin",
    email: "alizzanazaruddinfirdaus@gmail.com",
    street: "Perum dinar elok",
    city: "Surakarta",
    age: "24",
    },
    {
    name: "Firdaus",
    email: "alizzanazaruddinfirdaus@gmail.com",
    street: "Perum dinar elok",
    city: "Yogyakarta",
    age: "24",
    },
  ];

  export const newUsers = [
    {
    name: "Izza",
    email: "alizzanazaruddinfirdaus@gmail.com",
    street: "Perum dinar elok",
    city: "Semarang",
    age: "24",
    job: "Web Developer",
    },
    {
    name: "Nazaruddin",
    email: "alizzanazaruddinfirdaus@gmail.com",
    street: "Perum dinar elok",
    city: "Surakarta",
    age: "24",
    },
    {
    name: "Firdaus",
    email: "alizzanazaruddinfirdaus@gmail.com",
    street: "Perum dinar elok",
    city: "Yogyakarta",
    age: "24",
    },
  ];

  export const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users.map((user) => ({
      name: user.name,
      email: user.email,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data:", error.message);
    throw error;
  }
};