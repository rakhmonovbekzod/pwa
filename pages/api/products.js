
export default function handler(req, res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    next()
    res.status(200).json([
        { title: "Lorem ipsum dolor sit amet Semiautomatic", brand: "Some products", oldPrice: 840000, price: 790000, img: "https://picsum.photos/id/10/200/200", id: 1 },
        { title: "Sig Sauer P365XL Romeo Zero Semi-Auto Pistol", brand: "SigSauer", oldPrice: 840000, price: 790000, img: "https://picsum.photos/id/20/200/200", id: 2 },
        { title: "Sig Sauer Cross Bolt-Action Centerfire Rifle", brand: "SigSauer", oldPrice: 0, price: 1790000, img: "https://picsum.photos/200/200", id: 3 },
        { title: "Smith & Wesson M&P 15-22 Sport .22 LR Semiautomatic Rifle - .22 LR", brand: "Smith & Wesson", oldPrice: 8000, price: 7000, img: "https://picsum.photos/id/28/200/200", id: 4 },
    ])
}
