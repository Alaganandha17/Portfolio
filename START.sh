#!/bin/bash

# ─────────────────────────────────────────────
#  Alaganandha Portfolio — One-click Start
# ─────────────────────────────────────────────

set -e

# Check Node is installed
if ! command -v node &> /dev/null; then
  echo ""
  echo "❌  Node.js is not installed."
  echo "    Download it from https://nodejs.org (LTS version)"
  echo ""
  exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  echo ""
  echo "❌  Node.js 18+ is required. You have $(node -v)."
  echo "    Download the latest LTS from https://nodejs.org"
  echo ""
  exit 1
fi

echo ""
echo "✅  Node $(node -v) detected"

# Go to the script's directory (in case launched from elsewhere)
cd "$(dirname "$0")"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦  Installing dependencies (first run — takes ~1 min)..."
  npm install
else
  echo "📦  Dependencies already installed"
fi

echo ""
echo "🚀  Starting portfolio at http://localhost:3000"
echo "    Press Ctrl+C to stop"
echo ""

# Open browser after a short delay (best-effort)
(sleep 3 && open http://localhost:3000 2>/dev/null || xdg-open http://localhost:3000 2>/dev/null) &

npm run dev
