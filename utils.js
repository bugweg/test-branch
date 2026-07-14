function divide(a, b) {
  return a / b;
}

function getUser(users, id) {
  return users.find(u => u.id === id).name;
}
