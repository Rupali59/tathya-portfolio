#!/bin/bash

# Git Workflow Helper Scripts
# Usage: ./scripts/git-helpers.sh <command>

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_header() {
    echo -e "${BLUE}=== $1 ===${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not in a git repository!"
        exit 1
    fi
}

# Sync develop branch
sync_develop() {
    print_header "Syncing develop branch"
    git checkout develop
    git pull origin develop
    print_success "Develop branch synced"
}

# Create feature branch
create_feature() {
    if [ -z "$1" ]; then
        print_error "Please provide feature name: ./scripts/git-helpers.sh feature <name>"
        exit 1
    fi
    
    local feature_name="$1"
    local branch_name="feature/$feature_name"
    
    print_header "Creating feature branch: $branch_name"
    
    # Start from develop
    git checkout develop
    git pull origin develop
    
    # Create feature branch
    git checkout -b "$branch_name"
    git push -u origin "$branch_name"
    
    print_success "Feature branch '$branch_name' created and pushed"
}

# Create hotfix branch
create_hotfix() {
    if [ -z "$1" ]; then
        print_error "Please provide hotfix name: ./scripts/git-helpers.sh hotfix <name>"
        exit 1
    fi
    
    local hotfix_name="$1"
    local branch_name="hotfix/$hotfix_name"
    
    print_header "Creating hotfix branch: $branch_name"
    
    # Start from main
    git checkout main
    git pull origin main
    
    # Create hotfix branch
    git checkout -b "$branch_name"
    git push -u origin "$branch_name"
    
    print_success "Hotfix branch '$branch_name' created and pushed"
}

# Create release branch
create_release() {
    if [ -z "$1" ]; then
        print_error "Please provide version: ./scripts/git-helpers.sh release <version>"
        exit 1
    fi
    
    local version="$1"
    local branch_name="release/$version"
    
    print_header "Creating release branch: $branch_name"
    
    # Start from develop
    git checkout develop
    git pull origin develop
    
    # Create release branch
    git checkout -b "$branch_name"
    git push -u origin "$branch_name"
    
    print_success "Release branch '$branch_name' created and pushed"
}

# Finish feature (merge to develop)
finish_feature() {
    if [ -z "$1" ]; then
        print_error "Please provide feature name: ./scripts/git-helpers.sh finish-feature <name>"
        exit 1
    fi
    
    local feature_name="$1"
    local branch_name="feature/$feature_name"
    
    print_header "Finishing feature: $branch_name"
    
    # Switch to develop
    git checkout develop
    git pull origin develop
    
    # Merge feature branch
    git merge "$branch_name"
    git push origin develop
    
    # Delete feature branch
    git branch -d "$branch_name"
    git push origin --delete "$branch_name"
    
    print_success "Feature '$feature_name' merged to develop and branch deleted"
}

# Finish hotfix (merge to main and develop)
finish_hotfix() {
    if [ -z "$1" ]; then
        print_error "Please provide hotfix name: ./scripts/git-helpers.sh finish-hotfix <name>"
        exit 1
    fi
    
    local hotfix_name="$1"
    local branch_name="hotfix/$hotfix_name"
    
    print_header "Finishing hotfix: $branch_name"
    
    # Merge to main
    git checkout main
    git pull origin main
    git merge "$branch_name"
    git push origin main
    
    # Merge to develop
    git checkout develop
    git pull origin develop
    git merge "$branch_name"
    git push origin develop
    
    # Delete hotfix branch
    git branch -d "$branch_name"
    git push origin --delete "$branch_name"
    
    print_success "Hotfix '$hotfix_name' merged to main and develop, branch deleted"
}

# Clean up merged branches
cleanup() {
    print_header "Cleaning up merged branches"
    
    # Remove local merged branches (except main and develop)
    git branch --merged | grep -v "\*\|main\|develop" | xargs -n 1 git branch -d || true
    
    # Prune remote references
    git remote prune origin
    
    print_success "Cleanup completed"
}

# Show current status
status() {
    print_header "Current Git Status"
    
    echo "Current branch: $(git branch --show-current)"
    echo "Last commit: $(git log -1 --oneline)"
    echo ""
    
    echo "Recent branches:"
    git branch -a --sort=-committerdate | head -10
}

# Show help
show_help() {
    echo "Git Workflow Helper Scripts"
    echo ""
    echo "Usage: ./scripts/git-helpers.sh <command> [args]"
    echo ""
    echo "Commands:"
    echo "  sync-develop                    Sync develop branch with remote"
    echo "  feature <name>                  Create new feature branch"
    echo "  hotfix <name>                   Create new hotfix branch"
    echo "  release <version>               Create new release branch"
    echo "  finish-feature <name>           Merge feature to develop and cleanup"
    echo "  finish-hotfix <name>            Merge hotfix to main/develop and cleanup"
    echo "  cleanup                         Remove merged branches"
    echo "  status                          Show current git status"
    echo "  help                            Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./scripts/git-helpers.sh feature user-auth"
    echo "  ./scripts/git-helpers.sh hotfix security-patch"
    echo "  ./scripts/git-helpers.sh release v1.2.0"
    echo "  ./scripts/git-helpers.sh finish-feature user-auth"
}

# Main script logic
main() {
    check_git_repo
    
    case "${1:-help}" in
        "sync-develop")
            sync_develop
            ;;
        "feature")
            create_feature "$2"
            ;;
        "hotfix")
            create_hotfix "$2"
            ;;
        "release")
            create_release "$2"
            ;;
        "finish-feature")
            finish_feature "$2"
            ;;
        "finish-hotfix")
            finish_hotfix "$2"
            ;;
        "cleanup")
            cleanup
            ;;
        "status")
            status
            ;;
        "help"|*)
            show_help
            ;;
    esac
}

# Run main function with all arguments
main "$@"
