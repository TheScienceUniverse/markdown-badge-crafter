# Pull Request Template

- Please suggest a change via pull request with below templates to only fix raised issues

1. [Bug Fix](../.github/PULL_REQUEST_TEMPLATES/01-bug.md)
2. [Feature Implement](../.github/PULL_REQUEST_TEMPLATES/02-feature.md)


## Request for changes / Pull Requests
You first need to create a fork of the [markdown-badge-crafter](https://github.com/TheScienceUniverse/markdown-badge-crafter/) repository to commit your changes to it. Methods to fork a repository can be found in the [GitHub Documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

Then add your fork as a local project:

```sh
# Using HTTPS
git clone https://github.com/TheScienceUniverse/markdown-badge-crafter.git

# Using SSH
git clone git@github.com:TheScienceUniverse/markdown-badge-crafter.git
```

> [Which remote URL should be used ?](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)

Then, go to your local folder

```sh
cd markdown-badge-crafter
```

Add git remote controls :

```sh
# Using HTTPS
git remote add fork https://github.com/YOUR-USERNAME/markdown-badge-crafter.git
git remote add upstream https://github.com/TheScienceUniverse/markdown-badge-crafter.git


# Using SSH
git remote add fork git@github.com:YOUR-USERNAME/markdown-badge-crafter.git
git remote add upstream git@github.com/TheScienceUniverse/markdown-badge-crafter.git
```

You can now verify that you have your two git remotes:

```sh
git remote -v
```

## Receive remote updates
In view of staying up to date with the central repository :

```sh
git pull upstream master
```

## Choose a base branch
Before starting development, you need to know which branch to base your modifications/additions on. When in doubt, use master.

| Type of change     |           | Branches              |
|:-------------------|:---------:|----------------------:|
| Documentation      |           | `master`              |
| Bug fixes          |           | `dev`                 |
| New features       |           | `dev`                 |
| New issues models  |           | `YOUR-USERNAME:patch` |

```sh
# Switch to the desired branch
git switch master

# Pull down any upstream changes
git pull

# Create a new branch to work on
git switch --create patch/1234-name-issue
```

Commit your changes, then push the branch to your fork with `git push -u fork` and open a pull request on the [repository](https://github.com/TheScienceUniverse/markdown-badge-crafter/) following the template provided above.

