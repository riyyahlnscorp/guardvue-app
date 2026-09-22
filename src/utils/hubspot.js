export async function submitToHubspot(fields) {
  const portalId = "147457365";
  const formId = "367a7dcb-f45e-4a04-8711-17bca80d23b3";
  const url = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

  const payload = {
    fields: Object.entries(fields)
      .filter(([, value]) => value)
      .map(([name, value]) => ({ name, value })),
  };

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Submission failed");
  }
  return response.json();
}
