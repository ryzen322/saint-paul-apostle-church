const items = document.querySelector(".scroll");

const scrollItem = [
  {
    name: "Pray",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Autem distinctio tempore incidunt fugit sint accusamus ipsum`,
  },
  {
    name: "Strength and Power",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Autem distinctio tempore incidunt fugit sint accusamus ipsum`,
  },
  {
    name: "Title",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Autem distinctio tempore incidunt fugit sint accusamus ipsum`,
  },
  {
    name: "Title",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Autem distinctio tempore incidunt fugit sint accusamus ipsum`,
  },
  {
    name: "Title",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Autem distinctio tempore incidunt fugit sint accusamus ipsum`,
  },
];

scrollItem.forEach((item, index) => {
  const html = `    <div class="scroll-item">
<div class="item">
  <img src="./img/slider-${index}.png" alt="" />
</div>
<div class="text">
  <h1>${item.name}</h1>
  <p>
    &nbsp;&nbsp; ${item.text}
  </p>
  <span>October 31 2020</span>
</div>
</div>`;

  items.insertAdjacentHTML("beforeend", html);
});

const name = document.querySelector("#name");
const textArea = document.querySelector("#textarea");
const selectItem = document.querySelector("#select");
const myNumber = document.querySelector("#number");
const myForm = document.querySelector("#myForm");

const closeBtn = document.querySelector(".close");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = name.value;
  const textfield = textArea.value;
  const selectOption = selectItem.value;
  const number = myNumber.value;

  const obj = {
    firstname,
    textfield,
    selectOption,
    number,
  };

  array.push(obj);

  name.value = "";
  textArea.value = "";
  selectItem.value = "";
  myNumber.value = "";
});

const payment = document.querySelector(".navigation__menu--price");
const backdrop = document.querySelector(".backdrop");

payment.addEventListener("click", () => {
  if (backdrop.hasAttribute("id")) {
    backdrop.removeAttribute("id");
  }
});

closeBtn.addEventListener("click", () => {
  backdrop.setAttribute("id", "display-none");
});
