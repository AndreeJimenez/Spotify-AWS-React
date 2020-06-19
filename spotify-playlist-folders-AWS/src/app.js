import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import FilesController from './controllers/FilesController';
import FoldersController from './controllers/FoldersController';

const app = express();
app.use(cors());
app.use(bodyParser.json());

FilesController.mountController(app);
FoldersController.mount(app);

export default app;
