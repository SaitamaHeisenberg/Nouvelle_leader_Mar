# 🎨 CHARTE GRAPHIQUE OFFICIELLE - NOUVELLE LEADER MAR

**Basée sur l'analyse du logo officiel**

---

## 📸 LOGO ANALYSÉ

Fichier : `images/Logo_NOUVELLELEADERMAR.jpg`

**Description visuelle** :
- Cercle bleu royal avec bateau à voile blanc
- Fond dégradé cyan/turquoise (ciel)
- Voile turquoise moyen
- Vagues blanches et turquoise
- Texte "NOUVELLE LEADER - MAR" en cercle (bleu royal)
- Baseline : "SHIPAGENTS - SHIPCHANDLERS - IMPORT - EXPORT"

**Secteur** : Logistique maritime, import-export

---

## 🎨 PALETTE DE COULEURS OFFICIELLE

### Couleurs Primaires

#### 1. **Bleu Royal** (Primary)
```css
--color-primary-900: #001F99;  /* Très foncé */
--color-primary-800: #002DB3;
--color-primary-700: #0033CC;  /* ⭐ Couleur principale du logo */
--color-primary-600: #0039E6;
--color-primary-500: #0047FF;
--color-primary-400: #3366FF;
--color-primary-300: #6699FF;
--color-primary-200: #99BBFF;
--color-primary-100: #CCE0FF;
--color-primary-50: #E6F0FF;
```

**Usage** :
- Texte du logo
- Liens de navigation
- Titres principaux
- Bordures importantes
- Icônes primaires

---

#### 2. **Turquoise Moyen** (Secondary)
```css
--color-secondary-900: #006B7D;
--color-secondary-800: #008799;
--color-secondary-700: #00A3B5;
--color-secondary-600: #00BFCC;  /* ⭐ Voile du bateau */
--color-secondary-500: #00D4E8;
--color-secondary-400: #33DDEC;
--color-secondary-300: #66E6F1;
--color-secondary-200: #99EFF5;
--color-secondary-100: #CCF7FA;
--color-secondary-50: #E6FBFD;
```

**Usage** :
- Accents secondaires
- Backgrounds alternatifs
- Hover states
- Éléments graphiques

---

#### 3. **Cyan Clair** (Accent)
```css
--color-accent-900: #1BBFD1;
--color-accent-800: #2DD4E3;
--color-accent-700: #42E0ED;
--color-accent-600: #5DE7F0;  /* ⭐ Ciel du logo */
--color-accent-500: #6EF5FF;
--color-accent-400: #85F7FF;
--color-accent-300: #9DF9FF;
--color-accent-200: #B8FBFF;
--color-accent-100: #D6FDFF;
--color-accent-50: #EDFEFF;
```

**Usage** :
- Backgrounds légers
- Highlights
- Sections alternées
- Effets de survol subtils

---

### Couleurs Neutres

#### Blanc / Gris
```css
--color-white: #FFFFFF;
--color-gray-50: #F8FAFB;
--color-gray-100: #F1F5F7;
--color-gray-200: #E4EBF0;
--color-gray-300: #D1DCE5;
--color-gray-400: #9FB3C8;
--color-gray-500: #6B7F95;
--color-gray-600: #4A5F7A;
--color-gray-700: #2E3F56;
--color-gray-800: #1A2839;
--color-gray-900: #0D1724;
--color-black: #000000;
```

---

### Couleur CTA (Call-to-Action)

Puisque le logo n'a pas d'orange, on reste dans la palette maritime avec un turquoise vif pour les CTA :

```css
--color-cta: #00D4E8;           /* Turquoise vif */
--color-cta-hover: #00BFCC;     /* Plus foncé au hover */
--color-cta-active: #00A3B5;    /* Encore plus foncé */
```

