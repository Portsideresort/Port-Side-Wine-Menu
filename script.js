const translations = {
  de: {
    menu: "Weinkarte",
    subtitle: "Eine kuratierte Auswahl für besondere Momente",
    intro: "Entdecken Sie unsere sorgfältig ausgewählte Kollektion aus der Türkei und Italien.",
    all: "Alle Weine",
    white: "Weißwein",
    rose: "Roséwein",
    red: "Rotwein",
    bottle: "Flasche",
    wines: "Weine",
    guidanceTitle: "Eine Empfehlung gewünscht?",
    guidance: "Unser Serviceteam hilft Ihnen gerne, den passenden Wein für Ihren Abend auszuwählen.",
    close: "Schließen",
    producer: "Produzent",
    origin: "Herkunft",
    grapes: "Rebsorte",
    source: "Produktquelle ↗",
    unavailable: "Information wird geprüft",
    clickForDetails: "Details anzeigen"
  },
  en: {
    menu: "Wine Menu",
    subtitle: "A curated collection for memorable moments",
    intro: "Discover our carefully selected collection from Türkiye and Italy.",
    all: "All wines",
    white: "White",
    rose: "Rosé",
    red: "Red",
    bottle: "Bottle",
    wines: "Wines",
    guidanceTitle: "Would you like a recommendation?",
    guidance: "Our service team will be delighted to help you choose the perfect wine for your evening.",
    close: "Close",
    producer: "Producer",
    origin: "Origin",
    grapes: "Grapes",
    source: "Product source ↗",
    unavailable: "Information being verified",
    clickForDetails: "View details"
  },
  tr: {
    menu: "Şarap Menüsü",
    subtitle: "Unutulmaz anlar için özenle seçilmiş bir koleksiyon",
    intro: "Türkiye ve İtalya’dan özenle seçilmiş koleksiyonumuzu keşfedin.",
    all: "Tüm şaraplar",
    white: "Beyaz",
    rose: "Roze",
    red: "Kırmızı",
    bottle: "Şişe",
    wines: "Şarap",
    guidanceTitle: "Tavsiye ister misiniz?",
    guidance: "Servis ekibimiz, geceniz için en uygun şarabı seçmenize memnuniyetle yardımcı olacaktır.",
    close: "Kapat",
    producer: "Üretici",
    origin: "Üretim yeri",
    grapes: "Üzüm",
    source: "Ürün kaynağı ↗",
    unavailable: "Bilgi doğrulanıyor",
    clickForDetails: "Ayrıntıları göster"
  },
  ru: {
    menu: "Винная карта",
    subtitle: "Изысканная коллекция для незабываемых моментов",
    intro: "Откройте для себя нашу тщательно подобранную коллекцию из Турции и Италии.",
    all: "Все вина",
    white: "Белое",
    rose: "Розовое",
    red: "Красное",
    bottle: "Бутылка",
    wines: "Вина",
    guidanceTitle: "Нужна рекомендация?",
    guidance: "Наша команда с удовольствием поможет вам выбрать идеальное вино для вашего вечера.",
    close: "Закрыть",
    producer: "Производитель",
    origin: "Регион",
    grapes: "Сорт винограда",
    source: "Источник ↗",
    unavailable: "Информация проверяется",
    clickForDetails: "Подробнее"
  }
};

