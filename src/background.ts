// electron主进程文件
import { app, BrowserWindow } from 'electron'

app.whenReady().then(() => {
    const win = new BrowserWindow({
        height: 700,
        width: 1200,
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            nodeIntegration: true, // 可以在渲染进程中使用node的api，为了安全默认是不允许的
            contextIsolation: false, // 关闭渲染进程的沙箱
            webSecurity: false, // 关闭跨域检查
        }
    })

    // win.webContents.openDevTools() // 开发环境打开控制台

    if (process.argv[2]) {
        // 开发环境
        win.loadURL(process.argv[2]) 
    } else {
        // 生产环境
        win.loadFile('index.html')
    }

    
})
