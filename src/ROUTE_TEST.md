# Homework 11 – Route Tests

## Navigation Testing

| Test | Expected Result | Status |
|---|---|---|
| Open `/` directly | StudySync home page appears | Pass |
| Open `/items` directly | Assignment list appears | Pass |
| Click View Assignments | Navigates to `/items` | Pass |
| Click View Details | Opens selected assignment | Pass |
| Open `/items/1` | Programming Assignment appears | Pass |
| Open `/items/3` | Homework 11 appears | Pass |
| Open `/items/999` | Assignment Not Found appears | Pass |
| Click Back to Assignments | Returns to `/items` | Pass |
| Browser Back | Returns to previous view | Pass |
| Refresh `/items/1` | Assignment details remain visible | Pass |

## Results

The application uses React Router for client-side navigation. The assignment list and assignment detail views are separate components. The dynamic ID identifies the requested assignment, and invalid IDs display a not-found message.

Direct navigation, link navigation, browser Back, refresh, and invalid ID behavior were successfully tested.