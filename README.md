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
