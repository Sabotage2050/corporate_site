export default async function sendmail(req, res) {
  const postdata = await fetch(process.env.SEND_EMAIL_LAMBDA, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  });

  return res.status(200).json({ text: "OK" });
}
