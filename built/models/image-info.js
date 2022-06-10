"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageInfoData = exports.ImageInfo = void 0;
const image_info_json_1 = __importDefault(require("../data/image-info.json"));
class ImageInfo {
}
exports.ImageInfo = ImageInfo;
class ImageInfoData {
}
exports.ImageInfoData = ImageInfoData;
ImageInfoData.IMAGE_DATA = image_info_json_1.default.map(item => {
    return Object.assign(new ImageInfo(), item);
});
//# sourceMappingURL=image-info.js.map