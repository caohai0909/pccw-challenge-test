import imageInfo from '../data/image-info.json';


export class ImageInfo {
    imageName!: string;
    description!: string;
    imagePath!: string;
    visitResultIndex!: string;
}

export class ImageInfoData{
    public static IMAGE_DATA : ImageInfo[] = imageInfo.map(item =>{
        return Object.assign(new ImageInfo(),item);
    })
}