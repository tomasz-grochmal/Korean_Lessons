const SCENES = {
  greeting: {
    label: "Powitania",
    icon: "안",
    color: "#16847c",
    bg: "#e4f4f2"
  },
  repair: {
    label: "Naprawianie",
    icon: "천",
    color: "#3468b7",
    bg: "#e7eefb"
  },
  cafe: {
    label: "Kawiarnia",
    icon: "잔",
    color: "#9b6a2f",
    bg: "#f3eadf"
  },
  shop: {
    label: "Sklep",
    icon: "₩",
    color: "#4d8f4a",
    bg: "#e7f2e6"
  },
  travel: {
    label: "Droga",
    icon: "길",
    color: "#d45d47",
    bg: "#f8e8e4"
  },
  question: {
    label: "Pytania",
    icon: "?",
    color: "#d39b25",
    bg: "#f8efd8"
  },
  intro: {
    label: "O sobie",
    icon: "나",
    color: "#7657a6",
    bg: "#eee8f6"
  }
};

const PHRASES = [
  {
    id: "w1-01",
    week: 1,
    day: 1,
    scene: "greeting",
    situation: "Wejście do rozmowy",
    korean: "안녕하세요.",
    pronunciation: "an-njong-ha-se-jo",
    literal: "Bądź w spokoju.",
    polish: "Dzień dobry / Cześć.",
    pattern: "안녕 + 하세요 = grzeczne powitanie"
  },
  {
    id: "w1-02",
    week: 1,
    day: 1,
    scene: "greeting",
    situation: "Ktoś odchodzi",
    korean: "안녕히 가세요.",
    pronunciation: "an-njong-hi ga-se-jo",
    literal: "Idź spokojnie.",
    polish: "Do widzenia. / Idź spokojnie.",
    pattern: "가세요 = proszę iść"
  },
  {
    id: "w1-03",
    week: 1,
    day: 1,
    scene: "greeting",
    situation: "Ty odchodzisz",
    korean: "안녕히 계세요.",
    pronunciation: "an-njong-hi gye-se-jo",
    literal: "Zostań spokojnie.",
    polish: "Do widzenia. / Zostań spokojnie.",
    pattern: "계세요 = proszę zostać"
  },
  {
    id: "w1-04",
    week: 1,
    day: 1,
    scene: "intro",
    situation: "Pierwsze spotkanie",
    korean: "만나서 반갑습니다.",
    pronunciation: "man-na-so pan-gap-sym-ni-da",
    literal: "Spotkawszy, miło jest.",
    polish: "Miło poznać.",
    pattern: "만나서 = po spotkaniu"
  },
  {
    id: "w1-05",
    week: 1,
    day: 2,
    scene: "greeting",
    situation: "Dziękujesz neutralnie",
    korean: "감사합니다.",
    pronunciation: "kam-sa-ham-ni-da",
    literal: "Jestem wdzięczny.",
    polish: "Dziękuję.",
    pattern: "감사 + 합니다 = robię wdzięczność"
  },
  {
    id: "w1-06",
    week: 1,
    day: 2,
    scene: "greeting",
    situation: "Dziękujesz cieplej",
    korean: "고맙습니다.",
    pronunciation: "ko-map-sym-ni-da",
    literal: "Jestem wdzięczny.",
    polish: "Dziękuję.",
    pattern: "고맙습니다 = naturalne, grzeczne dzięki"
  },
  {
    id: "w1-07",
    week: 1,
    day: 2,
    scene: "greeting",
    situation: "Uspokajasz sytuację",
    korean: "괜찮아요.",
    pronunciation: "kłen-cza-na-jo",
    literal: "Jest w porządku.",
    polish: "W porządku. / Nic się nie stało.",
    pattern: "괜찮아요 = OK, dobrze, spokojnie"
  },
  {
    id: "w1-08",
    week: 1,
    day: 2,
    scene: "greeting",
    situation: "Odpowiadasz na podziękowanie",
    korean: "천만에요.",
    pronunciation: "czon-ma-ne-jo",
    literal: "Nie ma za milion.",
    polish: "Nie ma za co.",
    pattern: "천만에요 = grzeczna odpowiedź"
  },
  {
    id: "w1-09",
    week: 1,
    day: 3,
    scene: "greeting",
    situation: "Potwierdzasz",
    korean: "네.",
    pronunciation: "ne",
    literal: "Tak.",
    polish: "Tak.",
    pattern: "네 = tak / słucham"
  },
  {
    id: "w1-10",
    week: 1,
    day: 3,
    scene: "greeting",
    situation: "Zaprzeczasz",
    korean: "아니요.",
    pronunciation: "a-ni-jo",
    literal: "Nie.",
    polish: "Nie.",
    pattern: "아니요 = nie"
  },
  {
    id: "w1-11",
    week: 1,
    day: 3,
    scene: "greeting",
    situation: "Ktoś dobrze zrozumiał",
    korean: "맞아요.",
    pronunciation: "ma-dża-jo",
    literal: "Zgadza się.",
    polish: "Zgadza się.",
    pattern: "맞아요 = pasuje / jest poprawne"
  },
  {
    id: "w1-12",
    week: 1,
    day: 3,
    scene: "greeting",
    situation: "Łagodnie odmawiasz",
    korean: "아니에요.",
    pronunciation: "a-ni-e-jo",
    literal: "Nie jest.",
    polish: "Nie. / To nic.",
    pattern: "아니에요 = nie jest / nie ma sprawy"
  },
  {
    id: "w1-13",
    week: 1,
    day: 4,
    scene: "repair",
    situation: "Przepraszasz za błąd",
    korean: "죄송합니다.",
    pronunciation: "cze-song-ham-ni-da",
    literal: "Jestem winny przykrości.",
    polish: "Przepraszam.",
    pattern: "죄송 + 합니다 = formalne przeprosiny"
  },
  {
    id: "w1-14",
    week: 1,
    day: 4,
    scene: "repair",
    situation: "Zwracasz czyjąś uwagę",
    korean: "실례합니다.",
    pronunciation: "sil-lje-ham-ni-da",
    literal: "Robię nietakt.",
    polish: "Przepraszam. / Przepraszam, czy...",
    pattern: "실례합니다 = zaczepienie z grzecznością"
  },
  {
    id: "w1-15",
    week: 1,
    day: 4,
    scene: "repair",
    situation: "Potrzebujesz chwili",
    korean: "잠깐만요.",
    pronunciation: "czam-kkan-man-jo",
    literal: "Tylko chwilkę.",
    polish: "Chwileczkę.",
    pattern: "잠깐 = chwila, 만 = tylko"
  },
  {
    id: "w1-16",
    week: 1,
    day: 4,
    scene: "repair",
    situation: "Prosisz o pomoc",
    korean: "도와주세요.",
    pronunciation: "to-wa-dżu-se-jo",
    literal: "Proszę dać pomoc.",
    polish: "Proszę pomóc.",
    pattern: "도와 + 주세요 = pomóż proszę"
  },
  {
    id: "w1-17",
    week: 1,
    day: 5,
    scene: "repair",
    situation: "Ustawiasz oczekiwania",
    korean: "한국어 잘 못해요.",
    pronunciation: "han-gu-go czal mot-he-jo",
    literal: "Koreańskiego dobrze nie umiem.",
    polish: "Nie mówię dobrze po koreańsku.",
    pattern: "잘 못해요 = nie umiem dobrze"
  },
  {
    id: "w1-18",
    week: 1,
    day: 5,
    scene: "repair",
    situation: "Nie rozumiesz",
    korean: "잘 모르겠어요.",
    pronunciation: "czal mo-ry-ges-so-jo",
    literal: "Dobrze nie wiem.",
    polish: "Nie wiem. / Nie rozumiem dobrze.",
    pattern: "모르겠어요 = nie wiem / nie jestem pewien"
  },
  {
    id: "w1-19",
    week: 1,
    day: 5,
    scene: "repair",
    situation: "Prosisz o powtórzenie",
    korean: "다시 말씀해 주세요.",
    pronunciation: "ta-si mal-ssym-he dżu-se-jo",
    literal: "Proszę powiedzieć słowami jeszcze raz.",
    polish: "Proszę powtórzyć.",
    pattern: "다시 = jeszcze raz, 주세요 = proszę"
  },
  {
    id: "w1-20",
    week: 1,
    day: 5,
    scene: "repair",
    situation: "Prosisz o wolniejsze tempo",
    korean: "천천히 말해 주세요.",
    pronunciation: "czon-czon-hi mal-he dżu-se-jo",
    literal: "Proszę mówić powoli.",
    polish: "Proszę mówić wolniej.",
    pattern: "천천히 = powoli"
  },
  {
    id: "w2-01",
    week: 2,
    day: 8,
    scene: "shop",
    situation: "Wskazujesz blisko siebie",
    korean: "이거 주세요.",
    pronunciation: "i-go dżu-se-jo",
    literal: "Proszę dać to.",
    polish: "Poproszę to.",
    pattern: "이거 + 주세요 = to proszę"
  },
  {
    id: "w2-02",
    week: 2,
    day: 8,
    scene: "shop",
    situation: "Wskazujesz dalej",
    korean: "저거 주세요.",
    pronunciation: "czo-go dżu-se-jo",
    literal: "Proszę dać tamto.",
    polish: "Poproszę tamto.",
    pattern: "저거 + 주세요 = tamto proszę"
  },
  {
    id: "w2-03",
    week: 2,
    day: 8,
    scene: "shop",
    situation: "Jedna sztuka",
    korean: "하나 주세요.",
    pronunciation: "ha-na dżu-se-jo",
    literal: "Proszę dać jedno.",
    polish: "Poproszę jedno.",
    pattern: "하나 = jedno"
  },
  {
    id: "w2-04",
    week: 2,
    day: 8,
    scene: "shop",
    situation: "Dwie sztuki",
    korean: "두 개 주세요.",
    pronunciation: "tu ge dżu-se-jo",
    literal: "Proszę dać dwie sztuki.",
    polish: "Poproszę dwie sztuki.",
    pattern: "개 = licznik dla rzeczy"
  },
  {
    id: "w2-05",
    week: 2,
    day: 9,
    scene: "cafe",
    situation: "Zamawiasz kawę",
    korean: "커피 한 잔 주세요.",
    pronunciation: "ko-pi han dżan dżu-se-jo",
    literal: "Proszę dać jedną filiżankę kawy.",
    polish: "Poproszę jedną kawę.",
    pattern: "한 잔 = jeden kubek / jedna szklanka"
  },
  {
    id: "w2-06",
    week: 2,
    day: 9,
    scene: "cafe",
    situation: "Prosisz o wodę",
    korean: "물 주세요.",
    pronunciation: "mul dżu-se-jo",
    literal: "Proszę dać wodę.",
    polish: "Poproszę wodę.",
    pattern: "rzecz + 주세요"
  },
  {
    id: "w2-07",
    week: 2,
    day: 9,
    scene: "cafe",
    situation: "Prosisz o kartę",
    korean: "메뉴 주세요.",
    pronunciation: "me-niu dżu-se-jo",
    literal: "Proszę dać menu.",
    polish: "Poproszę menu.",
    pattern: "메뉴 = menu"
  },
  {
    id: "w2-08",
    week: 2,
    day: 9,
    scene: "cafe",
    situation: "Nie wiesz, co wybrać",
    korean: "추천해 주세요.",
    pronunciation: "czu-czon-he dżu-se-jo",
    literal: "Proszę polecić.",
    polish: "Proszę coś polecić.",
    pattern: "추천하다 = polecać"
  },
  {
    id: "w2-09",
    week: 2,
    day: 10,
    scene: "cafe",
    situation: "Unikasz ostrego jedzenia",
    korean: "안 매운 거 있어요?",
    pronunciation: "an me-un go i-so-jo",
    literal: "Czy jest rzecz nieostra?",
    polish: "Czy jest coś nieostrego?",
    pattern: "안 + opis = nie..."
  },
  {
    id: "w2-10",
    week: 2,
    day: 10,
    scene: "cafe",
    situation: "Jedzenie smakuje",
    korean: "맛있어요.",
    pronunciation: "ma-sit-so-jo",
    literal: "Ma smak.",
    polish: "Jest pyszne.",
    pattern: "맛 = smak, 있어요 = jest"
  },
  {
    id: "w2-11",
    week: 2,
    day: 10,
    scene: "cafe",
    situation: "Na wynos",
    korean: "포장해 주세요.",
    pronunciation: "po-dżang-he dżu-se-jo",
    literal: "Proszę zapakować.",
    polish: "Poproszę na wynos.",
    pattern: "포장 = pakowanie"
  },
  {
    id: "w2-12",
    week: 2,
    day: 10,
    scene: "cafe",
    situation: "Kończysz posiłek",
    korean: "계산해 주세요.",
    pronunciation: "kje-san-he dżu-se-jo",
    literal: "Proszę policzyć.",
    polish: "Poproszę rachunek.",
    pattern: "계산 = rachunek / obliczenie"
  },
  {
    id: "w2-13",
    week: 2,
    day: 11,
    scene: "shop",
    situation: "Pytasz o cenę",
    korean: "얼마예요?",
    pronunciation: "ol-ma-je-jo",
    literal: "Ile to jest?",
    polish: "Ile kosztuje?",
    pattern: "얼마 = ile"
  },
  {
    id: "w2-14",
    week: 2,
    day: 11,
    scene: "shop",
    situation: "Pytasz o konkretną rzecz",
    korean: "이거 얼마예요?",
    pronunciation: "i-go ol-ma-je-jo",
    literal: "To ile jest?",
    polish: "Ile to kosztuje?",
    pattern: "이거 + 얼마예요?"
  },
  {
    id: "w2-15",
    week: 2,
    day: 11,
    scene: "shop",
    situation: "Płatność kartą",
    korean: "카드 돼요?",
    pronunciation: "ka-dy dwe-jo",
    literal: "Czy karta działa?",
    polish: "Czy można kartą?",
    pattern: "돼요? = czy da się?"
  },
  {
    id: "w2-16",
    week: 2,
    day: 11,
    scene: "shop",
    situation: "Prosisz o paragon",
    korean: "영수증 주세요.",
    pronunciation: "jong-su-dzyng dżu-se-jo",
    literal: "Proszę dać paragon.",
    polish: "Poproszę paragon.",
    pattern: "영수증 = paragon"
  },
  {
    id: "w2-17",
    week: 2,
    day: 12,
    scene: "shop",
    situation: "Prosisz o torbę",
    korean: "봉투 주세요.",
    pronunciation: "pong-tu dżu-se-jo",
    literal: "Proszę dać torbę.",
    polish: "Poproszę torbę.",
    pattern: "봉투 = torba / koperta"
  },
  {
    id: "w2-18",
    week: 2,
    day: 12,
    scene: "shop",
    situation: "Cena jest za wysoka",
    korean: "너무 비싸요.",
    pronunciation: "no-mu pi-sa-jo",
    literal: "Bardzo drogie.",
    polish: "Za drogo.",
    pattern: "너무 = zbyt / bardzo"
  },
  {
    id: "w2-19",
    week: 2,
    day: 12,
    scene: "shop",
    situation: "Szukasz zniżki",
    korean: "할인 있어요?",
    pronunciation: "ha-rin i-so-jo",
    literal: "Czy jest zniżka?",
    polish: "Czy jest rabat?",
    pattern: "있어요? = czy jest?"
  },
  {
    id: "w2-20",
    week: 2,
    day: 12,
    scene: "shop",
    situation: "Przymierzasz ubranie",
    korean: "입어 봐도 돼요?",
    pronunciation: "i-bo bwa-do dwe-jo",
    literal: "Czy da się spróbować ubrać?",
    polish: "Czy mogę przymierzyć?",
    pattern: "-도 돼요? = czy mogę?"
  },
  {
    id: "w3-01",
    week: 3,
    day: 15,
    scene: "question",
    situation: "Pytasz o miejsce",
    korean: "어디예요?",
    pronunciation: "o-di-je-jo",
    literal: "Gdzie to jest?",
    polish: "Gdzie to jest?",
    pattern: "어디 = gdzie"
  },
  {
    id: "w3-02",
    week: 3,
    day: 15,
    scene: "travel",
    situation: "Szukasz toalety",
    korean: "화장실 어디예요?",
    pronunciation: "hwa-dżang-sil o-di-je-jo",
    literal: "Toaleta gdzie jest?",
    polish: "Gdzie jest toaleta?",
    pattern: "miejsce + 어디예요?"
  },
  {
    id: "w3-03",
    week: 3,
    day: 15,
    scene: "travel",
    situation: "Szukasz metra",
    korean: "지하철역 어디예요?",
    pronunciation: "dżi-ha-czol-jok o-di-je-jo",
    literal: "Stacja metra gdzie jest?",
    polish: "Gdzie jest stacja metra?",
    pattern: "지하철역 = stacja metra"
  },
  {
    id: "w3-04",
    week: 3,
    day: 15,
    scene: "travel",
    situation: "Sprawdzasz dystans",
    korean: "여기서 멀어요?",
    pronunciation: "jo-gi-so mo-ro-jo",
    literal: "Czy stąd daleko?",
    polish: "Czy to daleko stąd?",
    pattern: "여기서 = stąd"
  },
  {
    id: "w3-05",
    week: 3,
    day: 16,
    scene: "travel",
    situation: "Chcesz iść pieszo",
    korean: "걸어서 갈 수 있어요?",
    pronunciation: "ko-ro-so gal su i-so-jo",
    literal: "Czy jest możliwość iść pieszo?",
    polish: "Czy można dojść pieszo?",
    pattern: "갈 수 있어요 = można iść"
  },
  {
    id: "w3-06",
    week: 3,
    day: 16,
    scene: "travel",
    situation: "Prosisz o taksówkę",
    korean: "택시 불러 주세요.",
    pronunciation: "tek-si bul-lo dżu-se-jo",
    literal: "Proszę wezwać taksówkę.",
    polish: "Proszę wezwać taksówkę.",
    pattern: "불러 주세요 = proszę zawołać"
  },
  {
    id: "w3-07",
    week: 3,
    day: 16,
    scene: "travel",
    situation: "Pokazujesz adres",
    korean: "이 주소로 가 주세요.",
    pronunciation: "i dżu-so-ro ga dżu-se-jo",
    literal: "Proszę jechać pod ten adres.",
    polish: "Proszę jechać pod ten adres.",
    pattern: "-로 = w kierunku / do"
  },
  {
    id: "w3-08",
    week: 3,
    day: 16,
    scene: "travel",
    situation: "Wysiadka z taksówki",
    korean: "여기 세워 주세요.",
    pronunciation: "jo-gi se-wo dżu-se-jo",
    literal: "Proszę zatrzymać tutaj.",
    polish: "Proszę zatrzymać tutaj.",
    pattern: "여기 = tutaj"
  },
  {
    id: "w3-09",
    week: 3,
    day: 17,
    scene: "question",
    situation: "Pytasz o termin",
    korean: "언제예요?",
    pronunciation: "on-dże-je-jo",
    literal: "Kiedy to jest?",
    polish: "Kiedy to jest?",
    pattern: "언제 = kiedy"
  },
  {
    id: "w3-10",
    week: 3,
    day: 17,
    scene: "question",
    situation: "Pytasz o godzinę",
    korean: "몇 시예요?",
    pronunciation: "mjot si-je-jo",
    literal: "Która godzina?",
    polish: "O której godzinie?",
    pattern: "몇 시 = która godzina"
  },
  {
    id: "w3-11",
    week: 3,
    day: 17,
    scene: "question",
    situation: "Nie masz zegarka",
    korean: "지금 몇 시예요?",
    pronunciation: "dżi-gym mjot si-je-jo",
    literal: "Teraz która godzina?",
    polish: "Która jest teraz godzina?",
    pattern: "지금 = teraz"
  },
  {
    id: "w3-12",
    week: 3,
    day: 17,
    scene: "question",
    situation: "Sprawdzasz, czy otwarte",
    korean: "오늘 열어요?",
    pronunciation: "o-nyl jo-ro-jo",
    literal: "Czy dziś otwiera?",
    polish: "Czy dzisiaj jest otwarte?",
    pattern: "오늘 = dziś"
  },
  {
    id: "w3-13",
    week: 3,
    day: 18,
    scene: "question",
    situation: "Pytasz o internet",
    korean: "와이파이 있어요?",
    pronunciation: "wa-i-pa-i i-so-jo",
    literal: "Czy jest Wi-Fi?",
    polish: "Czy jest Wi-Fi?",
    pattern: "rzecz + 있어요?"
  },
  {
    id: "w3-14",
    week: 3,
    day: 18,
    scene: "question",
    situation: "Pytasz, czy coś jest",
    korean: "화장실 있어요?",
    pronunciation: "hwa-dżang-sil i-so-jo",
    literal: "Czy jest toaleta?",
    polish: "Czy jest toaleta?",
    pattern: "있어요? = czy jest?"
  },
  {
    id: "w3-15",
    week: 3,
    day: 18,
    scene: "repair",
    situation: "Szukasz wspólnego języka",
    korean: "영어 하세요?",
    pronunciation: "jong-o ha-se-jo",
    literal: "Czy robi Pan/Pani angielski?",
    polish: "Czy mówi Pan/Pani po angielsku?",
    pattern: "język + 하세요?"
  },
  {
    id: "w3-16",
    week: 3,
    day: 18,
    scene: "question",
    situation: "Pytasz o zdjęcie",
    korean: "사진 찍어도 돼요?",
    pronunciation: "sa-dżin czi-go-do dwe-jo",
    literal: "Czy da się zrobić zdjęcie?",
    polish: "Czy mogę zrobić zdjęcie?",
    pattern: "-도 돼요? = czy mogę?"
  },
  {
    id: "w3-17",
    week: 3,
    day: 19,
    scene: "travel",
    situation: "Zgubiłeś drogę",
    korean: "길을 잃었어요.",
    pronunciation: "gi-ryl i-ro-so-jo",
    literal: "Zgubiłem drogę.",
    polish: "Zgubiłem się.",
    pattern: "길 = droga"
  },
  {
    id: "w3-18",
    week: 3,
    day: 19,
    scene: "travel",
    situation: "Cel podróży",
    korean: "공항에 가고 싶어요.",
    pronunciation: "gong-hang-e ga-go si-po-jo",
    literal: "Chcę iść na lotnisko.",
    polish: "Chcę jechać na lotnisko.",
    pattern: "-고 싶어요 = chcę..."
  },
  {
    id: "w3-19",
    week: 3,
    day: 19,
    scene: "travel",
    situation: "Sprawdzasz kierunek",
    korean: "왼쪽이에요?",
    pronunciation: "wen-czo-gi-e-jo",
    literal: "Czy to lewa strona?",
    polish: "Czy to w lewo?",
    pattern: "왼쪽 = lewa strona"
  },
  {
    id: "w3-20",
    week: 3,
    day: 19,
    scene: "travel",
    situation: "Sprawdzasz kierunek",
    korean: "오른쪽이에요?",
    pronunciation: "o-ryn-czo-gi-e-jo",
    literal: "Czy to prawa strona?",
    polish: "Czy to w prawo?",
    pattern: "오른쪽 = prawa strona"
  },
  {
    id: "w4-01",
    week: 4,
    day: 22,
    scene: "intro",
    situation: "Mówisz, kim jesteś",
    korean: "저는 토마스예요.",
    pronunciation: "czo-nyn to-ma-sy-je-jo",
    literal: "Ja Tomas jestem.",
    polish: "Jestem Tomas.",
    pattern: "저는 ...예요 = jestem..."
  },
  {
    id: "w4-02",
    week: 4,
    day: 22,
    scene: "intro",
    situation: "Podajesz imię",
    korean: "제 이름은 토마스예요.",
    pronunciation: "dże i-ry-myn to-ma-sy-je-jo",
    literal: "Moje imię Tomas jest.",
    polish: "Mam na imię Tomas.",
    pattern: "제 이름은 ...예요"
  },
  {
    id: "w4-03",
    week: 4,
    day: 22,
    scene: "intro",
    situation: "Pytasz o imię",
    korean: "이름이 뭐예요?",
    pronunciation: "i-ry-mi mło-je-jo",
    literal: "Imię co jest?",
    polish: "Jak masz na imię?",
    pattern: "뭐예요? = co to jest?"
  },
  {
    id: "w4-04",
    week: 4,
    day: 22,
    scene: "intro",
    situation: "Mówisz narodowość",
    korean: "저는 폴란드 사람이에요.",
    pronunciation: "czo-nyn pol-lan-dy sa-ra-mi-e-jo",
    literal: "Ja polski człowiek jestem.",
    polish: "Jestem Polakiem.",
    pattern: "kraj + 사람이에요"
  },
  {
    id: "w4-05",
    week: 4,
    day: 23,
    scene: "intro",
    situation: "Mówisz skąd jesteś",
    korean: "폴란드에서 왔어요.",
    pronunciation: "pol-lan-dy-e-so wa-sso-jo",
    literal: "Przyszedłem z Polski.",
    polish: "Jestem z Polski.",
    pattern: "-에서 왔어요 = przyszedłem z..."
  },
  {
    id: "w4-06",
    week: 4,
    day: 23,
    scene: "intro",
    situation: "Mówisz o nauce",
    korean: "한국어를 배우고 있어요.",
    pronunciation: "han-gu-go-ryl pe-u-go i-so-jo",
    literal: "Uczę się koreańskiego.",
    polish: "Uczę się koreańskiego.",
    pattern: "-고 있어요 = robię teraz"
  },
  {
    id: "w4-07",
    week: 4,
    day: 23,
    scene: "intro",
    situation: "Znasz trochę",
    korean: "조금 알아요.",
    pronunciation: "czo-gym a-ra-jo",
    literal: "Trochę wiem.",
    polish: "Trochę rozumiem / znam.",
    pattern: "조금 = trochę"
  },
  {
    id: "w4-08",
    week: 4,
    day: 23,
    scene: "intro",
    situation: "Mówisz o trudności",
    korean: "아직 어려워요.",
    pronunciation: "a-dżik o-rjo-ło-jo",
    literal: "Jeszcze jest trudne.",
    polish: "Na razie jest trudno.",
    pattern: "아직 = jeszcze / na razie"
  },
  {
    id: "w4-09",
    week: 4,
    day: 24,
    scene: "intro",
    situation: "Mówisz, co lubisz",
    korean: "커피를 좋아해요.",
    pronunciation: "ko-pi-ryl dżo-a-he-jo",
    literal: "Kawę lubię.",
    polish: "Lubię kawę.",
    pattern: "rzecz + 좋아해요 = lubię..."
  },
  {
    id: "w4-10",
    week: 4,
    day: 24,
    scene: "cafe",
    situation: "Ograniczenie w jedzeniu",
    korean: "매운 음식을 못 먹어요.",
    pronunciation: "me-un ym-si-gyl mot mo-go-jo",
    literal: "Ostrego jedzenia nie mogę jeść.",
    polish: "Nie mogę jeść ostrego jedzenia.",
    pattern: "못 + czasownik = nie mogę"
  },
  {
    id: "w4-11",
    week: 4,
    day: 24,
    scene: "greeting",
    situation: "Warunkowa zgoda",
    korean: "괜찮으면 좋아요.",
    pronunciation: "kłen-cza-ny-mjon dżo-a-jo",
    literal: "Jeśli jest w porządku, dobrze.",
    polish: "Jeśli pasuje, to dobrze.",
    pattern: "-으면 = jeśli"
  },
  {
    id: "w4-12",
    week: 4,
    day: 24,
    scene: "intro",
    situation: "Wybierasz coś",
    korean: "저는 이게 좋아요.",
    pronunciation: "czo-nyn i-ge dżo-a-jo",
    literal: "Dla mnie to jest dobre.",
    polish: "Mnie podoba się to.",
    pattern: "이게 좋아요 = to mi pasuje"
  },
  {
    id: "w4-13",
    week: 4,
    day: 25,
    scene: "greeting",
    situation: "Krótka pozytywna reakcja",
    korean: "좋아요.",
    pronunciation: "dżo-a-jo",
    literal: "Jest dobre.",
    polish: "Dobrze. / Podoba mi się.",
    pattern: "좋아요 = dobre / lubię"
  },
  {
    id: "w4-14",
    week: 4,
    day: 25,
    scene: "greeting",
    situation: "Krótka negatywna reakcja",
    korean: "싫어요.",
    pronunciation: "si-ro-jo",
    literal: "Nie lubię.",
    polish: "Nie podoba mi się. / Nie chcę.",
    pattern: "싫어요 = nie lubię"
  },
  {
    id: "w4-15",
    week: 4,
    day: 25,
    scene: "repair",
    situation: "Potwierdzasz brak problemu",
    korean: "문제없어요.",
    pronunciation: "mun-dże-op-so-jo",
    literal: "Nie ma problemu.",
    polish: "Nie ma problemu.",
    pattern: "문제 = problem, 없어요 = nie ma"
  },
  {
    id: "w4-16",
    week: 4,
    day: 25,
    scene: "question",
    situation: "Reagujesz ze zdziwieniem",
    korean: "정말요?",
    pronunciation: "czong-mal-jo",
    literal: "Naprawdę?",
    polish: "Naprawdę?",
    pattern: "정말 = naprawdę"
  },
  {
    id: "w4-17",
    week: 4,
    day: 26,
    scene: "intro",
    situation: "Proponujesz wspólne wyjście",
    korean: "같이 가요.",
    pronunciation: "ka-czi ga-jo",
    literal: "Chodźmy razem.",
    polish: "Chodźmy razem.",
    pattern: "같이 = razem"
  },
  {
    id: "w4-18",
    week: 4,
    day: 26,
    scene: "greeting",
    situation: "Kończysz spotkanie",
    korean: "다음에 또 만나요.",
    pronunciation: "ta-y-me tto man-na-jo",
    literal: "Następnym razem znów się spotkajmy.",
    polish: "Do zobaczenia następnym razem.",
    pattern: "다음에 = następnym razem"
  },
  {
    id: "w4-19",
    week: 4,
    day: 26,
    scene: "intro",
    situation: "Prosisz o kontakt",
    korean: "연락해 주세요.",
    pronunciation: "jol-lak-he dżu-se-jo",
    literal: "Proszę się skontaktować.",
    polish: "Proszę się odezwać.",
    pattern: "연락하다 = kontaktować się"
  },
  {
    id: "w4-20",
    week: 4,
    day: 26,
    scene: "greeting",
    situation: "Miłe pożegnanie",
    korean: "좋은 하루 보내세요.",
    pronunciation: "dżo-yn ha-ru bo-ne-se-jo",
    literal: "Proszę spędzić dobry dzień.",
    polish: "Miłego dnia.",
    pattern: "좋은 하루 = dobry dzień"
  }
];

