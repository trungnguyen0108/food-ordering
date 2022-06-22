
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_02.1.jpg";
import product_02_image_02 from "../images/product_02.2.jpg";
import product_02_image_03 from "../images/product_02.3.jpg";

import product_03_image_01 from "../images/product_03.1.jpg";
import product_03_image_02 from "../images/product_03.2.jpg";
import product_03_image_03 from "../images/product_03.3.jpg";

import product_04_image_01 from "../images/product_04.1.jpg";
import product_04_image_02 from "../images/product_04.2.jpg";
import product_04_image_03 from "../images/product_04.3.jpg";

const products = [
    {
        id: "01",
        title: "Cơm gà xé",
        price: 30000,
        image01: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "chicken-rice",
    },

    {
        id: "12",
        title: "Cơm gà luộc",
        price: 40000,
        image01: product_01_image_03,
        image02: product_01_image_02,
        image03: product_01_image_01,
        category: "chicken-rice",
    },

    {
        id: "06",
        title: "Cơm gà chiên",
        price: 40000,
        image01: product_01_image_02,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: "chicken-rice"
    },

    {
        id: "02",
        title: "Canh gà lá giang",
        price: 50000,
        image01: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: "soup"
    },

    {
        id: "11",
        title: "Miến gà",
        price: 40000,
        image01: product_02_image_03,
        image02: product_02_image_01,
        image03: product_02_image_02,
        category: "soup"
    },
    {
        id: "03",
        title: "Gỏi gà",
        price: 80000,
        image01: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: "side-dish"
    },

    {
        id: "07",
        title: "Cháo gà",
        price: 40000,
        image01: product_02_image_02,
        image02: product_02_image_01,
        image03: product_02_image_03,
        category: "soup"
    },

    {
        id: "08",
        title: "Lòng gà xào mướp",
        price: 30000,
        image01: product_03_image_02,
        image02: product_03_image_01,
        image03: product_03_image_03,
        category: "side-dish"
    },

    {
        id: "12",
        title: "Lòng gà",
        price: 30000,
        image01: product_03_image_03,
        image02: product_03_image_01,
        image03: product_03_image_02,
        category: "side-dish"
    },



    {
        id: "10",
        title: "Nước suối",
        price: 5000,
        image01: product_04_image_03,
        image02: product_04_image_01,
        image03: product_04_image_02,
        category: "drinks"
    },

    {
        id: "04",
        title: "Pepsi",
        price: 12000,
        image01: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: "drinks"
    },

    {
        id: "09",
        title: "Trà đá",
        price: 0,
        image01: product_04_image_02,
        image02: product_04_image_01,
        image03: product_04_image_03,
        category: "drinks"
    },
];

export default products;
