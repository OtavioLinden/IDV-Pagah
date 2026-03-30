# UI Design Rules

## No Native Alerts
- **Rule**: NEVER use native `window.alert()`, `window.confirm()`, or `window.prompt()`.
- **Reason**: They are blocking, non-customizable, and provide a poor user experience.
- **Alternative**: Use the custom `Toast` system for notifications and standard modal components for confirmations.
- **Enforcement**: Mandatory for all new features and refactors.
