let data_product = [
  {
    link: "/Detail Produk/katalog1.html",
    img: "./Assets/Katalog/katalog1.jpg",
    name: "Katalog 1",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog2.html",
    img: "./Assets/Katalog/katalog2.jpg",
    name: "Katalog 2",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog3.html",
    img: "./Assets/Katalog/katalog3.jpg",
    name: "Katalog 3",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog4.html",
    img: "./Assets/Katalog/katalog4.jpg",
    name: "Katalog 4",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog5.html",
    img: "./Assets/Katalog/katalog5.jpg",
    name: "Katalog 5",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog6",
    img: "./Assets/Katalog/katalog6.jpg",
    name: "Katalog 6",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog7.html",
    img: "./Assets/Katalog/katalog7.jpg",
    name: "Katalog 7",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog8.html",
    img: "./Assets/Katalog/katalog8.jpg",
    name: "Katalog 8",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog9.html",
    img: "./Assets/Katalog/katalog9.jpg",
    name: "Katalog 9",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog10.html",
    img: "./Assets/Katalog/katalog10.jpg",
    name: "Katalog 10",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "/Detail Produk/katalog11.html",
    img: "./Assets/Katalog/katalog11.jpg",
    name: "Katalog 11",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
  },
  {
    link: "Detail Produk/katalog12.html",
    img: "./Assets/Katalog/katalog12.jpg",
    name: "Katalog 12",
    size: "Ukuran : 20cm X 20cm",
    price: "Rp 2.000/pcs"
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
    counter("count1", 260, 600, 800);
    counter("count2", 0, 40, 2500);
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

// // search
// const filterSelect = document.getElementById("filter-produk");
// const productContainer = document.getElementById("productCar");

// filterSelect.addEventListener("change", function () {
//   const selectedProduct = filterSelect.value;
//   filterProducts(selectedProduct);
// });

// function filterProducts(selectedProduct) {
//   const filteredProducts = data_product.filter((product) => {
//     return selectedProduct === "all" || product.type === selectedProduct;
//   });

//   const fillProduct = filteredProducts.map(
//     (data) => `
//         <div class="card-product-car" onclick="window.location.href = '/detail-${data.type}';">
//           <img src="${data.image}" alt="${data.alt}" class="img-car" />
//           <p class="text-type-car">${data.title}</p>
//           <p class="car-price">Mulai : ${data.price}</p>
//           <div class="title-type-car">
//             <iconify-icon icon="mdi:car-outline" class="icon" width="24px"></iconify-icon>
//             <p>${data.desc}</p>
//           </div>
//         </div>
//       `
//   );

//   productContainer.innerHTML = fillProduct.join("");
// }

// // Inisialisasi dengan menampilkan semua produk saat halaman dimuat.
// filterProducts("all");