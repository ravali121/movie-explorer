import requireDirectory from 'require-directory'


// Recursively iterate over specified directory,
// importing each file, and returning a nested hash structure containing those modules.
const routes = requireDirectory(module, {visit: e => e.default});

export default routes;
