/* ==========================================================================
   LEŚNY ATLAS GRZYBÓW — JAVASCRIPT LOGIC (STAGE 4 - SUPER-EXTENSION)
   ========================================================================== */

// ── BAZA WIEDZY O GRZYBACH (DATABASE - 20 SPECIES WITH MONTHS & ID KEYS) ─
const MUSHROOM_DATABASE = [
  {
    id: "borowik",
    name: "Borowik Szlachetny (Prawdziwek)",
    scientific: "Boletus edulis",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [6, 7, 8, 9, 10], // Lipiec - Listopad (0-indexed: 6,7,8,9,10)
    hymenophore: "rurki",
    color: "brown",
    stemFeatures: ["network"],
    fleshFeatures: [],
    image: "assets/borowik_szlachetny.png",
    imageUnder: "assets/borowik_szlachetny.png",
    imageCross: "assets/borowik_szlachetny.png",
    descUnder: "Pod kapeluszem znajdują się rurki (gąbka). U młodych owocników są białe lub kremowe, u starszych żółto-zielone. Nie sinieją po ucisku.",
    descCross: "Miąższ jest biały, jędrny, pod skórką kapelusza ma jasnobrązową linię. Nie zmienia koloru po przekrojeniu.",
    imageTwin: "assets/goryczak_zolciowy.png",
    nameTwin: "Goryczak Żółciowy (Niejadalny)",
    categoryTwin: "trujące",
    diffs: "Goryczak ma ciemnobrązową siateczkę na trzonie (borowik ma jasną, białawą). Rurki dojrzałego goryczaka różowieją, a borowika żółkną. Goryczak jest skrajnie gorzki.",
    shortDesc: "Król polskich lasów. Najbardziej ceniony grzyb jadalny o wspaniałym aromacie i smaku.",
    fullDesc: "Borowik szlachetny rośnie w lasach iglastych, liściastych i mieszanych. Tworzy mikoryzę ze świerkami, dębami i bukami. Posiada gruby, baryłkowaty trzon.",
    features: {
      cap: "Średnicy 5-25 cm, jasnobrązowy do ciemnobrązowego, gładki, matowy.",
      gills: "Rurki białe, kremowe, z wiekiem żółto-zielone.",
      stem: "Masywny, baryłkowaty, z wyraźną białą siateczką w górnej części.",
      habitat: "Lasy iglaste i liściaste, pod świerkami i dębami."
    },
    warning: {
      title: "Porównanie z Goryczakiem Żółciowym",
      text: "Młode borowiki łatwo pomylić z goryczakiem żółciowym. Pamiętaj: siateczka borowika jest biała na beżowym tle, a u goryczaka ciemna. Rurki goryczaka z czasem stają się lekko różowe. Najlepszym testem jest dotknięcie językiem miąższu — goryczak zdradza silną gorycz.",
      isSafe: false
    },
    culinary: "Wyśmienity do suszenia, marynowania, smażenia na maśle oraz jako baza do sosów."
  },
  {
    id: "goryczak",
    name: "Goryczak Żółciowy",
    scientific: "Tylopilus felleus",
    category: "trujące",
    habitat: "iglaste",
    season: "lato",
    months: [5, 6, 7, 8, 9], // Czerwiec - Październik
    hymenophore: "rurki",
    color: "brown",
    stemFeatures: ["network"],
    fleshFeatures: ["bitter"],
    image: "assets/goryczak_zolciowy.png",
    imageUnder: "assets/goryczak_zolciowy.png",
    imageCross: "assets/goryczak_zolciowy.png",
    descUnder: "Rurki u młodych białawe, u starszych brudnoróżowe. Pod naciskiem lekko brązowieją.",
    descCross: "Miąższ jest biały, po przekrojeniu nie sinieje, a jedynie lekko różowieje. Posiada intensywnie gorzki smak.",
    imageTwin: "assets/borowik_szlachetny.png",
    nameTwin: "Borowik Szlachetny",
    categoryTwin: "jadalne",
    diffs: "Goryczak ma rurki różowawe i ciemną siateczkę na trzonie. Borowik ma białe lub oliwkowozielone rurki i jasną siateczkę. Goryczak ma skrajnie gorzki smak.",
    shortDesc: "Niejadalny z powodu skrajnej goryczy. Często mylony z borowikiem lub podgrzybkiem.",
    fullDesc: "Goryczak żółciowy rośnie od czerwca do października, najczęściej w lasach iglastych na kwaśnych glebach, u nasady pni świerkowych.",
    features: {
      cap: "Średnicy 5-15 cm, jasnobrązowy, żółtobrązowy, zamszowy.",
      gills: "Rurki u młodych białawe, potem charakterystycznie różowawe.",
      stem: "Jasnobrązowy, pokryty grubą, ciemną siateczką.",
      habitat: "Lasy iglaste, kwaśne gleby, piaszczyste podłoża."
    },
    warning: {
      title: "Porównanie z Borowikiem i Podgrzybkiem",
      text: "Jeden mały goryczak żółciowy dodany do potrawy zepsuje cały obiad ze względu na swoją intensywną gorycz, która wzmacnia się podczas gotowania. Zwracaj uwagę na siateczkę na trzonie oraz bladoróżowe zabarwienie porów u starszych sztuk.",
      isSafe: true
    },
    culinary: "Niejadalny. Skrajna gorycz dyskwalifikuje go z jakichkolwiek celów kulinarnych."
  },
  {
    id: "kurka",
    name: "Pieprznik Jadalny (Kurka)",
    scientific: "Cantharellus cibarius",
    category: "jadalne",
    habitat: "iglaste",
    season: "lato",
    months: [5, 6, 7, 8, 9, 10], // Czerwiec - Listopad
    hymenophore: "listewki",
    color: "yellow_orange",
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/pieprznik_jadalny.png",
    imageUnder: "assets/pieprznik_jadalny.png",
    imageCross: "assets/pieprznik_jadalny.png",
    descUnder: "Hymenofor ma postać listewek (fałd), które są grube, nieregularnie rozwidlone i głęboko zbiegają na trzon.",
    descCross: "Miąższ jest białawy lub bladożółty, zbity, twardy w trzonie. Posiada przyjemny, owocowy zapach (morelowy).",
    imageTwin: "assets/lisowka_pomaranczowa.png",
    nameTwin: "Lisówka Pomarańczowa (Niejadalna)",
    categoryTwin: "trujące",
    diffs: "Lisówka ma cienkie, bardzo gęste, prawdziwe blaszki o jaskrawopomarańczowym kolorze. Jej trzon jest cienki i wiotki, podczas gdy kurka ma twardy trzon i fałdy.",
    shortDesc: "Jeden z najpopularniejszych grzybów jadalnych. Rzadko robaczywieje, ma owocowy aromat.",
    fullDesc: "Kurki rosną gromadnie w mchu, w lasach sosnowych i świerkowych. Są cenione za twardość i trwałość.",
    features: {
      cap: "Średnicy 2-12 cm, żółty, lejkowaty, z nieregularnym brzegiem.",
      gills: "Listewki (fałdy) głęboko zbiegające na trzon, żółte.",
      stem: "Żółty, twardy, pełny, zwężający się ku dołowi.",
      habitat: "Od czerwca do listopada w lasach iglastych i liściastych."
    },
    warning: {
      title: "Porównanie z Lisówką Pomarańczową",
      text: "Lisówka pomarańczowa (fałszywa kurka) jest jaskrawopomarańczowa, ma miękki trzon oraz gęste, wiotkie blaszki. Kurka ma barwę jasnożółtą, twardy trzon i grube listewki pod kapeluszem.",
      isSafe: false
    },
    culinary: "Doskonałe do smażenia (jajecznica z kurkami), duszenia w śmietanie oraz marynowania."
  },
  {
    id: "lisowka",
    name: "Lisówka Pomarańczowa",
    scientific: "Hygrophoropsis aurantiaca",
    category: "trujące",
    habitat: "iglaste",
    season: "jesień",
    months: [8, 9, 10], // Wrzesień - Listopad
    hymenophore: "blaszki",
    color: "yellow_orange",
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/lisowka_pomaranczowa.png",
    imageUnder: "assets/lisowka_pomaranczowa.png",
    imageCross: "assets/lisowka_pomaranczowa.png",
    descUnder: "Posiada bardzo gęste, cienkie, regularnie rozwidlone blaszki o jaskrawopomarańczowej barwie, zbiegające na trzon.",
    descCross: "Miąższ jest miękki, elastyczny, pomarańczowo-żółty. W trzonie wiotki i pustawy.",
    imageTwin: "assets/pieprznik_jadalny.png",
    nameTwin: "Pieprznik Jadalny (Kurka)",
    categoryTwin: "jadalne",
    diffs: "Lisówka ma gęste, cienkie blaszki, wiotki trzon i jaskrawy pomarańczowy kolor. Kurka jest żółta i twarda z grubymi listewkami.",
    shortDesc: "Nazywana fałszywą kurką. Powoduje zaburzenia trawienne, u wrażliwych osób zatrucia.",
    fullDesc: "Lisówka pomarańczowa rośnie jesienią w lasach iglastych i mieszanych, bezpośrednio na ściółce, w mchu lub na drewnie.",
    features: {
      cap: "Średnicy 2-8 cm, pomarańczowy, aksamitny, z podwiniętym brzegiem.",
      gills: "Cienkie, bardzo gęste blaszki, jaskrawopomarańczowe.",
      stem: "Cienki, wiotki, wygięty, pomarańczowy.",
      habitat: "Lasy iglaste, w pobliżu sosen i świerków."
    },
    warning: {
      title: "Porównanie z Prawdziwą Kurką",
      text: "Lisówka bywa zbierana przez pomyłkę. Spożyta w większej ilości wywołuje nudności, wymioty i biegunkę z powodu toksyn pokarmowych. Zawsze sprawdzaj grubość struktur pod kapeluszem.",
      isSafe: true
    },
    culinary: "Niejadalna i lekko trująca. Należy jej unikać podczas zbiorów."
  },
  {
    id: "kania",
    name: "Czubajka Kania",
    scientific: "Macrolepiota procera",
    category: "jadalne",
    habitat: "trawiaste",
    season: "jesień",
    months: [6, 7, 8, 9, 10], // Lipiec - Listopad
    hymenophore: "blaszki",
    color: "brown",
    stemFeatures: ["ring"],
    fleshFeatures: [],
    image: "assets/czubajka_kania.png",
    imageUnder: "assets/czubajka_kania.png",
    imageCross: "assets/czubajka_kania.png",
    descUnder: "Blaszki pod kapeluszem są gęste, szerokie, białe lub kremowe, wolne (nie stykają się z trzonem).",
    descCross: "Miąższ w kapeluszu jest miękki i puszysty. W trzonie zdrewniały, włóknisty i pusty w środku.",
    imageTwin: "assets/muchomor_sromotnikowy.png",
    nameTwin: "Muchomor Sromotnikowy (Śmiertelny)",
    categoryTwin: "trujące",
    diffs: "Kania ma na trzonie ruchomy, gruby pierścień oraz kapelusz pokryty brązowymi łuskami (zygzak na trzonie). U nasady brak pochwy. Muchomor ma pochwę i gładki kapelusz.",
    shortDesc: "Duży grzyb z puszystym, ruchomym pierścieniem i łuskowatym kapeluszem. Bardzo smaczny.",
    fullDesc: "Kania rośnie na polanach, brzegach lasów i łąkach. Charakteryzuje się dużym kapeluszem i wysokim trzonem.",
    features: {
      cap: "Średnicy 10-30 cm, parasolowaty, pokryty brązowymi łuskami na jasnym tle.",
      gills: "Gęste, białe, wolne.",
      stem: "Wysoki, cienki, pusty, z pstrym wzorem i ruchomym pierścieniem.",
      habitat: "Polany, brzegi lasów, łąki i pastwiska."
    },
    warning: {
      title: "Ryzyko Pomylenia z Muchomorem",
      text: "Nigdy nie zbieraj kani, jeśli jej pierścień na trzonie jest przyrośnięty na stałe! Prawdziwa kania ma pierścień gruby, wełnisty, który można swobodnie przesuwać. Trzon kani jest pstrokaty, a muchomorów gładki.",
      isSafe: false
    },
    culinary: "Najpopularniejszy to panierowany kapelusz smażony na maśle jak kotlet schabowy."
  },
  {
    id: "sromotnikowy",
    name: "Muchomor Sromotnikowy (Zielonawy)",
    scientific: "Amanita phalloides",
    category: "trujące",
    habitat: "liściaste",
    season: "jesień",
    months: [6, 7, 8, 9], // Lipiec - Październik
    hymenophore: "blaszki",
    color: "olive_green",
    stemFeatures: ["ring", "volva"],
    fleshFeatures: [],
    image: "assets/muchomor_sromotnikowy.png",
    imageUnder: "assets/muchomor_sromotnikowy.png",
    imageCross: "assets/muchomor_sromotnikowy.png",
    descUnder: "Blaszki są gęste, białe, zawsze pozostające śnieżnobiałe (nie ciemnieją z wiekiem). Wolne.",
    descCross: "Miąższ jest biały, nie zmienia koloru pod wpływem tlenu. Zapach u dojrzałych mdły, słodkawy.",
    imageTwin: "assets/czubajka_kania.png",
    nameTwin: "Czubajka Kania",
    categoryTwin: "jadalne",
    diffs: "Muchomor ma oliwkowo-zielony kapelusz, przyrośnięty pierścień oraz pochwę u nasady trzonu. Kania ma łuski i ruchomy pierścień.",
    shortDesc: "Najbardziej zabójczy grzyb w Europie. Powoduje nieodwracalne uszkodzenie wątroby.",
    fullDesc: "Muchomor sromotnikowy rośnie głównie pod dębami i bukami. Zawiera zabójczą alfa-amanitynę.",
    features: {
      cap: "Średnicy 5-15 cm, oliwkowozielony, gładki, bez plamek.",
      gills: "Gęste, białe, wolne.",
      stem: "Białawy z zielonkawym wzorem, z przyrośniętym pierścieniem i pochwą u nasady.",
      habitat: "Lasy liściaste, pod dębami, bukami, rzadziej iglaste."
    },
    warning: {
      title: "Śmiertelne Podobieństwo",
      text: "Muchomor sromotnikowy bywa mylony z kanią, gąską zielonką i zielonymi gołąbkami. Pamiętaj: muchomor ZAWSZE posiada pochwę (worek leżący w ziemi) u nasady trzonu, z którego wyrasta trzon. Zawsze wykopuj całe owocniki do weryfikacji.",
      isSafe: true
    },
    culinary: "Śmiertelnie trujący! Nawet mały kęs prowadzi do śmierci."
  },
  {
    id: "podgrzybek",
    name: "Podgrzybek Brunatny",
    scientific: "Imleria badia",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [6, 7, 8, 9, 10], // Lipiec - Listopad
    hymenophore: "rurki",
    color: "brown",
    stemFeatures: [],
    fleshFeatures: ["bruising"],
    image: "assets/podgrzybek_brunatny.png",
    imageUnder: "assets/podgrzybek_brunatny.png",
    imageCross: "assets/podgrzybek_brunatny.png",
    descUnder: "Rurki bladożółte, po dotknięciu lub uszkodzeniu natychmiast barwią się na ciemnosiny, niebieskawy kolor.",
    descCross: "Miąższ jest białawy lub jasnożółty, po przekrojeniu lekko sinieje, zwłaszcza nad rurkami i w trzonie.",
    imageTwin: "assets/goryczak_zolciowy.png",
    nameTwin: "Goryczak Żółciowy (Niejadalny)",
    categoryTwin: "trujące",
    diffs: "Rurki podgrzybka sinieją na niebiesko, a goryczaka brązowieją lub różowieją. Podgrzybek ma łagodny smak, goryczak jest gorzki.",
    shortDesc: "Bardzo popularny grzyb jadalny. Jego rurki i miąższ sinieją po dotknięciu.",
    fullDesc: "Podgrzybek brunatny rośnie pospolicie w lasach iglastych i mieszanych, pod sosnami i świerkami.",
    features: {
      cap: "Średnicy 4-15 cm, ciemnobrązowy, kasztanowy, aksamitny.",
      gills: "Rurki jasnożółte do oliwkowych, silnie siniejące pod naciskiem.",
      stem: "Cylindryczny, jasnobrązowy, podłużnie włóknisty, bez siateczki.",
      habitat: "Lasy iglaste, głównie pod świerkami i sosnami."
    },
    warning: {
      title: "Porównanie z Goryczakiem",
      text: "Podgrzybek brunatny nie ma na trzonie wyraźnej, ciemnej siateczki, a jego rurki sinieją po dotknięciu. Jeśli rurki są różowawe i nie sinieją — to niejadalny goryczak.",
      isSafe: false
    },
    culinary: "Wszechstronne: doskonały do suszenia, gotowania sosów oraz marynowania."
  },
  {
    id: "rydz",
    name: "Mleczaj Rydz",
    scientific: "Lactarius deliciosus",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [7, 8, 9, 10], // Sierpień - Listopad
    hymenophore: "blaszki",
    color: "yellow_orange",
    stemFeatures: [],
    fleshFeatures: ["latex"],
    image: "assets/mleczaj_rydz.png",
    imageUnder: "assets/mleczaj_rydz.png",
    imageCross: "assets/mleczaj_rydz.png",
    descUnder: "Blaszki są pomarańczowe, gęste, lekko zbiegające na trzon, po uciśnięciu pokrywają się zielonymi plamami.",
    descCross: "Miąższ po uszkodzeniu wydziela jaskrawopomarańczowe (marchewkowe) mleczko, które na powietrzu powoli zielenieje.",
    imageTwin: "assets/mleczaj_welnianka.png",
    nameTwin: "Mleczaj Wełnianka (Trujący)",
    categoryTwin: "trujące",
    diffs: "Rydz ma pomarańczowe mleczko, a wełnianka białe i piekące. Rydz ma gładki kapelusz, wełnianka ma kosmaty, silnie owłosiony brzeg.",
    shortDesc: "Jeden z najsmaczniejszych grzybów leśnych. Wydziela pomarańczowe mleczko, które zielenieje.",
    fullDesc: "Mleczaj rydz rośnie wyłącznie w pobliżu sosen, na piaszczystych glebach. Jest ceniony za wyjątkowy smak.",
    features: {
      cap: "Średnicy 4-12 cm, pomarańczowy z ciemniejszymi kręgami, pośrodku wklęsły.",
      gills: "Pomarańczowe, gęste, zbiegające na trzon.",
      stem: "Pomarańczowy, krótki, z płytkimi jamkami na powierzchni.",
      habitat: "Lasy iglaste, wyłącznie pod sosnami."
    },
    warning: {
      title: "Różnice z Wełnianką",
      text: "Uważaj na trującego mleczaja wełniankę. Wełnianka ma kapelusz owłosiony i wydziela piekące, białe mleczko, które nie zielenieje.",
      isSafe: false
    },
    culinary: "Najlepszy smażony na patelni na maśle z odrobiną soli. Wyśmienity w smaku."
  },
  {
    id: "welnianka",
    name: "Mleczaj Wełnianka",
    scientific: "Lactarius torminosus",
    category: "trujące",
    habitat: "liściaste",
    season: "jesień",
    months: [7, 8, 9], // Sierpień - Październik
    hymenophore: "blaszki",
    color: "white_cream", // Różowawy/kremowy
    stemFeatures: [],
    fleshFeatures: ["latex"],
    image: "assets/mleczaj_welnianka.png",
    imageUnder: "assets/mleczaj_welnianka.png",
    imageCross: "assets/mleczaj_welnianka.png",
    descUnder: "Blaszki gęste, wąskie, białawe lub różowawe, lekko zbiegające na trzon.",
    descCross: "Miąższ po uszkodzeniu wydziela obfite, białe, gęste, paląco ostre mleczko o owocowym zapachu.",
    imageTwin: "assets/mleczaj_rydz.png",
    nameTwin: "Mleczaj Rydz",
    categoryTwin: "jadalne",
    diffs: "Wełnianka ma wełniste brzegi kapelusza i wydziela białe mleczko (rydz ma gładki kapelusz i pomarańczowe mleczko).",
    shortDesc: "Trujący grzyb z owłosionym brzegiem kapelusza. Powoduje silne zatrucia gastryczne.",
    fullDesc: "Mleczaj wełnianka rośnie od sierpnia do października, wyłącznie w sąsiedztwie brzóz. Posiada toxins drażniące przewód pokarmowy.",
    features: {
      cap: "Średnicy 4-12 cm, różowawy, z wyraźnymi wełnistymi włoskami na brzegu.",
      gills: "Gęste, białawo-różowe, zbiegające.",
      stem: "Różowawy, gładki, wewnątrz pusty.",
      habitat: "Lasy liściaste i mieszane, wyłącznie pod brzozami."
    },
    warning: {
      title: "Zagrożenie dla Układu Pokarmowego",
      text: "Zjedzenie wełnianki powoduje zapalenie żołądka i jelit z nudnościami i wymiotami. Zwracaj uwagę na kolor mleczka (rydz ma marchewkowy, wełnianka biały).",
      isSafe: true
    },
    culinary: "Trujący. Całkowicie niejadalny."
  },
  {
    id: "pieczarka",
    name: "Pieczarka Polna",
    scientific: "Agaricus campestris",
    category: "jadalne",
    habitat: "trawiaste",
    season: "lato",
    months: [4, 5, 6, 7, 8, 9], // Maj - Październik
    hymenophore: "blaszki",
    color: "white_cream",
    stemFeatures: ["ring"],
    fleshFeatures: [],
    image: "assets/pieczarka_polna.png",
    imageUnder: "assets/pieczarka_polna.png",
    imageCross: "assets/pieczarka_polna.png",
    descUnder: "Blaszki są gęste, u młodych różowe, z wiekiem brązowieją do barwy czekoladowej lub czarnej. Nigdy białe.",
    descCross: "Miąższ jest biały, po przełamaniu lekko różowieje. Pachnie przyjemnie, grzybowo.",
    imageTwin: "assets/muchomor_jadowity.png",
    nameTwin: "Muchomor Jadowity (Śmiertelny)",
    categoryTwin: "trujące",
    diffs: "Blaszki pieczarki szybko ciemnieją. Blaszki muchomora jadowitego są zawsze śnieżnobiałe. Muchomor posiada pochwę u nasady trzonu.",
    shortDesc: "Smaczny grzyb jadalny rosnący na łąkach i pastwiskach. Ma różowe lub czekoladowe blaszki.",
    fullDesc: "Pieczarka polna pojawia się od maja do października na pastwiskach, w ogrodach. Jest spokrewniona z pieczarką hodowlaną.",
    features: {
      cap: "Średnicy 4-10 cm, biały, jedwabisty, u starszych lekko łuskowaty.",
      gills: "Gęste, początkowo różowe, potem brązowo-czarne.",
      stem: "Krótki, biały, z pojedynczym pierścieniem, bez pochwy u nasady.",
      habitat: "Łąki, pastwiska, tereny trawiaste."
    },
    warning: {
      title: "Śmiertelne Zagrożenie",
      text: "Nigdy nie zbieraj młodych pieczarek z zamkniętymi kapeluszami, jeśli nie widać koloru blaszek! Mogą być podobne do trującego muchomora jadowitego.",
      isSafe: false
    },
    culinary: "Wspaniała do smażenia, gotowania zup, a także jako farsz."
  },
  {
    id: "jadowity",
    name: "Muchomor Jadowity",
    scientific: "Amanita virosa",
    category: "trujące",
    habitat: "iglaste",
    season: "jesień",
    months: [6, 7, 8, 9], // Lipiec - Październik
    hymenophore: "blaszki",
    color: "white_cream",
    stemFeatures: ["ring", "volva"],
    fleshFeatures: [],
    image: "assets/muchomor_jadowity.png",
    imageUnder: "assets/muchomor_jadowity.png",
    imageCross: "assets/muchomor_jadowity.png",
    descUnder: "Blaszki są gęste, wolne, śnieżnobiałe. Pozostają białe przez cały cykl życia grzyba.",
    descCross: "Miąższ jest delikatny, biały, nie zmienia barwy. Posiada słaby, nieprzyjemny zapach.",
    imageTwin: "assets/pieczarka_polna.png",
    nameTwin: "Pieczarka Polna",
    categoryTwin: "jadalne",
    diffs: "Muchomor jadowity jest cały śnieżnobiały, jego blaszki nie ciemnieją i posiada pochwę u nasady. Pieczarka ma różowe blaszki i brak pochwy.",
    shortDesc: "Śmiertelnie trujący grzyb o całkowicie białej barwie. Mylony z pieczarką polną.",
    fullDesc: "Muchomor jadowity rośnie w lasach iglastych i mieszanych, szczególnie pod świerkami i brzozami, na glebach kwaśnych.",
    features: {
      cap: "Średnicy 5-10 cm, czysto biały, stożkowaty.",
      gills: "Gęste, czysto białe, wolne.",
      stem: "Biały, włóknisty, z wiotkim pierścieniem i bulwiastą pochwą.",
      habitat: "Głównie lasy iglaste, pod świerkami, od lipca do października."
    },
    warning: {
      title: "Biała Śmierć w Lesie",
      text: "Muchomor jadowity jest przyczyną wielu śmiertelnych zatruć. Zawsze sprawdzaj blaszki — jeśli są białe, a nasada trzonu ma woreczek, natychmiast wyrzuć grzyb.",
      isSafe: true
    },
    culinary: "Śmiertelnie trujący! Zjedzenie nawet jednego owocnika kończy się śmiercią."
  },
  {
    id: "czerwony",
    name: "Muchomor Czerwony",
    scientific: "Amanita muscaria",
    category: "trujące",
    habitat: "iglaste",
    season: "jesień",
    months: [6, 7, 8, 9, 10], // Lipiec - Listopad
    hymenophore: "blaszki",
    color: "red",
    stemFeatures: ["ring", "volva"],
    fleshFeatures: [],
    image: "assets/muchomor_czerwony.png",
    imageUnder: "assets/muchomor_czerwony.png",
    imageCross: "assets/muchomor_czerwony.png",
    descUnder: "Blaszki gęste, białe, wolne, nie zmieniają koloru po dotknięciu.",
    descCross: "Miąższ biały, bezpośrednio pod czerwoną skórką kapelusza ma charakterystyczną żółto-pomarańczową warstwę.",
    imageTwin: "brak",
    nameTwin: "Brak bezpośredniego sobowtóra",
    categoryTwin: "jadalne",
    diffs: "Jego czerwona barwa z kropkami jest unikalna. Po ulewnym deszczu może przypominać czerwone gołąbki, ale gołąbki nie mają pierścienia ani pochwy.",
    shortDesc: "Najbardziej rozpoznawalny grzyb trujący o pięknym, czerwonym kapeluszu z kropkami.",
    fullDesc: "Muchomor czerwony rośnie pospolicie w lasach iglastych i liściastych. Posiada toksyczne działanie na układ nerwowy.",
    features: {
      cap: "Średnicy 8-20 cm, jaskrawoczerwony z białymi brodawkami.",
      gills: "Gęste, białe, wolne.",
      stem: "Biały z białym pierścieniem i bulwiastą nasadą z brodawkami.",
      habitat: "Od lipca do listopada pod brzozami i świerkami."
    },
    warning: {
      title: "Zmyte kropki",
      text: "Ulewny deszcz może zmyć białe kropki z kapelusza muchomora czerwonego. Może wtedy przypominać czerwone gołąbki — pamiętaj, gołąbki nie mają pierścienia ani pochwy.",
      isSafe: true
    },
    culinary: "Trujący i halucynogenny. Powoduje ostre zaburzenia żołądkowo-jelitowe."
  },
  {
    id: "kozlarz",
    name: "Koźlarz Babka",
    scientific: "Leccinum scabrum",
    category: "jadalne",
    habitat: "liściaste",
    season: "jesień",
    months: [6, 7, 8, 9], // Lipiec - Październik
    hymenophore: "rurki",
    color: "brown",
    stemFeatures: ["scales"],
    fleshFeatures: [],
    image: "assets/kozlarz_babka.png",
    imageUnder: "assets/kozlarz_babka.png",
    imageCross: "assets/kozlarz_babka.png",
    descUnder: "Rurki białawe, z wiekiem szarawe, głęboko wcięte wokół trzonu.",
    descCross: "Miąższ jest biały, po ucięciu nie zmienia koloru, w trzonie włóknisty i twardy.",
    imageTwin: "assets/goryczak_zolciowy.png",
    nameTwin: "Goryczak Żółciowy (Niejadalny)",
    categoryTwin: "trujące",
    diffs: "Trzon koźlarza pokrywają czarne łuseczki, a trzon goryczaka ciemna siateczka. Koźlarz ma łagodny smak, goryczak jest bardzo gorzki.",
    shortDesc: "Jadalny grzyb rosnący pod brzozami. Posiada charakterystyczne czarne łuski na trzonie.",
    fullDesc: "Koźlarz babka rośnie wyłącznie pod brzozami. Bardzo pospolity w całej Polsce, ceniony w kuchni.",
    features: {
      cap: "Średnicy 5-15 cm, brązowy, poduszkowaty, suchy.",
      gills: "Rurki białawe do brudnoszarych.",
      stem: "Smukły, pokryty drobnymi, czarnymi łuseczkami.",
      habitat: "Lasy liściaste, wyłącznie pod brzozami."
    },
    warning: {
      title: "Porównanie z Goryczakiem",
      text: "Koźlarz babka nie sinieje i ma łagodny smak. Trzon koźlarza pokrywają czarne łuseczki (koźle włosy), co odróżnia go od goryczaka żółciowego.",
      isSafe: false
    },
    culinary: "Bardzo dobry do zup, sosów i marynowania. Trzony starszych sztuk są zdrewniałe."
  },
  {
    id: "maslak",
    name: "Maślak Zwyczajny",
    scientific: "Suillus luteus",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [8, 9, 10], // Wrzesień - Listopad
    hymenophore: "rurki",
    color: "brown",
    stemFeatures: ["ring"],
    fleshFeatures: [],
    image: "assets/maslak_zwyczajny.png",
    imageUnder: "assets/maslak_zwyczajny.png",
    imageCross: "assets/maslak_zwyczajny.png",
    descUnder: "Rurki drobne, żółte, z wiekiem oliwkowe. U młodych zakryte białawą błoną.",
    descCross: "Miąższ miękki, bladożółty, nie zmienia barwy po uszkodzeniu.",
    imageTwin: "brak",
    nameTwin: "Brak bezpośredniego sobowtóra",
    categoryTwin: "jadalne",
    diffs: "Charakterystyczny czekoladowobrązowy lepki kapelusz i rośnięcie pod sosnami ułatwiają identyfikację.",
    shortDesc: "Wyśmienity grzyb jadalny z bardzo lepką skórką kapelusza, rosnący pod sosnami.",
    fullDesc: "Maślak zwyczajny rośnie masowo pod sosnami. Charakteryzuje się śluzowatym kapeluszem oraz białym pierścieniem na trzonie.",
    features: {
      cap: "Średnicy 4-12 cm, czekoladowobrązowy, pokryty grubą warstwą śluzu.",
      gills: "Rurki drobne, jaskrawożółte.",
      stem: "Żółtawy, z wyraźnym, ciemnobrązowym pierścieniem.",
      habitat: "Lasy iglaste, wyłącznie w pobliżu sosen."
    },
    warning: {
      title: "Śluz kapelusza",
      text: "Maślak nie ma groźnych sobowtórów, jednak przed jedzeniem należy bezwzględnie ściągnąć lepki, kwaśny śluz ze skórki kapelusza, gdyż może on wywołać biegunkę.",
      isSafe: false
    },
    culinary: "Doskonały do duszenia w śmietanie, jajecznicy i marynowania w occie."
  },
  {
    id: "opienka",
    name: "Opieńka Miodowa",
    scientific: "Armillaria mellea",
    category: "jadalne",
    habitat: "liściaste",
    season: "jesień",
    months: [8, 9, 10], // Wrzesień - Listopad
    hymenophore: "blaszki",
    color: "yellow_orange",
    stemFeatures: ["ring"],
    fleshFeatures: [],
    image: "assets/opienka_miodowa.png",
    imageUnder: "assets/opienka_miodowa.png",
    imageCross: "assets/opienka_miodowa.png",
    descUnder: "Blaszki gęste, białawe, z wiekiem pokryte brązowawymi plamkami.",
    descCross: "Miąższ białawy, o przyjemnym zapachu, w trzonie zdrewniały i łykowaty.",
    imageTwin: "assets/helmowka_jadowita.png",
    nameTwin: "Hełmówka Jadowita (Sobowtór)",
    categoryTwin: "trujące",
    diffs: "Hełmówka ma trzon bez łusek i pachnie mącznie po przełamaniu. Opieńka rośnie dużymi kępami i ma łuseczki na kapeluszu.",
    shortDesc: "Jadalny grzyb rosnący kępami na pniach drzew. Wymaga gotowania przed spożyciem.",
    fullDesc: "Opieńka miodowa to pasożyt drzew rosnący masowo jesienią w kępach. Surowa jest lekko trująca, wymaga 15-20 min gotowania.",
    features: {
      cap: "Średnicy 3-10 cm, miodowożółty, pokryty ciemnymi łuseczkami.",
      gills: "Gęste, białawe, lekko zbiegające.",
      stem: "Włóknisty, z wyraźnym żółtawo-białym pierścieniem.",
      habitat: "Na żywych i martwych pniach drzew liściastych i iglastych."
    },
    warning: {
      title: "Ryzyko: Hełmówka Jadowita!",
      text: "Opieńkę miodową łatwo pomylić ze śmiertelnie trującą hełmówką jadowitą! Hełmówka rośnie pojedynczo na drewnie iglastym, a jej miąższ pachnie wyraźnie mącznie.",
      isSafe: false
    },
    culinary: "Doskonała do marynowania i flaczków grzybowych. Używa się tylko kapeluszy."
  },
  {
    id: "gaska",
    name: "Gąska Zielonka",
    scientific: "Tricholoma equestre",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [8, 9, 10], // Wrzesień - Listopad
    hymenophore: "blaszki",
    color: "yellow_orange", // Żółtawy/oliwkowy
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/gaska_zielonka.png",
    imageUnder: "assets/gaska_zielonka.png",
    imageCross: "assets/gaska_zielonka.png",
    descUnder: "Blaszki gęste, charakterystycznie siarkowożółte, wycięte przy trzonie.",
    descCross: "Miąższ biały do żółtawego, nie zmienia koloru na powietrzu. Pachnie mącznie.",
    imageTwin: "assets/muchomor_sromotnikowy.png",
    nameTwin: "Muchomor Sromotnikowy (Sobowtór)",
    categoryTwin: "trujące",
    diffs: "Gąska ma żółte blaszki, brak pierścienia i brak pochwy. Muchomor ma blaszki czysto białe, pierścień i pochwę.",
    shortDesc: "Ceniony, późnojesienny grzyb jadalny ukryty w piasku. Ma żółty kapelusz i blaszki.",
    fullDesc: "Gąska zielonka rośnie w suchych lasach sosnowych na piaszczystych glebach, często zakopana pod piaskiem.",
    features: {
      cap: "Średnicy 4-10 cm, żółtozielony, gładki, lekko lepki.",
      gills: "Siarkowożółte, gęste.",
      stem: "Bladożółty, pełny, często zakopany w piasku.",
      habitat: "Suche lasy sosnowe, piaski."
    },
    warning: {
      title: "Odróżnianie od Muchomora",
      text: "Młode gąski bywają mylone z muchomorem sromotnikowym. Gąska zielonka ma żółte blaszki i nie posiada pochwy ani pierścienia na trzonie.",
      isSafe: false
    },
    culinary: "Wyśmienita do marynowania i jako baza do zup. Wymaga dokładnego mycia z piasku."
  },
  {
    id: "plamisty",
    name: "Muchomor Plamisty",
    scientific: "Amanita pantherina",
    category: "trujące",
    habitat: "liściaste",
    season: "lato",
    months: [6, 7, 8, 9], // Lipiec - Październik
    hymenophore: "blaszki",
    color: "brown",
    stemFeatures: ["ring", "volva"],
    fleshFeatures: [],
    image: "assets/muchomor_plamisty.png",
    imageUnder: "assets/muchomor_plamisty.png",
    imageCross: "assets/muchomor_plamisty.png",
    descUnder: "Blaszki są gęste, białe, zawsze śnieżnobiałe. Wolne.",
    descCross: "Miąższ biały, kruchy, nie zmienia barwy, bez zapachu.",
    imageTwin: "assets/czubajka_kania.png",
    nameTwin: "Czubajka Kania (Sobowtór)",
    categoryTwin: "jadalne",
    diffs: "Muchomor plamisty ma przyrośnięty pierścień i bulwiastą nasadę trzonu. Kania ma ruchomy pierścień i łuski.",
    shortDesc: "Śmiertelnie trujący grzyb mylony z kanią. Powoduje zaburzenia psychoneurologiczne.",
    fullDesc: "Muchomor plamisty rośnie w lasach liściastych i iglastych. Zawiera toksyczny kwas ibotenowy.",
    features: {
      cap: "Średnicy 5-12 cm, jasnobrązowy, pokryty drobnymi, białymi kropkami.",
      gills: "Blaszki gęste, białe, wolne.",
      stem: "Wysoki, biały, z przyrośniętym pierścieniem i bulwiastą nasadą.",
      habitat: "Lasy iglaste i liściaste, pod dębami, bukami."
    },
    warning: {
      title: "Mylony z Kanią",
      text: "Muchomor plamisty bywa mylony z kanią ze względu na brązowy kapelusz z białymi brodawkami. Kania ma pierścień gruby i ruchomy, a trzon pstrokaty.",
      isSafe: true
    },
    culinary: "Śmiertelnie trujący! Wywołuje bardzo ciężkie zatrucia układu nerwowego."
  },
  {
    id: "olszowka",
    name: "Krowiak Podwinięty (Olszówka)",
    scientific: "Paxillus involutus",
    category: "trujące",
    habitat: "liściaste",
    season: "jesień",
    months: [6, 7, 8, 9, 10], // Lipiec - Listopad
    hymenophore: "blaszki",
    color: "brown",
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/olszovka_krowiak.png",
    imageUnder: "assets/olszovka_krowiak.png",
    imageCross: "assets/olszovka_krowiak.png",
    descUnder: "Blaszki gęste, żółtobrązowe, po dotknięciu natychmiast ciemniejące na plamisty brązowy kolor.",
    descCross: "Miąższ miękki, brązowożółty, po przełamaniu brązowieje. Smak lekko kwaśny.",
    imageTwin: "brak",
    nameTwin: "Brak bezpośredniego sobowtóra",
    categoryTwin: "jadalne",
    diffs: "Podwinięte brzegi kapelusza i natychmiastowe brązowienie blaszek po ucisku to cechy kluczowe.",
    shortDesc: "Śmiertelnie trujący grzyb o opóźnionym działaniu. Dawniej błędnie uznawany za jadalny.",
    fullDesc: "Krowiak podwinięty rośnie pospolicie w lasach. Zawiera antygen inwolutynę, powodujący po czasie hemolizę krwi.",
    features: {
      cap: "Średnicy 5-15 cm, oliwkowobrązowy, z charakterystycznym mocno podwiniętym brzegiem.",
      gills: "Gęste, żółtobrązowe, zbiegające.",
      stem: "Krótki, gruby, brązowawy.",
      habitat: "Lasy iglaste i liściaste, pod brzozami i sosnami."
    },
    warning: {
      title: "Śmiertelna Pułapka",
      text: "Olszówka to grzyb podstępny. Toksyna kumuluje się w organizmie. Można ją jeść wielokrotnie bez objawów, aż nagle wywoła śmiertelną anemię.",
      isSafe: true
    },
    culinary: "Śmiertelnie trujący! Bezwzględnie wykluczony ze spożycia."
  },
  {
    id: "karbolowa",
    name: "Pieczarka Karbolowa",
    scientific: "Agaricus xanthodermus",
    category: "trujące",
    habitat: "trawiaste",
    season: "lato",
    months: [6, 7, 8, 9], // Lipiec - Październik
    hymenophore: "blaszki",
    color: "white_cream",
    stemFeatures: ["ring"],
    fleshFeatures: ["smell_chemical"],
    image: "assets/pieczarka_karbolowa.png",
    imageUnder: "assets/pieczarka_karbolowa.png",
    imageCross: "assets/pieczarka_karbolowa.png",
    descUnder: "Blaszki gęste, wolne, najpierw brudnobiałe, potem różowe i czekoladowe.",
    descCross: "Miąższ biały, w dole trzonu po rozcięciu jaskrawożółty. Pachnie apteką/fenolem.",
    imageTwin: "assets/pieczarka_polna.png",
    nameTwin: "Pieczarka Polna (Sobowtór)",
    categoryTwin: "jadalne",
    diffs: "Miąższ karbolowej żółknie u nasady trzonu, a zapach jest apteczny (karbolowy). Pieczarka polna różowieje i pachnie grzybowo.",
    shortDesc: "Trujący sobowtór pieczarki polnej. Żółknie po dotknięciu i pachnie fenolem (atramentem).",
    fullDesc: "Pieczarka karbolowa rośnie w parkach, ogrodach i na łąkach. Zjedzenie jej wywołuje ciężkie zaburzenia żołądkowe.",
    features: {
      cap: "Średnicy 5-15 cm, biały, jedwabisty, u nasady po ucisku natychmiast żółknący.",
      gills: "Początkowo brudnobiałe, potem czekoladowe.",
      stem: "Biały, z jaskrawożółtym miąższem w bulwiastej nasadzie.",
      habitat: "Łąki, ogrody, parki."
    },
    warning: {
      title: "Żółknięcie i Zapach Karbolu",
      text: "Najłatwiej odróżnić ją od jadalnej pieczarki po zapachu karbolu (atramentu, apteki) oraz jaskrawym żółknięciu u nasady po uszkodzeniu.",
      isSafe: true
    },
    culinary: "Trująca. Powoduje silne wymioty i skurcze żołądka."
  },
  {
    id: "helmowka",
    name: "Hełmówka Jadowita",
    scientific: "Galerina marginata",
    category: "trujące",
    habitat: "liściaste",
    season: "jesień",
    months: [8, 9, 10], // Wrzesień - Listopad
    hymenophore: "blaszki",
    color: "brown",
    stemFeatures: ["ring"],
    fleshFeatures: [],
    image: "assets/helmowka_jadowita.png",
    imageUnder: "assets/helmowka_jadowita.png",
    imageCross: "assets/helmowka_jadowita.png",
    descUnder: "Blaszki gęste, wąskie, rdzawobrązowe, zbiegające na trzon.",
    descCross: "Miąższ cienki, brązowawy, o wyraźnym zapachu mącznym po przełamaniu.",
    imageTwin: "assets/opienka_miodowa.png",
    nameTwin: "Opieńka Miodowa (Sobowtór)",
    categoryTwin: "jadalne",
    diffs: "Hełmówka pachnie mąką, ma gładki kapelusz i jest drobniejsza. Opieńka ma łuseczki i rośnie w kępach.",
    shortDesc: "Śmiertelnie trujący, mały grzyb rosnący na drewnie. Zawiera te same toksyny co sromotnikowy.",
    fullDesc: "Hełmówka jadowita rośnie na butwiejącym drewnie. Z powodu podobieństwa do opieńki bywa przyczyną śmiertelnych zatruć.",
    features: {
      cap: "Średnicy 1-4 cm, miodowobrązowy, gładki.",
      gills: "Gęste, rdzawobrązowe.",
      stem: "Cienki, rdzawobrązowy, z drobnym pierścieniem.",
      habitat: "Na butwiejących pniach, gałęziach."
    },
    warning: {
      title: "Ryzyko pomyłki z Opieńką",
      text: "Hełmówkę jadowitą łatwo pomylić z opieńką. Pamiętaj: opieńka ma łuseczki na kapeluszu i rośnie w kępach. Hełmówka ma gładki kapelusz i pachnie mącznie.",
      isSafe: true
    },
    culinary: "Śmiertelnie trująca! Prowadzi do ciężkiego uszkodzenia wątroby."
  },
  {
    id: "gaska_nieksztaltna",
    name: "Gąska Niekształtna (Siwa)",
    scientific: "Tricholoma portentosum",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [8, 9, 10, 11], // Wrzesień - Grudzień
    hymenophore: "blaszki",
    color: "white_cream", // Szaro-czarny kapelusz, białe blaszki
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/gaska_nieksztaltna.png",
    imageUnder: "assets/gaska_nieksztaltna.png",
    imageCross: "assets/gaska_nieksztaltna.png",
    descUnder: "Blaszki są rzadkie, białe lub żółtawe, wycięte ząbkiem przy trzonie.",
    descCross: "Miąższ jest biały z żółtawym odcieniem pod skórką, pachnie mąką.",
    imageTwin: "brak",
    nameTwin: "Brak bezpośredniego trującego sobowtóra",
    categoryTwin: "jadalne",
    diffs: "Często mylona z jadalną gąską ziemistą.",
    shortDesc: "Późnojesienny, bardzo smaczny grzyb zbierany aż do mrozów.",
    fullDesc: "Gąska niekształtna rośnie w lasach iglastych, często piaszczystych. Jest ceniona w kuchni za delikatny, orzechowo-mączny aromat.",
    features: {
      cap: "Szaro-czarny, z promienistymi włókienkami, często śliski.",
      gills: "Białe do cytrynowo-żółtawych, rzadkie.",
      stem: "Biały lub lekko żółtawy, cylindryczny.",
      habitat: "Lasy iglaste, mchy, piaski."
    },
    warning: {
      title: "Zbieranie po przymrozkach",
      text: "To jeden z niewielu grzybów jadalnych, które można bezpiecznie zbierać po lekkich przymrozkach, o ile owocniki są zdrowe.",
      isSafe: false
    },
    culinary: "Wyśmienita duszona na maśle, do zup i marynowania."
  },
  {
    id: "maslak_sitarz",
    name: "Maślak Sitarz",
    scientific: "Suillus bovinus",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [7, 8, 9, 10], // Sierpień - Listopad
    hymenophore: "rurki",
    color: "brown", // Żółtawobrązowy
    stemFeatures: [],
    fleshFeatures: ["bruising"],
    image: "assets/maslak_sitarz.png",
    imageUnder: "assets/maslak_sitarz.png",
    imageCross: "assets/maslak_sitarz.png",
    descUnder: "Rurki duże, kanciaste, przypominające sitko, oliwkowo-żółte. Lekko ciemnieją po ucisku.",
    descCross: "Miąższ żółtawy, miękki, po ugotowaniu staje się czerwonawy.",
    imageTwin: "brak",
    nameTwin: "Brak groźnych sobowtórów",
    categoryTwin: "jadalne",
    diffs: "Trudny do pomylenia ze względu na grube 'sitko' od spodu kapelusza.",
    shortDesc: "Jadalny maślak o dużych, kanciastych rurkach przypominających sito.",
    fullDesc: "Maślak sitarz rośnie w lasach sosnowych masowo. Po ugotowaniu jego miąższ zabarwia się na fioletowo-czerwono, co jest zjawiskiem naturalnym.",
    features: {
      cap: "Żółtobrązowy do rdzawego, gładki, podczas deszczu lepki.",
      gills: "Rurki duże, nieregularne, siatkowate (jak sito).",
      stem: "Cylindryczny, gładki, bez pierścienia.",
      habitat: "Bory sosnowe, często wrzosowiska."
    },
    warning: {
      title: "Zmiana koloru w garnku",
      text: "Nie panikuj, gdy po obgotowaniu grzyb zrobi się fioletowo-czerwony lub różowy. To naturalna reakcja sitarza.",
      isSafe: false
    },
    culinary: "Dobry jako domieszka do innych grzybów (do sosów i zup)."
  },
  {
    id: "muchomor_twardawy",
    name: "Muchomor Twardawy",
    scientific: "Amanita spissa",
    category: "jadalne",
    habitat: "liściaste",
    season: "jesień",
    months: [6, 7, 8, 9, 10], // Lipiec - Listopad
    hymenophore: "blaszki",
    color: "brown", // Szarobrązowy
    stemFeatures: ["ring", "volva"],
    fleshFeatures: [],
    image: "assets/muchomor_twardawy.png",
    imageUnder: "assets/muchomor_twardawy.png",
    imageCross: "assets/muchomor_twardawy.png",
    descUnder: "Blaszki białe, gęste, wolne.",
    descCross: "Miąższ gruby, biały, niezmieniający barwy. Pachnie rzepą.",
    imageTwin: "assets/muchomor_plamisty.png",
    nameTwin: "Muchomor Plamisty (Śmiertelny)",
    categoryTwin: "trujące",
    diffs: "Twardawy ma prążkowany pierścień i zapach rzepy. Plamisty ma gładki pierścień i brak prążkowania brzegu kapelusza.",
    shortDesc: "Jadalny muchomor dla ekspertów. Niezwykle podobny do trującego plamistego.",
    fullDesc: "Choć jadalny i smaczny, jest odradzany początkującym ze względu na ogromne podobieństwo do muchomora plamistego i cętkowanego.",
    features: {
      cap: "Szarobrązowy, z płaskimi, szarawymi łatkami.",
      gills: "Białe, gęste.",
      stem: "Solidny, biały, z mocno prążkowanym pierścieniem.",
      habitat: "Lasy iglaste i liściaste."
    },
    warning: {
      title: "Zabójcze Podobieństwo",
      text: "Zbieraj go tylko jeśli jesteś mykologiem! Pomyłka z muchomorem plamistym bywa tragiczna w skutkach. Kluczem jest gęsto prążkowany (karbowany) pierścień u twardawego.",
      isSafe: true
    },
    culinary: "Jadalny po obróbce termicznej, bardzo smaczny."
  },
  {
    id: "golabek_zielonawy",
    name: "Gołąbek Zielonawy",
    scientific: "Russula virescens",
    category: "jadalne",
    habitat: "liściaste",
    season: "lato",
    months: [6, 7, 8, 9], // Lipiec - Październik
    hymenophore: "blaszki",
    color: "olive_green", // Bladozielony
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/golabek_zielonawy.png",
    imageUnder: "assets/golabek_zielonawy.png",
    imageCross: "assets/golabek_zielonawy.png",
    descUnder: "Blaszki białe lub jasnokremowe, kruche.",
    descCross: "Miąższ biały, bardzo kruchy (jak ser), łagodny w smaku.",
    imageTwin: "assets/muchomor_sromotnikowy.png",
    nameTwin: "Muchomor Sromotnikowy (Śmiertelny)",
    categoryTwin: "trujące",
    diffs: "Gołąbek ma popękany kapelusz, kruchy miąższ, brak pierścienia i brak pochwy. Muchomor ma gładki kapelusz, pierścień i pochwę.",
    shortDesc: "Jeden z najsmaczniejszych gołąbków, o charakterystycznym spękanym kapeluszu.",
    fullDesc: "Uważany za najlepszego z gołąbków. Należy uważać przy zbieraniu, by nie pomylić z muchomorem sromotnikowym.",
    features: {
      cap: "Bladozielony do patynowego, skóra popękana na drobne poletka, matowy.",
      gills: "Białe do kremowych.",
      stem: "Biały, kruchy, gruby, bez pierścienia i bez pochwy u nasady.",
      habitat: "Lasy liściaste, pod dębami i bukami."
    },
    warning: {
      title: "Uważaj na pochwę!",
      text: "Przed włożeniem do koszyka wykręć całego grzyba, aby upewnić się, że nie wyrasta z pochwy (co oznaczałoby muchomora sromotnikowego). Pierścienia również ma brakować.",
      isSafe: true
    },
    culinary: "Świetny na patelnię, pieczony i gotowany."
  },
  {
    id: "sarniak",
    name: "Sarniak Dachówkowaty",
    scientific: "Sarcodon imbricatus",
    category: "jadalne",
    habitat: "iglaste",
    season: "jesień",
    months: [7, 8, 9, 10], // Sierpień - Listopad
    hymenophore: "kolce",
    color: "brown",
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/sarniak_dachowkowaty.png",
    imageUnder: "assets/sarniak_dachowkowaty.png",
    imageCross: "assets/sarniak_dachowkowaty.png",
    descUnder: "Pod spodem kapelusza ma drobne, szare do brązowawych kolce (nie blaszki ani rurki).",
    descCross: "Miąższ u młodych jasny i sprężysty, u starszych twardy i gorzkawy. Ma lekko korzenny zapach.",
    imageTwin: "assets/borowik_szlachetny.png", 
    nameTwin: "Inne gatunki z kolcami",
    categoryTwin: "niejadalne",
    diffs: "Sarniaka łatwo rozpoznać po grubych, dachówkowato ułożonych łuskach na wierzchu i kolcach pod spodem. Trudno go pomylić z trującym grzybem.",
    shortDesc: "Bardzo charakterystyczny, duży grzyb z dachówkowatymi łuskami i kolcami pod spodem.",
    fullDesc: "Popularna 'sarna' lub 'łoszak'. Najlepszy jest młody, starsze okazy robią się łykowate i gorzkie. Rośnie często gromadnie w borach iglastych.",
    features: {
      cap: "Duży (do 20 cm), płaski, pokryty grubymi, odstającymi łuskami niczym dachówki.",
      gills: "Hymenofor kolczasty – miękkie, kruche kolce.",
      stem: "Krótki, gruby, jasnobrązowy.",
      habitat: "Bory sosnowe i świerkowe, na piaszczystych glebach."
    },
    warning: {
      title: "Zbieraj tylko młode okazy",
      text: "Starsze osobniki są twarde, łykowate i niesmaczne. Do spożycia nadają się tylko młode o jasnym miękkim miąższu.",
      isSafe: true
    },
    culinary: "Świetny po ususzeniu do zup jako aromatyczna przyprawa (np. w proszku), starsze niesmaczne."
  },
  {
    id: "sromotnik_smrodliwy",
    name: "Sromotnik Smrodliwy",
    scientific: "Phallus impudicus",
    category: "niejadalne",
    habitat: "liściaste",
    season: "lato",
    months: [6, 7, 8, 9, 10],
    hymenophore: "inny",
    color: "green",
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/sromotnik_smrodliwy.png",
    imageUnder: "assets/sromotnik_smrodliwy.png",
    imageCross: "assets/sromotnik_smrodliwy.png",
    descUnder: "Główka grzyba pokryta jest oliwkowozielonym, śluzowatym zarodnikiem o intensywnym zapachu padliny.",
    descCross: "Grzyb wyrasta z 'czarciego jaja', tworząc porowaty, gąbczasty trzon.",
    imageTwin: "assets/smardz_jadalny.png",
    nameTwin: "Smardz",
    categoryTwin: "jadalne",
    diffs: "Smardz ma pofałdowaną, przypominającą plaster miodu główkę i pachnie grzybowo, Sromotnik ma śluz i cuchnie padliną, zwabiając muchy.",
    shortDesc: "Wydziela intensywny smród zgniłego mięsa, wyczuwalny z daleka.",
    fullDesc: "Niezwykły grzyb wyrastający z przypominającego jajo tworu. Jego odór zwabia muchy, które rozsiewają zarodniki. Ze względu na kształt nosi łacińską nazwę Phallus.",
    features: {
      cap: "Kształt naparstka, pokryty oliwkowozielonym, śmierdzącym śluzem.",
      gills: "Brak blaszek czy rurek, masa zarodnikowa rozpływa się w śluz.",
      stem: "Biały, porowaty, pusty w środku, gąbczasty.",
      habitat: "Lasy liściaste i mieszane, parki, miejsca bogate w próchnicę."
    },
    warning: {
      title: "Zapach nie do zniesienia",
      text: "Grzyb odstrasza już samym zapachem. Choć nie jest silnie toksyczny, jest absolutnie kulinarnie bezużyteczny z powodu wstrętnego smrodu.",
      isSafe: true
    },
    culinary: "Niejadalny."
  },
  {
    id: "borowik_ceglastopory",
    name: "Borowik Ceglastopory",
    scientific: "Neoboletus luridiformis",
    category: "jadalne",
    habitat: "iglaste",
    season: "lato",
    months: [5, 6, 7, 8, 9, 10],
    hymenophore: "rurki",
    color: "brown",
    stemFeatures: ["dotted"],
    fleshFeatures: ["blue"],
    image: "assets/borowik_ceglastopory.png",
    imageUnder: "assets/borowik_ceglastopory.png",
    imageCross: "assets/borowik_ceglastopory.png",
    descUnder: "Rurki są intensywnie krwistoczerwone (ceglaste) u dorosłych owocników. Po dotknięciu błyskawicznie sinieją.",
    descCross: "Miąższ jaskrawożółty, po przekrojeniu natychmiast mocno sinieje/błękitnieje.",
    imageTwin: "assets/borowik_szatanski.png",
    nameTwin: "Borowik Szatański",
    categoryTwin: "trujące",
    diffs: "Ceglastopory ma kapelusz CIEMNOBRĄZOWY i kropki na trzonie. Szatański ma kapelusz BARDZO JASNY (białawy, srebrzysty) i siateczkę na pękatym, purpurowym trzonie.",
    shortDesc: "Pospolicie nazywany 'ceglasiem' lub 'poczciwym szatanem'. Świetny jadalny, ale wymaga dłuższego gotowania.",
    fullDesc: "Choć sinienie odstrasza wielu grzybiarzy, jest to jeden z najsmaczniejszych grzybów. Surowy lub niedogotowany może powodować kłopoty żołądkowe, dlatego trzeba go obgotować.",
    features: {
      cap: "Ciemnobrązowy, zamszowy, ciemnieje pod wpływem dotyku.",
      gills: "Pory czerwono-ceglaste, silnie siniejące po ucisku.",
      stem: "Żółty w tle, gęsto pokryty czerwonymi STRZĘPKAMI/KROPKAMI (brak wyraźnej siatki).",
      habitat: "Głównie górzyste lasy iglaste i mieszane."
    },
    warning: {
      title: "Uwaga – Wymaga ugotowania",
      text: "Surowy jest lekko toksyczny (powoduje problemy z żołądkiem). Należy go gotować co najmniej 15-20 minut przed usmażeniem czy dodaniem do sosu.",
      isSafe: false
    },
    culinary: "Wspaniały na sosy i do zup, zachowuje twardą konsystencję po ugotowaniu."
  },
  {
    id: "kolczak_oblaczasty",
    name: "Kolczak Obłączasty",
    scientific: "Hydnum repandum",
    category: "jadalne",
    habitat: "liściaste",
    season: "jesień",
    months: [7, 8, 9, 10],
    hymenophore: "kolce",
    color: "yellow_orange",
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/kolczak_oblaczasty.png",
    imageUnder: "assets/kolczak_oblaczasty.png",
    imageCross: "assets/kolczak_oblaczasty.png",
    descUnder: "Charakterystyczne drobne, kruche, kremowo-różowawe kolce pod spodem.",
    descCross: "Miąższ blady, kruchy, po przekrojeniu powoli lekko żółknie.",
    imageTwin: "assets/pieprznik_jadalny.png",
    nameTwin: "Kurka (Pieprznik jadalny)",
    categoryTwin: "jadalne",
    diffs: "Kolczak ma kolce, a kurka fałdy (listewki). Barwa kolczaka jest bardziej pastelowo-morelowa.",
    shortDesc: "Jeden z najsmaczniejszych i najłatwiejszych do rozpoznania grzybów o kolczastym hymenoforze.",
    fullDesc: "Pospolity grzyb późnego lata i jesieni. Bardzo chętnie zbierany, gdyż praktycznie nie posiada trujących sobowtórów i rzadko bywa robaczywy.",
    features: {
      cap: "Bladopomarańczowy, kremowy do łososiowego. Matowy, nieregularnie pofalowany.",
      gills: "Łamliwe igiełki (kolce) biegnące lekko wzdłuż trzonu.",
      stem: "Krótki, masywny, bielszy niż kapelusz.",
      habitat: "Lasy liściaste i iglaste, lubi mech i buczynę."
    },
    warning: {
      title: "Goryczka starszych owocników",
      text: "Starsze owocniki mogą być gorzkawe. Często pomaga osunięcie kolców palcem przed gotowaniem.",
      isSafe: true
    },
    culinary: "Świetny jako grzyb duszony, doskonały w marynacie octowej."
  },
  {
    id: "czernidlak",
    name: "Czernidłak Kołpakowaty",
    scientific: "Coprinus comatus",
    category: "jadalne",
    habitat: "inny",
    season: "jesień",
    months: [8, 9, 10],
    hymenophore: "blaszki",
    color: "white",
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/czernidlak_kolpakowaty.png",
    imageUnder: "assets/czernidlak_kolpakowaty.png",
    imageCross: "assets/czernidlak_kolpakowaty.png",
    descUnder: "Blaszki u młodych grzybów są białe, potem różowieją, a na końcu całkowicie rozpływają się w czarną 'atramentową' ciecz.",
    descCross: "Miąższ jest bardzo delikatny, biały.",
    imageTwin: "assets/czernidlak_pospolity.png", 
    nameTwin: "Czernidłak pospolity",
    categoryTwin: "trujące",
    diffs: "Czernidłak pospolity (gładki kapelusz) w połączeniu z alkoholem jest toksyczny. Kołpakowaty (z dużymi odstającymi łuskami) jest bezpieczny nawet z alkoholem.",
    shortDesc: "Przedziwny grzyb o kapeluszu w kształcie walca, który z czasem rozpływa się w czarny płyn.",
    fullDesc: "Bardzo smaczny grzyb jadalny, ale tylko wtedy, gdy jego blaszki są jeszcze całkowicie białe. Rośnie najczęściej na trawnikach i parkach.",
    features: {
      cap: "Cylindryczny, biały, z odstającymi kudłatymi łuskami.",
      gills: "Wolne, bardzo gęste. Początkowo białe, potem czarne i płynne.",
      stem: "Biały, wysoki i smukły.",
      habitat: "Łąki, trawniki, parki, często rośnie w miastach."
    },
    warning: {
      title: "Uwaga na starzenie",
      text: "Zbieraj wyłącznie młode, w całości białe osobniki. Należy je przyrządzić najpóźniej do 2-3 godzin od zebrania.",
      isSafe: true
    },
    culinary: "Delikatny smak, idealny do duszenia na maśle."
  },
  {
    id: "lejkowiec",
    name: "Lejkowiec Dęty",
    scientific: "Craterellus cornucopioides",
    category: "jadalne",
    habitat: "liściaste",
    season: "jesień",
    months: [8, 9, 10, 11],
    hymenophore: "inny",
    color: "brown", 
    stemFeatures: [],
    fleshFeatures: [],
    image: "assets/lejkowiec_dety.png",
    imageUnder: "assets/lejkowiec_dety.png",
    imageCross: "assets/lejkowiec_dety.png",
    descUnder: "Zewnętrzna część jest gładka lub lekko pofałdowana, szara do czarnej, bez wyraźnych blaszek czy rurek.",
    descCross: "Cieniutki jak pergamin, rurkowaty i pusty w środku, miąższ niemal nie istnieje.",
    imageTwin: "assets/brak.png",
    nameTwin: "Inne drobne grzyby",
    categoryTwin: "niejadalne",
    diffs: "Jego rurkowaty, rozszerzający się ku górze kształt czarnej trąbki jest nie do pomylenia z trującym grzybem.",
    shortDesc: "Zwany też 'trąbką zmarłych'. Ma bardzo silny aromat, to wybitna przyprawa grzybowa.",
    fullDesc: "Wygląda ponuro i mrocznie, co odrzuca niedoświadczonych grzybiarzy. We Francji z powodu smaku nazywany 'truflem dla ubogich'.",
    features: {
      cap: "Kształt głębokiego lejka, wewnątrz szaroczarny, łuseczkowaty.",
      gills: "Brak - zewnątrz kapelusza gładkie/lekko pofalowane.",
      stem: "Trzon to kontynuacja lejka kapelusza, pusty w środku.",
      habitat: "Lasy liściaste, buczyny i dąbrowy."
    },
    warning: {
      title: "Trudny do zauważenia",
      text: "Grzyb ten idealnie wtapia się w jesienne, mokre i ciemne liście na dnie bukowego lasu.",
      isSafe: true
    },
    culinary: "Znakomity do suszenia! Sproszkowany to wyśmienita przyprawa."
  }
];

