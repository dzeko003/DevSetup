# Installation de Git

Git est un système de contrôle de version qui permet de suivre les modifications d’un projet et de collaborer avec d’autres développeurs.

## Prérequis

- Une connexion Internet
- Un ordinateur (Windows, macOS ou Linux)

---

## Installation sur Windows

### 1. Télécharger Git

Rendez-vous sur le site officiel :

https://git-scm.com

Cliquez sur **Download for Windows**.

### 2. Installer Git

Lancez le fichier téléchargé et suivez les étapes :

- Laissez les options par défaut (recommandé)
- Cliquez sur **Next** jusqu’à la fin de l’installation

### 3. Vérifier l'installation

Ouvrez le terminal (CMD ou PowerShell) et tapez :

```bash
git --version
```

Si Git est bien installé, une version s’affiche.

---

## Installation sur macOS

Utilisez Homebrew :

```bash
brew install git
```

Vérifiez ensuite :

```bash
git --version
```

---

## Installation sur Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git -y
```

Vérification :

```bash
git --version
```

---

## Configuration initiale

Après installation, configurez Git avec vos informations :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votreemail@example.com"
```

Vérification :

```bash
git config --list
```

---

## Notes

- **Notes :**
  - Git est indispensable pour travailler avec GitHub.
  - La configuration utilisateur est obligatoire pour identifier vos commits.
  - Il est recommandé de toujours vérifier l’installation avec `git --version`.
