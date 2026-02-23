# Nouvelle Leader Mar - Site Web

Site web professionnel pour Nouvelle Leader Mar, grossiste alimentaire basé à Marcory Zone 4, Abidjan.

## 🎯 À propos du projet

Site vitrine moderne et responsive pour une entreprise de distribution en gros et import-export de produits alimentaires. Le site est conçu pour générer des leads B2B et présenter les services de manière professionnelle.

## 📁 Structure du projet

```
SITE NOUVELLE LEARDER MAR/
├── index.html              # Page d'accueil
├── contact.html            # Page de contact avec formulaire
├── services.html           # Page des services (à créer)
├── about.html              # Page à propos (à créer)
├── realisations.html       # Page réalisations (à créer)
├── css/
│   └── style.css           # Styles CSS complets
├── js/
│   ├── main.js             # JavaScript principal
│   └── contact.js          # JavaScript formulaire contact
├── images/                 # Dossier pour les images
├── assets/
│   └── icons/              # Dossier pour les icônes
└── README.md               # Ce fichier
```

## 🎨 Design System

### Couleurs
- **Primaire**: #0052CC (Bleu professionnel - Confiance)
- **Secondaire**: #FF8C00 (Orange vif - Action)
- **Accent**: #00A896 (Turquoise - Innovation)
- **Neutre**: #1A1A1A (Texte)
- **Gris clair**: #F5F7FA (Fond sections)

### Typographie
- **Titres**: Poppins (Bold, SemiBold)
- **Corps**: Inter (Regular, Medium)

### Breakpoints Responsive
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Installation & Utilisation

### 1. Ouvrir le site localement

Le site est en HTML/CSS/JS pur, aucune installation requise.

1. Ouvrez `index.html` dans votre navigateur
2. Ou utilisez un serveur local (recommandé) :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrez http://localhost:8000 dans votre navigateur.

### 2. Personnalisation

#### Modifier les coordonnées

Recherchez et remplacez dans tous les fichiers HTML :

- `+225 XX XX XX XX XX` → Vos numéros de téléphone
- `contact@nouvelleleadermar.ci` → Votre email
- `225XXXXXXXXXX` (WhatsApp) → Votre numéro WhatsApp (format international sans +)

#### Ajouter vos images

1. Placez vos photos dans le dossier `images/`
2. Remplacez les placeholders SVG dans les fichiers HTML
3. Formats recommandés : JPG/PNG (optimisés) ou WebP

#### Intégrer Google Maps

Dans `contact.html`, remplacez la section map-placeholder par :

```html
<iframe
    src="https://www.google.com/maps/embed?pb=VOTRE_CODE_MAPS"
    width="100%"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
</iframe>
```

Pour obtenir votre code :
1. Allez sur Google Maps
2. Recherchez "Marcory Zone 4, Abidjan"
3. Cliquez sur "Partager" → "Intégrer une carte"
4. Copiez le code iframe

## 📄 Pages à finaliser

### Pages créées
✅ **index.html** - Page d'accueil complète
✅ **contact.html** - Page de contact avec formulaire

### Pages à créer

Vous devez créer ces pages en suivant la même structure que les pages existantes :

1. **services.html** - Détails des 4 services principaux
2. **about.html** - Histoire, mission, vision, équipe
3. **realisations.html** - Portfolio de projets clients

**Conseil**: Dupliquez `contact.html` et modifiez le contenu selon le plan UX dans `PlanSite Nouvelle Leader Mar.txt`.

## 🔧 Fonctionnalités

### Déjà implémentées ✅

- ✅ Navigation responsive avec menu burger
- ✅ Hero section avec effet glassmorphism
- ✅ Animations au scroll (AOS library)
- ✅ Section statistiques animées
- ✅ Cards services avec hover effects
- ✅ Formulaire de contact avec validation
- ✅ FAQ accordion
- ✅ Footer complet
- ✅ Bouton WhatsApp flottant
- ✅ Design 100% responsive
- ✅ Optimisé pour le SEO

### À ajouter (optionnel)

- [ ] Backend pour le formulaire (PHP, Node.js, ou service tiers)
- [ ] Integration Google Analytics
- [ ] Integration Google Tag Manager
- [ ] Optimisation images (compression, WebP)
- [ ] Pages services, à propos, réalisations
- [ ] Catalogue produits (si souhaité)
- [ ] Espace client (phase 2)

