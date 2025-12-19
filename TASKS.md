### Task 1 – Data Splitting
Script: `scripts/task1_data_split

### Task 2 – MailerSend Integration
Script: `scripts/task2_mailersend_with_retries.js`

### Task 3 – Turnaround Time (TAT)
TAT is calculated using an Airtable formula field:

DATETIME_DIFF({Mail Sent Time}, {Added On}, 'hours')


---

## How to Run / Review Locally

### 1. Airtable Setup
1. Create a free Airtable account
2. Create a new base
3. Import the provided CSV into a table named **`Candidates_Raw`**
4. Create another table named **`Candidates_Split`** with these fields:
   - Candidate Name
   - Email
   - Role
   - Interview Round
   - Calendly Link
   - Added On
   - Mail Sent Time
   - Retry Count
   - Email Status
   - TAT (Formula)

---

### 2. Run Data Splitting Script (Task 1)
- Go to **Airtable → Extensions → Scripting**
- Paste and run `task1_data_splitting.js`
- This generates interview-round-level records in `Candidates_Split`

---

### 3. Configure MailerSend Automation (Task 2)
1. Create a free MailerSend account
2. Generate an API key
3. In Airtable → Automations:
   - Trigger: *When record is created* or *Email Status = Pending*
   - Action: *Run Script*
   - Paste `task2_mailersend_with_retries.js`
   - Store the API key as a secure variable

---

### 4. Verify TAT Calculation (Task 3)
- When an email is sent:
  - `Mail Sent Time` updates automatically
  - `TAT` is calculated in hours using the formula field

---

## Deliverables

- ✅ Airtable base with:
  - Raw imported candidate data
  - Split and cleaned interview-round-level data
- ✅ Script / automation for data splitting
- ✅ Script for MailerSend email integration
- ✅ TAT field calculated in Airtable

---

## Notes

- No API keys are committed to the repository
- The solution is fully automated after CSV upload
- Designed to be easily extended with reminders, dashboards, or recruiter notifications

---
