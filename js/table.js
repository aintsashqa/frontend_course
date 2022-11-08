const contacts = [
  {
    firstName: "John",
    lastName: "Rambo",
    phoneNumber: "+7 (999) 999-99-99",
    email: "johnrambo@gmail.com",
    companyName: "U.S.A. Army",
    jobTitle: "Soldier"
  },
  {
    firstName: "Sara",
    lastName: "Conor",
    phoneNumber: "+7 (901) 123-45-67",
    email: "saraconor@gmail.com",
    companyName: "Cyberdyne",
    jobTitle: "Robot destroyer"
  },
  {
    firstName: "James",
    lastName: "Bond",
    phoneNumber: "+7 (000) 765-43-21",
    email: "jamesbond@gmail.com",
    companyName: "MI6",
    jobTitle: "Agent 007"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tab-active > .tab-badge").innerText = contacts.length;

  const tbody = document.querySelector("tbody");
  tbody.innerText = "";

  contacts.forEach(contact => {
    const tr = document.createElement("tr");

    Object.values(contact).forEach(value => {
      const td = document.createElement("td");
      td.innerText = value;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
});
