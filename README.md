#### Repro for https://github.com/meteor/meteor/issues/10546

<details>
<summary>Instructions</summary>

```
$ git clone
$ git checkout interactjs
$ meteor npm install
$ meteor --production
```

should yield

```
=> Started proxy.                             
=> Errors prevented startup:                  
   
   While minifying app code:
   packages/minifyStdJS/plugin/minify-js.js:96:26: Babili minification error within packages/modules.js:
   node_modules/@interactjs/core/Eventable.js
   
   Only one default export allowed per module.:
   
   export default Eventable;
   
   at maybeThrowMinifyErrorBySourceFile (packages/minifyStdJS/plugin/minify-js.js:96:26)
   at files.forEach.file (packages/minifyStdJS/plugin/minify-js.js:135:9)
   at Array.forEach (<anonymous>)
   at MeteorBabelMinifier.processFilesForBundle (packages/minifyStdJS/plugin/minify-js.js:118:9)
   
   
   While minifying app code:
   packages/minifyStdJS/plugin/minify-js.js:96:26: Babili minification error within packages/modules.js:
   node_modules/@interactjs/core/Eventable.js
   
   Only one default export allowed per module.:
   
   export default Eventable;
   
   at maybeThrowMinifyErrorBySourceFile (packages/minifyStdJS/plugin/minify-js.js:96:26)
   at files.forEach.file (packages/minifyStdJS/plugin/minify-js.js:135:9)
   at Array.forEach (<anonymous>)
   at MeteorBabelMinifier.processFilesForBundle (packages/minifyStdJS/plugin/minify-js.js:118:9)
   
   
=> Your application has errors. Waiting for file change.
```

</details>