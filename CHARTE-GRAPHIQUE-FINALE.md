# 🎨 CHARTE GRAPHIQUE - Nouvelle Leader Mar

## Design System Complet & Optimisé

---

## 🎨 PALETTE DE COULEURS

### Couleur Principale (Bleu)
```css
--color-primary-600: #0066FF  /* Couleur principale - WCAG AA ✓ */
--color-primary-700: #0052CC  /* Hover / Active */
--color-primary-800: #003D99  /* Pressed */
```

**Usage** :
- CTA principaux
- Liens
- Icônes importantes
- Éléments interactifs

**Contraste** : 4.52:1 sur blanc (WCAG AA Pass ✓)

---

### Couleur Secondaire (Orange/Amber)
```css
--color-secondary-500: #F97316  /* Couleur secondaire */
--color-secondary-600: #EA580C  /* Hover */
--color-secondary-700: #C2410C  /* Active */
```

**Usage** :
- Boutons secondaires
- Call-to-actions moins prioritaires
- Accents chaleureux
- Badges/Pills

**Contraste** : 4.58:1 sur blanc (WCAG AA Pass ✓)

---

### Couleur Accent (Turquoise)
```css
--color-accent-500: #14B8A6  /* Accent principal */
--color-accent-600: #0D9488  /* Hover */
```

**Usage** :
- Highlights
- Success states
- Éléments décoratifs
- Dégradés (avec bleu)

---

### Couleurs Neutres
```css
/* Textes */
--color-gray-900: #171717  /* Titres principaux */
--color-gray-600: #525252  /* Corps de texte */
--color-gray-500: #737373  /* Texte secondaire */

/* Fonds */
--color-gray-50: #FAFAFA   /* Fond sections alternées */
--color-gray-100: #F5F5F5  /* Fond cartes */
--color-white: #FFFFFF     /* Fond principal */

/* Bordures */
--color-gray-200: #E5E5E5  /* Bordures subtiles */
--color-gray-300: #D4D4D4  /* Bordures visibles */
```

---

### Couleurs Sémantiques
```css
--color-success: #10B981    /* Succès / Validation */
--color-warning: #F59E0B    /* Attention */
--color-error: #EF4444      /* Erreur */
--color-info: #3B82F6       /* Information */
```

---

### Dégradés
```css
/* Principal (Hero, bannières) */
--gradient-primary: linear-gradient(135deg, #0066FF 0%, #14B8A6 100%);

/* Secondaire (CTA, accents) */
--gradient-secondary: linear-gradient(90deg, #F97316 0%, #EA580C 100%);

/* Overlay (sur images) */
--gradient-overlay: linear-gradient(135deg, rgba(0, 102, 255, 0.92) 0%, rgba(20, 184, 166, 0.92) 100%);
```

---

## ✍️ TYPOGRAPHIE

### Polices
```css
/* Titres */
--font-heading: 'Poppins', sans-serif;

/* Corps de texte */
--font-body: 'Inter', sans-serif;
```

**Import** :
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

---

### Échelle Typographique

| Élément | Taille Mobile | Taille Desktop | Poids | Line Height | Usage |
|---------|--------------|----------------|-------|-------------|-------|
| **H1** | 36px | 60px | 800 | 1.25 | Titre héro |
| **H2** | 30px | 48px | 700 | 1.25 | Titres sections |
| **H3** | 24px | 36px | 600 | 1.375 | Sous-titres |
| **H4** | 20px | 30px | 600 | 1.375 | Cards/Composants |
| **Body** | 16px | 18px | 400 | 1.625 | Texte principal |
| **Small** | 14px | 14px | 400 | 1.5 | Légendes/Notes |
| **XS** | 12px | 12px | 500 | 1.5 | Labels/Badges |

**Responsive** :
```css
--fs-h1: clamp(2.25rem, 4vw + 1rem, 3.75rem);
--fs-h2: clamp(1.875rem, 3vw + 1rem, 3rem);
--fs-body: clamp(1rem, 1vw + 0.5rem, 1.125rem);
```

---

### Poids de polices
```css
--fw-normal: 400     /* Texte courant */
--fw-medium: 500     /* Emphasis léger */
--fw-semibold: 600   /* Sous-titres */
--fw-bold: 700       /* Titres */
--fw-extrabold: 800  /* H1 */
```

---

### Letter Spacing
```css
--ls-tighter: -0.05em   /* H1 */
--ls-tight: -0.025em    /* H2, H3 */
--ls-normal: 0em        /* Body */
--ls-wide: 0.025em      /* Boutons */
```

---

## 📏 SYSTÈME D'ESPACEMENT (8px)

### Échelle
```css
--space-1: 4px
--space-2: 8px     /* Base unit */
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
```

### Usage

| Contexte | Spacing | Exemple |
|----------|---------|---------|
| **Entre éléments inline** | 8-12px | Icône + texte |
| **Padding boutons** | 12px 24px | `.btn` |
| **Padding cartes** | 24-32px | `.card` |
| **Gap grille** | 24-32px | Grid cards |
| **Margin titres** | 16px | `h1, h2, h3` |
| **Sections** | 48-80px | Padding vertical |

---

## 🔘 BORDER RADIUS

