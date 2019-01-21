import {Component, OnInit} from '@angular/core';
import { NodeService } from '../service/nodeservice';
import {CountryService} from '../service/countryservice';
import {SelectItem, MessageService, ConfirmationService, TreeNode} from 'primeng/primeng';
import {EventService} from '../service/eventservice';

@Component({
    templateUrl: './exhibit.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ExhibitComponent implements OnInit {

    country: any;

    filteredCountries: any[];

    carOptions: SelectItem[];

    switchChecked: boolean;

    types: SelectItem[];

    images: any[];

    uploadedFiles: any[] = [];

    display: boolean;

    files2: TreeNode[];

    selectedNodes: TreeNode[];

    constructor(private countryService: CountryService, private confirmationService: ConfirmationService, private messageService: MessageService, private nodeService: NodeService) {
    }

    ngOnInit() {
        this.carOptions = [];
        this.carOptions.push({label: 'Audi', value: 'Audi'});
        this.carOptions.push({label: 'BMW', value: 'BMW'});
        this.carOptions.push({label: 'Fiat', value: 'Fiat'});
        this.carOptions.push({label: 'Ford', value: 'Ford'});
        this.carOptions.push({label: 'Honda', value: 'Honda'});
        this.carOptions.push({label: 'Jaguar', value: 'Jaguar'});
        this.carOptions.push({label: 'Mercedes', value: 'Mercedes'});
        this.carOptions.push({label: 'Renault', value: 'Renault'});
        this.carOptions.push({label: 'VW', value: 'VW'});
        this.carOptions.push({label: 'Volvo', value: 'Volvo'});

        this.nodeService.getFiles().then(files => this.files2 = files);

        this.images = [];
        this.images.push({source: 'assets/layout/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1'});
        this.images.push({source: 'assets/layout/images/nature/nature2.jpg', alt: 'Description for Image 2', title: 'Title 2'});
        this.images.push({source: 'assets/layout/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3'});
        this.images.push({source: 'assets/layout/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4'});
        this.images.push({source: 'assets/layout/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5'});
        this.images.push({source: 'assets/layout/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6'});
        this.images.push({source: 'assets/layout/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7'});
        this.images.push({source: 'assets/layout/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8'});
        this.images.push({source: 'assets/layout/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9'});
        this.images.push({source: 'assets/layout/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10'});
        this.images.push({source: 'assets/layout/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11'});
        this.images.push({source: 'assets/layout/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12'});
    }

    filterCountry(event) {
        const query = event.query;
        this.countryService.getCountries().then(countries => {
            this.filteredCountries = this.searchCountry(query, countries);
        });
    }

    searchCountry(query, countries: any[]): any[] {
        const filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }


    onUpload(event) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
        this.messageService.add({severity: 'info', summary: 'Success', detail: 'Upload Completed'});
    }

    confirm() {
        this.confirmationService.confirm({
            message: 'Biztos, hogy törölni szeretné a tárgyat?'
        });
    }

}
