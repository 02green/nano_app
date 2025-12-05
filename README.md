# Nano App

This is a minimal React Native app screen that reuses the same printing module as your CheckBalanceDetails screen (`react-native-print`). It prints a receipt with the heading "TECHSOFT limited" and these lines:

- hello, my name if female programmer
- what would you like me to do today
- am happy that your here today

No network endpoints are used.

## Create the project on Desktop

1. Open PowerShell and run (Windows):

   - `cd "$env:UserProfile\Desktop"`
   - `npx react-native@latest init nanoapp`

   If you prefer a name with space, you can create `nano app`, but using `nanoapp` avoids path issues.

2. Install the printing module:

   - `cd nanoapp`
   - `npm install react-native-print`

3. Replace the contents of `App.tsx` in the new project with the code from `nano_app/App.tsx` in this workspace.

4. Run the app:

   - Android: `npm run android`
   - iOS (on macOS): `npm run ios`

When the app launches, tap the "Print" button to print the prepared receipt.

## Notes

- The printing uses `RNPrint.print({ html })`, matching the module and approach from `CheckBalanceDetailsScreen`.
- This example does not call any APIs or endpoints.
- If you want this screen inside your existing app instead of a new project, you can import `nano_app/App.tsx` and add a navigation route that renders it.