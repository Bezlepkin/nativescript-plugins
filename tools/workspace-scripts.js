module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@bezlepkin/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @bezlepkin/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@bezlepkin': {
      // nativescript-keyboard-opening
      'nativescript-keyboard-opening': {
        build: {
          script: 'nx run nativescript-keyboard-opening:build.all',
          description: 'nativescript-keyboard-opening: Build',
        },
      },
      // nativescript-photo-editor
      'nativescript-photo-editor': {
        build: {
          script: 'nx run nativescript-photo-editor:build.all',
          description: 'nativescript-photo-editor: Build',
        },
      },
      // @bezlepkin/nativescript-fab
      'nativescript-fab': {
        build: {
          script: 'nx run nativescript-fab:build.all',
          description: 'nativescript/nativescript-fab: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'nativescript-keyboard-opening': {
        script: 'nx run nativescript-keyboard-opening:focus',
        description: 'Focus on nativescript-keyboard-opening',
      },
      'nativescript-photo-editor': {
        script: 'nx run nativescript-photo-editor:focus',
        description: 'Focus on nativescript-photo-editor',
      },
      'nativescript-fab': {
        script: 'nx run nativescript-fab:focus',
        description: 'Focus on nativescript/nativescript-fab',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
