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

const phraseById = Object.fromEntries(PHRASES.map((phrase) => [phrase.id, phrase]));
const state = {
  day: Number(localStorage.getItem("ko28-day")) || 1,
  testMode: "production",
  testWeek: 1
};

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

function saveDay() {
  localStorage.setItem("ko28-day", String(state.day));
}

function clampDay(day) {
  return Math.min(28, Math.max(1, day));
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

function renderToday() {
  const day = DAYS[state.day - 1];
  const newPhrases = day.ids.map((id) => phraseById[id]);
  const reviewPhrases = getReviewPhrases(day.day);
  const visiblePhrases = newPhrases.length ? newPhrases : reviewPhrases;
  const title = newPhrases.length ? "Dzisiejsze fiszki" : "Fiszki do powtórki";

  qs("#today-week").textContent = `Tydzień ${day.week}`;
  qs("#today-title").textContent = day.title;
  qs("#day-output").textContent = `Dzień ${day.day}`;
  qs("#day-range").value = day.day;
  qs("#new-stage-copy").textContent = newPhrases.length
    ? `${newPhrases.length} nowe zwroty: ${newPhrases.map((phrase) => phrase.polish).join(" · ")}`
    : "Bez nowych zwrotów. Ten dzień wzmacnia pamięć i tempo reakcji.";
  qs("#review-stage-copy").textContent = reviewPhrases.length
    ? `${reviewPhrases.length} ostatnich zwrotów wraca do powtórki.`
    : "Pierwszy dzień zaczyna się od czystej karty.";
  qs("#speaking-stage-copy").textContent = day.speak;
  qs("#today-cards-title").textContent = title;
  qs("#today-cards-count").textContent = `${visiblePhrases.length} kart`;
  qs("#today-cards").innerHTML = visiblePhrases.length
    ? visiblePhrases.map((phrase) => phraseCard(phrase)).join("")
    : `<div class="empty-state">Dziś głównym materiałem są testy i dialogi.</div>`;

  qsa("[data-stage-check]").forEach((input) => {
    const key = `d${day.day}-${input.dataset.stageCheck}`;
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
  qs("#plan-list").innerHTML = DAYS.map((day) => {
    const newCount = day.ids.length;
    const reviewCount = getReviewPhrases(day.day).length;
    const label = newCount ? `${newCount} nowe · ${reviewCount} powt.` : `${reviewCount} powt. · scenka`;
    return `
      <article class="plan-day ${day.day === state.day ? "is-current" : ""}">
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

function bindEvents() {
  qsa(".tab-button").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.viewTarget));
  });

  qs("#prev-day").addEventListener("click", () => {
    state.day = clampDay(state.day - 1);
    saveDay();
    renderToday();
    renderPlan();
  });

  qs("#next-day").addEventListener("click", () => {
    state.day = clampDay(state.day + 1);
    saveDay();
    renderToday();
    renderPlan();
  });

  qs("#day-range").addEventListener("input", (event) => {
    state.day = clampDay(Number(event.target.value));
    saveDay();
    renderToday();
    renderPlan();
  });

  qsa("[data-stage-check]").forEach((input) => {
    input.addEventListener("change", () => {
      const key = `d${state.day}-${input.dataset.stageCheck}`;
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
}

function init() {
  renderSceneOptions();
  renderToday();
  renderCards();
  renderPlan();
  renderTests();
  renderDialogs();
  bindEvents();
}

init();
