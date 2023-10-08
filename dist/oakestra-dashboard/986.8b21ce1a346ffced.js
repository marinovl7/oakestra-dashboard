"use strict";(self.webpackChunkoakestra_dashboard=self.webpackChunkoakestra_dashboard||[]).push([[986],{986:(F,u,e)=>{e.r(u),e.d(u,{LoginModule:()=>z});var l=e(6582),s=e(4006),m=e(3546),p=e(4859),h=e(7392),f=e(6895),v=e(266),c=e(9549),w=e(4144),b=e(7274),T=e(3848),O=e(455),U=e(4385),P=e(6709),M=e(2340),g=e(4934),t=e(4650),x=e(4389),A=e(4865),C=e(4017),Z=e(7775);function N(a,r){1&a&&(t.TgZ(0,"mat-form-field")(1,"mat-label"),t._uU(2,"Organization"),t.qZA(),t._UZ(3,"input",13),t.TgZ(4,"mat-icon",8),t._uU(5,"people"),t.qZA()())}function L(a,r){1&a&&(t.TgZ(0,"div",14),t._uU(1," Please enter the same password again to confirm. "),t.qZA())}const J=[{path:"",component:(()=>{class a{constructor(o,n,i,d,I,y){this.router=o,this.userService=n,this.authService=i,this.notifyService=d,this.api=I,this.fb=y,this.sm_ip=M.N.apiUrl,this.useOrganization=!1,this.form=y.group({organization_name:["",[s.kI.required]],username:["",[s.kI.required]],password:["",[s.kI.required]]}),this.form.get("organization_name").disable()}tabChanged(o){this.useOrganization=o.checked,this.useOrganization?this.form.get("organization_name").enable():this.form.get("organization_name").disable()}submitLogin(){const o=Object.assign({},this.form.value);this.userService.login(o).subscribe({next:()=>{this.router.navigate(["/control"])},error:n=>this.notifyService.notify(g.k.error,n)})}forgotPassword(){const o=this.form.get("username");o?.valid?this.api.resetPassword(o.value).subscribe(()=>{this.notifyService.notify(g.k.success,"An email with a reset password link was sent")}):this.notifyService.notify(g.k.error,"Please provide a valid username")}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(l.F0),t.Y36(x.K),t.Y36(A.e),t.Y36(C.g),t.Y36(Z.s),t.Y36(s.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-login"]],decls:29,vars:4,consts:[["xmlns","http://www.w3.org/1999/html","xmlns","http://www.w3.org/1999/html",1,"login-form"],["alt","Oakestra Logo","mat-card-image","","src","../../../../assets/img/color-full.png"],["accept-charset","UTF-8","role","form",3,"formGroup"],[1,"info"],[3,"change"],[3,"matTooltip"],[4,"ngIf"],["matInput","","formControlName","username","placeholder","Username"],["matPrefix",""],["matInput","","type","password","formControlName","password","placeholder","Password",3,"keyup.enter"],[1,"pull-right","text-primary","link",3,"click"],[1,"centerButton"],["color","primary","mat-flat-button","",3,"disabled","click"],["matInput","","formControlName","organization_name","placeholder","Organization"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card",0),t._UZ(1,"img",1),t.TgZ(2,"mat-card-content")(3,"form",2)(4,"div",3)(5,"p")(6,"mat-checkbox",4),t.NdJ("change",function(d){return n.tabChanged(d)}),t.qZA(),t._uU(7,"Organization login"),t.qZA(),t.TgZ(8,"mat-icon",5),t._uU(9,"info"),t.qZA()(),t.YNc(10,N,6,0,"mat-form-field",6),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Username"),t.qZA(),t._UZ(14,"input",7),t.TgZ(15,"mat-icon",8),t._uU(16,"person"),t.qZA()(),t.TgZ(17,"mat-form-field")(18,"mat-label"),t._uU(19,"Password"),t.qZA(),t.TgZ(20,"input",9),t.NdJ("keyup.enter",function(){return n.submitLogin()}),t.qZA(),t.TgZ(21,"mat-icon",8),t._uU(22,"password"),t.qZA()(),t.TgZ(23,"span",10),t.NdJ("click",function(){return n.forgotPassword()}),t._uU(24,"Forgot password?"),t.qZA()(),t._UZ(25,"hr"),t.TgZ(26,"div",11)(27,"button",12),t.NdJ("click",function(){return n.submitLogin()}),t._uU(28,"Sign in"),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",n.form),t.xp6(5),t.s9C("matTooltip",n.sm_ip),t.xp6(2),t.Q6J("ngIf",n.useOrganization),t.xp6(17),t.Q6J("disabled",n.form.invalid))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,m.a8,m.dn,m.G2,p.lW,h.Hw,s.sg,s.u,f.O5,v.gM,c.KE,c.hX,c.qo,w.Nt,P.oG],styles:[".login-form[_ngcontent-%COMP%]{width:80%;height:-moz-fit-content;height:fit-content;position:absolute;inset:0;margin:auto}.connectingInfo[_ngcontent-%COMP%]{float:right;margin:8px}.signUp[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:8px}.form-group[_ngcontent-%COMP%]{margin-top:8px}.form-control[_ngcontent-%COMP%]{margin-bottom:16px}.loginButton[_ngcontent-%COMP%]{display:flex;justify-content:center}.centerButton[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:8px}.link[_ngcontent-%COMP%]{cursor:pointer;float:right}.info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media only screen and (min-width: 801px){.login-form[_ngcontent-%COMP%]{width:60%}}@media only screen and (min-width: 1201px){.login-form[_ngcontent-%COMP%]{width:35%}}.mat-mdc-tab-group[_ngcontent-%COMP%]{display:contents;flex-direction:column;max-width:100%}.mat-mdc-tab-body-content[_ngcontent-%COMP%]{height:100%;overflow:hidden}.mat-mdc-tab-body.mat-mdc-tab-body-active[_ngcontent-%COMP%]{overflow:hidden!important}hr[_ngcontent-%COMP%]{border-top:1px solid #fff}"]}),a})(),pathMatch:"full"},{path:"resetPassword/:resetPasswordToken",component:(()=>{class a{constructor(o,n,i,d){this.router=o,this.activatedRoute=n,this.api=i,this.notifyService=d,this.form=new s.cw({newPass:new s.NI("",s.kI.required),confirmPass:new s.NI("",s.kI.required)}),this.resetPasswordToken=""}ngOnInit(){this.activatedRoute.params.subscribe(o=>{const n=o.resetPasswordToken;n?this.resetPasswordToken=n:this.router.navigate(["/"])})}get samePasswords(){var o,n;return(null===(o=this.form.get("newPass"))||void 0===o?void 0:o.value)===(null===(n=this.form.get("confirmPass"))||void 0===n?void 0:n.value)}submitNewPassword(){var o;const n=null===(o=this.form.get("newPass"))||void 0===o?void 0:o.value;this.api.saveResetPassword(this.resetPasswordToken,n).subscribe(()=>{this.notifyService.notify(g.k.success,"New password saved!"),this.router.navigate(["/"])},i=>console.log(i))}}return a.\u0275fac=function(o){return new(o||a)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(Z.s),t.Y36(C.g))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-reset-password"]],decls:25,vars:3,consts:[[1,"resetForm"],["accept-charset","UTF-8",3,"formGroup"],[1,"form-group"],["for","newPassword",1,"cols-sm-2","control-label"],[1,"cols-sm-10"],[1,"input-group"],[1,"input-group-addon"],["aria-hidden","true",1,"fa","fa-lock","fa-lg"],["formControlName","newPass","id","newPassword","placeholder","New password","type","password",1,"form-control"],["for","confirmNewPassword",1,"cols-sm-2","control-label"],["formControlName","confirmPass","id","confirmNewPassword","placeholder","Confirm password","type","password",1,"form-control"],["class","alert alert-danger",4,"ngIf"],[1,"saveButton"],["mat-button","","mat-flat-button","","type","button",3,"disabled","click"],[1,"alert","alert-danger"]],template:function(o,n){1&o&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title"),t._uU(2,"Change Password"),t.qZA(),t.TgZ(3,"mat-card-content")(4,"form",1)(5,"div",2)(6,"label",3),t._uU(7,"New Password"),t.qZA(),t.TgZ(8,"div",4)(9,"div",5)(10,"span",6),t._UZ(11,"i",7),t.qZA(),t._UZ(12,"input",8),t.qZA()()(),t.TgZ(13,"div",2)(14,"label",9),t._uU(15,"Confirm new password"),t.qZA(),t.TgZ(16,"div",4)(17,"div",5)(18,"span",6),t._UZ(19,"i",7),t.qZA(),t._UZ(20,"input",10),t.qZA(),t.YNc(21,L,2,0,"div",11),t.qZA()(),t.TgZ(22,"div",12)(23,"button",13),t.NdJ("click",function(){return n.submitNewPassword()}),t._uU(24," Save new password "),t.qZA()()()()()),2&o&&(t.xp6(4),t.Q6J("formGroup",n.form),t.xp6(17),t.Q6J("ngIf",n.form.get("confirmPass").touched&&!n.samePasswords),t.xp6(2),t.Q6J("disabled",!n.form.valid||!n.samePasswords))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,m.a8,m.dn,m.n5,p.lW,s.sg,s.u,f.O5],styles:[".resetForm[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;width:25%;margin-left:-12.5%;margin-top:-40vh}input[_ngcontent-%COMP%]{margin-top:5px}label[_ngcontent-%COMP%]{margin-top:15px}fieldset[_ngcontent-%COMP%]{margin:0;border:none}.saveButton[_ngcontent-%COMP%]{width:100%;text-align:center;margin-top:30px}@media only screen and (max-width: 801px){.resetForm[_ngcontent-%COMP%]{width:40%}}@media only screen and (min-width: 1201px){.resetForm[_ngcontent-%COMP%]{width:35%}}"]}),a})()}];let z=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[l.Bz.forChild(J),s.u5,m.QW,p.ot,h.Ps,s.UX,f.ez,v.AV,c.lN,w.c,b.Is,T.Nh,O.rP,U.LD,P.p9,l.Bz]}),a})()}}]);