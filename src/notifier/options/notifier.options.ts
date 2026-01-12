import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class NotifierOptions {
    constructor(private readonly configService: ConfigService) { }

    get notificationChannel(): string {
        return this.configService.get<string>("NOTIFICATION_CHANNEL")!;
    }

    get emailProvider(): string {
        return this.configService.get<string>("EMAIL_PROVIDER")!;
    }

    get emailUser(): string {
        return this.configService.get<string>("EMAIL_USER")!;
    }

    get googleClientId(): string {
        return this.configService.get<string>("GOOGLE_CLIENT_ID")!;
    }

    get googleClientSecret(): string {
        return this.configService.get<string>("GOOGLE_CLIENT_SECRET")!;
    }

    get googleRefreshToken(): string {
        return this.configService.get<string>("GOOGLE_REFRESH_TOKEN")!;
    }

    get googleAccessToken(): string {
        return this.configService.get<string>("GOOGLE_ACCESS_TOKEN")!;
    }

    get googleTokenExpiresIn(): number {
        return parseInt(this.configService.get<string>("GOOGLE_TOKEN_EXPIRES_IN")!);
    }
}