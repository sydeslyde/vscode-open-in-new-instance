import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.openInNewInstance', (folderUri) => {
		vscode.commands.executeCommand('vscode.openFolder', folderUri, true);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
