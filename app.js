//Date
let now = new Date();
console.log(now);
//day
let day = now.getDate();
//year
let year = now.getFullYear();

//### ### ###     SME     ### ### ###--------------------------------------------------------------------------------------------------------------------------------------------------

//Days
let daysArraySme = ["sotnabeaivi", "mánnodat", "disdat", "gaskavahkku", "duorastat", "bearjadat", "lávvordat"];
let daysSme = daysArraySme[now.getDay()];
// Months
let monthSme = now.getMonth() + 1;
let monthsSmeArray = [
    "ođđajagemánnu",
    "guovvamánnu",
    "njukčamánnu",
    "cuoŋománnu",
    "miessemánnu",
    "geassemánnu",
    "suoidnemánnu",
    "borgemánnu",
    "čakčamánnu",
    "golggotmánnu",
    "skábmamánnu",
    "juovlamánnu",
];
let monthsSme = monthsSmeArray[now.getMonth()];
//HTML notice
let spanSme = document.getElementById("Sme");
spanSme.innerHTML = `Bures! Odne lea ${daysSme}, ${monthsSme} ${day}, ${year}.`;
//### ### ###    ON      ### ### ###--------------------------------------------------------------------------------------------------------------------------------------------------
// Days
let daysArrayOn = ["sunnudagr", "mánadagr", "tísdagr", "óðinsdagr", "þórsdagr", "frjádagr", "laugardagr"];
let daysOn = daysArrayOn[now.getDay()];
// Months
let monthOn = now.getMonth() + 1;
let monthsOnArray = ["miðjum vetr", "vetr", "vár", "miðvár", "vár", "sumar", "miðsumar", "sumar", "haust", "miðhaust", "vetr", "jól"];
let monthsOn = monthsOnArray[now.getMonth()];
//HTML notice
let spanOn = document.getElementById("On");
spanOn.innerHTML = `Hei! Þat er  ${daysOn} hin ${day}, árit ${year}. Árstíðin er ${monthsOn}. `;
//### ### ###    SV       ### ### ###--------------------------------------------------------------------------------------------------------------------------------------------------
// Days
let daysArraySv = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
let daysSv = daysArraySv[now.getDay()];
// Months
let monthSv = now.getMonth() + 1;
let monthsSvArray = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
let monthsSv = monthsSvArray[now.getMonth()];
//HTML notice
let spanSv = document.getElementById("Sv");
spanSv.innerHTML = `Hej! Idag är det ${daysSv}, ${day} ${monthsSv} , ${year}.`;
//--------------------------------------------------------------------------------------------------------------------------------------------------