// ── DANE ANATOMICZNE (ANATOMY EXPLORER DATA) ──────────────────────────────
const ANATOMY_DATA = {
  cap: {
    title: "Kapelusz (Cap)",
    subtitle: "Górna część osłaniająca owocnik",
    desc: "Chroni hymenofor przed zniszczeniem i deszczem. Zwracaj szczególną uwagę na strukturę jego powierzchni. Może być lepka i śluzowata (maślak zwyczajny), aksamitna (podgrzybek), pokryta brązowymi łuskami (czubajka kania), lub usiana białymi brodawkami (muchomor czerwony i plamisty).",
    warn: "Uwaga: Ulewny deszcz może całkowicie zmyć białe kropki z kapelusza muchomora czerwonego lub plamistego, przez co stają się one łudząco podobne do gołąbków lub innych gatunków jadalnych!"
  },
  hymenophore: {
    title: "Hymenofor (Spód kapelusza)",
    subtitle: "Struktura produkująca zarodniki",
    desc: "Występuje w 3 odmianach: rurek (gąbka), blaszek (cienkie listki) oraz listewek (fałdy miąższu). Grzyby rurkowe są najbezpieczniejsze dla początkujących, ponieważ w Polsce żaden z nich nie jest śmiertelnie trujący (goryczak żółciowy jest jedynie niejadalny z powodu goryczy).",
    warn: "Uwaga: Śmiertelnie trujące muchomory (sromotnikowy, jadowity, plamisty) ZAWSZE posiadają blaszki, które pozostają czysto białe przez całe życie grzyba i nie ciemnieją."
  },
  ring: {
    title: "Pierścień (Mankiet)",
    subtitle: "Błoniasta osłonka na trzonie",
    desc: "Pozostałość po osłonie chroniącej młody hymenofor. U Czubajki Kani pierścień jest bardzo gruby, dwuwarstwowy, wełnisty i co najważniejsze — nie jest przyrośnięty do trzonu (można go swobodnie przesuwać). U trujących muchomorów pierścień zwisa wiotko i jest trwale zrośnięty z trzonem.",
    warn: "Wskazówka: Nigdy nie zbieraj kani, jeśli jej pierścień jest cienki, delikatny i przyrośnięty na stałe do trzonu — to cecha trujących muchomorów!"
  },
  stem: {
    title: "Trzon (Nóżka)",
    subtitle: "Podpora i szkielet grzyba",
    desc: "Trzon utrzymuje kapelusz nad ziemią, umożliwiając rozsiewanie zarodników. Może być baryłkowaty i pełny (borowik), smukły i pusty w środku (kania), pokryty drobnymi, czarnymi łuseczkami (koźlarz) lub siateczką. Goryczak żółciowy ma trzon z ciemną siatką, a borowik z jasną, białawą.",
    warn: "Uwaga: U koźlarzy trzon pokryty jest ciemnymi łuseczkami przypominającymi włoski. Gładkie trzony o oliwkowym wzorku to domena muchomora sromotnikowego."
  },
  volva: {
    title: "Pochwa (Otoczka u nasady)",
    subtitle: "Klucz bezpieczeństwa grzybiarza",
    desc: "Skórzasty woreczek lub bulwiasta otoczka u samej podstawy trzonu. Jest to pozostałość po osłonie całkowitej, z której wyrosły młode osobniki. To najważniejsza i bezwzględna cecha rozpoznawcza śmiertelnie trujących muchomorów.",
    warn: "Zasada Życia: Zawsze wykopuj grzyby w całości, a nie tylko odcinaj kapelusze! Pochwa trującego muchomora sromotnikowego często ukryta jest głęboko pod ściółką i mchem."
  }
};

