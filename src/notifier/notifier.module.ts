import { Module } from "@nestjs/common";
import { EmailNotifierService } from "./services/email-notifier.service";
import { NotifierService } from "./services/notifier.service";
import { NOTIFIER } from "./interfaces/notifier.interface";
import { NotifierOptions } from "./options/notifier.options";

const notifierProvider = {
    provide: NOTIFIER,
    useFactory: (options: NotifierOptions, emailNotifierService: EmailNotifierService) => {
        if (options.notificationChannel === "email") {
            return emailNotifierService;
        }
        throw new Error(`Unknown notification channel: ${options.notificationChannel}`);
    },
    inject: [NotifierOptions, EmailNotifierService],
};

@Module({
    providers: [NotifierOptions, NotifierService, EmailNotifierService, notifierProvider],
    exports: [NotifierService]
})
export class NotifierModule { }