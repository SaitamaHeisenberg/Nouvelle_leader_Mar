#!/bin/bash
# =========================================
# DEPLOY SCRIPT - Nouvelle Leader Mar
# Commit + Push + Deploy Netlify
# =========================================

# Couleurs
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo ""
echo -e "${CYAN}=========================================${NC}"
echo -e "${CYAN}  Nouvelle Leader Mar - Auto Deploy${NC}"
echo -e "${CYAN}=========================================${NC}"
echo ""

# Vérifier qu'on est dans un repo git
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo -e "${RED}Erreur: pas dans un dépôt Git.${NC}"
    exit 1
fi

# Vérifier s'il y a des changements
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
    echo -e "${YELLOW}Aucun changement détecté. Rien à déployer.${NC}"
    exit 0
fi

# Afficher les fichiers modifiés
echo -e "${YELLOW}Fichiers modifiés:${NC}"
git status --short
echo ""

# Message de commit
if [ -n "$1" ]; then
    COMMIT_MSG="$1"
else
    read -p "Message de commit: " COMMIT_MSG
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="Update site $(date +'%Y-%m-%d %H:%M')"
    fi
fi

# Git add + commit + push
echo ""
echo -e "${CYAN}[1/3] Commit...${NC}"
git add -A
git commit -m "$COMMIT_MSG"

if [ $? -ne 0 ]; then
    echo -e "${RED}Erreur lors du commit.${NC}"
    exit 1
fi
echo -e "${GREEN}Commit OK${NC}"

echo ""
echo -e "${CYAN}[2/3] Push sur GitHub...${NC}"
git push

if [ $? -ne 0 ]; then
    echo -e "${RED}Erreur lors du push.${NC}"
    exit 1
fi
echo -e "${GREEN}Push OK${NC}"

echo ""
echo -e "${CYAN}[3/3] Deploy Netlify...${NC}"
netlify deploy --prod --dir=.

if [ $? -ne 0 ]; then
    echo -e "${RED}Erreur lors du deploy Netlify.${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  Deploy terminé avec succès !${NC}"
echo -e "${GREEN}  https://nouvelle-leader-mar.netlify.app${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
