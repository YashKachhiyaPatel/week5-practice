"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clothing_1 = require("../Controllers/clothing");
const router = express_1.default.Router();
exports.default = router;
router.get('/', clothing_1.DisplayClothingListPage);
//# sourceMappingURL=clothing.js.map