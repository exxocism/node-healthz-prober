import { SlackChatData, SlackWebhook } from '../types/slack';

export const getConfig = (index: number) => {
  const url = process.env[`VITE_CHECK_URL_${index}`];
  if (!url) return { url: null, webhook: null };

  const webhookEndpoint = process.env[`VITE_WEBHOOK_ENDPOINT_${index}`]!;
  const data: SlackChatData = {
    channel: process.env[`VITE_WEBHOOK_CHANNEL_${index}`]!,
    username: process.env[`VITE_WEBHOOK_USERNAME_${index}`]!,
    text: process.env[`VITE_WEBHOOK_TEXT_${index}`]!,
    icon_url: process.env[`VITE_WEBHOOK_ICON_URL_${index}`]!,
  };
  const webhook: SlackWebhook = { webhookEndpoint, data };

  return { url, webhook };
};
