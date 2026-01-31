export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!process.env.SLACK_WEBHOOK_URL) {
      console.error("Slack webhook missing");
      return Response.json({ error: "Config error" }, { status: 500 });
    }

    await fetch(process.env.SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `🚨 *Frontend Crash*
• Message: ${body.message}
• URL: ${body.url}
• Env: production`,
      }),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("report-error failed", err);
    return Response.json({ error: "Internal" }, { status: 500 });
  }
}
