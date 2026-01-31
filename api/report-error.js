export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const payload = req.body || {};
  if (!payload.message) {
    res.status(400).json({ error: 'Invalid payload' });
    return;
  }

  const webhook = process.env.SLACK_WEBHOOK_URL;
  if (!webhook) {
    res.status(500).json({ error: 'Slack webhook not configured' });
    return;
  }

  await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: `🚨 ${payload.type || 'Error'}: ${payload.message}`,
    }),
  });

  res.status(200).json({ ok: true });
}
