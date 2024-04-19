import BaseHttpService from "./BaseHttpService";

export class AboutService extends BaseHttpService{
    getAbout(){
        return this.getRaw("about/");
    }
}