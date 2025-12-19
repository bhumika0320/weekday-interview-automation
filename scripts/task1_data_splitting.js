/**
 * Task 1: Data Splitting Script
 * Splits multi-round interviews into separate rows in Airtable
 */

let rawTable = base.getTable("Candidates_Raw");
let splitTable = base.getTable("Candidates_Split");

let records = await rawTable.selectRecordsAsync();

const calendlyMap = {
  Screening: "https://calendly.com/weekday/screening",
  Technical: "https://calendly.com/weekday/technical",
  HR: "https://calendly.com/weekday/hr"
};

for (let record of records.records) {
  let rounds = record.getCellValue("Interview Rounds");
  if (!rounds) continue;

  let roundsArray = rounds.split(",").map(r => r.trim());

  for (let round of roundsArray) {
    await splitTable.createRecordAsync({
      "Candidate Name": record.getCellValue("Candidate Name"),
      "Email": record.getCellValue("Email"),
      "Role": record.getCellValue("Role"),
      "Interview Round": round,
      "Calendly Link": calendlyMap[round] || "",
      "Added On": record.getCellValue("Added On")
    });
  }
}

