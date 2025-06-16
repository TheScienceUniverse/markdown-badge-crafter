# Contributing to markdown-badges

🎉 First off, thanks for taking the time to contribute!

We are open to, and grateful for, any contributions made by the community. By contributing to axios, you agree to abide by the [code of conduct](./CODE_OF_CONDUCT.md).

## The following steps are a set of guidelines for contributing to markdown-badges:

1. Create a [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the existing repository. This will be your local copy where you can propose new changes.

2. Update the local clone or make changes directly on the forked repo; Modify code and Test in your own system.

3. Commit with proper version name and changes (Changes, + Changed files)

4. Create a [Pull Request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request) with your proposed changes.

🥳, You are all done with the steps! Now just sit back and watch while your Pull request is reviewed and ultimately merged. 🎊


## Code Style

Please follow the [node style guide](https://github.com/felixge/node-style-guide).

## Commit Messages

Please follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Testing

Please update the tests to reflect your code changes. Pull requests will not be accepted if they are failing on GitHub actions.

## Documentation

Please update the [docs](README.md) accordingly so that there are no discrepancies between the API and the documentation.

## Developing

- `npm run test` run the jasmine and mocha tests
- `npm run build` run webpack and bundle the source
- `npm run version` prepare the code for release

Please don't include changes to `dist/` in your pull request. This should only be updated when releasing a new version.

## Running Examples

Examples are included in part to allow manual testing.

Running example in terminal

```bash
> npm start &
# Open 127.0.0.1:3000/?type=version&user={Your GitHub Username}&path={User or Organization Name}&repo={Repository Name}&branch={Branch Name}
```

___

Anyone who wants to understand and contribute to improve this project ANY WAY possible, is heartly welcome 🤗.

Please do not replicate as your own; just pull this repo, make contributions, and create merge request.

___

##### Thanks! again to ALL the [amazing contributors!](https://github.com/TheScienceUniverse/markdown-badge-crafter/graphs/contributors) 🙏.
