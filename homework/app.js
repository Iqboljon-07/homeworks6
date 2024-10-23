// - masala;
// let name = prompt("Ismingizni kiriting");
// let year = prompt("YYYY-MM-DD HH:mm:ss");

// function fbirthday() {
//   let Ibirthday = new Date(year);

//   const date = new Date();

//   let Iyear = date.getFullYear() - Ibirthday.getFullYear();

//   let Imonth = date.getMonth() - Ibirthday.getMonth();

//   let Iday = date.getDate() - Ibirthday.getDate();

//   let Ihours = date.getHours() - Ibirthday.getHours();

//   let Iminutes = date.getMinutes() - Ibirthday.getMinutes();

//   let Iseconds = date.getSeconds() - Ibirthday.getSeconds();

//   if (Imonth < 0) {
//     Iyear--;
//     Imonth += 12;
//   }
//   if (Iday < 0) {
//     Imonth--;

//     let previousMonth = new Date(date.getFullYear(), date.getMonth(), 0); // Oldingi oy kunlari
//     Iday += previousMonth.getDate();
//   }
//   if (Ihours < 0) {
//     Iday--;

//     Ihours += 24;
//   }
//   if (Iminutes < 0) {
//     Ihours--;

//     Iminutes += 60;
//   }
//   if (Iseconds < 0) {
//     Iminutes--;

//     Iseconds += 60;
//   }

//   alert(
//     "Siz " +
//       `${name.toUpperCase()}` +
//       " hozirda " +
//       `${Iyear + "yoshu "}` +
//       `${Imonth + "oylik "}` +
//       `${Iday + "kunlik "}` +
//       `${Ihours + " soat "}` +
//       `${Iminutes + " daqiqa "}` +
//       `${Iseconds + " sekund "}` +
//       " yoshingiz"
//   );
// }

// fbirthday();

////////////////////////////////////////////////////////////////////////////////////////////////

//2-masala

// let test = function (a, b) {
//   return Math.floor(Math.random() * (b - a + 1) + a);
// };

// console.log(test(20, 40));

//////////////////////////////////////////////////////////////////////////////////////////////////
//3-masala

// let str = prompt("Please enter");

// let test = () => {
//   return str
//     .split(" ")
//     .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
//     .join(" ");
// };

// alert(test());

/////////////////////////////////////////////////////////////////////////////////////////
//4-masala

let str = prompt("Please enter");
let test = function () {
  let arr = str
    .split("")
    .filter((word) => word >= "A" && word <= "Z")
    .join("").length;

  if (arr == 0) {
    return "Katta harflar mavjud emas";
  } else {
    return arr + " Katta harflar mavjud";
  }
};

alert(test());
