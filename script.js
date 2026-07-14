const translations = {
  de: {
    menu: "Weinkarte",
    subtitle: "Eine kuratierte Auswahl für besondere Momente",
    intro: "Entdecken Sie unsere sorgfältig zusammengestellte Kollektion. Flaschen, Jahrgänge und Preise werden in der nächsten Phase ergänzt.",
    all: "Alle Weine",
    sparkling: "Schaumwein",
    white: "Weißwein",
    rose: "Roséwein",
    red: "Rotwein",
    dessert: "Dessertwein",
    imageSoon: "Flaschenbild folgt",
    wineName: "Weinname",
    origin: "Weingut · Region · Jahrgang",
    description: "Eine kurze Verkostungsnotiz und Speiseempfehlung wird hier ergänzt.",
    priceSoon: "Preis folgt",
    guidanceTitle: "Eine Empfehlung gewünscht?",
    guidance: "Unser Serviceteam hilft Ihnen gerne, den passenden Wein für Ihren Abend auszuwählen.",
    footer: "Genuss mit Verantwortung"
  },
  en: {
    menu: "Wine Menu",
    subtitle: "A curated collection for memorable moments",
    intro: "Discover our carefully selected collection. Bottles, vintages and prices will be added in the next stage.",
    all: "All wines",
    sparkling: "Sparkling",
    white: "White",
    rose: "Rosé",
    red: "Red",
    dessert: "Dessert",
    imageSoon: "Bottle image coming soon",
    wineName: "Wine name",
    origin: "Winery · Region · Vintage",
    description: "A short tasting note and food pairing suggestion will be added here.",
    priceSoon: "Price coming soon",
    guidanceTitle: "Would you like a recommendation?",
    guidance: "Our service team will be delighted to help you choose the perfect wine for your evening.",
    footer: "Please enjoy responsibly"
  },
  tr: {
    menu: "Şarap Menüsü",
    subtitle: "Unutulmaz anlar için özenle seçilmiş bir koleksiyon",
    intro: "Özenle hazırlanan koleksiyonumuzu keşfedin. Şişeler, rekolteler ve fiyatlar bir sonraki aşamada eklenecektir.",
    all: "Tüm şaraplar",
    sparkling: "Köpüklü",
    white: "Beyaz",
    rose: "Roze",
    red: "Kırmızı",
    dessert: "Tatlı",
    imageSoon: "Şişe görseli eklenecek",
    wineName: "Şarap adı",
    origin: "Üretici · Bölge · Rekolte",
    description: "Kısa tadım notu ve yemek eşleşmesi önerisi buraya eklenecektir.",
    priceSoon: "Fiyat eklenecek",
    guidanceTitle: "Tavsiye ister misiniz?",
    guidance: "Servis ekibimiz, geceniz için en uygun şarabı seçmenize memnuniyetle yardımcı olacaktır.",
    footer: "Lütfen sorumlu tüketiniz"
  },
  ru: {
    menu: "Винная карта",
    subtitle: "Изысканная коллекция для незабываемых моментов",
    intro: "Откройте для себя нашу тщательно подобранную коллекцию. Бутылки, винтажи и цены будут добавлены на следующем этапе.",
    all: "Все вина",
    sparkling: "Игристое",
    white: "Белое",
    rose: "Розовое",
    red: "Красное",
    dessert: "Десертное",
    imageSoon: "Фото бутылки скоро",
    wineName: "Название вина",
    origin: "Винодельня · Регион · Винтаж",
    description: "Здесь появятся краткая дегустационная заметка и рекомендации к блюдам.",
    priceSoon: "Цена скоро",
    guidanceTitle: "Нужна рекомендация?",
    guidance: "Наша команда с удовольствием поможет вам выбрать идеальное вино для вашего вечера.",
    footer: "Употребляйте ответственно"
  }
};

const wines = [
  { id: 1, category: "sparkling", tone: "champagne" },
  { id: 2, category: "white", tone: "ivory" },
  { id: 3, category: "white", tone: "straw" },
  { id: 4, category: "rose", tone: "blush" },
  { id: 5, category: "red", tone: "ruby" },
  { id: 6, category: "red", tone: "garnet" },
  { id: 7, category: "dessert", tone: "amber" }
];

let language = "de";
let activeCategory = "all";

const byId = (id) => document.getElementById(id);

function bottleMarkup() {
  return `
    <div class="bottle" aria-hidden="true">
      <div class="bottle-neck"></div>
      <div class="bottle-body">
        <div class="bottle-label"><span>PORT SIDE</span><b>PS</b><small>RESORT HOTEL</small></div>
      </div>
    </div>`;
}

function renderWines() {
  const t = translations[language];
  const visible = activeCategory === "all" ? wines : wines.filter((wine) => wine.category === activeCategory);
  byId("wine-list").innerHTML = visible.map((wine) => `
    <article class="wine-card">
      <div class="wine-visual ${wine.tone}">
        <span class="card-number">${String(wine.id).padStart(2, "0")}</span>
        <div class="bottle-halo" aria-hidden="true"></div>
        ${bottleMarkup()}
        <div class="bottle-pedestal" aria-hidden="true"></div>
        <span class="image-note">${t.imageSoon}</span>
      </div>
      <div class="wine-copy">
        <p class="wine-category">${t[wine.category]}</p>
        <h3>${t.wineName}</h3>
        <p class="wine-origin">${t.origin}</p>
        <p class="wine-description">${t.description}</p>
        <div class="price-row"><span>75 cl</span><strong>${t.priceSoon}</strong></div>
      </div>
    </article>`).join("");
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
