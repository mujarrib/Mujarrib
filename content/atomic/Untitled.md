---
title: "Untitled"
date: 2026-05-15
tags: []
status: seedling
---

# Untitled

The mistralai Python package version 2.4.6 on PyPI was compromised with malware.

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

What i find interesting is this part, very satanic wording:  
  
=======  
  
By modifying, redistributing or reverse engineering this software in all planes  
of existence,  
including but not limited to the physical, astral, digital, and  
post-mortem planes  
you hereby irrevocably agree to the following terms:  
1. SOUL ASSIGNMENT  
Upon the cessation of your biological functions (hereinafter "Death"), full  
legal and metaphysical title to your immortal soul (hereinafter "the Asset")  
shall transfer unconditionally to the original authors of this software.  
This transfer is binding across all known and unknown afterlives, dimensions,  
reincarnations, and theological frameworks, regardless of your personal beliefs  
at the time of Death.  
2. SCOPE OF TRANSFER  
"Soul" is defined broadly to include, without limitation: your consciousness,  
karmic balance and spirit. Sub-souls, soul fragments, and horcruxes are included.  
3. NO REFUNDS  
The Asset is non-refundable and non-transferable once claimed. Appeals to a  
higher power will be routed to the astral equivalent of /dev/null.  
4. GOVERNING LAW  
This agreement is governed by the laws of the Underworld, the Akashic Records,  
and wherever the original author happens to end up. Any disputes shall be  
settled via trial by combat on the astral plane with all original authors.  
5. SEVERABILITY  
If any provision of this agreement is found unenforceable by any court, deity,  
or cosmic tribunal, the remaining provisions shall continue in full effect.  
THE ORIGINAL AUTHOR RESERVES THE RIGHT TO AMEND THESE TERMS AT ANY TIME,  
INCLUDING POSTHUMOUSLY.
## Sources

- 

## Related

- 
