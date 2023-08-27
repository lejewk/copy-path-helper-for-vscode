# copy-path-helper

This extension can be of great help in copying paths. The basic path copy copies the path excluding the project root.

![](https://raw.githubusercontent.com/lejewk/copy-path-helper-for-vscode/main/resource/preview.gif)

# setting

| config key                   | detail                                                                                                                                                                                                                     | example                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| CopyPathHelper.format        | default: ${PATH}<br/><br/> keywords:<br/> - \${PATH} : file path <br/> - \${FILE} : file name <br/><br/> It copies according to the entered format.<br/> When you enter the provided keyword, it gets replaced and copied. | Eg) /home/${PATH} -d 1234 <br/>/home/src/controller/index.ts |
| CopyPathHelper.pathSeparator | default: /<br/><br/>You can set the delimiter to be copied.                                                                                                                                                                | \ or <br/>/ or<br/>: or <br/> more...                        |

# How To Copy

## short key

- on window: ctrl + shift + q
- on mac: ctrl + shift + q
