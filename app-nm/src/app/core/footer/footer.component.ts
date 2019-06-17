import { Component, OnInit } from '@angular/core';
import { SocialMediaLink } from 'src/app/shared/models/social-media.model';
import { socialMedia } from 'src/app/shared/data/footer-social-media-list';

@Component({
  selector: 'nm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  socialMediaList: SocialMediaLink[] = socialMedia;

  constructor() { }

  ngOnInit() {
  }

}
