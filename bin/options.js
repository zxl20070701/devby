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
      info: '[2]render source server.',
      demo: 'devby --server|-s [port|20000]'
    },
    config: {
      short: 'c',
      info: '[3]Specify a configuration file.',
      demo: 'devby --config|-c ./devby.config.js'
    },
    delete: {
      info: '[4]delete file or folder.',
      demo: 'devby --delete ./file'
    }
  },

  // 帮助信息
  "help": `
  Usage: devby <command>
  
  where <command> is one of:
    --help, -h, --server, -s, --version, -v, --config, -c, --delete
  
  devby --help|-h <term>       search for help on <term>
  devby --help|-h              involved overview
    `

};