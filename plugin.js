// Ignite plugin for Video
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-MODULENAME'
// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'VideoExample.js'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install a npm module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'Video Example' })

  // Example of copying templates/Video to App/Video
  // if (!filesystem.exists(`${APP_PATH}/App/Video`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/Video`, `${APP_PATH}/App/Video`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../Video/Video'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/Video folder
  // const removeVideo = await context.prompt.confirm(
  //   'Do you want to remove App/Video?'
  // )
  // if (removeVideo) { filesystem.remove(`${APP_PATH}/App/Video`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: '',
  //   replace: `import '../Video/Video'\n`
  // )
}

// Required in all Ignite plugins
module.exports = { add, remove }

