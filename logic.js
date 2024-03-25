let data_product = [
  {
    link: "Detail-Produk/katalog2.html",
    img: "./Assets/Katalog/katalog2.jpg",
    name: "Paper Bag Haji dan Umroh",
    category: "Paper Bag",
    size: "Ukuran : 27cm X 32cm X 7cm",
    price: "Rp 17.000/lusin"
  },
  {
    link: "Detail-Produk/katalog3.html",
    img: "./Assets/Katalog/katalog3.jpg",
    name: "Paper Bag Terimakasih",
    category: "Paper Bag",
    size: "Ukuran : 17cm X 23cm X 5cm",
    price: "Rp 275/pcs"
  },
  {
    link: "Detail-Produk/katalog4.html",
    img: "./Assets/Katalog/katalog4.jpg",
    name: "Tas Paper Bag Brownies",
    category: "Paper Bag",
    size: "Ukuran : 35cm X 14cm X 18cm",
    price: "Rp 15.000/lusin"
  },
  {
    link: "Detail-Produk/katalog1.html",
    img: "./Assets/Katalog/katalog1.jpg",
    name: "Tas Spunbond Motif Pita",
    category: "Tas Spunbond",
    size: "Ukuran : 30cm X 38cm X 10cm",
    price: "Rp 4.500/pcs"
  },
  {
    link: "Detail-Produk/katalog6.html",
    img: "./Assets/Katalog/katalog6.jpg",
    name: "Tas Spunbond",
    category: "Tas Spunbond",
    size: "Ukuran : 30cm X 35cm",
    price: "Rp 4.500/pcs"
  },
  {
    link: "Detail-Produk/katalog8.html",
    img: "./Assets/Katalog/katalog8.jpg",
    name: "Tas SPunbond Motif",
    category: "Tas Spunbond",
    size: "Ukuran : 20cm X 25cm X 5cm",
    price: "Rp 4.700/pcs"
  },
  {
    link: "Detail-Produk/katalog17.html",
    img: "./Assets/Katalog/katalog17.jpg",
    name: "Tas Spunbond Mika",
    category: "Tas Spunbond",
    size: "Ukuran : 25cm X 30cm X 24cm",
    price: "Rp 5.000/pcs"
  },
  {
    link: "Detail-Produk/katalog7.html",
    img: "./Assets/Katalog/katalog7.jpg",
    name: "Tas Spunbond Mika",
    category: "Tas Spunbond",
    size: "Ukuran : 25cm X 30cm X 14cm",
    price: "Rp 4.700/pcs"
  },
  {
    link: "Detail-Produk/katalog5.html",
    img: "./Assets/Katalog/katalog5.jpg",
    name: "Tas Spunbond",
    category: "Tas Spunbond",
    size: "Ukuran : 23cm X 23cm X 30cm",
    price: "Rp 4.000/pcs"
  },
  {
    link: "Detail-Produk/katalog9.html",
    img: "./Assets/Katalog/katalog9.jpg",
    name: "Tas Spunbond",
    category: "Tas Spunbond",
    size: "Ukuran : 23cm X 23cm X 30cm",
    price: "Rp 4.000/pcs"
  },
  {
    link: "Detail-Produk/katalog10.html",
    img: "./Assets/Katalog/katalog10.jpg",
    name: "Tas Spunbond Motif",
    category: "Tas Spunbond",
    size: "Ukuran : 23cm X 30cm X 12cm",
    price: "Rp 3.250/pcs"
  },
  {
    link: "Detail-Produk/katalog20.html",
    img: "./Assets/Katalog/katalog20.jpg",
    name: "Tas Spunbond Motif",
    category: "Tas Spunbond",
    size: "Ukuran : 23cm X 30cm X 12cm",
    price: "Rp 3.250/pcs"
  },
];

const productDataContainer = document.getElementById("product-list");

const fillProduct = data_product.map(
  (data) => 
  `<a href=${data.link}>
      <div class="card-product">
          <img src=${data.img} alt="Produk Nailil Barokah" class="image-product">
          <p class="name-product">${data.name}</p>
          <p class="size-product">${data.size}</p>
          <p class="price-product">${data.price}</p>
      </div>
    </a>`
);

productDataContainer.innerHTML = fillProduct.join("");

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 400, 1000, 800);
    counter("count2", 0, 100, 2500);
    counter("count3", 0, 16, 2500);
    counter("count4", 0, 19, 2500);
   });
   

   // Get the button
let mybutton = document.getElementById("btn-whatsapp");

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// faq
function toggleFAQ(card) {
  const textFAQ = card.querySelector(".text-faq");
  const chevronIcon = card.querySelector("iconify-icon");

  if (textFAQ.style.display === "none" || !textFAQ.style.display) {
    textFAQ.style.display = "block";
    chevronIcon.classList.add("rotate180");
  } else {
    textFAQ.style.display = "none";
    chevronIcon.classList.remove("rotate180");
  }
}
