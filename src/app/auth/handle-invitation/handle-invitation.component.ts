import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'appdashboard-handle-invitation',
  templateUrl: './handle-invitation.component.html',
  styleUrls: ['./handle-invitation.component.scss']
})
export class HandleInvitationComponent implements OnInit {
  user_firstname: string;
  user_lastname: string;
  projectName: string;
  pendingInvitationRole: string;
  pendingInvitationEmail: string;
  projectid: string;
  dshbrdBaseUrl: string;
  PENDING_INVITATION_NOT_FOUND: boolean;
  showSpinner: boolean;
  browser_lang: string;
  constructor(
    private route: ActivatedRoute,
    public usersService: UsersService,
    public projectService: ProjectService,
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.get_PendingUserById();
    this.getURLParameters();
    this.getBrowserLanguage();
  }

  getBrowserLanguage() {
    this.browser_lang = this.translate.getBrowserLang();
    console.log('HandleInvitationComponent - browser_lang ', this.browser_lang)
  }


  getURLParameters() {
    this.projectName = this.route.snapshot.params['projectname'];
    this.user_firstname = this.route.snapshot.params['adminfirstname'];
    this.user_lastname = this.route.snapshot.params['adminsurname'];
  }

  get_PendingUserById() {
    this.showSpinner = true;
    const pendingInvitationId = this.route.snapshot.params['pendinginvitationid'];

    this.usersService.getPendingUsersById(pendingInvitationId).subscribe((pendinginvitation: any) => {
      console.log('HandleInvitationComponent GET PENDING INVITATION BY ID - RES: ', pendinginvitation);

      if (pendinginvitation) {

        this.pendingInvitationRole = pendinginvitation.role;
        this.pendingInvitationEmail = pendinginvitation.email;

      }
    }, (error) => {
      this.showSpinner = false;
      if (error && error.status === 404) {
        this.PENDING_INVITATION_NOT_FOUND = true;
      }


      console.log('HandleInvitationComponent GET PENDING INVITATION BY ID - ERROR ', error);
      // this.showSpinner = false;
    }, () => {
      this.showSpinner = false;
      console.log('HandleInvitationComponent GET PENDING INVITATION * COMPLETE *');
      this.PENDING_INVITATION_NOT_FOUND = false;
    });
  }




  goToProject() {
    this.router.navigate(['/project/' + this.projectid + '/home']);

  }


  goToSignupPage() {
    this.router.navigate(['/signup-on-invitation/' + this.pendingInvitationEmail]);
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }


}
