const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

const goTomorrow = (card) => {
    if(card.level <= 9 && card.days === 1){
        card.level = card.level + 1;
        card.days = fibonacci[card.level];
        return card;
    }
    card.days = card.days - 1;
    return card;
}

const goYesterday = (card) => {
    if(card.level >= 2 && card.days === fibonacci[card.level]){
        card.level = card.level - 1;
        card.days = 1;
        return card;
    }
    card.days = card.days + 1;
    return card;
}

// const shouldShowUp = (card) => {
//     return (card.days === 1 && card.level !== 10)
// }

const filename = './user-data.json';
var file_content = fs.readFileSync(filename);
var content = JSON.parse(file_content);

// function compare(a, b){
//     if(a.level > b.level)
//         return 1;
    
//     if(a.level < b.level)
//         return -1;

//     if(a.createdTime < b.createdTime)
//         return 1;
    
//     if(a.createdTime > b.createdTime)
//         return -1;
    
//     return 0;
// }

app.get('/api-today', (req, res) => {
    // let filteredContent = JSON.parse(JSON.stringify(content));
    // filteredContent.cards = filteredContent.cards.filter(card => card.days === fibonacci[card.level])
    // filteredContent.info.numOfCards = filteredContent.cards.length;
    // filteredContent.cards.sort(compare);
    const filteredCards = content.cards.filter(card => card.days === fibonacci[card.level]);
    const filteredContent = {
        ...content,
        cards: filteredCards,
        info: {...content.info}
    };
    filteredContent.info.numOfCards = filteredCards.length;
    res.json(filteredContent);
});

app.get('/api-list', (req, res) => {
    // let filteredContent = JSON.parse(JSON.stringify(content));
    // filteredContent.cards.sort(compare);
    const filteredContent = {
        ...content,
        info: {...content.info}
    };
    filteredContent.info.numOfCards = filteredContent.cards.length;
    res.json(filteredContent);
});

app.post('/api-new-card', (req, res) => {
    let data = req.body;
    content.cards.unshift(data);
    // content.info.numOfCards++;
    fs.writeFile(filename, JSON.stringify(content, null, 4), (err) => {
        if(err){
            res.status(500);
        }else{
            res.send('Successfully added card!');
        }
    });
});

app.post('/api-go-tomorrow', (req, res) => {
    content.cards = content.cards.map(goTomorrow);
    content.info.totalDays++;
    fs.writeFile(filename, JSON.stringify(content, null, 4), (err) => {
        if(err){
            res.status(500);
        }else{
            res.send('Successfully went tomorrow!');
        }
    });
});

app.post('/api-go-yesterday', (req, res) => {
    content.cards = content.cards.map(goYesterday);
    content.info.totalDays--;
    fs.writeFile(filename, JSON.stringify(content, null, 4), (err) => {
        if(err){
            res.status(500);
        }else{
            res.send('Successfully went yesterday!');
        }
    });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));