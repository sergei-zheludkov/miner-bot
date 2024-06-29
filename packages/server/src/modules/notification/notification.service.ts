import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { logger } from '../../libs/logger/logger.instance';
import { toPromise } from '../../helpers';

@Injectable()
export class NotificationService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async newReferralActivated(userid: string, username: string, firstname: string) {
    const url = `${this.configService.get('WEBHOOK_HOST_BASE')}notifications/referrals/new/${userid}`;

    const request = this.httpService.post(url, { username, firstname });

    const data = {
      request,
      logger_message: 'NOTIFICATION SERVICE [new referral activated]',
      error_message: 'Something goes wrong',
    };

    try {
      await toPromise(data);
    } catch (error) {
      logger.error('NotificationService | newReferralActivated | ERROR:\n', error);
      throw new Error('Error with service callback: newReferralActivated');
    }
  }
}
