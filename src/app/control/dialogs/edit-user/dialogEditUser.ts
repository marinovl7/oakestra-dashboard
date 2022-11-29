import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser, IUserRole } from '../../../root/interfaces/user';
import { DialogAction } from '../../../root/enums/dialogAction';
import { Role } from '../../../root/enums/roles';
import { IDialogAttribute } from '../../../root/interfaces/dialogAttribute';

@Component({
    selector: 'dialog-content-example-dialog',
    templateUrl: 'dialog-edit-user.html',
    styles: [
        '.full-width{width: 100%}',
        '.alignRight{text-align: right}',
        '.cancelButton{background-color: #7b97a5}',
        '.updateButton{background-color: #4a7083}',
        '.input{padding-right: 8px}',
    ],
})
export class DialogEditUserView {
    DialogAction = DialogAction;
    action: DialogAction;
    user: IUser;
    title: string;
    form: FormGroup;
    buttonText = '';

    constructor(
        public dialogRef: MatDialogRef<DialogEditUserView>,
        private fb: FormBuilder,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: IDialogAttribute,
    ) {
        this.user = data.content as IUser;
        this.action = data.action as DialogAction;
        this.title = 'Editing user...';

        if (this.data.action === DialogAction.UPDATE) {
            this.buttonText = 'Save changes';

            this.form = fb.group({
                name: [this.user.name],
                email: [this.user.email],
                roles: fb.group({
                    ADMIN: this.user.roles.some((r: IUserRole) => r.name == 'Admin'),
                    APPLICATION_PROVIDER: this.user.roles.some((r: IUserRole) => r.name == 'Application_Provider'),
                    INFRASTRUCTURE_PROVIDER: this.user.roles.some(
                        (r: IUserRole) => r.name == 'Infrastructure_Provider',
                    ),
                }),
            });
        } else {
            this.buttonText = 'Create';
            this.title = 'Create new user...';

            this.form = fb.group({
                name: ['', UserValidators.containsWhitespace],
                email: [''],
                password: [''],
                roles: fb.group({
                    ADMIN: false,
                    APPLICATION_PROVIDER: false,
                    INFRASTRUCTURE_PROVIDER: false,
                }),
            });
        }
    }

    get name() {
        return this.form.get('name');
    }

    doAction() {
        const newRoles = [];
        for (const r of Object.keys(Role)) {
            if (this.form.value.roles[r]) {
                newRoles.push(r);
            }
        }
        this.user.email = this.form.value.email;
        this.user.name = this.form.value.name;
        this.user.roles = this.form.value.newRoles;
        this.dialogRef.close({ event: this.action, data: this.user.roles });
    }

    closeDialog() {
        this.dialogRef.close({ event: DialogAction.CANCEL });
    }
}

export class UserValidators {
    static containsWhitespace(control: AbstractControl): Validators | null {
        if ((control.value as string).indexOf(' ') > 0) {
            return { containsWhitespace: true };
        } else {
            return null;
        }
    }
}
