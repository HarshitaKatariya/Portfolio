export const runtime = "nodejs";

export async function POST(req) {
  console.log("▶ /api/report-error hit");

  try {
    let body;
    try {
      body = await req.json();
      console.log("✔ Body parsed");
    } catch (e) {
      console.error("❌ Failed to parse JSON body", e);
      return Response.json({ error: "Invalid JSON" }, { status: 400 });
    }

    console.log("ENV CHECK:", {
      hasSlackWebhook: !!process.env.SLACK_WEBHOOK_URL,
    });

    if (!process.env.SLACK_WEBHOOK_URL) {
      console.error("❌ Slack webhook missing");
      return Response.json({ error: "Config error" }, { status: 500 });
    }

    try {
      const slackRes = await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🚨 *Frontend Crash*
• Message: ${body?.message ?? "unknown"}
• URL: ${body?.url ?? "unknown"}
• Env: production`,
        }),
      });

      console.log("Slack response status:", slackRes.status);

      if (!slackRes.ok) {
        const text = await slackRes.text();
        console.error("❌ Slack rejected payload:", text);
      }
    } catch (e) {
      console.error("❌ Slack fetch failed", e);
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("❌ report-error crashed", err);
    return Response.json({ error: "Internal" }, { status: 500 });
  }
}
