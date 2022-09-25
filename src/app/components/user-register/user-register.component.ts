import { IUser } from './../../Models/iuser';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  userRegFrm: FormGroup
  existUserEmails: string[] = [];
  constructor(private fb: FormBuilder) {
    this.userRegFrm = fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: ['', [Validators.required, this.existEmailValidator(this.existUserEmails)]],
      phoneNo: fb.array([this.fb.control('')]),
      address: fb.group({
        city: ['',],
        postalCode: ['',],
        street: ['',],
      }),
      password: ['', []],
      confirmPassword: ['', []],
      referral: [''],
      referralOther: [''],
    })
    // this.userRegFrm = new FormGroup({
    //   fullName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]),
    //   email: new FormControl(''),
    //   phoneNo: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     postalCode: new FormControl(''),
    //     street: new FormControl(''),
    //   }),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    // });
  }

  existEmailValidator(existEmails: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let emailVal: string = control.value;
      if(emailVal.length == 0 && control.untouched) {
        return null;
      }
      let validationError = {'existEmail': {'value': emailVal}};
      let foundEmail = existEmails.includes(emailVal);
      return foundEmail ? validationError: null;
      // return (emailVal.includes('@'))? null : validationError;
    }
  }

  ngOnInit(): void {
    // In Case Of Edit
    // this.userRegFrm.patchValue({
    //   fullName: 'Omar',
    //   email: 'Any@any.com',
    //   phoneNo: '01030711654',
    //   address: {
    //     city: 'Sohag',
    //     postalCode: '82611',
    //     street: 'Tema - sahel'
    //   },
    // });
    this.existUserEmails = ["aa@aa.com", "bb@bb.com", "dd@dd.com"];
  }

  get fullName() {
    return this.userRegFrm.get('fullName');
  }

  get email() {
    return this.userRegFrm.get('email');
  }

  get phoneNumbers() {
    return this.userRegFrm.get('phoneNo') as FormArray;
  }

  get referral() {
    return this.userRegFrm.get('referral');
  }


  submit() {
    // let userModel: IUser = this.userRegFrm.value as IUser;
    let userModel: IUser = <IUser>this.userRegFrm.value;
    console.log(userModel);
  }

  addPhoneNumber(event: any) {
    this.phoneNumbers.push(this.fb.control(''));
    // event.target?.classList.add('d-none');
  }

  delPhoneNumber(event: any) {
    this.phoneNumbers.controls.pop();
    // event.target?.classList.add('d-none');
  }


  updateReferralValidtor() {
    if(this.referral?.value == "other") {
      this.userRegFrm.get('referralOther')?.addValidators([Validators.required]);
    } else {
      this.userRegFrm.get('referralOther')?.clearValidators();
    }
    this.userRegFrm.get('referralOther')?.updateValueAndValidity();
  }


}
