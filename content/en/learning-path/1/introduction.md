+++
style = "introduction"
weight = 1
title = "Introduction"
description = "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus."
categories = ["Introduction"]
+++

## Overview

Phishing messages are usually tied to malicious infrastructure that either seeks to capture login credentials and use them to access an organization’s or individual's systems, or otherwise seeks to deliver a socially-engineered compromise such as a browser or device exploit. They are one of the most common techniques used by malicious actors who aim to compromise NGOs. Very often, an NGO that receives such a message might find it difficult to tell with certainty whether it was suspicious, much less what the identity and goal of the attacker were. Checking with the presumed sender through another channel might be the easiest way to verify whether a message was legitimate. If the sender cannot be contacted or if the message was not legitimate, it might be important to analyze it in more depth. This could allow us to stop such attacks before they compromise an NGO’s systems, prevent them from doing so in the future, and alert others within the community to such attackers and their tactics, techniques, and procedures (TTPs). The results of such investigations are then often shared, either through formal reports or networks, or informal discussions between NGO security professionals.

There have been several cases in which NGOs conducted excellent investigations of malicious infrastructure. These include a joint effort between Bellingcat and several private sector groups [investigating phishing attacks against organizations focusing on Russia-related affairs](https://www.bellingcat.com/news/uk-and-europe/2019/08/10/guccifer-rising-months-long-phishing-campaign-on-protonmail-targets-dozens-of-russia-focused-journalists-and-ngos/), as well as [an HRW-Amnesty project](https://www.hrw.org/the-day-in-human-rights/2022/12/05) which [tracked down phishing attempts](https://www.hrw.org/news/2022/12/05/iran-state-backed-hacking-activists-journalists-politicians) attributed to the Iranian government.

The attacks that this section investigates generally start with a phishing message. The targeted person receives a message (on email, WhatsApp, or another medium) which tries to convince them to click a link. Sometimes, the targeted person will be working for a civil society group and be targeted because of their ties to it, with attackers hoping to dig deeper into the organization’s systems. At other times, attackers will directly target individual researchers or freelancers.

A phishing message will often try to trick the targeted person to enter their credentials such as usernames and passwords (as happened with the attacks documented by Bellingcat and HRW), download malware, or in some cases bypass browser security to directly access information in the browser or automatically install malware. The sections “Passive investigation: Analyze URLs, hostnames, and IP addresses” and “Passive investigation: Analyze email headers” cover these phases of an attack.

When someone receives a credible phishing message, or otherwise is attacked by malicious software, they may need to try to identify the infrastructure (servers, websites, etc.) used by the attackers. Targeted attacks using dedicated or compromised infrastructure are relatively rare, so the section on “Triage” will help you determine whether it is worth spending time on analysis. It’s a good idea to have a solid understanding of incident management in general prior to starting this learning path.

Before you visit any attacker-controlled websites, or download any malware, it is important that you learn to do so safely. This learning path looks at both passive investigation techniques, which do not contact the attacker’s server and are therefore unlikely to alert them of an investigation in progress, and active techniques, which do contact servers. Once you have learned how to do passive investigation, you can move on to active techniques to visit the websites linked to in phishing messages, and analyze them to discover further attacker-controlled infrastructure. This is covered in the “Active investigation: Analyze malicious web pages” section.

If the attacker manages to get malware onto the device of the targeted person or organization, that malware will usually communicate with a command-and-control (C&C) server. Discovering what the attacker’s C&C servers are and how they work is covered in the Malware Analysis learning path. Analyzing malware is another skill you can use to discover more attacker infrastructure.

To better support both the person you’re helping and the greater community, it is important to document and share your findings. This is covered in the “Documenting findings” section. There are several threat and information sharing communities within the wider NGO space, but listing those lies outside of the scope of this learning path.

Lastly, it is important to recognize up-front that many of the investigation techniques in this learning path can alert an attacker that they are being investigated, or even place the investigator—or the wider community— at risk. We divide the techniques into passive and active methods. Use caution when considering active methods of investigation, and first talk to the recipient individual/organization before doing so in order to discuss their threat model and allow them to make an informed choice about proceeding with investigations.

- Passive (appropriate in all cases)
  - Uses information that has already been delivered to the targeted person
  - Does not involve communication with the attacker’s infrastructure
  - Generally easier
  - Does not generally alert the attacker that they are under investigation
  - Safer

- Active
  - Generally only used for malware delivery and command-and-control servers
  - Investigator will interact with the attacker’s infrastructure
  - Often requires more skill and deeper investigation
    - “Cat-and-mouse game” with the attacker
  - May alert the attacker that they are being investigated
  - Risk that the investigator may become compromised or targeted