// ── PYTANIA QUIZOWE (QUIZ DATA - 8 QUESTIONS) ────────────────────────────
const QUIZ_QUESTIONS = [
  {
    question: "Spójrz na nasadę trzonu tego zielonawego grzyba z pierścieniem. Widać tam wyraźną pochwę (otoczkę). Jaki to gatunek?",
    image: "assets/muchomor_sromotnikowy.png",
    options: [
      { text: "Czubajka kania", correct: false },
      { text: "Muchomor sromotnikowy", correct: true },
      { text: "Zielony gołąbek", correct: false },
      { text: "Gąska zielonka", correct: false }
    ],
    feedback: "Prawidłowo! To blady, oliwkowozielony grzyb z białą pochwą u nasady trzonu. Jeden z najbardziej trujących organizmów na Ziemi."
  },
  {
    question: "Na trzonie tego grzyba z rurkami widać grubą, ciemnobrązową siateczkę, a rurki pod kapeluszem są bladoróżowe. Jak smakuje jego miąższ?",
    image: "assets/goryczak_zolciowy.png",
    options: [
      { text: "Jest przyjemnie słodki", correct: false },
      { text: "Jest pikantny jak pieprz", correct: false },
      { text: "Jest skrajnie gorzki", correct: true },
      { text: "Nie ma smaku", correct: false }
    ],
    feedback: "Doskonale! To goryczak żółciowy. Ma skrajnie gorzki smak, który psuje całą potrawę."
  },
  {
    question: "Znalazłeś okazałego grzyba na łące. Kapelusz ma brązowe łuski, trzon jest wysoki i pstrokaty, a pierścień daje się swobodnie przesuwać w górę i w dół. Co z nim zrobisz?",
    image: "assets/czubajka_kania.png",
    options: [
      { text: "Zostawię w lesie, bo to trujący muchomor", correct: false },
      { text: "Zabiorę, to doskonała czubajka kania", correct: true },
      { text: "To pieczarka polna, nadaje się na surowo", correct: false },
      { text: "Zetnę sam kapelusz i zjem go na surowo", correct: false }
    ],
    feedback: "Brawo! Ruchomy pierścień (który można przesuwać po trzonie) oraz brak skórzastego woreczka (pochwy) u nasady trzonu to kluczowe cechy bezpiecznej Kani."
  },
  {
    question: "Pod kapeluszem tego żółtego grzyba znajdują się grube, widlaste fałdy (listewki) zbiegające nisko na trzon. Czy ten grzyb ma rurki lub typowe blaszki?",
    image: "assets/pieprznik_jadalny.png",
    options: [
      { text: "Tak, ma cienkie blaszki", correct: false },
      { text: "Tak, ma żółtą gąbkę (rurki)", correct: false },
      { text: "Nie, ma jedynie fałdy zwane listewkami", correct: true },
      { text: "Nie ma żadnych struktur pod kapeluszem", correct: false }
    ],
    feedback: "Zgadza się! Charakterystyczny żółty grzyb lejkowaty, który zamiast blaszek ma grube fałdy (listewki) zbiegające na trzon."
  },
  {
    question: "Napotykasz w mchu całkowicie białego grzyba z blaszkami, pierścieniem i bulwiastą pochwą u nasady trzonu. Co to za gatunek?",
    image: "assets/muchomor_jadowity.png",
    options: [
      { text: "Pieczarka polna", correct: false },
      { text: "Muchomor jadowity", correct: true },
      { text: "Gołąbek biały", correct: false },
      { text: "Mleczaj biel", correct: false }
    ],
    feedback: "Świetna odpowiedź! To muchomor jadowity, śmiertelnie trujący owocnik. Często mylony z pieczarką polną, która nie posiada pochwy i ma ciemniejące blaszki."
  },
  {
    question: "Po przełamaniu kapelusza tego pomarańczowego grzyba wydziela się marchewkowo-pomarańczowe mleczko, które po chwili na powietrzu zielenieje. Jaka to cecha charakterystyczna?",
    image: "assets/mleczaj_rydz.png",
    options: [
      { text: "To cecha śmiertelnie trującego muchomora", correct: false },
      { text: "To cecha wyśmienitego mleczaja rydza", correct: true },
      { text: "To reakcja na zanieczyszczenie metalami ciężkimi", correct: false },
      { text: "To cecha mleczaja wełnianki", correct: false }
    ],
    feedback: "Prawidłowo! Wydzielanie marchewkowego mleczka, które zielenieje na powietrzu, to niezawodna cecha mleczaja rydza."
  },
  {
    question: "Ten pomarańczowy grzyb ma gęste, cienkie, regularnie rozwidlone blaszki, a jego trzon jest miękki i wiotki. To lisówka pomarańczowa. Jakie ma właściwości?",
    image: "assets/lisowka_pomaranczowa.png",
    options: [
      { text: "Jest wyśmienitym grzybem jadalnym", correct: false },
      { text: "Jest śmiertelnie trujący", correct: false },
      { text: "Jest niejadalny i może wywołać zaburzenia żołądkowe", correct: true },
      { text: "Jest pod ścisłą ochroną", correct: false }
    ],
    feedback: "Świetnie! Lisówka pomarańczowa (fałszywa kurka) jest niejadalna i w większych ilościach wywołuje zatrucia pokarmowe."
  },
  {
    question: "Rurki tego grzyba z brązowym kapeluszem po uciśnięciu lub uszkodzeniu szybko barwią się na ciemnosiny lub niebieskawy kolor. O czym to świadczy?",
    image: "assets/podgrzybek_brunatny.png",
    options: [
      { text: "To dowód na to, że grzyb jest trujący", correct: false },
      { text: "To naturalna reakcja utleniania niektórych podgrzybków", correct: true },
      { text: "To oznaka, że grzyb jest stary i spleśniały", correct: false },
      { text: "Świadczy to o obecności psylocybiny", correct: false }
    ],
    feedback: "Znakomicie! Szybkie sinienie podgrzybka to nieszkodliwa reakcja chemiczna utleniania się związków w nim zawartych."
  },
  {
    question: "Gotujesz zupę z maślakiem sitarzem. Po chwili zauważasz, że grzyby w garnku zrobiły się purpurowo-czerwonawe. Co to oznacza?",
    image: "assets/maslak_sitarz.png",
    options: [
      { text: "Zebrałem trującego sobowtóra, muszę wylać zupę", correct: false },
      { text: "To naturalna reakcja tego gatunku podczas obróbki termicznej", correct: true },
      { text: "Grzyby były zepsute", correct: false },
      { text: "Woda była zbyt twarda", correct: false }
    ],
    feedback: "Zgadza się! Maślak sitarz naturalnie zmienia barwę miąższu na czerwono-fioletową po obróbce termicznej."
  },
  {
    question: "Spotykasz w lesie grzyba o szaro-brązowym kapeluszu i pierścieniu, u którego blaszki są białe. Pierścień jest wyraźnie prążkowany od góry, a grzyb pachnie rzepą.",
    image: "assets/muchomor_twardawy.png",
    options: [
      { text: "To śmiertelnie trujący muchomor sromotnikowy", correct: false },
      { text: "To muchomor twardawy (jadalny, ale ryzykowny)", correct: true },
      { text: "To opieńka miodowa", correct: false },
      { text: "To czubajka kania", correct: false }
    ],
    feedback: "Doskonale. To jadalny muchomor twardawy. Jego prążkowany pierścień odróżnia go od śmiertelnie trującego muchomora plamistego."
  },
  {
    question: "Widzisz zielonawego grzyba bez pierścienia, bez pochwy w ziemi, którego miąższ w trzonie kruszy się łatwo w palcach jak kreda. Kapelusz jest spękany, patynowy. Co to?",
    image: "assets/golabek_zielonawy.png",
    options: [
      { text: "Muchomor sromotnikowy", correct: false },
      { text: "Zielona gąska", correct: false },
      { text: "Gołąbek zielonawy", correct: true },
      { text: "Pieczarka łąkowa", correct: false }
    ],
    feedback: "Brawo! Kruchy trzon łamiący się jak kreda i popękany, patynowy kapelusz bez pochwy u nasady to cechy pysznego gołąbka zielonawego."
  }
];

