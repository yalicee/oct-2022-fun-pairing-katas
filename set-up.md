# Set Up Guide

## Install the necessary extensions

- In VSCode, go to the extensions side panel. It's the bottom icon on the left hand side. If you can't see any icons, click 'Show Activity Bar' in the view menu.
- Install 'Prettier'. This tool will help keep your code better formatted, more readable and prettier.
- You may need to 'reload' after installing for the extension to take effect.

## Configure your user settings

- In VSCode, go to Preferences -> Settings. Depending on your version of VSCode, either click one of the icons on the top right, or click on the tab to open `Settings.json`. Paste the following JSON object in - these are our recommended settings for working on VSCode. If you have any of your own preferences feel free to add or adapt them here!

```json
{
  "window.zoomLevel": 1,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "editor.minimap.enabled": false,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "workbench.activityBar.visible": true,
  "breadcrumbs.enabled": true
}
```

## To get this repo onto your computer

- On the command line, navigate to the folder you want this repo to be in.
- When pairing, one of you should click 'Fork' in the top right of the Northcoders' repo.
- Once you have forked your own version of this repo, both of you should clone that version to your local machine.
- To do this, on the command line type `git clone`, paste in the repo address, and press enter.

## To commit your code

- Add the files you want to commit to the staging area by typing `git add` followed by the files and folders you wish to commit (for example, `git add index.js`).
- To commit, type `git commit -m 'my beautiful commit message'` followed by a short description of the functionality you have achieved since your last commit.
- Resolve any issues that are preventing you from committing.
- To push to github, type `git push origin master`.

## To pull from a repo your pair has worked on

- Ensure you are in the project git folder on your computer.
- Ensure your pair's push has succeeded.
- Type `git pull origin master` to pull any changes that have been made to your repo.

## Setup your node project from scratch

Make sure you are in your project directory!

1. Create a `package.json` from the start

- **Command**: `npm init -y`

2. Install the Jest library so we can write our tests

- **Command**: `npm install --save-dev jest`

3. Setup test script:

Add the following section to your package.json:

```json
{
  "scripts": {
    "test": "jest --watch"
  }
}
```

## Node commands

- To run your tests: `npm test`

You can see what these commands are aliases for by checking your package.json.

## Files in your repository

- _node_modules_ hold all the dependencies / libraries that your project relies on (for example, jest, for testing).
- `.gitignore` contains the names of all your files that you don't want committed to github. This includes node_modules, as we don't want to commit tonnes of unnecessary code that we can easily fetch with npm install.
- `__tests__`is the folder for your tests - `range.test.js` tests your function in `range.js`, etc.
- `package.json` contains information used by npm to organise your project.
- `package-lock.json` contains the information needed to link your node modules.
- `README.md` is instructions for using and running a project! READ IT! Every repo should have one. You can open it in Preview (right click) for a prettier version (using the markdown type formatting).
