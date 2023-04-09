const calculator = document.querySelector(".calculator");
const button = calculator.querySelector(".button");
const display = document.querySelector(".content");
const digitBtns = document.querySelectorAll(".digit");

button.addEventListener("click", function (e) {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    // const currentNum = "";
    const previousKeyType = calculator.dataset.previousKeyType;

    // highlight the button pressed
    button.classList.add("is-depressed");

    if (!action) {
      if (displayedNum === "0" || previousKeyType === "calc") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }

      calculator.dataset.previousKeyType = "digit";
    }

    if (
      action === "divide" ||
      action === "times" ||
      action === "minus" ||
      action === "plus"
    ) {
      display.textContent = displayedNum + keyContent;
      if (displayedNum === "0") display.textContent = "0";

      calculator.dataset.previousKeyType =
        "divide" || "times" || "minus" || "plus";
    }

    if (action === "delete") {
      if (displayedNum) display.textContent = displayedNum.slice(0, -1);
      if (displayedNum === "0" || displayedNum === displayedNum[0]) {
        display.textContent = 0;
      }

      calculator.dataset.previousKeyType = "delete";
    }

    if (action === "allClear") {
      display.textContent = 0;
      calculator.dataset.previousKeyType = "allClear";
    }

    if (action === "percent") {
      if (displayedNum === "0") {
        display.textContent = 0;
      } else {
        display.textContent = displayedNum * 0.01;
      }
      calculator.dataset.previousKeyType = "percent";
    }

    if (action === "comma") {
      display.textContent = displayedNum + ".";
      if (previousKeyType === "comma") {
        display.textContent = displayedNum;
      }
      calculator.dataset.previousKeyType = "comma";
    }

    if (action === "calc") {
      display.textContent = eval(displayedNum);
      if (displayedNum.length > 7) {
        display.textContent =
          displayedNum.slice(0, 2) / 10 + `x10e${displayedNum.length - 1}`;
      }

      calculator.dataset.previousKeyType = "calc";
    }
  }
});

// window.addEventListener("display", function (event) {
//   display.textContent = event.detail.value;
// });

// // elem.dispatchEvent(
// //   new CustomEvent("hello", {
// //     detail: { name: "John" },
// //   })
// // );

// class Calculator {
//   total = 0;

//   cumulate = [];

//   constructor() {}

//   // add(e) {
//   //   console.log(e.textContent.trim());
//   //   this.cumulate.push("+");
//   // }

//   // subtract() {
//   //   this.cumulate.push("-");
//   // }

//   // times() {
//   //   this.cumulate.push("*");
//   // }

//   // divide() {
//   //   this.cumulate.push("/");
//   // }

//   // addNumber(num) {
//   //   this.cumulate.push(num);
//   // }

//   fire() {
//     window.dispatchEvent(
//       new CustomEvent("display", { detail: { value: this.getDisplay() } })
//     );
//   }

//   addButton(e) {
//     this.cumulate.push(e.textContent.trim());
//     this.fire();
//   }

//   getTotal() {
//     return this.total;
//   }

//   getDisplay() {
//     if (this.cumulate[0] === 0) {
//       this.cumulate.pop();
//     }

//     if (this.cumulate.length >= 2) {
//       this.cumulate.join("").replace(/^0*/, "");
//     }
//   }

//   equals() {}
// }

// const cal = new Calculator();

// // cal.addNumber(4);
// // cal.addNumber(5);
// // cal.add();
// // cal.addNumber(10);
// console.log(cal.getDisplay());