// ── ZMIENNE STANU (STATE) ────────────────────────────────────────────────
let currentQuizIndex = 0;
let quizScore = 0;
let currentSelectedMushroom = null;

// Filtry wielokryteriowe (Atlas)
let activeCategory = "all";
let activeHabitat = "all";
let activeSeason = "all";
let searchQuery = "";

// Stan Kreatora Identyfikacji (Wizard)
let currentWizardStep = 1;
const wizardAnswers = {
  hymenophore: "",
  color: "",
  stemFeatures: [],
  fleshFeatures: []
};

// Stan Kalendarza Sezonowości
let activeCalendarMonth = 8; // Wrzesień na start

// Stan Timera w Quizie
let quizTimer = null;
let quizTimeLeft = 15;

// ── WEB AUDIO SYNTHESIZER (DŹWIĘKI DO QUIZU) ─────────────────────────────
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSuccessSound() {
  initAudio();
  if (!audioCtx) return;
  
  const now = audioCtx.currentTime;
  // Arpeggio C4 -> E4 -> G4
  const freqs = [261.63, 329.63, 392.00];
  freqs.forEach((freq, index) => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now + index * 0.1);
    
    gainNode.gain.setValueAtTime(0.15, now + index * 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.3);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start(now + index * 0.1);
    osc.stop(now + index * 0.1 + 0.3);
  });
}