const DAYS = [
  {
    day: 1,
    week: 1,
    title: "Powitanie bez stresu",
    ids: ["w1-01", "w1-02", "w1-03", "w1-04"],
    speak: "Przywitaj się, pożegnaj i powiedz, że miło kogoś poznać."
  },
  {
    day: 2,
    week: 1,
    title: "Dziękuję i spokojnie",
    ids: ["w1-05", "w1-06", "w1-07", "w1-08"],
    speak: "Podziękuj, odpowiedz na podziękowanie i uspokój sytuację."
  },
  {
    day: 3,
    week: 1,
    title: "Tak, nie, zgadza się",
    ids: ["w1-09", "w1-10", "w1-11", "w1-12"],
    speak: "Odpowiadaj krótko: tak, nie, zgadza się, to nic."
  },
  {
    day: 4,
    week: 1,
    title: "Przepraszam i pomoc",
    ids: ["w1-13", "w1-14", "w1-15", "w1-16"],
    speak: "Zaczep kogoś grzecznie, przeproś i poproś o pomoc."
  },
  {
    day: 5,
    week: 1,
    title: "Nie rozumiem",
    ids: ["w1-17", "w1-18", "w1-19", "w1-20"],
    speak: "Powiedz, że nie mówisz dobrze po koreańsku i poproś o wolniejsze tempo."
  },
  {
    day: 6,
    week: 1,
    title: "Powtórka grzeczności",
    ids: [],
    speak: "Połącz powitanie, przeprosiny i prośbę o powtórzenie w jedną krótką scenkę."
  },
  {
    day: 7,
    week: 1,
    title: "Test tygodnia 1",
    ids: [],
    speak: "Przejdź test PL → KO i KO → PL dla pierwszych 20 zwrotów."
  },
  {
    day: 8,
    week: 2,
    title: "Poproszę to",
    ids: ["w2-01", "w2-02", "w2-03", "w2-04"],
    speak: "Wskaż rzecz i poproś o jedną albo dwie sztuki."
  },
  {
    day: 9,
    week: 2,
    title: "Kawa i menu",
    ids: ["w2-05", "w2-06", "w2-07", "w2-08"],
    speak: "Zamów kawę, wodę, menu i poproś o polecenie."
  },
  {
    day: 10,
    week: 2,
    title: "Jedzenie bez paniki",
    ids: ["w2-09", "w2-10", "w2-11", "w2-12"],
    speak: "Zapytaj o nieostre jedzenie, powiedz, że dobre, i poproś rachunek."
  },
  {
    day: 11,
    week: 2,
    title: "Cena i płatność",
    ids: ["w2-13", "w2-14", "w2-15", "w2-16"],
    speak: "Zapytaj o cenę, płatność kartą i paragon."
  },
  {
    day: 12,
    week: 2,
    title: "Zakupy",
    ids: ["w2-17", "w2-18", "w2-19", "w2-20"],
    speak: "Poproś o torbę, rabat i możliwość przymierzenia."
  },
  {
    day: 13,
    week: 2,
    title: "Powtórka kawiarni i sklepu",
    ids: [],
    speak: "Odegraj zamówienie w kawiarni i krótkie zakupy."
  },
  {
    day: 14,
    week: 2,
    title: "Test tygodnia 2",
    ids: [],
    speak: "Przejdź test PL → KO i KO → PL dla zwrotów z tygodnia 2."
  },
  {
    day: 15,
    week: 3,
    title: "Gdzie to jest",
    ids: ["w3-01", "w3-02", "w3-03", "w3-04"],
    speak: "Zapytaj o toaletę, metro i dystans."
  },
  {
    day: 16,
    week: 3,
    title: "Taksówka i adres",
    ids: ["w3-05", "w3-06", "w3-07", "w3-08"],
    speak: "Poproś o taksówkę, podaj adres i zatrzymaj się tutaj."
  },
  {
    day: 17,
    week: 3,
    title: "Kiedy i która godzina",
    ids: ["w3-09", "w3-10", "w3-11", "w3-12"],
    speak: "Zapytaj o czas, godzinę i to, czy dziś jest otwarte."
  },
  {
    day: 18,
    week: 3,
    title: "Czy jest i czy mogę",
    ids: ["w3-13", "w3-14", "w3-15", "w3-16"],
    speak: "Zapytaj o Wi-Fi, toaletę, angielski i zdjęcie."
  },
  {
    day: 19,
    week: 3,
    title: "Zgubiona droga",
    ids: ["w3-17", "w3-18", "w3-19", "w3-20"],
    speak: "Powiedz, że się zgubiłeś, i sprawdź kierunek."
  },
  {
    day: 20,
    week: 3,
    title: "Powtórka survivalowa",
    ids: [],
    speak: "Połącz pytanie o drogę, transport i prośbę o pomoc."
  },
  {
    day: 21,
    week: 3,
    title: "Test tygodnia 3",
    ids: [],
    speak: "Przejdź test PL → KO i KO → PL dla zwrotów z tygodnia 3."
  },
  {
    day: 22,
    week: 4,
    title: "Kim jestem",
    ids: ["w4-01", "w4-02", "w4-03", "w4-04"],
    speak: "Powiedz imię, zapytaj o imię i podaj narodowość."
  },
  {
    day: 23,
    week: 4,
    title: "Skąd jestem i czego się uczę",
    ids: ["w4-05", "w4-06", "w4-07", "w4-08"],
    speak: "Powiedz, że jesteś z Polski i uczysz się koreańskiego."
  },
  {
    day: 24,
    week: 4,
    title: "Lubię i nie mogę",
    ids: ["w4-09", "w4-10", "w4-11", "w4-12"],
    speak: "Powiedz, co lubisz, czego nie możesz jeść i co Ci pasuje."
  },
  {
    day: 25,
    week: 4,
    title: "Reakcje w rozmowie",
    ids: ["w4-13", "w4-14", "w4-15", "w4-16"],
    speak: "Reaguj krótko: dobrze, nie chcę, nie ma problemu, naprawdę?"
  },
  {
    day: 26,
    week: 4,
    title: "Kończenie rozmowy",
    ids: ["w4-17", "w4-18", "w4-19", "w4-20"],
    speak: "Zaproponuj wspólne wyjście, kontakt i miłe pożegnanie."
  },
  {
    day: 27,
    week: 4,
    title: "Powtórka dialogów",
    ids: [],
    speak: "Odegraj dialog w kawiarni, sklepie i przy pytaniu o drogę."
  },
  {
    day: 28,
    week: 4,
    title: "Finał 5 scen",
    ids: [],
    speak: "Odegraj pięć mini-dialogów z zakładki Dialogi."
  }
];

