# Website Platform Analysis

_Hotel website with MEWS booking integration, non-technical admins, Japanese locale (EN + JA)._

---

## Quick Comparison

| | Webflow | Wix | Squarespace | Framer |
|---|---|---|---|---|
| **Easy Editor** | ⚠️ Moderate | ✅ Yes | ✅ Yes | ❌ Design-focused |
| **Mobile First** | ✅ | ✅ | ✅ | ✅ |
| **Japanese Locale** | ✅ Add-on | ✅ Included | ⚠️ Workaround needed | ⚠️ Limited |
| **CDN / Latency** | ✅ AWS CloudFront | ✅ Global CDN | ✅ Fastly | ✅ Vercel Edge |
| **MCP — Admin use** | ✅ Official | ✅ Official | ❌ None | ❓ Unconfirmed |
| **MCP — Dev use** | ✅ Official | ✅ Official | ❌ None | ❓ Unconfirmed |
| **Accessibility** | ✅ Enforced | ✅ Wizard | ✅ Templates | ⚠️ Manual |
| **hreflang support** | ✅ Auto (localization) | ✅ Auto (Multilingual) | ⚠️ Manual code injection | ⚠️ Manual |
| **MEWS Button Embed** | ✅ | ✅ | ✅ | ✅ |
| **MEWS API (P1)** | ✅ Custom code / Logic | ✅ Velo (JS platform) | ⚠️ Code injection only | ✅ Custom React |

> **Note:** Squarespace has no official MCP, which fails the stated requirement. It is included for completeness.

---

## MCP Support — Two Scenarios

### Scenario A: Admin editing via Claude
Non-technical admins describe changes in plain language ("Update the restaurant hours", "Replace this photo") and Claude applies them via MCP.

| Platform | MCP | Notes |
|---|---|---|
| Webflow | ✅ Official | CMS collections exposed via MCP; Claude can read/write content fields and page structure |
| Wix | ✅ Official | Content and page management via Wix MCP |
| Squarespace | ❌ None | Not viable for this scenario |
| Framer | ❓ Unconfirmed | No official MCP as of this writing — verify before committing |

### Scenario B: Developer tooling via Claude
Developer uses Claude to build and maintain site structure — new sections, components, templates.

| Platform | MCP | Notes |
|---|---|---|
| Webflow | ✅ Official | Full Designer API — create pages, components, styles, CMS schemas |
| Wix | ✅ Official | API-level site and content management |
| Squarespace | ❌ None | REST API exists but no MCP wrapper |
| Framer | ❓ Unconfirmed | Programmatic API exists but MCP layer unconfirmed |

---

## Platform Details

### Webflow

**Strengths:** Best-in-class semantic HTML output, first-party MCP for both scenarios, built-in localization with automatic `hreflang`, strong dev control for MEWS API work.

**Weaknesses:** Non-technical admins face a steeper learning curve even in simplified Editor mode — initial site build requires a designer or developer.

**Accessibility:** Outputs clean semantic HTML with enforced heading hierarchy. `hreflang` tags and locale routing (`/ja/`) are generated automatically when localization is enabled.

**MEWS Integration:**
- Button embed: paste HTML snippet into a custom code component — no code knowledge needed after setup.
- MEWS API: via custom code embed or Webflow Logic (visual automation layer).

**Localization:** Built-in Localization feature supports multiple locales. EN is the base; Japanese added as a secondary locale. Content managed per-locale in the CMS. `hreflang` injected automatically.

**Pricing:**

| Tier | Monthly (annual billing) | Highlights | Under $100? |
|---|---|---|---|
| Basic | $14/mo | Custom domain, no CMS | ✅ |
| CMS | $23/mo | CMS collections, 2 editors | ✅ |
| **Business** | **$39/mo** | **10 editors, form submissions** | **✅ ← Recommended** |
| Enterprise | Custom | SLA, SSO, advanced security | — |
| Localization add-on | ~$9/mo per locale | Required for Japanese | — |

_Recommended: **Business + 1 locale = ~$48/mo**_

**Advanced features (not needed now):**
- Memberships and content gating
- E-commerce (products, checkout)
- Logic (visual workflow automation)
- A/B testing via third-party integrations
- Staging environments

---

### Wix

**Strengths:** Easiest drag-and-drop editor available. Built-in AI assistant (Wix AI) lowers the bar further for non-technical admins. Official MCP. Japanese multilingual included in standard tiers.

**Weaknesses:** Less design precision than Webflow. Template lock-in after publish (cannot switch templates). Performance can degrade on content-heavy pages.

**Accessibility:** Accessibility Wizard built into the editor flags issues inline. `hreflang` generated automatically via Wix Multilingual. Heading semantics guided but not strictly enforced.

