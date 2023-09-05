import IComment from "./IComment";
import IPhoto from "./IPhoto";

export default interface IPhotoData {
    comments: IComment[];
    photo: IPhoto;
}