const wines = [
  { id: 1, brand: "Doluca", name: "Doluca Kalecik Karası", category: "red", price: 25, image: "assets/wines/dlc-kalecik.png", producer: "Doluca", origin: "Ankara / Türkiye", grapes: "Kalecik Karası", source: "https://www.dolucawines.com/products/our-wines-detail/32/dlc-kalecik-karasi" },
  { id: 2, brand: "Doluca", name: "Doluca Shiraz", category: "red", price: 24, image: "assets/wines/dlc-shiraz.png", producer: "Doluca", origin: "Denizli / Türkiye", grapes: "Shiraz", source: "https://www.dolucawines.com/products/our-wines-detail/33/dlc-shiraz" },
  { id: 3, brand: "Doluca", name: "Doluca Sarafin Chardonnay", category: "white", price: 65, image: "assets/wines/sarafin-chardonnay.png", producer: "Sarafin · Doluca", origin: "Saros / Türkiye", grapes: "Chardonnay", source: "https://www.dolucawines.com/products/our-wines-detail/28/sarafin-chardonnay" },
  { id: 4, brand: "Doluca", name: "Doluca Sarafin Merlot", category: "red", price: 65, image: "assets/wines/sarafin-merlot.png", producer: "Sarafin · Doluca", origin: "Saros / Türkiye", grapes: "Merlot", source: "https://www.dolucawines.com/products/our-wines-detail/30/sarafin-merlot" },
  { id: 5, brand: "Doluca", name: "Sarafin Merlot Cabernet Franc", category: "red", price: 63, producer: "Sarafin · Doluca", origin: "Saros / Türkiye", grapes: "Merlot + Cabernet Franc" },
  { id: 6, brand: "Doluca", name: "Doluca Sarafin Sauvignon Blanc", category: "white", price: 63, image: "assets/wines/sarafin-sauvignon.png", producer: "Sarafin · Doluca", origin: "Saros / Türkiye", grapes: "Sauvignon Blanc", source: "https://www.dolucawines.com/products/our-wines-detail/36/sarafin-sauvignon-blanc" },
  { id: 7, brand: "Doluca", name: "Doluca Sarafin Shiraz", category: "red", price: 65, image: "assets/wines/sarafin-shiraz.png", producer: "Sarafin · Doluca", origin: "Saros / Türkiye", grapes: "Shiraz", source: "https://www.dolucawines.com/products/our-wines-detail/244/sarafin-shiraz-" },
  { id: 8, brand: "Pamukkale", name: "Anfora Blush Rosé", category: "rose", price: 32, image: "assets/wines/anfora-blush.jpg", producer: "Pamukkale", origin: "Denizli / Türkiye", grapes: "Kalecik Karası", source: "https://iyisarap.plus/products/pamukkale-anfora-blush" },
  { id: 9, brand: "Kayra", name: "Buzbağ Kırmızı Klasik", category: "red", price: 13, image: "assets/wines/buzbag-red.jpg", producer: "Kayra", origin: "Doğu Anadolu / Türkiye", grapes: "Öküzgözü + Boğazkere", source: "https://casamediterra.com/en/wines/buzbag-red/" },
  { id: 10, brand: "Kayra", name: "Buzbağ Özel Roze 2015", category: "rose", price: 13, producer: "Kayra", origin: null, grapes: null },
  { id: 11, brand: "Kayra", name: "Buzbağ Rezerv Beyaz 2023", category: "white", price: 22, image: "assets/wines/buzbag-reserve-white-correct.jpg", producer: "Kayra", origin: "Nevşehir & Tokat / Türkiye", grapes: "Emir + Narince", source: "https://ratcliffewines.com/product/kayra-buzbag-rezerv-white/" },
  { id: 12, brand: "Kayra", name: "Leona Blush Rosé 2024", category: "rose", price: 17, image: "assets/wines/leona-blush.jpeg", producer: "Kayra", origin: "Trakya / Türkiye", grapes: "Shiraz (Syrah) + Kalecik Karası", source: "https://www.vivino.com/US/en/kayra-leona-blush/w/1740316" },
  { id: 13, brand: "Kayra", name: "Terra V.S.K Narince", category: "white", price: 19, image: "assets/wines/terra-narince.jpg", producer: "Kayra", origin: "Tokat / Türkiye", grapes: "Narince", source: "https://www.internationalwinechallenge.com/canopy/beverage_details?wid=184909" },
  { id: 14, brand: "Doluca", name: "Doluca Cabernet Sauvignon Merlot", category: "red", price: 19, image: "assets/wines/dlc-cabernet-merlot.png", producer: "Doluca", origin: "Trakya / Türkiye", grapes: "Cabernet Sauvignon + Merlot", source: "https://www.dolucawines.com/products/our-wines-detail/34/dlc-cabernet-sauvignon-merlot" },
  { id: 15, brand: "Kayra", name: "Terra V.S.K ÖB", category: "red", price: 19, producer: "Kayra", origin: "Doğu Anadolu / Türkiye", grapes: "Öküzgözü + Boğazkere" },
  { id: 16, brand: "Kayra", name: "Kır. V.S.K", category: "red", price: 19, producer: "Kayra", origin: null, grapes: null },
  { id: 17, brand: "Kayra", name: "Terra Rosé V.S.K KKK", category: "rose", price: 19, image: "assets/wines/terra-rose.jpg", producer: "Kayra", origin: "Denizli / Türkiye", grapes: "Kalecik Karası" },
  { id: 18, brand: "Kayra", name: "Terra V.S.K SHR", category: "red", price: 19, producer: "Kayra", origin: "Denizli / Türkiye", grapes: "Shiraz" },
  { id: 19, brand: "Cielo e Terra", name: "Cielo Sauvignon", category: "white", price: 22, image: "assets/wines/cielo-sauvignon.jpg", producer: "Cielo e Terra", origin: "Veneto IGT / Italia", grapes: "Sauvignon Blanc", source: "https://cieloeterravini.com/en/wines/cielo-e-terra/" },
  { id: 20, brand: "Cielo e Terra", name: "Cielo Chardonnay", category: "white", price: 22, image: "assets/wines/cielo-chardonnay.jpg", producer: "Cielo e Terra", origin: "Veneto IGT / Italia", grapes: "Chardonnay", source: "https://cieloeterravini.com/en/wines/cielo-e-terra/" },
  { id: 21, brand: "Cielo e Terra", name: "Cielo Pinot Grigio", category: "white", price: 22, image: "assets/wines/cielo-pinot-grigio.jpg", producer: "Cielo e Terra", origin: "Delle Venezie DOC / Italia", grapes: "Pinot Grigio", source: "https://cieloeterravini.com/en/wines/cielo-e-terra/" },
  { id: 22, brand: "Cielo e Terra", name: "Cielo Pinot Noir", category: "red", price: 22, image: "assets/wines/cielo-pinot-noir.jpg", producer: "Cielo e Terra", origin: "Tre Venezie IGT / Italia", grapes: "Pinot Noir", source: "https://cieloeterravini.com/en/wines/cielo-e-terra/" }
];

