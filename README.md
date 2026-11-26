# Green Tests, Nothing Works: The Excuse Contest

[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/ujang201/green-tests-excuse/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![Reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/ujang201/green-tests-excuse/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

## The entry

> All 412 tests passed because they only assert the loading spinner spins, and it does — forever.

(95 characters, one line, one sentence — the tests only ever checked the spinner.)

## How it works

`main.ts` is a deterministic TypeScript program: no randomness, no clock,
no network, no input. It writes the single-line excuse above to
`$OUTPUT_DIR/entry.txt` (or `/output/entry.txt` when `OUTPUT_DIR` is
unset), after enforcing the competition gate itself: UTF-8 text, 1–140
characters, not only whitespace, a single line.

Run it:

```sh
OUTPUT_DIR=/tmp/green-tests-out node main.ts
cat /tmp/green-tests-out/entry.txt
```

## About this entry

Built for the make.fun bounty
[Green Tests, Nothing Works: The Excuse Contest](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
by [@ujang201](https://make.fun/u/ujang201).

https://make.fun/r/wfjv7kgb