const DIALOGS = [
  {
    title: "Kawiarnia",
    scene: "cafe",
    lines: [
      ["Ty", "안녕하세요.", "Dzień dobry."],
      ["Barista", "안녕하세요. 뭐 드릴까요?", "Dzień dobry. Co podać?"],
      ["Ty", "커피 한 잔 주세요.", "Poproszę jedną kawę."],
      ["Barista", "포장해 드릴까요?", "Czy zapakować na wynos?"],
      ["Ty", "네, 포장해 주세요.", "Tak, poproszę na wynos."]
    ]
  },
  {
    title: "Sklep",
    scene: "shop",
    lines: [
      ["Ty", "실례합니다.", "Przepraszam."],
      ["Ty", "이거 얼마예요?", "Ile to kosztuje?"],
      ["Sprzedawca", "만 원이에요.", "Dziesięć tysięcy wonów."],
      ["Ty", "카드 돼요?", "Czy można kartą?"],
      ["Sprzedawca", "네, 돼요.", "Tak, można."]
    ]
  },
  {
    title: "Pytanie o drogę",
    scene: "travel",
    lines: [
      ["Ty", "실례합니다.", "Przepraszam."],
      ["Ty", "화장실 어디예요?", "Gdzie jest toaleta?"],
      ["Osoba", "오른쪽이에요.", "W prawo."],
      ["Ty", "여기서 멀어요?", "Czy to daleko stąd?"],
      ["Osoba", "아니요, 가까워요.", "Nie, jest blisko."]
    ]
  },
  {
    title: "Przedstawianie się",
    scene: "intro",
    lines: [
      ["Ty", "만나서 반갑습니다.", "Miło poznać."],
      ["Ty", "저는 토마스예요.", "Jestem Tomas."],
      ["Osoba", "저는 민수예요.", "Jestem Min-su."],
      ["Ty", "저는 폴란드 사람이에요.", "Jestem Polakiem."],
      ["Osoba", "좋아요.", "Dobrze / miło."]
    ]
  },
  {
    title: "Nie rozumiem",
    scene: "repair",
    lines: [
      ["Osoba", "지금 어디에 가요?", "Dokąd teraz idziesz?"],
      ["Ty", "죄송합니다.", "Przepraszam."],
      ["Ty", "한국어 잘 못해요.", "Nie mówię dobrze po koreańsku."],
      ["Ty", "천천히 말해 주세요.", "Proszę mówić wolniej."],
      ["Osoba", "괜찮아요.", "W porządku."]
    ]
  }
];

