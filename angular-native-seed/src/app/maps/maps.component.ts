import { Component, OnInit } from '@angular/core';

import { Map, View } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

import { toLonLat, fromLonLat } from 'ol/proj';

//****** for the marker
import Feature from 'ol/Feature';
import VectorLayer from 'ol/layer/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
//******

import { QuestionnaireDataService } from '../services/questionnaire-data.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  private map: any;
  private pos: any[];

  private markerFeature: any;

  constructor( private questionnaireDataService: QuestionnaireDataService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.pos = fromLonLat([position.coords.longitude, position.coords.latitude]);
      this.questionnaireDataService.setPositionSelected([position.coords.longitude, position.coords.latitude])
      this.setMap();
    });

  }

  setMap(){
    this.markerFeature = new Feature();
    this.markerFeature.setStyle(new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({
          color: '#ff0000'
        }),
        stroke: new Stroke({
          color: '#000',
          width: 2
        })
      })
    }));

    this.markerFeature.setGeometry( this.pos ? new Point(this.pos) : null);

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [this.markerFeature]
          })
        })
      ],
      view: new View({
        center: this.pos,
        zoom: 17
      })
    });

    this.map.on("singleclick", (evt) => this.onClickMap(evt));

  }

  onClickMap(evt){
    this.markerFeature.setGeometry(new Point(evt.coordinate))
    this.questionnaireDataService.setPositionSelected(toLonLat(evt.coordinate));
  }
  
}
