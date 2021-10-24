function Gen_Number(JSONarray) {
  let number = Math.floor(Math.random() * JSONarray.length);
  localStorage.setItem("Generated_Number", number);
  number_retrieved = localStorage.getItem("Generated_Number");
  return number;
  if ((number = number_retrieved)) {
    Gen_Number();
  } else {
    return number;
  }
}
