var faker = require('faker');

console.log('=====================');
console.log('WELCOME TO MY SHOP!!!');
console.log('=====================');
for (x = 0; x < 10; x++) {
	console.log(faker.commerce.productName() + ' - $' + faker.commerce.price());
}
