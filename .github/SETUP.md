# Mujarrib — Setup e comandi

## Struttura del repo

```
/Mujarrib
├── content/          ← note Obsidian (apri questa cartella come vault)
│   ├── index.md      ← homepage del garden
│   ├── atomic/       ← note atomiche
│   ├── maps/         ← MOC (Maps of Content)
│   ├── assets/       ← immagini e allegati
│   └── _templates/   ← template note
├── quartz/           ← sorgente del sito (non toccare)
├── quartz.config.ts  ← configurazione titolo, colori, url
└── .github/
    ├── workflows/deploy.yml  ← deploy automatico su GitHub Pages
    └── SETUP.md              ← questo file
```

## Workflow normale

1. Apri Obsidian con il vault puntato a `content/`
2. Scrivi note
3. Il servizio `mujarrib-sync` fa commit e push automaticamente
4. GitHub Actions pubblica il sito su https://mujarrib.github.io/Mujarrib

## Servizio di sync automatico

Il servizio systemd `mujarrib-sync` osserva la cartella `content/` e fa `git commit + push` ad ogni modifica.

```bash
# stato del servizio
systemctl --user status mujarrib-sync.service

# log in tempo reale
journalctl --user -fu mujarrib-sync.service

# riavviare (es. dopo modifiche allo script)
systemctl --user restart mujarrib-sync.service

# fermare
systemctl --user stop mujarrib-sync.service

# avviare
systemctl --user start mujarrib-sync.service
```

Lo script che esegue il sync si trova in `~/.local/bin/mujarrib-sync.sh`.
Il file di servizio si trova in `~/.config/systemd/user/mujarrib-sync.service`.

## Sviluppo locale del sito

```bash
# anteprima locale (http://localhost:8080)
npx quartz build --serve

# build statica (output in public/)
npx quartz build
```

## Dipendenze

- Node.js v22+
- inotify-tools (`sudo apt-get install inotify-tools`)
