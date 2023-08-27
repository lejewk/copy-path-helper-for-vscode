# copy-path-helper

This extension can be of great help in copying paths. The basic path copy copies the path excluding the project root.

# setting

| config key                   | detail                                                                                                                                       | example                                                      |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| CopyPathHelper.format        | default: ${PATH}<br/><br/> It copies according to the entered format.<br/> When you enter the provided keyword, it gets replaced and copied. | Eg) /home/${PATH} -d 1234 <br/>/home/src/controller/index.ts |
| CopyPathHelper.pathSeparator | default: /<br/><br/>You can set the delimiter to be copied.                                                                                  | \ or <br/>/ or<br/>: or <br/> more...                        |