const THEORY_SECTIONS = [
  {
    badge: "wymowa",
    title: "Czy koreański ma tony?",
    lead: "Standardowy koreański nie ma tonów leksykalnych jak chiński. Nie musisz zapamiętywać, że jedna sylaba zmienia znaczenie przez wysokość głosu.",
    points: [
      "Znaczenie zwykle nie zależy od tonu jednej sylaby, tylko od słowa, kontekstu i końcówki zdania.",
      "Pytania często brzmią wyżej na końcu, a zdania oznajmujące spokojnie opadają.",
      "Najważniejsze na start: mów równo, nie połykaj końcówek i utrzymuj grzeczny, miękki ton."
    ],
    examples: [
      { front: "안녕하세요.", back: "an-njong-ha-se-jo", note: "Powitanie: głos spokojny, ciepły, bez dużego śpiewania." },
      { front: "괜찮아요?", back: "kłen-cza-na-jo?", note: "Pytanie: końcówka może lekko pójść w górę." },
      { front: "좋아요.", back: "dżo-a-jo", note: "Oznajmienie: końcówka może delikatnie opaść." }
    ],
    practice: "Powiedz 안녕하세요 trzy razy: neutralnie, jako pytanie i jako ciepłe powitanie. Sens zostaje ten sam, zmienia się nastawienie."
  },
  {
    badge: "hangul",
    title: "Z czego składają się znaki?",
    lead: "Hangul nie działa jak chińskie znaki. Jeden blok wygląda jak znak, ale w środku ma litery ułożone w sylabę.",
    points: [
      "Podstawowy blok to spółgłoska + samogłoska, np. 가 = ㄱ + ㅏ.",
      "Często dochodzi spółgłoska końcowa, np. 한 = ㅎ + ㅏ + ㄴ.",
      "Kształt bloku zmienia się zależnie od samogłoski: pionowa idzie obok spółgłoski, pozioma pod nią."
    ],
    examples: [
      { front: "한", back: "ㅎ + ㅏ + ㄴ", note: "Sylaba han, jak w 한국어." },
      { front: "국", back: "ㄱ + ㅜ + ㄱ", note: "Sylaba guk, z końcowym k." },
      { front: "어", back: "ㅇ + ㅓ", note: "ㅇ na początku jest nieme, tylko trzyma miejsce." }
    ],
    practice: "Patrz na bloki jak na małe pudełka z literami. Najpierw znajdź pierwszą spółgłoskę, potem samogłoskę, potem ewentualną końcówkę."
  },
  {
    badge: "usta",
    title: "Wymowa dla Polaka",
    lead: "Uproszczona wymowa w fiszkach jest pomostem. Koreański ma kilka dźwięków, których nie da się idealnie zapisać polskimi literami.",
    points: [
      "ㅓ brzmi między polskim o i a: usta luźne, szczęka lekko niżej niż przy o.",
      "ㅡ to płaskie y/eu: usta prawie w kreskę, dźwięk krótki i centralny.",
      "ㄹ jest między r i l: na początku bliżej krótkiego r, na końcu bliżej l."
    ],
    examples: [
      { front: "ㅓ", back: "eo / o-a", note: "Nie rób pełnego polskiego o; zostaw usta luźniejsze." },
      { front: "ㅡ", back: "eu / y", note: "Nie zaokrąglaj ust. Pomyśl o krótkim, płaskim y." },
      { front: "ㅇ", back: "zero / ng", note: "Na początku sylaby nieme, na końcu jak ng w angielskim song." },
      { front: "ㅋ ㅌ ㅍ ㅊ", back: "z przydechem", note: "Po spółgłosce ma wyjść mały podmuch powietrza." },
      { front: "ㄲ ㄸ ㅃ ㅆ ㅉ", back: "napięte", note: "Bez podmuchu, ale z wyraźnym napięciem gardła i ust." },
      { front: "받침", back: "końcówka sylaby", note: "Końcowa spółgłoska bywa krótka i zatrzymana, nie dodawaj polskiego y na końcu." }
    ],
    practice: "Połóż dłoń przed ustami i porównaj ㅂ z ㅍ. Przy ㅍ powinien być wyraźniejszy podmuch."
  },
  {
    badge: "zdania",
    title: "Jak buduje się zdania?",
    lead: "Największa zmiana dla Polaka: czasownik lub orzeczenie zwykle stoi na końcu. Dlatego warto uczyć się całych szablonów.",
    points: [
      "Typowy szyk to temat/podmiot + dodatki + czasownik na końcu.",
      "W prostych prośbach często wystarczy rzecz + 주세요, np. 커피 주세요.",
      "W koreańskim często pomija się ja i ty, jeśli kontekst jest oczywisty."
    ],
    examples: [
      { front: "저는 토마스예요.", back: "Ja Tomas jestem.", note: "Naturalnie: Jestem Tomas." },
      { front: "커피 주세요.", back: "Kawę proszę-dać.", note: "Naturalnie: Poproszę kawę." },
      { front: "화장실 어디예요?", back: "Toaleta gdzie jest?", note: "Naturalnie: Gdzie jest toaleta?" }
    ],
    practice: "Przy każdym zdaniu z fiszki zaznacz w głowie końcówkę: 예요, 있어요, 주세요, 해요. To tam dzieje się główna akcja."
  },
  {
    badge: "cząstki",
    title: "Partykuły: małe końcówki, dużo sensu",
    lead: "Partykuły to krótkie końcówki doklejane do słów. Pokazują, jaką rolę ma słowo w zdaniu.",
    points: [
      "은/는 oznacza temat: o czym teraz mówimy.",
      "이/가 wskazuje podmiot: co lub kto coś robi albo istnieje.",
      "을/를 wskazuje obiekt: rzecz, na którą działa czasownik."
    ],
    examples: [
      { front: "저는", back: "jeśli chodzi o mnie", note: "Temat: teraz mówię o sobie." },
      { front: "이름이", back: "imię jako podmiot", note: "W 이름이 뭐예요? pytamy, czym jest imię." },
      { front: "커피를", back: "kawę jako obiekt", note: "W 커피를 좋아해요 kawa jest tym, co lubię." },
      { front: "에 / 에서", back: "do/w / w miejscu akcji", note: "에 często cel lub miejsce, 에서 miejsce działania." }
    ],
    practice: "Na start nie analizuj każdej partykuły. Rozpoznawaj je wzrokowo i zapamiętuj z całym zdaniem."
  },
  {
    badge: "grzeczność",
    title: "Grzeczność i końcówki",
    lead: "Koreański mocno pilnuje relacji społecznych. Dlatego kurs używa bezpiecznych, grzecznych form, które pasują do większości sytuacji turystycznych.",
    points: [
      "-요 jest codzienną grzeczną końcówką: brzmi naturalnie i bezpiecznie.",
      "-습니다 / -ㅂ니다 jest bardziej formalne: dobre w oficjalnych zwrotach, przeprosinach i pierwszym kontakcie.",
      "Nie zaczynaj od bardzo koleżeńskich form bez -요, bo łatwo zabrzmieć zbyt ostro."
    ],
    examples: [
      { front: "괜찮아요.", back: "W porządku.", note: "Codziennie grzeczne, miękkie." },
      { front: "감사합니다.", back: "Dziękuję.", note: "Bardziej formalne i bardzo bezpieczne." },
      { front: "죄송합니다.", back: "Przepraszam.", note: "Dobre, gdy naprawdę przepraszasz." }
    ],
    practice: "Jeśli nie wiesz, jakiej formy użyć, wybierz wersję z 요 albo znany zwrot formalny z fiszek."
  },
  {
    badge: "pułapki",
    title: "Pułapki, które warto znać od razu",
    lead: "Te rzeczy najczęściej blokują początkujących. Nie musisz ich perfekcyjnie opanować, wystarczy, że będziesz je rozpoznawać.",
    points: [
      "Nie tłumacz słowo w słowo. Koreańskie zdanie często brzmi po polsku dziwnie, zanim zrobisz z niego naturalne znaczenie.",
      "Nie dopowiadaj zawsze ja/ty. Koreański lubi zostawiać osoby w domyśle.",
      "Nie dodawaj samogłoski po końcowej spółgłosce. 맛 brzmi krótko, nie jak ma-sy."
    ],
    examples: [
      { front: "주세요", back: "proszę dać", note: "W praktyce często znaczy po prostu: poproszę." },
      { front: "있어요?", back: "czy jest?", note: "Bardzo przydatny wzór do pytań survivalowych." },
      { front: "못해요", back: "nie umiem / nie mogę", note: "W 한국어 잘 못해요 znaczy: nie mówię dobrze po koreańsku." }
    ],
    practice: "Przy fiszce czytaj najpierw naturalne znaczenie, potem dosłowne. Ta kolejność pomaga mówić, a nie tylko analizować."
  }
];

