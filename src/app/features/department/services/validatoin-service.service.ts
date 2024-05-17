import { Injectable } from '@angular/core';
import { Department } from '../models/Department';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
    dept:Department|null=null;
    validateArray:string[]=[];
    ValidateName(name:string):string{
    if(name.length<3)
    {
        return "Please enter a valid name with at least 3 characters";
    }
    return "";
    }
    ValidateDescription(description:string):string{
    if(description.length<10)
    {
        return "Please enter a valid description with at least 10 characters";
    }
    return "";
    }
    startValidation(dept:Department):string[]{
        this.validateArray=[];
        this.validateArray.push(this.ValidateName(dept.name));
        this.validateArray.push(this.ValidateDescription(dept.description));    
        return this.validateArray;
    }

}