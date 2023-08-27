import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'extension.getFilePath',
    async function () {
      let editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage('No active editor found.');
        return;
      }

      // 현재 활성화된 파일의 절대 경로
      let absoluteFilePath = editor.document.uri.fsPath;
      let fileName = path.basename(absoluteFilePath);

      // 작업 중인 프로젝트의 루트 디렉토리 경로
      let workspaceFolders = vscode.workspace.workspaceFolders;
      if (!workspaceFolders) {
        vscode.window.showWarningMessage('No workspace folder found.');
        return;
      }
      let workspaceRootPath = workspaceFolders[0].uri.fsPath;

      // 절대 경로에서 루트 디렉토리 경로를 제거하여 상대 경로를 얻음
      let relativePath;
      if (absoluteFilePath.startsWith(workspaceRootPath)) {
        relativePath = path.relative(workspaceRootPath, absoluteFilePath);
      } else {
        relativePath = absoluteFilePath;
      }

      let format = vscode.workspace
        .getConfiguration('CopyPathHelper')
        .get('format') as string;

      let copyString = relativePath;

      copyString = format
        .replace('${PATH}', relativePath)
        .replace('${FILE}', fileName);

      let pathSeparator = vscode.workspace
        .getConfiguration('CopyPathHelper')
        .get('pathSeparator') as string;

      copyString = copyString.split(path.sep).join(pathSeparator);

      await vscode.env.clipboard.writeText(copyString);

      vscode.window.showInformationMessage(
        'File path copied to clipboard!\n' + copyString
      );
    }
  );
  context.subscriptions.push(disposable);
}

export function deactivate() {}