const DAILY_TIPS = {
  1: "Koreański nie ma tonów jak chiński. W powitaniach ważniejsze są rytm, miękka końcówka i spokojny głos.",
  2: "Końcówka -합니다 brzmi formalnie i bezpiecznie. Dobre słowo na start, gdy chcesz być uprzejmy.",
  3: "네 znaczy tak, ale bywa też krótkim sygnałem: słucham, rozumiem, mhm.",
  4: "실례합니다 jest jak grzeczne wejście do rozmowy. 죄송합니다 to mocniejsze przepraszam za problem.",
  5: "잘 못해요 to przydatny wzór: nie umiem dobrze. Możesz podmienić 한국어 na inną umiejętność.",
  6: "W powtórce patrz na końcówki: -요 i -합니다 mówią, że forma jest grzeczna.",
  7: "Testuj z polskiego na koreański na głos. Chodzi o reakcję, nie o idealny akcent.",
  8: "주세요 dosłownie znaczy proszę dać. W sklepie działa jak polskie poproszę.",
  9: "한 잔 to jeden kubek/szklanka. Koreański często używa liczników po liczbach.",
  10: "안 przed opisem lub czasownikiem robi negację: 안 매운 거 = coś nieostrego.",
  11: "돼요? znaczy mniej więcej czy da się? Dlatego 카드 돼요? to naturalne czy można kartą?",
  12: "-도 돼요? to bardzo praktyczny wzór: czy mogę...? Zapamiętaj go jako całość.",
  13: "Powtórka sklepu i kawiarni: mów rzecz + 주세요, a potem pytanie 얼마예요?",
  14: "W testach nie bój się dosłownych znaczeń. One są rusztowaniem, naturalne zdanie jest celem.",
  15: "어디 znaczy gdzie. W koreańskim pytanie może wyglądać jak miejsce + gdzie jest?",
  16: "-로 pokazuje kierunek: 이 주소로 = pod ten adres / w stronę tego adresu.",
  17: "지금 to teraz, 오늘 to dziś. Te małe słowa ustawiają czas całego zdania.",
  18: "있어요? to czy jest? Jeden wzór daje mnóstwo pytań: Wi-Fi, toaleta, menu, rabat.",
  19: "왼쪽 i 오른쪽 ucz się wzrokowo jako pary: lewo i prawo. Nie rozbieraj ich za długo.",
  20: "W scenkach survivalowych najpierw powiedz 실례합니다, potem problem, potem prośbę.",
  21: "Kiedy nie pamiętasz całego zdania, uratuje Cię rdzeń: gdzie, ile, proszę, nie rozumiem.",
  22: "저는 oznacza jeśli chodzi o mnie. To temat zdania, nie zawsze dosłowne polskie ja.",
  23: "-고 있어요 oznacza, że coś trwa teraz: 배우고 있어요 = uczę się.",
  24: "좋아해요 to lubię, a 좋아요 to jest dobre / podoba mi się. Podobne, ale nie identyczne.",
  25: "싫어요 może znaczyć nie lubię albo nie chcę. Używaj ostrożnie, bo brzmi dość stanowczo.",
  26: "같이 znaczy razem. 같이 가요 to krótka, naturalna propozycja: chodźmy razem.",
  27: "Przed finałem ćwicz całymi blokami: powitanie, prośba, reakcja, podziękowanie.",
  28: "Finał to nie perfekcja. Sukcesem jest umieć spokojnie rozpocząć, poprosić i naprawić rozmowę."
};

