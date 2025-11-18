# GitHub Issue Template Redirection System

This system provides automatic redirection to specific GitHub issue templates when users create issues from your application.

## Features

- **Automatic Template Selection**: Redirects users to the appropriate issue template based on context
- **Pre-filled Data**: Automatically fills in title, body, and other fields
- **Multiple Templates**: Support for bug reports, feature requests, documentation, and questions
- **Contextual Intelligence**: Chooses templates based on the current page/context
- **Analytics Integration**: Track issue creation events
- **Customizable**: Easy to configure for different repositories and use cases

## Quick Start

### 1. Basic Usage

```tsx
import { GitHubIssues } from '@/lib/githubIssues';

// Simple bug report
<button onClick={() => GitHubIssues.bugReport()}>
  Report Bug
</button>

// Feature request with pre-filled data
<button onClick={() => GitHubIssues.featureRequest(
  "Dark Mode Toggle",
  "Add a dark mode toggle to the navigation bar"
)}>
  Request Feature
</button>
```

### 2. Contextual Issue Creation

```tsx
import { createContextualIssue } from '@/lib/githubIssues';

// Automatically chooses template based on current page
<button onClick={() => createContextualIssue()}>
  Report Issue
</button>
```

### 3. Custom Configuration

```tsx
import { createGitHubIssueUrl, openGitHubIssue } from '@/lib/githubIssues';

// Custom repository configuration
const customConfig = {
  owner: 'your-username',
  repo: 'your-repository',
  baseUrl: 'https://github.com'
};

// Create custom issue URL
const url = createGitHubIssueUrl(customConfig, {
  template: 'bug_report',
  title: '[Bug]: Custom Title',
  body: 'Custom issue description',
  labels: ['urgent', 'frontend']
});

// Open issue directly
openGitHubIssue(customConfig, {
  template: 'feature_request',
  title: '[Feature]: New Feature',
  body: 'Description of the new feature'
});
```

## Template URLs

Your GitHub issue templates are automatically accessible via these URLs:

- **Bug Report**: `https://github.com/Rupali59/tathya-portfolio/issues/new?template=bug_report.yml`
- **Feature Request**: `https://github.com/Rupali59/tathya-portfolio/issues/new?template=feature_request.yml`
- **Documentation**: `https://github.com/Rupali59/tathya-portfolio/issues/new?template=documentation.yml`
- **Question**: `https://github.com/Rupali59/tathya-portfolio/issues/new?template=question.yml`

## Contextual Template Selection

The system automatically chooses templates based on the current page:

- `/demo` or `/test` pages → Bug Report template
- `/services` or `/about` pages → Feature Request template  
- `/contact` pages → Question template
- Default → Bug Report template

## Integration Examples

### 1. Floating Action Button

```tsx
import FloatingActionButton from '@/components/common/FloatingActionButton';

// Simple version (uses contextual template)
<FloatingActionButton />

// Enhanced version with menu
<FloatingActionButton showMenu={true} />
```

### 2. Error Boundary Integration

```tsx
import { ErrorBoundaryWithIssueCreation } from '@/examples/githubIssuesExamples';

<ErrorBoundaryWithIssueCreation>
  <YourApp />
</ErrorBoundaryWithIssueCreation>
```

### 3. Form Integration

```tsx
const handleFormSubmit = (formData) => {
  GitHubIssues.bugReport(
    formData.title,
    `User: ${formData.email}\nIssue: ${formData.description}`
  );
};
```

### 4. Analytics Integration

```tsx
const handleIssueWithTracking = (issueType) => {
  // Track in analytics
  gtag('event', 'issue_created', {
    issue_type: issueType,
    page_location: window.location.href
  });
  
  // Create issue
  GitHubIssues[issueType]();
};
```

## Advanced Features

### Custom Query Parameters

You can add custom query parameters to pre-fill any field:

```tsx
const url = createGitHubIssueUrl(DEFAULT_CONFIG, {
  template: 'bug_report',
  title: '[Bug]: Login Issue',
  body: 'Users cannot log in with Google OAuth',
  labels: ['urgent', 'authentication'],
  assignees: ['developer-username']
});
```

### Multiple Templates

For repositories with multiple templates, you can specify which one to use:

```tsx
// Use specific template
GitHubIssues.bugReport('Title', 'Description');

// Or let the system choose
createContextualIssue('Title', 'Description');
```

### Template Validation

The system validates template names and provides fallbacks:

```tsx
// If template doesn't exist, falls back to default
openGitHubIssue(config, { template: 'non_existent_template' });
```

## Configuration

### Repository Configuration

Update the default configuration in `src/lib/githubIssues.ts`:

```tsx
const DEFAULT_CONFIG: GitHubIssueConfig = {
  owner: 'your-username',        // Your GitHub username
  repo: 'your-repository',       // Your repository name
  baseUrl: 'https://github.com' // GitHub base URL
};
```

### Template Configuration

Your templates are configured in `.github/ISSUE_TEMPLATE/`:

- `bug_report.yml` - Bug report template
- `feature_request.yml` - Feature request template  
- `documentation.yml` - Documentation template
- `question.yml` - Question template
- `config.yml` - Template configuration

## Best Practices

1. **Use Contextual Templates**: Let the system choose templates based on page context
2. **Pre-fill Data**: Provide helpful pre-filled titles and descriptions
3. **Track Analytics**: Monitor issue creation patterns
4. **Test Templates**: Ensure all templates work correctly
5. **Update Regularly**: Keep templates up-to-date with your project needs

## Troubleshooting

### Common Issues

1. **Template Not Found**: Ensure template files exist in `.github/ISSUE_TEMPLATE/`
2. **Wrong Repository**: Check the `owner` and `repo` configuration
3. **Permission Issues**: Ensure users have permission to create issues
4. **URL Encoding**: Special characters in titles/bodies are automatically encoded

### Debug Mode

Enable debug logging:

```tsx
// Add to your component
console.log('Issue URL:', createGitHubIssueUrl(config, options));
```

## Examples

See `src/examples/githubIssuesExamples.tsx` for comprehensive usage examples including:

- Simple buttons
- Form integration
- Error boundary integration
- Analytics integration
- Custom configurations

## Support

For issues with this system, create a bug report using the system itself! 🐛
