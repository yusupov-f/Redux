const things = [
    {
        id: 1,
        name: "Футболка",
        type: "Одежда",
        description: "Качественная хдопковая футболка.",
        price: 1000,

    },
    {
        id: 2,
        name: "Джинсы",
        type: "Одежда",
        description: "Стильные джинсы для повседневной носки.",
        price: 2000,
    },

    {
        id: 3,
        name: "Куртка",
        type: "Одежда",
        description: "Тёплая куртка для прохладной погоды.",
        price: 4500,
    },
    {
        id: 4,
        name: "Рубашка",
        type: "Одежда",
        description: "Классическая рубашка из натуральной ткани.",
        price: 1800,
    },
    {
        id: 5,
        name: "Кроссовки",
        type: "Обувь",
        description: "Удобные кроссовки для спорта и прогулок.",
        price: 3500,
    },
    {
        id: 6,
        name: "Ботинки",
        type: "Обувь",
        description: "Прочные ботинки для осенне-зимнего сезона.",
        price: 5200,
    },
    {
        id: 7,
        name: "Кепка",
        type: "Аксессуары",
        description: "Лёгкая кепка для защиты от солнца.",
        price: 900,
    },
    {
        id: 8,
        name: "Ремень",
        type: "Аксессуары",
        description: "Кожаный ремень классического дизайна.",
        price: 1200,
    },
    {
        id: 9,
        name: "Свитер",
        type: "Одежда",
        description: "Мягкий свитер для холодных дней.",
        price: 2500,
    },
    {
        id: 10,
        name: "Шорты",
        type: "Одежда",
        description: "Удобные шорты для лета и отдыха.",
        price: 1500,
    }
    
];


// иммитация )
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// получение одежды(
export const fetchThingsApi = async () => {
    await delay(500);
    return things;
}

// получение одежды по id
export const fetchThingByIdApi = async (id) => {
    await delay(300);
    return things.find(thing => thing.id === Number(id));
}