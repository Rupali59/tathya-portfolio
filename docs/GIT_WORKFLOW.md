# Git Workflow & Branching Strategy

## 🌿 Branch Structure

### **Main Branches**
- **`main`**: Production-ready code (stable releases only)
- **`develop`**: Integration branch for ongoing development

### **Supporting Branches**
- **`feature/*`**: New features (e.g., `feature/user-authentication`)
- **`hotfix/*`**: Critical production fixes (e.g., `hotfix/security-patch`)
- **`release/*`**: Release preparation (e.g., `release/v1.2.0`)

## 🔄 Workflow Process

### **1. Feature Development**
```bash
# Start from develop
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/new-feature

# Work on feature, commit changes
git add .
git commit -m "feat: add new feature"

# Push feature branch
git push -u origin feature/new-feature

# Create Pull Request: feature/new-feature → develop
```

### **2. Release Process**
```bash
# Start from develop
git checkout develop
git pull origin develop

# Create release branch
git checkout -b release/v1.2.0

# Final testing, bug fixes, version bumps
git add .
git commit -m "chore: prepare release v1.2.0"

# Merge to main
git checkout main
git merge release/v1.2.0
git tag v1.2.0
git push origin main --tags

# Merge back to develop
git checkout develop
git merge release/v1.2.0
git push origin develop

# Delete release branch
git branch -d release/v1.2.0
git push origin --delete release/v1.2.0
```

### **3. Hotfix Process**
```bash
# Start from main
git checkout main
git pull origin main

# Create hotfix branch
git checkout -b hotfix/critical-fix

# Fix the issue
git add .
git commit -m "fix: critical security issue"

# Merge to main
git checkout main
git merge hotfix/critical-fix
git tag v1.2.1
git push origin main --tags

# Merge back to develop
git checkout develop
git merge hotfix/critical-fix
git push origin develop

# Delete hotfix branch
git branch -d hotfix/critical-fix
git push origin --delete hotfix/critical-fix
```

## 🚀 CI/CD Integration

### **Build Checks**
- Runs on: `main`, `develop`, `feature/*`, `hotfix/*`, `release/*`
- Triggers: Push events and Pull Requests
- Validates: TypeScript, ESLint, Build process

### **Deployment**
- Runs on: `main` branch only
- Triggers: Push to main OR successful build checks
- Deploys: Production environment

## 📋 Branch Protection Rules

### **Main Branch**
- ✅ Require pull request reviews (2 reviewers)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Restrict pushes to main
- ✅ Require linear history

### **Develop Branch**
- ✅ Require pull request reviews (1 reviewer)
- ✅ Require status checks to pass
- ✅ Allow force pushes (for rebasing)

## 🏷️ Commit Message Convention

### **Format**
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### **Types**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `perf`: Performance improvements

### **Examples**
```bash
feat(auth): add user login functionality
fix(ui): resolve theme toggle hydration issue
docs(readme): update installation instructions
chore(deps): update dependencies to latest versions
```

## 🔧 Useful Git Commands

### **Branch Management**
```bash
# List all branches
git branch -a

# Switch to branch
git checkout <branch-name>

# Create and switch to new branch
git checkout -b <branch-name>

# Delete local branch
git branch -d <branch-name>

# Delete remote branch
git push origin --delete <branch-name>
```

### **Sync with Remote**
```bash
# Fetch all remote changes
git fetch --all

# Pull latest changes
git pull origin <branch-name>

# Push changes
git push origin <branch-name>

# Push with upstream tracking
git push -u origin <branch-name>
```

### **Cleanup**
```bash
# Remove merged branches
git branch --merged | grep -v "\*\|main\|develop" | xargs -n 1 git branch -d

# Prune remote references
git remote prune origin
```

## 🚨 Emergency Procedures

### **Revert a Release**
```bash
# Create revert commit
git checkout main
git revert <commit-hash>
git push origin main
```

### **Reset to Previous State**
```bash
# Soft reset (keeps changes)
git reset --soft HEAD~1

# Hard reset (discards changes)
git reset --hard HEAD~1
```

## 📊 Best Practices

1. **Always start from the correct base branch**
2. **Keep feature branches small and focused**
3. **Write descriptive commit messages**
4. **Test thoroughly before merging**
5. **Use Pull Requests for code review**
6. **Delete branches after merging**
7. **Tag releases consistently**
8. **Keep main branch stable**

## 🔗 Related Documentation

- [GitHub Actions Workflows](../.github/workflows/)
- [Project Documentation](./PROJECT_DOCUMENTATION.md)
- [Deployment Guide](./DEPLOYMENT.md)