const HANGUL_LETTERS = [
  { char: "ㄱ", type: "spółgłoska", sound: "g/k", story: "Zagięty róg garażu: gdy startujesz, brzmi jak g, a na końcu słowa zamyka się jak k.", mouth: "Tył języka dotyka podniebienia i szybko puszcza powietrze.", example: "가 z 안녕히 가세요" },
  { char: "ㄲ", type: "spółgłoska napięta", sound: "kk", story: "Podwójny róg garażu jest zablokowany dwa razy mocniej, więc dźwięk wychodzi twardo i bez podmuchu.", mouth: "Napnij tył języka, nie wypuszczaj mocnego powietrza.", example: "깐 z 잠깐만요" },
  { char: "ㄴ", type: "spółgłoska", sound: "n", story: "Kąt nosa: język opiera się jak kreska na dziąsłach, a dźwięk idzie nosem.", mouth: "Czubek języka dotyka miejsca za górnymi zębami.", example: "녕 z 안녕하세요" },
  { char: "ㄷ", type: "spółgłoska", sound: "d/t", story: "Drzwi domku: otwierają się jak d na początku i zatrzaskują jak t na końcu.", mouth: "Język dotyka dziąseł, krótki start bez mocnego podmuchu.", example: "도 z 도와주세요" },
  { char: "ㄸ", type: "spółgłoska napięta", sound: "tt", story: "Dwoje drzwi jest zaryglowanych, więc wypychasz dźwięk mocno, ale bez wybuchu powietrza.", mouth: "Napnij czubek języka przy dziąsłach.", example: "또 z 다음에 또 만나요" },
  { char: "ㄹ", type: "spółgłoska", sound: "r/l", story: "Kręta rzeka: na początku mruga jak krótkie r, a na końcu kładzie się jak l.", mouth: "Muśnij dziąsła czubkiem języka, nie rób długiego polskiego r.", example: "를 z 한국어를 배우고 있어요" },
  { char: "ㅁ", type: "spółgłoska", sound: "m", story: "Małe mieszkanie z zamkniętymi drzwiami: usta się zamykają i dźwięk idzie przez nos.", mouth: "Zamknij usta lekko, bez napinania szczęki.", example: "만 z 만나서 반갑습니다" },
  { char: "ㅂ", type: "spółgłoska", sound: "b/p", story: "Pudełko z bokami: usta zamykają pudełko, potem je otwierają.", mouth: "Złącz wargi i puść krótko, bez silnego podmuchu.", example: "반 z 반갑습니다" },
  { char: "ㅅ", type: "spółgłoska", sound: "s", story: "Dwie ścieżki schodzą się w syk wiatru.", mouth: "Zęby blisko siebie, lekki syk, bez polskiego sz.", example: "세 z 안녕하세요" },
  { char: "ㅆ", type: "spółgłoska napięta", sound: "ss", story: "Podwójna ścieżka syczy mocniej, jak dwa cienkie strumienie powietrza.", mouth: "Napnij syk, ale nie dodawaj przydechu.", example: "있 z 있어요" },
  { char: "ㅇ", type: "spółgłoska", sound: "nieme/ng", story: "Puste kółko jest haczykiem na samogłoskę: na początku milczy, na końcu dzwoni jak ng.", mouth: "Na początku nie wymawiaj; na końcu zamknij dźwięk w nosie.", example: "안 z 안녕하세요" },
  { char: "ㅈ", type: "spółgłoska", sound: "dż/cz", story: "Mały daszek z iskrami: startuje jak miękkie dż, czasem brzmi bliżej cz.", mouth: "Język blisko podniebienia, usta lekko zaokrąglone.", example: "주 z 주세요" },
  { char: "ㅉ", type: "spółgłoska napięta", sound: "jj", story: "Podwójny daszek ściska iskrę, więc dźwięk wyskakuje krótko i twardo.", mouth: "Napnij środek języka, wypuść bez podmuchu.", example: "찍 z 사진 찍어도 돼요" },
  { char: "ㅊ", type: "spółgłoska z przydechem", sound: "czh", story: "Daszek z antenką wypuszcza powietrze jak mały wystrzał.", mouth: "Powiedz cz z wyraźnym podmuchem na dłoni.", example: "천 z 천천히 말해 주세요" },
  { char: "ㅋ", type: "spółgłoska z przydechem", sound: "kh", story: "Róg garażu dostał komin, więc po k wychodzi obłoczek powietrza.", mouth: "Tył języka jak przy k, ale z mocniejszym podmuchem.", example: "커 z 커피 한 잔 주세요" },
  { char: "ㅌ", type: "spółgłoska z przydechem", sound: "th", story: "Drzwi z dachem trzaskają tak, że czujesz powietrze na dłoni.", mouth: "Czubek języka przy dziąsłach, wypuść wyraźny podmuch.", example: "택 z 택시 불러 주세요" },
  { char: "ㅍ", type: "spółgłoska z przydechem", sound: "ph", story: "Pudełko z daszkiem pęka i wypuszcza puff powietrza.", mouth: "Złącz wargi i wypuść mocniejszy podmuch niż przy ㅂ.", example: "피 z 커피 한 잔 주세요" },
  { char: "ㅎ", type: "spółgłoska", sound: "h", story: "Mały człowiek w kapeluszu robi ciche ha.", mouth: "Gardło otwarte, lekki oddech, bez szorstkiego charczenia.", example: "하 z 안녕하세요" },
  { char: "ㅏ", type: "samogłoska", sound: "a", story: "Pionowa ściana i kreska w prawo: otwierasz okno na jasne a.", mouth: "Otwórz usta naturalnie jak przy polskim a.", example: "가, 하, 만" },
  { char: "ㅐ", type: "samogłoska", sound: "e/ae", story: "Dwa okna obok siebie wpuszczają jaśniejsze e.", mouth: "Usta szerzej niż przy i, dźwięk blisko polskiego e.", example: "매 z 매운 음식" },
  { char: "ㅓ", type: "samogłoska", sound: "o-a", story: "Kreska patrzy w lewo, jakby głos cofał się głębiej niż zwykłe a.", mouth: "Usta luźne, nie rób pełnego polskiego o.", example: "어 z 한국어" },
  { char: "ㅔ", type: "samogłoska", sound: "e", story: "Dwie kreski przy ścianie robią wąskie, czyste e.", mouth: "Usta lekko rozciągnięte, krótko.", example: "세 z 안녕하세요" },
  { char: "ㅕ", type: "samogłoska", sound: "jo", story: "Dwie kreski w lewo to dwa małe kroki do dźwięku jo.", mouth: "Zacznij od krótkiego j, potem luźne ㅓ.", example: "녕 z 안녕하세요" },
  { char: "ㅖ", type: "samogłoska", sound: "je", story: "Podwójne e z małym rozbiegiem: najpierw j, potem e.", mouth: "Krótki start j i jasne e.", example: "예 z 얼마예요" },
  { char: "ㅗ", type: "samogłoska", sound: "o", story: "Kreska idzie w górę jak filiżanka podnoszona do ust: okrągłe o.", mouth: "Zaokrąglij usta, krótko.", example: "고 z 고맙습니다" },
  { char: "ㅘ", type: "samogłoska złożona", sound: "ła/wa", story: "ㅗ spotyka ㅏ: filiżanka robi szerokie wa.", mouth: "Zacznij od zaokrąglenia ust i szybko otwórz do a.", example: "와 z 도와주세요" },
  { char: "ㅙ", type: "samogłoska złożona", sound: "łe/we", story: "Okrągłe o wpada w jasne e, jak szybkie pytanie we?", mouth: "Krótko zaokrąglij usta, potem przejdź do e.", example: "돼 z 카드 돼요" },
  { char: "ㅚ", type: "samogłoska złożona", sound: "łe/we", story: "ㅗ trzyma pionową ścianę i robi zwarte we.", mouth: "Usta lekko okrągłe, dźwięk blisko we.", example: "죄 z 죄송합니다" },
  { char: "ㅛ", type: "samogłoska", sound: "jo", story: "Dwie kreski nad podłogą skaczą jak dwa małe jo-jo.", mouth: "Krótki start j i okrągłe o.", example: "요 z 안녕하세요" },
  { char: "ㅜ", type: "samogłoska", sound: "u", story: "Kreska spada w dół jak wiadro do studni: głębokie u.", mouth: "Zaokrąglij usta jak przy polskim u.", example: "주 z 주세요" },
  { char: "ㅝ", type: "samogłoska złożona", sound: "ło/wo", story: "ㅜ wjeżdża w ㅓ: z głębokiego u przechodzisz do luźnego o-a.", mouth: "Zaokrąglij usta i szybko rozluźnij.", example: "뭐 z 뭐예요" },
  { char: "ㅠ", type: "samogłoska", sound: "ju", story: "Dwie kreski pod linią wyglądają jak łzy: ju, jak smutne juuu.", mouth: "Krótki start j i okrągłe u.", example: "뉴 z 메뉴 주세요" },
  { char: "ㅡ", type: "samogłoska", sound: "eu/y", story: "Płaska kreska to usta w poziomą linię: dźwięk jest płaski i centralny.", mouth: "Nie zaokrąglaj ust, powiedz krótkie płaskie y/eu.", example: "은 z 저는" },
  { char: "ㅣ", type: "samogłoska", sound: "i", story: "Pionowa igła: cienkie, proste i.", mouth: "Usta lekko rozciągnięte, krótko.", example: "시 z 택시" },
  { char: "ㄶ", type: "końcówka złożona", sound: "n", story: "ㄴ niesie ciche ㅎ w plecaku: widzisz dwa znaki, ale końcówka brzmi głównie jak n.", mouth: "Zamknij język na n, nie dodawaj osobnego ha.", example: "찮 z 괜찮아요" },
  { char: "ㅀ", type: "końcówka złożona", sound: "l", story: "ㄹ ma cichy kapelusz ㅎ: rzeka kończy się jak l, bez osobnego h.", mouth: "Połóż język lekko jak przy l i zatrzymaj.", example: "잃 z 길을 잃었어요" },
  { char: "ㅄ", type: "końcówka złożona", sound: "p", story: "Pudełko ㅂ trzyma w środku syk ㅅ, ale na końcu słychać głównie p.", mouth: "Zamknij usta krótko, nie dopowiadaj sy.", example: "없 z 문제없어요" }
];

const HANGUL_AUDIO = {
  "ㄱ": "가",
  "ㄲ": "까",
  "ㄴ": "나",
  "ㄷ": "다",
  "ㄸ": "따",
  "ㄹ": "라",
  "ㅁ": "마",
  "ㅂ": "바",
  "ㅅ": "사",
  "ㅆ": "싸",
  "ㅇ": "아",
  "ㅈ": "자",
  "ㅉ": "짜",
  "ㅊ": "차",
  "ㅋ": "카",
  "ㅌ": "타",
  "ㅍ": "파",
  "ㅎ": "하",
  "ㅏ": "아",
  "ㅐ": "애",
  "ㅓ": "어",
  "ㅔ": "에",
  "ㅕ": "여",
  "ㅖ": "예",
  "ㅗ": "오",
  "ㅘ": "와",
  "ㅙ": "왜",
  "ㅚ": "외",
  "ㅛ": "요",
  "ㅜ": "우",
  "ㅝ": "워",
  "ㅠ": "유",
  "ㅡ": "으",
  "ㅣ": "이",
  "ㄶ": "괜찮아요",
  "ㅀ": "잃었어요",
  "ㅄ": "없어요"
};

