/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

export default function correctSentence(text) {
  /*
  // if the input is number, it might be better to return the converted number to str and parse the number as str
  if (typeof text == 'number') {
    text = String(text);
  }
  else if (typeof text != 'string') return false;
  */
  if (typeof text != 'string') return false;
  if (text == "") return ""; // probably its better
  text = text.charAt(0).toUpperCase() + text.slice(1) + (text[text.length - 1] != '.' ? '.' : '');
  return text;
}
