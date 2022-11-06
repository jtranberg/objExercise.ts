var dune = {
    title: "Dune",
    originalTitle: "Dune part 1",
    director: "Denise Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUs: 108327830,
        grossWorldwide: 400671789
    }
};
var cats = {
    title: 'Cats',
    director: "Tom Hopper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUs: 27166770,
        grossWorldwide: 73833348
    }
};
function getProfit(_a) {
    var _b = _a.boxOffice, grossWorldwide = _b.grossWorldwide, budget = _b.budget;
    return grossWorldwide - budget;
}
console.log(getProfit(dune));
console.log(getProfit(cats));
