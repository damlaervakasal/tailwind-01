const sunIcons = document.querySelector("#sun");
const moonIcons = document.querySelector("#moon");
const body = document.querySelector("body");

sunIcons.addEventListener("click", () => {
  sunIcons.classList.add("hidden");
  moonIcons.classList.remove("hidden");
  body.classList.remove("dark");
});

moonIcons.addEventListener("click", () => {
  moonIcons.classList.add("hidden");
  sunIcons.classList.remove("hidden");
  body.classList.add("dark");
});

//click yapınca birkaç hata var sun a tıklayınca moon hidden onun üzerinde cursor-pointer olmuyor
//  bg-white olduktan sonra moon ortaya çıkıyor fakat sun kaybolmuyor . diğer hata da kaybolmadığı için iconlar yan yana oluyor sabit bir yerde olmuyor
