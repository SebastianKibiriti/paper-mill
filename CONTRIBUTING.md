# Contributing to Toilet Paper Manufacturing Educational Website

Thank you for your interest in contributing to this educational resource! This guide will help you understand how to contribute effectively to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Style Guidelines](#style-guidelines)
- [Educational Content Guidelines](#educational-content-guidelines)

## 🤝 Code of Conduct

This project is committed to providing a welcoming and inclusive environment for all contributors. We expect all participants to:

- Be respectful and considerate in all interactions
- Focus on constructive feedback and collaboration
- Respect different viewpoints and experiences
- Help maintain a positive learning environment
- Report any unacceptable behavior to the project maintainers

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:
- Node.js 18 or higher
- pnpm (recommended) or npm
- Git for version control
- A code editor (VS Code recommended)

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/toilet-paper-manufacturing-website.git
   cd toilet-paper-manufacturing-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Contributing Guidelines

### Types of Contributions

We welcome the following types of contributions:

#### 🐛 Bug Fixes
- Fix responsive design issues
- Resolve accessibility problems
- Correct educational content errors
- Fix component functionality

#### ✨ New Features
- Additional interactive components
- Enhanced educational content
- Improved user experience features
- Performance optimizations

#### 📚 Documentation
- README improvements
- Code comments and documentation
- Educational content expansion
- API documentation

#### 🎨 Design Improvements
- UI/UX enhancements
- Accessibility improvements
- Mobile responsiveness
- Visual design refinements

### Development Workflow

1. **Check existing issues** - Look for related issues before starting work
2. **Create an issue** - Describe the problem or feature request
3. **Get approval** - Wait for maintainer feedback before starting large changes
4. **Develop** - Follow the style guidelines and best practices
5. **Test** - Ensure your changes work across different devices and browsers
6. **Submit PR** - Create a pull request with clear description

## 🔄 Pull Request Process

### Before Submitting

1. **Test your changes**
   ```bash
   # Build and test the application
   pnpm build --no-lint
   pnpm start
   
   # Test on different screen sizes
   # Verify all interactive components work
   # Check educational content accuracy
   ```

2. **Update documentation**
   - Update README if needed
   - Add comments to complex code
   - Update component documentation

3. **Follow commit conventions**
   ```bash
   # Use conventional commit format
   git commit -m "feat: add new quality testing component"
   git commit -m "fix: resolve mobile navigation issue"
   git commit -m "docs: update API documentation"
   ```

### Pull Request Template

When creating a pull request, include:

```markdown
## Description
Brief description of changes made

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Design improvement
- [ ] Educational content update

## Testing
- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Verified accessibility
- [ ] Checked educational accuracy

## Screenshots
Include screenshots for UI changes

## Additional Notes
Any additional context or considerations
```

### Review Process

1. **Automated checks** - Ensure all CI checks pass
2. **Code review** - Maintainer will review code quality and functionality
3. **Educational review** - Content accuracy will be verified
4. **Testing** - Changes will be tested across different environments
5. **Approval** - PR will be approved and merged

## 🐛 Issue Guidelines

### Reporting Bugs

When reporting bugs, include:

```markdown
## Bug Description
Clear description of the issue

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: [e.g., Chrome 91]
- Device: [e.g., iPhone 12, Desktop]
- Screen size: [e.g., 1920x1080, 375x667]

## Screenshots
Include screenshots if applicable
```

### Feature Requests

For feature requests, include:

```markdown
## Feature Description
Clear description of the proposed feature

## Educational Value
How this feature enhances the educational experience

## Implementation Ideas
Suggestions for how to implement the feature

## Additional Context
Any other relevant information
```

## 🎨 Style Guidelines

### Code Style

#### TypeScript/React
```typescript
// Use functional components with hooks
export default function ComponentName() {
  const [state, setState] = useState<Type>(initialValue);
  
  // Add "use client" for interactive components
  // Use proper TypeScript interfaces
  // Include accessibility attributes
}
```

#### CSS/Tailwind
```tsx
// Use Tailwind utility classes
<div className="bg-amber-50 p-6 rounded-lg shadow-md">
  {/* Maintain brown/white color scheme */}
  {/* Ensure responsive design */}
  {/* Follow spacing system */}
</div>
```

#### File Organization
```
src/
├── components/
│   ├── ComponentName.tsx     # PascalCase for components
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts             # camelCase for utilities
└── hooks/
    └── use-hook-name.ts     # kebab-case for hooks
```

### Design Guidelines

#### Color Scheme
- **Primary:** Amber/brown tones (#92400e, #78350f)
- **Background:** White and light amber (#fffbeb, #fef3c7)
- **Text:** Gray tones for readability
- **Accents:** Amber for highlights and interactions

#### Typography
- **Headings:** Bold weights (600-900)
- **Body:** Regular weight (400)
- **Font:** Inter from Google Fonts
- **Hierarchy:** Clear size and weight differences

#### Spacing
- **Sections:** 16-20 padding units
- **Components:** 6-8 padding units
- **Elements:** 2-4 margin/padding units
- **Consistent:** Use Tailwind spacing scale

## 📚 Educational Content Guidelines

### Content Accuracy

When contributing educational content:

1. **Verify information** - Ensure all technical details are accurate
2. **Cite sources** - Reference industry standards and practices
3. **Use clear language** - Make complex processes understandable
4. **Include context** - Explain why processes are important
5. **Update regularly** - Keep information current with industry changes

### Content Structure

#### Process Explanations
```markdown
## Process Name
Brief overview of the process

### Purpose
Why this step is necessary

### Technical Details
- Temperature: X°C
- Duration: X hours
- Pressure: X bar
- Chemical ratio: X%

### Quality Control
How this step is monitored and controlled
```

#### Interactive Components
- Provide clear instructions for user interaction
- Include helpful tooltips and explanations
- Ensure educational value is clear
- Make complex data accessible

### Content Review

All educational content will be reviewed for:
- Technical accuracy
- Educational value
- Clarity and readability
- Consistency with existing content
- Appropriate level of detail

## 🔧 Technical Guidelines

### Component Development

#### Interactive Components
```typescript
"use client";

import { useState } from "react";

interface ComponentProps {
  // Define clear interfaces
}

export default function InteractiveComponent({ props }: ComponentProps) {
  // Use appropriate state management
  // Include loading and error states
  // Implement proper accessibility
  // Add responsive design
}
```

#### Accessibility Requirements
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Provide alternative text for images
- Test with screen readers

#### Performance Considerations
- Optimize images and assets
- Use lazy loading where appropriate
- Minimize bundle size
- Implement proper caching
- Test on slower devices

### Testing Guidelines

#### Manual Testing Checklist
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS Safari, Android Chrome)
- [ ] Tablet devices and orientations
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Different network speeds

#### Component Testing
- [ ] All interactive elements work
- [ ] State management functions correctly
- [ ] Error handling works properly
- [ ] Loading states display appropriately
- [ ] Responsive design adapts correctly

## 📞 Getting Help

If you need help with contributing:

1. **Check existing documentation** - README, issues, and discussions
2. **Search for similar issues** - Someone may have faced the same problem
3. **Create a discussion** - For questions about implementation
4. **Contact maintainers** - For urgent issues or clarifications

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Pull Request Comments** - Code-specific discussions
- **Email** - info@papermillco.edu for educational content questions

## 🎯 Project Goals

Remember that this project aims to:

- **Educate** - Provide accurate, comprehensive information about toilet paper manufacturing
- **Engage** - Create interactive experiences that enhance learning
- **Inspire** - Encourage interest in manufacturing and industrial processes
- **Inform** - Share knowledge about environmental and quality considerations

Thank you for contributing to this educational resource! Your efforts help make manufacturing knowledge more accessible to everyone.

---

**Questions?** Feel free to reach out through GitHub issues or discussions. We're here to help!