import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import FilesController from './controllers/FilesController';
import SongsController from './controllers/SongsController';

const app = express();
app.use(cors());
app.use(bodyParser.json());

FilesController.mountController(app);
SongsController.mount(app);

export default app;
