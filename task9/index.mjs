import * as http from 'http';

const app = http.createServer((req, res) => res.send('Created!'))
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