**MEWS Integration:**
- Button embed: Wix HTML embed widget — paste and done.
- MEWS API: Velo (Wix's JavaScript development platform) can call external REST APIs from the front-end or serverless functions.

**Localization:** Wix Multilingual app adds a language switcher and per-language content management. Japanese supported. `hreflang` tags generated automatically. Included in Core tier and above.

**Pricing:**

| Tier | Monthly (annual billing) | Highlights | Under $100? |
|---|---|---|---|
| Light | $17/mo | Custom domain, removes Wix ads | ✅ |
| **Core** | **$29/mo** | **5 GB storage, analytics, Multilingual** | **✅ ← Recommended** |
| Business | $36/mo | 50 GB storage, events, marketing tools | ✅ |
| Business Elite | $159/mo | Unlimited storage, priority support | ❌ |

_Recommended: **Core = $29/mo** (multilingual included, no add-on needed)_

**Advanced features (not needed now):**
- Wix Stores (e-commerce)
- Wix Bookings (separate booking system — conflicts with MEWS)
- Wix Events and ticketing
- Wix Loyalty program
- Wix Ascend marketing suite

---

### Squarespace

> ⚠️ **Fails MCP requirement.** Included for completeness only.

**Strengths:** Polished templates, strong image handling, predictable editing experience with a low learning curve.

**Weaknesses:** No MCP (no Scenario A or B). Japanese localization requires workarounds — no native multilingual. `hreflang` must be injected manually via code blocks.

**Accessibility:** Clean semantic templates, but heading hierarchy is not enforced and `hreflang` is manual.

**MEWS Integration:**
- Button embed: code block injection.
- MEWS API: limited to code injection; no structured API layer equivalent to Velo or Webflow Logic.

**Localization:** No native multilingual. Approaches include duplicate pages per language or a third-party service. `hreflang` requires manual code injection on every page.

**Pricing:**

| Tier | Monthly (annual billing) | Highlights | Under $100? |
|---|---|---|---|
| Personal | $16/mo | Custom domain, basic pages | ✅ |
| **Business** | **$23/mo** | **Custom code injection, analytics** | **✅ ← Recommended if selected** |
| Commerce Basic | $28/mo | E-commerce features | ✅ |
| Commerce Advanced | $52/mo | Subscriptions, abandoned cart | ✅ |

**Advanced features (not needed now):**
- Squarespace Commerce
- Member areas and gating
- Email campaigns
- Video studio

---

### Framer

> ⚠️ **Not recommended for this project.** Editor is design-tool-oriented and not suitable for non-technical admins without significant setup work.

**Strengths:** Excellent performance via Vercel edge network, modern React component model, best-in-class animation capabilities.

**Weaknesses:** Editing interface assumes design literacy — steep for hotel staff. MCP unconfirmed. Japanese localization and CMS translation less mature than Webflow or Wix.

**Accessibility:** Semantic output is good but largely manual. `hreflang` requires custom implementation.

**MEWS Integration:**
- Button embed: Custom code component.
- MEWS API: Custom React components; requires developer involvement.

**Localization:** Localization feature exists but Japanese CMS translation workflow is not well documented. `hreflang` must be configured manually.

**Pricing:**

| Tier | Monthly (annual billing) | Highlights | Under $100? |
|---|---|---|---|
| Free | $0 | Framer subdomain | ✅ |
| Mini | $5/mo | Custom domain, 1 page | ✅ |
| Basic | $15/mo | Unlimited pages, CMS | ✅ |
| **Pro** | **$35/mo** | **Password protection, analytics** | **✅ ← Recommended if selected** |
| Enterprise | Custom | SSO, SLA | — |

**Advanced features (not needed now):**
- React component overrides
- Custom CMS API
- Advanced animations and interactions
- Variable font support

---

## Summary Recommendation

| Rank | Platform | Monthly Cost | Reason |
|---|---|---|---|
| **1st** | **Wix (Core)** | **$29/mo** | Easiest editor for non-technical admins, official MCP (both scenarios), Japanese built-in, lowest cost |
| **2nd** | **Webflow (Business + locale)** | **~$48/mo** | Best design/accessibility output, official MCP, strongest MEWS API path, better dev control long-term |
| — | Squarespace | $23/mo | No MCP — disqualified |
| — | Framer | $35/mo | Editor unsuited for non-technical admins; MCP unconfirmed |

**Choose Wix** if admin ease and lowest cost are the top priorities.  
**Choose Webflow** if MEWS API depth, design quality, or long-term developer control matter more.

---

_Prices are based on publicly listed annual billing rates as of May 2026. Confirm current pricing at each vendor's site before committing. Add-on pricing (Webflow localization) should also be verified._
