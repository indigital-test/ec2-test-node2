const appName = "ec2-test-node2";
const accent = "#059669";

const server = Bun.serve({
  hostname: "0.0.0.0",
  port: Number(Bun.env.PORT || 80),
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return Response.json({ status: "ok", app: appName, runtime: "bun-typescript" });
    }
    if (url.pathname !== "/" && url.pathname !== "/index.html") {
      return new Response("Not found", { status: 404 });
    }
    return new Response(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${appName}</title></head><body style="margin:0;font-family:system-ui;background:#f0fdf4;color:#052e16">
<main style="max-width:720px;margin:12vh auto;padding:3rem;background:white;border-radius:1rem;box-shadow:0 10px 30px #052e1618">
<p style="color:${accent};font-weight:700;letter-spacing:.08em;text-transform:uppercase">Indigiploy test deployment</p>
<h1>${appName}</h1><p>This Bun + TypeScript application is served by the ec2-test-1 slave.</p>
<p><a href="/health">Health endpoint</a></p></main></body></html>`, {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`${appName} listening on ${server.url}`);
