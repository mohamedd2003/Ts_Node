"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbconnection_1 = require("./database/dbconnection");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
(0, dbconnection_1.dbConnection)();
app.get('/', (req, res) => {
    res.json({ message: "hello" });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