const categoryOrder = ["red", "white", "rose"];

let language = "de";
let activeCategory = "all";
let activeWineId = null;

const byId = (id) => document.getElementById(id);

function bottleVisual(wine, large = false) {
  if (wine.image) {
    return `<img src="${wine.image}" alt="${wine.name}" loading="lazy" />`;
  }

  return `<span class="bottle-placeholder${large ? " bottle-placeholder-large" : ""}" aria-hidden="true"><i></i></span>`;
}

function wineRow(wine, t) {
  return `
    <article class="menu-item" tabindex="0" role="button" data-wine-id="${wine.id}" aria-label="${wine.name} · ${t.clickForDetails}">
      <span class="wine-image-button">${bottleVisual(wine)}</span>
      <div class="menu-item-copy">
        <p class="wine-brand">${wine.brand}</p>
        <h3>${wine.name}</h3>
        <small class="detail-hint">${t.clickForDetails}</small>
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
  const categories = activeCategory === "all" ? categoryOrder : [activeCategory];

  byId("wine-list").innerHTML = categories.map((category) => {
    const groupedWines = wines.filter((wine) => wine.category === category);
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

  document.querySelectorAll("[data-wine-id]").forEach((item) => {
    const open = () => openWineDialog(Number(item.dataset.wineId));
    item.addEventListener("click", open);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function openWineDialog(wineId) {
  const wine = wines.find((item) => item.id === wineId);
  if (!wine) return;

  activeWineId = wineId;
  const t = translations[language];
  byId("dialog-visual").innerHTML = bottleVisual(wine, true);
  byId("dialog-name").textContent = wine.name;
  byId("dialog-category").textContent = t[wine.category];
  byId("dialog-producer").textContent = wine.producer || t.unavailable;
  byId("dialog-origin").textContent = wine.origin || t.unavailable;
  byId("dialog-grapes").textContent = wine.grapes || t.unavailable;
  byId("dialog-price").textContent = `€${wine.price}`;

  const source = byId("dialog-source");
  source.textContent = t.source;
  source.hidden = !wine.source;
  if (wine.source) source.href = wine.source;

  const dialog = byId("wine-dialog");
  if (!dialog.open) dialog.showModal();
}

function updateDialogLanguage() {
  const t = translations[language];
  byId("dialog-close").setAttribute("aria-label", t.close);
  byId("label-producer").textContent = t.producer;
  byId("label-origin").textContent = t.origin;
  byId("label-grapes").textContent = t.grapes;
  byId("label-bottle").textContent = t.bottle;
  if (activeWineId && byId("wine-dialog").open) openWineDialog(activeWineId);
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
  updateDialogLanguage();
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

byId("dialog-close").addEventListener("click", () => byId("wine-dialog").close());
byId("wine-dialog").addEventListener("click", (event) => {
  if (event.target === byId("wine-dialog")) byId("wine-dialog").close();
});

updateDialogLanguage();
renderWines();