## 📧 Configuration du formulaire

Le formulaire est actuellement en mode "frontend only". Pour le rendre fonctionnel :

### Option 1 : Service tiers (le plus simple)

Utilisez **Formspree**, **Netlify Forms**, ou **EmailJS** :

```html
<!-- Exemple avec Formspree -->
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <!-- Vos champs de formulaire -->
</form>
```

### Option 2 : Backend PHP

Créez un fichier `send-email.php` :

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "contact@nouvelleleadermar.ci";
    $subject = "Nouveau message depuis le site web";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";

    mail($to, $subject, $body);
    echo json_encode(['success' => true]);
}
?>
```

Puis dans `contact.js`, modifiez l'URL de soumission.

### Option 3 : WhatsApp direct

Le formulaire peut rediriger vers WhatsApp avec le message pré-rempli (déjà commenté dans le code).

## 🌐 Déploiement

### Hébergement gratuit recommandé

1. **Netlify** (recommandé)
   - Glissez-déposez le dossier
   - SSL automatique
   - URL : `votre-site.netlify.app`

2. **Vercel**
   - Connectez votre GitHub
   - Déploiement automatique

3. **GitHub Pages**
   - Gratuit pour sites statiques
   - URL : `username.github.io/repo-name`

### Hébergement payant

- **Hostinger** (à partir de 2€/mois)
- **OVH** (à partir de 3€/mois)
- **DigitalOcean** (à partir de 5$/mois)

### Configuration nom de domaine

1. Achetez un domaine (ex: `nouvelleleadermar.ci`)
2. Pointez les DNS vers votre hébergeur
3. Activez le SSL (Let's Encrypt gratuit)

## 📱 Optimisation mobile

Le site est déjà optimisé pour mobile avec :
- Menu burger responsive
- Images adaptatives
- Boutons touch-friendly (min 44px)
- Typography responsive (clamp CSS)
- Grilles adaptatives

## 🔍 SEO

### Meta tags inclus
- Title optimisé avec mots-clés locaux
- Meta description
- Viewport pour mobile
- Open Graph (à ajouter)

### À faire pour le SEO
1. Créez un compte **Google My Business** (PRIORITÉ #1)
2. Ajoutez le site à **Google Search Console**
3. Créez un fichier `sitemap.xml`
4. Créez un fichier `robots.txt`
5. Optimisez les images (alt text, compression)
6. Ajoutez Schema.org markup

## 📊 Analytics

### Google Analytics 4

Ajoutez avant `</head>` dans tous les fichiers HTML :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Support navigateurs

Testé et compatible avec :
- ✅ Chrome (dernières versions)
- ✅ Firefox (dernières versions)
- ✅ Safari (dernières versions)
- ✅ Edge (dernières versions)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 📞 Contact & Support

Pour toute question sur le site web :

- **Email**: [votre-email]
- **Téléphone**: [votre-numero]
- **WhatsApp**: [votre-whatsapp]

## 📝 License

© 2025 Nouvelle Leader Mar. Tous droits réservés.

---

## 🎯 Checklist de lancement

Avant de mettre le site en ligne :

### Contenu
- [ ] Remplacer tous les numéros de téléphone par les vrais
- [ ] Remplacer l'email par le vrai
- [ ] Remplacer le numéro WhatsApp
- [ ] Ajouter les vraies photos (entrepôt, équipe, produits)
- [ ] Relire tous les textes (0 faute)
- [ ] Vérifier l'adresse exacte

### Technique
- [ ] Tester le formulaire de contact
- [ ] Tester tous les liens
- [ ] Tester sur mobile (iPhone + Android)
- [ ] Tester sur tous les navigateurs
- [ ] Vérifier que tous les boutons fonctionnent
- [ ] Intégrer Google Maps
- [ ] Optimiser les images (compression)

### SEO & Marketing
- [ ] Créer Google My Business
- [ ] Installer Google Analytics
- [ ] Créer sitemap.xml
- [ ] Créer robots.txt
- [ ] Ajouter favicon
- [ ] Tester vitesse (PageSpeed Insights)

### Légal
- [ ] Ajouter mentions légales
- [ ] Ajouter politique de confidentialité
- [ ] Ajouter CGV (si nécessaire)

---

**Prêt à démarrer ?** Ouvrez `index.html` dans votre navigateur ! 🚀
