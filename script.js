let car = {
    color: 'orange',
    engine: '2L',
    brand: 'toyota',
    // --------------------------- 1

    drive: function () {
        console.log('driving');
    },
    park: function () {
        console.log('parking');
    },
    start: function () {
        console.log('srarting');
    },
    stop: function () {
        console.log('stopping');
    },
    // --------------------------- 2

    driver: {
        name: 'Ivan',
        lastName: 'Vlad',
        old: '20',
        category: 'D',
    }
    // --------------------------- 3
}
car.driver.name = 'Linar';
// --------------------------- 5

for (let key in car.driver) {
    console.log(car.driver[key]);
}
// --------------------------- 6, 10

delete car.driver.lastName
// --------------------------- 7

if ('model' in car) {
    console.log(car.model);
} else {
    console.log('Такого свойства не существует');
}
// --------------------------- 9

for (let key in car) {
    if (typeof car[key] == 'string') {
        console.log(car[key]);
    }
}
// --------------------------- 11

car.driver2 = {
    name: 'Artem',
    category: 'A',
}
// --------------------------- 12

let driver2 = car.driver2;
// --------------------------- 14

console.log(driver2);
// --------------------------- 15

console.log(car.driver);
// --------------------------- 8

console.log(car);
// --------------------------- 4, 13