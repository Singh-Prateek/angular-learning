import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-generate-photo-desc',
  imports: [],
  templateUrl: './generate-photo-desc.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './generate-photo-desc.component.scss'
})
export class GeneratePhotoDescComponent {

  public readonly soicalMediaPlatforms = [
    { id:1, name: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=' },
    { id:2, name: 'Twitter', url: 'https://twitter.com/intent/tweet?url=' },
    { id:3, name: 'LinkedIn', url: 'https://www.linkedin.com/shareArticle?mini=true&url=' }
  ];

}
