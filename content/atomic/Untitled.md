---
title: "Untitled"
date: 2026-05-15
tags: []
status: seedling
---

# Untitled

One sentence — the core idea.

## Body

![[Pasted image 20260515092930.png]]

If you seen on the news lately  
  
TLDR ;  
  
the mistralai Python package version 2.4.6 on PyPI was compromised with malware.  
  
As soon as your code imports the package, hidden code in client/init.py connects to the IP 83.142.209.194. It downloads a file called transformers.pyz into the /tmp folder  
  
( deliberately named to look like a normal Hugging Face ML library file )  
  
and installs a credential-stealing backdoor on Linux systems.  
  
The malware skips any machine set to Russian language. On top of that, if the system appears to be in Israel or Iran, it has a 1-in-6 chance of running rm -rf / and wiping everything.  
  
Looks like for some weird reason they also targeted Nintendo Cemu Wii U emulator downloads.
## Sources

- 

## Related

- 
