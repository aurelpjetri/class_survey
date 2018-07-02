import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../services/user-data.service';

import {QuestionnaireDataService} from '../services/questionnaire-data.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private user: any;
  private questionnaires: any[] = [];
  private myCoordinate: any[] = [];

  constructor(private userDataService: UserDataService,
    private questionnaireDataService: QuestionnaireDataService,
    private router: Router) { }

  ngOnInit() {
    this.getUser()
    console.log(this.user)
    this.getQuestionnaireDetails();

  }

  getQuestionnaireDetails(){
    for(let id of this.user.questionnaires){
      this.questionnaireDataService.retrieveData(id).subscribe((response) => this.checkResponse(response))
    }
  }

  checkResponse(response: any) :any{
    if(!(this.questionnaireDataService.getErrorStatus()===404)){
        var deadline = response.deadline.split(" - ")
        delete response.deadline
        response['date'] = deadline[0]
        response['time'] = deadline[1]
        this.questionnaires.push(response);
    }
    else{
      alert('unable to read course details');
      this.questionnaires.push('404');
    }
  }

  getUser() {
    this.user = this.userDataService.getData();
    //this.userDataService.getData().subscribe(user => this.user = user);
  }

  compile(questionnaire: any) {
    this.questionnaireDataService.setData(questionnaire)
    if(questionnaire.gps!="false"){
      var qCoord =  questionnaire.gps.split(',');
      navigator.geolocation.getCurrentPosition((position) => this.success(position), this.error);
      var dist = this.distanceInKmBetweenEarthCoordinates(Number(qCoord[0]),Number(qCoord[1]),this.myCoordinate[0],this.myCoordinate[1]);
      if(dist < 0.1){
        this.router.navigateByUrl('/compile')
      }
      else{
        alert('Yuo must be near ' + Number(qCoord[0]) + ',' + Number(qCoord[1]) + ' to complete this survey')
      }
    }
    else{
    this.router.navigateByUrl('/compile')
    }
  }

  success(pos){
    var crd = pos.coords;
    this.myCoordinate.push(crd.latitude)
    this.myCoordinate.push(crd.longitude)
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = this.degreesToRadians(lat2-lat1);
    var dLon = this.degreesToRadians(lon2-lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return earthRadiusKm * c;
  }

}
