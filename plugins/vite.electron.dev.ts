// 开发环境插件electron

import type { Plugin } from 'vite'
import type { AddressInfo } from 'node:net'
import { spawn } from 'child_process'
import fs from 'node:fs'

const buildBackground = () => {
    require('esbuild').buildSync({
        entryPoints: ['./src/background.ts'],
        bundle: true,
        outfile: './dist/background.js',
        platform: 'node',
        target: 'node12',
        external: ['electron'],
    })
}

// vite插件必须导出一个对象，对象必须有name
// 对象有很多钩子
export const ElectronDevPlugin = (): Plugin => {
    return {
        name: 'electron-dev',
        configureServer(server) {
            buildBackground()
            server.httpServer?.on('listening', () => {
                // 读取vite服务信息
                const addressInfo = server.httpServer?.address() as AddressInfo
                // 拼接IP地址 给electron启动服务的时候使用的
                const IP = `http://localhost:${addressInfo.port}`
                // 进程传递参数 第一个参数是electron的入口文件
                // require('electron')返回的是一个路径
                // electron不认识ts 编译成ts
                // 进程传参法
                let ElectronProcess = spawn(require('electron'), ['dist/background.js', IP])
                fs.watchFile('src/background.ts', () => {
                    ElectronProcess.kill()
                    buildBackground()
                    ElectronProcess = spawn(require('electron'), ['dist/background.js', IP])
                })
                ElectronProcess.stderr.on('data', (data) => {
                    console.log('日志', data.toString())
                })
            })
        }
    }
}