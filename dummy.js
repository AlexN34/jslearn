function showName(firstName, lastName) {
  var nameIntro = "Your name is ";
  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }

  return makeFullName();
}

//showName("Michael", "Jackson");
// If we're running under Node,
if(typeof exports !== 'undefined') {
  exports.showName = showName;
}
