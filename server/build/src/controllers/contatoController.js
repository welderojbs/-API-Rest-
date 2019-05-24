"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../factory/database"));
//camada controller index
class ContatoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const contatos = yield database_1.default.query('SELECT * FROM tbContatos');
            res.json(contatos);
        });
    }
    // Selecionando contatos por id
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const contato = yield database_1.default.query('SELECT * FROM tbContatos WHERE idContato = ?', [id]);
            if (contato.length > 0) {
                return res.json(contato[0]);
            }
            res.status(404).json({ text: "Contato inexistente" });
        });
    }
    // Criando Contatos na tabela
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //metodo assincrono  
            yield database_1.default.query('INSERT INTO tbContatos set ?', [req.body]);
            res.json({ message: 'Criando contato' });
        });
    }
    //Atualizando contatos da tabela por id
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tbContatos set ? WHERE idContato = ?', [req.body, id]);
            res.json({ message: 'Atualizado' });
        });
    }
    //Deletando contatos por id
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tbContatos WHERE idContato = ?', [id]);
            res.json({ message: 'Contato Excluido' });
        });
    }
}
const contatoController = new ContatoController();
exports.default = contatoController;
