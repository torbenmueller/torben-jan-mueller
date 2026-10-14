import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-music-style',
    templateUrl: './music-style.component.html',
    styleUrl: './music-style.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MusicStyleComponent {

  @Input() musicStyleData: any;

}
