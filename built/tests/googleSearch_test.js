"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondola_1 = require("@logigear/gondola");
const constants_1 = require("../common/constants");
const image_info_1 = require("../models/image-info");
const googleSearchPage_1 = __importDefault(require("../pages/googleSearchPage"));
const resultsPage_1 = __importDefault(require("../pages/resultsPage"));
gondola_1.TestModule("Google search by image");
const IMAGE_INFO = image_info_1.ImageInfoData.IMAGE_DATA;
gondola_1.Data(IMAGE_INFO).TestCase("Testcase 01: Check Cart items displayed correctly", async (current) => {
    gondola_1.gondola.report("Step 1: Go to google search by image page");
    await gondola_1.gondola.navigate(constants_1.Constants.BASE_URL);
    await gondola_1.gondola.maximize();
    gondola_1.gondola.report("Step 2: Search by image");
    await googleSearchPage_1.default.searchByImage(current.imagePath);
    gondola_1.gondola.report("Step 3: Visit to the result by index");
    await resultsPage_1.default.visitToResultPageByIndex(current.visitResultIndex);
    gondola_1.gondola.report("Step 4: Take a screenshot");
    await resultsPage_1.default.screenShotVistedResultPage();
    //await gondola.wait(120)
    gondola_1.gondola.report("Verify Point: Make sure the search results are related image");
    let doesSearchResultsRelatedImage = await resultsPage_1.default.doesSearchResultsRelatedImage(current.imageName);
    await gondola_1.gondola.checkEqual(doesSearchResultsRelatedImage, true);
});
//# sourceMappingURL=googleSearch_test.js.map