import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { DATE } from '@common_bot/shared';
import { toPromise } from '../../helpers';

const { getFormattedDate } = DATE;

@Injectable()
export class NotificationService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async newReferralActivated(userid: string, username: string) {
    const url = `${this.configService.get('WEBHOOK_HOST_BASE')}notifications/referrals/new/${userid}`;

    const request = this.httpService.post(url, { username });

    const data = {
      request,
      logger_message: 'NOTIFICATION SERVICE [new referral activated]',
      error_message: 'Something goes wrong',
    };

    try {
      await toPromise(data);
    } catch (error) {
      console.info(
        getFormattedDate(),
        `| User ID: ${userid}`,
        `| Username: ${username}`,
        `| URL: ${url}`,
        `| Error: ${error}`,
      );
    }
  }
}
