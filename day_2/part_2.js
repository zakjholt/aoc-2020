const { parseData } = require("./part_1");

// In this context, min and max just refer to the two characters that we should check for the character in
const checkPasswordValidity = ({ policy, password }) => {
  const index1 = policy.min - 1;
  const index2 = policy.max - 1;

  const char1 = password[index1];
  const char2 = password[index2];

  if (char1 === char2) return false;
  if (char1 !== policy.character && char2 !== policy.character) return false;

  return true;
};

const main = () => {
  const passwordPolicyPairs = parseData();

  let count = 0;

  passwordPolicyPairs.forEach((pair) => {
    checkPasswordValidity(pair) && count++;
  });

  console.log(count);
  return count;
};

main();
