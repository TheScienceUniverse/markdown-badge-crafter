# Contributing to markdown-badge-crafter

🎉 First off, thanks for taking the time to contribute!

## The following steps are a set of guidelines for contributing to markdown-badge-crafter:

1. Create a [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the existing repository. This will be your local copy where you can introduce or remove changes.

2. Update the local clone or make changes directly on the forked repo; Modify code and Test in your own system.

3. Commit with proper Conventional Commit Message Format (desctibed below) with GPG signature, or it won't be granted.

4. Create a [Pull Request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request) with your proposed changes.

🥳, You are all done with the steps! Now just sit back and watch while your Pull request is reviewed and ultimately merged. 🎊

___

Anyone who wants to understand and contribute to improve this project ANY WAY possible, is heartly welcome 🤗.

Please do not replicate as your own; just pull this repo, make contributions, and create merge request.

___

##### Thanks! again to ALL the [amazing contributors!](https://github.com/TheScienceUniverse/markdown-badge-crafter/graphs/contributors) 🙏.

___


# Conventional Commits

## The Conventional Commits specification is a lightweight convention on top of commit messages.

The commit contains the following structural elements, to communicate intent to the consumers of your library.
It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.
This convention dovetails with [semantic versioning](http://semver.org) by describing the features, fixes, and breaking changes made in commit messages.

## Commit Message Format:

The following commit format, which is derrived from conventional commits, must be followed to get acceptance of the pull request.
The units of information that make up Conventional Commits MUST NOT be treated as case sensitive by implementors, with the exception of BREAKING CHANGE which MUST be uppercase.

```
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer(s)>
```

### Header:

Below is the header format that to be followed down the line.

```
<type>(<scope>)(!): <summary>
  |       |          |
  |       |          +-> Summary in present tense. Not capitalized. No period at the end.
  |       |
  |       +-> Commit Scope: api|autheliabot|authentication|authorization|buildkite|bundler|clock|
  |                          cmd|codecov|commands|configuration|deps|docker|duo|go|golangci-lint|
  |                          handlers|husky|logging|metrics|middlewares|mocks|model|notification|
  |                          npm|ntp|oidc|random|regulation|renovate|reviewdog|server|session|
  |                          storage|suites|templates|totp|utils|web
  |
  +-> Commit Type: build|ci|docs|feat|fix|i18n|perf|refactor|release|revert|test
```

### Type

Commits MUST be prefixed with a **type**, which consists of a noun, `feat`, `fix`, etc., followed by the OPTIONAL scope, OPTIONAL `!`, and REQUIRED terminal colon and space, e.g. `fix:`. Here are available commit types and their usage.

- `feat`: This MUST be used when a commit adds a new *feature* for the application or library. This is same as `MINOR` in [markdown-badge-crafter](http://markdown-badge-crafter.org/#summary)
- `fix`: This MUST be used when a commit represents a *bug fix* for the application. This is same as `PATCH` in [markdown-badge-crafter](http://markdown-badge-crafter.org/#summary)
- `release`: Releasing a new *version*; like `BREAKING-CHANGE` in [markdown-badge-crafter](http://markdown-badge-crafter.org/#summary)
- `build`: Changes that affect the *build system* or *external dependencies* (example scopes: bundler, deps, docker, go, npm, gcc, clang) 
- `test`: Testing suit changes for the whole software
- `revert`: Go backs to earlier version of code with a new branch/commit
- `refactor`: A code change that neither fixes a bug nor adds a feature, but makes easier to lint by programmer or IDE
- `chore`: Updating *grunt tasks*, *miscellaneous changes* etc; having no production code change
- `ci`: Changes to our Continuous Integration configuration files and scripts (example scopes: N/A)
- `perf`: A code change that improves performance
- `docs`: Documentation only changes
- `i18n`: Updating translations or internationalization settings


### Scope

- A **scope** MAY be provided after a type. A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., `fix (parser):`


### Breaking-Change Flag

- feat: - BREAKING CHANGE: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with (http://markdown-badge-crafter.org/#summary)`MAJOR` in Semantic Versioning).

### Summary

- A description MUST immediately follow the colon and space after the type/scope prefix. The description is a short **summary** of the code changes, e.g., `fix (parser): array parsing issue when multiple spaces were contained in string`

### Commit Body:

- A longer commit **body** MAY be provided after the summary, providing additional contextual information about the code changes. The body MUST begin one blank line after the description. A commit body is free-form and MAY consist of any number of newline separated paragraphs.

### Commit Footer(s):

- One or more **footers** MAY be provided one blank line after the body. Each footer MUST consist of a word token, followed by either a `:<SPACE>` or `<SPACE>#` separator, followed by a string value (this is inspired by the [git trailer conventions](https://git-scm.com/docs/git-interpret-trailers)).
- A footer&rsquo;s token MUST use `-` in place of whitespace characters, e.g., `Acked-by` (this helps differentiate the footer section from a multi-paragraph body). An exception is made for `BREAKING CHANGE`, which MAY also be used as a token.
- A footer&rsquo;s value MAY contain spaces and newlines, and parsing MUST terminate when the next valid footer token/separator pair is observed.
- Breaking changes MUST be indicated in the type/scope prefix of a commit, or as an entry in the footer.
- If included as a footer, a breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon, space, and description, e.g., BREAKING CHANGE: environment variables now take precedence over config files.
- A BREAKING CHANGE can be part of commits of any type.
- BREAKING-CHANGE MUST be synonymous with BREAKING CHANGE, when used as a token in a footer.
- If included in the type/scope prefix, breaking changes MUST be indicated by a `!` immediately before the `:`. If `!` is used, `BREAKING CHANGE:` MAY be omitted from the footer section, and the commit description SHALL be used to describe the breaking change.


These are collection and compilation to the official commit conventions by [Git](https://git-scm.com/docs/git-interpret-trailers), [GitHub](), [Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines), [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), [Semantic Versioning](http://markdown-badge-crafter.org/#summary), [Authelia](https://www.authelia.com/contributing/guidelines/commit-message/), etc.
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).


## Examples

- Commit message with description and breaking change footer:

```
feat: send an email to the customer when a product is shipped

BREAKING CHANGE: extends key in config file is now used for extending other config files
```

- Commit message with `!` to draw attention to breaking change:

```
feat!: send an email to the customer when a product is shipped
```

- Commit message with scope and `!` to draw attention to breaking change:

```
feat (api)!: send an email to the customer when a product is shipped
```

- Commit message with both `!` and BREAKING CHANGE footer:

```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

Commit message with no body:

```
docs: correct spelling of CHANGELOG
```

Commit message with scope:

```
feat (lang): add Polish language
```

Commit message with multi-paragraph body and multiple footers:

```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: XYZ
Refs: #123
```

## Why use Conventional Commits

- Automatically generating CHANGELOGs.
- Automatically determining a semantic version bump (based on the types of commits landed).
- Communicating the nature of changes to teammates, the public, and other stakeholders.
- Triggering build and publish processes.
- Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.
