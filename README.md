# trace-console-log

Have a stray console.log but too lazy to find it?

trace-console-log is here to help

```
npm install trace-console-log
```

## Usage

Simply require it and it will prefix any console.log/error with the
file and line it was printed from.

``` js
node -r trace-console-log my-program.js
```

For example assuming the following is called app.js

``` js
console.log('hi!')
```

Running this with `-r trace-console-log` prints

```
app.js:1 - hi!
```

Easy!

## License

MIT
