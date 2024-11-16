#!/bin/sh -l

echo "Hello $1"
echo "::set-output answer=42"
echo "::set-output pid=$$"
echo "::set-output ls=$(ls -la)"