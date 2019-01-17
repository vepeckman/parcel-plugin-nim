import helloFn, components/helloComp

when defined(release):
  echo "release"
  echo hello()
  echo helloComponent()
else:
  echo "debug"
  echo hello()
  echo helloComponent()
