import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'NTI Digital ID Cards',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Students ID Cards',
                items: [
                    { label: 'PGDE', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'B.ED', icon: 'pi pi-fw pi-check-square', routerLink: ['/pages/bed'] },
                    { label: 'NCE', icon: 'pi pi-fw pi-bookmark', routerLink: ['/pages/nce'] },
                    { label: 'ADE', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'PTTP', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                 
                ]
            }
        
        ];
    }
}
