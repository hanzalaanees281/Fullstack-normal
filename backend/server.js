import 'dotenv/config'
import express from 'express';

const app = express();

app.use(express.static('dist'))

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is anohter joke'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'This is a third joke'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is a fifth joke'
        }
    ]
    res.send(jokes)
});

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})
