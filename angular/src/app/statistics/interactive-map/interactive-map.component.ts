import { AuthService } from '@abp/ng.core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Leaflet from 'leaflet';
import * as Heatmap from 'leaflet.heat';

Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png'
});

@Component({
  selector: 'app-interactive-map',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent {
  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  boundaryPolygon!: Leaflet.Polygon;

  cityPolygons = [];
  gradientControl;

  dates: { month: number, monthName: string, year: number }[] = [];
  selectedDate: { month: number, monthName: string, year: number };

  showContaminations = true;

  heatmapData: [number, number, number][] = [
    [28.625485, 79.821091,.5],
      [28.125293, 79.97926,.9],
      [28.625182, 79.81464,.9],
    // Add more LatLng points with associated values
  ];

  constructor(private authService: AuthService, private router: Router) {
    // Generate options for month and year combination
    const currentYear = new Date().getFullYear();
    const yearsRange = 10; // You can adjust this range as per your requirement
    const monthsNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    for (let i = 0; i < yearsRange; i++) {
      const year = currentYear + i-10;
      for (let month = 1; month <= 12; month++) {
        const monthName = monthsNames[month - 1];
        this.dates.push({ month, monthName, year });
      }
    }

    this.dates.reverse()

    // Set default value to current month and year
    const currentDate = new Date();
    const defaultMonthYear = this.getMonthYearObject(currentDate.getMonth() + 1, currentDate.getFullYear());
    this.selectedDate = defaultMonthYear;
  }

  getMonthYearObject(month: number, year: number): { month: number, monthName: string, year: number } {
    // Helper function to create month-year object
    const monthsNames = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const monthName = monthsNames[month - 1];
    return { month, monthName, year };
  }

  onDateChange() {
    // Handle changes when a month-year combination is selected
    console.log('Selected month and year:', this.selectedDate);
  }

  selectContaminations(){
    if(this.showContaminations){
      return;
    }
    this.showContaminations = true;
    this.initBoundary();

    this.markers.forEach(
      (m)=>{
        this.map.removeLayer(m);
      }
    );
  }

  selectHospitals(){
    if(!this.showContaminations){
      return;
    }
    this.showContaminations = false;

    this.cityPolygons.forEach(
      (element)=>{
        this.map.removeLayer(element);
      }
    );
    this.map.removeControl(this.gradientControl);

    this.initMarkers();
  }

  generateRandomNumber() {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
    
    // Scale the random number to the range of 0 to 100
    const scaledNumber = randomNumber * 100;
    
    // Round the scaled number to ensure it's an integer between 0 and 100
    const randomNumberInRange = Math.floor(scaledNumber);
    
    return randomNumberInRange;
  }

  generateColor(value) {
    value = Math.max(0, Math.min(100, value));

    // Calculate the red component based on the linear scale
    const r = Math.floor(255 * (100-value / 100));
    
    // Calculate the green component as the complement of the red component
    const g = Math.floor(255 * ((100-value) / 100));
    const b = Math.floor(255 * ((100-value) / 100));

  
    // Construct the CSS color string in RGB format
    return `rgb(${r}, ${g}, ${b})`;
  }

  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 8,
    center: { lng: -37.7037601546, lat: -7.3731762414 }
  };

  navigateToStatistics(){
    this.router.navigate(['statistics/hospital'])
  }
  navigateToRegion(){
    this.router.navigate(['statistics/region'])
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: -7.0098057424, lng: -38.2050358822 },
        draggable: true
      },
      {
        position: { lat: -7.0098057424, lng: -38.2050358822 },
        draggable: true
      },
      {
        position: { lat: -7.0098057424, lng: -38.2050358822 },
        draggable: true
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      // Create an empty popup
    const popup = Leaflet.popup();

    // Add the popup to the marker
    marker.bindPopup(popup);

    // Add the marker to the map
    marker.addTo(this.map);

    marker.on('popupopen', () => {
      this.setPopupContent(marker.getPopup());
    });

    // Set the content of the popup asynchronously
    // this.setPopupContent(popup, index);

    // Store the marker
    this.markers.push(marker);
    }
  }

  setPopupContent(popup: Leaflet.Popup) {
    // Set the content of the popup
    popup.setContent(`
      <div class="card">
        <div class="info">
          <h5 style="color:black">Hospital regional de Brasília</h5>
          <p>Posição no Ranking: 8</p>
          <p>Pontuação: 91</p>
          <p>Leitos ocupados: 10</p>
          <p>Leitos vagos: 10</p>
        </div>
        <button type="button" class="btn btn-primary">Ver detalhes</button>
      </div>
    `);
  
    // Add event listener to the button inside the popup
    popup.getElement()?.querySelector('.btn')?.addEventListener('click', () => {
      this.navigateToStatistics();
    });
  }


  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initBoundary();
    // this.initMarkers();
  }

  mapClicked($event: any) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerClicked($event: any, index: number) {
    console.log($event.latlng.lat, $event.latlng.lng);
  }

  markerDragEnd($event: any, index: number) {
    console.log($event.target.getLatLng());
  }

  initBoundary() {
    const data = require('./geojs-25-mun.json');

// Check if data.features exists and is an array



if (Array.isArray(data.features)) {
  data.features.forEach(city => {
    const boundaryCoordinates = []; // Create a new array for each city

    const geometry = city.geometry;
    const coordinates = geometry.coordinates[0];
    coordinates.forEach(coord => {
      boundaryCoordinates.push([coord[1], coord[0]]);
    });

    const cityPolygon = Leaflet.polygon(boundaryCoordinates, {
      color: 'black', // Custom boundary color
      fillColor: this.generateColor(this.generateRandomNumber()),
      fillOpacity: 0.5,
      weight: 1
    }).addTo(this.map);

    this.cityPolygons.push(cityPolygon);

    cityPolygon.on('click', (event) => {
      const latlng = event.latlng;

      
      Leaflet.popup()
        .setLatLng(latlng)
        .setContent(
          '<h4>'+ city.properties.name+'</h4>'+
          '<h5>Posição no ranking: 10' +'<h5>'+
          '<h5>Pontuação: 1000' +'</h5>' +
          '<h5>Contaminados: 1000' +'</h5>' +
          '<h5>Taxa de transmissão: 1' +'</h5>' +
          '<h5>Mortos: 1000' + '</h5>'+

          '<button type="button" class="btn btn-primary">Ver detalhes</button>'
          
          )
        .openOn(this.map).getElement()?.querySelector('.btn')?.addEventListener('click', () => {
          this.navigateToRegion();
        });;
    });
  });
} else {
  console.error('Invalid data format: data.features is not an array');
}

    
 // Define the gradient control
 const GradientControl = Leaflet.Control.extend({
  onAdd: function(map) {
    // Create a container element for the gradient bar
    const container = Leaflet.DomUtil.create('div', 'gradient-control');
    container.style.padding = '10px'
    container.style.background = 'white'
    container.style.width = '600px';
    var title  =document.createElement('h5')
    title.append('Pontuação');
    title.style.color = 'black';
    title.style.textAlign = 'center';
    container.appendChild(title)
    
    // Create a color bar element
    const colorBar = document.createElement('div');
    colorBar.style.width = '100%';
    colorBar.style.height = '20px'; // Adjust the height as needed
    colorBar.style.background = 'linear-gradient(to right, white, red)'; // Gradient from white to red
    colorBar.style.border = '1px solid black'; // Add a border for visibility
    container.appendChild(colorBar);

    var subtitle = document.createElement('div')
    subtitle.style.display = 'flex'
    subtitle.style.width = '580px'
    subtitle.style.justifyContent = 'space-between'

    var f1 = document.createElement('h6')

    f1.append('25')
    var f2 = document.createElement('h6')
    f2.append('50')
    var f3 = document.createElement('h6')
    f3.append('75')
    var f4 = document.createElement('h6')
    f4.append('100')
    
    subtitle.append(f1);
    subtitle.append(f2);
    subtitle.append(f3);
    subtitle.append(f4);

    subtitle.style.color = 'black';
    subtitle.style.textAlign = 'center';
    container.appendChild(subtitle)

    return container;
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});
// Add the gradient control to the map
    this.gradientControl = new GradientControl({ position: 'bottomleft' });
    this.gradientControl.addTo(this.map);
  }
}
