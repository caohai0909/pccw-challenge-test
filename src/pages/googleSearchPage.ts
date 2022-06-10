import { action, gondola, locator, page } from "@logigear/gondola";
import { Constants } from "../common/constants";
@page
export class GoogleSearchPage {

    @locator
    public searchByImageBtn = "//span[@class='tdPRye']";
    @locator
    public uploadImageTab = "//div[@id='dRSWfb']/div[@class='WHWWB']/a";
    @locator
    public chooseFileBtn = "//input[@id='awyMjb']";


    @action("Seach by image")
    public async searchByImage(ImagePath : string){
        await gondola.waitForElement(this.searchByImageBtn, Constants.MEDIUM_TIME);
        await gondola.click(this.searchByImageBtn);
        await gondola.waitForElement(this.uploadImageTab, Constants.MEDIUM_TIME);
        await gondola.click(this.uploadImageTab);
        await gondola.waitForElement(this.chooseFileBtn, Constants.MEDIUM_TIME);
        await gondola.attachFile(this.chooseFileBtn, ImagePath);

        //await gondola.wait(5000);
    }


}
export default new GoogleSearchPage();
