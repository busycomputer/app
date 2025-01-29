import { Event } from '@/lib/inngest/types'

type WebhookTransformParams = {
  evt: any
  headers?: Record<string, string>
  queryParams?: Record<string, string[]>
}

export function transformWebhook({
  evt,
  headers = {},
  queryParams = {},
}: WebhookTransformParams): Event {
  // Default transform that can be customized per webhook in Inngest dashboard
  return {
    name: `webhook/${evt.type || 'default'}`,
    data: {
      workflow_id: evt.workflow_id,
      payload: evt,
      headers,
      queryParams,
    },
    user: evt.user || null,
  }
}

// Example transforms for specific services:

export function transformGithubWebhook({ evt, headers = {} }: WebhookTransformParams): Event {
  const name = headers['X-Github-Event']
  return {
    name: `github.${name.trim().replace('Event', '').toLowerCase()}`,
    data: {
      workflow_id: evt.workflow_id,
      payload: evt,
    },
  }
}

export function transformStripeWebhook({ evt }: WebhookTransformParams): Event {
  return {
    id: evt.id, // Use Stripe's event ID for deduplication
    name: `stripe/${evt.type}`,
    data: {
      workflow_id: evt.workflow_id,
      payload: evt,
    },
  }
}

export function transformTelegramWebhook({ evt }: WebhookTransformParams): Event {
  // Telegram sends updates in a specific format:
  // https://core.telegram.org/bots/api#webhookinfo
  const updateType =
    Object.keys(evt).find((key) =>
      ['message', 'edited_message', 'channel_post', 'callback_query', 'inline_query'].includes(key)
    ) || 'unknown'

  return {
    name: `telegram/${updateType}`,
    data: {
      workflow_id: evt.workflow_id,
      payload: {
        update_id: evt.update_id,
        chat_id: evt.message?.chat?.id || evt.callback_query?.message?.chat?.id,
        from: evt.message?.from || evt.callback_query?.from,
        text: evt.message?.text || evt.callback_query?.data,
        raw: evt, // Store the complete raw update
      },
    },
    user: {
      user_id: (evt.message?.from?.id || evt.callback_query?.from?.id)?.toString(),
    },
  }
}
