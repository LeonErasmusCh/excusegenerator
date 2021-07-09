/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuse() {
  //write your code here
  /*
   */

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let random_who = Math.floor(Math.random() * who.length);

  let what = ["my homework", "the keys", "the car"];
  let random_what = Math.floor(Math.random() * what.length);

  let action = ["ate", "peed", "crushed", "broke"];
  let random_action = Math.floor(Math.random() * action.length);

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let random_when = Math.floor(Math.random() * when.length);
  /*console.log(
    who[random_who],
    action[random_action],
    what[random_what],
    when[random_when]
  );
  */
  let result =
    who[random_who] +
    " " +
    action[random_action] +
    " " +
    what[random_what] +
    " " +
    when[random_when];
  document.getElementById("excuse").innerHTML = result;
}

document.getElementById("btn").addEventListener("click", excuse);
