"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contatoController_1 = __importDefault(require("../controllers/contatoController"));
class ContatoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contatoController_1.default.list);
        this.router.get('/:id', contatoController_1.default.getOne);
        this.router.post('/', contatoController_1.default.create);
        this.router.put('/:id', contatoController_1.default.update);
        this.router.delete('/:id', contatoController_1.default.delete);
    }
}
const contatoRoutes = new ContatoRoutes();
exports.default = contatoRoutes.router;
