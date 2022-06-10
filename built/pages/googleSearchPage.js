"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSearchPage = void 0;
const gondola_1 = require("@logigear/gondola");
const constants_1 = require("../common/constants");
let GoogleSearchPage = class GoogleSearchPage {
    constructor() {
        this.searchByImageBtn = "//span[@class='tdPRye']";
        this.uploadImageTab = "//div[@id='dRSWfb']/div[@class='WHWWB']/a";
        this.chooseFileBtn = "//input[@id='awyMjb']";
    }
    async searchByImage(ImagePath) {
        await gondola_1.gondola.waitForElement(this.searchByImageBtn, constants_1.Constants.MEDIUM_TIME);
        await gondola_1.gondola.click(this.searchByImageBtn);
        await gondola_1.gondola.waitForElement(this.uploadImageTab, constants_1.Constants.MEDIUM_TIME);
        await gondola_1.gondola.click(this.uploadImageTab);
        await gondola_1.gondola.waitForElement(this.chooseFileBtn, constants_1.Constants.MEDIUM_TIME);
        await gondola_1.gondola.attachFile(this.chooseFileBtn, ImagePath);
        //await gondola.wait(5000);
    }
};
__decorate([
    gondola_1.locator
], GoogleSearchPage.prototype, "searchByImageBtn", void 0);
__decorate([
    gondola_1.locator
], GoogleSearchPage.prototype, "uploadImageTab", void 0);
__decorate([
    gondola_1.locator
], GoogleSearchPage.prototype, "chooseFileBtn", void 0);
__decorate([
    gondola_1.action("Seach by image")
], GoogleSearchPage.prototype, "searchByImage", null);
GoogleSearchPage = __decorate([
    gondola_1.page
], GoogleSearchPage);
exports.GoogleSearchPage = GoogleSearchPage;
exports.default = new GoogleSearchPage();
//# sourceMappingURL=googleSearchPage.js.map