function playFailSound() {
  initAudio();
  if (!audioCtx) return;
  
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  osc.type = "sawtooth";
  // Zjazd częstotliwości w dół (efekt tąpnięcia)
  osc.frequency.setValueAtTime(120, now);
  osc.frequency.linearRampToValueAtTime(60, now + 0.5);
  
  gainNode.gain.setValueAtTime(0.15, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
  
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  osc.start(now);
  osc.stop(now + 0.5);
}

// ── ELEMENTY DOM (DOM ELEMENTS) ──────────────────────────────────────────
const mushroomGrid = document.getElementById("mushroom-grid");

// Modal
const modal = document.getElementById("mushroom-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalImg = document.getElementById("modal-img");
const modalBadge = document.getElementById("modal-badge");
const modalScientific = document.getElementById("modal-scientific");
const modalTitle = document.getElementById("modal-title");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Quiz
const quizIntro = document.getElementById("quiz-intro");
const quizPlay = document.getElementById("quiz-play");
const quizResults = document.getElementById("quiz-results");
const btnStartQuiz = document.getElementById("btn-start-quiz");
const btnRestartQuiz = document.getElementById("btn-restart-quiz");
const quizQuestionNumber = document.getElementById("quiz-question-number");
const quizCurrentScore = document.getElementById("quiz-current-score");
const quizQuestionText = document.getElementById("quiz-question-text");
const quizQuestionImage = document.getElementById("quiz-question-image");
const quizOptionsContainer = document.getElementById("quiz-options");
const quizFeedbackContainer = document.getElementById("quiz-feedback");
const quizFeedbackText = document.getElementById("quiz-feedback-text");
const btnNextQuestion = document.getElementById("btn-next-question");
const quizProgressBar = document.getElementById("quiz-progress-bar");
const quizResultsDesc = document.getElementById("quiz-results-desc");
const quizResultsIcon = document.getElementById("quiz-results-icon");
const quizRank = document.getElementById("quiz-rank");
const quizTimerBar = document.getElementById("quiz-timer-bar");
const quizTimerSeconds = document.getElementById("quiz-timer-seconds");

// Checklist
const checklistCount = document.getElementById("checklist-count");
const checklistProgressBar = document.getElementById("checklist-progress");
const checkboxes = document.querySelectorAll(".checklist-item input");

// ── AKTYWACJA ŚWIETLIKÓW W TLE (FIREFLIES ENGINE) ─────────────────────────
function spawnFireflies() {
  const container = document.getElementById("fireflies");
  if (!container) return;
  const count = 30;
  for (let i = 0; i < count; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    firefly.style.left = `${Math.random() * 100}vw`;
    firefly.style.top = `${Math.random() * 80 + 10}vh`;
    firefly.style.animationDelay = `${Math.random() * 10}s`;
    firefly.style.animationDuration = `${Math.random() * 8 + 6}s`;
    container.appendChild(firefly);
  }
}

// ── FILTROWANIE I RENDEROWANIE KART ATLASU (FILTER & RENDER WITH GSAP) ──
function filterAndRenderAtlas() {
  gsap.to(".mushroom-card", {
    opacity: 0,
    y: -20,
    scale: 0.95,
    duration: 0.2,
    stagger: 0.015,
    onComplete: () => {
      mushroomGrid.innerHTML = "";
      
      const filteredData = MUSHROOM_DATABASE.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                              item.scientific.toLowerCase().includes(searchQuery);
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;
        const matchesHabitat = activeHabitat === "all" || item.habitat === activeHabitat;
        const matchesSeason = activeSeason === "all" || item.season === activeSeason || item.season.includes(activeSeason);
        
        return matchesSearch && matchesCategory && matchesHabitat && matchesSeason;
      });

      if (filteredData.length === 0) {
        mushroomGrid.innerHTML = `
          <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
            <i class="fa-solid fa-magnifying-glass-minus" style="font-size: 3rem; margin-bottom: 1rem; color: var(--color-primary);"></i>
            <h3 style="color: var(--color-text-light); font-family: var(--font-serif); margin-bottom: 0.5rem;">Nie znaleziono grzybów</h3>
            <p>Spróbuj zmienić kryteria wyszukiwania lub zresetować filtry.</p>
          </div>
        `;
        return;
      }

      filteredData.forEach(item => {
        const card = document.createElement("article");
        card.classList.add("mushroom-card");
        card.setAttribute("id", `card-${item.id}`);
        
        const badgeClass = item.category === "jadalne" ? "badge-edible" : "badge-poisonous";
        const badgeText = item.category === "jadalne" ? "Jadalny" : "Trujący";
        
        card.innerHTML = `
          <div class="card-img-wrapper">
            <div class="card-img" style="background-image: url('${item.image}')"></div>
            <span class="card-badge ${badgeClass}">${badgeText}</span>
          </div>
          <div class="card-body">
            <span class="card-scientific">${item.scientific}</span>
            <h3 class="card-title">${item.name}</h3>
            <p class="card-desc">${item.shortDesc}</p>
            <div class="card-footer">
              <span><i class="fa-solid fa-feather"></i> Szczegóły</span>
              <span><i class="fa-solid fa-chevron-right"></i></span>
            </div>
          </div>
        `;
        
        card.addEventListener("click", () => openMushroomModal(item));
        
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -10,
            boxShadow: "0 15px 40px rgba(229, 169, 59, 0.25)",
            borderColor: "var(--color-primary)",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.card-img'), {
            scale: 1.08,
            duration: 0.4,
            ease: "power2.out"
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            borderColor: "var(--color-border)",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(card.querySelector('.card-img'), {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        mushroomGrid.appendChild(card);
      });

      gsap.fromTo(".mushroom-card",
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.03, duration: 0.45, ease: "power3.out" }
      );
    }
  });
}

// ── INTERAKTYWNA BUDOWA (ANATOMY EXPLORER LOGIC) ─────────────────────────
function selectAnatomyPart(partKey) {
  const panel = document.getElementById("anatomy-info-panel");
  const data = ANATOMY_DATA[partKey];
  
  if (!data) return;

  // Podświetlenie odpowiedniego punktu
  document.querySelectorAll(".hotspot").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-part") === partKey) {
      btn.classList.add("active");
    }
  });

  gsap.to(panel, {
    opacity: 0,
    y: 10,
    duration: 0.2,
    onComplete: () => {
      panel.innerHTML = `
        <div class="anatomy-detail-card">
          <h3><i class="fa-solid fa-circle-info"></i> ${data.title}</h3>
          <span class="anatomy-detail-subtitle">${data.subtitle}</span>
          <p>${data.desc}</p>
          <div class="anatomy-diff-box">
            <h4><i class="fa-solid fa-circle-exclamation"></i> Ostrzeżenie / Porównanie</h4>
            <p>${data.warn}</p>
          </div>
        </div>
      `;
      gsap.fromTo(panel,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  });
}

// ── KREATOR IDENTYFIKACJI (WIZARD ENGINE) ────────────────────────────────
function initWizard() {
  const stepPanes = document.querySelectorAll(".wizard-step-pane");
  const navSteps = document.querySelectorAll(".wizard-nav-step");
  const prevBtn = document.getElementById("btn-wizard-prev");
  const nextBtn = document.getElementById("btn-wizard-next");
  const submitBtn = document.getElementById("btn-wizard-submit");
  const progressBar = document.getElementById("wizard-progress-bar");

  function showStep(step) {
    currentWizardStep = step;
    
    // Progress
    const percent = (step / 4) * 100;
    progressBar.style.width = `${percent}%`;

    // Nav active classes
    navSteps.forEach(nav => {
      const s = parseInt(nav.getAttribute("data-step"));
      nav.classList.remove("active");
      if (s === step) nav.classList.add("active");
    });

    // Pane Visibility with animations
    stepPanes.forEach(pane => {
      const s = parseInt(pane.id.split("-").pop());
      if (s === step) {
        pane.classList.remove("hidden");
        gsap.fromTo(pane, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
      } else {
        pane.classList.add("hidden");
      }
    });

    // Button states
    if (step === 1) {
      prevBtn.classList.add("disabled");
      prevBtn.disabled = true;
    } else {
      prevBtn.classList.remove("disabled");
      prevBtn.disabled = false;
    }

    if (step === 4) {
      nextBtn.classList.add("hidden");
      submitBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      submitBtn.classList.add("hidden");
    }
  }

  // Kliknięcia kart opcji w Krokach 1 & 2 (Single Choice)
  const optionCards = document.querySelectorAll(".wizard-option-card");
  optionCards.forEach(card => {
    card.addEventListener("click", () => {
      const key = card.getAttribute("data-key");
      const value = card.getAttribute("data-value");
      
      // Deselect siblings
      card.parentElement.querySelectorAll(".wizard-option-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      
      wizardAnswers[key] = value;
    });
  });

  // Obsługa kliknięć Checkboxów w Krokach 3 & 4 (Multiple Choice)
  const checkboxCards = document.querySelectorAll(".wizard-checkbox-card");
  checkboxCards.forEach(card => {
    const input = card.querySelector("input");
    card.addEventListener("click", (e) => {
      if (e.target !== input) {
        input.checked = !input.checked;
      }
      card.classList.toggle("selected", input.checked);
      updateMultiSelectAnswers();
    });
  });

  function updateMultiSelectAnswers() {
    // Krok 3: stem_features
    const stemInputs = document.querySelectorAll("input[name='stem_features']:checked");
    wizardAnswers.stemFeatures = Array.from(stemInputs).map(i => i.value);

    // Krok 4: flesh_features
    const fleshInputs = document.querySelectorAll("input[name='flesh_features']:checked");
    wizardAnswers.fleshFeatures = Array.from(fleshInputs).map(i => i.value);
  }

  prevBtn.addEventListener("click", () => {
    if (currentWizardStep > 1) showStep(currentWizardStep - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentWizardStep < 4) showStep(currentWizardStep + 1);
  });

  submitBtn.addEventListener("click", () => {
    calculateWizardMatches();
  });

  document.getElementById("btn-wizard-reset").addEventListener("click", () => {
    // Resetuj stan
    wizardAnswers.hymenophore = "";
    wizardAnswers.color = "";
    wizardAnswers.stemFeatures = [];
    wizardAnswers.fleshFeatures = [];
    
    // Resetuj style
    optionCards.forEach(c => c.classList.remove("selected"));
    checkboxCards.forEach(c => {
      c.classList.remove("selected");
      c.querySelector("input").checked = false;
    });

    document.getElementById("wizard-results-panel").classList.add("hidden");
    showStep(1);
  });

  showStep(1);
}

function calculateWizardMatches() {
  const resultsPanel = document.getElementById("wizard-results-panel");
  const resultsList = document.getElementById("wizard-results-list");
  
  resultsPanel.classList.remove("hidden");
  resultsList.innerHTML = "";

  const scoredMushrooms = MUSHROOM_DATABASE.map(item => {
    let score = 0;
    let maxPossible = 0;

    // Hymenofor (Weight: 30)
    maxPossible += 30;
    if (wizardAnswers.hymenophore && item.hymenophore === wizardAnswers.hymenophore) {
      score += 30;
    }

    // Color (Weight: 25)
    maxPossible += 25;
    if (wizardAnswers.color && item.color === wizardAnswers.color) {
      score += 25;
    }

    // Stem Features (Weight: 25)
    maxPossible += 25;
    const matchCountStem = wizardAnswers.stemFeatures.filter(f => item.stemFeatures.includes(f)).length;
    // Sprawdzamy czy zgadzają się cechy
    if (wizardAnswers.stemFeatures.length > 0) {
      score += (matchCountStem / wizardAnswers.stemFeatures.length) * 25;
    } else if (item.stemFeatures.length === 0) {
      score += 25; // obaj nie mają cech szczególnych trzonu
    }

    // Flesh Features (Weight: 20)
    maxPossible += 20;
    const matchCountFlesh = wizardAnswers.fleshFeatures.filter(f => item.fleshFeatures.includes(f)).length;
    if (wizardAnswers.fleshFeatures.length > 0) {
      score += (matchCountFlesh / wizardAnswers.fleshFeatures.length) * 20;
    } else if (item.fleshFeatures.length === 0) {
      score += 20;
    }

    const matchPercent = Math.round((score / maxPossible) * 100);
    return { item, matchPercent };
  });

  // Sortuj wyniki malejąco po procencie dopasowania
  const sortedResults = scoredMushrooms
    .filter(res => res.matchPercent >= 30)
    .sort((a, b) => b.matchPercent - a.matchPercent);

  if (sortedResults.length === 0) {
    resultsList.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--color-text-muted);">
        <i class="fa-solid fa-ghost" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--color-danger);"></i>
        <p>Brak gatunków spełniających kryteria powyżej 30% dopasowania. Spróbuj zmienić parametry.</p>
      </div>
    `;
    return;
  }

  sortedResults.forEach(res => {
    const card = document.createElement("div");
    card.classList.add("result-item");
    
    const warnBadge = res.item.category === "trujące" 
      ? `<span class="result-warn"><i class="fa-solid fa-circle-exclamation"></i> UWAGA: Gatunek trujący!</span>`
      : "";
    
    const badgeClass = res.matchPercent >= 70 ? "" : "low";

    card.innerHTML = `
      <div class="result-main">
        <div class="result-name-wrapper">
          <span class="result-name">${res.item.name}</span>
          <span class="result-scientific">${res.item.scientific}</span>
        </div>
        ${warnBadge}
      </div>
      <div class="result-meta-side">
        <span class="result-score-badge ${badgeClass}">${res.matchPercent}% Zgodności</span>
        <button class="btn btn-secondary btn-sm" style="padding: 0.5rem 1rem;"><i class="fa-solid fa-book-open"></i> Otwórz</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openMushroomModal(res.item);
    });

    resultsList.appendChild(card);
  });

  gsap.fromTo(".result-item",
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ease: "power2.out" }
  );

  // Zjedź w dół do wyników
  resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ── KALENDARZ SEZONOWOŚCI (SEASONALITY ENGINE) ───────────────────────────
