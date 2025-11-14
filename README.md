# Playwright Automation + Email Report

## Setup (local)
1. Clone repo
2. `npm init -y`
    `npm i -D typescript @types/node @playwright/test`
    `npm i nodemailer dotenv axios`
    ` npx tsc --init`
    ` npm init playwright@latest `

3. Create `.env`,`.gitignore` with SMTP credentials (do NOT commit)
4. instll nodes `npm i -D ts-node`

5. `npm i --save-dev @types/nodemailer`

5. `npm run test`
6. `npm run build`
7. `node ./dist/utils/email.js`  # sends email with attached report
(if js files not create run `npx tsc`)

## CI
- GitHub Actions workflow runs tests and emails automatically.
- Add repository secrets: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `EMAIL_TO`  (inside settings)

