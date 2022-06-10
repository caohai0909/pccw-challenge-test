import { action, gondola, locator, page } from "@logigear/gondola";
import { Utilities } from "../common/utilities";
import { Constants } from "../common/constants";

@page
export class ResultsPage {

    @locator
    private resultByIndex = "(//div//h3)[{0}]";

    @action("Go to result by index")
    public async visitToResultPageByIndex(index: string){
        const realResultByIndexLocator = this.resultByIndex.replace("{0}", index);
        await gondola.waitForElement(realResultByIndexLocator, Constants.LONG_TIME);
        await gondola.click(realResultByIndexLocator);
    }

    @action("Screenshot after visited result page")
    public async screenShotVistedResultPage(){
        await gondola.wait(Constants.STABLE_TIME);
        await gondola.saveScreenshot("ResultScreenShot_" + Utilities.getCurrentDataTimeString() +".png", true);
    }

    @action("Search results are related image")
    public async doesSearchResultsRelatedImage(imageName: string):Promise<boolean>{
        let title = await gondola.getTitle();
        return title.toLowerCase().includes(imageName);
    }
}
export default new ResultsPage();