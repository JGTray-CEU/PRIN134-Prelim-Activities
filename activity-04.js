function HashString(inputString) {
    let updatedString = '';
    let hashedCharacters = [];

    for (let i = 0; i < inputString.length; i++) {
        if (i % 2 === 0) {
            updatedString += '*';
            hashedCharacters.push(inputString[i]);
        } else {
            updatedString += inputString[i];
        }
    }

    console.log("Input String: " + inputString);
    console.log("Output String: " + updatedString);
    console.log("Hashed Characters: " + hashedCharacters.join(','));
}
const inputString = "Hello World";
HashString(inputString);