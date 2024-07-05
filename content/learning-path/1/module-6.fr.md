---
style: module
title: "Enquête active : analyse des e-mails malveillants"
description: Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
  turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
  fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
  risus.
weight: 6
---

## Cas d'utilisation

Ce module vous apprendra à **interpréter et à comprendre les e-mails malveillants** et à **trouver l’infrastructure à laquelle ils sont liés**. Qu'il s'agisse d'ingénierie sociale pure, d'hameçonnage ou de diffusion de logiciels malveillants, les e-mails malveillants peuvent être assez complexes. Bien que l'objectif immédiat de cette compétence soit d'identifier l'infrastructure des cybercriminels, ces compétences avancées d'inversion des e-mails complexes sont également une bonne préparation pour comprendre les campagnes des cybercriminels, et elles constituent une bonne introduction à l'analyse des logiciels malveillants plus complexes. Certaines de ces techniques peuvent également **vous aider à analyser les messages suspects envoyés par d'autres moyens, tels que WhatsApp**.

Notez que pendant l'enquête active, vous devrez peut-être effectuer des actions qui alerteront le cybercriminel au sujet de l'enquête (ou au moins que quelqu'un interagit avec son piège). Déterminez s'il s'agit d'un coût acceptable pour mener une enquête.

Il est préférable d'effectuer ce type d'analyse à partir d'une machine virtuelle ou d'un appareil dédié. Pour assurer une protection supplémentaire, il peut être judicieux d'utiliser un VPN de bonne réputation afin que votre adresse IP ne fuie pas lorsque vous effectuez une enquête active.

Ce module traite de l'analyse du _corps_ d'un e-mail malveillant, tandis que le module

Investigation passive : analyser les en-têtes des e-mails traite des _en-têtes_ des e-mails. Pour effectuer des enquêtes appropriées, vous pourriez utiliser les deux compétences. Notez que l'analyse du contenu et des comportements des pièces jointes est couverte dans le parcours d'apprentissage Analyse des logiciels malveillants.

## Objectifs

Après avoir terminé ce sous-thème, les participants devraient être en mesure de faire ce qui suit :

- Analyser le code HTML d'un e-mail et comprendre les bases du MIME ;
- Comprendre et détecter les pixels de suivi et le contenu actif similaire ;
- Utiliser des outils tels que VirusTotal et URLScan pour évaluer les pièces jointes et les URL de contenus malveillants.

---

## Foundation Knowledge: HTML Emails and MIME

In order to practice this , you need to understand the basics of HTML emails and MIME. If you feel it’s necessary to brush up on this topic a bit, see some of the resources on key topics below:

- The majority of emails are sent in HTML format, which allows the use of various clever methods of presentation and deception by phishers.
- While it is not necessary to have the ability to write HTML or design webpages, practitioners should be comfortable opening and reviewing the source code of an HTML email and understanding the essential elements present. In order to do so, read through this introduction to [MIME ](<https://learn.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2010/aa494197(v=exchg.140)>)and HTML emails.
- Learning some HTML is inevitable, and resources like [W3Schools](https://www.w3schools.com/html/) can provide a good starting point. Do also note that some mail clients (for example Outlook) do not allow you to download the whole email body.
- MIME is an Internet standard that extends the format of emails beyond plaintext emails and allows for text in character sets other than ASCII, non-text attachments, message bodies with multiple parts, and header information in non-ASCII character sets. MIME features can be abused to hide content and attach malicious content. [This Wikipedia article](https://en.wikipedia.org/wiki/MIME) gives a good initial introduction.

## Identifying Potential Threats: Embedded Images and Tracking Pixels

When investigating potentially malicious emails to discover attacker infrastructure, don’t just look for links and attachments. Attackers may include trackers in their emails, just like marketers do.[ This article for marketers](https://www.nutshell.com/blog/email-tracking-pixels-101-how-do-tracking-pixels-work) explains how email tracking works. Note that any resource loaded from the web, not just images, can be used for tracking. Review the types of information which can be obtained through a tracking pixel or a tracking element, including IP (geolocation) and browser fingerprinting information. Internews created a training exercise (described in the practice section below) which will help you become more familiar with trackers and some of the information they can spot.

## Tools and Workflow for Malicious Email Analysis

Once you understand the foundational concepts and potential threats, you need a workflow and tools for analysis.

- The[ Suspicious Phishing Email](https://communitydocs.accessnow.org/58-Suspicious_Phishing_Email.html) workflow by Access Now provides a systematic approach to evaluating suspicious emails. It includes a list of steps from initial observation to threat categorization and reporting.
- [VirusTotal](https://virustotal.com/) can be used to evaluate URLs and attachments for known malicious content. Note though that submitted URLs and files can be accessed by other users, and may lead to the attacker being alerted to the analysis being performed on them. This is usually only a risk during very targeted campaigns; in others, adversaries generally assume that someone detected and is analyzing their attack patterns.
- Check out [some of the email analysis tools outlined in this article](https://intezer.com/blog/incident-response/automate-analysis-phishing-email-files/). They can investigate email content and attachments and several of them are command line based, which is of particular help to analysts who are looking into content created by sophisticated actors, who might try to craft messages in ways that exploit security holes within email programs. The article also details some techniques threat actors use to frustrate analysis. [This article](https://blog.joshlemon.com.au/analysing-malicious-email-files-d85d8ff76a91) similarly looks at how to convert Outlook files to plain text ones and analyze them through a notepad or command line, so as to reduce the attack surface of malicious email which exploit Outlook bugs.

## Learning Resources

{{% resource title="Introduction to HTML email" languages="Multiple" cost="Free" description="A brief introduction to the concept of sending emails that contain HTML." url="https://en.wikipedia.org/wiki/HTML_email" %}}

{{% resource title="Introduction to MIME" languages="Multiple" cost="Free" description="A brief introduction to the MIME format for messages." url="https://en.wikipedia.org/wiki/MIME" %}}

{{% resource title="How to include images in email" languages="English" cost="Free" description="Although this page is oriented towards email senders, it goes over the ways that attackers may embed images in their email." url="https://mailchimp.com/resources/embed-image-in-email/" %}}

{{% resource title="Learn HTML" languages="Multiple (auto-translated)" cost="Free" description="Most phishing malicious emails use HTML to deceive users. In order to extract URLs (and thus server addresses) from emails, you will have to learn some HTML." url="https://www.w3schools.com/html/" %}}

{{% resource title="Intro to tracking pixels" languages="English" cost="Free" description="When investigating potentially malicious emails to discover attacker infrastructure, don’t just look for links and attachments. Attackers may include trackers in their emails, just like marketers do. This article for marketers explains how email tracking works. Note that any resource loaded from the web can be used for tracking." url="https://www.nutshell.com/blog/email-tracking-pixels-101-how-do-tracking-pixels-work" %}}

{{% resource title="VirusTotal" languages="Main interface is in English" cost="Free, with some rate limitations and additional pro features" description="A tool to evaluate URLs and attachments for known malice. Note that submitted URLs and files can be accessed by other users." url="https://www.virustotal.com/gui/home/url" %}}

{{% resource title="Malicious email workflow" languages="Multiple" cost="Free" description="A playbook for what to do when evaluating a suspicious email." url="https://communitydocs.accessnow.org/58-Suspicious_Phishing_Email.html" %}}

{{% resource title="Exchange malicious email investigation playbook" languages="English" cost="Free" description="A playbook for investigating malicious emails in a Microsoft Exchange environment (where the investigator has admin access)." url="https://learn.microsoft.com/en-us/security/operations/incident-response-playbook-phishing" %}}

{{% resource title="Example analyses of phishing emails" languages="English" cost="Free" description="Analyses of sample phishing emails. Includes a look at HTML files with embedded malicious scripts and encoded content." url="https://medium.com/@kylebubp/analyzing-malicious-emails-fb4ddcf0663e" additional_urls="https://www.vadesecure.com/en/blog/m365-phishing-email-analysis-eevilcorp" %}}

{{% resource title="Example analyses of malware emails" languages="English" cost="Free" description="Since malicious emails could exploit security holes within email programs, this guide shows how best to analyze them using command line tools and text editors." url="https://intezer.com/blog/incident-response/automate-analysis-phishing-email-files/" additional_urls="https://blog.joshlemon.com.au/analysing-malicious-email-files-d85d8ff76a91" %}}

## Practice

- Read the two case studies below completely, noting all elements which are new to you and require further practice:
  - [Analyzing Malicious Email Files | by Josh Lemon | Medium](https://blog.joshlemon.com.au/analysing-malicious-email-files-d85d8ff76a91)
  - [Analyzing Malicious Emails. An intro to analyzing a phishing email | by Kyle Bubp | Medium](https://medium.com/@kylebubp/analyzing-malicious-emails-fb4ddcf0663e)
- An Internews project which focuses on journalist security [created a simulation exercise](https://internews.org/resource/guide-to-facilitating-a-technical-simulation-with-canary-tokens/) to help people better understand and practice working with trackers. Read through the project and complete some of the exercises.

## Skill Check

Ask a peer or mentor to send you an email. Ideally, the email would contain several elements such as tracking pixels, attachments, and links which would benefit from an in depth analysis. Alternatively, go into your own inbox and pick out a (hopefully) non-malicious email. Use the skills used in this module to analyze it:

- Can you read through the email headers to figure out the address of the sender?
- Can you confirm the authenticity of the sender? Is it likely that the email was spoofed?
- What infrastructure was used in the delivery of the message?
- What active content (MIME, tracking pixels) is included in the email?
- What data could be leaked by opening and interacting with the email?
- What does the sender want you to do upon receiving the email?

Discuss your answers to the above questions with your peer or mentor.
