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

// search
const filterSelect = document.getElementById("filter-produk");
const productContainer = document.getElementById("productCar");

filterSelect.addEventListener("change", function () {
  const selectedProduct = filterSelect.value;
  filterProducts(selectedProduct);
});

function filterProducts(selectedProduct) {
  const filteredProducts = data_product.filter((product) => {
    return selectedProduct === "all" || product.type === selectedProduct;
  });

  const fillProduct = filteredProducts.map(
    (data) => `
        <div class="card-product-car" onclick="window.location.href = '/detail-${data.type}';">
          <img src="${data.image}" alt="${data.alt}" class="img-car" />
          <p class="text-type-car">${data.title}</p>
          <p class="car-price">Mulai : ${data.price}</p>
          <div class="title-type-car">
            <iconify-icon icon="mdi:car-outline" class="icon" width="24px"></iconify-icon>
            <p>${data.desc}</p>
          </div>
        </div>
      `
  );

  productContainer.innerHTML = fillProduct.join("");
}

// Inisialisasi dengan menampilkan semua produk saat halaman dimuat.
filterProducts("all");