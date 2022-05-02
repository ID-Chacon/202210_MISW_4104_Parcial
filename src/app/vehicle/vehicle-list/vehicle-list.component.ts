import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] = [];
  brands: Map<string, number> = new Map();

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
      (vehicles) => {
        this.vehicles = vehicles;
        for (let vehicle of vehicles){
          let count: number = this.brands.has(vehicle.marca)?  this.brands.get(vehicle.marca)! : 0;
          this.brands.set(vehicle.marca, count + 1);
        }
      }
    );
  }

}
