// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
function shortcut(string) {
  const vwlCodeArr = [97, 101, 105, 111, 117];
  var ansr = "";
  for (var i = 0; i < string.length; i++) {
    if (vwlCodeArr.indexOf(string.charCodeAt(i)) == -1)
      ansr = ansr.concat(string.charAt(i));
  }
  return ansr;
}