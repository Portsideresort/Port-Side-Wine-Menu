const translations = {
  de: {
    menu: "Weinkarte",
    subtitle: "Eine kuratierte Auswahl für besondere Momente",
    intro: "Von den uralten Weinbergen Anatoliens über die meeresgekühlten Hänge Thrakiens bis zu den Tälern von Kalecik sowie den Hochlagen von Tokat, Kappadokien und Denizli: Unsere Auswahl zeigt, wie einheimische und internationale Rebsorten durch Boden und Klima ihren eigenen Charakter entwickeln. Ergänzt wird dieses türkische Weinbauerbe durch die traditionsreiche Weinkultur Venetiens.",
    all: "Alle Weine", white: "Weißwein", rose: "Roséwein", red: "Rotwein",
    bottle: "Flasche", wines: "Weine", close: "Schließen", producer: "Produzent",
    origin: "Herkunft", grapes: "Rebsorten",
    clickForDetails: "Geschichte & Verkostung", storyTitle: "Geschichte des Weins",
    tasting: "Verkostungsprofil", service: "Servierempfehlung", backToMenu: "Zurück zur Weinkarte",
    guidanceTitle: "Eine Empfehlung gewünscht?",
    guidance: "Unser Serviceteam hilft Ihnen gerne, den passenden Wein für Ihren Abend auszuwählen."
  },
  en: {
    menu: "Wine Menu",
    subtitle: "A curated collection for memorable moments",
    intro: "From Anatolia’s ancient vineyards and Thrace’s sea-cooled slopes to the Kalecik valley and the high plateaus of Tokat, Cappadocia and Denizli, our collection reveals how indigenous and international grapes gain a distinctive identity from their climate and soil. Türkiye’s rich wine heritage is complemented by the long-established winemaking tradition of Veneto.",
    all: "All wines", white: "White", rose: "Rosé", red: "Red",
    bottle: "Bottle", wines: "Wines", close: "Close", producer: "Producer",
    origin: "Origin", grapes: "Grapes",
    clickForDetails: "Story & tasting notes", storyTitle: "The wine’s story",
    tasting: "Tasting profile", service: "Serving suggestion", backToMenu: "Back to wine menu",
    guidanceTitle: "Would you like a recommendation?",
    guidance: "Our service team will be delighted to help you choose the perfect wine for your evening."
  },
  tr: {
    menu: "Şarap Menüsü",
    subtitle: "Unutulmaz anlar için özenle seçilmiş bir koleksiyon",
    intro: "Anadolu’nun kadim bağlarından Trakya’nın deniz esintili yamaçlarına; Kalecik vadisinden Tokat, Kapadokya ve Denizli’nin yüksek platolarına uzanan seçkimiz, yerli ve uluslararası üzümlerin iklim ile topraktan kazandığı özgün karakteri yansıtır. Türkiye’nin köklü bağcılık mirası, Veneto’nun uzun yıllara dayanan İtalyan şarap geleneğiyle tamamlanır.",
    all: "Tüm şaraplar", white: "Beyaz", rose: "Roze", red: "Kırmızı",
    bottle: "Şişe", wines: "Şarap", close: "Kapat", producer: "Üretici",
    origin: "Üretim yeri", grapes: "Üzümler",
    clickForDetails: "Hikâye ve tadım notları", storyTitle: "Şarabın hikâyesi",
    tasting: "Tadım profili", service: "Servis önerisi", backToMenu: "Şarap menüsüne dön",
    guidanceTitle: "Tavsiye ister misiniz?",
    guidance: "Servis ekibimiz, geceniz için en uygun şarabı seçmenize memnuniyetle yardımcı olacaktır."
  },
  ru: {
    menu: "Винная карта",
    subtitle: "Изысканная коллекция для незабываемых моментов",
    intro: "От древних виноградников Анатолии и склонов Фракии, охлаждаемых морским бризом, до долины Каледжик и высокогорных плато Токата, Каппадокии и Денизли — наша коллекция показывает, как местные и международные сорта обретают неповторимый характер благодаря климату и почве. Богатое наследие Турции дополнено давней винодельческой традицией Венето.",
    all: "Все вина", white: "Белое", rose: "Розовое", red: "Красное",
    bottle: "Бутылка", wines: "Вина", close: "Закрыть", producer: "Производитель",
    origin: "Регион", grapes: "Сорта винограда",
    clickForDetails: "История и дегустация", storyTitle: "История вина",
    tasting: "Дегустационный профиль", service: "Рекомендация по подаче", backToMenu: "Вернуться к винной карте",
    guidanceTitle: "Нужна рекомендация?",
    guidance: "Наша команда с удовольствием поможет вам выбрать идеальное вино для вашего вечера."
  }
};

const L = (tr, en, de, ru) => ({ tr, en, de, ru });

const service = {
  red: L("16–18 °C’de; ızgara kırmızı etler, ağır soslu yemekler ve olgun peynirlerle.", "Serve at 16–18°C with grilled red meats, rich sauces and mature cheeses.", "Bei 16–18 °C zu gegrilltem roten Fleisch, kräftigen Saucen und gereiftem Käse.", "Подавайте при 16–18 °C к красному мясу на гриле, насыщенным соусам и выдержанным сырам."),
  white: L("8–11 °C’de; deniz ürünleri, beyaz etler, salatalar ve hafif başlangıçlarla.", "Serve at 8–11°C with seafood, white meats, salads and light starters.", "Bei 8–11 °C zu Meeresfrüchten, hellem Fleisch, Salaten und leichten Vorspeisen.", "Подавайте при 8–11 °C к морепродуктам, белому мясу, салатам и лёгким закускам."),
  rose: L("8–10 °C’de; mezeler, hafif makarnalar, salatalar ve gün batımı aperitifi olarak.", "Serve at 8–10°C with mezze, light pasta, salads or as a sunset aperitif.", "Bei 8–10 °C zu Mezze, leichter Pasta, Salaten oder als Aperitif zum Sonnenuntergang.", "Подавайте при 8–10 °C к мезе, лёгкой пасте, салатам или как аперитив на закате.")
};