const HANGUL_LESSONS = [
  {
    id: "hangul-1",
    order: 1,
    title: "Start hangulu 1/3: pudełka sylab",
    letters: ["ㅇ", "ㅏ", "ㅓ", "ㅗ", "ㅜ", "ㅡ", "ㅣ", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅎ"],
    goal: "Zobaczyć, że 한 to nie obrazek, tylko ㅎ + ㅏ + ㄴ.",
    newCopy: "Poznaj rolę ㅇ, podstawowe samogłoski i pierwsze spółgłoski z kursu.",
    reviewCopy: "Ćwicz rozpoznawanie kierunku kresek: pionowe samogłoski stoją obok spółgłoski, poziome idą pod nią.",
    speak: "Przeczytaj powoli: 안, 한, 하, 가, 나. Nie walcz jeszcze o perfekcyjny akcent.",
    tip: "Na starcie patrz na hangul jak na klocki. Najpierw znajdź pierwszą spółgłoskę, potem samogłoskę, potem końcówkę.",
    practice: ["안 = ㅇ + ㅏ + ㄴ", "한 = ㅎ + ㅏ + ㄴ", "가 = ㄱ + ㅏ"]
  },
  {
    id: "hangul-2",
    order: 2,
    title: "Start hangulu 2/3: samogłoski i końcówki",
    letters: ["ㅐ", "ㅔ", "ㅕ", "ㅖ", "ㅛ", "ㅠ", "ㅘ", "ㅙ", "ㅚ", "ㅝ"],
    goal: "Rozpoznawać samogłoski, które najczęściej pojawiają się w Twoich fiszkach.",
    newCopy: "Dodaj dźwięki e, jo, ju oraz złożenia typu wa/we/wo.",
    reviewCopy: "Powtórz zasadę: końcowa spółgłoska siedzi na dole sylaby i bywa krótka.",
    speak: "Przeczytaj powoli: 세, 요, 예, 와, 돼, 뭐.",
    tip: "Złożone samogłoski traktuj jak szybki ślizg ust: ㅘ zaczyna się okrągło i otwiera do a.",
    practice: ["세 = ㅅ + ㅔ", "요 = ㅇ + ㅛ", "돼 = ㄷ + ㅙ"]
  },
  {
    id: "hangul-3",
    order: 3,
    title: "Start hangulu 3/3: przydech i napięcie",
    letters: ["ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㄲ", "ㄸ", "ㅆ", "ㅉ", "ㄶ", "ㅀ", "ㅄ"],
    goal: "Odróżniać zwykłe, przydechowe i napięte spółgłoski.",
    newCopy: "Poznaj litery z podmuchem, litery napięte i trudniejsze końcówki z fiszek.",
    reviewCopy: "Porównuj pary: ㄱ/ㅋ/ㄲ, ㄷ/ㅌ/ㄸ, ㅈ/ㅊ/ㅉ.",
    speak: "Połóż dłoń przed ustami i porównaj 커, 터, 피 z krótszymi dźwiękami bez podmuchu.",
    tip: "Przydech to powietrze na dłoni. Napięcie to mocny start bez dużego podmuchu.",
    practice: ["커 = ㅋ + ㅓ", "택 = ㅌ + ㅐ + ㄱ", "없 = ㅇ + ㅓ + ㅄ"]
  }
];

const COURSE_STEPS = [
  ...HANGUL_LESSONS.map((lesson, index) => ({
    type: "hangul",
    step: index + 1,
    lessonId: lesson.id,
    title: lesson.title
  })),
  ...DAYS.map((day) => ({
    type: "phrases",
    step: day.day + HANGUL_LESSONS.length,
    day: day.day,
    week: day.week,
    title: day.title,
    ids: day.ids,
    speak: day.speak
  }))
];

const phraseById = Object.fromEntries(PHRASES.map((phrase) => [phrase.id, phrase]));
const hangulLetterByChar = Object.fromEntries(HANGUL_LETTERS.map((letter) => [letter.char, letter]));
let koreanVoice = null;
const savedStep = Number(localStorage.getItem("ko28-step"));
const savedDay = Number(localStorage.getItem("ko28-day"));
const initialStep = savedStep || (savedDay ? savedDay + HANGUL_LESSONS.length : 1);
const state = {
  step: Math.min(COURSE_STEPS.length, Math.max(1, initialStep)),
  testMode: "production",
  testWeek: 1
};

if (!savedStep && savedDay) {
  localStorage.setItem("ko28-step", String(state.step));
}

const progress = JSON.parse(localStorage.getItem("ko28-progress") || "{}");

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function saveProgress() {
  localStorage.setItem("ko28-progress", JSON.stringify(progress));
}

function saveStep() {
  localStorage.setItem("ko28-step", String(state.step));
  const step = getCurrentStep();
  if (step.type === "phrases") {
    localStorage.setItem("ko28-day", String(step.day));
  }
}

function clampStep(step) {
  return Math.min(COURSE_STEPS.length, Math.max(1, step));
}

function getCurrentStep() {
  return COURSE_STEPS[state.step - 1] || COURSE_STEPS[0];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function chunkHangul(text) {
  return text
    .replace(/[.?]/g, "")
    .split(/\s+/)
    .join("")
    .slice(0, 4)
    .split("");
}

function getReviewPhrases(dayNumber) {
  const previous = PHRASES.filter((phrase) => phrase.day < dayNumber);
  return previous.slice(Math.max(0, previous.length - 12));
}

const CHOSEONG = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const JUNGSEONG = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
const JONGSEONG = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

function decomposeHangulSyllable(char) {
  const code = char.codePointAt(0) - 0xac00;
  if (code < 0 || code >= 11172) return null;

  const initial = CHOSEONG[Math.floor(code / 588)];
  const vowel = JUNGSEONG[Math.floor((code % 588) / 28)];
  const final = JONGSEONG[code % 28];
  return {
    char,
    initial,
    vowel,
    final,
    parts: final ? [initial, vowel, final] : [initial, vowel]
  };
}

function getHangulSound(part, role) {
  if (part === "ㅇ" && role === "initial") return "nieme";
  if (part === "ㅇ" && role === "final") return "ng";
  return hangulLetterByChar[part]?.sound || "?";
}

function getPhraseSyllableBreakdown(text) {
  return [...text]
    .map((char) => decomposeHangulSyllable(char))
    .filter(Boolean);
}

function renderSyllableBreakdown(phrase) {
  const rows = getPhraseSyllableBreakdown(phrase.korean).map((syllable) => {
    const parts = [
      { char: syllable.initial, role: "initial" },
      { char: syllable.vowel, role: "vowel" },
      ...(syllable.final ? [{ char: syllable.final, role: "final" }] : [])
    ];
    const partsHtml = parts
      .map((part) => `<span>${part.char}<small>${getHangulSound(part.char, part.role)}</small></span>`)
      .join("");

    return `
      <div class="syllable-row">
        <strong>${syllable.char}</strong>
        <div>${partsHtml}</div>
      </div>
    `;
  }).join("");

  return `
    <details class="syllable-breakdown">
      <summary>Rozbij sylaby</summary>
      <div class="syllable-list">${rows}</div>
      <p>Zapis literowy pomaga czytać. Realna wymowa czasem się łączy, np. końcówki mogą brzmieć krócej.</p>
    </details>
  `;
}

function phraseCard(phrase, compact = false) {
  const scene = SCENES[phrase.scene];
  const memory = chunkHangul(phrase.korean)
    .map((part) => `<span>${part}</span>`)
    .join("");

  return `
    <article class="phrase-card ${compact ? "compact" : ""}" style="--accent: ${scene.color}; --scene-bg: ${scene.bg}">
      <div class="scene-ribbon">
        <span class="scene-pill"><span class="scene-icon" aria-hidden="true">${scene.icon}</span>${scene.label}</span>
        <span class="phrase-meta">T${phrase.week} · D${phrase.day}</span>
      </div>
      <div class="memory-cue" aria-hidden="true">${memory}</div>
      <p class="eyebrow">${phrase.situation}</p>
      <h3 class="hangul">${phrase.korean}</h3>
      <p class="pronunciation">${phrase.pronunciation}</p>
      <p class="natural"><span>Naturalnie</span><strong>${phrase.polish}</strong></p>
      <p class="literal"><span>Dosłownie</span><br>${phrase.literal}</p>
      ${renderSyllableBreakdown(phrase)}
      <p class="pattern"><span>Schemat</span><br>${phrase.pattern}</p>
    </article>
  `;
}

function setView(viewName) {
  qsa(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewTarget === viewName);
  });
  qsa(".view").forEach((view) => {
    view.classList.toggle("is-active", view.id === `view-${viewName}`);
  });
}

function setMenuOpen(isOpen) {
  const toggle = qs("#menu-toggle");
  const tabs = qs("#course-tabs");
  if (!toggle || !tabs) return;

  tabs.classList.toggle("is-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Zamknij menu" : "Otwórz menu");
}

function getKoreanVoice() {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  if (koreanVoice) return koreanVoice;

  koreanVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("ko")) || null;
  return koreanVoice;
}

