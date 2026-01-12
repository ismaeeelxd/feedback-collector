import { createTransport, Transporter } from "nodemailer";
import { INotifier } from "../interfaces/notifier.interface";
import { NotifierOptions } from "../options/notifier.options";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EmailNotifierService implements INotifier {
    private transporter: Transporter;

    constructor(private readonly options: NotifierOptions) {
        this.transporter = createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: this.options.emailUser,
                clientId: this.options.googleClientId,
                clientSecret: this.options.googleClientSecret,
                refreshToken: this.options.googleRefreshToken,
                accessToken: this.options.googleAccessToken,
            }
        });
    }

    async send(to: string, message: string): Promise<void> {
        await this.transporter.sendMail({
            from: this.options.emailUser,
            to,
            subject: "Test",
            text: message,
        });
    }
}