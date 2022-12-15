import { Timestamp } from "@angular/fire/firestore/firebase";

export default class Author {
  AuthorName:any;
  AuthorTitle:any;
  AuthorExpertise:any;
  AuthorLocation:any;
  AuthorDateofjoining:Date & Timestamp |any;
  AuthorEmail: any;
  AuthorprofileImgUrl: any;

  AuthorTwitterLink:any;
  AuthorFacebookLink:any;
  AuthorWhatsappLink:any;
  AuthorLinkedinLink:any;
  AuthorStackoverflowLink:any;
  AuthorGithubLink:any;
  AuthorYoutubeLink:any;
  uploaded:any;
}
