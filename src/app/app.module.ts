import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { BaCarouselComponent } from './components/ba-carousel/ba-carousel.component';
import { BaModalComponent } from './components/ba-modal/ba-modal.component';
import { BaChooseCardsComponent } from './components/ba-choose-cards/ba-choose-cards.component';
import { BaAboutComponent } from './components/ba-about/ba-about.component';
import { BaTechnologiesCountComponent } from './components/ba-technologies-count/ba-technologies-count.component';
import { BaDepartmentComponent } from './components/ba-department/ba-department.component';
import {BaServicesComponent} from './components/ba-services/ba-services.component';
import {BaAppointementComponent} from './components/ba-appointement/ba-appointement.component';
import { BaTestimonialsComponent } from './components/ba-testimonials/ba-testimonials.component';
import {BaGalleryComponent} from './components/ba-gallery/ba-gallery.component';
import {BaFooterComponent} from './components/ba-footer/ba-footer.component';
import {BaContactsComponent} from './components/ba-contacts/ba-contacts.component';
import { BaDoctorsComponent } from './components/ba-doctors/ba-doctors.component';
import {BaFrequentlyAskedQuestionsComponent} from './components/ba-frequently-asked-questions/ba-frequently-asked-questions.component';
import { BaHeroComponent } from './components/ba-hero/ba-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaCarouselComponent,
    BaModalComponent,
    BaChooseCardsComponent,
    BaAboutComponent,
    BaTechnologiesCountComponent,
    BaAppointementComponent,
    BaServicesComponent,
    BaDepartmentComponent,
    BaTestimonialsComponent,
    BaGalleryComponent,
    BaFooterComponent,
    BaContactsComponent,
    BaFrequentlyAskedQuestionsComponent,
    BaDoctorsComponent,
    BaHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
