const translations = {
  de: {
    menu: "Weinkarte",
    subtitle: "Eine kuratierte Auswahl für besondere Momente",
    intro: "Entdecken Sie unsere sorgfältig ausgewählte Doluca- und Terra-Kollektion. Alle Preise verstehen sich inklusive Mehrwertsteuer.",
    all: "Alle Weine",
    white: "Weißwein",
    rose: "Roséwein",
    red: "Rotwein",
    dessert: "Dessertwein",
    bottle: "Flasche",
    wines: "Weine",
    noDessert: "Derzeit ist kein Dessertwein in unserer Karte aufgeführt. Unser Serviceteam berät Sie gerne zu einer passenden Alternative.",
    guidanceTitle: "Eine Empfehlung gewünscht?",
    guidance: "Unser Serviceteam hilft Ihnen gerne, den passenden Wein für Ihren Abend auszuwählen.",
    footer: "Alle Preise inklusive MwSt. · Genuss mit Verantwortung"
  },
  en: {
    menu: "Wine Menu",
    subtitle: "A curated collection for memorable moments",
    intro: "Discover our carefully selected Doluca and Terra collection. All prices include VAT.",
    all: "All wines",
    white: "White",
    rose: "Rosé",
    red: "Red",
    dessert: "Dessert",
    bottle: "Bottle",
    wines: "Wines",
    noDessert: "There is currently no dessert wine listed on our menu. Our service team will be pleased to recommend a suitable alternative.",
    guidanceTitle: "Would you like a recommendation?",
    guidance: "Our service team will be delighted to help you choose the perfect wine for your evening.",
    footer: "All prices include VAT · Please enjoy responsibly"
  },
  tr: {
    menu: "Şarap Menüsü",
    subtitle: "Unutulmaz anlar için özenle seçilmiş bir koleksiyon",
    intro: "Özenle seçilmiş Doluca ve Terra koleksiyonumuzu keşfedin. Tüm fiyatlara KDV dahildir.",
    all: "Tüm şaraplar",
    white: "Beyaz",
    rose: "Roze",
    red: "Kırmızı",
    dessert: "Tatlı",
    bottle: "Şişe",
    wines: "Şarap",
    noDessert: "Mevcut listemizde tatlı şarap bulunmuyor. Servis ekibimiz size uygun bir alternatif önermekten memnuniyet duyacaktır.",
    guidanceTitle: "Tavsiye ister misiniz?",
    guidance: "Servis ekibimiz, geceniz için en uygun şarabı seçmenize memnuniyetle yardımcı olacaktır.",
    footer: "Tüm fiyatlara KDV dahildir · Lütfen sorumlu tüketiniz"
  },
  ru: {
    menu: "Винная карта",
    subtitle: "Изысканная коллекция для незабываемых моментов",
    intro: "Откройте для себя нашу тщательно подобранную коллекцию Doluca и Terra. Все цены указаны с НДС.",
    all: "Все вина",
    white: "Белое",
    rose: "Розовое",
    red: "Красное",
    dessert: "Десертное",
    bottle: "Бутылка",
    wines: "Вина",
    noDessert: "В настоящее время десертное вино в меню не указано. Наша команда с удовольствием предложит подходящую альтернативу.",
    guidanceTitle: "Нужна рекомендация?",
    guidance: "Наша команда с удовольствием поможет вам выбрать идеальное вино для вашего вечера.",
    footer: "Все цены указаны с НДС · Употребляйте ответственно"
  }
};

