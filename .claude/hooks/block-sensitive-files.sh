#!/usr/bin/env bash
# PreToolUse hook: block edits to sensitive files (.env*, package-lock.json, node_modules)
set -euo pipefail

FILE_PATH="${1:-}"
if [[ -z "$FILE_PATH" ]]; then
  exit 0
fi

if echo "$FILE_PATH" | grep -qE '\.(env|env\.(local|production|staging))$|package-lock\.json$|/node_modules/'; then
  echo "BLOCKED: Editing sensitive file '$FILE_PATH' is not allowed." >&2
  exit 1
fi

exit 0