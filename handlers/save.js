function saveHandler() {
  debugger;
  // write me!
  // Get the user input value
  const userValue = document.getElementById("input").value;
  // Check if the value is already present in the state
  if (
    strings.NaNy.includes(userValue) ||
    strings.evens.includes(userValue) ||
    strings.odds.includes(userValue)
  ) {
    return;
  }
  // Check if it's a number or not
  if (isNaN(userValue)) {
    strings.NaNy.push(userValue);
    // Check if it's a even or not
  } else if (Number(userValue % 2 == 0)) {
    strings.evens.push(userValue);
  } else {
    strings.odds.push(userValue);
  }

  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save",
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  });
}
