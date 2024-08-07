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

  async newReferralActivated(referral_id: string, username: string, firstname: string) {
    const url = `${this.configService.get('WEBHOOK_HOST_MINER')}notifications/referrals/new`;

    const request = this.httpService.post(url, { referral_id, username, firstname });

    const data = {
      request,
      logger_message: 'NOTIFICATION SERVICE [new referral activated]',
      error_message: 'Something goes wrong',
    };

    try {
      await toPromise(data);
    } catch (error) {
      logger.error('NotificationService | newReferralActivated | ERROR:\n', error);
      // throw new Error('Error with service callback: newReferralActivated');
    }
  }
}
