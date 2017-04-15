
Simple "nix's top" node.js wrapper (will use wmic to on windows to similate result). 

## Install & usage

Install
```
npm install node-top
```


fetch data
```js
const top = require("os-top");

top.fetch().then(function(data){
    // data as below
});   

```


data format

```json
{stats: 
   { mem: { used: 15000, wired: 1820, unused: 1100 },
     cpu: { user: 2.24, sys: 3.14, idle: 94.6 } },
  procs: 
   [ { name: 'top', pid: '123', cpu: 7.5, mem: 3.268 },
     { name: 'node', pid: '124', cpu: 0.1, mem: 21 }
     ...
    ] 
}
```

- All OSes have mem.used and mem.unused, on Osx we have mem.wired, and on Linux mem.buffers
- cpu units are in %
- memory units are in MB
- On Osx at least, the "top" will always have a high % but it does not run on the background, just called once for this report (with the "top -l 1")

## What's in

- Basic top implementation for Osx and Linux (tested on Amazon Linux). 

## What's next

- Add support for Windows 10
- Optimizing fetching only status or procs
- Add more procs fields (same as mem, common base, but add os specific ones too)



