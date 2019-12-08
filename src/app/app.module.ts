import { MetricheComponent } from './analytics2/metriche/metriche.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

import { UiModule } from './ui/shared/ui.module';

///// Start FireStarter
// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

// FIRESTORE
import { UsersService } from './services/users.service';

import { RequestsService } from './services/requests.service';
import { RequestsListComponent } from './requests-list/requests-list.component';

// MONGO DB

import { ContactsService } from './services/contacts.service';
import { ContactsComponent } from './contacts/contacts.component';
import { DepartmentService } from './services/mongodb-department.service';
import { DepartmentsComponent } from './departments/departments.component';

import { MongodbFaqService } from './services/mongodb-faq.service';
import { FaqComponent } from './faq/faq.component';
import { BotService } from './services/bot.service';
import { BotsComponent } from './bots/bots.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { FaqKbService } from './services/faq-kb.service';
import { FaqKbComponent } from './faq-kb/faq-kb.component';
import { FaqKbEditAddComponent } from './faq-kb-edit-add/faq-kb-edit-add.component';
import { FaqEditAddComponent } from './faq-edit-add/faq-edit-add.component';
import { BotEditAddComponent } from './bot-edit-add/bot-edit-add.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DepartmentEditAddComponent } from './department-edit-add/department-edit-add.component';
import { ProjectEditAddComponent } from './project-edit-add/project-edit-add.component';

import { ProjectService } from './services/project.service';
// import { RequestsListHistoryComponent } from './requests-list-history/requests-list-history.component';
import { MomentModule } from 'angular2-moment';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UnauthorizedComponent } from './auth/unauthorized/unauthorized.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetComponent } from './widget/widget.component';
import { ScriptComponent } from './script/script.component';
import { ChannelsComponent } from './channels/channels.component';
import { SocialComponent } from './social/social.component';
import { FaqTestComponent } from './faq-test/faq-test.component';
import { UserEditAddComponent } from './user-edit-add/user-edit-add.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UsersLocalDbService } from './services/users-local-db.service';
import { RoutingPageComponent } from './routing-page/routing-page.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { RequestsMsgsComponent } from './requests-msgs/requests-msgs.component';

import { GroupService } from './services/group.service';
import { GroupsComponent } from './groups/groups.component';
import { GroupEditAddComponent } from './group-edit-add/group-edit-add.component';

import { BotLocalDbService } from './services/bot-local-db.service';
import { ChangePasswordComponent } from './change-password/change-password.component';

// PIPE
import { GroupNamePipe } from './groupname.pipe';
import { SortByPipe } from './sortby.pipe';
import { SortByDesPipe } from './sortbydes.pipe';
import { HoursComponent } from './hours/hours.component';

import { AmazingTimePickerModule } from 'amazing-time-picker';

import { NgSelectModule } from '@ng-select/ng-select';
import { ResetPswComponent } from './reset-psw/reset-psw.component';
import { ResetPswService } from './services/reset-psw.service';
import { WidgetDesignComponent } from './widget-design/widget-design.component';
import { UploadImageService } from './services/upload-image.service';
import { RequestsListHistoryNewComponent } from './requests-list-history-new/requests-list-history-new.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { WidgetService } from './services/widget.service';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { UsersPendingComponent } from './users-pending/users-pending.component';
import { ActivitiesComponent } from './activities/activities.component';

import { AnalyticsStaticComponent } from './static-pages/analytics-static/analytics-static.component';
import { ActivitiesStaticComponent } from './static-pages/activities-static/activities-static.component';
import { TrainBotComponent } from './requests-msgs/train-bot/train-bot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FaqTestTrainBotComponent } from './faq-test/faq-test-train-bot/faq-test-train-bot.component';

import { HeatMapModule, TooltipService, LegendService, AdaptorService } from '@syncfusion/ej2-angular-heatmap'
import { AnalyticsService } from './services/analytics.service';
import { Analytics2Component } from './analytics2/analytics2.component';
import { PanoramicaComponent } from './analytics2/panoramica/panoramica.component';
import { RealtimeComponent } from './analytics2/realtime/realtime.component';
import { RichiesteComponent } from './analytics2/metriche/richieste/richieste.component';
import { SentimentComponent } from './analytics2/metriche/sentiment/sentiment.component';
import { TempirispostaComponent } from './analytics2/metriche/tempirisposta/tempirisposta.component';
import { DurataconvComponent } from './analytics2/metriche/durataconv/durataconv.component';
import { HoursStaticComponent } from './static-pages/hours-static/hours-static.component';
import { DepartmentsStaticComponent } from './static-pages/departments-static/departments-static.component';
import { ProjectPlanService } from './services/project-plan.service';
import { SubscriptionService } from './services/subscription.service';
import { TriggerComponent } from './trigger/trigger.component';
import { BasetriggerComponent } from './trigger/basetrigger/basetrigger.component';
import { TriggerService } from './services/trigger.service';
import { TriggerAddComponent } from './trigger/trigger-add/trigger-add.component';
import { TriggerEditComponent } from './trigger/trigger-edit/trigger-edit.component';


