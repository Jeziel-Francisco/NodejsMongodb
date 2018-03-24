interface IProduct {
    description: string;
    codeMercusul: string;
    classificationTax: string;
    priceCost: number;
    priceMinSale: number;
    priceMaxSale: number;
    markupMin: number;
    markupMax: number;
    type: number;
    provider: [{ _id: string, nameReason: string, identification: string, nameFantasy: string }];
}

export { IProduct };