/**
 * Created by Mos on 2016/10/12.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './config/app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
