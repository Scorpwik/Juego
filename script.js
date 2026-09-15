const retosOriginal = [
    { q: "¿Cuándo es el Día de los Difuntos?", a: "2 de noviembre" },
    { q: "¿Cuántas provincias tiene el Ecuador?", a: "24 provincias" },
    { q: "¿Cuál es el volcán más grande de Ecuador?", a: "El volcán Chimborazo" },
    { q: "Nombre a 4 presidentes del Ecuador", a: "Ej: Daniel Noboa, Guillermo Lasso, Rafael Correa, Gabriel García Moreno" },
    { q: "¿Cuándo se celebran las fiestas de Quito?", a: "6 de diciembre" },
    { q: "Nombre 5 lugares turísticos del Ecuador", a: "Ej: Galápagos, Mitad del Mundo, Cotopaxi, Quilotoa, Centro Histórico de Quito" },
    { q: "¿Cuándo es la independencia de Guayaquil?", a: "9 de octubre" },
    { q: "¿Cuál es el país más grande del mundo?", a: "Rusia" },
    { q: "¿Cuál es el planeta más grande del sistema solar?", a: "Júpiter" },
    { q: "¿Cuál es el órgano más grande del cuerpo humano?", a: "La piel" },
    { q: "¿Cuál es el océano más profundo del planeta?", a: "Océano Pacífico (Fosa de las Marianas)" },
    { q: "¿Qué unidad se utiliza para medir la corriente eléctrica?", a: "El Amperio (A)" },
    { q: "¿Quién escribió Don Quijote de la Mancha?", a: "Miguel de Cervantes" },
    { q: "¿Cuál es la capital de Canadá?", a: "Ottawa" },
    { q: "¿Cuál es el elemento químico cuyo símbolo es Au?", a: "Oro" },
    { q: "¿Cuánto tarda aproximadamente la Luna en dar una vuelta alrededor de la Tierra?", a: "27,3 días" },
    { q: "Completa el dicho: Más vale tarde...", a: "que nunca." },
    { q: "Completa el dicho: No hay mal...", a: "que por bien no venga." },
    { q: "Completa el dicho: Ojos que no ven...", a: "corazón que no siente." },
    { q: "Completa el dicho: Dime con quién andas...", a: "y te diré quién eres." },
    { q: "Completa el dicho: Barriga llena...", a: "corazón contento." },
    { q: "Completa el dicho: Al mal tiempo...", a: "buena cara." },
    { q: "Completa el dicho: Cría cuervos...", a: "y te sacarán los ojos." },
    { q: "Completa el dicho: Camarón que se duerme...", a: "se lo lleva la corriente." },
    { q: "Completa el dicho: Más vale pájaro en mano...", a: "que ciento volando." }
];

const adivinanzasOriginal = [
    { q: "¿Qué se encuentra una vez en un minuto, dos veces en un momento pero ninguno en cien años?", a: "La letra m." },
    { q: "Soplo sin boca y vuelo sin alas.", a: "El viento" },
    { q: "Brazos con brazos,\nPanza con panza\nRascando en medio\nSe hace la danza.", a: "La guitarra" },
    { q: "¿Qué es lo que desaparece cuando se lo nombra?", a: "El silencio" },
    { q: "Cuanto más grande es menos se ve.", a: "La oscuridad" },
    { q: "Existo cuando me guardan,\nmuero cuando me sacan.", a: "Un secreto" },
    { q: "¿Cuál es el animal que siempre llega al final?", a: "El delfín" },
    { q: "Tengo montañas sin árboles,\nCiudades sin edificios\nRios sin peces\n¿Qué soy?", a: "El mapa." },
    { q: "Cien amigos tengo,\ntodos en una tabla.\nSi yo no los toco\nellos no me hablan.", a: "El piano" },
    { q: "Tengo agujas y no sé coser.\nTengo números y no sé leer.", a: "El reloj" },
    { q: "La última de todas soy,\npero en zurdo y zapato primera voy.", a: "La letra Z" },
    { q: "Mi casa llevo a cuestas,\nTras de mí dejo un sendero.\nSoy lento de movimientos\nNo le gusto al jardinero.", a: "El caracol" },
    { q: "Doce caballeros\nnacidos del sol.\nTodos mueren antes\nde los treinta y dos.", a: "Los meses" },
    { q: "Fui y no soy\nNo soy y fui\nMañana seré\nPero ahora lo será mañana.", a: "Ayer" },
    { q: "Tiene ojos de gato y no es gato.\nOrejas de gato y no es gato.\nCola de gato y no es gato.\nMaulla y no es gato.", a: "La gata" },
    { q: "Una docena de señoras\nEn un mirador\nTodas tienen medias\nY zapatos no.", a: "Las horas" },
    { q: "Con dos patas encorvadas\nY dos amplios ventanales\nQuitan sol o dan visión\nSegún sean sus cristales", a: "Los lentes" },
    { q: "Cuando apenas he nacido,\nmi vida se acaba al punto,\naunque no soy el primero\nlo sigo por todo el mundo.", a: "El segundo" },
    { q: "Cuanto más lo llenas\nMenos pesa", a: "El globo" },
    { q: "No soy estación del metro\nNi soy estación del tren\nPero soy una estación\nDonde mil flores se ven.", a: "La primavera" }
];

