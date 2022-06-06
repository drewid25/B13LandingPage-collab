// const robots = ["optimus prime", "Megatron","Bumble Bee", "RC", 1, true,null ]
// robots.push("Voltes v")
// robots.unshift("Voltron")
// robots.pop()

// const favoriterobot = robots[0]
// robots.length
// console.log(robots)
// // alert(robots.length)

// alert(robots.shift())

const countries = [
   [{
    name: "Philippines",
    countrycode: 101,
    island: 7700,
    population: 20000,
    goverment: "Democratic",
    isRich: true,
   },
   {name: "Korea",
    countrycode: 104,
    island: 7700,
    population: 20000,
    goverment: "Democratic",
    isRich: true,
    }],
    {name: "USA",    
    countrycode: 102,
    island: 800,
    population: 30000,
    goverment: "Democratic",
    isRich: false,
    },
    {
    name: "China",    
    countrycode: 103,
    island: 1,
    population: 100000,
    goverment: "Communist",
    isRich: false,
    },
    {name: "Japan",    
    countrycode: 104,
    island: 1,
    population: 50000,
    goverment: "Parliament",
    isRich: false,
    },


]

const richCountry = countries[0][1].name
console.log(richCountry)   



// const philippinesPopulation = country.goverment
// console.log(philippinesPopulation)
// alert(philippinesPopulation)