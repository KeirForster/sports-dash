import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    allowed = true;
    constructor(private settings: SettingsService) {}

    ngOnInit(): void {}
}