const wines = [
  { id: 1, brand: "Doluca", name: "Doluca Kalecik Karası", category: "red", price: 25 },
  { id: 2, brand: "Doluca", name: "Doluca Shiraz", category: "red", price: 24 },
  { id: 3, brand: "Doluca", name: "Doluca Sarafin Chardonnay", category: "white", price: 65 },
  { id: 4, brand: "Doluca", name: "Doluca Sarafin Merlot", category: "red", price: 65 },
  { id: 5, brand: "Doluca", name: "Sarafin Merlot Cabernet Franc", category: "red", price: 63 },
  { id: 6, brand: "Doluca", name: "Doluca Sarafin Sauvignon Blanc", category: "white", price: 63 },
  { id: 7, brand: "Doluca", name: "Doluca Sarafin Shiraz", category: "red", price: 65 },
  { id: 8, brand: "Doluca", name: "Anfora Blush Rosé", category: "rose", price: 32 },
  { id: 9, brand: "Terra", name: "Buzbağ Kırmızı Klasik", category: "red", price: 13 },
  { id: 10, brand: "Terra", name: "Buzbağ Özel Roze 2015", category: "rose", price: 13 },
  { id: 11, brand: "Terra", name: "K. Buzbağ Rezerv Beyaz 2023", category: "white", price: 22 },
  { id: 12, brand: "Terra", name: "Buzbağ Rezerv White 2023", category: "white", price: 22 },
  { id: 13, brand: "Terra", name: "Leona Blush Rosé 2024", category: "rose", price: 17 },
  { id: 14, brand: "Terra", name: "Terra V.S.K Narince", category: "white", price: 19 },
  { id: 15, brand: "Terra", name: "Doluca Cabernet Sauvignon Merlot", category: "red", price: 19 },
  { id: 16, brand: "Terra", name: "Terra V.S.K ÖB", category: "red", price: 19 },
  { id: 17, brand: "Terra", name: "Kır. V.S.K", category: "red", price: 19 },
  { id: 18, brand: "Terra", name: "Terra Rosé V.S.K KKK", category: "rose", price: 19 },
  { id: 19, brand: "Terra", name: "Terra V.S.K SHR", category: "red", price: 19 },
  { id: 20, brand: "Terra", name: "Cielo Sauvignon", category: "white", price: 22 },
  { id: 21, brand: "Terra", name: "Cielo Chardonnay", category: "white", price: 22 },
  { id: 22, brand: "Terra", name: "Cielo Pinot Grigio", category: "white", price: 22 },
  { id: 23, brand: "Terra", name: "Cielo Pinot", category: "red", price: 22 }
];

const categoryOrder = ["red", "white", "rose", "dessert"];

let language = "de";
let activeCategory = "all";

const byId = (id) => document.getElementById(id);

function wineRow(wine, t) {
  return `
    <article class="menu-item">
      <div class="menu-item-mark" aria-hidden="true"><span></span></div>
      <div class="menu-item-copy">
        <p class="wine-brand">${wine.brand}</p>
        <h3>${wine.name}</h3>
      </div>
      <span class="menu-dots" aria-hidden="true"></span>
      <div class="menu-item-meta">
        <small>75 cl · ${t.bottle}</small>
        <strong>€${wine.price}</strong>
      </div>
    </article>`;
}

function renderWines() {
  const t = translations[language];
  const categories = activeCategory === "all" ? categoryOrder.filter((category) => category !== "dessert") : [activeCategory];

  byId("wine-list").innerHTML = categories.map((category) => {
    const groupedWines = wines.filter((wine) => wine.category === category);
    if (!groupedWines.length) {
      return `
        <section class="wine-section empty-section">
          <div class="section-heading"><span>04</span><h2>${t[category]}</h2></div>
          <div class="empty-message"><b>PS</b><p>${t.noDessert}</p></div>
        </section>`;
    }

    return `
      <section class="wine-section" aria-labelledby="${category}-title">
        <div class="section-heading">
          <span>${String(categoryOrder.indexOf(category) + 1).padStart(2, "0")}</span>
          <div><p>Port Side Selection</p><h2 id="${category}-title">${t[category]}</h2></div>
          <small>${groupedWines.length} ${t.wines}</small>
        </div>
        <div class="wine-list-panel">${groupedWines.map((wine) => wineRow(wine, t)).join("")}</div>
      </section>`;
  }).join("");
}

function updateLanguage(nextLanguage) {
  language = nextLanguage;
  const t = translations[language];
  document.documentElement.lang = language;
  byId("hero-title").textContent = t.menu;
  byId("hero-subtitle").textContent = t.subtitle;
  byId("collection-title").textContent = t.menu;
  byId("intro-copy").textContent = t.intro;
  byId("guidance-title").textContent = t.guidanceTitle;
  byId("guidance-copy").textContent = t.guidance;
  byId("footer-copy").textContent = t.footer;
  byId("skip-link").textContent = t.all;
  document.querySelector(".scroll-cue").setAttribute("aria-label", t.menu);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const selected = button.dataset.lang === language;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.textContent = t[button.dataset.category];
  });
  renderWines();
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => updateLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll("[data-category]").forEach((item) => {
      const selected = item.dataset.category === activeCategory;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderWines();
  });
});

renderWines();
