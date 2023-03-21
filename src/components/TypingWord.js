import $ from "jquery";
import { useEffect } from "react";

const TypingWord = ({ wordList, style }) => {
  var words = wordList,
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;

  const wordflick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      $(".word").text(part);
    }, speed);
  };

  useEffect(() => {
    $(document).ready(function () {
      wordflick();
    });
  }, []);

  return <div className="word typing-word" style={style}></div>;
};

export default TypingWord;
