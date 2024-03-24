import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-style',
  templateUrl: './music-style.component.html',
  styleUrl: './music-style.component.css'
})
export class MusicStyleComponent {

  @Input() musicStyleData: any;

}