const wines = [
  {
    id: 1, brand: "Doluca", model: "DLC Kalecik Karası", category: "red", price: 25,
    image: "assets/wines/dlc-kalecik-standard.webp", producer: "Doluca", origin: "Kalecik, Ankara · Türkiye", grapes: "Kalecik Karası",
    source: "https://www.dolucawines.com/products/our-wines-detail/32/dlc-kalecik-karasi",
    story: L("Kızılırmak’ın şekillendirdiği Kalecik yöresinde yetişen Kalecik Karası, meyvemsi canlılığını koruyacak şekilde işlenir. İnce kabuklu bu yerli üzüm, orta gövdeli ve zarif yapısıyla Anadolu kırmızılarının en karakterli örneklerinden birini verir.", "Grown around Kalecik, where the Kızılırmak River shapes the valley, this indigenous grape is handled to preserve its vivid fruit. Its thin skins create an elegant, medium-bodied expression of one of Anatolia’s signature red varieties.", "Im vom Kızılırmak geprägten Tal von Kalecik wird diese autochthone Rebsorte so verarbeitet, dass ihre lebendige Frucht erhalten bleibt. Die dünne Beerenschale ergibt einen eleganten, mittelkräftigen Ausdruck einer der charakteristischsten roten Sorten Anatoliens.", "В долине Каледжик, сформированной рекой Кызылырмак, местный сорт бережно перерабатывают, сохраняя живую фруктовость. Тонкая кожица ягод даёт элегантное вино среднего тела — яркий образец красных вин Анатолии."),
    notes: L("Vişne, kırmızı erik ve nar çağrışımları; yumuşak tanen, canlı asidite ve dengeli bitiş.", "Sour cherry, red plum and pomegranate; soft tannins, lively acidity and a balanced finish.", "Sauerkirsche, rote Pflaume und Granatapfel; weiches Tannin, lebendige Säure und ausgewogener Nachhall.", "Вишня, красная слива и гранат; мягкие танины, живая кислотность и гармоничное послевкусие.")
  },
  {
    id: 2, brand: "Doluca", model: "DLC Shiraz", category: "red", price: 24,
    image: "assets/wines/dlc-shiraz-standard.webp", producer: "Doluca", origin: "Denizli · Türkiye", grapes: "Shiraz",
    source: "https://www.dolucawines.com/products/our-wines-detail/33/dlc-shiraz",
    story: L("Denizli’nin güneşli, yüksek plato bağlarında olgunlaşan Shiraz üzümleri güçlü renk ve aromaya ulaşır. Şarap, yapısını yuvarlamak ve baharat katmanlarını derinleştirmek için dört ay Fransız meşe fıçılarında dinlendirilir.", "Shiraz ripens to deep colour and aroma on Denizli’s sunny high plateaus. Four months in French oak rounds the structure and adds depth to its spicy character.", "Auf den sonnigen Hochplateaus von Denizli reift Shiraz zu tiefer Farbe und intensiver Aromatik. Vier Monate in französischer Eiche runden die Struktur ab und vertiefen die Würze.", "На солнечных высоких плато Денизли Шираз набирает насыщенный цвет и аромат. Четыре месяца во французском дубе смягчают структуру и углубляют пряный характер."),
    notes: L("Böğürtlen, siyah erik, karabiber ve hafif vanilya; dolgun, tanenli ve kalıcı.", "Blackberry, black plum, pepper and gentle vanilla; full, tannic and persistent.", "Brombeere, schwarze Pflaume, Pfeffer und feine Vanille; vollmundig, tanninreich und anhaltend.", "Ежевика, чёрная слива, перец и лёгкая ваниль; полнотелое, танинное и продолжительное.")
  },
  {
    id: 3, brand: "Doluca", model: "Sarafin Chardonnay", category: "white", price: 65,
    image: "assets/wines/sarafin-chardonnay-standard.webp", producer: "Sarafin · Doluca", origin: "Saros · Türkiye", grapes: "Chardonnay",
    source: "https://www.dolucawines.com/products/our-wines-detail/28/sarafin-chardonnay",
    story: L("Saros bağlarının denizden gelen serin rüzgârları olgunlaşmayı yavaşlatır ve asiditeyi korur. Nazikçe preslenen Chardonnay, küçük Fransız meşe fıçılarında tortu üzerinde fermantasyon ve malolaktik dönüşüm geçirerek yaklaşık 12 ay dinlendirilir.", "Cool sea breezes slow ripening in Saros and protect the grapes’ acidity. Gently pressed Chardonnay ferments on its lees in small French-oak barrels, undergoes malolactic conversion and matures for about 12 months.", "Kühle Meeresbrisen verlangsamen in Saros die Reife und bewahren die Säure. Der sanft gepresste Chardonnay vergärt auf der Hefe in kleinen französischen Barriques, durchläuft den biologischen Säureabbau und reift etwa zwölf Monate.", "Прохладные морские бризы Сароса замедляют созревание и сохраняют кислотность. Мягко прессованный Шардоне бродит на осадке в небольших французских бочках, проходит малолактику и выдерживается около 12 месяцев."),
    notes: L("Olgun sarı meyveler, narenciye, tereyağı, vanilya ve ince tost; kadifemsi ve uzun.", "Ripe yellow fruit, citrus, butter, vanilla and fine toast; velvety with a long finish.", "Reife gelbe Früchte, Zitrus, Butter, Vanille und feiner Toast; samtig und lang.", "Спелые жёлтые фрукты, цитрус, сливочное масло, ваниль и тонкий тост; бархатистое и долгое.")
  },
  {
    id: 4, brand: "Doluca", model: "Sarafin Merlot", category: "red", price: 65,
    image: "assets/wines/sarafin-merlot-standard.webp", producer: "Sarafin · Doluca", origin: "Saros · Türkiye", grapes: "Merlot",
    source: "https://www.dolucawines.com/products/our-wines-detail/30/sarafin-merlot",
    story: L("Saros’un deniz esintileri gündüz sıcaklığını dengeler, olgunlaşma süresini uzatır ve Merlot’nun meyve yoğunluğunu geliştirir. Şarap 225 litrelik Fransız meşe fıçılarında 12 ay dinlendirilerek kadifemsi ve karmaşık bir yapıya ulaşır.", "Saros sea breezes temper daytime heat, extend ripening and build Merlot’s fruit concentration. Twelve months in 225-litre French-oak barrels creates a velvety, layered wine.", "Die Meeresbrisen von Saros mildern die Tageshitze, verlängern die Reife und fördern die Fruchtkonzentration. Zwölf Monate in 225-Liter-Barriques aus französischer Eiche verleihen samtige Tiefe.", "Морские бризы Сароса смягчают дневную жару, продлевают созревание и усиливают фруктовость Мерло. 12 месяцев в 225-литровых французских барриках создают бархатистую многослойность."),
    notes: L("Erik, siyah kiraz, kakao ve vanilya; yuvarlak tanenler, dolgun gövde ve uzun bitiş.", "Plum, black cherry, cocoa and vanilla; rounded tannins, full body and a long finish.", "Pflaume, Schwarzkirsche, Kakao und Vanille; rundes Tannin, voller Körper und langer Nachhall.", "Слива, чёрная вишня, какао и ваниль; округлые танины, полное тело и долгое послевкусие.")
  },
  {
    id: 5, brand: "Doluca", model: "Sarafin Merlot · Cabernet Franc Rosé", category: "rose", price: 63,
    image: "assets/wines/sarafin-rose-standard.webp", producer: "Sarafin · Doluca", origin: "Saros · Türkiye", grapes: "Merlot + Cabernet Franc",
    source: "https://www.dolucawines.com/products/our-wines-detail/349/sarafin-rose",
    story: L("Saros bağlarında yetişen Merlot ve Cabernet Franc’ın yalnızca serbest akış şırası kullanılır; üzüm karakterini korumak için düşük sıcaklıkta fermantasyon uygulanır. Merlot ipeksi meyveyi, Cabernet Franc ise aromatik canlılığı ve omurgayı getirir.", "Only free-run juice from Saros-grown Merlot and Cabernet Franc is fermented at low temperature to preserve varietal purity. Merlot brings silky fruit while Cabernet Franc contributes aromatic lift and structure.", "Nur der frei ablaufende Most von Merlot und Cabernet Franc aus Saros wird kühl vergoren. Merlot bringt seidige Frucht, Cabernet Franc aromatische Frische und Struktur.", "Для низкотемпературного брожения используют только сусло-самотёк Мерло и Каберне Фран из Сароса. Мерло даёт шелковистый фрукт, а Каберне Фран — ароматическую свежесть и структуру."),
    notes: L("Menekşe, vişne, ahududu ve taze kırmızı meyveler; gevrek, ferah ve dengeli.", "Violet, sour cherry, raspberry and fresh red fruit; crisp, refreshing and balanced.", "Veilchen, Sauerkirsche, Himbeere und frische rote Früchte; knackig, erfrischend und ausgewogen.", "Фиалка, вишня, малина и свежие красные ягоды; хрустящее, освежающее и сбалансированное.")
  },
  {
    id: 6, brand: "Doluca", model: "Sarafin Sauvignon Blanc", category: "white", price: 63,
    image: "assets/wines/sarafin-sauvignon-standard.webp", producer: "Sarafin · Doluca", origin: "Saros · Türkiye", grapes: "Sauvignon Blanc",
    source: "https://www.dolucawines.com/products/our-wines-detail/36/sarafin-sauvignon-blanc",
    story: L("Saros bağlarından toplanan üzümler aromalarını korumak için soğutmalı araçlarla şaraphaneye taşınır. Düşük sıcaklıktaki fermantasyon, Sauvignon Blanc’ın canlı asiditesini ve taze bitkisel-meyvemsi karakterini öne çıkarır.", "Saros grapes travel to the winery in refrigerated vehicles to protect their aromas. Cool fermentation highlights Sauvignon Blanc’s lively acidity and fresh herbal-fruit character.", "Die Saros-Trauben gelangen gekühlt ins Weingut, damit ihre Aromen erhalten bleiben. Die kühle Gärung betont lebendige Säure und den frischen kräuterig-fruchtigen Charakter.", "Виноград из Сароса доставляют на винодельню в охлаждённых машинах, сохраняя аромат. Холодное брожение подчёркивает живую кислотность и свежий травяно-фруктовый характер."),
    notes: L("Greyfurt, yeşil elma, bektaşi üzümü ve taze otlar; parlak, mineral ve uzun.", "Grapefruit, green apple, gooseberry and fresh herbs; bright, mineral and long.", "Grapefruit, grüner Apfel, Stachelbeere und frische Kräuter; klar, mineralisch und lang.", "Грейпфрут, зелёное яблоко, крыжовник и свежие травы; яркое, минеральное и долгое.")
  },
  {
    id: 7, brand: "Doluca", model: "Sarafin Shiraz", category: "red", price: 65,
    image: "assets/wines/sarafin-shiraz-standard.webp", producer: "Sarafin · Doluca", origin: "Saros · Türkiye", grapes: "Shiraz",
    source: "https://www.dolucawines.com/products/our-wines-detail/244/sarafin-shiraz-",
    story: L("Saros bağlarının uzun olgunlaşma dönemi Shiraz’a yoğun renk ve baharatlı meyve kazandırır. Uzun maserasyonun ardından şarap Fransız ve Amerikan meşe fıçılarında 12 ay dinlendirilerek güçlü fakat yuvarlak bir dengeye ulaşır.", "Saros’s extended growing season gives Shiraz intense colour and spiced fruit. Long maceration is followed by 12 months in French and American oak, building power with a rounded balance.", "Die lange Vegetationsperiode von Saros verleiht Shiraz intensive Farbe und würzige Frucht. Auf eine lange Maischestandzeit folgen zwölf Monate in französischer und amerikanischer Eiche.", "Долгий сезон созревания в Саросе придаёт Ширазу насыщенный цвет и пряные фрукты. После продолжительной мацерации вино 12 месяцев выдерживают во французском и американском дубе."),
    notes: L("Böğürtlen, karadut, karabiber, is ve tatlı baharat; güçlü, yuvarlak ve çok uzun.", "Blackberry, mulberry, pepper, smoke and sweet spice; powerful, rounded and very long.", "Brombeere, Maulbeere, Pfeffer, Rauch und süße Gewürze; kraftvoll, rund und sehr lang.", "Ежевика, шелковица, перец, дым и сладкие специи; мощное, округлое и очень долгое.")
  },
  {
    id: 8, brand: "Pamukkale", model: "Anfora Blush Rosé", category: "rose", price: 32,
    image: "assets/wines/anfora-blush-standard.webp", producer: "Pamukkale", origin: "Denizli · Türkiye", grapes: "Kalecik Karası",
    source: "https://iyisarap.plus/products/pamukkale-anfora-blush",
    story: L("Denizli’nin gündüz-gece sıcaklık farkı, Kalecik Karası üzümünde hem aromatik olgunluk hem de canlı asidite oluşturur. Kısa kabuk teması ve serin fermantasyon, narin somon rengini ve taze meyveyi korur.", "Denizli’s day-to-night temperature swing develops both aromatic ripeness and bright acidity in Kalecik Karası. Brief skin contact and cool fermentation preserve its delicate salmon colour and fresh fruit.", "Die Temperaturunterschiede zwischen Tag und Nacht in Denizli fördern aromatische Reife und frische Säure. Kurzer Schalenkontakt und kühle Gärung bewahren die zarte Lachsfarbe.", "Перепад дневных и ночных температур в Денизли даёт Каледжик Карасы ароматическую зрелость и живую кислотность. Короткий контакт с кожицей и холодное брожение сохраняют нежный лососевый цвет."),
    notes: L("Çilek, ahududu, gül yaprağı ve narenciye; hafif, canlı ve ferah.", "Strawberry, raspberry, rose petal and citrus; light, lively and refreshing.", "Erdbeere, Himbeere, Rosenblatt und Zitrus; leicht, lebendig und erfrischend.", "Клубника, малина, лепесток розы и цитрус; лёгкое, живое и освежающее.")
  },
  {
    id: 9, brand: "Kayra", model: "Buzbağ Klasik", category: "red", price: 13,
    image: "assets/wines/buzbag-red-standard.webp", producer: "Kayra", origin: "Elazığ & Diyarbakır · Türkiye", grapes: "Öküzgözü + Boğazkere",
    source: "https://casamediterra.com/en/wines/buzbag-red/",
    story: L("Doğu Anadolu’nun iki kadim üzümü aynı kupajda buluşur: Elazığ’ın yüksek bağlarından Öküzgözü canlı meyve ve asiditeyi, Diyarbakır’ın sıcak-kurak koşullarından Boğazkere güçlü tanen ve baharatı taşır. Buzbağ bu karşıtlığı dengeli, klasik bir Anadolu kırmızısına dönüştürür.", "Two ancient eastern Anatolian grapes meet in one blend: high-grown Öküzgözü from Elazığ contributes bright fruit and acidity, while sun-loving Boğazkere from Diyarbakır brings tannin and spice. Buzbağ turns the contrast into a balanced Anatolian classic.", "Zwei uralte Rebsorten Ostanatoliens treffen aufeinander: Öküzgözü aus den Höhenlagen Elazığs bringt Frucht und Säure, Boğazkere aus dem warmen Diyarbakır Tannin und Würze. Daraus entsteht ein ausgewogener anatolischer Klassiker.", "Два древних сорта Восточной Анатолии соединяются в одном купаже: высокогорный Окюзгёзю из Элязыга даёт фрукт и кислотность, а Богазкере из жаркого Диярбакыра — танины и пряность. Получается сбалансированная анатолийская классика."),
    notes: L("Vişne, karadut, kuru erik, karabiber ve topraksı tonlar; orta gövdeli, diri ve baharatlı.", "Sour cherry, mulberry, dried plum, pepper and earthy tones; medium-bodied, fresh and spicy.", "Sauerkirsche, Maulbeere, Trockenpflaume, Pfeffer und erdige Töne; mittelkräftig, frisch und würzig.", "Вишня, шелковица, чернослив, перец и землистые оттенки; среднее тело, свежесть и пряность.")
  },
  {
    id: 10, brand: "Kayra", model: "Buzbağ Öküzgözü Rosé 2015", category: "rose", price: 13,
    image: "assets/wines/buzbag-rose-standard.webp", producer: "Kayra", origin: "Elazığ · Türkiye", grapes: "Öküzgözü",
    source: "https://galeri.uludagsozluk.com/r/an%C4%B1n-g%C3%B6r%C3%BCnt%C3%BCs%C3%BC-1524427/",
    story: L("Elazığ’ın yüksek rakımlı bağlarında yetişen Öküzgözü, doğal asiditesi sayesinde roze stilde de canlılığını korur. 2015 etiketli bu özel şişe, üzümün kırmızı meyve karakterini hafif ve serin bir yorumla sunar.", "High-altitude Öküzgözü from Elazığ retains excellent freshness in a rosé style thanks to its natural acidity. This special 2015-labelled bottle presents the grape’s red-fruit character in a lighter, chilled expression.", "Öküzgözü aus den Höhenlagen Elazığs bewahrt dank natürlicher Säure auch als Rosé viel Frische. Die besondere Abfüllung mit Jahrgang 2015 zeigt die rote Frucht der Rebsorte in einem leichten, kühlen Stil.", "Высокогорный Окюзгёзю из Элязыга благодаря природной кислотности сохраняет свежесть и в стиле розе. Особая бутылка с этикеткой 2015 года показывает красные ягоды сорта в лёгкой прохладной интерпретации."),
    notes: L("Çilek, vişne, karpuz ve gül; canlı asidite, hafif gövde ve ferah bitiş.", "Strawberry, sour cherry, watermelon and rose; bright acidity, light body and a refreshing finish.", "Erdbeere, Sauerkirsche, Wassermelone und Rose; lebendige Säure, leichter Körper und frischer Nachhall.", "Клубника, вишня, арбуз и роза; яркая кислотность, лёгкое тело и освежающее послевкусие.")
  },
  {
    id: 11, brand: "Kayra", model: "Buzbağ Rezerv Beyaz 2023", category: "white", price: 22,
    image: "assets/wines/buzbag-reserve-white-standard.webp", producer: "Kayra", origin: "Nevşehir & Tokat · Türkiye", grapes: "Emir + Narince",
    source: "https://www.iwsc.net/results/detail/141538/kayra-buzbag-rezerv-beyaz-emir-narince-2021",
    story: L("Kapadokya’nın volkanik topraklarında yetişen Emir’in mineral, gergin yapısı; Tokat’ın Narince üzümünün çiçeksi ve meyvemsi zenginliğiyle birleşir. Rezerv yaklaşımı, dokuyu derinleştirirken iki yerli üzümün tazeliğini korumayı amaçlar.", "Mineral, taut Emir from Cappadocia’s volcanic soils meets the floral and fruity generosity of Tokat’s Narince. The reserve approach adds texture while preserving the freshness of both indigenous grapes.", "Mineralischer, straffer Emir aus den vulkanischen Böden Kappadokiens trifft auf den blumig-fruchtigen Narince aus Tokat. Der Reserve-Stil vertieft die Textur und bewahrt zugleich die Frische beider Sorten.", "Минеральный и собранный Эмир с вулканических почв Каппадокии соединяется с цветочно-фруктовым Нариндже из Токата. Резервный стиль добавляет текстуру, сохраняя свежесть обоих местных сортов."),
    notes: L("Limon kabuğu, kayısı, portakal çiçeği ve ıslak taş; katmanlı, canlı ve mineral.", "Lemon peel, apricot, orange blossom and wet stone; layered, lively and mineral.", "Zitronenschale, Aprikose, Orangenblüte und nasser Stein; vielschichtig, lebendig und mineralisch.", "Лимонная цедра, абрикос, апельсиновый цвет и мокрый камень; многослойное, живое и минеральное.")
  },
  {
    id: 12, brand: "Kayra", model: "Leona Blush Rosé 2024", category: "rose", price: 17,
    image: "assets/wines/leona-blush-standard.webp", producer: "Kayra", origin: "Trakya · Türkiye", grapes: "Kalecik Karası + Shiraz",
    source: "https://degustasyon.net/leona-blush-2020-tekirdag/",
    story: L("Trakya’da yetişen Kalecik Karası ile Shiraz, aromatik ve kolay içimli bir blush stili için bir araya gelir. Serin fermantasyon meyve tazeliğini öne çıkarırken zarif renk ve yumuşak dokuyu korur.", "Thracian Kalecik Karası and Shiraz combine in an aromatic, approachable blush style. Cool fermentation favours fresh fruit while retaining a delicate colour and soft texture.", "Kalecik Karası und Shiraz aus Thrakien verbinden sich zu einem aromatischen, zugänglichen Blush. Kühle Gärung betont frische Frucht, zarte Farbe und weiche Textur.", "Фракийские Каледжик Карасы и Шираз соединяются в ароматном, лёгком стиле blush. Холодное брожение подчёркивает свежие фрукты, нежный цвет и мягкую текстуру."),
    notes: L("Olgun çilek, böğürtlen, kan portakalı ve ahududu; yumuşak, meyvemsi ve ferah.", "Ripe strawberry, blackberry, blood orange and raspberry; soft, fruity and refreshing.", "Reife Erdbeere, Brombeere, Blutorange und Himbeere; weich, fruchtig und erfrischend.", "Спелая клубника, ежевика, красный апельсин и малина; мягкое, фруктовое и освежающее.")
  },
  {
    id: 13, brand: "Kayra", model: "Terra Narince", category: "white", price: 19,
    image: "assets/wines/terra-narince-standard.webp", producer: "Kayra", origin: "Tokat · Türkiye", grapes: "Narince",
    source: "https://www.internationalwinechallenge.com/canopy/beverage_details?wid=135558",
    story: L("Tokat’ın yüksek, serin bağlarında yetişen Narince; kalın kabuğu, canlı asiditesi ve aromatik derinliğiyle Anadolu’nun seçkin beyaz üzümlerindendir. Terra serisi üzümün yöresel karakterini temiz ve dengeli bir yorumla şişeye taşır.", "Grown in Tokat’s cool high vineyards, thick-skinned Narince is one of Anatolia’s distinguished white grapes, valued for acidity and aromatic depth. Terra gives a clean, balanced expression of its regional identity.", "Narince aus den kühlen Höhenlagen von Tokat zählt dank kräftiger Schale, lebendiger Säure und aromatischer Tiefe zu Anatoliens bedeutenden weißen Sorten. Terra bringt den regionalen Charakter klar und ausgewogen ins Glas.", "Нариндже из прохладных высокогорных виноградников Токата — один из выдающихся белых сортов Анатолии, ценимый за кислотность и глубину аромата. Terra чисто и сбалансированно передаёт его региональный характер."),
    notes: L("Limon kabuğu, beyaz çiçek, yeşil elma ve tuzlu mineralite; diri ve temiz bitişli.", "Lemon peel, white flowers, green apple and saline minerality; vivid with a clean finish.", "Zitronenschale, weiße Blüten, grüner Apfel und salzige Mineralität; lebendig und klar im Nachhall.", "Лимонная цедра, белые цветы, зелёное яблоко и солоноватая минеральность; живое и чистое.")
  },
  {
    id: 14, brand: "Doluca", model: "DLC Cabernet Sauvignon · Merlot", category: "red", price: 19,
    image: "assets/wines/dlc-cabernet-merlot-standard.webp", producer: "Doluca", origin: "Trakya · Türkiye", grapes: "Cabernet Sauvignon + Merlot",
    source: "https://www.dolucawines.com/products/our-wines-detail/34/dlc-cabernet-sauvignon-merlot",
    story: L("Trakya’nın deniz etkili ikliminde olgunlaşan iki seçkin üzüm aynı kupajda buluşur. Cabernet Sauvignon gövde, tanen ve omurgayı; Merlot olgun meyve ve yumuşaklığı getirir. Şarap 225 litrelik Fransız meşe fıçılarında altı ay dinlendirilerek aromalar bütünleştikten sonra özenle şişelenir.", "Two noble grapes ripened in Thrace’s maritime-influenced climate meet in one blend. Cabernet Sauvignon supplies body, tannin and structure; Merlot adds ripe fruit and softness. Six months in 225-litre French-oak barrels integrates the aromas before careful bottling.", "Zwei edle Rebsorten aus dem maritim geprägten Klima Thrakiens vereinen sich: Cabernet Sauvignon bringt Körper, Tannin und Struktur, Merlot reife Frucht und Geschmeidigkeit. Sechs Monate in 225-Liter-Barriques aus französischer Eiche verbinden die Aromen vor der Abfüllung.", "Два благородных сорта, созревших в морском климате Фракии, соединяются в одном купаже. Каберне Совиньон даёт тело, танины и структуру, Мерло — спелый фрукт и мягкость. Шесть месяцев во французских барриках объёмом 225 л объединяют ароматы перед розливом."),
    notes: L("Siyah frenk üzümü, erik, vişne, sedir ve vanilya; dengeli tanen, dolgun gövde ve kalıcı bitiş.", "Blackcurrant, plum, sour cherry, cedar and vanilla; balanced tannins, full body and a persistent finish.", "Schwarze Johannisbeere, Pflaume, Sauerkirsche, Zeder und Vanille; ausgewogenes Tannin, voller Körper und langer Nachhall.", "Чёрная смородина, слива, вишня, кедр и ваниль; сбалансированные танины, полное тело и стойкое послевкусие.")
  },
  {
    id: 15, brand: "Kayra", model: "Terra Öküzgözü · Boğazkere", category: "red", price: 19,
    image: "assets/wines/terra-ob-standard.webp", producer: "Kayra", origin: "Elazığ & Diyarbakır · Türkiye", grapes: "Öküzgözü + Boğazkere",
    source: "https://www.vivino.com/SE/en/kayra-terra-okuzgozu-bogazkere/w/1294765",
    story: L("Elazığ’ın meyvemsi ve yüksek asitli Öküzgözü üzümü, Diyarbakır’ın güçlü ve tanenli Boğazkere’siyle tamamlanır. Her üzüm kendi yöresindeki iklimde olgunlaşır; kupajda canlı meyve, yapı ve baharat dengelenir.", "Fruity, high-acid Öküzgözü from Elazığ is completed by firm, tannic Boğazkere from Diyarbakır. Each grape ripens in its natural region before the blend balances vivid fruit, structure and spice.", "Fruchtiger, säurebetonter Öküzgözü aus Elazığ wird von kräftigem, tanninreichem Boğazkere aus Diyarbakır ergänzt. Im Blend verbinden sich lebendige Frucht, Struktur und Würze.", "Фруктовый и кислотный Окюзгёзю из Элязыга дополняется мощным танинным Богазкере из Диярбакыра. В купаже соединяются яркий фрукт, структура и пряность."),
    notes: L("Karadut, vişne, siyah erik, yeşil biber ve toprak; orta-dolgun gövde ve belirgin tanen.", "Mulberry, sour cherry, black plum, green pepper and earth; medium-full body and marked tannin.", "Maulbeere, Sauerkirsche, schwarze Pflaume, grüner Pfeffer und Erde; mittelkräftig bis voll mit markantem Tannin.", "Шелковица, вишня, чёрная слива, зелёный перец и земля; средне-полное тело и заметные танины.")
  },
  {
    id: 16, brand: "Kayra", model: "Terra Kalecik Karası", category: "red", price: 19,
    image: "assets/wines/terra-kalecik-standard.webp", producer: "Kayra", origin: "Denizli · Türkiye", grapes: "Kalecik Karası",
    story: L("Terra’nın kırmızı varietal seçkisi, Denizli’nin güneşli fakat geceleri serinleyen bağlarında yetişen Kalecik Karası’nın zarif yönünü öne çıkarır. Kontrollü fermantasyonla meyve tazeliği, ince tanen ve yöresel baharat karakteri korunur.", "Terra’s red varietal selection highlights the elegant side of Kalecik Karası grown in Denizli’s sunny vineyards and cool nights. Controlled fermentation retains fresh fruit, fine tannins and regional spice.", "Terras rote Rebsortenlinie zeigt die elegante Seite des Kalecik Karası aus den sonnigen, nachts kühlen Lagen von Denizli. Kontrollierte Gärung bewahrt Frische, feines Tannin und regionale Würze.", "Красная сортовая серия Terra раскрывает элегантность Каледжик Карасы из солнечных виноградников Денизли с прохладными ночами. Контролируемое брожение сохраняет свежий фрукт, тонкие танины и местную пряность."),
    notes: L("Kiraz, vişne, nar ve ince baharat; zarif gövde, canlı asidite ve ipeksi tanen.", "Cherry, sour cherry, pomegranate and fine spice; elegant body, lively acidity and silky tannin.", "Kirsche, Sauerkirsche, Granatapfel und feine Würze; eleganter Körper, lebendige Säure und seidiges Tannin.", "Вишня, кислая вишня, гранат и тонкие специи; элегантное тело, живая кислотность и шелковистые танины.")
  },
  {
    id: 17, brand: "Kayra", model: "Terra Kalecik Karası Rosé", category: "rose", price: 19,
    image: "assets/wines/terra-rose-standard.webp", producer: "Kayra", origin: "Denizli · Türkiye", grapes: "Kalecik Karası",
    source: "https://turkishwineisfantastic.com/2019/08/19/kayra-terra-kalecik-karasi-roze-2018/",
    story: L("Denizli’nin Güney Platosu’nda olgunlaşan Kalecik Karası, taze meyveyi ve canlı asiditeyi koruyan bir roze stilde yorumlanır. Kısa kabuk teması üzümün rengini zarifçe taşırken aromatik derinliğini kaybetmez.", "Kalecik Karası ripened on Denizli’s southern plateau is interpreted in a rosé style that preserves fresh fruit and lively acidity. Brief skin contact captures its delicate colour without losing aromatic depth.", "Kalecik Karası vom südlichen Plateau Denizlis wird als Rosé ausgebaut, der Frische und Säure bewahrt. Kurzer Schalenkontakt gibt zarte Farbe, ohne aromatische Tiefe zu verlieren.", "Каледжик Карасы с южного плато Денизли выполнен в стиле розе, сохраняющем свежий фрукт и живую кислотность. Короткий контакт с кожицей даёт нежный цвет без потери аромата."),
    notes: L("Olgun çilek, ahududu, portakal çiçeği, yasemin ve ince vanilya; dolgun, ferah ve uzun.", "Ripe strawberry, raspberry, orange blossom, jasmine and gentle vanilla; generous, fresh and long.", "Reife Erdbeere, Himbeere, Orangenblüte, Jasmin und feine Vanille; voll, frisch und lang.", "Спелая клубника, малина, апельсиновый цвет, жасмин и лёгкая ваниль; насыщенное, свежее и долгое.")
  },
  {
    id: 18, brand: "Kayra", model: "Terra Shiraz", category: "red", price: 19,
    image: "assets/wines/terra-shiraz-standard.webp", producer: "Kayra", origin: "Denizli · Türkiye", grapes: "Shiraz",
    source: "https://degustasyon.net/kayra-terra-varietal-series-shiraz-2022-denizli/",
    story: L("Denizli Güney Platosu’nun yüksek rakımı, gündüz güneşi ile serin geceleri bir araya getirerek Shiraz’da renk ve baharat geliştirir. Yaklaşık altı aylık meşe dinlendirmesi, meyveyi örtmeden vanilya ve kavruk tonlarla yapıyı yuvarlar.", "The elevation of Denizli’s southern plateau combines bright days with cool nights, building colour and spice in Shiraz. Around six months of oak maturation rounds the structure with vanilla and toasted tones without masking the fruit.", "Die Höhe des südlichen Denizli-Plateaus verbindet sonnige Tage mit kühlen Nächten und fördert Farbe und Würze. Rund sechs Monate Holzreife runden die Struktur mit Vanille- und Röstaromen ab.", "Высота южного плато Денизли сочетает солнечные дни с прохладными ночами, формируя цвет и пряность Шираза. Около шести месяцев в дубе округляют структуру ванильными и поджаренными оттенками."),
    notes: L("Siyah erik, böğürtlen, karabiber, karanfil, vanilya ve hafif is; dengeli ve baharatlı.", "Black plum, blackberry, pepper, clove, vanilla and gentle smoke; balanced and spicy.", "Schwarze Pflaume, Brombeere, Pfeffer, Nelke, Vanille und feiner Rauch; ausgewogen und würzig.", "Чёрная слива, ежевика, перец, гвоздика, ваниль и лёгкий дым; сбалансированное и пряное.")
  },
  {
    id: 19, brand: "Cielo e Terra", model: "Cielo Sauvignon", category: "white", price: 22,
    image: "assets/wines/cielo-sauvignon-standard.webp", producer: "Cielo e Terra", origin: "Veneto IGT · Italia", grapes: "Sauvignon Blanc",
    source: "https://cieloeterravini.com/en/vini/page/3/",
    story: L("1908’e uzanan Cielo ailesi geleneğinin Veneto yorumudur. Bölgenin serin akşamları Sauvignon Blanc’ın doğal asiditesini ve aromatik canlılığını korur; taze, doğrudan ve modern bir beyaz stil hedeflenir.", "A Veneto expression shaped by the Cielo family tradition dating to 1908. Cool regional evenings protect Sauvignon Blanc’s natural acidity and aromatic lift, creating a fresh, direct modern white.", "Ein Veneto-Ausdruck aus der seit 1908 gewachsenen Tradition der Familie Cielo. Kühle Abende bewahren die natürliche Säure und Aromatik des Sauvignon Blanc.", "Венетская интерпретация традиции семьи Cielo, начавшейся в 1908 году. Прохладные вечера сохраняют природную кислотность и ароматическую свежесть Совиньон Блана."),
    notes: L("Greyfurt, yeşil elma, beyaz şeftali ve taze otlar; canlı, temiz ve ferah.", "Grapefruit, green apple, white peach and fresh herbs; lively, clean and refreshing.", "Grapefruit, grüner Apfel, weißer Pfirsich und frische Kräuter; lebendig, klar und erfrischend.", "Грейпфрут, зелёное яблоко, белый персик и свежие травы; живое, чистое и освежающее.")
  },
  {
    id: 20, brand: "Cielo e Terra", model: "Cielo Chardonnay", category: "white", price: 22,
    image: "assets/wines/cielo-chardonnay-standard.webp", producer: "Cielo e Terra", origin: "Veneto IGT · Italia", grapes: "Chardonnay",
    source: "https://cieloeterravini.com/en/vini/page/3/",
    story: L("Veneto’nun ılıman ikliminde olgunlaşan Chardonnay, Cielo e Terra’nın meyve odaklı ve kolay eşleşen stilinde yorumlanır. Kontrollü, serin üretim süreci üzümün saflığını ve dengeli dokusunu öne çıkarır.", "Chardonnay ripened in Veneto’s temperate climate is interpreted in Cielo e Terra’s fruit-led, food-friendly style. Cool, controlled winemaking places varietal purity and balanced texture at the centre.", "Chardonnay aus dem gemäßigten Klima Venetiens wird im fruchtbetonten, vielseitigen Stil von Cielo e Terra ausgebaut. Kühle, kontrollierte Vinifikation betont Rebsortenreinheit und ausgewogene Textur.", "Шардоне из умеренного климата Венето выполнен в фруктовом и гастрономичном стиле Cielo e Terra. Прохладная контролируемая винификация подчёркивает чистоту сорта и сбалансированную текстуру."),
    notes: L("Sarı elma, armut, limon ve beyaz çiçek; yuvarlak dokulu, taze ve dengeli.", "Yellow apple, pear, lemon and white flowers; rounded, fresh and balanced.", "Gelber Apfel, Birne, Zitrone und weiße Blüten; rund, frisch und ausgewogen.", "Жёлтое яблоко, груша, лимон и белые цветы; округлое, свежее и сбалансированное.")
  },
  {
    id: 21, brand: "Cielo e Terra", model: "Cielo Pinot Grigio", category: "white", price: 22,
    image: "assets/wines/cielo-pinot-grigio-standard.webp", producer: "Cielo e Terra", origin: "Delle Venezie DOC · Italia", grapes: "Pinot Grigio",
    source: "https://cieloeterravini.com/en/vini/page/3/",
    story: L("Delle Venezie DOC coğrafyasının serin etkisi, Pinot Grigio’da ince aromalar ve gevrek asidite oluşturur. Nazik presleme ve serin fermantasyon, hafif gövdeli İtalyan stilinin temizliğini korur.", "The cool influence of the Delle Venezie DOC area gives Pinot Grigio delicate aromas and crisp acidity. Gentle pressing and cool fermentation preserve the purity of its light Italian style.", "Der kühle Einfluss des Delle-Venezie-DOC-Gebiets verleiht Pinot Grigio feine Aromen und knackige Säure. Sanfte Pressung und kühle Gärung bewahren den klaren, leichten italienischen Stil.", "Прохладное влияние зоны Delle Venezie DOC даёт Пино Гриджо тонкий аромат и хрустящую кислотность. Мягкое прессование и холодное брожение сохраняют чистый лёгкий итальянский стиль."),
    notes: L("Yeşil armut, limon, beyaz çiçek ve badem; hafif, kuru ve canlı bitişli.", "Green pear, lemon, white flowers and almond; light, dry and vividly finished.", "Grüne Birne, Zitrone, weiße Blüten und Mandel; leicht, trocken und lebendig im Nachhall.", "Зелёная груша, лимон, белые цветы и миндаль; лёгкое, сухое и живое.")
  },
  {
    id: 22, brand: "Cielo e Terra", model: "Cielo Pinot Noir", category: "red", price: 22,
    image: "assets/wines/cielo-pinot-noir-standard.webp", producer: "Cielo e Terra", origin: "Tre Venezie IGT · Italia", grapes: "Pinot Noir",
    source: "https://cieloeterravini.com/en/vini/page/3/",
    story: L("Tre Venezie’nin daha serin bağ koşulları Pinot Noir’nın narin kabuğunu, kırmızı meyvesini ve zarif yapısını destekler. Üretim, ağır ekstraksiyon yerine meyve saflığını ve ipeksi içimi koruyan dengeli bir stil üzerine kuruludur.", "The cooler vineyards of Tre Venezie support Pinot Noir’s delicate skins, red fruit and elegant shape. Winemaking favours fruit purity and a silky flow rather than heavy extraction.", "Die kühleren Lagen der Tre Venezie unterstützen die zarte Schale, rote Frucht und elegante Struktur des Pinot Noir. Der Ausbau setzt auf Fruchtreinheit und seidigen Fluss statt starke Extraktion.", "Более прохладные виноградники Тре Венецие поддерживают тонкую кожицу, красные ягоды и элегантность Пино Нуара. Винификация делает акцент на чистоте фрукта и шелковистой текстуре, а не на тяжёлой экстракции."),
    notes: L("Kiraz, frambuaz, menekşe ve hafif baharat; zarif gövde, yumuşak tanen ve temiz bitiş.", "Cherry, raspberry, violet and gentle spice; elegant body, soft tannins and a clean finish.", "Kirsche, Himbeere, Veilchen und feine Würze; eleganter Körper, weiches Tannin und klarer Nachhall.", "Вишня, малина, фиалка и лёгкие специи; элегантное тело, мягкие танины и чистое послевкусие.")
  }
];

