import { Inject, Injectable } from '@nestjs/common';
import { TOKEN_GENERATOR, type ITokenGenerator } from '../interfaces/authentication.interface';

@Injectable()
export class AuthenticationService {
    constructor(
        @Inject(TOKEN_GENERATOR) private readonly tokenGenerator: ITokenGenerator
    ) { }

    generateMagicLinkToken(email: string): string {
        return this.tokenGenerator.generateMagicLinkToken(email);
    }

    generateSessionToken(email: string): string {
        return this.tokenGenerator.generateSessionToken(email);
    }

    verifyToken(token: string): { email: string; type: 'magic' | 'session' } | null {
        return this.tokenGenerator.verifyToken(token);
    }
}
