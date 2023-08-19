module.exports = {

  // 命令参数配置
  "options": {
    version: {
      short: 'v',
      info: '[0]Display the version of devby.',
      demo: 'devby --version|-v'
    },
    help: {
      short: 'h',
      info: '[1]Display this help text.',
      demo: 'devby --help|-h <term>'
    },
    server: {
      short: 's',
      info: '[2]Render source server.',
      demo: 'devby --server|-s [port|20000]'
    },
    config: {
      short: 'c',
      info: '[3]Specify a configuration file.',
      demo: 'devby --config|-c ./devby.config.js'
    },
    delete: {
      info: '[4]Delete file or folder.',
      demo: 'devby --delete targetPath'
    },
    copy: {
      info: '[5]Copy file or folder.',
      demo: 'devby --copy sourcePath targetPath'
    },
    move: {
      info: '[6]Move file or folder.',
      demo: 'devby --move sourcePath targetPath'
    },
    network: {
      info: '[7]Display network information.',
      demo: 'devby --network'
    },
    get: {
      info: '[8]HTTP GET.',
      demo: 'devby --get url'
    },
    post: {
      info: '[9]HTTP POST.',
      demo: 'devby --post url'
    }
  },

  // 帮助信息
  "help": `
  Usage: devby <command>
  
  Where <command> is one of:
    --help, -h, --server, -s, --version, -v, --config, -c, --delete, --copy, --move, --network, --get, --post
  
  devby --help|-h <term>       search for help on <term>
  devby --help|-h              involved overview
    `

};