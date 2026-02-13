const products = [
  {
    name: "Wireless Earbuds",
    desc: "Compact, clear sound, good battery.",
    price: 1299,
    category: "Electronics"
  },
  {
    name: "Running Shoes",
    desc: "Lightweight shoes for daily runs.",
    price: 2199,
    category: "Fashion"
	
  },
  {
    name: "Coffee Mug",
    desc: "Ceramic mug, 350ml.",
    price: 299,
    category: "Home"
  },
  {
    name: "Backpack",
    desc: "Water-resistant with laptop sleeve.",
    price: 1499,
    category: "Fashion"
  },
  {
    name: "Desk Lamp",
    desc: "LED lamp with brightness control.",
    price: 799,
    category: "Home"
  }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");

let cart = 0;

function renderProducts() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  productList.innerHTML = "";

  products
    .filter(p =>
      p.name.toLowerCase().includes(searchText) &&
      (category === "All" || p.category === category)
    )
    .forEach(product => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="card-top">${product.category}</div>
        <div class="card-body">
          <h4>${product.name}</h4>
          <p>${product.desc}</p>
          <div class="price">₹${product.price.toLocaleString()}</div>
          <span class="tag">${product.category}</span>
          <button class="add-btn">Add to cart</button>
        </div>
      `;

      card.querySelector(".add-btn").addEventListener("click", () => {
        cart++;
        cartCount.textContent = cart;
      });

      productList.appendChild(card);
    });
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);

renderProducts();
