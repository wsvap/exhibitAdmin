import { Component, OnInit } from '@angular/core';
import { ConfirmationService} from 'primeng/primeng';

@Component({
    templateUrl: './cabinet.component.html',
    providers: [ConfirmationService]
})
export class CabinetComponent implements OnInit {

    constructor(private confirmationService: ConfirmationService) {}

    ngOnInit() {
    }


    confirm() {
        this.confirmationService.confirm({
            message: 'Biztos, hogy törölni szeretné a tárgyat?'
        });
    }

}