const categoriasOriginal = [
    { q: "Objetos de color amarillo", a: "1. Plátano\n2. Sol\n3. Limón\n4. Girasol\n5. Oro" },
    { q: "Objetos de color morado", a: "1. Uva\n2. Berenjena\n3. Ciruela\n4. Lavanda\n5. Amatista" },
    { q: "Objetos de color naranja", a: "1. Zanahoria\n2. Naranja\n3. Baloncesto\n4. Calabaza\n5. Zorro" },
    { q: "Comida que empieza con A", a: "1. Arroz\n2. Atún\n3. Aguacate\n4. Ajo\n5. Apio" },
    { q: "Comida que empieza con P", a: "1. Pan\n2. Papa\n3. Pasta\n4. Pera\n5. Pollo" },
    { q: "Comida que empieza con L", a: "1. Leche\n2. Limón\n3. Lechuga\n4. Lentejas\n5. Longaniza" },
    { q: "Animales que caminan en dos patas", a: "1. Humano\n2. Canguro\n3. Pingüino\n4. Chimpancé\n5. Gallina" },
    { q: "Princesas de Disney", a: "1. Cenicienta\n2. Blanca Nieves\n3. Ariel\n4. Bella\n5. Moana" },
    { q: "Peliculas de Pixar", a: "1. Toy Story\n2. Cars\n3. Buscando a Nemo\n4. Coco\n5. Up" },
    { q: "Deportes que NO usan pelota", a: "1. Natación\n2. Atletismo\n3. Ciclismo\n4. Gimnasia\n5. Boxeo" },
    { q: "Superhéroes que NO vuelan", a: "1. Batman\n2. Hulk\n3. Spider-Man\n4. Iron Man\n5. Flash" },
    { q: "Cosas que utilizan baterías", a: "1. Celular\n2. Control remoto\n3. Reloj\n4. Linterna\n5. Laptop" },
    { q: "Comida que se come solo con las manos", a: "1. Hamburguesa\n2. Pizza\n3. Taco\n4. Papas fritas\n5. Hot dog" },
    { q: "Marcas de zapatos", a: "1. Nike\n2. Adidas\n3. Puma\n4. Reebok\n5. Vans" },
    { q: "Animales que NO tienen pelo ni plumas", a: "1. Rana\n2. Serpiente\n3. Tiburón\n5. Salamandra" },
    { q: "Villanos de Disney", a: "1. Maléfica\n2. Úrsula\n3. Gastón\n4. Scar\n5. Hades" },
    { q: "Países o ciudades que empiezan con la letra M", a: "1. México\n2. Madrid\n3. Milán\n4. Mónaco\n5. Marsella" },
    { q: "Cosas con botones", a: "1. Camisa\n2. Control remoto\n3. Teléfono\n4. Teclado\n5. Ascensor" },
    { q: "Ingredientes que se ponen sobre la pizza", a: "1. Queso\n2. Pepperoni\n3. Champiñones\n4. Jamón\n5. Piña" },
    { q: "Palabras que terminan con la 'Z'", a: "1. Lápiz\n2. Nariz\n3. Arroz\n4. Paz\n5. Feroz" },
    { q: "Objetos naturally verdes", a: "1. Hojas\n2. Pasto\n3. Brócoli\n4. Esmeralda\n5. Cactus" },
    { q: "Animales marinos que NO son peces", a: "1. Ballena\n2. Delfín\n3. Pulpo\n4. Estrella de mar\n5. Medusa" },
    { q: "Cosas que vuelan pero que NO son aves", a: "1. Avión\n2. Murciélago\n3. Abeja\n4. Helicóptero\n5. Mariposa" },
    { q: "Razas de perros", a: "1. Labrador\n2. Bulldog\n3. Poodle\n4. Husky\n5. Pastor alemán" },
    { q: "Partes del cuerpo que tienen exactamente 4 letras", a: "1. Boca\n2. Ojo\n3. Pelo\n4. Uña\n5. Dedo" },
    { q: "Marcas de comida rápida", a: "1. McDonald's\n2. KFC\n3. Burger King\n4. Subway\n5. Domino's" },
    { q: "Nombres de flores", a: "1. Rosa\n2. Girasol\n3. Margarita\n4. Orquídea\n5. Tulipán" },
    { q: "Medios de transporte que NO usan motor", a: "1. Bicicleta\n2. Patineta\n3. Canoa\n4. Monopatín\n5. Velero" },
    { q: "Cosas en el espacio exterior", a: "1. Estrellas\n2. Planetas\n3. Cometas\n4. Galaxias\n5. Asteroides" },
    { q: "Capitales de países de América", a: "1. Quito\n2. Bogotá\n3. Lima\n4. Buenos Aires\n5. Santiago" },
    { q: "Palabras con la letra 'Ñ'", a: "1. Ñandú\n2. Ñoquis\n3. Niño\n4. Baño\n5. Piña" },
    { q: "Sabores comunes de helado", a: "1. Chocolate\n2. Vainilla\n3. Fresa\n4. Menta\n5. Maracuyá" }
];

