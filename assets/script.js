
let couponBannerObject = {
  light50: {
    keyword: "light",
    name: "light50",
    save: 50,
    min: 300,
    max: 500,
  },
  light150: {
    keyword: "light",
    name: "light150",
    save: 150,
    min: 1500,
    max: 2900,
  },
  light300: {
    keyword: "light",
    name: "light300",
    save: 300,
    min: 3000,
    max: 5000,
  },
  mon50: {
    keyword: "monitor",
    name: "mon50",
    save: 50,
    min: 500,
    max: 1000,
  },
  save20: {
    keyword: "replacement oem part",
    name: "save20",
    save: 20,
    min: 20,
    max: 150,
  },
  mon100: {
    keyword: "monitor",
    name: "mon100",
    save: 100,
    min: 1500,
    max: 2900,
  },
  clave2022: {
    keyword: "autoclave",
    name: "clave2022",
    save: 100,
    min: 1500,
    max: 2900,
  },
  clave50: {
    keyword: "autoclave",
    name: "clave50",
    save: 50,
    min: 300,
    max: 500,
  },
  clave300: {
    keyword: "autoclave",
    name: "clave300",
    save: 300,
    min: 3000,
    max: 5000,
  },
  light200: {
    keyword: "light",
    name: "light200",
    save: 200,
    min: 2000,
    max: 2900,
  },
};

console.log(couponBannerObject);

const bannerFiller = () => {
  let productNme = document.querySelector(".product-heading__title");
  let productPrice = document.querySelector(".price-container");
  Object.values(couponBannerObject).forEach((coupon) => {
    let price = Number(productPrice.innerText.split(".")[0].replace(/[^0-9\-]+/g, ''))
    console.log( productNme.innerText.toLowerCase().includes(coupon["keyword"]),coupon["keyword"], price < coupon["max"] , price > coupon["min"])
    if (
      productNme.innerText.toLowerCase().includes(coupon["keyword"]) &&
      price < coupon["max"] &&
      price > coupon["min"]
    ) {
      
      console.log(
        productNme.innerText.toLowerCase().includes(coupon["keyword"]),
        Number(productPrice.innerText.split(".")[0].replace(/[^0-9\-]+/g, '')),
        price,
        coupon["max"],
        coupon["min"]
      );
      console.log(
        "coupon found !!! ",
        coupon,
        productNme.innerText.toLowerCase().includes(coupon["keyword"]),
        price < coupon["max"],
        price > coupon["min"]
      );
      document.querySelector(
        ".discountBanner"
      ).innerHTML = `Discount Coupon Code  <b>${coupon["name"]} </b> : (Save $${coupon["save"]} )`;
    } else {
      document.querySelector(".discountBanner").classList.toggle("hidden");
    }
  });

};

bannerFiller();
