import React from "react";

export const hendlePhrase = (number) => {
  const man = (n) => {
    let m;
    if (n > 9) {
      const narr = n.toString().split("");
      if (n > 19) {
        m = narr[1] > 1 && narr[1] < 5 ? "человека" : "человек";
      } else {
        m = "человек";
      }
    } else {
      m = n > 1 && n < 5 ? "человека" : "человек";
    }
    return m;
  };

  let phrase =
    number > 0 ? (
      <span className="badge bg-primary">
        {number} {man(number)} {number === 1 ? "тусанет" : "тусанут"} с тобой
        сегодня
      </span>
    ) : (
      <span className="badge bg-danger">Никто с тобой не тусанет</span>
    );

  return phrase;
};
