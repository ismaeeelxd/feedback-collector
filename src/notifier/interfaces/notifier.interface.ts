export interface INotifier {
    send(to: string, message: string): Promise<void>;
}

export const NOTIFIER = "NOTIFIER";