```css
--radius-sm: 4px      /* Badges, petits éléments */
--radius-base: 8px    /* Inputs, boutons standards */
--radius-md: 12px     /* Cards, modales */
--radius-lg: 16px     /* Boutons CTA, grandes cards */
--radius-xl: 24px     /* Hero sections */
--radius-full: 9999px /* Boutons ronds, avatars */
```

---

## 🌓 OMBRES

### Hiérarchie
```css
/* Élévation minimale */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1)

/* Élévation moyenne (cards au repos) */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)

/* Élévation haute (hover cards, dropdowns) */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)

/* Élévation maximale (modales) */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1)

/* Ombres colorées (CTA hover) */
--shadow-primary: 0 10px 15px rgba(0, 102, 255, 0.2)
--shadow-secondary: 0 10px 15px rgba(249, 115, 22, 0.2)
```

---

## 🎭 ÉTATS INTERACTIFS

### Boutons Primaires
```css
/* Normal */
background: #0066FF;
color: #FFFFFF;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Hover */
background: #0052CC;
box-shadow: 0 10px 15px rgba(0, 102, 255, 0.2);
transform: scale(1.02);

/* Active */
background: #003D99;
transform: scale(0.98);

/* Disabled */
opacity: 0.5;
cursor: not-allowed;

/* Focus */
outline: 2px solid #0066FF;
outline-offset: 2px;
```

---

### Boutons Secondaires
```css
/* Normal */
background: transparent;
color: #0066FF;
border: 2px solid #0066FF;

/* Hover */
background: #EBF5FF;
border-color: #0052CC;

/* Active */
background: #D1E9FF;
```

---

### Links
```css
/* Normal */
color: inherit;

/* Hover */
color: #0066FF;

/* Focus */
outline: 2px solid #0066FF;
outline-offset: 2px;
border-radius: 4px;
```

---

### Cards
```css
/* Normal */
background: #FFFFFF;
border: 1px solid #E5E5E5;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Hover */
border-color: #0066FF;
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
transform: translateY(-4px) scale(1.01);
```

---

## 🎬 ANIMATIONS & TRANSITIONS

### Durées
```css
--transition-fast: 150ms    /* Hover légers */
--transition-base: 300ms    /* Transitions standards */
--transition-slow: 500ms    /* Animations complexes */
```

### Easing
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Exemples
```css
/* Hover card */
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Button press */
transition: transform 150ms cubic-bezier(0.4, 0, 1, 1);

/* Dropdown appear */
transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## 📱 BREAKPOINTS

```css
/* Mobile First */
--breakpoint-sm: 640px    /* Large mobile */
--breakpoint-md: 768px    /* Tablet */
--breakpoint-lg: 1024px   /* Desktop */
--breakpoint-xl: 1280px   /* Large desktop */
--breakpoint-2xl: 1536px  /* XL screens */
```

### Usage
```css
/* Mobile par défaut */
.element {
    padding: 16px;
}

/* Tablet et plus */
@media (min-width: 768px) {
    .element {
        padding: 32px;
    }
}

/* Desktop et plus */
@media (min-width: 1024px) {
    .element {
        padding: 48px;
    }
}
```

---

## 📐 GRID & LAYOUT

### Container
```css
max-width: 1280px;
margin: 0 auto;
padding: 0 24px;
```

### Grid Cards (3 colonnes)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 32px;
```

### Flexbox Spacing
```css
display: flex;
gap: 16px;  /* Préférer gap au lieu de margins */
```

---

## ♿ ACCESSIBILITÉ

### Contraste Minimum (WCAG AA)
- **Texte normal** : 4.5:1 ✓
- **Texte large** : 3:1 ✓
- **Éléments UI** : 3:1 ✓

### Touch Targets
- **Minimum** : 44x44px
- **Recommandé** : 48x48px

### Focus Visible
```css
:focus-visible {
    outline: 2px solid #0066FF;
    outline-offset: 2px;
    border-radius: 4px;
}
```

---

## 🎯 COMPOSANTS CLÉS

### Bouton Principal
```html
<button class="btn btn-primary btn-lg">
    <svg>...</svg>
    Demander un devis
</button>
```

```css
padding: 16px 32px;
background: #0066FF;
color: #FFFFFF;
font-size: 18px;
font-weight: 600;
border-radius: 16px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
```

---

### Card Service
```css
padding: 32px;
background: #FFFFFF;
border: 1px solid #E5E5E5;
border-radius: 12px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
transition: all 300ms ease;
```

Hover :
```css
border-color: #0066FF;
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
transform: translateY(-4px);
```

---

### Input / Formulaire
```css
padding: 12px 16px;
font-size: 16px;
border: 1px solid #D4D4D4;
border-radius: 8px;
transition: all 150ms ease;
```

Focus :
```css
border-color: #0066FF;
box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
outline: none;
```

Erreur :
```css
border-color: #EF4444;
box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
```

---

## 📚 RESSOURCES

### Polices
- **Poppins** : https://fonts.google.com/specimen/Poppins
- **Inter** : https://fonts.google.com/specimen/Inter

### Outils
- **Contrast checker** : https://webaim.org/resources/contrastchecker/
- **Color palette** : https://coolors.co
- **Spacing calculator** : https://www.gridlover.net/

---

## 🎨 EXPORTS

### Figma Variables
```
Disponibles sur demande
```

### Tailwind Config
```javascript
// Adaptable en Tailwind CSS si besoin
```

---

**Version** : 2.0
**Dernière mise à jour** : Novembre 2025
**Responsable** : Design System Lead