function renderCalendarForMonth(monthIndex) {
  const grid = document.getElementById("calendar-mushrooms-grid");
  const title = document.getElementById("calendar-results-title");
  
  const monthNames = [
    "Styczniu", "Lutym", "Marcu", "Kwietniu", "Maju", "Czerwcu", 
    "Lipcu", "Sierpniu", "Wrześniu", "Październiku", "Listopadzie", "Grudniu"
  ];

  title.textContent = `Grzyby owocujące w ${monthNames[monthIndex]}`;
  
  gsap.to(".calendar-mush-card", {
    opacity: 0,
    y: -10,
    duration: 0.2,
    stagger: 0.01,
    onComplete: () => {
      grid.innerHTML = "";
      
      const activeMushrooms = MUSHROOM_DATABASE.filter(item => item.months.includes(monthIndex));
      
      if (activeMushrooms.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-muted);">
            <i class="fa-solid fa-snowflake" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--color-accent);"></i>
            <p>Brak aktywnych owocników w tym miesiącu (sezon zimowy).</p>
          </div>
        `;
        return;
      }

      activeMushrooms.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("calendar-mush-card");
        
        const badgeColor = item.category === "jadalne" ? "text-success" : "text-danger";
        const badgeLabel = item.category === "jadalne" ? "Jadalny" : "Trujący";

        card.innerHTML = `
          <div class="calendar-mush-img" style="background-image: url('${item.image}')"></div>
          <div class="calendar-mush-info">
            <span class="calendar-mush-name">${item.name}</span>
            <span class="calendar-mush-scientific">${item.scientific}</span>
            <span class="calendar-mush-badge ${badgeColor}">${badgeLabel}</span>
          </div>
        `;

        card.addEventListener("click", () => {
          openMushroomModal(item);
        });

        grid.appendChild(card);
      });

      gsap.fromTo(".calendar-mush-card",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.03, ease: "power2.out" }
      );
    }
  });
}

function initCalendar() {
  const monthBtns = document.querySelectorAll(".month-btn");
  monthBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      monthBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const m = parseInt(btn.getAttribute("data-month"));
      activeCalendarMonth = m;
      renderCalendarForMonth(m);
    });
  });

  // Startowy wrzesień
  renderCalendarForMonth(activeCalendarMonth);
}

// ── OBSŁUGA ZAKŁADEK MODALA (MODAL TABS) ──────────────────────────────────
function switchModalTab(tabId) {
  const currentActive = document.querySelector(".tab-content:not(.hidden)");
  const targetContent = document.getElementById(`tab-${tabId}`);
  
  if (currentActive === targetContent) return;
  
  tabButtons.forEach(btn => btn.classList.remove("active"));
  const activeBtn = Array.from(tabButtons).find(btn => btn.getAttribute("data-tab") === tabId);
  if (activeBtn) activeBtn.classList.add("active");
  
  if (currentActive) {
    gsap.to(currentActive, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        currentActive.classList.add("hidden");
        targetContent.classList.remove("hidden");
        gsap.fromTo(targetContent,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      }
    });
  } else {
    targetContent.classList.remove("hidden");
    gsap.fromTo(targetContent,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }
}

// ── LEKTOR TEKSTU (TEXT TO SPEECH ENGINE) ──────────────────────────────────
let speechUtterance = null;
let isSpeaking = false;

function toggleSpeech() {
  if (isSpeaking) {
    stopSpeech();
  } else {
    startSpeech();
  }
}

function startSpeech() {
  if (!currentSelectedMushroom) return;
  
  // Stop existing speech
  window.speechSynthesis.cancel();
  
  const m = currentSelectedMushroom;
  
  // Clean description values for clean pronunciation
  const capText = m.features.cap;
  const gillsText = m.features.gills;
  const stemText = m.features.stem;
  const habitatText = m.features.habitat;
  const descText = m.fullDesc;
  const warnText = m.warning.text;
  const culinaryText = m.culinary;
  const twinText = (m.imageTwin && m.imageTwin !== "brak") 
    ? `Jego głównym sobowtórem jest ${m.nameTwin}. Różnice kluczowe to: ${m.diffs}` 
    : "Ten gatunek nie posiada bliskich, trujących sobowtórów w Polsce.";

  const textToSpeak = `
    Gatunek: ${m.name}. Nazwa naukowa: ${m.scientific}.
    Kategoria bezpieczeństwa: ${m.category === "jadalne" ? "Grzyb jadalny" : "Grzyb trujący"}.
    
    Opis ogólny:
    ${descText}
    
    Cechy anatomiczne:
    Kapelusz: ${capText}.
    Spód kapelusza: ${gillsText}.
    Trzon: ${stemText}.
    Siedlisko: ${habitatText}.
    
    Porównanie z sobowtórami i bezpieczeństwo w lesie:
    ${warnText}
    ${twinText}
    
    Zastosowanie w kuchni:
    ${culinaryText}
  `;

  speechUtterance = new SpeechSynthesisUtterance(textToSpeak);
  speechUtterance.lang = "pl-PL";
  speechUtterance.rate = 1.0;
  
  // Find Polish voice if available
  const voices = window.speechSynthesis.getVoices();
  const plVoice = voices.find(v => v.lang.includes("pl") || v.lang.includes("PL"));
  if (plVoice) speechUtterance.voice = plVoice;

  const btnSpeak = document.getElementById("btn-modal-speak");

  speechUtterance.onstart = () => {
    isSpeaking = true;
    if (btnSpeak) {
      btnSpeak.innerHTML = `<i class="fa-solid fa-circle-stop"></i> Zatrzymaj`;
      btnSpeak.classList.add("speaking");
    }
  };

  speechUtterance.onend = () => {
    isSpeaking = false;
    if (btnSpeak) {
      btnSpeak.innerHTML = `<i class="fa-solid fa-volume-high"></i> Czytaj opowieść`;
      btnSpeak.classList.remove("speaking");
    }
  };

  speechUtterance.onerror = () => {
    isSpeaking = false;
    if (btnSpeak) {
      btnSpeak.innerHTML = `<i class="fa-solid fa-volume-high"></i> Czytaj opowieść`;
      btnSpeak.classList.remove("speaking");
    }
  };

  window.speechSynthesis.speak(speechUtterance);
}

function stopSpeech() {
  window.speechSynthesis.cancel();
  isSpeaking = false;
  const btnSpeak = document.getElementById("btn-modal-speak");
  if (btnSpeak) {
    btnSpeak.innerHTML = `<i class="fa-solid fa-volume-high"></i> Czytaj opowieść`;
    btnSpeak.classList.remove("speaking");
  }
}

// ── OTWIERANIE MODALA 3D (OPEN MODAL WITH GSAP 3D EFFECT) ──────────────────
function openMushroomModal(mushroom) {
  currentSelectedMushroom = mushroom;
  
  stopSpeech();
  const btnSpeak = document.getElementById("btn-modal-speak");
  if (btnSpeak) {
    btnSpeak.onclick = null;
    btnSpeak.onclick = toggleSpeech;
  }

  modalImg.style.backgroundImage = `url('${mushroom.image}')`;
  modalTitle.textContent = mushroom.name;
  modalScientific.textContent = mushroom.scientific;
  
  modalBadge.textContent = mushroom.category === "jadalne" ? "Gatunek Jadalny" : "Gatunek Trujący";
  modalBadge.className = "mushroom-badge";
  modalBadge.classList.add(mushroom.category === "jadalne" ? "badge-edible" : "badge-poisonous");
  
  // Tab 1: Opis i Cechy
  document.getElementById("desc-cap").textContent = mushroom.features.cap;
  document.getElementById("desc-gills").textContent = mushroom.features.gills;
  document.getElementById("desc-stem").textContent = mushroom.features.stem;
  document.getElementById("desc-habitat").textContent = mushroom.features.habitat;
  document.getElementById("desc-full").textContent = mushroom.fullDesc;
  
  // Tab 2: Budowa i Przekrój
  const imgUnder = document.getElementById("structure-img-under");
  const imgCross = document.getElementById("structure-img-cross");
  imgUnder.style.backgroundImage = `url('${mushroom.imageUnder}')`;
  imgCross.style.backgroundImage = `url('${mushroom.imageCross}')`;
  document.getElementById("structure-desc-under").textContent = mushroom.descUnder;
  document.getElementById("structure-desc-cross").textContent = mushroom.descCross;

  // Tab 3: Uwaga / Sobowtóry
  const imgOriginal = document.getElementById("comparison-img-original");
  const imgTwin = document.getElementById("comparison-img-twin");
  const badgeOriginal = document.getElementById("comparison-badge-original");
  const badgeTwin = document.getElementById("comparison-badge-twin");
  
  imgOriginal.style.backgroundImage = `url('${mushroom.image}')`;
  badgeOriginal.textContent = mushroom.category === "jadalne" ? "Jadalny" : (mushroom.category === "trujące" ? "Trujący" : "Niejadalny");
  badgeOriginal.className = `comparison-badge ${mushroom.category === "jadalne" ? "badge-edible" : "badge-poisonous"}`;
  
  const twinTitle = document.querySelector(".comparison-half:nth-child(2) h4");
  const twinContainer = document.querySelector(".comparison-half:nth-child(2)");
  
  if (mushroom.imageTwin && mushroom.imageTwin !== "brak") {
    twinContainer.style.display = "flex";
    twinTitle.textContent = mushroom.nameTwin;
    imgTwin.style.backgroundImage = `url('${mushroom.imageTwin}')`;
    
    const isTwinEdible = mushroom.categoryTwin === "jadalne";
    badgeTwin.textContent = isTwinEdible ? "Jadalny" : (mushroom.categoryTwin === "trujące" ? "Trujący" : "Niejadalny");
    badgeTwin.className = `comparison-badge ${isTwinEdible ? "badge-edible" : "badge-poisonous"}`;
  } else {
    twinContainer.style.display = "none";
  }

  // Ostrzeżenie
  const warningBox = document.getElementById("warning-box-status");
  document.getElementById("warning-title").textContent = mushroom.warning.title;
  document.getElementById("warning-text").textContent = mushroom.warning.text;
  
  if (mushroom.category === "jadalne") {
    warningBox.className = "warning-box";
  } else {
    warningBox.className = "warning-box safe-alert";
  }
  
  // Tab 4: Zastosowanie
  document.getElementById("desc-culinary").textContent = mushroom.culinary;
  
  switchModalTab("desc");
  
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  
  gsap.set(modal, { pointerEvents: "auto" });
  gsap.set('.modal-card', { transformPerspective: 1200 });
  
  gsap.fromTo(modal,
    { opacity: 0 },
    { opacity: 1, duration: 0.35, ease: "power2.out" }
  );
  
  gsap.fromTo('.modal-card',
    { scale: 0.8, y: 100, rotationX: -15, opacity: 0 },
    { scale: 1, y: 0, rotationX: 0, opacity: 1, duration: 0.55, ease: "back.out(1.3)" }
  );
}

function closeMushroomModal() {
  stopSpeech();

  gsap.to('.modal-card', {
    scale: 0.8,
    y: 100,
    rotationX: -15,
    opacity: 0,
    duration: 0.4,
    ease: "power2.in"
  });
  
  gsap.to(modal, {
    opacity: 0,
    duration: 0.4,
    ease: "power2.in",
    onComplete: () => {
      modal.classList.remove("open");
      gsap.set(modal, { clearProps: "pointerEvents" });
      document.body.style.overflow = "auto";
    }
  });
}

// ── INTERAKTYWNY QUIZ Z TIMEREM I DŹWIĘKAMI (QUIZ ENGINE) ─────────────────
function startQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  
  const currentActive = quizIntro.classList.contains("hidden") ? quizResults : quizIntro;
  
  gsap.to(currentActive, {
    opacity: 0,
    x: -80,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      currentActive.classList.add("hidden");
      gsap.set(currentActive, { x: 0, opacity: 1 });
      
      quizResults.classList.add("hidden");
      quizIntro.classList.add("hidden");
      quizPlay.classList.remove("hidden");
      
      showQuizQuestion();
      
      gsap.fromTo(quizPlay,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  });
}

function showQuizQuestion() {
  const currentQuestion = QUIZ_QUESTIONS[currentQuizIndex];
  
  // Progress bar
  const progressPercent = (currentQuizIndex / QUIZ_QUESTIONS.length) * 100;
  quizProgressBar.style.width = `${progressPercent}%`;
  
  quizQuestionNumber.textContent = `Pytanie ${currentQuizIndex + 1} z ${QUIZ_QUESTIONS.length}`;
  quizCurrentScore.textContent = quizScore;
  quizQuestionText.textContent = currentQuestion.question;
  quizQuestionImage.src = currentQuestion.image;
  
  quizOptionsContainer.innerHTML = "";
  quizFeedbackContainer.classList.add("hidden");
  
  currentQuestion.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.classList.add("quiz-option");
    btn.setAttribute("id", `quiz-opt-${idx}`);
    btn.textContent = opt.text;
    
    btn.addEventListener("click", () => selectQuizOption(opt, btn));
    quizOptionsContainer.appendChild(btn);
  });

  // Start 15-sekundowego timera
  startQuizTimer();
}

function startQuizTimer() {
  clearInterval(quizTimer);
  quizTimeLeft = 15;
  quizTimerSeconds.textContent = quizTimeLeft;
  
  // Reset visual timer bar
  gsap.set(quizTimerBar, { width: "100%", backgroundColor: "var(--color-success)" });

  quizTimer = setInterval(() => {
    quizTimeLeft--;
    quizTimerSeconds.textContent = quizTimeLeft;

    // Proporcjonalna redukcja szerokości i zmiana koloru paska na czerwony pod koniec
    const percent = (quizTimeLeft / 15) * 100;
    gsap.to(quizTimerBar, { width: `${percent}%`, duration: 0.2 });

    if (quizTimeLeft <= 5) {
      quizTimerBar.style.backgroundColor = "var(--color-danger)";
    }

    if (quizTimeLeft <= 0) {
      clearInterval(quizTimer);
      handleQuizTimeout();
    }
  }, 1000);
}

function handleQuizTimeout() {
  const currentQuestion = QUIZ_QUESTIONS[currentQuizIndex];
  
  // Zablokuj kliknięcia
  const allOptions = quizOptionsContainer.querySelectorAll(".quiz-option");
  allOptions.forEach(opt => opt.classList.add("disabled"));

  // Oznacz prawidłową opcję na zielono
  currentQuestion.options.forEach((opt, idx) => {
    if (opt.correct) {
      document.getElementById(`quiz-opt-${idx}`).classList.add("correct");
    }
  });

  playFailSound();
  
  quizFeedbackText.innerHTML = `<strong class="text-danger"><i class="fa-solid fa-clock"></i> Czas minął.</strong> ${currentQuestion.feedback}`;
  quizFeedbackContainer.classList.remove("hidden");
  
  gsap.fromTo(quizFeedbackContainer,
    { scale: 0.95, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.2)" }
  );
}

function selectQuizOption(option, selectedButton) {
  // Zatrzymaj timer
  clearInterval(quizTimer);

  const allOptions = quizOptionsContainer.querySelectorAll(".quiz-option");
  allOptions.forEach(opt => opt.classList.add("disabled"));
  
  const currentQuestion = QUIZ_QUESTIONS[currentQuizIndex];
  
  if (option.correct) {
    selectedButton.classList.add("correct");
    quizScore++;
    quizCurrentScore.textContent = quizScore;
    playSuccessSound();
    quizFeedbackText.innerHTML = `<strong class="text-success"><i class="fa-solid fa-circle-check"></i> Dobrze!</strong> ${currentQuestion.feedback}`;
  } else {
    selectedButton.classList.add("incorrect");
    currentQuestion.options.forEach((opt, idx) => {
      if (opt.correct) {
        document.getElementById(`quiz-opt-${idx}`).classList.add("correct");
      }
    });
    playFailSound();
    quizFeedbackText.innerHTML = `<strong class="text-danger"><i class="fa-solid fa-circle-xmark"></i> Błąd.</strong> ${currentQuestion.feedback}`;
  }
  
  quizFeedbackContainer.classList.remove("hidden");
  gsap.fromTo(quizFeedbackContainer,
    { scale: 0.95, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.2)" }
  );
}

function nextQuizQuestion() {
  currentQuizIndex++;
  
  gsap.to(quizPlay, {
    opacity: 0,
    x: -80,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      if (currentQuizIndex < QUIZ_QUESTIONS.length) {
        showQuizQuestion();
        gsap.fromTo(quizPlay,
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
        );
      } else {
        showQuizResults();
        gsap.fromTo(quizResults,
          { opacity: 0, x: 80 },
          { opacity: 1, x: 0, duration: 0.45, ease: "power2.out" }
        );
      }
    }
  });
}

function showQuizResults() {
  clearInterval(quizTimer);
  quizProgressBar.style.width = "100%";
  quizPlay.classList.add("hidden");
  quizResults.classList.remove("hidden");
  
  quizResultsDesc.textContent = `Twój wynik to ${quizScore} na ${QUIZ_QUESTIONS.length} możliwych punktów.`;
  
  let rank = "";
  let icon = "";
  
  if (quizScore === 8) {
    rank = "Mistrz Leśnych Ścieżek";
    icon = '<i class="fa-solid fa-crown"></i>';
    quizResultsIcon.style.color = "var(--color-primary)";
  } else if (quizScore >= 5) {
    rank = "Doświadczony Grzybiarz";
    icon = '<i class="fa-solid fa-basket-shopping"></i>';
    quizResultsIcon.style.color = "var(--color-accent)";
  } else {
    rank = "Młody Borowik (Potrzebujesz atlasu!)";
    icon = '<i class="fa-solid fa-seedling"></i>';
    quizResultsIcon.style.color = "var(--color-danger)";
  }
  
  quizResultsIcon.innerHTML = icon;
  quizRank.innerHTML = rank;
}

// ── MAPA GRZYBIARZY (LEAFLET.JS) ─────────────────────────────────────────
let appMap = null;
let mapMarkers = [];

function initMap() {
  if (appMap !== null) {
    appMap.invalidateSize();
    return;
  }
  
  // Współrzędne centrum Polski
  appMap = L.map('mushroom-map').setView([52.069, 19.480], 6);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(appMap);

  // Dodawanie znacznika po kliknięciu
  appMap.on('click', function(e) {
    addMarker(e.latlng.lat, e.latlng.lng, "Twoje znalezisko");
  });
}

function addMarker(lat, lng, title) {
  const customIcon = L.divIcon({
    className: 'custom-map-marker',
    html: '<i class="fa-solid fa-location-dot" style="color: var(--color-success); font-size: 2rem; text-shadow: 0 2px 5px rgba(0,0,0,0.5);"></i>',
    iconSize: [30, 42],
    iconAnchor: [15, 42]
  });

  const marker = L.marker([lat, lng], {icon: customIcon}).addTo(appMap)
    .bindPopup(`<b>${title}</b><br>Dodano: ${new Date().toLocaleDateString()}`)
    .openPopup();
    
  mapMarkers.push(marker);
}

document.getElementById('btn-map-gps').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      appMap.setView([lat, lng], 13);
      addMarker(lat, lng, "Twoja lokalizacja (GPS)");
    }, () => {
      alert("Nie udało się pobrać lokalizacji GPS. Sprawdź uprawnienia przeglądarki.");
    });
  } else {
    alert("Geolokalizacja nie jest wspierana przez Twoją przeglądarkę.");
  }
});

document.getElementById('btn-map-search').addEventListener('click', async () => {
  const query = document.getElementById('map-search-input').value;
  if (!query) return;
  
  const searchBtn = document.getElementById('btn-map-search');
  const originalText = searchBtn.innerHTML;
  searchBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
  
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}, Poland`);
    const data = await response.json();
    if (data && data.length > 0) {
      const lat = data[0].lat;
      const lng = data[0].lon;
      appMap.setView([lat, lng], 12);
      addMarker(lat, lng, `Lokalizacja: ${query}`);
    } else {
      alert("Nie znaleziono takiej lokalizacji. Spróbuj innej nazwy miejscowości lub kodu pocztowego.");
    }
  } catch (err) {
    console.error("Błąd wyszukiwania lokalizacji:", err);
    alert("Wystąpił błąd podczas wyszukiwania. Spróbuj ponownie.");
  }
  
  searchBtn.innerHTML = originalText;
});

