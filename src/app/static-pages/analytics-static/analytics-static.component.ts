import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NotifyService } from '../../core/notify.service';
import { ProjectPlanService } from '../../services/project-plan.service';
import { StaticPageBaseComponent } from './../static-page-base/static-page-base.component';

@Component({
  selector: 'appdashboard-analytics-static',
  templateUrl: './analytics-static.component.html',
  styleUrls: ['./analytics-static.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsStaticComponent extends StaticPageBaseComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  projectId: string;

  browserLang: string;
  prjct_profile_type: string;
  subscription_is_active: any;
  prjct_profile_name: string;
  subscription_end_date: Date;


  imageUrlArray = [
    { url: 'assets/img/new_analitycs_1_v6.png', backgroundSize: 'contain' },
    { url: 'assets/img/new_anlitycs_2.png', backgroundSize: 'contain' },
    { url: 'assets/img/new_analitycs_6.png', backgroundSize: 'contain' },

  ];
  constructor(
    private router: Router,
    public auth: AuthService,
    private translate: TranslateService,
    private prjctPlanService: ProjectPlanService,
    private notify: NotifyService
  ) { super(); }

  ngOnInit() {
    this.getCurrentProject();
    this.getBrowserLang();
    this.getProjectPlan();
  }

  getCurrentProject() {
    this.auth.project_bs.subscribe((project) => {
      console.log('!!! ANALYTICS STATIC - project ', project)

      if (project) {
        this.projectId = project._id
      }
    });
  }

  getProjectPlan() {
    this.subscription = this.prjctPlanService.projectPlan$.subscribe((projectProfileData: any) => {
      console.log('ProjectPlanService (GroupsStaticComponent) project Profile Data', projectProfileData)
      if (projectProfileData) {

        this.prjct_profile_type = projectProfileData.profile_type;
        this.subscription_is_active = projectProfileData.subscription_is_active;

        this.subscription_end_date = projectProfileData.subscription_end_date

        this.prjct_profile_name = this.buildPlanName(projectProfileData.profile_name, this.browserLang, this.prjct_profile_type);

        if (this.prjct_profile_type === 'payment' && this.subscription_is_active === false) {

          this.notify.displaySubscripionHasExpiredModal(true, this.prjct_profile_name, this.subscription_end_date)
        }
      }
    })
  }

  getBrowserLang() {
    this.browserLang = this.translate.getBrowserLang();
  }



  goToPricing() {
    console.log('goToPricing projectId ', this.projectId);
    if (this.prjct_profile_type === 'payment' && this.subscription_is_active === false) {
      this.notify._displayContactUsModal(true, 'upgrade_plan');
    } else {
      this.router.navigate(['project/' + this.projectId + '/pricing']);
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
