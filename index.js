#!/usr/bin/env node

import meow from 'meow'
import chalk from 'chalk'
import caseConvert from './caseConvert.js'
import helpString from './help.js'

const cli = meow(chalk.white(helpString), {
  importMeta: import.meta,
  description: false,
  flags: {
    case: {
      type: 'string',
      alias: 'c',
      isRequired: () => false
    }
  }
})

caseConvert(cli.flags.case, cli.input)
