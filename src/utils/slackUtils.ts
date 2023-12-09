import { SlackWebhook } from '../types/slack';

export const sendToSlack = ({ webhookEndpoint, data }: SlackWebhook) => {
  const payload = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(webhookEndpoint, payload);
};
