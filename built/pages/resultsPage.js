"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsPage = void 0;
const gondola_1 = require("@logigear/gondola");
const utilities_1 = require("../common/utilities");
const constants_1 = require("../common/constants");
let ResultsPage = class ResultsPage {
    constructor() {
        this.resultByIndex = "(//div//h3)[{0}]";
    }
    async visitToResultPageByIndex(index) {
        const realResultByIndexLocator = this.resultByIndex.replace("{0}", index);
        await gondola_1.gondola.waitForElement(realResultByIndexLocator, constants_1.Constants.LONG_TIME);
        await gondola_1.gondola.click(realResultByIndexLocator);
    }
    async screenShotVistedResultPage() {
        await gondola_1.gondola.wait(constants_1.Constants.STABLE_TIME);
        await gondola_1.gondola.saveScreenshot("ResultScreenShot_" + utilities_1.Utilities.getCurrentDataTimeString() + ".png", true);
    }
    async doesSearchResultsRelatedImage(imageName) {
        let title = await gondola_1.gondola.getTitle();
        return title.toLowerCase().includes(imageName);
    }
};
__decorate([
    gondola_1.locator
], ResultsPage.prototype, "resultByIndex", void 0);
__decorate([
    gondola_1.action("Go to result by index")
], ResultsPage.prototype, "visitToResultPageByIndex", null);
__decorate([
    gondola_1.action("Screenshot after visited result page")
], ResultsPage.prototype, "screenShotVistedResultPage", null);
__decorate([
    gondola_1.action("Search results are related image")
], ResultsPage.prototype, "doesSearchResultsRelatedImage", null);
ResultsPage = __decorate([
    gondola_1.page
], ResultsPage);
exports.ResultsPage = ResultsPage;
exports.default = new ResultsPage();
//# sourceMappingURL=resultsPage.js.map