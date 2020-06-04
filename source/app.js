import express from 'express';
import router from '@/router';

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
