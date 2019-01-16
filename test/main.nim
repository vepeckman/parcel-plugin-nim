import lib/foo

when defined(release):
  echo "release"
  echo hello() & " modified again"
else:
  echo "debug"
  echo hello()
