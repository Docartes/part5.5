function urutkanAbjad(str) {
  // for (let i = 0; i < str.length - 1; i++) {
  //   for (let j = 0; j < str.length - i - 1; j++) {
  //     if (str[j] > str[j + 1]) {
  //       let temp = str[j];
  //       str[j] = str[j + 1];
  //       str[j + 1] = temp;
  //     }
  //   }
  // }
  // return str;
  let arr = str.split("");

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr.join("");
}

console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
