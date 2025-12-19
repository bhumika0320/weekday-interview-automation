# weekday-interview-automation
Automated interview scheduling workflow using Airtable and MailerSend — cleans multi-round candidate data, sends interview invites with Calendly links, and tracks turnaround time (TAT) with retries and failure handling.
Weekday (YC W21) – Interview Scheduling Automation

Automated interview scheduling workflow built using Airtable and MailerSend, designed to streamline candidate communication and track turnaround time (TAT) with zero manual intervention.

🚀 Features

CSV ingestion and data cleaning

Automatic splitting of multi-round interviews

Automated interview invitation emails

Calendly link mapping per interview round

Failure handling with retries

Accurate Turnaround Time (TAT) tracking

🛠 Tech Stack

Airtable (Base, Scripts, Automations)

MailerSend API (Email delivery)

JavaScript (Airtable scripting environment)

🗂 Airtable Base Structure
Table: Candidates_Raw
<img width="745" height="140" alt="image" src="https://github.com/user-attachments/assets/2bdd4e03-4d2b-4481-a4e0-d8815e8495ab" />


Table: Candidates_Split
Normalized table (1 row = 1 interview round).
<img width="746" height="252" alt="image" src="https://github.com/user-attachments/assets/ba347f16-4bbc-4ed6-b546-a1c5e4366ee3" />


# Weekday (YC W21) – Interview Scheduling Automation

## Assignment Overview

Weekday helps companies and candidates connect seamlessly for interviews.  
This assignment involves designing a small automated workflow to streamline **interview scheduling and email communication** using Airtable and automation scripts.

As part of the **Founder’s Office**, the objective is to build a system that is simple, scalable, and minimizes manual operational effort while providing visibility into turnaround time (TAT).

---

## Executive Summary

This project implements an end-to-end interview scheduling automation using **Airtable** and **MailerSend**. Candidate data is imported from a CSV and normalized by splitting multi-round interviews into interview-round-level records, each mapped to the correct Calendly link. Automated interview invitation emails are sent using the MailerSend API, with exact send timestamps captured in Airtable. Turnaround Time (TAT) is calculated automatically as the difference between candidate ingestion and email dispatch, enabling clear tracking of hiring ops efficiency. The solution is lightweight, fully automated, and aligned with Founder’s Office execution speed.

---

## Task Breakdown

### Task 1 – Data Splitting

**Goal:**  
Normalize candidate data so each interview round is handled independently.

**Implementation:**
- Import CSV data into `Candidates_Raw`
- Parse the `Interview Rounds` field
- Create one row per interview round in `Candidates_Split`
- Retain all other candidate details
- Assign the relevant Calendly link per round

**Result:**  
One row represents **one candidate + one interview round**.

---

### Task 2 – MailerSend Integration

**Goal:**  
Automatically send interview invitation emails.

**Implementation:**
- Airtable Automation triggers when a new interview-round record is created
- Emails are sent via the **MailerSend API**
- Each email includes:
  - Candidate information
  - Interview round
  - Correct Calendly scheduling link
- Email status and send timestamp are stored in Airtable
- Failed sends retry automatically up to a defined limit

---

### Task 3 – TAT (Turnaround Time) Calculation

**Goal:**  
Measure how quickly interview invites are sent after candidate data is added.

**Implementation:**
- Store exact `Mail Sent Time` on successful email delivery
- Calculate TAT using an Airtable formula field:


