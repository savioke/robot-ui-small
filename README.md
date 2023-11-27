# robot-ui-small

Web UI for RelayCore 7" screens

## Building a package locally on Ubuntu 20.04

If you don't have our `nodejs` 20 package already, set up to use our repo for it:

```
curl https://bringup-static.savioke.com/aptly-savioke-com.asc | sudo apt-key add -
sudo add-apt-repository 'deb http://public-aptly.savioke.com/nodejs20/ focal main'
```

Install the build dependencies:

```
sudo apt-get -y install nodejs build-essential devscripts debhelper
```

Run the build script:

```
./build.sh
```

This package builds automatically via github actions on push to `main` branch and on
every push to an open PR. These packages are published to our focal automatically.

Building for xenial is not supported.