// ── INTERAKTYWNA CHECKLISTA (CHECKLIST) ──────────────────────────────────
function updateChecklist() {
  const total = checkboxes.length;
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
  
  checklistCount.textContent = `${checked}/${total}`;
  const percent = (checked / total) * 100;
  
  gsap.to(checklistProgressBar, {
    width: `${percent}%`,
    duration: 0.4,
    ease: "power2.out"
  });
}

// ── OBSŁUGA DYNAMICZNEGO MENU (ACTIVE LINK ON SCROLL) ────────────────────
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id], header");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute("id") || "";
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href").substring(1);
      if (href === current) {
        link.classList.add("active");
      }
    });
  });
}

// ── OBSŁUGA EKRANÓW SPA NA MOBILE (MOBILE SPA SCREEN CONTROLLER) ─────────
function switchMobileScreen(screenId) {
  if (window.innerWidth > 768) return;

  const screens = document.querySelectorAll(".spa-screen");
  screens.forEach(screen => {
    screen.classList.remove("active-screen");
  });

  if (screenId === "atlas") {
    document.getElementById("atlas").classList.add("active-screen");
    document.getElementById("calendar").classList.add("active-screen");
    const safetyBanner = document.getElementById("safety-code");
    if (safetyBanner) safetyBanner.classList.add("active-screen");
  } else if (screenId === "map-section") {
    const mapSec = document.getElementById("map-section");
    if (mapSec) {
      mapSec.classList.add("active-screen");
      // Po pokazaniu elementu, musimy dać Leaflet chwilę, by odświeżył rozmiar po re-flow
      setTimeout(() => {
        initMap();
        if (appMap) appMap.invalidateSize();
      }, 300);
    }
  } else {
    const calendarSec = document.getElementById("calendar");
    if (calendarSec) calendarSec.classList.remove("active-screen");
    const safetyBanner = document.getElementById("safety-code");
    if (safetyBanner) safetyBanner.classList.remove("active-screen");
    
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add("active-screen");
    }
  }

  const navButtons = document.querySelectorAll(".mobile-nav-btn");
  navButtons.forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-screen") === screenId) {
      btn.classList.add("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initMobileSPA() {
  const navButtons = document.querySelectorAll(".mobile-nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const screenId = btn.getAttribute("data-screen");
      switchMobileScreen(screenId);
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) {
      const activeBtn = document.querySelector(".mobile-bottom-nav .mobile-nav-btn.active");
      const activeScreen = activeBtn ? activeBtn.getAttribute("data-screen") : "atlas";
      switchMobileScreen(activeScreen);
    } else {
      const screens = document.querySelectorAll(".spa-screen");
      screens.forEach(screen => {
        screen.classList.remove("active-screen");
      });
      const safetyBanner = document.getElementById("safety-code");
      if (safetyBanner) safetyBanner.classList.remove("active-screen");
      
      // Jeżeli użytkownik rozszerzy okno, na PC mapa ma być zawsze zainicjalizowana
      setTimeout(() => {
        initMap();
      }, 500);
    }
  });

  if (window.innerWidth <= 768) {
    switchMobileScreen("atlas");
  } else {
    setTimeout(() => {
      initMap();
    }, 500);
  }
}

