function greeting_message(first_name, last_name, gender) {

  let salutation = gender === "Male" ? "MR." : "MS.";

  const message = `Greetings! ${salutation} ${first_name} ${last_name}`;

  console.log(message);
}

greeting_message("Jon", "Snow", "Male");
greeting_message("Arya", "Stark", "Female");