/* PRIVATE */
import { PricingModule } from './pricing/pricing.module';
import { StaticPageBaseComponent } from './static-pages/static-page-base/static-page-base.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import { GroupsStaticComponent } from './static-pages/groups-static/groups-static.component';
import { FaqSidebarComponent } from './faq/faq-sidebar/faq-sidebar.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { InstallTiledeskComponent } from './install-tiledesk/install-tiledesk.component';
import { HandleInvitationComponent } from './auth/handle-invitation/handle-invitation.component';

import { environment } from '../environments/environment';
import { AppConfigService } from './services/app-config.service';
import { WsRequestsListComponent } from './ws-requests-list/ws-requests-list.component';
import { WsRequestsService } from './services/websocket/ws-requests.service';
import { WsRequestsMsgsComponent } from './ws-requests-msgs/ws-requests-msgs.component';
// import { WebsocketService } from './services/websocket.service';
import { WsMsgsService } from './services/websocket/ws-msgs.service';
import { WsSharedComponent } from './ws-shared/ws-shared.component';
import { WsTrainBotComponent } from './ws-requests-msgs/ws-train-bot/ws-train-bot.component';
import { WebSocketJs } from './services/websocket/websocket-js';

console.log('************** APPMODULE ******************');
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    if (environment.remoteConfig) {
      return appConfig.loadAppConfig();
    }
  };
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    HomeComponent,
    ContactsComponent,
    RequestsListComponent,
    ChatComponent,
    DepartmentsComponent,
    FaqComponent,
    BotsComponent,
    ProjectsComponent,
    UsersComponent,
    FaqKbComponent,
    FaqKbEditAddComponent,
    FaqEditAddComponent,
    BotEditAddComponent,
    AnalyticsComponent,
    DepartmentEditAddComponent,
    ProjectEditAddComponent,
    // RequestsListHistoryComponent,
    SigninComponent,
    SignupComponent,
    UnauthorizedComponent,
    WidgetComponent,
    ScriptComponent,
    ChannelsComponent,
    SocialComponent,
    FaqTestComponent,
    UserEditAddComponent,
    UsersProfileComponent,
    RoutingPageComponent,
    VerifyEmailComponent,
    RequestsMsgsComponent,
    GroupsComponent,
    GroupEditAddComponent,
    GroupNamePipe,
    SortByPipe,
    SortByDesPipe,
    ChangePasswordComponent,
    HoursComponent,
    ResetPswComponent,
    WidgetDesignComponent,
    RequestsListHistoryNewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    UsersPendingComponent,
    ActivitiesComponent,
    AnalyticsStaticComponent,
    ActivitiesStaticComponent,
    TrainBotComponent,
    FaqTestTrainBotComponent,
    Analytics2Component,
    PanoramicaComponent,
    MetricheComponent,
    RealtimeComponent,
    RichiesteComponent,
    SentimentComponent,
    TempirispostaComponent,
    DurataconvComponent,
    HoursStaticComponent,
    DepartmentsStaticComponent,
    StaticPageBaseComponent,
    GroupsStaticComponent,
    TriggerComponent,
    TriggerAddComponent,
    TriggerEditComponent,
    BasetriggerComponent,
    FaqSidebarComponent,
    CreateProjectComponent,
    InstallTiledeskComponent,
    HandleInvitationComponent,
    WsRequestsListComponent,
    WsRequestsMsgsComponent,
    WsSharedComponent,
    WsTrainBotComponent
  ],
  imports: [
    /* PRIVATE */
    PricingModule,
    /* PRIVATE */
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UiModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HeatMapModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    HttpClientModule,
    MomentModule,
    AmazingTimePickerModule,
    NgSelectModule,
    MyDatePickerModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    SlideshowModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    AppConfigService, // https://juristr.com/blog/2018/01/ng-app-runtime-config/
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    },
    WsRequestsService,
    WsMsgsService,
    // WebsocketService,
    WebSocketJs,
    UsersService,
    ContactsService,
    RequestsService,
    DepartmentService,
    MongodbFaqService,
    BotService,
    FaqKbService,
    ProjectService,
    UsersLocalDbService,
    GroupService,
    BotLocalDbService,
    ResetPswService,
    UploadImageService,
    WidgetService,
    ProjectPlanService,
    SubscriptionService,
    LegendService, TooltipService, AdaptorService, AnalyticsService, HttpClientModule,
    TriggerService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  // constructor() {
  //   firebase.initializeApp(firebaseConfig);
  // }
}
