import { Component } from '@angular/core';
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

  heatmapData: [number, number, number][] = [
    [28.625485, 79.821091,.5],
      [28.125293, 79.97926,.9],
      [28.625182, 79.81464,.9],
    // Add more LatLng points with associated values
  ];

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

  initHeatmap() {
    const heat = Heatmap.heatLayer(this.heatmapData).addTo(this.map);
  }

  initMarkers() {
    // const initialMarkers = [
    //   {
    //     position: { lat: 28.625485, lng: 79.821091 },
    //     draggable: true
    //   },
    //   {
    //     position: { lat: 28.625293, lng: 79.817926 },
    //     draggable: false
    //   },
    //   {
    //     position: { lat: 28.625182, lng: 79.81464 },
    //     draggable: true
    //   }
    // ];
    // for (let index = 0; index < initialMarkers.length; index++) {
    //   const data = initialMarkers[index];
    //   const marker = this.generateMarker(data, index);
    //   marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
    //   this.map.panTo(data.position);
    //   this.markers.push(marker);
    // }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
      .on('click', (event) => this.markerClicked(event, index))
      .on('dragend', (event) => this.markerDragEnd(event, index));
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initBoundary();
    this.initMarkers();
    this.initHeatmap();
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

let boundaryCoordinates: [number, number][] = [
      
];

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
        .openOn(this.map);
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
    const gradientControl = new GradientControl({ position: 'bottomleft' });
    gradientControl.addTo(this.map);

  }
}