function speakKorean(text) {
  if (typeof window === "undefined" || !window.speechSynthesis || !text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.72;
  utterance.pitch = 1;
  const voice = getKoreanVoice();
  if (voice) utterance.voice = voice;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function audioButtonFor(letter) {
  const audioText = HANGUL_AUDIO[letter.char] || letter.char;
  return `
    <button class="audio-button" type="button" data-speak-ko="${audioText}" aria-label="Odtwórz wymowę ${letter.char}" title="Odtwórz wymowę">
      <span aria-hidden="true">🔊</span>
    </button>
  `;
}

function renderHangulLetterChip(char) {
  const letter = hangulLetterByChar[char];
  if (!letter) return "";
  return `
    <div class="hangul-chip">
      <strong>${letter.char}</strong>
      <span>${letter.sound}</span>
      ${audioButtonFor(letter)}
    </div>
  `;
}

function renderHangulLessonToday(lesson) {
  const practice = lesson.practice.map((item) => `<li>${item}</li>`).join("");
  const letters = lesson.letters.map(renderHangulLetterChip).join("");

  return `
    <div class="hangul-today">
      <article class="hangul-panel">
        <p class="eyebrow">Cel</p>
        <h3>${lesson.goal}</h3>
        <p>${lesson.tip}</p>
      </article>
      <article class="hangul-panel">
        <p class="eyebrow">Litery dzisiaj</p>
        <div class="hangul-chip-grid">${letters}</div>
      </article>
      <article class="hangul-panel">
        <p class="eyebrow">Czytanie</p>
        <ul>${practice}</ul>
      </article>
    </div>
  `;
}

function renderToday() {
  const step = getCurrentStep();

  if (step.type === "hangul") {
    const lesson = HANGUL_LESSONS.find((item) => item.id === step.lessonId);
    qs("#today-week").textContent = "Start hangulu";
    qs("#today-title").textContent = lesson.title;
    qs("#day-output").textContent = `Start ${lesson.order}/3`;
    qs("#day-range").value = step.step;
    qs("#new-stage-copy").textContent = lesson.newCopy;
    qs("#review-stage-copy").textContent = lesson.reviewCopy;
    qs("#speaking-stage-copy").textContent = lesson.speak;
    qs("#daily-tip-copy").textContent = lesson.tip;
    qs("#today-cards-title").textContent = "Dzisiejszy hangul";
    qs("#today-cards-count").textContent = `${lesson.letters.length} liter`;
    qs("#today-cards").innerHTML = renderHangulLessonToday(lesson);

    qsa("[data-stage-check]").forEach((input) => {
      const key = `s${step.step}-${input.dataset.stageCheck}`;
      input.checked = Boolean(progress[key]);
    });
    return;
  }

  const day = DAYS[step.day - 1];
  const newPhrases = day.ids.map((id) => phraseById[id]);
  const reviewPhrases = getReviewPhrases(day.day);
  const visiblePhrases = newPhrases.length ? newPhrases : reviewPhrases;
  const title = newPhrases.length ? "Dzisiejsze fiszki" : "Fiszki do powtórki";

  qs("#today-week").textContent = `Tydzień ${day.week}`;
  qs("#today-title").textContent = day.title;
  qs("#day-output").textContent = `Dzień ${day.day}`;
  qs("#day-range").value = step.step;
  qs("#new-stage-copy").textContent = newPhrases.length
    ? `${newPhrases.length} nowe zwroty: ${newPhrases.map((phrase) => phrase.polish).join(" · ")}`
    : "Bez nowych zwrotów. Ten dzień wzmacnia pamięć i tempo reakcji.";
  qs("#review-stage-copy").textContent = reviewPhrases.length
    ? `${reviewPhrases.length} ostatnich zwrotów wraca do powtórki.`
    : "Pierwszy dzień zaczyna się od czystej karty.";
  qs("#speaking-stage-copy").textContent = day.speak;
  qs("#daily-tip-copy").textContent = DAILY_TIPS[day.day] || "Wróć do zakładki Teoria i wybierz jedną rzecz, którą zauważysz dziś w fiszkach.";
  qs("#today-cards-title").textContent = title;
  qs("#today-cards-count").textContent = `${visiblePhrases.length} kart`;
  qs("#today-cards").innerHTML = visiblePhrases.length
    ? visiblePhrases.map((phrase) => phraseCard(phrase)).join("")
    : `<div class="empty-state">Dziś głównym materiałem są testy i dialogi.</div>`;

  qsa("[data-stage-check]").forEach((input) => {
    const key = `s${step.step}-${input.dataset.stageCheck}`;
    input.checked = Boolean(progress[key]);
  });
}

function renderSceneOptions() {
  const select = qs("#scene-filter");
  Object.entries(SCENES).forEach(([key, scene]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = scene.label;
    select.appendChild(option);
  });
}

function renderCards() {
  const week = qs("#week-filter").value;
  const scene = qs("#scene-filter").value;
  const search = qs("#card-search").value.trim().toLowerCase();
  const cards = PHRASES.filter((phrase) => {
    const weekMatch = week === "all" || String(phrase.week) === week;
    const sceneMatch = scene === "all" || phrase.scene === scene;
    const text = `${phrase.korean} ${phrase.pronunciation} ${phrase.polish} ${phrase.situation}`.toLowerCase();
    return weekMatch && sceneMatch && text.includes(search);
  });

  qs("#cards-list").innerHTML = cards.length
    ? cards.map((phrase) => phraseCard(phrase)).join("")
    : `<div class="empty-state">Brak fiszek dla wybranych filtrów.</div>`;
}

function renderPlan() {
  qs("#plan-list").innerHTML = COURSE_STEPS.map((step) => {
    if (step.type === "hangul") {
      const lesson = HANGUL_LESSONS.find((item) => item.id === step.lessonId);
      return `
        <article class="plan-day ${step.step === state.step ? "is-current" : ""}">
          <div class="day-badge">H${lesson.order}</div>
          <div>
            <p class="eyebrow">Start hangulu ${lesson.order}/3</p>
            <h3>${lesson.title.replace(/^Start hangulu \d\/3: /, "")}</h3>
            <p class="day-meta">${lesson.goal}</p>
          </div>
          <div class="day-count">${lesson.letters.length} liter</div>
        </article>
      `;
    }

    const day = DAYS[step.day - 1];
    const newCount = day.ids.length;
    const reviewCount = getReviewPhrases(day.day).length;
    const label = newCount ? `${newCount} nowe · ${reviewCount} powt.` : `${reviewCount} powt. · scenka`;
    return `
      <article class="plan-day ${step.step === state.step ? "is-current" : ""}">
        <div class="day-badge">D${day.day}</div>
        <div>
          <p class="eyebrow">Tydzień ${day.week}</p>
          <h3>${day.title}</h3>
          <p class="day-meta">${day.speak}</p>
        </div>
        <div class="day-count">${label}</div>
      </article>
    `;
  }).join("");
}

function answerForProduction(phrase) {
  return `
    <details class="answer-box">
      <summary>Odpowiedź</summary>
      <p><strong>${phrase.korean}</strong></p>
      <p>${phrase.pronunciation}</p>
      <p>${phrase.literal}</p>
    </details>
  `;
}

function choicesFor(phrase, pool) {
  const distractors = shuffle(pool.filter((item) => item.id !== phrase.id)).slice(0, 2);
  return shuffle([phrase, ...distractors]);
}

function renderTests() {
  const week = Number(qs("#test-week").value);
  const pool = PHRASES.filter((phrase) => phrase.week === week);
  const items = shuffle(pool).slice(0, 20);
  const isRecognition = state.testMode === "recognition";

  qs("#test-list").innerHTML = items.map((phrase, index) => {
    const prompt = isRecognition ? phrase.korean : phrase.polish;
    const body = isRecognition
      ? `<div class="choice-row">${choicesFor(phrase, pool).map((choice) => `
          <button class="choice" type="button" data-correct="${choice.id === phrase.id}">
            ${choice.polish}
          </button>
        `).join("")}</div>`
      : answerForProduction(phrase);

    return `
      <article class="test-item">
        <div class="test-number">Pytanie ${index + 1} z 20</div>
        <div class="test-prompt">${prompt}</div>
        ${body}
      </article>
    `;
  }).join("");
}

function renderDialogs() {
  qs("#dialog-list").innerHTML = DIALOGS.map((dialog) => {
    const scene = SCENES[dialog.scene];
    const lines = dialog.lines.map(([speaker, korean, polish]) => `
      <div class="dialog-line">
        <div class="speaker">${speaker}</div>
        <div>
          <p class="dialog-ko">${korean}</p>
          <p class="dialog-pl">${polish}</p>
        </div>
      </div>
    `).join("");

    return `
      <article class="dialog-card" style="--accent: ${scene.color}; --scene-bg: ${scene.bg}">
        <div class="dialog-title">
          <h3>${dialog.title}</h3>
          <span class="scene-pill"><span class="scene-icon" aria-hidden="true">${scene.icon}</span>${scene.label}</span>
        </div>
        <div class="dialog-lines">${lines}</div>
      </article>
    `;
  }).join("");
}

function renderTheory() {
  qs("#theory-list").innerHTML = THEORY_SECTIONS.map((section, index) => {
    const points = section.points.map((point) => `<li>${point}</li>`).join("");
    const examples = section.examples.map((example) => `
      <div class="theory-example">
        <strong>${example.front}</strong>
        <span>${example.back}</span>
        <p>${example.note}</p>
      </div>
    `).join("");

    return `
      <details class="theory-card" ${index === 0 ? "open" : ""}>
        <summary>
          <span class="theory-badge">${section.badge}</span>
          <strong>${section.title}</strong>
        </summary>
        <div class="theory-body">
          <p class="theory-lead">${section.lead}</p>
          <ul class="theory-points">${points}</ul>
          <div class="theory-examples">${examples}</div>
          <div class="mini-exercise">
            <span>Mini-ćwiczenie</span>
            <p>${section.practice}</p>
          </div>
        </div>
      </details>
    `;
  }).join("");
}

function renderHangul() {
  qs("#hangul-lessons").innerHTML = HANGUL_LESSONS.map((lesson) => {
    const practice = lesson.practice.map((item) => `<li>${item}</li>`).join("");
    const letters = lesson.letters.map(renderHangulLetterChip).join("");

    return `
      <article class="hangul-lesson">
        <div>
          <p class="eyebrow">Start ${lesson.order}/3</p>
          <h3>${lesson.title.replace(/^Start hangulu \d\/3: /, "")}</h3>
          <p>${lesson.goal}</p>
        </div>
        <div class="hangul-chip-grid">${letters}</div>
        <div class="hangul-practice">
          <span>Ćwiczenie czytania</span>
          <ul>${practice}</ul>
        </div>
      </article>
    `;
  }).join("");

  qs("#hangul-letters").innerHTML = HANGUL_LETTERS.map((letter) => `
    <article class="hangul-letter-card">
      <div class="letter-head">
        <strong>${letter.char}</strong>
        <div>
          <span>${letter.type}</span>
          <b>${letter.sound}</b>
        </div>
        ${audioButtonFor(letter)}
      </div>
      <p><span>Historia</span>${letter.story}</p>
      <p><span>Usta</span>${letter.mouth}</p>
      <p><span>Przykład</span>${letter.example}</p>
    </article>
  `).join("");
}

function bindEvents() {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      koreanVoice = null;
      getKoreanVoice();
    });
  }

  const menuToggle = qs("#menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });
  }

  qsa(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      setView(button.dataset.viewTarget);
      if (typeof window !== "undefined" && window.matchMedia("(max-width: 620px)").matches) {
        setMenuOpen(false);
      }
    });
  });

  if (typeof window !== "undefined") {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });

    window.addEventListener("resize", () => {
      if (!window.matchMedia("(max-width: 620px)").matches) {
        setMenuOpen(false);
      }
    });
  }

  qs("#prev-day").addEventListener("click", () => {
    state.step = clampStep(state.step - 1);
    saveStep();
    renderToday();
    renderPlan();
  });

  qs("#next-day").addEventListener("click", () => {
    state.step = clampStep(state.step + 1);
    saveStep();
    renderToday();
    renderPlan();
  });

  qs("#day-range").addEventListener("input", (event) => {
    state.step = clampStep(Number(event.target.value));
    saveStep();
    renderToday();
    renderPlan();
  });

  qsa("[data-stage-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const key = `s${state.step}-${input.dataset.stageCheck}`;
      progress[key] = input.checked;
      saveProgress();
    });
  });

  ["#week-filter", "#scene-filter", "#card-search"].forEach((selector) => {
    qs(selector).addEventListener("input", renderCards);
  });

  qs("#test-week").addEventListener("change", () => {
    state.testWeek = Number(qs("#test-week").value);
    renderTests();
  });

  qsa("[data-test-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.testMode = button.dataset.testMode;
      qsa("[data-test-mode]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderTests();
    });
  });

  qs("#shuffle-test").addEventListener("click", renderTests);

  qs("#test-list").addEventListener("click", (event) => {
    const choice = event.target.closest(".choice");
    if (!choice) return;
    const row = choice.closest(".choice-row");
    qsa(".choice", row).forEach((button) => {
      button.disabled = true;
      button.classList.toggle("is-correct", button.dataset.correct === "true");
    });
    if (choice.dataset.correct !== "true") {
      choice.classList.add("is-wrong");
    }
  });

  document.addEventListener("click", (event) => {
    const audioButton = event.target.closest("[data-speak-ko]");
    if (!audioButton) return;
    speakKorean(audioButton.dataset.speakKo);
  });
}

function init() {
  renderSceneOptions();
  renderToday();
  renderCards();
  renderPlan();
  renderTests();
  renderDialogs();
  renderTheory();
  renderHangul();
  bindEvents();
}

init();
