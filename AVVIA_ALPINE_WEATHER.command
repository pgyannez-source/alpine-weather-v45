#!/bin/sh
cd "$(dirname "$0")"
if ! command -v node >/dev/null 2>&1; then echo "Node.js 18+ richiesto."; exit 1; fi
if [ ! -d node_modules/pngjs ]; then npm install || exit 1; fi
(sleep 2; open http://localhost:8787) &
node server.js
