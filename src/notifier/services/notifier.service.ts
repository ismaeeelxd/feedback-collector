import { Inject, Injectable } from '@nestjs/common';
import { NOTIFIER, type INotifier } from '../interfaces/notifier.interface';
@Injectable()
export class NotifierService {
    constructor(@Inject(NOTIFIER) private readonly notifier: INotifier) { }
    async notifyUser(to: string, message: string): Promise<void> {
        this.notifier.send(to, message);
    }
}
