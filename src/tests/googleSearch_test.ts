import { TestCase, Data , TestModule, gondola } from "@logigear/gondola";
import { Constants } from "../common/constants";
import { ImageInfoData, ImageInfo } from "../models/image-info";
import GoogleSearchPage from "../pages/googleSearchPage";
import ResultsPage from "../pages/resultsPage";
TestModule("Google search by image");


const IMAGE_INFO = ImageInfoData.IMAGE_DATA;
Data(IMAGE_INFO).TestCase("Testcase 01: Check Cart items displayed correctly", async (current: ImageInfo) => {

    gondola.report("Step 1: Go to google search by image page");
    await gondola.navigate(Constants.BASE_URL);
    await gondola.maximize();

    gondola.report("Step 2: Search by image");
    await GoogleSearchPage.searchByImage(current.imagePath);

    gondola.report("Step 3: Visit to the result by index");
    await ResultsPage.visitToResultPageByIndex(current.visitResultIndex);

    gondola.report("Step 4: Take a screenshot");
    await ResultsPage.screenShotVistedResultPage();

    gondola.report("Verify Point: Make sure the search results are related image");
    let doesSearchResultsRelatedImage = await ResultsPage.doesSearchResultsRelatedImage(current.imageName);
    await gondola.checkEqual(doesSearchResultsRelatedImage, true);

})