let remainingRetos = [...retosOriginal];
let remainingAdivinanzas = [...adivinanzasOriginal];
let remainingCategorias = [...categoriasOriginal];

let timerInterval = null;
let timeLeft = 30;
let currentDeckType = '';
let currentCard = null;
let timeUpAlertTimeout = null;
let timeUpAlertFadeTimeout = null;
let participationStarted = false;

const playedCards = {
    reto: [],
    adivinanza: [],
    categoria: []
};

const activeCard = document.getElementById('active-card');
const cardQuestion = document.getElementById('card-question');
const cardAnswer = document.getElementById('card-answer');
const timerDisplay = document.getElementById('timer-display');
const timerControls = document.getElementById('timer-controls');
const overlay = document.getElementById('card-overlay');
const bankerAnswer = document.getElementById('banker-answer');
const bankerText = document.getElementById('banker-text');
const startParticipationBtn = document.getElementById('start-participation-btn');
const timeUpAlert = document.getElementById('time-up-alert');

function startDraw(type) {
    currentDeckType = type;
    participationStarted = false;

    activeCard.classList.remove('is-flipped');
    cardQuestion.innerText = "";
    cardAnswer.innerText = "";
    bankerAnswer.classList.add('hidden');
    startParticipationBtn.classList.add('hidden');
    timerControls.classList.add('hidden');

    overlay.classList.remove('hidden');
    requestAnimationFrame(() => {
        overlay.classList.add('active');
    });

    activeCard.classList.add('randomizing');

    let remainingArray;
    if (type === 'reto') {
        remainingArray = remainingRetos;
    } else if (type === 'adivinanza') {
        remainingArray = remainingAdivinanzas;
    } else {
        remainingArray = remainingCategorias;
    }

    if (remainingArray.length === 0) {
        if (type === 'reto') remainingRetos = [...retosOriginal];
        if (type === 'adivinanza') remainingAdivinanzas = [...adivinanzasOriginal];
        if (type === 'categoria') remainingCategorias = [...categoriasOriginal];
        remainingArray = type === 'reto' ? remainingRetos : (type === 'adivinanza' ? remainingAdivinanzas : remainingCategorias);
    }

    let randomIndex = Math.floor(Math.random() * remainingArray.length);
    let randomCard = remainingArray.splice(randomIndex, 1)[0];
    currentCard = randomCard;

    setTimeout(() => {
        activeCard.classList.remove('randomizing');
        cardQuestion.innerText = randomCard.q;
        cardAnswer.innerText = randomCard.a;

        if (type === 'adivinanza') {
            bankerText.innerText = randomCard.a;
            bankerAnswer.classList.remove('hidden');
            startParticipationBtn.classList.remove('hidden');
        } else if (type === 'reto') {
            participationStarted = true;
            startTimer();
        } else {
            participationStarted = true;
        }
    }, 1200);
}

function startParticipation(event) {
    event.stopPropagation();
    bankerAnswer.classList.add('hidden');
    startParticipationBtn.classList.add('hidden');
    participationStarted = true;
    startTimer();
}

function startTimer() {
    timeLeft = 30;
    updateTimerDisplay();
    timerControls.classList.remove('hidden');

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            closeCard();
            showTimeUpAlert();
        }
    }, 1000);
}

activeCard.addEventListener('click', () => {
    if (participationStarted && currentDeckType !== 'categoria' && !activeCard.classList.contains('randomizing')) {
        activeCard.classList.add('is-flipped');
        clearInterval(timerInterval);
    } else if (participationStarted && currentDeckType === 'categoria' && !activeCard.classList.contains('randomizing')) {
        activeCard.classList.add('is-flipped');
    }
});

function discardCard() {
    if (!currentCard || !currentDeckType) return;
    playedCards[currentDeckType].push(currentCard);
    currentCard = null;
}

function showTimeUpAlert() {
    clearTimeout(timeUpAlertTimeout);
    clearTimeout(timeUpAlertFadeTimeout);
    timeUpAlert.classList.remove('hidden', 'is-closing');
    timeUpAlert.classList.add('is-visible');

    timeUpAlertTimeout = setTimeout(() => {
        timeUpAlert.classList.remove('is-visible');
        timeUpAlert.classList.add('is-closing');
        timeUpAlertFadeTimeout = setTimeout(() => {
            timeUpAlert.classList.add('hidden');
            timeUpAlert.classList.remove('is-closing');
        }, 300);
    }, 3000);
}

function closeCard() {
    discardCard();
    clearInterval(timerInterval);
    activeCard.classList.remove('is-flipped');

    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 350);
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    let seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerDisplay.innerText = `${minutes}:${seconds}`;
}

function addTime(event) {
    event.stopPropagation();
    if (!timerInterval) return;

    timeLeft = Math.min(60, timeLeft + 30);
    updateTimerDisplay();
}

function removeTime(event) {
    event.stopPropagation();
    if (!timerInterval) return;

    timeLeft = Math.max(0, timeLeft - 30);
    updateTimerDisplay();

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        closeCard();
        showTimeUpAlert();
    }
}