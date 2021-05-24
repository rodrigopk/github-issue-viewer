# Github Issue Viewer

A web-based GitHub issue viewer, built with rails and react. You can visit the application live at: https://github-issue-viewer-frontend.herokuapp.com

## Development and Testing

Detailed instructions to run the applications in development mode and run the tests for each project are in the specific [frontend](frontend/README.md) and [backend](backend/README.md) readme files.

## Future improvements

- Containerize both frontend and backend apps
- Add transitions on page navigation
- Repository list pagination
- Include user profile information in a sidebar
- Redirect users to signin page once access token is no longer valid
- Fix issue with html line breaks in markdown rendering component

## Considerations

The required feature list for this challenge was a bit too long for this to be used as a code challenge for a potential new hire in my opinion. I believe a slightly reduced scope (maybe cut out the detail page for the issues or even the issue list) might leave more room for ui improvements and code refactors.

That being said, I had quite some fun building the project. It gave me the chance to test out new versions of some libraries I had not used in a while, and to work with the github api, which I did very little work with previously.
