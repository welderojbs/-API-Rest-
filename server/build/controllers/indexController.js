"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//camada controller index
class IndexController {
    index(req, res) {
        res.send('machine mem');
    }
}
exports.indexController = new IndexController();
