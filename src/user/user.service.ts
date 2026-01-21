import { Injectable } from '@nestjs/common';
import { AuthenticationService } from 'src/authentication/services/authentication.service';
import { NotifierService } from 'src/notifier/services/notifier.service';

@Injectable()
export class UserService {
    constructor(
        private readonly notifierService: NotifierService,
        private readonly authenticationService: AuthenticationService
    ) { }

    async login(email: string) {
        const token = this.authenticationService.generateMagicLinkToken(email);
        await this.notifierService.notifyUser(
            email,
            `Welcome! Click here to login: http://localhost:3000/api/user/verify/${token}`
        );
    }

    async verifyLogin(token: string) {
        const payload = this.authenticationService.verifyToken(token);

        if (!payload || payload.type !== 'magic') {
            throw new Error("Invalid or expired magic link");
        }

        // Generate long-lived session token
        const sessionToken = this.authenticationService.generateSessionToken(payload.email);

        return {
            email: payload.email,
            sessionToken
        };
    }
}
