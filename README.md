# oloViewer
This is a web client that renders [olojs] documents in the browser. You can
either use it via the NodeJS API or as a [stilo] plugin.

## Use oloViewer via the NodeJS API 

Install [olojs] and oloViewer via npm:

```sh
npm install @onlabsorg/olojs
npm install @onalbsorg/oloviewer
```

Create an [olojs] store to be serverd:

```js
olo = require('@onlabsorg/olojs');
store = new olo.FileStore(`/path/to/home`);
```

Create and start an oloViewer server:

```js
{Server} = require('@onlabsorg/oloviewer');
server = Server(store);
server.listen(8010);
```


## Use oloViewer as stilo plugin
Install [stilo] and initialize a repository:

```sh
npm install -g @onlabsorg/stilo 
cd /path/to/home
stilo init
``` 

Install and start the viewer plugin:

```sh
stilo install @onlabsorg/oloviewer
stilo run viewer
```


## Render a document in the browser
Once you have an oloViewer server listening (say to port 8010), you can render 
the documents of the served store in the browser at the following URL:

```
http://localhost:8010/#/path/to/doc
```

Optionally you can pass a query string after the path (e.g. 
`#/path/to/doc?key1=val1&key2=val2&key3=val2`). In that case, the keys-value 
pairs contained in the query string will be available to the document scope 
under the `__query__` namespace.


## License
This software is released under the [MIT](https://opensource.org/licenses/MIT) 
license.


## Related projects
* [stilo] is a command-line interface written in NodeJS that allows you to
  create and mange local olojs document repositories.
* [olojs] is a distributed content management system


[olojs]: https://github.com/onlabsorg/olojs/blob/master/README.md
[stilo]: https://github.com/onlabsorg/stilo/blob/main/README.md
