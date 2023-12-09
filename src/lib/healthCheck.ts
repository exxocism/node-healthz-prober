import { SlackWebhook } from '../types/slack';
import { sendToSlack } from '../utils/slackUtils';

export const healthCheck = async (url: string, webhook: SlackWebhook) => {
  const probe = await fetch(url).catch(console.log);
  if (probe?.status !== 200) {
    console.log(webhook.data.text);
    sendToSlack(webhook);
  }
};
