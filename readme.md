# Node Healthz Prober
![](https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=Node.js&logoColor=white)
![](https://img.shields.io/badge/Vite-646cFF?style=for-the-badge&logo=Vite&logoColor=white)
![](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)

## Description
- This is a simple healthz prober using `node.js` fetch API.
- Reports to `Slack` when an endpoint is down.
- Supports cross-platform [Single Executable Applications](https://nodejs.org/docs/latest-v20.x/api/single-executable-applications.html). (Windows, Linux, macOS)

## Prerequisites
- Node.js: `v20.10.0`
- Using [nvm](https://github.com/nvm-sh/nvm) is recommended

## Usage
- Create a [webhook in your Slack workspace](https://api.slack.com/messaging/webhooks)
- Configure the `.env` file (refer to `.env.example`)
  ```env
  # The URL to check
  VITE_CHECK_URL_1="https://endpoint1.com"

  # Slack webhook URL to send notification when the endpoint is down
  VITE_WEBHOOK_ENDPOINT_1="https://hooks.slack.com/services/some/endpoint/here"

  # Slack webhook channel and username to send notification
  VITE_WEBHOOK_CHANNEL_1="#channel-name"
  VITE_WEBHOOK_USERNAME_1="Displayed Name"

  # Slack webhook message
  VITE_WEBHOOK_TEXT_1="Warning message"

  # Slack webhook icon URL
  VITE_WEBHOOK_ICON_URL_1="https://picsum.photos/200"

  # You can add endpoints as much as you want by adding the number suffix
  ```
- Test the app: `npm start`
  ```bash
  Node prober has started...
  [1] Checking https://endpoint1.com...
  [2] Checking https://endpoint2.com...
  Finished probing.
  ```
- Build the app: `npm run runtime`
- Use any scheduler of your choice: `cron`, `systemd`, `taskschd.msc`, etc.

## Screenshots
- Success

  ![001 prober](https://github.com/exxocism/node-healthz-prober/assets/11373428/b19e93f7-645c-4a86-969a-b59fb9cdeacb)
- On Error

  ![002 error](https://github.com/exxocism/node-healthz-prober/assets/11373428/7dfeaaf4-58e9-407c-989a-8ec82ecbe16a)

## JIRA / Confluence
- JIRA: [Node Healthz Prober](https://exxocism.atlassian.net/jira/software/c/projects/NHP/boards/4)
- Confluence: [Node Healthz Prober](https://charlie-chuckles.atlassian.net/wiki/spaces/CPKB/pages/41779204/Node+Healthz+Prober)
