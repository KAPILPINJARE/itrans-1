import { NgModule } from '@angular/core';
import { CourseComponent } from './all-course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CourseRoute } from './course.route';
import { QuizComponent } from './quiz/quiz.component';
import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChaptersComponent } from './chapters/chapters.component';

@NgModule({
    declarations: [
        CourseComponent,
        QuizComponent,
        ChaptersComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forChild(CourseRoute),
        BrowserAnimationsModule,
        MatProgressBarModule,
        
    ],
    providers:[
        CourseService,
        ChaptersComponent
    ],
    exports: [
        CourseComponent,
        QuizComponent
    ]
})
export class CourseModule {
}
