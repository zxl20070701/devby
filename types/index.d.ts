import getOptionsType from './get-options'

export default class DevBy {

    // 命令行参数解析
    static options: (shortHands: any, argv: any) => any

    // 文件操作相关
    static deleteSync: (target: string) => void
    static copySync: (source: string, target: string) => void
    static moveSync: (source: string, target: string) => void

    // 日志打印
    static log: (txt: string) => void
    static warn: (txt: string) => void
    static error: (txt: string) => void
    static linelog: (txt: string) => void

    // 进度打印
    static process: (percentum: number, txt?: string) => void

    // 请求
    static get(url: string, options?: getOptionsType): Promise<any>

}