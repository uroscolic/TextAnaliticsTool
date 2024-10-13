import { Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { AuthGuard } from './auth.guard';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
    {path: 'configuration', component: ConfigurationComponent},
    {path: 'entity-extraction', component: EntityExtractionComponent, canActivate: [AuthGuard]},
    {path: 'language-detection', component: LanguageDetectionComponent, canActivate: [AuthGuard]},
    {path: 'sentiment-analysis', component: SentimentAnalysisComponent, canActivate: [AuthGuard]},
    {path: 'text-similarity', component: TextSimilarityComponent, canActivate: [AuthGuard]},
    {path: 'history', component: HistoryComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: 'configuration', pathMatch: 'full'}
];
