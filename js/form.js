const contact = {
  firstName: "John",
  lastName: "Rambo",
  phoneNumber: "+7 (999) 999-99-99",
  email: "johnrambo@gmail.com",
  companyName: "U.S.A. Army",
  jobTitle: "Soldier"
};

console.log(`${contact.firstName} ${contact.lastName}, ${contact.jobTitle}`);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("first_name").setAttribute("value", contact.firstName);
  document.getElementById("last_name").setAttribute("value", contact.lastName);
  document.getElementById("phone_number").setAttribute("value", contact.phoneNumber);
  document.getElementById("email").setAttribute("value", contact.email);
  document.getElementById("company_name").setAttribute("value", contact.companyName);
  document.getElementById("job_title").setAttribute("value", contact.jobTitle);

  const contactForm = document.querySelector("form");
  const successBlock = document.querySelector(".form-success");

  const handleSubmitButtonEvent = (e) => {
    e.preventDefault();
    contactForm.classList.add("hide");
    successBlock.classList.remove("hide")
  };

  contactForm.addEventListener("submit", handleSubmitButtonEvent);
});
