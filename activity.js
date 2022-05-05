const products = [
    {
        productId: 1,
        name: "headphones",
        typeOfProduct: 1,
        price: 100,
    },
    {
        productId: 2,
        name: "Shoes Nike",
        typeOfProduct: 2,
        price: 300,
    },
    {
        productId: 3,
        name: "hamburger",
        typeOfProduct: 3,
        price: 10,
    },
    {
        productId: 4,
        name: "Fries",
        typeOfProduct: 3,
        price: 5,
    },
    {
        productId: 5,
        name: "Sandwich",
        typeOfProduct: 3,
        price: 10,
    },
    {
        productId: 6,
        name: "laptop",
        typeOfProduct: 1,
        price: 100,
    },
    {
        productId: 7,
        name: "keyboard",
        typeOfProduct: 1,
        price: 50,
    },
    {
        productId: 8,
        name: "t-shirt",
        typeOfProduct: 2,
        price: 16,
    },
];

const typeOfProducts = [
    { id: 1, name: "Electronic" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Food" },
];

const discountsHolyDays = [
    { typeOfProduct: 1, discountApply: true, value: 10 },
    { typeOfProduct: 2, discountApply: false, value: 0 },
    { typeOfProduct: 3, discountApply: true, value: 30 },
];

//// Activity

// cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
// y su llamda del metodo con un console.log donde muestre la información

/// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?

function accumulatedPriceGroupByTypeOfProduct(products) {
    const accumulatedPriceGroupByTypeOfProduct = products.reduce(
        (prev, productAct) => {
            const { typeOfProduct, price } = productAct;
            if (!prev[typeOfProduct])
                prev[typeOfProduct] = {
                    typeOfProduct,
                    accumulatedPrice: 0,
                    quantityOfType: 0,
                };
            prev[typeOfProduct].accumulatedPrice += price;
            prev[typeOfProduct].quantityOfType += 1;
            return prev;
        },
        {}
    );
    return Object.values(accumulatedPriceGroupByTypeOfProduct);
}

function averagePriceGroupByTypeOfProduct(products) {
    const accumulatedPrices = accumulatedPriceGroupByTypeOfProduct(products);
    return accumulatedPrices.map((type) => {
        const { typeOfProduct, accumulatedPrice, quantityOfType } = type;
        const averagePrice = accumulatedPrice / quantityOfType;
        return { typeOfProduct, averagePrice };
    });
}

console.log(averagePriceGroupByTypeOfProduct(products));

/// 2 - ¿Cuál es el producto más costoso de cada categoria?

function isHigherPricedProduct(productA, ProductB) {
    return productA.price > productA.price ? productA : ProductB;
}

function maxPriceGroupByTypeOfProduct(products) {
    const maxPriceGroupByTypeOfProduct = products.reduce(
        (prev, currentProduct) => {
            const { typeOfProduct } = currentProduct;
            if (!prev[typeOfProduct]) {
                prev[typeOfProduct] = {
                    typeOfProduct,
                    higherPricedProduct: currentProduct,
                };
            } else {
                prev[typeOfProduct].higherPricedProduct = isHigherPricedProduct(
                    prev[typeOfProduct].higherPricedProduct,
                    currentProduct
                );
            }
            return prev;
        },
        {}
    );
    return Object.values(maxPriceGroupByTypeOfProduct);
}

console.log(maxPriceGroupByTypeOfProduct(products));

/// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?

const existsElectronicPrice100 = products.some((product) => {
    const { typeOfProduct, price } = product;
    return typeOfProduct == 1 && price == 100;
});

console.log(existsElectronicPrice100);

/// 4 - Obtener todos los productos que en nombre tengan las letra S.

const productsContainsLetterS = products.filter((product) =>
    product.name.toUpperCase().includes("S")
);

console.log(productsContainsLetterS);

/// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', typeOfProduct: 'Electronic', discount: '10', applyDiscount: true}

const typeOfProductsMap = typeOfProducts.reduce((prev, currtypeOfProduct) => {
    const { id } = currtypeOfProduct;
    if (!prev[id]) prev[id] = currtypeOfProduct;
    return prev;
}, {});

const discountsHolyDaySMap = discountsHolyDays.reduce(
    (prev, currDiscountsHolyDay) => {
        const { typeOfProduct } = currDiscountsHolyDay;
        if (!prev[typeOfProduct]) prev[typeOfProduct] = currDiscountsHolyDay;
        return prev;
    },
    {}
);

const formatDataA = products.map((product) => {
    const { productId, name, typeOfProduct } = product;
    const nametypeOfProduct = typeOfProductsMap[typeOfProduct].name;
    const { discountApply, value } = discountsHolyDaySMap[typeOfProduct];
    return {
        productId,
        nameProduct: name,
        typeOfProduct: nametypeOfProduct,
        discount: `${value}`,
        applyDiscount: discountApply,
    };
});

console.log(formatDataA);

/// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}

const formatDataB = products.map((product) => {
    const { productId, typeOfProduct, price } = product;
    const { discountApply, value } = discountsHolyDaySMap[typeOfProduct];
    const priceWithDiscount = discountApply ? price * (1 - value / 100) : price;
    return { productId, priceWithDiscount };
});

console.log(formatDataB);

// 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];

const newProducts = [
    {
        id: 9,
        name: "Tucson",
        typeOfProcuct: "Car",
        discount: 10,
    },
    {
        id: 10,
        name: "Jeep",
        typeOfProcuct: "Car",
        discount: 10,
    },
    {
        id: 10,
        name: "Screen",
        typeOfProcuct: "Electronic",
    },
    {
        id: 1,
        name: "Mouse",
        typeOfProcuct: "Electronic",
    },
];

function findTypeOfProductByName(name) {
    return typeOfProducts.find((typeOfProduct) => typeOfProduct.name === name);
}

function findProduct(product) {
    const { productId, name } = product;
    return products.find(
        (product) => product.productId === productId || product.name === name
    );
}
function createProduct(product) {
    const { id } = product;
    try {
        let newProduct = {
            productId: product.id,
            name: product.name,
        };
        if (findProduct(newProduct)) throw "Product alredy exist";
        const typeOfProcuct = findTypeOfProductByName(product.typeOfProcuct);
        if (!typeOfProcuct) throw "Type of product not exist";
        newProduct = {
            ...newProduct,
            typeOfProcuct: typeOfProcuct.id,
            price: product.price || 0,
        };
        products.push(newProduct);
        return { id, status: "succes" };
    } catch (error) {
        return { id, status: "error", message: error };
    }
}

const createdProducts = newProducts.map((product) => createProduct(product));
console.log(createdProducts);
