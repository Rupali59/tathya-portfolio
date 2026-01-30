/**
 * GitHub Issue Template Utilities
 * Provides functions to create GitHub issues with specific templates
 */

export interface IssueTemplateOptions {
  template?: "bug_report" | "feature_request" | "documentation" | "question";
  title?: string;
  body?: string;
  labels?: string[];
  assignees?: string[];
}

export interface GitHubIssueConfig {
  owner: string;
  repo: string;
  baseUrl?: string;
}

// Default configuration for your repository
const DEFAULT_CONFIG: GitHubIssueConfig = {
  owner: "Rupali59",
  repo: "tathya-portfolio",
  baseUrl: "https://github.com",
};

/**
 * Creates a GitHub issue URL with the specified template and options
 */
export function createGitHubIssueUrl(
  config: GitHubIssueConfig = DEFAULT_CONFIG,
  options: IssueTemplateOptions = {},
): string {
  const { owner, repo, baseUrl } = config;
  const { template, title, body, labels, assignees } = options;

  // Base URL for creating new issues
  let url = `${baseUrl}/${owner}/${repo}/issues/new`;

  // Add template parameter if specified
  if (template) {
    url += `?template=${template}.yml`;
  }

  // Add query parameters
  const params = new URLSearchParams();

  if (title) {
    params.append("title", title);
  }

  if (body) {
    params.append("body", body);
  }

  if (labels && labels.length > 0) {
    params.append("labels", labels.join(","));
  }

  if (assignees && assignees.length > 0) {
    params.append("assignees", assignees.join(","));
  }

  // Append parameters to URL
  const paramString = params.toString();
  if (paramString) {
    url += template ? "&" : "?";
    url += paramString;
  }

  return url;
}

/**
 * Opens a GitHub issue creation page in a new tab
 */
export function openGitHubIssue(
  config: GitHubIssueConfig = DEFAULT_CONFIG,
  options: IssueTemplateOptions = {},
): void {
  const url = createGitHubIssueUrl(config, options);
  window.open(url, "_blank");
}

/**
 * Predefined issue creation functions for common scenarios
 */
export const GitHubIssues = {
  /**
   * Create a bug report issue
   */
  bugReport: (title?: string, additionalInfo?: string) => {
    const body = additionalInfo
      ? `\n\nAdditional Information:\n${additionalInfo}`
      : "";
    return openGitHubIssue(DEFAULT_CONFIG, {
      template: "bug_report",
      title: title ? `[Bug]: ${title}` : undefined,
      body: body || undefined,
    });
  },

  /**
   * Create a feature request issue
   */
  featureRequest: (title?: string, description?: string) => {
    const body = description ? `\n\nFeature Description:\n${description}` : "";
    return openGitHubIssue(DEFAULT_CONFIG, {
      template: "feature_request",
      title: title ? `[Feature]: ${title}` : undefined,
      body: body || undefined,
    });
  },

  /**
   * Create a documentation issue
   */
  documentation: (title?: string, details?: string) => {
    const body = details ? `\n\nDocumentation Details:\n${details}` : "";
    return openGitHubIssue(DEFAULT_CONFIG, {
      template: "documentation",
      title: title ? `[Docs]: ${title}` : undefined,
      body: body || undefined,
    });
  },

  /**
   * Create a question issue
   */
  question: (title?: string, question?: string) => {
    const body = question ? `\n\nQuestion:\n${question}` : "";
    return openGitHubIssue(DEFAULT_CONFIG, {
      template: "question",
      title: title ? `[Question]: ${title}` : undefined,
      body: body || undefined,
    });
  },

  /**
   * Open the template selection page
   */
  selectTemplate: () => {
    return openGitHubIssue(DEFAULT_CONFIG);
  },
};

/**
 * Utility to detect the current page context and suggest appropriate templates
 */
export function getContextualIssueTemplate(): IssueTemplateOptions["template"] {
  // You can extend this based on your application's routing
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  if (pathname.includes("/demo") || pathname.includes("/test")) {
    return "bug_report";
  }

  if (pathname.includes("/services") || pathname.includes("/about")) {
    return "feature_request";
  }

  // Default to bug report for general issues
  return "bug_report";
}

/**
 * Create an issue with contextual template based on current page
 */
export function createContextualIssue(title?: string, body?: string): void {
  const template = getContextualIssueTemplate();
  openGitHubIssue(DEFAULT_CONFIG, {
    template,
    title,
    body,
  });
}
