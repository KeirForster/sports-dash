import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    constructor(overlayContainer: OverlayContainer) {
        // theme material global overlay components (menu, select, dialog, etc)
        overlayContainer.getContainerElement().classList.add('default-theme');
    }
}
