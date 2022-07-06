import  'dotenv/config';
import app from './src/app.js';


const port = process.env.PORT || process.env.REACT_APP_PORT;

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port} `);
});