**Alternative CTA** (si besoin d'un contraste maximal) :
```css
--color-cta-alt: #FF6B35;       /* Orange complémentaire */
--color-cta-alt-hover: #FF5722;
```

---

## 🎭 GRADIENTS

Basés sur les couleurs du logo :

```css
/* Gradient principal (comme le ciel du logo) */
--gradient-primary: linear-gradient(135deg, #5DE7F0 0%, #00D4E8 50%, #00BFCC 100%);

/* Gradient hero (dramatique) */
--gradient-hero: linear-gradient(135deg, #0033CC 0%, #00D4E8 100%);

/* Gradient overlay (semi-transparent) */
--gradient-overlay: linear-gradient(135deg, rgba(0, 51, 204, 0.92) 0%, rgba(0, 212, 232, 0.85) 100%);

/* Gradient CTA */
--gradient-cta: linear-gradient(90deg, #00D4E8 0%, #00BFCC 100%);

/* Gradient léger pour sections */
--gradient-light: linear-gradient(180deg, #E6FBFD 0%, #FFFFFF 100%);
```

---

## 📝 TYPOGRAPHIE

### Familles de polices

```css
--font-heading: 'Poppins', sans-serif;  /* Titres - moderne et bold */
--font-body: 'Inter', sans-serif;       /* Corps de texte - lisible */
--font-logo: 'Poppins', sans-serif;     /* Logo texte */
```

### Échelle typographique

```css
/* Desktop */
--fs-h1: clamp(2.5rem, 5vw, 3.5rem);    /* 40px → 56px */
--fs-h2: clamp(2rem, 4vw, 2.75rem);     /* 32px → 44px */
--fs-h3: clamp(1.5rem, 3vw, 2rem);      /* 24px → 32px */
--fs-h4: 1.25rem;                        /* 20px */
--fs-body-lg: 1.125rem;                  /* 18px */
--fs-body: 1rem;                         /* 16px */
--fs-body-sm: 0.875rem;                  /* 14px */
--fs-caption: 0.75rem;                   /* 12px */

/* Font weights */
--fw-light: 300;
--fw-regular: 400;
--fw-medium: 500;
--fw-semibold: 600;
--fw-bold: 700;
--fw-extrabold: 800;

/* Line heights */
--lh-tight: 1.2;
--lh-snug: 1.375;
--lh-normal: 1.5;
--lh-relaxed: 1.625;
--lh-loose: 2;
```

---

## 📏 SYSTÈME DE SPACING

Base 8px pour cohérence parfaite :

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Padding sections
```css
--section-padding-mobile: 3rem;   /* 48px */
--section-padding-tablet: 4rem;   /* 64px */
--section-padding-desktop: 5rem;  /* 80px */
```

---

## 🎨 COMPOSANTS

### 🔘 Boutons

#### Bouton Primary (CTA principal)
```css
.btn-primary {
    background: var(--gradient-cta);
    color: var(--color-white);
    padding: 12px 32px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    transition: all 300ms ease;
}

.btn-primary:hover {
    background: var(--color-cta-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 212, 232, 0.3);
}

.btn-primary:active {
    background: var(--color-cta-active);
    transform: translateY(0);
}
```

#### Bouton Secondary
```css
.btn-secondary {
    background: transparent;
    color: var(--color-primary-700);
    border: 2px solid var(--color-primary-700);
    padding: 12px 32px;
}

.btn-secondary:hover {
    background: var(--color-primary-700);
    color: var(--color-white);
}
```

---

### 🔗 Liens

```css
/* Liens navigation */
.nav-link {
    color: var(--color-primary-700);
    font-weight: 500;
    transition: color 200ms ease;
}

.nav-link:hover {
    color: var(--color-secondary-600);
}

.nav-link.active {
    color: var(--color-secondary-600);
    border-bottom: 2px solid var(--color-secondary-600);
}

/* Liens dans contenu */
a {
    color: var(--color-primary-600);
    text-decoration: underline;
    text-decoration-color: var(--color-accent-400);
}

a:hover {
    color: var(--color-secondary-600);
    text-decoration-color: var(--color-secondary-600);
}
```

---

### 📦 Cards

```css
.card {
    background: var(--color-white);
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 51, 204, 0.08);
    transition: all 300ms ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 51, 204, 0.15);
}
```

---

## 🎭 ÉTATS INTERACTIFS

### Hover
```css
--hover-lift: translateY(-2px);
--hover-scale: scale(1.02);
--hover-duration: 300ms;
--hover-easing: cubic-bezier(0.4, 0, 0.2, 1);
```

### Focus (accessibilité)
```css
--focus-ring: 0 0 0 3px rgba(0, 212, 232, 0.3);
--focus-outline: 2px solid var(--color-secondary-600);
```

### Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;
```

---

## 🌈 SECTIONS DU SITE

### Navbar
```css
background: var(--color-white);
logo-icon: var(--gradient-primary);
logo-text: var(--color-primary-700);
nav-links: var(--color-primary-700);
cta-button: var(--gradient-cta);
phone-icon: var(--color-secondary-600);
```

### Hero Section
```css
background: var(--gradient-hero);
overlay: var(--gradient-overlay);
text-color: var(--color-white);
cta-buttons: var(--color-cta);
```

### Sections alternées
```css
section-light: var(--color-gray-50);
section-accent: var(--gradient-light);
section-dark: var(--color-primary-700);
```

### Footer
```css
background: var(--color-primary-700);
text-color: var(--color-white);
links: var(--color-accent-400);
```

---

## 📱 RESPONSIVE

### Breakpoints
```css
--breakpoint-mobile: 480px;
--breakpoint-tablet: 768px;
--breakpoint-laptop: 992px;
--breakpoint-desktop: 1280px;
--breakpoint-wide: 1536px;
```

### Media queries
```css
@media (max-width: 992px) {
    /* Tablet & Mobile */
    --fs-h1: 2rem;
    --section-padding: var(--section-padding-mobile);
}

@media (min-width: 993px) {
    /* Desktop */
    --fs-h1: 3.5rem;
    --section-padding: var(--section-padding-desktop);
}
```

---

## ✅ CHECKLIST D'APPLICATION

### Navbar
- [x] Logo icône avec gradient turquoise/cyan
- [x] Logo texte bleu royal (#0033CC)
- [x] Liens navigation bleu royal
- [x] Hover liens → turquoise moyen
- [x] Bouton téléphone turquoise
- [x] CTA gradient turquoise

### Hero
- [x] Background gradient bleu → turquoise
- [x] Overlay semi-transparent
- [x] Texte blanc
- [x] CTA turquoise vif

### Sections
- [x] Alternance blanc / gris léger
- [x] Titres bleu royal
- [x] Accents turquoise
- [x] Icons turquoise/cyan

### Footer
- [x] Background bleu royal foncé
- [x] Texte blanc
- [x] Liens cyan clair

---

## 🎯 IDENTITÉ VISUELLE

**Ton général** : Professionnel, maritime, dynamique, moderne

**Associations** :
- Bleu royal = Confiance, professionnalisme, sérieux
- Turquoise = Mer, import-export, dynamisme
- Cyan clair = Fraîcheur, clarté, innovation
- Blanc = Propreté, transparence

**Mood** : Corporate moderne avec identité maritime forte

---

**Version** : 1.0
**Date** : Novembre 2025
**Basée sur** : Logo officiel NOUVELLE LEADER MAR
**Status** : ✅ Charte validée
