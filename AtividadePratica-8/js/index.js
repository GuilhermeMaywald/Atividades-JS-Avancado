class Product {
    #id;
    name;

    constructor(id, name) {
        this.#id = id;
        this.name = name;
    }
}

class Order {
    #id;
    created;
    #products = [];

    constructor(id) {
        this.#id = id;
        this.created = new Date();
    }

    addProduct(productCode) {
        if (!productCode instanceof Product) {
            throw new Error('Item inválido');
        }
        this.#products.push(productCode);
    }
    calculateShipping() {
        throw new Error('Método não implementado');
    }
}

class OrderStore extends Order {
    tableNumber;

    constructor(id, tableNumber) {
        super(id);
        this.tableNumber = tableNumber;
    }

    calculateShipping() {
        return 0;
    }
}
class OrderDelivery extends Order {
    client;

    constructor(id, client) {
        super(id);
        if (!client instanceof Client) {
            throw new Error('Cliente informado inválido');
        }
        this.client = client;
    }
    calculateShipping(zipCode) {
        let currentZipcode = zipCode ?? this.client.zipCode;

        let firstNumber = Number.parseInt(currentZipcode.charAt(0));

        if (firstNumber >= 0 && firstNumber <= 4) {
            return 5;
        } else if (firstNumber >= 5 && firstNumber <= 9) {
            return 10;
        } else {
            throw new Error('Cep inválido');
        }
    }
}

class Client {
    #id;
    name;
    address;
    zipCode;
    active = true;

    constructor(id, name, address, zipCode) {
        this.#id = id;
        this.name = name;
        this.address = address;
        this.zipCode = zipCode;
    }
}

let produto1 = new Product(1, 'Coca-cola');
let pedido1 = new OrderStore(5, 110);

pedido1.addProduct(produto1);
console.log(pedido1);

let cliente1 = new Client(2, 'João', 'Rua X', '7550000');
let pedido2 = new OrderDelivery(5, cliente1);

console.log(pedido2);
console.log(pedido2.calculateShipping());