export interface SlackChatData {
  channel: string;
  username: string;
  text: string;
  icon_url: string;
}

export interface SlackWebhook {
  webhookEndpoint: string;
  data: SlackChatData;
}
