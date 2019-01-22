import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from 'primeng/primeng';
import {Car} from '../domain/car';
import {CarService} from '../service/carservice';

@Component({
    templateUrl: './cabinet.component.html',
    providers: [ConfirmationService]
})
export class CabinetComponent implements OnInit {

    sourceCars: Car[];

    targetCars: Car[];

    constructor(private carService: CarService, private confirmationService: ConfirmationService) {
    }

    ngOnInit() {

        this.carService.getCarsMedium().then(cars => this.sourceCars = cars);
        this.targetCars = [];

    }


    confirm() {
        this.confirmationService.confirm({
            message: 'Biztos, hogy törölni szeretné a tárgyat?'
        });
    }

}
