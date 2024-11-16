#!/usr/bin/env bash

echo "Hello $1"
echo "answer=42" >> "$GITHUB_OUTPUT"
echo "pid=$$" >> "$GITHUB_OUTPUT"
echo "ls=$(ls -la ~)" >> "$GITHUB_OUTPUT"