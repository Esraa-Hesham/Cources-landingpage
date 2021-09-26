import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourseCounterComponent } from './course-counter/course-counter.component';
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component';
import { SuccessfulStudentComponent } from './successful-student/successful-student.component';
import { CoursesNumbersComponent } from './courses-numbers/courses-numbers.component';
import { SubscribleComponent } from './subscrible/subscrible.component';

import { TopTabComponent } from './top-tab/top-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CourseCounterComponent,
    FeaturedCoursesComponent,
    SuccessfulStudentComponent,
    CoursesNumbersComponent,
    SubscribleComponent,

    TopTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
