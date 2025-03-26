import path from 'path';
export class UploadFilePage {
    constructor(driver){
        this.page = driver;
        this.url = "https://qaplayground.dev/apps/upload/";
        this.uploadInput = this.page.locator("text=No File Selected");
        this.fileInput = this.page.locator("#file-input");
        this.firstImage = this.page.locator("#images >> figure >> nth=0 >> figcaption");
    }
    getFilePath(){
        return path.join(process.cwd(), "tests", "fixtures", "thunder.png");
    }
}