import { Injectable } from '@nestjs/common';
import { NotifierService } from 'src/notifier/services/notifier.service';

@Injectable()
export class UserService {
    constructor(private readonly notifierService: NotifierService) { }

    async register(email: string) {
        this.notifierService.notifyUser(email, "Welcome to our app");
    }

}
