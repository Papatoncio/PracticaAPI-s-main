export class Product {

    id?:number;
    name: string;
    category:string;
    description: string;
    price: number;
    stock:number;
    imgUrl: string;

    constructor(id, name, category, description, price, stock, imgUrl) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
    }
}
