import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarService } from '../service/carservice';
import { NodeService } from '../service/nodeservice';
import { EventService } from '../service/eventservice';
import { Car } from '../domain/car';
import { TreeNode, SelectItem, LazyLoadEvent } from 'primeng/primeng';

@Component({
    templateUrl: './cabinet-list.component.html',
    styles: [`
        .ui-dataview .search-icon {
            margin-top: 3em;
        }

        .ui-dataview .filter-container {
            text-align: center;
        }

        @media (max-width: 40em) {
            .ui-dataview .car-details, .ui-dataview .search-icon{
                text-align: center;
                margin-top: 0;
            }

            .ui-dataview .filter-container {
                text-align: left;
            }
        }
        .car-item {
            padding-top: 5px;
        }

        .car-item .ui-md-3 {
            text-align: center;
        }

        .car-item .ui-g-10 {
            font-weight: bold;
        }

        .empty-car-item-index {
            background-color: #f1f1f1;
            width: 60px;
            height: 60px;
            margin: 36px auto 0 auto;
            animation: pulse 1s infinite ease-in-out;
        }

        .empty-car-item-image {
            background-color: #f1f1f1;
            width: 120px;
            height: 120px;
            animation: pulse 1s infinite ease-in-out;
        }

        .empty-car-item-text {
            background-color: #f1f1f1;
            height: 18px;
            animation: pulse 1s infinite ease-in-out;
        }

        .title-container {
            padding: 1em;
            text-align: right;
        }

        .sort-container {
            text-align: left;
        }

        @media (max-width: 40em) {
            .car-item {
                text-align: center;
            }
            .index-col {
                display: none;
            }
            .image-col {
                display: none;
            }
        }
        @keyframes pulse {
            0% {
                background-color: rgba(165, 165, 165, 0.1)
            }
            50% {
                background-color: rgba(165, 165, 165, 0.3)
            }
            100% {
                background-color: rgba(165, 165, 165, 0.1)
            }
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class CabinetListComponent implements OnInit {

    cars1: Car[];

    cars2: Car[];

    cars3: Car[];

    carsVirtual: Car[] = [];

    cols: any[];

    cols2: any[];

    data: TreeNode[];

    sourceCars: Car[];

    targetCars: Car[];

    orderListCars: Car[];

    carouselCars: Car[];

    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    files4: TreeNode[];

    events: any[];

    selectedNode1: TreeNode;

    selectedNode3: TreeNode;

    sortField: string;

    sortOrder: number;

    sortOptions: SelectItem[];

    fullcalendarOptions: any;

    timeout: any;

    constructor(private carService: CarService, private eventService: EventService, private nodeService: NodeService) {}

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars1 = cars);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.cols2 = [
            { field: 'name', header: 'Name' },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.carService.getCarsMedium().then(cars => this.cars2 = cars);
        this.carService.getCarsLarge().then(cars => this.carsVirtual = cars);
        this.carService.getCarsMedium().then(cars => this.sourceCars = cars);
        this.targetCars = [];
        this.carService.getCarsSmall().then(cars => this.orderListCars = cars);
        this.nodeService.getFiles().then(files => this.files1 = files);
        this.nodeService.getFiles().then(files => this.files2 = files);
        this.nodeService.getFiles().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.eventService.getEvents().then(events => { this.events = events; });

        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'Volkswagen', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
        this.fullcalendarOptions = {
            defaultDate: '2016-01-12',
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true
        };

        this.data = [{
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                        {
                            label: 'Chelsea FC'
                        },
                        {
                            label: 'F.C. Barcelona'
                        }
                    ]
                },
                {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                        {
                            label: 'Bayern Munich'
                        },
                        {
                            label: 'Real Madrid'
                        }
                    ]
                }
            ]
        }];

        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];
    }

}
