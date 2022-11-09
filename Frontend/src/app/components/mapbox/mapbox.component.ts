import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css'],
})
export class MapboxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const map = new mapboxgl.Map({
          accessToken: environment.mapboxKey,
          container: 'mapa-mapbox',
          // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: 16,
        });

        const popup = new mapboxgl.Popup().setHTML(`
        <h6 style="color: black;">Ubicacion Actual</h6>
        `);

        new mapboxgl.Marker({ color: 'black' })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(map);

        const popupR = new mapboxgl.Popup().setHTML(`
        <h6 style="color: black;">Gimnasio Rojo</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

        new mapboxgl.Marker({ color: 'red' })
          .setLngLat([-100.93338048936494, 21.164661448758253])
          .setPopup(popupR)
          .addTo(map);

        const popupB = new mapboxgl.Popup().setHTML(`
        <h6 style="color: black;">Gimnasio Azul</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

        new mapboxgl.Marker({ color: 'blue' })
          .setLngLat([-100.93475606406156, 21.167776824545204])
          .setPopup(popupB)
          .addTo(map);

        const popupG = new mapboxgl.Popup().setHTML(`
        <h6 style="color: black;">Gimnasio Verde</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

        new mapboxgl.Marker({ color: 'green' })
          .setLngLat([-100.93147344107958, 21.16714054603237])
          .setPopup(popupG)
          .addTo(map);

        const popupY = new mapboxgl.Popup().setHTML(`
        <h6 style="color: black;">Gimnasio Amarillo</h6>
        <span style="color: black;">Este es un gimnasio Pokemon</span>
        `);

        new mapboxgl.Marker({ color: 'yellow' })
          .setLngLat([-100.9336587190047, 21.165674056147658])
          .setPopup(popupY)
          .addTo(map);
      });
    }
  }
}
