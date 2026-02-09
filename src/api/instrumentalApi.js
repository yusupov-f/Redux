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
    }
];


// иммитация )
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// получение одежды(
export const fetchthingsApi = async () => {
    await delay(500);
    return things;
}

// получение одежды по id
export const fetchThingByIdApi = async (id) => {
    await delay(300);
    return things.find(thing => thing.id === Number(id));
}