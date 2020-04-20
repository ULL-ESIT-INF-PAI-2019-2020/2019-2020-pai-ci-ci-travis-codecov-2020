#!/bin/bash

# Create a token in https://github.com/settings/tokens with "public_repo" permission
# Generate a secure token : "travis encrypt -r username/reponame GH_TOKEN=xxx --add;" (https://docs.travis-ci.com/user/encryption-keys/)
# Put the result in the ".travis.yml" file : 
# env:
#  global:
#  - secure: ...

set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
COMMIT_AUTHOR_NAME="Travis CI"
COMMIT_AUTHOR_EMAIL="travis@travis-ci.org"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo -e "Skipping publish; just doing a build.\n"
    exit 0
fi

## Initialize git
git config --global user.name "$COMMIT_AUTHOR_NAME"
git config --global user.email "$COMMIT_AUTHOR_EMAIL"

echo -e "# Publish build #\n"

# Copy README file into $HOME
cp -R $TRAVIS_BUILD_DIR/README.md $HOME/README.md

# Manage code coverage
rm -fr $HOME/.composer/composer.json $HOME/.composer/composer.lock $HOME/.composer/vendor;
composer global require "php-coveralls/php-coveralls=*"
php $HOME/.composer/vendor/bin/php-coveralls --verbose --config

# Copy generated coverage into $HOME
cp -R $TRAVIS_BUILD_DIR/build/coverage $HOME/coverage

# Generate php doc
PHP_DOC_DIR=$HOME/phpdoc
SRC_DIR=$TRAVIS_BUILD_DIR/src
BOOTSTRAP_PATH=$TRAVIS_BUILD_DIR/vendor/autoload.php
echo -e " * Generate php doc for \"$SRC_DIR\""
rm -fr $HOME/.composer/composer.json $HOME/.composer/composer.lock $HOME/.composer/vendor;
composer global require "victorjonsson/markdowndocs=*"
mkdir $PHP_DOC_DIR
$HOME/.composer/vendor/bin/phpdoc-md generate $SRC_DIR --bootstrap $BOOTSTRAP_PATH > $PHP_DOC_DIR/index.md

#  Retrieve branch gh-pages
GH_PAGES_DIR=$HOME/gh-pages
echo -e " * Retrieve branch gh-pages"
cd $HOME
git clone --quiet --branch=gh-pages https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG} $GH_PAGES_DIR > /dev/null
cd $GH_PAGES_DIR
git config user.name "$COMMIT_AUTHOR_NAME"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# Remove old PHPDoc
GH_PAGES_PHPDOC_DIR=$GH_PAGES_DIR/phpdoc
if [ -d $GH_PAGES_PHPDOC_DIR ]; then
    echo -e " * Remove old PHPDoc"
    git rm -rf $GH_PAGES_PHPDOC_DIR
fi

# Create new PHPDoc directory
echo -e " * Create new PHPDoc directory"
mkdir $GH_PAGES_PHPDOC_DIR

# Copy new PHPDoc version
echo -e " * Copy new PHPDoc version"
cp -Rf $PHP_DOC_DIR/* $GH_PAGES_PHPDOC_DIR/;

# Remove old Coverage
GH_PAGES_COVERAGE_DIR=$GH_PAGES_DIR/coverage
if [ -d $GH_PAGES_COVERAGE_DIR ]; then
    echo -e " * Remove old Coverage"
    git rm -rf $GH_PAGES_COVERAGE_DIR
fi

# Create new Coverage directory
echo -e " * Create new Coverage directory"
mkdir $GH_PAGES_COVERAGE_DIR

# Copy new Coverage version
echo -e " * Copy new Coverage version"
cp -Rf $HOME/coverage/* $GH_PAGES_COVERAGE_DIR/

# Set new readme file content into index page
echo -e " * Update index page from readme file"
echo -e "---" > $GH_PAGES_DIR/index.md;
echo -e "layout: default" >> $GH_PAGES_DIR/index.md;
echo -e "title: Home" >> $GH_PAGES_DIR/index.md;
echo -e "---" >> $GH_PAGES_DIR/index.md;

# Add "raw" liquid tag to escape README content
INDEX_CONTENT=$(sed -r s"/(\{%[^%]+%\})/{% raw %}\1{% endraw %}/g" $HOME/README.md)

echo -e "$INDEX_CONTENT" >> $GH_PAGES_DIR/index.md;

# Run extra command
if [ "$GH_PAGES_EXTRA_PROCESS" != "" ]; then
    echo -e " * Run extra command : $GH_PAGES_EXTRA_PROCESS"
    eval $GH_PAGES_EXTRA_PROCESS;
fi

# Add, commit & push all files to git
echo -e " * Add, commit & push all files to git"
git add -f .
git commit -m "Publish Travis Build : $TRAVIS_BUILD_NUMBER"
git push -fq origin gh-pages > /dev/null

echo -e " * Update wiki home page"
WIKI_DIR=$HOME/wiki
git clone --quiet --branch=master https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.wiki.git $WIKI_DIR > /dev/null
cd $WIKI_DIR
git config user.name "$COMMIT_AUTHOR_NAME"
git config user.email "$COMMIT_AUTHOR_EMAIL"
cp $HOME/README.md $WIKI_DIR/Home.md
# Add, commit & push all files to git
echo -e " * Add, commit & push all files to git"
git add -f .
git commit -m "Publish Travis Build : $TRAVIS_BUILD_NUMBER"
git push -fq origin master > /dev/null
cd $HOME

# Done
echo -e " * Published PHPDoc & Coverage to gh-pages, updated wiki homepage.\n" 