interface PriceType{
    title?:string;
    photo?:string;
    features?:string;
    ads?:string;
    support?:string;
    price?:string
}

export const pricing:PriceType[]=[
    {
    title:"Basic",
    photo:"250",
    features:"10",
    ads:"No",
    support:"Office hours",
    price:"25",
    }
]