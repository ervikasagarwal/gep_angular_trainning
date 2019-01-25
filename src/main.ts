import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// info about startup module

platformBrowserDynamic().bootstrapModule(AppModule)

console.log("this is main.ts ");