const categoryOrder = ["red", "white", "rose"];
let language = "de";
let activeCategory = "all";
let activeWineId = null;
let dialogHistoryActive = false;
const byId = (id) => document.getElementById(id);
const local = (value) => typeof value === "string" ? value : value[language];

function bottleVisual(wine) {
  return `<img src="${wine.image}" alt="${wine.brand} ${wine.model}" loading="lazy" />`;
}

function wineRow(wine, t) {
  return `
    <article class="menu-item" tabindex="0" role="button" data-wine-id="${wine.id}" aria-label="${wine.brand} ${wine.model} · ${t.clickForDetails}">
      <span class="wine-image-button">${bottleVisual(wine)}</span>
      <div class="menu-item-copy">
        <p class="wine-brand">${wine.brand}</p>
        <h3>${wine.model}</h3>
        <small class="detail-hint">${t.clickForDetails}</small>
      </div>
      <span class="menu-dots" aria-hidden="true"></span>
      <div class="menu-item-meta"><small>75 cl · ${t.bottle}</small><strong>€${wine.price}</strong></div>
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
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
  });
}

function openWineDialog(wineId) {
  const wine = wines.find((item) => item.id === wineId);
  if (!wine) return;
  activeWineId = wineId;
  const t = translations[language];
  byId("dialog-visual").innerHTML = bottleVisual(wine);
  byId("dialog-brand").textContent = wine.brand;
  byId("dialog-name").textContent = wine.model;
  byId("dialog-category").textContent = t[wine.category];
  byId("dialog-producer").textContent = wine.producer;
  byId("dialog-origin").textContent = local(wine.origin);
  byId("dialog-grapes").textContent = local(wine.grapes);
  byId("dialog-story").textContent = local(wine.story);
  byId("dialog-tasting").textContent = local(wine.notes);
  byId("dialog-service").textContent = local(wine.service || service[wine.category]);
  byId("dialog-price").textContent = `€${wine.price}`;
  const dialog = byId("wine-dialog");
  if (!dialog.open) {
    dialog.showModal();
    history.pushState({ ...(history.state || {}), wineDialog: true }, "", window.location.href);
    dialogHistoryActive = true;
  }
}

function closeWineDialog(fromHistory = false) {
  const dialog = byId("wine-dialog");
  if (!dialog.open) return;
  if (!fromHistory && dialogHistoryActive) {
    history.back();
    return;
  }
  dialog.close();
  dialogHistoryActive = false;
  activeWineId = null;
}

function updateDialogLanguage() {
  const t = translations[language];
  byId("dialog-close").setAttribute("aria-label", t.close);
  byId("label-producer").textContent = t.producer;
  byId("label-origin").textContent = t.origin;
  byId("label-grapes").textContent = t.grapes;
  byId("label-bottle").textContent = t.bottle;
  byId("label-story").textContent = t.storyTitle;
  byId("label-tasting").textContent = t.tasting;
  byId("label-service").textContent = t.service;
  byId("dialog-back").textContent = t.backToMenu;
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

byId("dialog-close").addEventListener("click", () => closeWineDialog());
byId("dialog-back").addEventListener("click", () => closeWineDialog());
byId("wine-dialog").addEventListener("click", (event) => {
  if (event.target === byId("wine-dialog")) closeWineDialog();
});
byId("wine-dialog").addEventListener("cancel", (event) => {
  event.preventDefault();
  closeWineDialog();
});
window.addEventListener("popstate", () => {
  if (byId("wine-dialog").open) closeWineDialog(true);
});

updateDialogLanguage();
renderWines();
