# carlo-react-example

This project is a simple initial playground of trying to run react with google's carlo library; things went much better than expected.

### Running

```shell
# Clone the repository
git clone https://github.com/cjschooley/carlo-react-example.git
# Install dependencies.
yarn install
# Build react app.
yarn build
# Run example node app.
node example.js
```

### Reproduce

```shell
# Bootstrap react app.
create-react-app carlo-react-example
# Move into new project.
cd carlo-react-example
# Install carlo dependency.
yarn add carlo
# Create example.js file.
touch example.js
# Write the example.js file.
cat <<EOF > example.js
const carlo = require('carlo');
const path = require('path');

(async () => {
  // Launch the browser.
  const app = await carlo.launch();

  // Terminate Node.js process on app window closing.
  app.on('exit', () => process.exit());

  // Tell carlo where your web files are located.
  app.serveFolder(path.join(__dirname, 'build'));

  // Expose 'env' function in the web environment.
  await app.exposeFunction('env', _ => process.env);

  // Navigate to the main page of your app.
  await app.load('index.html');
})();
EOF
```
