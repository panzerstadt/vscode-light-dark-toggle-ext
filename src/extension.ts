// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

const userConfig = vscode.workspace.getConfiguration();
const preferredLightTheme = vscode.workspace
  .getConfiguration("workbench")
  .get("preferredLightColorTheme");
const preferredDarkTheme = vscode.workspace
  .getConfiguration("workbench")
  .get("preferredDarkColorTheme");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "light-dark-toggle" is now active!'
  );

  vscode.commands.registerCommand("lightDarkToggle.toggle", () => {
    const currentTheme: string | undefined = vscode.workspace
      .getConfiguration("workbench")
      .get("colorTheme");

    if (currentTheme === preferredLightTheme) {
      // set dark theme
      userConfig.update("workbench.colorTheme", preferredDarkTheme, true);
    } else {
      // set light theme
      userConfig.update("workbench.colorTheme", preferredLightTheme, true);
    }
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