// ── AMBIENT AUDIO ORAZ TRYB DZIEŃ/NOC (DAY/NIGHT THEME) ─────────────────
function initThemeAndAudio() {
  const audioEl = document.getElementById("forest-ambient");
  const btnAudioDesktop = document.getElementById("btn-audio-desktop");
  const btnAudioMobile = document.getElementById("btn-audio-mobile");
  
  const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");

  // --- Obsługa Audio ---
  let isAudioPlaying = false;
  
  function toggleAudio() {
    if (!audioEl) return;
    
    if (isAudioPlaying) {
      audioEl.pause();
      isAudioPlaying = false;
      if (btnAudioDesktop) btnAudioDesktop.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      if (btnAudioMobile) btnAudioMobile.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
      audioEl.play().then(() => {
        isAudioPlaying = true;
        if (btnAudioDesktop) btnAudioDesktop.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        if (btnAudioMobile) btnAudioMobile.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      }).catch(err => {
        console.error("Autoplay zablokowany przez przeglądarkę:", err);
      });
    }
  }

  if (btnAudioDesktop) btnAudioDesktop.addEventListener("click", toggleAudio);
  if (btnAudioMobile) btnAudioMobile.addEventListener("click", toggleAudio);

  // --- Obsługa Trybu Motywu (Dzień/Noc) ---
  let currentTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  if (themeToggleDesktop) themeToggleDesktop.checked = (currentTheme === "light");
  if (themeToggleMobile) themeToggleMobile.checked = (currentTheme === "light");

  function onThemeChange(e) {
    currentTheme = e.target.checked ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    
    if (themeToggleDesktop) themeToggleDesktop.checked = (currentTheme === "light");
    if (themeToggleMobile) themeToggleMobile.checked = (currentTheme === "light");
  }

  if (themeToggleDesktop) themeToggleDesktop.addEventListener("change", onThemeChange);
  if (themeToggleMobile) themeToggleMobile.addEventListener("change", onThemeChange);
}

// ── EVENT LISTENERS (ZDARZENIA W DOM) ────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Inicjalizacja dźwięku i motywu
  initThemeAndAudio();
  // Rejestracja wtyczek GSAP
  gsap.registerPlugin(ScrollTrigger);

  // 0. Obsługa Splash Screen i wejścia do aplikacji
  const splash = document.getElementById("splash-screen");
  const btnSplashEnter = document.getElementById("btn-splash-enter");
  if (btnSplashEnter && splash) {
    btnSplashEnter.addEventListener("click", () => {
      initAudio(); // Odblokowanie Web Audio API na mobile
      
      gsap.to(splash, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          splash.classList.add("fade-out");
        }
      });
    });
  }

  // Inicjalizacja SPA dla urządzeń mobilnych
  initMobileSPA();

  // 1. Świetliki w tle
  spawnFireflies();
  
  // 2. Podział liter tytułu Hero do staggeru
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.innerHTML = text.split('').map(char => {
      if (char === ' ') return '<span class="char">&nbsp;</span>';
      return `<span class="char" style="display: inline-block;">${char}</span>`;
    }).join('');
  }

  // 3. Cinematic Entrance Hero Timeline
  const heroTl = gsap.timeline();
  heroTl.fromTo('.hero-bg',
    { scale: 1.15, opacity: 0 },
    { scale: 1.05, opacity: 1, duration: 1.5, ease: "power2.out" }
  )
  .fromTo('.hero-badge',
    { opacity: 0, y: -20, scale: 0.8 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
    "-=1.1"
  )
  .fromTo('.hero-title .char',
    { opacity: 0, y: 35, scale: 1.2, rotationX: -40 },
    { opacity: 1, y: 0, scale: 1, rotationX: 0, stagger: 0.03, duration: 0.65, ease: "back.out(1.6)" },
    "-=0.8"
  )
  .fromTo('.hero-subtitle',
    { opacity: 0, y: 15 },
    { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
    "-=0.4"
  )
  .fromTo('.hero-actions .btn',
    { opacity: 0, y: 25, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, stagger: 0.12, duration: 0.65, ease: "elastic.out(1, 0.8)" },
    "-=0.3"
  )
  .fromTo('.hero-scroll-indicator',
    { opacity: 0, y: -10 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    "-=0.1"
  );

  // 4. Renderowanie Atlasu i powiązań filtrów
  filterAndRenderAtlas();
  
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase();
      filterAndRenderAtlas();
    });
  }

  // Kategorie w Atlasie
  const categoryButtons = document.querySelectorAll("#filter-category .option-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-value");
      filterAndRenderAtlas();
    });
  });

  // Siedlisko w Atlasie
  const habitatButtons = document.querySelectorAll("#filter-habitat .option-btn");
  habitatButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      habitatButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeHabitat = btn.getAttribute("data-value");
      filterAndRenderAtlas();
    });
  });

  // Sezon w Atlasie
  const seasonButtons = document.querySelectorAll("#filter-season .option-btn");
  seasonButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      seasonButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSeason = btn.getAttribute("data-value");
      filterAndRenderAtlas();
    });
  });
  
  // 5. Interaktywna Budowa (Anatomy Explorer initialization)
  const hotspots = document.querySelectorAll(".hotspot");
  hotspots.forEach(btn => {
    btn.addEventListener("click", () => {
      selectAnatomyPart(btn.getAttribute("data-part"));
    });
  });
  // Domyślnie zaznacz kapelusz na start
  selectAnatomyPart("cap");

  // 6. Kreator Identyfikacji (Wizard initialization)
  initWizard();

  // 7. Kalendarz Sezonowości (Calendar initialization)
  initCalendar();

  // 8. Modal
  modalCloseBtn.addEventListener("click", closeMushroomModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeMushroomModal();
  });
  
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      switchModalTab(btn.getAttribute("data-tab"));
    });
  });
  
  // 9. Quiz
  btnStartQuiz.addEventListener("click", startQuiz);
  btnRestartQuiz.addEventListener("click", startQuiz);
  btnNextQuestion.addEventListener("click", nextQuizQuestion);
  
  // 10. Checklist
  checkboxes.forEach(cb => {
    cb.addEventListener("change", updateChecklist);
  });
  updateChecklist();

  // 11. ScrollSpy (Active links)
  initScrollSpy();

  // 12. Animacje przy przewijaniu (ScrollTrigger) dla dużych ekranów
  let mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", () => {
    gsap.from('.safety-banner', {
      scrollTrigger: {
        trigger: '.safety-banner',
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -60,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out"
    });

    document.querySelectorAll('.section-header').forEach(header => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 35,
        scale: 0.98,
        duration: 0.7,
        ease: "power2.out"
      });
    });

    gsap.from('.anatomy-container', {
      scrollTrigger: {
        trigger: '#anatomy',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from('.wizard-card', {
      scrollTrigger: {
        trigger: '#wizard',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from('.calendar-card', {
      scrollTrigger: {
        trigger: '#calendar',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from('#quiz-section', {
      scrollTrigger: {
        trigger: '#quiz-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from('.essentials-checklist', {
      scrollTrigger: {
        trigger: '#essentials',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: -40,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.from('.essentials-tips', {
      scrollTrigger: {
        trigger: '#essentials',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      x: 40,
      duration: 0.8,
      ease: "power2.out"
    });
  });
});
