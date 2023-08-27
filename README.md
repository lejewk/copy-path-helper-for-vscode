# copy-path-helper

This extension can be of great help in copying paths. The basic path copy copies the path excluding the project root.

![](https://raw.githubusercontent.com/lejewk/copy-path-helper-for-vscode/main/resource/preview.gif)

# How To Copy

short key

- On window : ctrl + shift + q
- On mac : ctrl + shift + q

other

- Right-click on the file and copy using the 'Copy Path With Helper' menu option
- Search for 'Copy Path With Helper' in the command palette and run it

# Feature

| config key                   | detail                                                                                                                                                                                                                     | example                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| CopyPathHelper.format        | default: ${PATH}<br/><br/> keywords:<br/> - \${PATH} : file path <br/> - \${FILE} : file name <br/><br/> It copies according to the entered format.<br/> When you enter the provided keyword, it gets replaced and copied. | Eg) /home/${PATH} -d 1234 <br/>/home/src/controller/index.ts -d 1234 |
| CopyPathHelper.pathSeparator | default: /<br/><br/>You can set the delimiter to be copied.                                                                                                                                                                | \ or <br/>/ or<br/>: or <br/> more...                                |
