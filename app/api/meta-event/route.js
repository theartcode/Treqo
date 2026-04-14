export async function POST(req) {
  const body = await req.json();
  const { event_name, event_id, url } = body;
 
  const response = await fetch(
    `https://graph.facebook.com/v19.0/1511250130615837/events?access_token=${process.env.META_ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: [
          {
            event_name,
            event_time: Math.floor(Date.now() / 1000),
            event_id,
            action_source: "website",
            event_source_url: url
          }
        ]
      })
    }
  );
 
  const data = await response.json();
  return Response.json(data);
}