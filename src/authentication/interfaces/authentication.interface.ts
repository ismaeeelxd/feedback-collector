export interface ITokenGenerator {
    generateMagicLinkToken(email: string): string;
    generateSessionToken(email: string): string;
    verifyToken(token: string): { email: string; type: 'magic' | 'session' } | null;
}

export const TOKEN_GENERATOR = "TOKEN_GENERATOR";