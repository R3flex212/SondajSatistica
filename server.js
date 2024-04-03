//Express
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let questionDict = {
    q1: {
        0: "0-2 pe zi",
        1: "3-5 pe zi",
        2: "mai mult de 5 pe zi"
    },
    q2: {
        0: "Între 0-1 litri",
        1: "Între 1-2 litri",
        2: "Mai mult de 2 litri"
    },
    q3: {
        0: "Foarte rar/Aproape niciodata",
        1: "Rar",
        2: "Ocazional",
        3: "Destul de des",
        4: "Foarte des/ Aproape întotdeauna"
    },
    q4: {
        0: "Foarte rar/Aproape niciodată",
        1: "Rar",
        2: "Ocazional",
        3: "Des",
        4: "Foarte des/Aproape întotdeauna"
    },
    q5: {
        2: "0-1 ori",
        1: "2-3 ori",
        0: "de mai mult de 3 ori"
    },
    q6: {
        0: "Foarte rar/Aproape niciodată",
        1: "Rar",
        2: "Ocazional",
        3: "Des",
        4: "Foarte des"
    },
    q7: {
        0: "Nu evit deloc, consum regulat",
        1: "Evit într-o mică măsură",
        2: "Imi controlez consumul în mod moderat",
        3: "Evit în mare măsură",
        4: "Evit complet"
    },
    q8: {
        0: "Foarte rar/ Aproape niciodată",
        1: "Rar",
        2: "Ocazional",
        3: "Destul de des",
        4: "Foarte des"
    },
    q9: {
        0: "Deloc/Foarte puțin informat",
        1: "Puțin informat",
        2: "Moderat de informat",
        3: "Destul de informat",
        4: "Foarte informat, mă informez constant"
    },
    q10: {
        0: "Extrem de nemulțumit",
        1: "Nemulțumit",
        2: "Indiferent",
        3: "Mulțumit",
        4: "Extrem de multumit"
    },
    q11: {
        0: "1",
        1: "2-3",
        2: ">3"
    },
    q12: {
        0: "0-1 zile pe săptămână",
        1: "2-3 zile pe săptămână",
        2: "4+ zile pe săptămână"
    },
    q13: {
        0: "De 0-1 ori pe săptămână",
        1: "De 2-3 ori pe săptămână",
        2: "Mai mult de 4 ori pe săptămână"
    },
    q14: {
        0: "Da, practic",
        1: "Nu, nu practic"
    },
    q15: {
        0: "Mai puțin de 5.000 pași",
        1: "Între 5.000-10.000 pași",
        2: "Peste 10.000 pași"
    },
    q16: {
        0: "Deloc",
        1: "Puțin",
        2: "Moderat",
        3: "Destul de mult",
        4: "Foarte mult"
    },
    q17: {
        0: "Limitată",
        1: "Destul de limitată",
        2: "Destul de variată",
        3: "Variată",
        4: "Foarte variată"
    },
    q18: {
        0: "Foarte nemulțumit",
        1: "Nemulțumit",
        2: "Satisfăcător",
        3: "Mulțumit",
        4: "Foarte mulțumit"
    },
    q19: {
        0: "Foarte redus",
        1: "Redus",
        2: "Mediu",
        3: "Ridicat",
        4: "Foarte ridicat"
    },
    q20: {
        0: "Foarte slab",
        1: "Slab",
        2: "Acceptabil",
        3: "Bine",
        4: "Excelent"
    },
    q21: {
        0: "Foarte slab",
        1: "Slab",
        2: "Acceptabil",
        3: "Bine",
        4: "Excelent"
    },
    q22: {
        0: "Deloc",
        1: "Aproape deloc",
        2: "Suficient",
        3: "Mult",
        4: "Foarte mult"
    },
    q23: {
        0: "Deloc",
        1: "Aproape deloc",
        2: "Suficient",
        3: "Mult",
        4: "Foarte mult"
    },
    q24: {
        0: "Foarte slab",
        1: "Slab",
        2: "Acceptabil",
        3: "Bine",
        4: "Excelent"
    },
    q25: {
        0: "Lipsă de progrese",
        1: "Progrese limitate",
        2: "Progrese moderate",
        3: "Progrese bune",
        4: "Progrese excelente"
    },
    q26: {
        0: "Foarte nemulțumit",
        1: "Nemulțumit",
        2: "Satisfăcător",
        3: "Mulțumit",
        4: "Foarte mulțumit"
    },
    q27: {
        0: "Niciuna",
        1: "O restanță",
        2: "Două sau mai multe restanțe"
    },
    q28: {
        0: "Mai puțin de 5",
        1: "5 - 7",
        2: "7 - 8.5",
        3: "8.5 - 10",
    }
}



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/results", (req, res) => {
    res.sendFile(__dirname + "/results.html");
});
app.get("/rezultate", (req, res) => {
    res.render("finalResults", {})
});



app.post("/", (req, res) => {
    const q1Value = req.body.q1name
    const q2Value = req.body.q2name
    const q3Value = req.body.q3name
    const q4Value = req.body.q4name
    const q5Value = req.body.q5name
    const q6Value = req.body.q6name
    const q7Value = req.body.q7name
    const q8Value = req.body.q8name
    const q9Value = req.body.q9name
    const q10Value = req.body.q10name
    const q11Value = req.body.q11name
    const q12Value = req.body.q12name
    const q13Value = req.body.q13name
    const q14Value = req.body.q14name
    const q15Value = req.body.q15name
    const q16Value = req.body.q16name
    const q17Value = req.body.q17name
    const q18Value = req.body.q18name
    const q19Value = req.body.q19name
    const q20Value = req.body.q20name
    const q21Value = req.body.q21name
    const q22Value = req.body.q22name
    const q23Value = req.body.q23name
    const q24Value = req.body.q24name
    const q25Value = req.body.q25name
    const q26Value = req.body.q26name
    const q27Value = req.body.q27name
    const q28Value = req.body.q28name
    const nume = req.body.username
    res.render("results",
        {
            nume: nume,
            q1: questionDict.q1[q1Value],
            q2: questionDict.q2[q2Value],
            q3: questionDict.q3[q3Value],
            q4: questionDict.q4[q4Value],
            q5: questionDict.q5[q5Value],
            q6: questionDict.q6[q6Value],
            q7: questionDict.q7[q7Value],
            q8: questionDict.q8[q8Value],
            q9: questionDict.q9[q9Value],
            q10: questionDict.q10[q10Value],
            q11: questionDict.q11[q11Value],
            q12: questionDict.q12[q12Value],
            q13: questionDict.q13[q13Value],
            q14: questionDict.q14[q14Value],
            q15: questionDict.q15[q15Value],
            q16: questionDict.q16[q16Value],
            q17: questionDict.q17[q17Value],
            q18: questionDict.q18[q18Value],
            q19: questionDict.q19[q19Value],
            q20: questionDict.q20[q20Value],
            q21: questionDict.q21[q21Value],
            q22: questionDict.q22[q22Value],
            q23: questionDict.q23[q23Value],
            q24: questionDict.q24[q24Value],
            q25: questionDict.q25[q25Value],
            q26: questionDict.q26[q26Value],
            q27: questionDict.q27[q27Value],
            q28: questionDict.q28[q28Value],
        });
})






app.listen(port, () => {
    console.log("Started server on port " + port);
});