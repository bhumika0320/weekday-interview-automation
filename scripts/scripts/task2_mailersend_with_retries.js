/**
 * Task 2: MailerSend Email Automation with Retries
 */

let table = base.getTable("Candidates_Split");
let record = await table.selectRecordAsync(input.config().recordId);

const MAX_RETRIES = 3;
let retryCount = record.getCellValue("Retry Count") || 0;

if (retryCount >= MAX_RETRIES) {
  await table.updateRecordAsync(record.id, {
    "Email Status": "Failed"
  });
  return;
}

try {
  let response = await fetch("https://api.mailersend.com/v1/email", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MAILERSEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: {
        email: "interviews@weekday.com",
        name: "Weekday Hiring Team"
      },
      to: [{ email: record.getCellValue("Email") }],
      subject: `Interview Invitation – ${record.getCellValue("Interview Round")}`,
      text: `Schedule your interview here:
${record.getCellValue("Calendly Link")}`
    })
  });

  if (!response.ok) throw new Error("MailerSend API failed");

  await table.updateRecordAsync(record.id, {
    "Mail Sent Time": new Date(),
    "Email Status": "Success"
  });

} catch (error) {
  await table.updateRecordAsync(record.id, {
    "Retry Count": retryCount + 1,
    "Email Status": "Pending"
  });
}
