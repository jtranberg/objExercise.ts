type Movie = {
    readonly title : string; 
    originalTitle?: string;
    director: string;
    releaseYear: number;
    boxOffice?: {
        budget: number,
        grossUs: number,
        grossWorldwide: number,
    },
    };



    
const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune part 1",
    director: "Denise Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUs:108327830,
        grossWorldwide: 400671789,
    },
};

const cats: Movie = {
    title: 'Cats',
    director: "Tom Hopper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUs: 27166770,
        grossWorldwide: 73833348,
    },
};

function getProfit({ boxOffice: { grossWorldwide, budget} }: Movie) : 
number {
return grossWorldwide - budget;
}

console.log(getProfit(dune))
console.log(getProfit(cats))