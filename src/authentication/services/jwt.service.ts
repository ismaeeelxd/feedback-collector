import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ITokenGenerator } from "../interfaces/authentication.interface";
import jwt from 'jsonwebtoken';

@Injectable()
export class JwtService implements ITokenGenerator {
    private readonly secret: string;
    private readonly magicLinkExpiresIn: number;
    private readonly sessionExpiresIn: number;

    constructor(private readonly configService: ConfigService) {
        this.secret = this.configService.get<string>("JWT_SECRET")!;
        this.magicLinkExpiresIn = this.configService.get<number>("MAGIC_LINK_EXPIRES_IN", 60 * 10); // 10 minutes
        this.sessionExpiresIn = this.configService.get<number>("SESSION_EXPIRES_IN", 60 * 60 * 24 * 7); // 7 days
    }

    generateMagicLinkToken(email: string): string {
        return jwt.sign(
            { email, type: 'magic' },
            this.secret,
            { expiresIn: this.magicLinkExpiresIn }
        );
    }

    generateSessionToken(email: string): string {
        return jwt.sign(
            { email, type: 'session' },
            this.secret,
            { expiresIn: this.sessionExpiresIn }
        );
    }

    verifyToken(token: string): { email: string; type: 'magic' | 'session' } | null {
        try {
            const decoded = jwt.verify(token, this.secret) as { email: string; type: 'magic' | 'session' };
            return decoded;
        } catch {
            return null;
        }
    }
}