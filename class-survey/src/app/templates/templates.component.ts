import { Component, OnInit } from '@angular/core';

import{ UserDataService} from '../services/user-data.service';
import{ TemplateDataService} from '../services/template-data.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  private user: any;
  private templates: any[];

  constructor(
    private userDataService: UserDataService,
  private templateDataService: TemplateDataService) { }

  ngOnInit() {
    this.user = this.userDataService.getData();
    //this.templates = this.userDataService.getData().templates;

    this.getTemplates(this.user.matriculation)

  }

  getTemplates(id:any):any{
    console.log(id);
    this.templateDataService.retrieveData(id).subscribe((response) => this.checkResponse(response))
  }

  checkResponse(response: any) :any{
    if(!(this.templateDataService.getErrorStatus()===404)){
      this.templates = response.templates;
      console.log(response);
    }
    else{
      alert('unable to retrieve templates');
      this.templates = ['404'];
    }
  }

}
