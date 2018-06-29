export class User {

  matriculation: string;
  name: string;
  courses: string[];
  templates: string[];

  constructor() { }

  getName(): string{
    return this.name;
  }

  getCourses(): string[]{
    return this.courses;
  }

  getTtemplates(): string[]{
    return this.templates;
  }

}
