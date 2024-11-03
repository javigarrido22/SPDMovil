import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MyMap {
  @ViewChild('map')
  mapRef!: ElementRef<HTMLElement>;
  newMap!: GoogleMap;

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'SPDMovil',
      element: this.mapRef.nativeElement,
      apiKey: "AIzaSyCAFxO7fZgH9JchY_ffq4ur06e1ljSqEmk",
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 10,
      },
    });
  }
}