# rrule demo app

**Need** - To basically have `rrule` set up in a nodejs app to play around with before integrating with your own code that required RFC-5545 compliant scheduling.

As of now, this basically prints out the output of `RRule` and `RRuleSet` objects of [`rrule`](https://github.com/jakubroztocil/rrule) in the browser, isn't very um, polished, but I just needed to check if `rrule`'s RRule and RRuleSet were infact working well, as I had some problems trying out `rule` with [`npm-try`](https://www.npmjs.com/package/npm-try-pkg)

UI Demo of `rrule`: https://jakubroztocil.github.io/rrule/

## Setup

    npm i

## Run

    npm index.js

Goto url printed in console.